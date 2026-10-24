// Cross-document view transitions between the portal and the case pages.
// Loaded as a blocking script in <head> so the pagereveal listener exists before
// the first render. The page being left records what kind of move it was via
// kcNavigate(); the page being revealed animates the view-transition snapshots:
//   enter  - the card thumbnail grows into the case page and dissolves into its first screen
//   next   - the next case wipes in from the right
//   return - the case page shrinks back into its card on the portal
(() => {
  const KEY = "kc-nav"
  const EASE = "cubic-bezier(0.7, 0, 0.2, 1)"
  const DURATION = 680

  window.kcNavigate = (data) => {
    sessionStorage.setItem(KEY, JSON.stringify({ ...data, t: Date.now() }))
  }

  const inset = (r, radius) => `inset(${r.top}px ${r.right}px ${r.bottom}px ${r.left}px round ${radius}px)`
  const FULL = "inset(0px 0px 0px 0px round 0px)"
  const root = document.documentElement
  const run = (pseudo, keyframes, options = {}) =>
    root.animate(keyframes, { duration: DURATION, easing: EASE, fill: "forwards", pseudoElement: pseudo, ...options })

  // A real copy of the card cover on the revealed page (sharper than scaling the old snapshot).
  function addThumb(nav) {
    const el = document.createElement("div")
    const r = nav.rect
    Object.assign(el.style, {
      position: "fixed",
      zIndex: "2147483647",
      pointerEvents: "none",
      left: `${r.left}px`,
      top: `${r.top}px`,
      width: `${innerWidth - r.left - r.right}px`,
      height: `${innerHeight - r.top - r.bottom}px`,
      borderRadius: "14px",
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
    if (!vt) return
    // ready/finished reject when a transition is skipped; that is expected here.
    vt.ready.catch(() => {})
    vt.finished.catch(() => {})
    if (!nav || Date.now() - nav.t > 6000 || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      vt.skipTransition()
      return
    }
    root.dataset.kcNav = nav.type
    const thumb = nav.type === "enter" && nav.cover ? addThumb(nav) : null
    vt.finished.finally(() => {
      delete root.dataset.kcNav
      thumb?.remove()
    }).catch(() => {})

    vt.ready.then(() => {
      if (nav.type === "enter") {
        const r = nav.rect
        const w = innerWidth - r.left - r.right
        const h = innerHeight - r.top - r.bottom
        run("::view-transition-new(root)", { clipPath: [inset(r, 14), FULL] })
        // The card's cover rides the same expanding frame and dissolves into the first screen.
        thumb?.animate(
          [
            { left: `${r.left}px`, top: `${r.top}px`, width: `${w}px`, height: `${h}px`, borderRadius: "14px", opacity: 1 },
            { opacity: 1, offset: 0.3 },
            { opacity: 0, offset: 0.8 },
            { left: "0px", top: "0px", width: `${innerWidth}px`, height: `${innerHeight}px`, borderRadius: "0px", opacity: 0 },
          ],
          { duration: DURATION, easing: EASE, fill: "forwards" },
        ).finished.then(() => thumb.remove())
        run("::view-transition-old(root)", { filter: ["brightness(1)", "brightness(0.45)"], transform: ["scale(1)", "scale(0.97)"] })
      } else if (nav.type === "next") {
        run("::view-transition-new(root)", { clipPath: ["inset(0px 0px 0px 100%)", "inset(0px 0px 0px 0%)"] })
        run("::view-transition-old(root)", { filter: ["brightness(1)", "brightness(0.4)"], transform: ["translateX(0)", "translateX(-12%)"] })
      } else if (nav.type === "return") {
        const target = document.querySelector(`[data-slug="${nav.slug}"] .card-cover`)
        let rect = { top: innerHeight * 0.3, right: innerWidth * 0.3, bottom: innerHeight * 0.3, left: innerWidth * 0.3 }
        if (target) {
          target.scrollIntoView({ block: "center", behavior: "instant" })
          const r = target.getBoundingClientRect()
          rect = { top: r.top, right: innerWidth - r.right, bottom: innerHeight - r.bottom, left: r.left }
        }
        run("::view-transition-old(root)", [
          { clipPath: FULL, opacity: 1 },
          { clipPath: inset(rect, 14), opacity: 1, offset: 0.85 },
          { clipPath: inset(rect, 14), opacity: 0 },
        ])
        run("::view-transition-new(root)", { filter: ["brightness(0.45)", "brightness(1)"], transform: ["scale(0.97)", "scale(1)"] })
      } else {
        vt.skipTransition()
      }
    }).catch(() => {})
  })
})()
