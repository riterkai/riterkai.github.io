(() => {
  const projects = window.KC_PROJECTS
  const tags = window.KC_TAGS
  const grid = document.getElementById("grid")
  const filters = document.getElementById("filters")
  const pad = (n) => String(n).padStart(2, "0")

  document.getElementById("work-count").textContent = pad(projects.length)

  // ---------- cards ----------
  projects.forEach((p, i) => {
    const live = p.status === "live"
    const card = document.createElement(live ? "a" : "article")
    card.className = `card ${live ? "is-live" : "is-soon"}`
    card.dataset.slug = p.slug
    card.dataset.tags = p.tags.join(" ")
    card.style.setProperty("--accent", p.accent)
    if (live) card.href = `work/${p.slug}/`
    else card.setAttribute("aria-label", `${p.title}（即將上線）`)

    const cover = p.cover
      ? `<img src="${p.cover}" alt="" loading="${i < 4 ? "eager" : "lazy"}">`
      : `<div class="cover-abstract"><span>VISUALS SOON</span></div>`
    card.innerHTML = `
      <div class="card-cover fit-${p.fit || "bleed"}">
        ${cover}
        <span class="card-no">${pad(i + 1)}</span>
        <span class="card-flag">${p.categoryLabel || (live ? "CASE STUDY" : "COMING SOON")}</span>
      </div>
      <div class="card-body">
        <div class="card-meta"><span>${p.company}</span><span>·</span><span>${p.year}</span></div>
        <h3 data-title="${p.title}" data-short="${p.shortTitle || p.title}">${p.title}</h3>
        <p>${p.desc}</p>
      </div>`
    if (live) card.addEventListener("click", (event) => enterPortal(event, card))
    grid.appendChild(card)
  })

  // ---------- filters ----------
  const used = Object.keys(tags).filter((t) => projects.some((p) => p.tags.includes(t)))
  ;[["all", "全部"], ...used.map((t) => [t, tags[t]])].forEach(([key, label]) => {
    const chip = document.createElement("button")
    chip.type = "button"
    chip.className = "chip"
    chip.textContent = label
    chip.setAttribute("aria-pressed", key === "all")
    chip.addEventListener("click", () => {
      filters.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", c === chip))
      grid.querySelectorAll(".card").forEach((card) => {
        card.classList.toggle("is-hidden", key !== "all" && !card.dataset.tags.split(" ").includes(key))
      })
    })
    filters.appendChild(chip)
  })

  // ---------- card titles: a space between Chinese and Latin text; if a title would wrap, try it
  // without those spaces, then the short form (spaced, then compact) — whichever fits one line ----------
  const CJK = "\u3400-\u9fff\uff00-\uffef"
  const spaced = (t) =>
    t.replace(new RegExp(`([${CJK}])([A-Za-z0-9])`, "g"), "$1 $2").replace(new RegExp(`([A-Za-z0-9!])([${CJK}])`, "g"), "$1 $2")
  function fitTitles() {
    const phone = matchMedia("(max-width: 560px)").matches
    document.querySelectorAll(".card h3[data-title]").forEach((h) => {
      const full = h.dataset.title, short = h.dataset.short
      const tries = phone ? [spaced(short), short] : [spaced(full), full, spaced(short), short]
      const line = parseFloat(getComputedStyle(h).lineHeight)
      for (const t of tries) {
        h.textContent = t
        if (h.getBoundingClientRect().height <= line * 1.5) return
      }
    })
  }
  fitTitles()
  addEventListener("resize", fitTitles)
  document.fonts?.ready.then(fitTitles)

  // ---------- portal transition: the case page opens out of the card (shared/transition.js) ----------
  function enterPortal(event, card) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return
    const cover = card.querySelector(".card-cover")
    const r = cover.getBoundingClientRect()
    const project = window.KC_PROJECTS.find((x) => x.slug === card.dataset.slug)
    window.kcSaveSpot?.(card.dataset.slug)
    window.kcNavigate({
      type: "enter",
      cover: new URL(project.cover, document.baseURI).href,
      fit: project.fit,
      rect: { top: r.top, right: innerWidth - r.right, bottom: innerHeight - r.bottom, left: r.left },
    })
  }
})()
