// Shared image viewer for the case pages: one look, one zoom toolbar, one sizing rule.
// Pages keep their own <dialog id="image-dialog"> and click handlers; when a page opens that
// dialog, this takes the image and caption it prepared and shows them here instead.
// Sizing ("符合視窗" = 100%):
//   long pages (taller than a phone screen)  → fit a readable width, scroll up and down
//   panoramas (too flat to read when fitted) → fit a readable height, scroll left and right
//   everything else                          → the whole image fits the window
(() => {
  const STEP = 1.25, MIN = 0.25, MAX = 4

  const el = document.createElement("dialog")
  el.className = "kc-viewer"
  el.setAttribute("aria-label", "圖片放大檢視")
  el.innerHTML = `
    <div class="kcv-bar"><p class="kcv-title"></p><button type="button" class="kcv-close" aria-label="關閉">×</button></div>
    <div class="kcv-tools">
      <button type="button" data-z="out" aria-label="縮小">−</button>
      <output class="kcv-level">100%</output>
      <button type="button" data-z="in" aria-label="放大">+</button>
      <button type="button" data-z="fit" class="kcv-fit">符合視窗</button>
      <span class="kcv-count" hidden></span>
      <span class="kcv-hint">可捲動查看細節 · Esc 關閉</span>
    </div>
    <div class="kcv-body"><div class="kcv-stage"><img alt=""></div>
    <button type="button" class="kcv-nav kcv-prev" data-step="-1" aria-label="上一張" hidden>‹</button>
    <button type="button" class="kcv-nav kcv-next" data-step="1" aria-label="下一張" hidden>›</button></div>`
  const title = el.querySelector(".kcv-title")
  const stage = el.querySelector(".kcv-stage")
  const img = stage.querySelector("img")
  const level = el.querySelector(".kcv-level")
  const count = el.querySelector(".kcv-count")
  const navs = el.querySelectorAll(".kcv-nav")
  let zoom = 1, base = null, source = null, opener = null, gallery = null

  function measure() {
    const cw = stage.clientWidth - 32, ch = stage.clientHeight - 32
    const nw = img.naturalWidth || 1, nh = img.naturalHeight || 1
    const contain = Math.min(cw / nw, ch / nh)
    if (nh / nw > 2.6) {
      // Long page: desktop captures (≥1400px wide) use the window width; phone captures, retina
      // ones included, are as wide as a single phone screen fitted to the window height, so every
      // phone screen in a project opens at the same scale.
      const w = Math.min(cw, nw >= 1400 ? cw : ch * 0.462)
      return { w, h: (w * nh) / nw }
    }
    if (nh * contain < ch * 0.5 && nw > nh) {
      const h = Math.min(ch, nh)
      return { w: (h * nw) / nh, h }
    }
    return { w: nw * contain, h: nh * contain }
  }
  function apply() {
    if (!base) return
    img.style.width = `${Math.round(base.w * zoom)}px`
    img.style.height = `${Math.round(base.h * zoom)}px`
    level.textContent = `${Math.round(zoom * 100)}%`
  }
  function fit() {
    base = measure()
    zoom = 1
    apply()
    stage.scrollTop = 0
    stage.scrollLeft = 0
  }
  function setZoom(next) {
    // Keep the point at the centre of the view in place while zooming.
    const cx = (stage.scrollLeft + stage.clientWidth / 2) / (img.offsetWidth || 1)
    const cy = (stage.scrollTop + stage.clientHeight / 2) / (img.offsetHeight || 1)
    zoom = Math.min(MAX, Math.max(MIN, next))
    apply()
    stage.scrollLeft = cx * img.offsetWidth - stage.clientWidth / 2
    stage.scrollTop = cy * img.offsetHeight - stage.clientHeight / 2
  }

  el.addEventListener("click", (e) => {
    const step = e.target.closest("[data-step]")?.dataset.step
    if (step) return go(+step)
    const z = e.target.closest("[data-z]")?.dataset.z
    if (z === "in") setZoom(zoom * STEP)
    else if (z === "out") setZoom(zoom / STEP)
    else if (z === "fit") fit()
    else if (e.target.closest(".kcv-close") || e.target === el || e.target === stage) el.close()
  })
  addEventListener("keydown", (e) => {
    if (!el.open || !gallery) return
    if (e.key === "ArrowRight") go(1)
    else if (e.key === "ArrowLeft") go(-1)
  })
  addEventListener("resize", () => el.open && base && ((base = measure()), apply()))
  el.addEventListener("close", () => {
    document.documentElement.classList.remove("kcv-open")
    img.removeAttribute("src")
    base = null
    // Let the page run its own close handling (scroll lock, focus return).
    source?.dispatchEvent(new Event("close"))
    opener?.focus?.({ preventScroll: true })
  })

  function load(src, caption) {
    title.textContent = caption || ""
    img.alt = caption || ""
    base = null
    img.style.width = img.style.height = ""
    img.onload = fit
    img.src = src
    if (gallery) count.textContent = `${gallery.index + 1} / ${gallery.items.length}`
    if (img.complete && img.naturalWidth) fit()
  }
  function go(step) {
    if (!gallery) return
    const n = gallery.items.length
    gallery.index = (gallery.index + step + n) % n
    const it = gallery.items[gallery.index]
    load(it.src, it.caption)
    gallery.onChange?.(gallery.index)
  }
  // gallery (optional): { items: [{ src, caption }], index, onChange } adds previous / next.
  function open(src, caption, from, list) {
    source = from || null
    gallery = list || null
    opener = document.activeElement
    count.hidden = !gallery
    navs.forEach((b) => (b.hidden = !gallery || gallery.items.length < 2))
    if (!el.isConnected) document.body.appendChild(el)
    document.documentElement.classList.add("kcv-open")
    el.showModal()
    load(src, caption)
  }
  window.kcViewer = { open }

  // Pages open their own #image-dialog; read what they put in it once their handler finishes.
  const showModal = HTMLDialogElement.prototype.showModal
  HTMLDialogElement.prototype.showModal = function () {
    if (this.id !== "image-dialog") return showModal.call(this)
    const dialog = this
    queueMicrotask(() => {
      const pic = dialog.querySelector("#dialog-image") || dialog.querySelector("img")
      const cap = dialog.querySelector("#dialog-caption, #image-caption, .dialog-title, figcaption")
      const src = pic?.currentSrc || pic?.getAttribute("src")
      if (src) open(src, (cap?.textContent || pic.alt || "").trim(), dialog)
    })
  }
})()
