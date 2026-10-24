// Homepage hero:
// - scroll progress through the hero (0 → 1) as --hs, driving the parallax in hero.css
// - a few soft particles that wander slowly across the page (after engaged.be)
(() => {
  // Phone (≤900px) has no scroll parallax, so skip the per-scroll style update there.
  const wide = matchMedia("(min-width: 901px)")
  const set = () => {
    if (wide.matches) document.body.style.setProperty("--hs", Math.min(Math.max(scrollY / (innerHeight * 0.9), 0), 1).toFixed(3))
  }
  addEventListener("scroll", set, { passive: true })
  wide.addEventListener("change", set)
  set()

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return
  const canvas = document.createElement("canvas")
  canvas.className = "dust"
  canvas.setAttribute("aria-hidden", "true")
  document.body.prepend(canvas)
  const ctx = canvas.getContext("2d")
  const COLORS = ["150 225 255", "120 170 255", "170 160 255"]
  let w = 0, h = 0, dpr = 1, dots = []

  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2)
    w = innerWidth; h = innerHeight
    canvas.width = w * dpr; canvas.height = h * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    const n = 15
    // Start evenly spread: one dot per cell of a 5×3 grid, jittered inside its cell.
    const cols = 5, rows = 3
    if (!dots.length) dots = Array.from({ length: n }, (_, i) => spawn(i % cols, Math.floor(i / cols), cols, rows))
  }
  function spawn(cx, cy, cols, rows) {
    const cw = innerWidth / cols, ch = innerHeight / rows
    return {
      x: (cx + 0.2 + Math.random() * 0.6) * cw, y: (cy + 0.2 + Math.random() * 0.6) * ch,
      r: 0.8 + Math.random() * 1.8,
      a: Math.random() * Math.PI * 2,          // heading, wanders slowly
      s: 0.08 + Math.random() * 0.22,          // px per frame
      p: Math.random() * Math.PI * 2,          // twinkle phase
      c: COLORS[(Math.random() * COLORS.length) | 0],
      z: 0.3 + Math.random() * 0.7,            // depth: nearer dots drift with scroll more
    }
  }
  addEventListener("resize", resize)
  resize()

  let lastY = scrollY
  function frame(t) {
    const dy = scrollY - lastY; lastY = scrollY
    ctx.clearRect(0, 0, w, h)
    for (const d of dots) {
      d.a += (Math.random() - 0.5) * 0.04
      d.x += Math.cos(d.a) * d.s
      d.y += Math.sin(d.a) * d.s - dy * d.z * 0.15
      if (d.x < -10) d.x = w + 10; else if (d.x > w + 10) d.x = -10
      if (d.y < -10) d.y = h + 10; else if (d.y > h + 10) d.y = -10
      const tw = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t / 900 + d.p))
      const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 4)
      g.addColorStop(0, `rgb(${d.c} / ${0.45 * tw})`)
      g.addColorStop(0.35, `rgb(${d.c} / ${0.12 * tw})`)
      g.addColorStop(1, `rgb(${d.c} / 0)`)
      ctx.fillStyle = g
      ctx.beginPath(); ctx.arc(d.x, d.y, d.r * 4, 0, Math.PI * 2); ctx.fill()
    }
    if (!document.hidden) requestAnimationFrame(frame)
    else document.addEventListener("visibilitychange", () => requestAnimationFrame(frame), { once: true })
  }
  requestAnimationFrame(frame)
})()
