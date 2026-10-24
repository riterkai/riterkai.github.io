(() => {
  const merchants = {
    list:{title:'從空狀態引導，<br>建立第一個賣場。',text:'尚未建立分潤賣場時，列表顯示引導插畫與「新增賣場」按鈕；建立後以清單管理各賣場的名稱與預約時間。',image:'merchant-empty',caption:'B 端｜獨立分潤賣場列表（空狀態）'},
    settings:{title:'先設定活動，<br>再進入賣場編輯。',text:'商家在原有後台新增賣場，設定名稱、銷售期間、推薦活動與 SEO 資訊。儲存建立成功後，才進入商品與版面編輯。',image:'merchant-settings',caption:'B 端｜新增獨立分潤賣場與活動設定'},
    editor:{title:'沿用編輯器，<br>編排專屬銷售頁。',text:'透過文字、圖片、商品圖文與商品列表等模組，組合品牌介紹與選購區域。元件可以調整順序、內容與樣式，預覽後再發布。',image:'merchant-editor',caption:'B 端｜賣場頁面布局編輯器'},
    products:{title:'用既有商品，<br>建立團購展示區。',text:'在商品元件中選取店內商品，並設定圖片、文字、對齊與間距。商品資訊與展示元件連結，支援商家建立符合品牌需求的團購頁。',image:'merchant-products',caption:'B 端｜商品圖文元件與商品設定'}
  };
  const insights = {
    versions:{kicker:'01 / TWO DESIGN DIRECTIONS',title:'完整資訊與簡潔操作，<br>不是只能選一邊。',text:'A 版提供更多優惠資訊與快速操作，B 版減少導覽與資訊干擾。測試目的，是找出哪些內容有助於判斷，哪些操作沒有符合預期。',points:['<strong>A 版：</strong>完整優惠資訊、快速結帳與結帳區 Tab Bar。','<strong>B 版：</strong>簡化頁面操作，未達優惠集中顯示，已達細項收在折扣資訊中。','<strong>測試結果：</strong>分數接近，受測者分別喜歡兩版的不同部分。'],response:'以 A 版的資訊完整度，結合較簡潔、容易找到購物車的操作方式。',screens:[['cart-a','A / 完整優惠','商品與全單優惠完整展示'],['cart-b','B / 精簡資訊','降低資訊量，收斂呈現']],page:10},
    discounts:{kicker:'02 / DISCOUNT CLARITY',title:'優惠要完整，<br>也要知道對應哪個商品。',text:'受測者想確認是否已達活動條件、還差多少。優惠需要分開呈現單項商品、全單與免運，並清楚寫出「再買幾件」或「再買多少錢」；部分受測者還會點擊優惠標籤，想找到對應的商品系列。',points:['<strong>分層確認：</strong>區隔單項商品、全單與免運優惠。','<strong>明確差距：</strong>清楚交代「再買幾件」或「再買多少錢」。','<strong>定位需求：</strong>部分受測者嘗試點擊優惠標籤，尋找對應商品系列。'],quote:'「寫在商品下面比較清楚。」',quoteSource:'U01 · 優惠資訊觀察，研究報告第 18 頁',response:'保留完整優惠資訊，讓提示貼近對應商品；優惠標籤導向相關商品，作為後續設計機會。',screens:[['revised-cart','保留 / 未達優惠','商品下方交代優惠差距'],['cart-a','保留 / 整體資訊','分開呈現已達與未達條件']],page:18},
    cart:{kicker:'03 / CART ACCESS',title:'先讓人找得到，<br>再讓人放心繼續選。',text:'選購時受測者會反覆打開側欄購物車，確認已加入的商品、數量與總額；頁面捲動後找不到入口會感到焦慮。入口用「購物車」也比「快速結帳」更貼近確認內容的目的。',points:['<strong>使用需求：</strong>隨時確認已加入的商品與金額。','<strong>操作問題：</strong>頁面捲動後，找不到購物車會產生焦慮。','<strong>入口文案：</strong>「購物車」比「快速結帳」更貼近確認內容的目的。'],quote:'「我點了購物車圖示之後，就會想要看到完整的……現在加了多少錢。」',quoteSource:'U03 · 購物車入口觀察，研究報告第 14 頁',response:'在商品區保留浮動購物車入口，先開啟 minicart 確認內容，再由結帳按鈕前往訂單區。',screens:[['floating-cart','改版 / 浮動入口','從商品區開啟購物車'],['minicart','確認 / 側欄購物車','查看商品後決定是否結帳']],page:14},
    shortcuts:{kicker:'04 / SHORTCUTS & EXPECTATIONS',title:'真正想跳過的，<br>是長介紹與找商品的時間。',text:'受測者多半直接往下捲（3 位）或從側欄購物車結帳（3 位），沒有人使用快速結帳，因為它容易被理解成直接開始填表。他們真正想跳過的是長介紹，希望能直接跳到選購商品的位置。',points:['<strong>實際路徑：</strong>3 位往下捲動，3 位透過 minicart 的結帳按鈕。','<strong>閱讀習慣：</strong>傾向先看完商品，再確認數量與優惠。','<strong>長頁需求：</strong>希望直接跳到選購商品的位置，而非結帳欄位。'],quote:'「直接購買可以直接到選商品的地方。」',quoteSource:'U06 · 長頁快捷需求，研究報告第 16 頁',response:'把快速結帳浮鈕改為購物車入口；結帳欄位間的 Tab Bar 不再作為主要導覽，保留回到頂部。',screens:[['quick-checkout','原方案 / 快速結帳','快捷鈕的意思與預期有落差'],['floating-cart','改版 / 購物車入口','先確認內容，再前往結帳']],page:16},
    checkout:{kicker:'05 / CHECKOUT & PAYMENT',title:'順著填完，<br>也把費用與選項說清楚。',text:'受測者熟悉團購表單，會照聯絡、配送、付款、確認的順序一路往下填完，結帳區的 Tab Bar 很少被注意。真正影響選擇的是配送費與付款優惠，這些差異需要容易比較。',points:['<strong>保留自然順序：</strong>聯絡資訊、配送、付款與訂單確認。','<strong>減少多餘切換：</strong>結帳 Tab Bar 較少被注意，也被認為非必要。','<strong>支持費用判斷：</strong>不同配送費與付款優惠應容易比較。'],quote:'「我覺得可以一次全部填寫完……這樣不用來回上到上一步確認。」',quoteSource:'U05 · 結帳表單觀察，研究報告第 19 頁',response:'保留一頁式填寫與訂單確認，將配送與付款的差異資訊放在相應選項旁。',screens:[['customer-form','保留 / 表單順序','一路向下填寫聯絡與收件資料'],['payment-options','關注 / 付款選項','選擇支付方式時比較優惠']],page:21}
  };
  const escape = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function renderMerchant(key){
    const m=merchants[key],panel=document.getElementById('merchant-panel');panel.setAttribute('aria-labelledby',`merchant-tab-${key}`);
    panel.innerHTML=`<div class="merchant-panel-inner"><div class="merchant-copy"><h3>${m.title}</h3><p>${m.text}</p></div><div class="merchant-scroll" tabindex="0" role="region" aria-label="${m.caption}，可捲動"><img src="assets/${m.image}.webp" alt="${m.caption}"></div></div>`;
  }
  function renderInsight(key){
    const d=insights[key],panel=document.getElementById('insight-panel');panel.setAttribute('aria-labelledby',`insight-tab-${key}`);
    panel.innerHTML=`<div class="insight-layout"><div class="insight-copy"><span class="mini-label">${d.kicker}</span><h3>${d.title}</h3><p>${d.text}</p><div class="insight-response"><p><b>設計回應</b>${d.response}</p></div></div><div class="insight-media">${d.screens.map(s=>`<figure><button class="insight-image" data-image="assets/${s[0]}-marked.webp?v=2" data-caption="${escape(s[1]+'：'+s[2])}" aria-label="放大${escape(s[1])}"><img src="assets/${s[0]}-marked.webp?v=2" alt="${escape(s[1]+'，'+s[2])}" loading="lazy"></button><figcaption><strong>${s[1]}</strong>${s[2]}</figcaption></figure>`).join('')}</div></div>`;
  }
  function wireTabs(attribute,render){
    const buttons=[...document.querySelectorAll(`[${attribute}]`)];
    const activate=(button,focus)=>{buttons.forEach(b=>{b.setAttribute('aria-selected',String(b===button));b.tabIndex=b===button?0:-1;});render(button.getAttribute(attribute));if(focus)button.focus({preventScroll:true});};
    buttons.forEach((b,i)=>{b.addEventListener('click',()=>activate(b,false));b.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%buttons.length;if(e.key==='ArrowLeft')n=(i-1+buttons.length)%buttons.length;if(e.key==='Home')n=0;if(e.key==='End')n=buttons.length-1;if(n!==undefined){e.preventDefault();activate(buttons[n],true);}});});
  }
  wireTabs('data-merchant',renderMerchant);wireTabs('data-insight',renderInsight);
  // One tab bar drives both device previews to the same part of the page.
  const jumps=[...document.querySelectorAll('[data-jump]')];
  function jumpTo(button,behavior){
    jumps.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    ['desktop','mobile'].forEach(device=>{
      const region=document.getElementById(device+'-scroll'),img=region.querySelector('img');
      const go=()=>region.scrollTo({top:Number(button.dataset[device])*img.clientWidth/img.naturalWidth,behavior});
      if(img.complete&&img.naturalWidth)go();else img.addEventListener('load',go,{once:true});
    });
  }
  jumps.forEach(b=>b.addEventListener('click',()=>jumpTo(b,matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth')));
  window.addEventListener('resize',()=>{const on=jumps.find(b=>b.getAttribute('aria-pressed')==='true');if(on)jumpTo(on,'instant');});
  const dialog=document.getElementById('image-dialog'),img=document.getElementById('dialog-image'),scroll=dialog.querySelector('.dialog-scroll');let zoom=100,portrait=false,opener;
  function setZoom(value){zoom=Math.max(100,Math.min(400,value));document.getElementById('zoom-value').value=zoom+'%';document.getElementById('zoom-out').disabled=zoom===100;document.getElementById('zoom-in').disabled=zoom===400;img.style.width=portrait?`${Math.min(500,scroll.clientWidth)*zoom/100}px`:`${zoom}%`;}
  document.addEventListener('click',e=>{const button=e.target.closest('[data-image]');if(!button)return;opener=button;portrait=!button.dataset.image.includes('desktop-')&&!button.dataset.image.includes('research-')&&!button.dataset.image.includes('merchant-');img.src=button.dataset.image;img.alt=button.dataset.caption;document.getElementById('image-caption').textContent=button.dataset.caption;dialog.showModal();document.body.style.overflow='hidden';setZoom(100);scroll.scrollTop=0;scroll.scrollLeft=0;});
  document.getElementById('close-image').addEventListener('click',()=>dialog.close());document.getElementById('zoom-in').addEventListener('click',()=>setZoom(zoom+100));document.getElementById('zoom-out').addEventListener('click',()=>setZoom(zoom-100));document.getElementById('zoom-reset').addEventListener('click',()=>{setZoom(100);scroll.scrollTop=0;scroll.scrollLeft=0;});dialog.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus({preventScroll:true});});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});window.addEventListener('resize',()=>{if(dialog.open)setZoom(zoom);});
  renderMerchant('list');renderInsight('discounts');
})();

// Header: hide while scrolling down, show again on any upward scroll or near the top.
{const header=document.querySelector('.header');let last=scrollY;addEventListener('scroll',()=>{const y=scrollY;if(Math.abs(y-last)<6)return;header.classList.toggle('is-hidden',y>last&&y>header.offsetHeight);last=y},{passive:true})}
