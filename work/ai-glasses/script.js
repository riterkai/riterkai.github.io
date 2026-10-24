(() => {
  const flows = {
    ai: {
      kicker: '01 / AI CONVERSATION', title: '從喚醒，到回應，再到下一個動作。',
      intro: '除了回答問題，也要定義等待時的回饋，以及使用者想改做別的事時如何切換。',
      steps: [
        ['USER', '喚醒 AI', '說出喚醒詞，或按下 AI 按鍵。', 'Hey VIVE，看看這棵植物。'],
        ['GLASSES', '確認已收到', '提示音與聆聽 LED，讓使用者知道可以提問。', '喚醒詞後立即提問，略過喚醒提示音。'],
        ['DECISION', '檢查能否執行', '檢查語言、連線與服務狀態；判斷是否需要拍照。', '需要影像時，播放拍攝提示音。'],
        ['AI', '處理與等待', '以時間門檻回饋進度，避免等待沒有訊息。', '7 秒：仍在處理／30 秒：逾時。'],
        ['RESPONSE', '回應或切換', 'AI 回覆；使用者也能停止發言或開始另一個任務。', '單擊觸控板 → 停止 AI 發言。']
      ], source: 'flow-ai', sourceLabel: 'AI 行為與 AI 按鍵'
    },
    add: {
      kicker: '02 / ADD MEMORY', title: '說「幫我記住」，依內容判斷不同的處理方式。',
      intro: '先辨認需要純語音還是視覺記憶，再判斷照片、位置與辨識結果，最後確認保存。',
      steps: [
        ['USER', '提出記憶指令', '說出想保存的資訊。', '記住這本書／記住這個停車位置。'],
        ['DECISION', '辨認輸入類型', '區分純語音備忘與需要影像的視覺記憶。', '語音提醒不需要額外拍照。'],
        ['GLASSES', '取得情境', '視覺記憶觸發拍攝，必要時附加位置資訊。', '拍攝提示音與 LED 同步回饋。'],
        ['DECISION', '檢查是否成功', '處理遮擋、移動或找不到相關資訊的情況。', '失敗時說明原因，提示重新嘗試。'],
        ['APP', '確認並保存', '語音確認已加入記憶，手機通知新項目已建立。', '使用者可在 App 中回顧與管理。']
      ], source: 'flow-add', sourceLabel: '添加記憶'
    },
    recall: {
      kicker: '03 / MEMORY RECALL', title: '先回答重點，想知道更多時再追問。',
      intro: '使用者可以查找全部或特定記憶。一般先以摘要回答，再讓語音追問與手機快捷入口承接細節。',
      steps: [
        ['USER', '詢問已存資訊', '用語音查找記憶。', '我的備忘錄裡有什麼？'],
        ['DECISION', '確認有無記憶', '先判斷是否有已保存的備忘。', '空記憶 → 引導使用「Hey VIVE，記住…」。'],
        ['DECISION', '比對範圍與內容', '確認相關內容，以及指定時間內是否曾保存。', '區分找不到相關項目與指定期間無項目。'],
        ['VOICE', '先給摘要', '以語音回答重點，支援追問更多細節。', '跟我詳細說說購物清單。'],
        ['APP', '連回記憶內容', '提供記憶列表或特定項目的手機快捷通知。', '從耳邊的回答，回到可查看的內容。']
      ], source: 'flow-recall', sourceLabel: '查找備忘錄'
    }
  };
  const flowPanel = document.getElementById('flow-panel');
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function renderFlow(key) {
    const flow = flows[key];
    flowPanel.setAttribute('aria-labelledby', `flow-tab-${key}`);
    flowPanel.innerHTML = `<div class="flow-top"><div><p class="mini-label">${flow.kicker}</p><h3>${flow.title}</h3></div><p>${flow.intro}</p></div><ol class="flow-steps">${flow.steps.map((s,i) => `<li class="flow-step ${s[0]==='DECISION' ? 'decision':''}"><div class="flow-node"><div class="node-top"><span>${String(i+1).padStart(2,'0')}</span><span>${s[0]}</span></div><h4>${s[1]}</h4><p>${s[2]}</p></div></li>`).join('')}</ol><button type="button" class="flow-spec" data-image="assets/${flow.source}.webp" data-caption="${flow.sourceLabel}｜原始人機互動流程圖" aria-label="放大查看${flow.sourceLabel}原始流程圖"><img src="assets/${flow.source}.webp" alt="${flow.sourceLabel}完整 UX Spec 流程圖" loading="lazy"><span class="doc-zoom">點擊放大 ↗</span></button>`;
  }
  function wireTabs(attribute, render) {
    const buttons = Array.from(document.querySelectorAll(`[${attribute}]`));
    function activate(button, focus) {
      buttons.forEach(b => { b.setAttribute('aria-selected', String(b===button)); b.tabIndex = b===button ? 0 : -1; });
      render(button.getAttribute(attribute));
      if (focus) button.focus({preventScroll:true});
    }
    buttons.forEach((button,index) => {
      button.addEventListener('click', () => activate(button,false));
      button.addEventListener('keydown', event => {
        let next;
        if(event.key==='ArrowRight') next=(index+1)%buttons.length;
        if(event.key==='ArrowLeft') next=(index-1+buttons.length)%buttons.length;
        if(event.key==='Home') next=0;
        if(event.key==='End') next=buttons.length-1;
        if(next!==undefined){event.preventDefault();activate(buttons[next],true);}
      });
    });
  }
  wireTabs('data-flow', renderFlow);
  const dialog = document.getElementById('image-dialog');
  const dialogImage = document.getElementById('dialog-image');
  const dialogScroll = dialog.querySelector('.dialog-scroll');
  let zoom=100, isPhone=false, opener=null;
  function setZoom(value) {
    zoom=Math.max(100,Math.min(500,value));
    document.getElementById('zoom-value').value=`${zoom}%`;
    document.getElementById('zoom-out').disabled=zoom===100;
    document.getElementById('zoom-in').disabled=zoom===500;
    if(isPhone) {
      dialogImage.style.width=`${Math.round(Math.min(440,dialogScroll.clientWidth)*zoom/100)}px`;
    } else dialogImage.style.width=`${zoom}%`;
  }
  document.addEventListener('click',event => {
    const button=event.target.closest('[data-image]');
    if(!button)return;
    opener=button;isPhone=button.dataset.phone==='true';
    dialogImage.src=button.dataset.image;dialogImage.alt=button.dataset.caption;
    document.getElementById('image-caption').textContent=button.dataset.caption;
    dialogImage.classList.toggle('phone-enlarged',isPhone);
    dialogScroll.classList.toggle('is-phone',isPhone);
    dialog.showModal();document.body.style.overflow='hidden';setZoom(matchMedia('(max-width:760px)').matches&&isPhone?400:200);dialogScroll.scrollTop=0;dialogScroll.scrollLeft=0;
  });
  document.getElementById('close-image').addEventListener('click',()=>dialog.close());
  document.getElementById('zoom-in').addEventListener('click',()=>setZoom(zoom+100));
  document.getElementById('zoom-out').addEventListener('click',()=>setZoom(zoom-100));
  document.getElementById('zoom-reset').addEventListener('click',()=>{setZoom(100);dialogScroll.scrollTop=0;dialogScroll.scrollLeft=0;});
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus({preventScroll:true});});
  window.addEventListener('resize',()=>{if(dialog.open)setZoom(zoom);});

  renderFlow('ai');
})();

// Header: hide while scrolling down, show again on any upward scroll or near the top.
{const header=document.querySelector('.header');let last=scrollY;addEventListener('scroll',()=>{const y=scrollY;if(Math.abs(y-last)<6)return;header.classList.toggle('is-hidden',y>last&&y>header.offsetHeight);last=y},{passive:true})}

// 03 App UX docs and 04 error handling: one document image per tab.
(() => {
  const docs = {
    history: ['ux-ai-history', 'AI 對話 · 歷史紀錄', '首頁入口、對話詳情、圖片保存、選擇與分享，以及無紀錄與分享上限等狀態。'],
    list: ['ux-memory-list', '記憶 · 備忘錄', '記憶入口、分類列表、備忘錄詳情與編輯、批量刪除，以及空白狀態。'],
    add: ['ux-memory-add', '添加備忘錄', '在 App 手動新增記憶：輸入內容、附加照片、聯絡人提示與放棄確認。'],
    search: ['ux-memory-search', '搜尋記憶', '依分類或關鍵字搜尋，含搜尋紀錄、結果數量與找不到結果。']
  };
  const errors = {
    list: ['connection-matrix.webp', '連接丟失行為列表', '每個功能在操作前、操作中斷線時的處理（阻擋、中斷或失敗），以及用語音還是手機通知告知。'],
    before: ['connection-before.webp', '操作前連接丟失', '從眼鏡發起時以語音說明原因；從 App 發起時以對話框阻擋。'],
    during: ['connection-during.webp', '操作中連接丟失', '眼鏡播放錯誤提示音與語音；App 在前台用對話框、在背景用系統通知。']
  };
  // One tab group = one document image + note; `attr` is the tab data attribute, `id` the element prefix.
  function docTabs(attr, id, data, ext, kind) {
    const tabs = [...document.querySelectorAll(`[data-${attr}]`)];
    const show = key => {
      const [file, label, note] = data[key];
      tabs.forEach(t => { const on = t.dataset[attr] === key; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; });
      document.getElementById(`${id}-panel`).setAttribute('aria-labelledby', `${id}-tab-${key}`);
      const btn = document.getElementById(`${id}-image`), img = document.getElementById(`${id}-img`);
      btn.dataset.image = img.src = `assets/${file}${ext}`; img.alt = `${label} ${kind}`;
      btn.dataset.caption = `${label}｜${kind}`;
      document.getElementById(`${id}-note`).textContent = note;
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => show(tab.dataset[attr]));
      tab.addEventListener('keydown', e => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
        next.focus(); show(next.dataset[attr]);
      });
    });
  }
  docTabs('doc', 'doc', docs, '.jpg.webp', 'UX 稿');
  docTabs('err', 'err', errors, '', 'UX 文檔');
})();

// 01 / HOW IT WORKS: input (video) → glasses response (voice, sound, LED) → where it lands in the App.
(() => {
  const scenes = {
    ask: {
      video: 'use-ask', trigger: '「Hey VIVE」', input: '說出喚醒詞，或長按 AI 鍵後直接提問。',
      chat: [['signal', '喚醒提示音 · 聆聽 LED'], ['you', 'Hey VIVE，今天台北天氣如何？'], ['glasses', '台北晴天，16 度，下午可能轉陰，出門可以帶把傘。']],
      voice: '沒有畫面，靠提示音、燈號與語音確認狀態。',
      screen: 'ai-history', screenLabel: 'AI 對話紀錄', app: 'AI 對話紀錄：回看剛才問過的問題與回答。'
    },
    memory: {
      video: 'use-memory', trigger: '「Hey VIVE，記住…」', input: '用一句話保存資訊；需要時鏡頭同時拍下眼前的物品。',
      chat: [['you', 'Hey VIVE，記住：出差要帶護照、旅行包和歐洲合約。'], ['signal', '拍攝提示音 · LED（視覺記憶時）'], ['glasses', '好，已經加入你的記憶。']],
      voice: '語音確認已保存，手機同時收到新記憶的通知。',
      screen: 'memory-list', screenLabel: 'AI 記憶清單', app: '記憶清單：依類別整理，可搜尋、查看照片與時間地點。'
    },
    capture: {
      video: 'use-capture', trigger: '按下鏡腳按鍵', input: '鏡頭就是輸入源：按一下拍照，長按錄影。',
      chat: [['signal', '快門提示音'], ['signal', '拍攝 LED 亮起，讓旁人知道正在拍攝'], ['glasses', '照片與影片自動同步到手機。']],
      voice: '拍攝時 LED 對外亮起，是給旁人的隱私提示。',
      screen: 'media-gallery-20261024', screenLabel: '媒體庫', app: '媒體庫：依日期瀏覽眼鏡拍下的照片與影片。'
    }
  };
  const $ = id => document.getElementById(id);
  const tabs = [...document.querySelectorAll('[data-how]')];
  if (!tabs.length) return;
  const video = $('how-video'), chat = $('how-chat'), phone = $('how-phone'), screen = $('how-screen');
  const who = { you: '使用者', glasses: '眼鏡語音', signal: '眼鏡回饋' };
  let timers = [];
  function play(key) {
    const s = scenes[key];
    timers.forEach(clearTimeout); timers = [];
    tabs.forEach(t => { const on = t.dataset.how === key; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; });
    $('how-panel').setAttribute('aria-labelledby', `how-tab-${key}`);
    if (!video.src.endsWith(`${s.video}.mp4`)) { video.src = `assets/${s.video}.mp4`; video.poster = `assets/${s.video}.jpg.webp`; }
    video.play().catch(() => {});
    $('how-trigger').textContent = s.trigger;
    $('how-input-note').textContent = s.input;
    $('how-voice-note').textContent = s.voice;
    $('how-app-note').textContent = s.app;
    screen.src = `assets/${s.screen}.webp`; screen.alt = `App 的${s.screenLabel}畫面`;
    phone.dataset.image = `assets/${s.screen}.webp`; phone.dataset.caption = `${s.screenLabel}｜專案 UI 畫面`;
    chat.innerHTML = s.chat.map(([w, text]) => `<p class="how-line is-${w}"><span>${who[w]}</span>${text}</p>`).join('');
    const lines = [...chat.children];
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    lines.forEach((line, i) => still ? line.classList.add('is-in') : timers.push(setTimeout(() => line.classList.add('is-in'), 350 + i * 900)));
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => play(tab.dataset.how));
    tab.addEventListener('keydown', e => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
      next.focus(); play(next.dataset.how);
    });
  });
  // Replay the response each time the section comes into view; pause the video when it is off screen.
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) play(tabs.find(t => t.getAttribute('aria-selected') === 'true').dataset.how);
    else video.pause();
  }, { threshold: 0.35 }).observe($('how-panel'));
})();
