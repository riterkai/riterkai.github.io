// Cross-document view transitions between the portal and the case pages.
// Loaded as a blocking script in <head> so the pagereveal listener exists before
// the first render. The page being left records what kind of move it was via
// kcNavigate(); the page being revealed animates the view-transition snapshots:
//   enter  - the case page springs open out of the card, like an iOS app launch
//   next   - the next case wipes in from the right
//   prev   - the previous case wipes in from the left
//   return - the case page springs back down into its card, like closing an iOS app
(() => {
  const KEY = "kc-nav"
  const SPOT = "kc-spot"
  const EASE = "cubic-bezier(0.7, 0, 0.2, 1)"
  const DURATION = 680

  window.kcNavigate = (data) => {
    sessionStorage.setItem(KEY, JSON.stringify({ ...data, t: Date.now() }))
    if (data.type === "return") {
      sessionStorage.setItem("kc-restore", "1")
      // Return to the card of the project being viewed now (after prev/next hops it may differ from
      // the one first opened), keeping the screen position where that first card sat.
      try {
        const spot = JSON.parse(sessionStorage.getItem(SPOT) || "null")
        sessionStorage.setItem(SPOT, JSON.stringify({ ...(spot || { top: innerHeight * 0.3 }), slug: data.slug, t: Date.now() }))
      } catch {}
    }
  }

  // Reading spot on the portal: the card that was opened and where it sat in the viewport.
  // Coming back restores that, so phone, tablet and desktop all resume where the reader was;
  // anchoring on the card (not a raw scrollY) survives images loading or a rotated device.
  window.kcSaveSpot = (slug) => {
    const el = document.querySelector(`[data-slug="${slug}"]`)
    if (el) sessionStorage.setItem(SPOT, JSON.stringify({ slug, top: el.getBoundingClientRect().top, y: scrollY, t: Date.now() }))
  }
  // Runs once per return: on DOMContentLoaded (browsers without pagereveal, or when the DOM is
  // ready first) or inside the animated return, whichever comes first.
  // Only acts once the card exists (scrolling a half-built page clamps to the top), and is applied
  // again on load in case fonts or images moved things, unless the reader has scrolled meanwhile.
  let restored = null
  function restoreSpot() {
    if (!sessionStorage.getItem("kc-restore")) return
    let spot = null
    try {
      spot = JSON.parse(sessionStorage.getItem(SPOT) || "null")
    } catch {}
    if (!spot || Date.now() - spot.t > 2 * 3600e3) return sessionStorage.removeItem("kc-restore")
    const el = document.querySelector(`[data-slug="${spot.slug}"]`)
    if (!el) return
    sessionStorage.removeItem("kc-restore")
    restored = { el, top: spot.top }
    scrollTo({ top: scrollY + el.getBoundingClientRect().top - spot.top, behavior: "instant" })
  }
  const settle = () => {
    if (!restored) return
    const drift = restored.el.getBoundingClientRect().top - restored.top
    if (Math.abs(drift) > 2) scrollTo({ top: scrollY + drift, behavior: "instant" })
  }
  const userScrolled = () => (restored = null)
  for (const type of ["wheel", "touchstart", "keydown", "pointerdown"]) addEventListener(type, userScrolled, { once: true, passive: true })
  addEventListener("DOMContentLoaded", restoreSpot, { once: true })
  addEventListener("load", () => {
    restoreSpot()
    settle()
    document.fonts?.ready.then(settle)
    setTimeout(() => (restored = null), 3000)
  }, { once: true })

  const inset = (r, radius) => `inset(${r.top}px ${r.right}px ${r.bottom}px ${r.left}px round ${radius}px)`
  const FULL = "inset(0px 0px 0px 0px round 0px)"
  const root = document.documentElement
  // Opt-in is declared here too (not only in portal.css / case-shell.css): this script runs before
  // the first render, while a stylesheet listed after it may not be applied yet, and Chrome then
  // skips the transition ("opt-in disabled") — which made the Mach-E entry randomly not animate.
  // Backdrop under the snapshots. Without it, the edges uncovered while the old page shrinks or
  // slides show the revealed page's own canvas colour (white on light case pages like Mach-E).
  const backdrop = document.createElement("style")
  backdrop.textContent =
    "@view-transition { navigation: auto; } html[data-kc-nav]::view-transition { background: #0a0d12; }"
  document.head.appendChild(backdrop)
  // Phones: filters (blur, brightness) on full-page snapshots are repainted every frame and stutter.
  // There the dimming becomes opacity over the dark backdrop, which the compositor handles.
  const LITE = matchMedia("(max-width: 900px), (pointer: coarse)").matches
  const lite = (keyframes) => {
    if (!LITE || Array.isArray(keyframes) || !keyframes.filter) return keyframes
    const { filter, ...rest } = keyframes
    return { ...rest, opacity: filter.map((f) => +(f.match(/brightness\(([\d.]+)\)/)?.[1] ?? 1)) }
  }
  const run = (pseudo, keyframes, options = {}) =>
    root.animate(lite(keyframes), { duration: DURATION, easing: EASE, fill: "forwards", pseudoElement: pseudo, ...options })

  // Enter works like an iOS app launch: the case page itself is scaled down onto the card and
  // springs open to full screen. The cover only bridges the first few frames, so there is no
  // lingering crossfade. SPRING is a critically damped-ish spring (ζ 0.86, response 0.4 s).
  const SPRING =
    "linear(0, 0.041, 0.138, 0.259, 0.386, 0.506, 0.614, 0.705, 0.781, 0.842, 0.889, 0.925, 0.952, 0.971, 0.984, 0.993, 0.999, 1.002, 1.004, 1.005, 1.005, 1.005, 1.004, 1.003, 1.003, 1.002, 1.002, 1.001, 1)"
  const LAUNCH = 560
  const RADIUS = 14

  // Scale that lets the page cover the card, and the part of the page (in page pixels) that shows
  // through the card at that scale: centred horizontally, from the top so the first screen leads.
  function launch(rect) {
    const w = innerWidth - rect.left - rect.right
    const h = innerHeight - rect.top - rect.bottom
    const s = Math.max(w / innerWidth, h / innerHeight)
    const lw = w / s
    const lh = h / s
    const lx = (innerWidth - lw) / 2
    return { s, rect, local: { left: lx, top: 0, width: lw, height: lh } }
  }

  // A real copy of the card cover laid over the matching part of the page, so the first frame
  // looks exactly like the card; it is scaled together with the page.
  function addThumb(nav, g) {
    const el = document.createElement("div")
    const l = g.local
    Object.assign(el.style, {
      position: "fixed",
      zIndex: "2147483647",
      pointerEvents: "none",
      left: `${l.left}px`,
      top: `${l.top}px`,
      width: `${l.width}px`,
      height: `${l.height}px`,
      borderRadius: `${RADIUS / g.s}px`,
      background: `#0d1117 url("${nav.cover}") center / ${nav.fit === "float" ? "84% auto" : "cover"} no-repeat`,
    })
    root.appendChild(el)
    return el
  }

  addEventListener("pagereveal", (event) => {
    let nav = null
    try {
      nav = JSON.parse(sessionStorage.getItem(KEY) || "null")
    } catch {}
    sessionStorage.removeItem(KEY)
    const vt = event.viewTransition
    const fresh = nav && Date.now() - nav.t <= 6000
    if (!vt) return
    // ready/finished reject when a transition is skipped; that is expected here.
    vt.ready.catch(() => {})
    vt.finished.catch(() => {})
    if (!fresh || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      vt.skipTransition()
      return
    }
    root.dataset.kcNav = nav.type
    const geo = nav.type === "enter" ? launch(nav.rect) : null
    const thumb = geo && nav.cover ? addThumb(nav, geo) : null
    vt.finished.finally(() => {
      delete root.dataset.kcNav
      thumb?.remove()
    }).catch(() => {})

    vt.ready.then(() => {
      if (nav.type === "enter") {
        const { s: k, rect: r, local: l } = geo
        const opts = { duration: LAUNCH, easing: SPRING }
        // The page, pinned at its top-left, is scaled so its visible window sits exactly on the card…
        const from = `translate(${r.left - l.left * k}px, ${r.top - l.top * k}px) scale(${k})`
        const frame = {
          top: l.top,
          right: innerWidth - l.left - l.width,
          bottom: innerHeight - l.top - l.height,
          left: l.left,
        }
        // …then window and scale open together on one spring.
        run(
          "::view-transition-new(root)",
          {
            transformOrigin: ["0 0", "0 0"],
            transform: [from, "translate(0px, 0px) scale(1)"],
            clipPath: [inset(frame, RADIUS / k), FULL],
          },
          opts,
        )
        // The cover hands over to the live page within the first ~fifth of the motion.
        thumb?.animate([{ opacity: 1 }, { opacity: 1, offset: 0.04 }, { opacity: 0, offset: 0.22 }, { opacity: 0 }], {
          duration: LAUNCH,
          fill: "forwards",
        })
        // The portal behind zooms gently towards the card and dims, like the home screen.
        const ox = r.left + (innerWidth - r.left - r.right) / 2
        const oy = r.top + (innerHeight - r.top - r.bottom) / 2
        run(
          "::view-transition-old(root)",
          {
            transformOrigin: [`${ox}px ${oy}px`, `${ox}px ${oy}px`],
            transform: ["scale(1)", "scale(1.08)"],
            filter: ["brightness(1) blur(0px)", "brightness(0.45) blur(4px)"],
          },
          opts,
        )
      } else if (nav.type === "next") {
        run("::view-transition-new(root)", { clipPath: ["inset(0px 0px 0px 100%)", "inset(0px 0px 0px 0%)"] })
        run("::view-transition-old(root)", { filter: ["brightness(1)", "brightness(0.4)"], transform: ["translateX(0)", "translateX(-12%)"] })
      } else if (nav.type === "prev") {
        run("::view-transition-new(root)", { clipPath: ["inset(0px 100% 0px 0px)", "inset(0px 0% 0px 0px)"] })
        run("::view-transition-old(root)", { filter: ["brightness(1)", "brightness(0.4)"], transform: ["translateX(0)", "translateX(12%)"] })
      } else if (nav.type === "return") {
        const target = document.querySelector(`[data-slug="${nav.slug}"] .card-cover`)
        let rect = { top: innerHeight * 0.3, right: innerWidth * 0.3, bottom: innerHeight * 0.3, left: innerWidth * 0.3 }
        restoreSpot()
        if (target) {
          // After "next" hops the current case may not be the card that was opened; bring it in.
          let r = target.getBoundingClientRect()
          if (r.bottom < 0 || r.top > innerHeight) {
            target.scrollIntoView({ block: "center", behavior: "instant" })
            r = target.getBoundingClientRect()
          }
          rect = { top: r.top, right: innerWidth - r.right, bottom: innerHeight - r.bottom, left: r.left }
        }
        // Mirror of the launch: the case page springs back down onto its card (scaled, not
        // cropped), handing over to the card near the end, while the portal zooms back out.
        const { s: k, local: l } = launch(rect)
        const opts = { duration: LAUNCH, easing: SPRING }
        const frame = { top: l.top, right: innerWidth - l.left - l.width, bottom: innerHeight - l.top - l.height, left: l.left }
        run(
          "::view-transition-old(root)",
          {
            transformOrigin: ["0 0", "0 0"],
            transform: ["translate(0px, 0px) scale(1)", `translate(${rect.left - l.left * k}px, ${rect.top - l.top * k}px) scale(${k})`],
            clipPath: [FULL, inset(frame, RADIUS / k)],
          },
          opts,
        )
        run("::view-transition-old(root)", [{ opacity: 1 }, { opacity: 1, offset: 0.45 }, { opacity: 0, offset: 0.75 }, { opacity: 0 }], {
          duration: LAUNCH,
          easing: "linear",
        })
        const ox = rect.left + (innerWidth - rect.left - rect.right) / 2
        const oy = rect.top + (innerHeight - rect.top - rect.bottom) / 2
        run(
          "::view-transition-new(root)",
          {
            transformOrigin: [`${ox}px ${oy}px`, `${ox}px ${oy}px`],
            transform: ["scale(1.08)", "scale(1)"],
            filter: ["brightness(0.45) blur(4px)", "brightness(1) blur(0px)"],
          },
          opts,
        )
      } else {
        vt.skipTransition()
      }
    }).catch(() => {})
  })
})()
