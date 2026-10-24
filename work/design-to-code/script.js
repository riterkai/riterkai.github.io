(() => {
  const $ = (s, el = document) => el.querySelector(s)
  const $$ = (s, el = document) => [...el.querySelectorAll(s)]
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches
  const wait = (ms) => new Promise((r) => setTimeout(r, reduceMotion ? 0 : ms))

  // ---------- iframes rendered at their native size, scaled to fit ----------
  function fitScalers() {
    $$(".scaler").forEach((box) => {
      const frame = box.querySelector("iframe")
      const w = +box.dataset.width
      const h = +box.dataset.height
      // Fill the box: keep the native width, stretch the height to the box.
      const scale = box.clientWidth / w
      frame.style.width = `${w}px`
      frame.style.height = `${Math.max(h * 0.5, box.clientHeight / scale)}px`
      frame.style.transform = `scale(${scale})`
    })
  }
  new ResizeObserver(fitScalers).observe(document.body)

  // ---------- 02 demo ----------
  const INPUTS = {
    ui: {
      thumbs: ["assets/ui-select.jpg.webp", "assets/ui-dialog.jpg.webp", "assets/ui-after.jpg.webp"],
      prompt:
        "以下為三張UI圖互動流程：在Gallery頁，點右上 Select 進入編輯模式，選取照片後出現 Bottom Sheet，點垃圾桶跳出確認視窗，click delete 就會刪除，請依照Guidelines.md製作。",
      used: ["AppBarMain", "Nav", "Button", "CheckboxSingle", "BottomSheet", "Dialog", "Icon", "GestureBar"],
      caption: "<b>AI 生成的相簿原型 · 約 90% 還原</b><br>可直接操作：Select → 選照片 → Delete",
    },
    wf: {
      thumbs: ["assets/wf-input.jpg.webp"],
      prompt:
        "以下為UX圖互動流程：在Gallery頁，點右上 Select 進入編輯模式，選取照片後出現 Bottom Sheet，點垃圾桶跳出確認視窗，click delete 就會刪除，請依照Guidelines.md製作。",
      used: ["AppBarMain", "Nav", "Button", "CheckboxSingle", "BottomSheet", "Dialog", "GestureBar"],
      steps: [
        ["assets/wf-select.jpg.webp", "① 選取 3 個項目"],
        ["assets/wf-dialog.jpg.webp", "② 刪除確認"],
        ["assets/wf-after.jpg.webp", "③ 刪除後版面"],
      ],
      caption: "<b>Wireframe 生成 · 約 70% 還原</b><br>結構與互動已套用組件，視覺需再 Prompt 精修",
    },
  }
  const ALL_USED = ["AppBarMain", "Nav", "Button", "CheckboxSingle", "BottomSheet", "Dialog", "Icon", "GestureBar", "ScrollContainer"]

  const stage = $(".stage")
  const thumbs = $("#input-thumbs")
  const prompt = $("#input-prompt")
  const usedList = $("#used-list")
  const generate = $("#generate")
  const generateLabel = $("#generate-label")
  const screenInput = $("#screen-input")
  const progress = $("#screen-progress")
  const result = $("#screen-result")
  const protoFrame = $("#proto-frame")
  const wfResult = $("#wf-result")
  const caption = $("#phone-caption")
  let current = "ui"
  let wfTimer = null
  let runId = 0
  // Phone: a shorter prompt and a one-word button so the demo fits one screen.
  const isPhone = () => matchMedia("(max-width: 760px)").matches
  const SHORT_PROMPT = {
    ui: "依照 Guidelines.md，把 UI 圖做成可選取、刪除的 Gallery 原型",
    wf: "依照 Guidelines.md，把 UX 圖做成可選取、刪除的 Gallery 原型",
  }
  const setLabel = (text) => { generateLabel.textContent = isPhone() && text !== "生成中…" ? "生成" : text }

  usedList.innerHTML = ALL_USED.map((n) => `<span data-name="${n}">${n}</span>`).join("")

  function selectInput(key) {
    current = key
    runId++
    clearInterval(wfTimer)
    $$(".demo-controls .seg button").forEach((b) => b.setAttribute("aria-selected", b.dataset.input === key))
    const data = INPUTS[key]
    thumbs.innerHTML = data.thumbs.map((src) => `<img src="${src}" alt="">`).join("")
    prompt.textContent = isPhone() ? SHORT_PROMPT[key] : data.prompt
    screenInput.hidden = false
    progress.hidden = true
    result.hidden = true
    $$("span", usedList).forEach((s) => s.classList.remove("is-on"))
    generate.disabled = false
    generate.classList.remove("is-busy")
    setLabel("生成原型")
    caption.textContent = "點左邊的 Prompt 送出，看 AI 用組件庫組出畫面"
  }

  async function run() {
    const id = ++runId
    const data = INPUTS[current]
    clearInterval(wfTimer)
    generate.disabled = true
    generate.classList.add("is-busy")
    setLabel("生成中…")
    stage.classList.add("is-running")
    screenInput.hidden = true
    result.hidden = true
    progress.hidden = false
    const steps = $$("li", progress)
    steps.forEach((li) => li.classList.remove("is-done"))
    $$("span", usedList).forEach((s) => s.classList.remove("is-on"))
    caption.textContent = "AI 依規則調用組件中…"

    for (let i = 0; i < steps.length; i++) {
      await wait(520)
      if (id !== runId) return
      steps[i].classList.add("is-done")
      if (i === 2) {
        for (const name of data.used) {
          usedList.querySelector(`[data-name="${name}"]`)?.classList.add("is-on")
          await wait(110)
          if (id !== runId) return
        }
      }
    }
    await wait(380)
    if (id !== runId) return

    progress.hidden = true
    result.hidden = false
    // Re-trigger the reveal animation each run.
    result.style.animation = "none"
    void result.offsetWidth
    result.style.animation = ""
    stage.classList.remove("is-running")

    // Both inputs open the same prototype; the Wireframe one in a rough, greyscale skin.
    wfResult.hidden = true
    protoFrame.parentElement.hidden = false
    protoFrame.src = current === "ui" ? protoFrame.dataset.src : "demos/gallery-rough/"
    fitScalers()
    caption.innerHTML = data.caption
    generate.disabled = false
    generate.classList.remove("is-busy")
    setLabel("重新生成")
  }

  $$(".demo-controls .seg button").forEach((b) => b.addEventListener("click", () => selectInput(b.dataset.input)))
  generate.addEventListener("click", run)
  $("#prompt-bubble").addEventListener("click", () => !generate.disabled && run())
  selectInput("ui")

  // ---------- 03 how it works ----------
  const OMNI = ["AppBar", "Avatar", "Banner", "BottomSheet", "ButtonIcon", "Buttons", "Cards", "Checkbox", "Dialog", "Divider", "Dropdown", "GestureBar", "GlassesStatus", "Icons", "IconsMediaButtons", "Image", "InputField", "Label", "ListGroup", "ListItem", "MenuItem", "Nav", "Progress", "Radio", "ScrollContainer", "Scrollbar", "Separator", "Slider", "StatusBar", "Stepper", "Switch", "Tag", "TagsMenu", "Toast", "Tooltips", "Transitions"]
  const USED_FILES = ["AppBar", "Buttons", "Checkbox", "Dialog", "BottomSheet", "Nav", "Icons", "GestureBar"]

  const HOW = {
    tokens: {
      figTitle: "Figma Variables · Text Styles",
      fig: `<img src="assets/fig-tokens.jpg.webp" alt="Figma 中的 EAE Color Token 與文字樣式" loading="lazy">`,
      figText: "Design System 裡的色票、元件狀態色與字級，原本分散在 Figma 的 Variables 與 Text Styles。",
      codeTitle: "styles/globals.css",
      code: `<span class="c">/* Surface · Accent · Text */</span>
<span class="v">--Colors-Surface-Backgronud--01</span>: <span class="n">#131b26</span>;
<span class="v">--Colors-Accent-Brand</span>: <span class="n">#00b3e3</span>;
<span class="v">--Text-Primary</span>: <span class="n">#ffffff</span>;
<span class="v">--Text-Secondary</span>: <span class="n">#d5e2f2</span>;

<span class="c">/* Common Control states */</span>
<span class="v">--Color-Common-Control-Base-normal</span>: <span class="n">#364356</span>;
<span class="v">--Color-Common-Control-Active</span>: <span class="n">#00b3e3</span>;

<span class="c">/* Typography */</span>
<span class="v">--font-header-1-size</span>: <span class="n">30px</span>;
<span class="v">--font-header-1-weight</span>: <span class="n">700</span>;
<span class="v">--font-caption-size</span>: <span class="n">12px</span>;

<span class="c">/* Gradients */</span>
<span class="v">--gradient-horizontal</span>: linear-gradient(<span class="n">90deg</span>, <span class="n">#33c2e9 15%</span>, <span class="n">#1a5eff 90%</span>);`,
      points: ["所有顏色與字級統一成 CSS 變數，前端只引用變數"],
    },
    tsx: {
      figTitle: "Figma Components · Variants",
      fig: `<div class="shot-pair"><img src="assets/fig-buttons.jpg.webp" alt="Figma 中 Buttons 組件的各種狀態" loading="lazy"><img src="assets/make-tsx.jpg.webp" alt="Figma Make 中產出的 AppBar.tsx" loading="lazy"></div>`,
      figText: "每個 Figma 組件連同 Variants（大小、狀態、樣式）透過 Figma AI Prompt 或是 Figma toCode 插件結構化成一支 .tsx，放進 components 中。",
      codeTitle: "components/Omni/Buttons.tsx",
      code: `<span class="k">export type</span> ButtonVariant =
  | <span class="s">"filled"</span> | <span class="s">"filled-secondary"</span>
  | <span class="s">"outlined"</span> | <span class="s">"text"</span> | <span class="s">"hyperlink"</span>;
<span class="k">export type</span> ButtonState = <span class="s">"normal"</span> | <span class="s">"pressed"</span> | <span class="s">"disabled"</span> | <span class="s">"loading"</span>;

<span class="k">const</span> StyledButton = styled.button\`
  border-radius: <span class="n">9999px</span>;
  background: <span class="v">var(--Button-primary-base-normal)</span>;
\`;

<span class="c">// 生成的 App.tsx 只「組裝」，不重新實作</span>
<span class="k">import</span> { Button } <span class="k">from</span> <span class="s">"./components/Omni/Buttons"</span>;
<span class="h">&lt;Button variant="filled-secondary"&gt;</span>Select<span class="h">&lt;/Button&gt;</span>`,
      points: ["組件的 Variants 與狀態直接對應成 props", "透過這一份前端組件代碼，能夠增加程式端透過 Figma MCP 讀取的精確性。"],
      tree: true,
    },
    guide: {
      figTitle: "UI Layout Guideline",
      fig: `<img src="assets/fig-bottom-sheet.png.webp?v=2" alt="Figma 中 Bottom sheet 的轉場規範：進場、展開與收回的 easing 與時間" loading="lazy">`,
      figText: "版面結構、間距、轉場與使用規範，原本是給人看的 Figma 頁面，AI 讀不到。",
      codeTitle: "guidelines/Guidelines.md",
      code: `<span class="h">### Generation &amp; Implementation Rules</span>

1. <b>Global Tokens Mandatory</b>
   All text sizes and colors MUST use the CSS
   variables defined in /styles/globals.css.
3. <b>Omni First</b>
   Always prioritize components from /components/Omni.
5. <b>Strict Spacing</b>
   Horizontal: 24px for text, 16px for components.
6. <b>Gesture Bar Mandatory</b>
   Every mobile screen MUST include GestureBar.
13. <b>Bottom Sheet Behavior</b>
   It MUST directly replace the original Gesture Bar.

<span class="c">… 15 rules · 1,800 lines incl. tokens, layout, motion</span>`,
      points: ["把規範寫成 AI 生成前必讀的規則文件", "Prompt 只需指定「遵照 Guidelines.md」，就能約束版面、間距與轉場"],
    },
  }

  const panel = $("#how-panel")
  function renderHow(key) {
    const d = HOW[key]
    $$(".map-row").forEach((b) => b.setAttribute("aria-selected", b.dataset.step === key))
    const tree = d.tree
      ? `<div class="tree" aria-label="components/Omni 內的組件">${OMNI.map((n) => `<span class="${USED_FILES.includes(n) ? "is-used" : ""}">${n}.tsx</span>`).join("")}</div>`
      : ""
    panel.innerHTML = `
      <figure class="how-card">
        <header><span>FIGMA DESIGN SYSTEM</span><b>${d.figTitle}</b></header>
        ${d.fig}
        <div class="how-body"><p>${d.figText}</p></div>
      </figure>
      <figure class="how-card">
        <header><span>FIGMA MAKE TEMPLATE</span><b>${d.codeTitle}</b></header>
        <pre class="code">${d.code}</pre>
        <div class="how-body"><ul>${d.points.map((p) => `<li>${p}</li>`).join("")}</ul></div>
      </figure>`
    panel.style.animation = "none"
    void panel.offsetWidth
    panel.style.animation = ""
  }
  $$(".map-row").forEach((b) => b.addEventListener("click", () => renderHow(b.dataset.step)))
  renderHow("tokens")

  // ---------- 04 outcome tabs ----------
  $$("[data-tabs]").forEach((box) => {
    const tabs = $$('[role="tab"]', box)
    tabs.forEach((tab) =>
      tab.addEventListener("click", () => {
        tabs.forEach((t) => {
          const on = t === tab
          t.setAttribute("aria-selected", on)
          $(`#${t.getAttribute("aria-controls")}`).hidden = !on
        })
      }),
    )
  })

  // ---------- header: highlight the section in view ----------
  const links = $$(".header nav a")
  const sections = links.map((a) => $(a.getAttribute("href")))
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        links.forEach((a, i) => a.classList.toggle("is-current", sections[i] === e.target))
      })
    },
    { rootMargin: "-45% 0px -50% 0px" },
  )
  sections.forEach((s) => s && io.observe(s))
})()

// Header: hide while scrolling down, show again on any upward scroll or near the top.
{const header=document.querySelector('.header');let last=scrollY;addEventListener('scroll',()=>{const y=scrollY;if(Math.abs(y-last)<6)return;header.classList.toggle('is-hidden',y>last&&y>header.offsetHeight);last=y},{passive:true})}
