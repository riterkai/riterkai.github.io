// Injected into every case page (see scripts/sync_cases.py). Adds the shared dock
// (previous project / back to portal / next project).
(() => {
  const script = document.currentScript
  const slug = script.dataset.slug
  const root = new URL("../", script.src).href // shared/ lives at the portfolio root
  const projects = window.KC_PROJECTS || []
  const live = projects.filter((p) => p.status === "live")
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]
  if (!project) return
  const at = live.indexOf(project)
  const next = live[(at + 1) % live.length]
  const prev = live[(at - 1 + live.length) % live.length]

  // Page accent for shared parts (KV button, rings), with a readable ink colour on top of it.
  // Where the KV title has a highlight colour, that colour is the page's main colour.
  const TITLE_ACCENT = {
    "ai-glasses": "#6fd4ff",
    beanfun: "#1dbd70",
    "ros-robot": "#1d5fc4",
    "shopline-group-buy": "#275dd3",
    "design-to-code": "#7fd8f3",
    "brand-ui": "#ffffff",
    "pos-revamp": "#48c4a0",
  }
  project.accent = TITLE_ACCENT[slug] || project.accent
  {
    const [r, g, b] = project.accent.match(/[0-9a-f]{2}/gi).map((h) => parseInt(h, 16))
    const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
    document.documentElement.style.setProperty("--kc-accent", project.accent)
    document.documentElement.style.setProperty("--kc-accent-ink", slug === "pos-revamp" ? "#ffffff" : lum > 0.55 ? "#0a0d12" : "#ffffff")
  }

  // ---------- header brand (Figma 271:45314): the same glowing ring as the dock + KEVIN CHANG / PORTFOLIO ----------
  const brand = document.querySelector("header .brand")
  if (brand) {
    const header = brand.closest("header")
    header.classList.add("kc-header")
    // Not sticky: the dock already covers moving between projects and home, so the header scrolls
    // away with the page. A fixed header becomes absolute (stays over the hero, no layout shift).
    header.classList.add(getComputedStyle(header).position === "fixed" ? "kc-header--overlay" : "kc-header--flow")
    brand.className = "brand kc-brand"
    brand.style.setProperty("--kc-accent", project.accent)
    // The brand goes back to the portfolio home (same as the dock's ring), not to the page top.
    brand.href = `${root}`
    brand.setAttribute("aria-label", "回作品集首頁")
    brand.addEventListener("click", () => window.kcNavigate?.({ type: "return", slug }))
    // Right-hand project labels are dropped: brand + page nav only.
    brand.closest("header").querySelectorAll(":scope > :not(.brand):not(nav)").forEach((el) => el.remove())
    brand.innerHTML = `<span class="kc-ring" aria-hidden="true"></span><span class="kc-brand-text"><b>KEVIN CHANG</b><small>PORTFOLIO</small></span>`
    // On a light header (dark text) the glow would smudge: plain ring there, like the light dock.
    const [r, g, b] = getComputedStyle(brand).color.match(/\d+/g).map(Number)
    brand.classList.toggle("kc-brand--light", (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.5)
  }

  // ---------- footer: one form on every case page (as on AI Glasses) ----------
  const FOOTER_TITLES = {
    "htc-vr": "3D OBJECT MANIPULATION",
    "ai-glasses": "VIVE EAGLE",
    "mach-e": "MUSTANG MACH-E",
    "ros-robot": "ROS ROBOT PLATFORM",
    "design-to-code": "DESIGN-TO-CODE",
    beanfun: "BEANFUN SHOW",
    "shopline-group-buy": "ONE-PAGE GROUP BUYING",
    "brand-ui": "BRAND UI",
    "pos-revamp": "POS REDESIGN",
  }
  const oldFooter = [...document.querySelectorAll("footer")].pop()
  const footer = document.createElement("footer")
  footer.className = "kc-footer"
  footer.innerHTML = `<div class="kc-footer-inner"><div><span>KEVIN CHANG / UX PORTFOLIO</span><strong>${FOOTER_TITLES[slug] || project.title}</strong></div><a href="#top">BACK TO TOP <span aria-hidden="true">↑</span></a></div>`
  footer.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault()
    scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })
  })
  if (oldFooter) oldFooter.replaceWith(footer)
  else document.body.appendChild(footer)
  // Footer tone follows the page: light pages get a light footer, dark pages a dark one.
  if (["beanfun", "pos-revamp", "ros-robot", "shopline-group-buy"].includes(slug)) footer.classList.add("kc-footer--light")

  // ---------- section labels ("01 / HOW IT WORKS"): one format on every case page ----------
  // No leading dash, no rule above, no second label on the right; mono, accent colour.
  {
    const isLabel = (el) => /^0\d\s*\/\s*\S/.test(el.textContent.trim()) && el.textContent.trim().length < 60
    // Only the section's own label: the first such line in each top-level section.
    document.querySelectorAll("main section").forEach((sec) => {
      if (sec.matches("[data-kv], .hero") || sec.parentElement.closest("main section")) return
      const el = [...sec.querySelectorAll("*")].find((x) => isLabel(x) && ![...x.children].some(isLabel))
      if (!el) return
      mark(el)
    })
    // Labels outside a section's first line but with a section-label class (e.g. POS 03).
    document.querySelectorAll("main .section-no, main .section-id > :first-child").forEach((el) => {
      if (isLabel(el) && !el.closest("[data-kv], .hero")) mark(el)
    })
    // Numbered from 01 in page order (Brand UI's "01 / 04" are project counters, left as they are).
    if (slug !== "brand-ui") {
      ;[...document.querySelectorAll(".kc-label")].forEach((el, i) => {
        const n = String(i + 1).padStart(2, "0")
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
        for (let t; (t = walker.nextNode()); ) if (/0\d/.test(t.nodeValue)) { t.nodeValue = t.nodeValue.replace(/0\d/, n); break }
      })
    }
  }
  function mark(el) {
      if (el.classList.contains("kc-label")) return
      el.classList.add("kc-label")
      const row = el.parentElement
      if (row && /section-(id|topline)/.test(row.className)) {
        row.classList.add("kc-label-row")
        ;[...row.children].forEach((c) => c !== el && (c.hidden = true))
      }
  }

  // ---------- dock ----------
  const dock = document.createElement("nav")
  dock.className = "kc-dock"
  dock.setAttribute("aria-label", "作品集導覽")
  dock.style.setProperty("--kc-accent", project.accent)
  dock.innerHTML = `
    <a class="kc-dock-arrow kc-dock-prev" href="${root}work/${prev.slug}/" title="上一個：${prev.title}" aria-label="上一個作品"><span aria-hidden="true">←</span></a>
    <a class="kc-dock-home" href="${root}" title="回作品集首頁" aria-label="回作品集首頁"><span class="kc-dock-mark" aria-hidden="true"></span></a>
    <a class="kc-dock-arrow kc-dock-next" href="${root}work/${next.slug}/" title="下一個：${next.title}" aria-label="下一個作品"><span aria-hidden="true">→</span></a>`
  document.body.appendChild(dock)

  // Light / dark: the dock takes the tone of what is behind it, so it stays quiet on both dark and
  // light sections of the same page. Sampled on scroll from the background colour under its centre.
  const tone = () => {
    const r = dock.getBoundingClientRect()
    dock.style.pointerEvents = "none"
    const under = document.elementsFromPoint(r.left + r.width / 2, r.top + r.height / 2).find((el) => !dock.contains(el))
    dock.style.pointerEvents = ""
    let el = under
    let rgb = null
    while (el && !rgb) {
      const m = getComputedStyle(el).backgroundColor.match(/[\d.]+/g)
      if (m && (m[3] === undefined || +m[3] > 0.5)) rgb = m.slice(0, 3).map(Number)
      el = el.parentElement
    }
    if (!rgb || !under || under === document.documentElement) return // page not laid out yet (entry transition)
    const lum = (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 255
    dock.classList.toggle("kc-dock--light", lum > 0.6)
  }
  let queued = false
  const schedule = () => {
    if (queued) return
    queued = true
    setTimeout(() => {
      queued = false
      tone()
    }, 80)
  }
  addEventListener("scroll", schedule, { passive: true })
  addEventListener("resize", schedule)
  addEventListener("load", tone)
  tone()
  // Entering through a card transition the page may not be hit-testable yet: check again shortly.
  setTimeout(tone, 700)
  setTimeout(tone, 1500)

  // Transitions are played by shared/transition.js on the page being revealed.
  dock.querySelector(".kc-dock-home").addEventListener("click", () => window.kcNavigate?.({ type: "return", slug }))
  dock.querySelector(".kc-dock-prev").addEventListener("click", () => window.kcNavigate?.({ type: "prev" }))
  dock.querySelector(".kc-dock-next").addEventListener("click", () => window.kcNavigate?.({ type: "next" }))
})()

// KV: line the picture's vertical centre up with the centre of the text block (see case-kv.css).
{
  const kv = document.querySelector('[data-kv]'), copy = kv && kv.querySelector('[data-kv-copy]'), art = kv && kv.querySelector('[data-kv-art]')
  if (copy && art && !kv.querySelector('[data-kv-photo]')) {
    const place = () => {
      if (innerWidth <= 760) { art.style.removeProperty('--kv-art-shift'); return }
      // Rendered sizes, converted back into the picture's own (possibly zoomed) CSS pixels.
      const artH = art.getBoundingClientRect().height, scale = artH / (art.offsetHeight || artH)
      art.style.setProperty('--kv-art-shift', (copy.getBoundingClientRect().height - artH) / 2 / scale + 'px')
    }
    place(); addEventListener('resize', place); addEventListener('load', place)
    if (document.fonts) document.fonts.ready.then(place)
  }
}
