(() => {
  const $ = (s, el = document) => el.querySelector(s)
  const $$ = (s, el = document) => [...el.querySelectorAll(s)]
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches
  const canHover = matchMedia("(hover: hover) and (pointer: fine)").matches

  // One entry per project; each group is a flow shown as one row of cards.
  const PROJECTS = [
    {
      id: "genesis",
      no: "01",
      name: "Genesis",
      kind: "UI/UX 設計 · 微信小程序",
      desc: "Genesis 是韓國現代汽車集團旗下的豪華品牌，針對在中國的官網和小程序進行設計，設計集中在車型鑑賞、品牌線下活動展示以及社群分享。",
      groups: [
        {
          name: "Genesis 小程序",
          note: "車型鑑賞以大圖與人物情境為主，價格與預約試駕直接放在首屏，讓看車到留資的路徑更短。",
          screens: [["models", "車型列表"], ["g80", "車型首頁"], ["g80-intro", "車型介紹"], ["test-drive", "預約試駕"]],
        },
        {
          name: "Genesis of You 活動",
          note: "用影片與雜誌式排版鋪陳品牌故事，每一頁都保留分享與體驗入口，延伸到線下活動。",
          screens: [["teaser", "前導影片"], ["event", "活動說明"], ["share", "分享 Genesis"], ["experience", "全新非凡體驗"]],
        },
        {
          name: "上海時裝周",
          note: "直播與 G70 車款介紹串成同一條瀏覽路徑，最後生成可分享的活動海報，帶回社群傳播。",
          screens: [["live", "影片直播"], ["g70-1", "G70 介紹 1"], ["g70-2", "G70 介紹 2"], ["poster", "活動海報分享"]],
        },
      ],
    },
    {
      id: "chanel",
      no: "02",
      name: "Chanel",
      kind: "UI/UX 設計 · 微信小程序",
      desc: "分析 Chanel 線上官網後發現，全球化網站的使用體驗不如原生 App 流暢、購物流程也較繁瑣，因此制定一套本地化的微信小程序方案，更好地在中國市場進行社交傳播與線上購物，貼近中國使用者的操作習慣。",
      groups: [
        {
          name: "精品包門店查詢",
          note: "精品包不在線上販售，流程從瀏覽、分類到商品詳情，最後導向查詢所在門店。",
          screens: [["landing", "Landing Page"], ["category", "商品分類"], ["list", "商品列表"], ["bag", "商品詳情（精品包）"]],
        },
        {
          name: "香水下單流程",
          note: "可線上購買的香水與彩妝，從詳情、購物袋到結算都維持黑白極簡的品牌語彙。",
          screens: [["perfume", "商品詳情（香水）"], ["cart", "購物車"], ["checkout", "商品結算"], ["done", "訂單完成"]],
        },
      ],
    },
    {
      id: "store",
      no: "03",
      name: "微商城行業模板",
      kind: "UI 設計 · 首頁模板",
      desc: "微商城針對不同行業的商戶提供基礎首頁模板，方便用戶在編輯器中替換預設圖片，無需從 0 到 1 搭建頁面。",
      long: true,
      groups: [
        {
          name: "行業首頁模板",
          note: "四個行業各自有不同的視覺語氣，但共用同一套首頁模組：Banner、分類入口、推薦商品與活動區塊，商戶只需替換圖片與文案。",
          screens: [["cosmetic", "Cosmetic 美妝"], ["fashion", "Fashion 服飾"], ["fresh", "生鮮"], ["home", "家居精品"]],
        },
      ],
    },
    {
      id: "harley",
      no: "04",
      name: "Harley-Davidson",
      kind: "UI 設計 · 微信小程序",
      desc: "知名重機品牌 Harley-Davidson 希望透過官網和小程序，把社群、預約試駕與精品商城整合成一個獨立平台給用戶使用。",
      groups: [
        {
          name: "哈雷小程序",
          note: "從首頁探索、車型查看到預約試駕與經銷商選擇，把看完車款就想試騎的衝動直接接住。",
          screens: [["explore", "首頁探索"], ["models", "車型查看"], ["test-drive", "預約試駕"], ["dealer", "經銷商選擇"]],
        },
        {
          name: "精品商城",
          note: "騎士服飾與配件延續品牌的黑橘配色，規格選擇與購物車維持清楚的單一主按鈕。",
          screens: [["shop", "商城首頁"], ["product", "商品詳情"], ["spec", "商品規格"], ["cart", "購物車查看"]],
        },
        {
          name: "哈雷社群",
          note: "車主圈子、活動詳情、報名到分享海報，把線下騎行活動帶回線上社群。",
          screens: [["circle", "哈雷圈子"], ["event", "活動詳情"], ["signup", "活動報名"], ["poster", "分享活動海報"]],
        },
      ],
    },
  ]

  const src = (p, key) => `assets/${p.id}/${key}.webp`

  // ---------- sections ----------
  const host = $("#projects")
  host.innerHTML = PROJECTS.map(
    (p) => `
    <section class="project project-${p.id}" id="${p.id}" aria-labelledby="${p.id}-title">
      <div class="wrap project-grid">
        <div class="project-copy">
          <p class="project-no">${p.no} / ${String(PROJECTS.length).padStart(2, "0")}</p>
          <h2 id="${p.id}-title">${p.name}</h2>
          <p class="project-kind">${p.kind}</p>
          <p class="project-desc">${p.desc}</p>
          ${
            p.groups.length > 1
              ? `<div class="groups" role="tablist" aria-label="${p.name} 流程">${p.groups
                  .map((g, i) => `<button type="button" role="tab" aria-selected="${i === 0}" data-group="${i}"><span>${String(i + 1).padStart(2, "0")}</span>${g.name}</button>`)
                  .join("")}</div>`
              : ""
          }
          <p class="group-note" aria-live="polite">${p.groups[0].note}</p>
        </div>
        <div class="project-cards">
          <div class="cards ${p.long ? "is-long" : ""}" data-project="${p.id}"></div>
        </div>
      </div>
    </section>`,
  ).join("")

  function renderCards(p, gi, animate) {
    const box = $(`.cards[data-project="${p.id}"]`)
    const g = p.groups[gi]
    box.innerHTML = g.screens
      .map(
        ([key, label], i) => `
        <button class="card" type="button" data-index="${i}" style="--i:${i}" aria-label="放大：${label}">
          <span class="card-tilt"><span class="card-shot"><img src="${src(p, key)}" alt="${p.name} ${label}" loading="lazy" draggable="false"></span><span class="card-glare" aria-hidden="true"></span></span>
          <span class="card-label"><b>${String(i + 1).padStart(2, "0")}</b>${label}</span>
        </button>`,
      )
      .join("")
    if (animate && !reduceMotion) box.classList.remove("is-in"), void box.offsetWidth
    box.classList.add("is-in")
    $$(".card", box).forEach((card) => {
      card.addEventListener("click", () => openViewer(p, gi, +card.dataset.index, card))
      bindTilt(card)
    })
    const section = $(`#${p.id}`)
    $$(".groups button", section).forEach((b) => b.setAttribute("aria-selected", +b.dataset.group === gi))
    $(".group-note", section).textContent = g.note
  }

  PROJECTS.forEach((p) => {
    renderCards(p, 0, false)
    $$(`#${p.id} .groups button`).forEach((b) => b.addEventListener("click", () => renderCards(p, +b.dataset.group, true)))
  })

  // ---------- hover tilt (pointer devices only) ----------
  function bindTilt(card) {
    if (!canHover || reduceMotion) return
    const tilt = $(".card-tilt", card)
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      tilt.style.transform = `translateY(-8px) rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 12).toFixed(2)}deg)`
      tilt.style.setProperty("--gx", `${(x + 0.5) * 100}%`)
      tilt.style.setProperty("--gy", `${(y + 0.5) * 100}%`)
    })
    card.addEventListener("pointerleave", () => (tilt.style.transform = ""))
  }

  // ---------- navigation: brand index in hero + header ----------
  const navHtml = PROJECTS.map((p) => `<a href="#${p.id}" data-id="${p.id}"><span>${p.no}</span>${p.name}</a>`).join("")
  $("#brand-nav").innerHTML = navHtml
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) $$("#brand-nav a").forEach((a) => a.classList.toggle("is-current", a.dataset.id === e.target.id))
      }),
    { rootMargin: "-45% 0px -50% 0px" },
  )
  PROJECTS.forEach((p) => io.observe($(`#${p.id}`)))
  const header = $(".header")
  const onScroll = () => header.classList.toggle("is-scrolled", scrollY > innerHeight * 0.6)
  addEventListener("scroll", onScroll, { passive: true })
  onScroll()

  // ---------- viewer: every screen of the project, in flow order ----------
  const viewer = $("#viewer")
  const vImg = $("#viewer-img")
  const vStage = $("#viewer-stage")
  const vMeta = $("#viewer-meta")
  const vStrip = $("#viewer-strip")
  let list = []
  let pos = 0
  let lastFocus = null

  function flat(p) {
    return p.groups.flatMap((g, gi) => g.screens.map(([key, label], i) => ({ p, gi, i, key, label, group: g.name })))
  }

  function show(n, dir = 0) {
    pos = (n + list.length) % list.length
    const s = list[pos]
    vImg.src = src(s.p, s.key)
    vImg.alt = `${s.p.name} ${s.label}`
    vMeta.innerHTML = `<b>${s.p.name}</b><span>${s.group}</span><span>${s.label}</span><span class="viewer-count">${pos + 1} / ${list.length}</span>`
    vStage.classList.toggle("is-long", !!s.p.long)
    vStage.scrollTop = 0
    if (dir && !reduceMotion) vImg.animate([{ opacity: 0, transform: `translateX(${dir * 40}px)` }, { opacity: 1, transform: "none" }], { duration: 260, easing: "cubic-bezier(0.2,0.8,0.2,1)" })
    $$("button", vStrip).forEach((b, i) => {
      b.classList.toggle("is-on", i === pos)
      if (i === pos) b.scrollIntoView({ block: "nearest", inline: "center", behavior: reduceMotion ? "auto" : "smooth" })
    })
  }

  function openViewer(p, gi, i, card) {
    list = flat(p)
    lastFocus = card
    const start = list.findIndex((s) => s.gi === gi && s.i === i)
    // Same viewer and zoom toolbar as the other case pages, stepping through the whole project.
    const items = list.map((s) => ({ src: src(s.p, s.key), caption: `${s.p.name} · ${s.group} · ${s.label}` }))
    window.kcViewer.open(items[start].src, items[start].caption, null, { items, index: start })
  }

  function closeViewer() {
    if (viewer.hidden) return
    const close = () => {
      viewer.hidden = true
      document.body.classList.remove("is-viewing")
      lastFocus?.focus({ preventScroll: true })
    }
    close()
  }

  function currentGroup(p) {
    const b = $(`#${p.id} .groups button[aria-selected="true"]`)
    return b ? +b.dataset.group : 0
  }

  $("#viewer-close").addEventListener("click", closeViewer)
  $("#viewer-prev").addEventListener("click", () => show(pos - 1, -1))
  $("#viewer-next").addEventListener("click", () => show(pos + 1, 1))
  viewer.addEventListener("click", (e) => {
    if (e.target === viewer || e.target === vStage) closeViewer()
  })
  addEventListener("keydown", (e) => {
    if (viewer.hidden) return
    if (e.key === "Escape") closeViewer()
    else if (e.key === "ArrowRight") show(pos + 1, 1)
    else if (e.key === "ArrowLeft") show(pos - 1, -1)
    else if (e.key === "Tab") {
      const f = $$("button", viewer)
      const i = f.indexOf(document.activeElement)
      if (e.shiftKey && i <= 0) (e.preventDefault(), f.at(-1).focus())
      else if (!e.shiftKey && i === f.length - 1) (e.preventDefault(), f[0].focus())
    }
  })
  // Swipe on touch screens.
  let touchX = null
  vStage.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true })
  vStage.addEventListener("touchend", (e) => {
    if (touchX === null) return
    const dx = e.changedTouches[0].clientX - touchX
    if (Math.abs(dx) > 50) show(pos + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1)
    touchX = null
  })
})()

// Header: hide while scrolling down, show again on any upward scroll or near the top.
{const header=document.querySelector('.header');let last=scrollY;addEventListener('scroll',()=>{const y=scrollY;if(Math.abs(y-last)<6)return;header.classList.toggle('is-hidden',y>last&&y>header.offsetHeight);last=y},{passive:true})}
