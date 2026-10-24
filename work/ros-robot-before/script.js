(() => {
  const $ = (s, el = document) => el.querySelector(s)
  const $$ = (s, el = document) => [...el.querySelectorAll(s)]

  // ---------- live demo: one platform, carried from the hero down to the demo slot by the scroll ----------
  // The platform is a desktop web app, so it renders on a canvas at least 1200px wide, scaled into
  // its slot. The canvas is cut just below the 速度 chart row (the 角速度 row is scrolled away inside
  // the charts panel), so on a laptop the whole thing fits one screen at ~1:1.
  // Its position follows the scroll: at the top of the page it sits in the hero slot, and as the page
  // scrolls down to the demo it moves and grows into the demo slot — never a gap, never a second copy.
  const float = $("#demo-float")
  const frameBox = $("#demo-frame")
  const iframe = $("iframe", frameBox)
  const shotSlot = $("#shot-slot")
  const demoScreen = $("#demo")
  const mobile = () => matchMedia("(max-width: 760px)").matches
  // Canvas heights: the demo shows the platform down to the 速度 row (canvasH); the canvas itself is
  // one chart row taller (canvasFull), so the hero picture can show a little more when it has room.
  let canvasH = 852 // re-measured from the platform once it has loaded
  let rowH = 81
  let padB = 13 // card padding under the last chart row
  let geo = null

  function pageRect(el) {
    const r = el.getBoundingClientRect()
    return { left: r.left + scrollX, top: r.top + scrollY, width: r.width, height: r.height }
  }
  function canvas() {
    const w = demoScreen.clientWidth
    if (mobile()) return { cw: 1440, ch: 900, full: 900, scale: w / 1440 }
    const scale = Math.min(w / 1200, (innerHeight - 48) / canvasH)
    return { cw: w / scale, ch: canvasH, full: canvasH + rowH, scale }
  }
  // The float has the demo slot's width and the full canvas height; a clip shows the part wanted:
  // down to 速度 in the demo, and in the hero as much as fits (up to one more row).
  function layout() {
    document.documentElement.dataset.demoLive = ""
    const c = canvas()
    demoScreen.style.height = `${c.ch * c.scale}px`
    if (mobile()) shotSlot.style.height = ""
    else {
      const kv = shotSlot.clientWidth / c.cw // hero scale
      const room = (innerHeight - (shotSlot.getBoundingClientRect().top + scrollY) - 48) / kv // space left on the first screen
      shotSlot.style.aspectRatio = "auto"
      shotSlot.style.height = `${Math.max(c.ch * 0.8, Math.min(c.full, room)) * kv}px`
    }
    const demo = pageRect(demoScreen)
    const hero = mobile() ? demo : pageRect(shotSlot)
    geo = { demo, hero, c, end: Math.max(1, demo.top - 24) }
    Object.assign(float.style, { left: `${demo.left}px`, top: `${demo.top}px`, width: `${demo.width}px`, height: `${c.full * c.scale}px` })
    Object.assign(iframe.style, { width: `${c.cw}px`, height: `${c.full}px`, transform: `scale(${c.scale})` })
    // The guide floats over the visible bottom of the demo, above the clipped extra row.
    $(".demo-dock").style.bottom = `${c.full * c.scale - (c.ch - padB) * c.scale + 14}px`
    update()
  }
  const smooth = (t) => t * t * (3 - 2 * t)
  function update() {
    if (!geo) return
    const { demo, hero, c, end } = geo
    const p = mobile() ? 1 : Math.min(1, Math.max(0, scrollY / end))
    const k = smooth(p)
    const s0 = hero.width / demo.width
    const s = s0 + (1 - s0) * k
    const x = (hero.left - demo.left) * (1 - k)
    const y = (hero.top - demo.top) * (1 - k)
    const floatH = c.full * c.scale
    const cropHero = Math.max(0, floatH - hero.height / s0) // float px hidden in the hero
    // In the demo, cut right under the 速度 row (the padding there would show the next row's top).
    const cropDemo = floatH - (c.ch - padB) * c.scale
    const crop = cropHero + (cropDemo - cropHero) * k
    float.style.transform = `translate(${x}px, ${y}px) scale(${s})`
    float.style.clipPath = `inset(0 0 ${crop}px 0 round ${14 / s}px)`
    float.style.borderRadius = `${14 / s}px`
    const live = p > 0.985
    float.dataset.state = live ? "demo" : p < 0.015 ? "hero" : "flying"
  }
  addEventListener("scroll", update, { passive: true }) // only a transform: cheap enough per event
  // Height of the canvas that ends right under the third chart row (速度): the charts panel starts
  // at a fixed offset and its rows have a fixed height; only the panel's height follows the canvas.
  function measure() {
    const d = iframe.contentDocument
    const rows = d?.querySelectorAll(".chart-row")
    const panel = d?.querySelector("#charts-scroll")
    const card = d?.querySelector(".charts-card")
    if (!rows || rows.length < 4 || !panel || !card) return
    const pad = d.documentElement.clientHeight - card.getBoundingClientRect().bottom
    const r = rows[0].offsetHeight
    const need = Math.round(panel.getBoundingClientRect().top + r * 3 + pad)
    if (need > 600 && (Math.abs(need - canvasH) > 1 || r !== rowH || Math.abs(pad - padB) > 1)) {
      canvasH = need
      rowH = r
      padB = pad
      layout()
    }
  }
  iframe.addEventListener("load", () => {
    measure()
    setTimeout(measure, 600)
  })
  addEventListener("resize", () => {
    layout()
    measure()
  })
  addEventListener("load", layout)
  new ResizeObserver(() => layout()).observe(document.body)

  // 直接操作 Demo: scroll down to the demo slot; the platform travels with the scroll.
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
  function toDemo() {
    const target = geo ? geo.end : pageRect(demoScreen).top - 24
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return scrollTo({ top: target, behavior: "instant" })
    const y0 = scrollY
    const D = 950
    let t0 = null
    const frame = (now) => {
      t0 ??= now
      const k = ease(Math.min(1, (now - t0) / D))
      scrollTo({ top: y0 + (target - y0) * k, behavior: "instant" })
      if (k < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }
  $$("[data-demo-open]").forEach((el) => el.addEventListener("click", toDemo))
  layout()

  const doc = () => iframe.contentDocument
  const q = (sel) => doc()?.querySelector(sel)
  const click = (sel) => q(sel)?.click()
  function view(name) {
    const tab = q(`.view-tab[data-view="${name}"]`)
    if (tab && !tab.classList.contains("active")) tab.click()
  }

  const steps = {
    play() {
      view("triple")
      const video = q("video")
      if (!video || video.paused) click("#btn-play")
    },
    seek() {
      view("triple")
      const t = q("#timeline")
      if (!t) return
      t.value = 225
      // Events must come from the iframe's own window, or the demo's listeners ignore them.
      const E = iframe.contentWindow.Event
      t.dispatchEvent(new E("input", { bubbles: true }))
      t.dispatchEvent(new E("change", { bubbles: true }))
    },
    traj() {
      view("triple")
      click('[data-traj-mode="robot-all"]')
    },
    single() {
      view("single")
    },
    ai() {
      view("triple")
      click("#btn-ai-diagnosis")
      setTimeout(() => {
        dodgeAssistant()
      }, 150)
    },
  }
  // The assistant opens as a panel on the right of the platform: slide the step buttons left of it
  // while it is open, and back when it closes.
  const dock = $(".demo-dock")
  function dodgeAssistant() {
    const panel = q("#ai-dialog")
    if (!panel) return
    const scale = float.getBoundingClientRect().width / iframe.offsetWidth
    const open = !!q("#ai-modal.open") // the platform marks the open assistant this way
    dock.style.right = open ? `${panel.getBoundingClientRect().width * scale + 16}px` : ""
    if (open) setTimeout(dodgeAssistant, 500) // keep following it (resize, close)
  }
  const guideButtons = $$("[data-guide]")
  guideButtons.forEach((btn) =>
    btn.addEventListener("click", () => {
      guideButtons.forEach((b) => b.classList.toggle("is-active", b === btn))
      steps[btn.dataset.guide]()
    }),
  )

  // ---------- process steps (from the Vibe Coding workflow) ----------
  const STEPS = [
    {
      key: "need",
      title: "需求定義與釐清",
      kind: "design",
      headline: "純文檔比對效率低，需要更好的可視化工具",
      body: "機器人實驗已用程式記錄移動過程的數據 CSV，但沒有整合平台時，要在多個 CSV 檔之間對比找問題；也沒有同步的實際移動畫面，得重新回放影片找到對應的那一秒。",
      points: ["驗證機器人沿指定軌跡移動時，數據與移動策略是否同步", "對照實際畫面與數據，發現操控問題與指令精度", "檢查機器人軌跡畫面與 MR 虛擬實境畫面是否即時同步"],
      media: [["step-01.jpg?v=2", "實驗影片、log.csv 與 pose.csv：過去需要逐一對照"]],
    },
    {
      key: "wire",
      title: "Wireframe 規劃框架",
      kind: "design",
      headline: "先用 Figma Wireframe 把資訊分區規劃出來",
      body: "第一版只畫結構，不做視覺：雙畫面影像區加上同步的圖表區，讓後面交給 AI 生成時，版面意圖是清楚的。",
      points: ["雙畫面影像區 + 圖表數據同步顯示", "影片畫面與下方折線圖時間軸同步", "只列重點資訊：功率、速度、角速度"],
      media: [["step-02.jpg?v=2", "Figma 繪製的第一版 Wireframe"]],
    },
    {
      key: "stack",
      title: "技術框架選擇",
      kind: "ai",
      headline: "開始 Vibe Coding 前，先讓 AI 確認實作框架",
      body: "比較純 Python 圖表方案與 Web 方案後選擇網頁：HTML5 video 原生支援播放與 seek，兩支影片用 currentTime 就能鎖在一起，本地只需要一個 Flask server。框架先定好，後續加功能才不會推倒重來。",
      points: ["純 Python 數據圖表方案 vs Web Base 方案", "Flask + HTML，影片與 CSV 放在 static/", "圖表點擊直接跳到影片時間點"],
      media: [["step-03.jpg", "技術框架：Flask 提供本地檔案，網頁同步影片與 CSV 圖表"]],
    },
    {
      key: "mvp",
      title: "Claude Code MVP",
      kind: "ai",
      headline: "輸入 Wireframe 與技術方案，第一版即完成核心驗證",
      body: "把 Wireframe 與選定的技術方案交給 Claude Code，直接產出能跑的第一版，用真實的實驗資料驗證核心假設是否成立。",
      points: ["成功讀取機器人移動畫面與 MR 虛擬實境畫面", "解析 CSV 欄位並轉成折線圖", "影片秒數與數據時間軸同步播放"],
      media: [["step-04.jpg", "Claude Code 產出的第一版 MVP"]],
    },
    {
      key: "feature",
      title: "Prompt 新增功能",
      kind: "ai",
      loop: true,
      headline: "能用文字描述的需求，直接用 Prompt 執行",
      body: "以新增產品功能為主的需求，用一句話描述欄位與顯示位置就能完成，讓迭代速度跟得上實驗節奏。",
      points: ["從 CSV 讀取圈數、座標、目標點，以浮層顯示在影片右下角", "數值區塊新增左右輪速度", "速度欄位加下拉，展開左右輪速度兩條圖表"],
      media: [["step-05.jpg?v=2", "實際使用的 Prompt 與新增的浮層資訊、左右輪速度"]],
    },
    {
      key: "figma",
      title: "Figma 精修體驗",
      kind: "design",
      loop: true,
      headline: "在 Figma 確認視覺，再交給 AI 完成體驗優化",
      body: "方向指示與卡片式版面等難以用文字說清楚的需求，先在 Figma 試出樣式，再把修改後的 Frame 回傳給 Claude Code。接著調整圖表密度與顯示模式，讓介面更好讀、數據更好比對。",
      points: ["在 Figma 確認方向標示、灰藍底與白色卡片，再回傳實作", "折線圖降低配色飽和度，加入 LOD，以平均值避免數據過密", "新增單視圖模式，把更多空間留給數據表與多軌圖表", "數據卡片依寬度自適應為一排 2 / 3 / 6 個"],
      media: [["step-06.jpg?v=3", "Figma 精修後回傳實作的畫面"]],
    },
    {
      key: "iteration",
      title: "功能迭代",
      kind: "ai",
      headline: "加入 AI 助手與 DTW，讓診斷更完整",
      body: "在同步回放與數據圖表的基礎上，持續加入 AI 數據診斷助手與 DTW 軌跡比對。前者依當下畫面與數據整理異常和建議，後者量化機器人與 ArUco 軌跡的差異，協助研究者檢查虛實位置是否一致。",
      points: ["AI 助手：擷取當下畫面與 snapshot，支援含圖或只送數據", "With RAG / No RAG 對照，比較規則文件對分析的影響", "DTW：比對機器人與 ArUco 軌跡，顯示距離與正規化結果"],
      media: [["step-07.jpg", "AI 數據診斷助手與 DTW 軌跡比對"]],
    },
  ]

  const flow = $("#flow")
  flow.innerHTML = STEPS.map(
    (s, i) => `<button type="button" role="tab" class="flow-step kind-${s.kind}${s.loop ? " is-loop" : ""}" data-i="${i}" aria-selected="${i === 0}">
      <span class="flow-no">${String(i + 1).padStart(2, "0")}</span><span class="flow-title">${s.title}</span>
      </button>`,
  ).join("")
  const step = $("#step")
  function show(i, focus = false) {
    const s = STEPS[i]
    $$(".flow-step", flow).forEach((b) => b.setAttribute("aria-selected", +b.dataset.i === i))
    if (focus) $$(".flow-step", flow)[i].scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" })
    step.innerHTML = `
      <div class="step-copy">
        <p class="step-no">STEP ${String(i + 1).padStart(2, "0")} / ${String(STEPS.length).padStart(2, "0")}</p>
        <h3>${s.headline}</h3>
        <p>${s.body}</p>
        <div class="step-nav">
          <button type="button" data-go="${i - 1}" ${i === 0 ? "disabled" : ""}>← 上一步</button>
          <button type="button" data-go="${i + 1}" ${i === STEPS.length - 1 ? "disabled" : ""}>下一步 →</button>
        </div>
      </div>
      <div class="step-media media-${s.media.length} media-${s.key}">
        ${s.media.map(([src, cap]) => `<figure><img src="assets/${src}" alt="${cap}" loading="lazy"><figcaption>${cap}</figcaption></figure>`).join("")}
      </div>`
    $$("[data-go]", step).forEach((b) => b.addEventListener("click", () => show(+b.dataset.go, true)))
    step.style.animation = "none"
    void step.offsetWidth
    step.style.animation = ""
  }
  $$(".flow-step", flow).forEach((b) => b.addEventListener("click", () => show(+b.dataset.i)))
  flow.addEventListener("keydown", (e) => {
    const cur = STEPS.findIndex((_, i) => $$(".flow-step", flow)[i].getAttribute("aria-selected") === "true")
    if (e.key === "ArrowRight" && cur < STEPS.length - 1) (show(cur + 1, true), $$(".flow-step", flow)[cur + 1].focus())
    if (e.key === "ArrowLeft" && cur > 0) (show(cur - 1, true), $$(".flow-step", flow)[cur - 1].focus())
  })
  show(0)

  // ---------- header: current section ----------
  const links = $$(".header nav a")
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) links.forEach((a) => a.classList.toggle("is-current", a.getAttribute("href") === `#${e.target.id}`))
      }),
    { rootMargin: "-45% 0px -50% 0px" },
  )
  links.forEach((a) => io.observe($(a.getAttribute("href"))))
})()

// Header: hide while scrolling down, show again on any upward scroll or near the top.
{const header=document.querySelector('.header');let last=scrollY;addEventListener('scroll',()=>{const y=scrollY;if(Math.abs(y-last)<6)return;header.classList.toggle('is-hidden',y>last&&y>header.offsetHeight);last=y},{passive:true})}
