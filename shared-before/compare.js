// Temporary Before / After switch for reviewing a case-page revision.
// Load it blocking in <head> (no defer), so the page can stay hidden until it is back at the
// reading spot — otherwise it first paints at the top and then jumps:
// <script src="../../shared/compare.js" data-before="../htc-vr-before/" data-after="../htc-vr/" data-current="after"></script>
// The spot is anchored to the same section/heading in both versions (by order), not a scroll
// fraction, so differing page heights or late-loading images don't misalign the comparison.
// HIDDEN: set to false to show the Before / After switch again.
const KC_COMPARE_HIDDEN = true;
(() => {
  if (KC_COMPARE_HIDDEN) return
  const s = document.currentScript.dataset
  const KEY = "kc-compare-spot"
  const root = document.documentElement
  const anchors = () => [...document.querySelectorAll("main section, main h2, main h3, main article, main figure, footer")]

  let spot = null
  try {
    spot = JSON.parse(sessionStorage.getItem(KEY) || "null")
  } catch {}
  sessionStorage.removeItem(KEY)
  if (spot) {
    history.scrollRestoration = "manual"
    root.style.visibility = "hidden"
  }

  const restore = () => {
    const el = anchors()[spot.i]
    if (el) scrollTo({ top: scrollY + el.getBoundingClientRect().top - spot.top, behavior: "instant" })
  }

  addEventListener("DOMContentLoaded", () => {
    const bar = document.createElement("div")
    bar.className = "kc-compare"
    bar.innerHTML = `<span>版本比對</span>
      <a href="${s.before}" ${s.current === "before" ? 'aria-current="page"' : ""}>Before</a>
      <a href="${s.after}" ${s.current === "after" ? 'aria-current="page"' : ""}>After</a>`
    const style = document.createElement("style")
    style.textContent = `
      .kc-compare { position: fixed; top: 78px; right: 20px; z-index: 2147483001; display: flex; align-items: center; gap: 2px;
        padding: 4px; border-radius: 999px; background: rgb(10 13 18 / 0.86); border: 1px solid rgb(255 255 255 / 0.16);
        -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px); box-shadow: 0 8px 24px rgb(0 0 0 / 0.3);
        font: 600 12px/1 "Inter", "Noto Sans TC", system-ui, sans-serif; color: #8b97a6; }
      .kc-compare span { padding: 0 10px; font-weight: 500; }
      .kc-compare a { padding: 8px 14px; border-radius: 999px; color: #e9eef4; text-decoration: none; }
      .kc-compare a[aria-current] { background: #e9eef4; color: #0a0d12; }
      .kc-compare a:not([aria-current]):hover { background: rgb(255 255 255 / 0.1); }
      @media (max-width: 700px) { .kc-compare { top: auto; bottom: 72px; right: 12px; } }`
    document.head.appendChild(style)
    document.body.appendChild(bar)

    bar.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        // The last anchor that has reached the top of the viewport is what the reader is on.
        const list = anchors()
        let i = 0
        list.forEach((el, k) => {
          if (el.getBoundingClientRect().top <= 90) i = k
        })
        const top = list[i] ? list[i].getBoundingClientRect().top : 0
        sessionStorage.setItem(KEY, JSON.stringify({ i, top }))
      }),
    )

    if (!spot) return
    restore()
    // Show once images have laid out (or after a short cap), re-aligning first.
    let shown = false
    const show = () => {
      if (shown) return
      shown = true
      restore()
      root.style.visibility = ""
    }
    addEventListener("load", show, { once: true })
    setTimeout(show, 1200)
  })
})()
