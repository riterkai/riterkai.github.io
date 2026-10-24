const A = name => `assets/${name}${/\.(?:webp|png|jpe?g)$/i.test(name)?'':'.webp'}`;
const screenRatios = {
  'ui-model': 2344 / 1430, 'mini-model': 696 / 1440,
  'ui-exterior': 2358 / 1419, 'mini-exterior-clean': 696 / 1450,
  'ui-payment': 2354 / 1472, 'mini-payment': 696 / 1486
};
const stages = {
  reserve: {
    eyebrow:'01 / 意向金預訂', title:'選定喜歡的 Mach-E，完成線上預訂。', desc:'從車型比較、個性化選配、填寫資料到付款完成，讓用戶知道每一步的進度與下一步。', channel:'官網 · 微信小程序',
    steps:[
      {title:'選擇車型',kicker:'MODEL SELECTION',body:'在同一頁比較車型的價格、功率與核心設備，再進入選配。',note:'同屏展示關鍵配置，解決用戶在測試中「難以比較車型」的問題。',images:[['ui-model','官網車型比較'],['mini-model','小程序車型選擇']]},
      {title:'個性化選配',kicker:'CONFIGURATION',body:'依序查看外觀顏色、輪圈及內飾，選擇配置並確認總價。',note:'讓車輛外觀成為頁面重點，將配置資訊分步呈現。',images:[['ui-exterior','官網車輛選配'],['mini-exterior-clean','小程序外觀選配']]},
      {title:'確認資料與付款',kicker:'CHECKOUT',body:'確認車輛配置與買家資料，再選擇意向金付款方式。',note:'付款前清楚呈現車輛配置、買家資訊和應付內容。',images:[['ui-payment','官網訂車資料填寫'],['mini-payment','小程序訂車確認']]},
      {title:'預訂成功',kicker:'ORDER CONFIRMED',body:'確認意向金付款成功，提供訂單入口及後續小程序資訊。',note:'以成功提示、訂單管理與下一步引導，完成預訂階段。',images:[['mini-success','小程序預訂成功'],['mini-orders','小程序訂單管理']]}
    ]
  },
  deposit: {
    eyebrow:'02 / 定金與準車主',title:'保留車輛配置，完成定金支付。',desc:'意向金預訂之後，選擇定金預訂方式、輸入資料、確認訂單並支付，轉換成準車主身分。',channel:'微信小程序 · EV App',
    steps:[
      {title:'選擇預訂方式',kicker:'RESERVATION METHOD',body:'查看定金預訂條件與相關權益，選擇後續訂車方式。',note:'將定金金額、預訂方式和相關權益放在決策位置。',images:[['deposit-method','小程序定金預訂方式'],['mini-detail','原訂單詳情']]},
      {title:'確認預訂資料',kicker:'ORDER DETAILS',body:'保留已選車型配置，填寫預訂資料並確認訂單。',note:'延續上一階段配置與資料，避免重新理解整個訂車流程。',images:[['deposit-info','小程序定金資料與訂單確認'],['mini-orders','原車輛訂單']]},
      {title:'支付定金',kicker:'PAYMENT',body:'完成定金付款，進入準車主服務與交車手續。',note:'付款成功後明確引導下一階段：合同與交車進度。',images:[['deposit-success','小程序定金支付成功'],['app-progress','EV App 購車進度']]}
    ]
  },
  delivery: {
    eyebrow:'03 / 後續交車設計',title:'線上處理交車手續，追蹤車輛進度。',desc:'從定金之後的交車階段出發，規劃電子合同、金融服務、尾款與線上驗車等功能，讓準車主在線上完成更多手續。',channel:'EV App · 線下服務',
    steps:[
      {title:'購車進度',kicker:'DELIVERY STATUS',body:'集中呈現定金、合同、車輛生產、發運與交付等進度。',note:'準車主可查看目前狀態，知道接下來需要完成的任務。',images:[['app-progress','EV App 購車進度'],['app-services','EV App 交付服務']]},
      {title:'電子合同',kicker:'E-CONTRACT',body:'從車主首頁的藍色「簽署購車合同」按鈕進入，閱讀合同說明、完成簽署並查看結果。',note:'由車主首頁的購車進度入口銜接合同簽署，將原本需線下辦理的手續納入數位交車流程。',images:[['app-progress','車主首頁：簽署購車合同入口'],['contract-notice','合同簽署說明'],['contract-sign','電子合同簽署'],['contract-success','電子合同簽署成功']]},
      {title:'線上驗車',kicker:'ONLINE INSPECTION',body:'先選擇驗車方式，再進入線上驗車介紹頁，查看車況影片與分項進度，最後提交結果。',note:'由線下工作人員拍攝車輛狀況，用戶可在線上依序查看並確認。',images:[['inspection-method','選擇驗車方式'],['inspection-guide','線上驗車介紹 Landing Page'],['inspection-overview','驗車整體進度'],['inspection-exterior','外觀分項檢查'],['inspection-result','確認驗車結果'],['inspection-success','驗車完成']]}
    ]
  }
};
const stageTabs=[...document.querySelectorAll('.stage-tab')];
let activeStage='reserve', activeStageStep=0;
function imageButton(name,caption,cls='') {return `<button type="button" class="image-button ${cls}" data-image="${A(name)}" data-caption="${caption}" aria-label="放大檢視：${caption}"><img src="${A(name)}" alt="${caption}" loading="${cls.includes('wire-image')?'eager':'lazy'}"><span aria-hidden="true">↗</span></button>`}
function setStage(key,step=0,focus=false){
  activeStage=key;activeStageStep=step;const s=stages[key];
  stageTabs.forEach(b=>{let on=b.dataset.stage===key;b.classList.toggle('is-active',on);b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1;if(on&&focus)b.focus()});
  document.querySelector('#stage-panel').setAttribute('aria-labelledby',`stage-tab-${key}`);
  document.querySelector('#stage-eyebrow').textContent=s.eyebrow;document.querySelector('#stage-title').textContent=s.title;document.querySelector('#stage-desc').textContent=s.desc;document.querySelector('#stage-channel').textContent=s.channel;
  document.querySelector('#stage-steps').innerHTML=s.steps.map((item,i)=>`<button type="button" class="step-btn ${i===step?'is-active':''}" role="tab" aria-selected="${i===step}" aria-controls="stage-display" tabindex="${i===step?0:-1}" data-step="${i}"><span>0${i+1}</span><strong>${item.title}</strong><i aria-hidden="true">↗</i></button>`).join('');
  const x=s.steps[step];
  const images=x.images.map(([name,caption],i)=>imageButton(name,caption,`shot-${i+1} ${name.startsWith('ui-')?'desktop-shot':'phone-shot'}`)).join('');
  const pairedScreens=x.images.length===2&&x.images[0][0].startsWith('ui-')&&screenRatios[x.images[0][0]]&&screenRatios[x.images[1][0]];
  const screenStyle=pairedScreens?`style="--desktop-grow:${screenRatios[x.images[0][0]]};--phone-grow:${screenRatios[x.images[1][0]]}"`:'';
  document.querySelector('#stage-display').innerHTML=`<div class="display-heading"><span>${x.kicker}</span><span>0${step+1} / 0${s.steps.length} · ${x.images.length>3?'左右滑動查看全部畫面':'點圖放大查看'}</span></div>${x.images.length>3?`<div class="mobile-gallery-controls"><span>共 ${x.images.length} 個畫面，左右滑動查看</span><button type="button" data-gallery-next>下一張 →</button></div>`:''}<div class="display-images ${x.images.some(([name])=>name.startsWith('ui-'))?'has-desktop':''} ${x.images.length>3?'many-images':x.images.length>2?'three-images':''}" ${screenStyle}>${images}</div><div class="display-description"><h4>${x.title}</h4><p>${x.body}</p></div>`;
  document.querySelector('#stage-note').textContent=x.note;
}
stageTabs.forEach((b,i)=>b.addEventListener('click',()=>setStage(b.dataset.stage)));
function bindArrowTabs(container,selector,activate){container.addEventListener('keydown',e=>{let list=[...container.querySelectorAll(selector)],i=list.indexOf(document.activeElement);if(i<0)return;let n=e.key==='ArrowRight'||e.key==='ArrowDown'?(i+1)%list.length:e.key==='ArrowLeft'||e.key==='ArrowUp'?(i-1+list.length)%list.length:e.key==='Home'?0:e.key==='End'?list.length-1:-1;if(n<0)return;e.preventDefault();activate(list[n]);list[n].focus()})}
bindArrowTabs(document.querySelector('.stage-tabs'),'.stage-tab',b=>setStage(b.dataset.stage));
const stepRail=document.querySelector('#stage-steps');stepRail.addEventListener('click',e=>{const b=e.target.closest('[data-step]');if(b)setStage(activeStage,Number(b.dataset.step))});bindArrowTabs(stepRail,'.step-btn',b=>setStage(activeStage,Number(b.dataset.step)));
setStage('reserve');

const processTabs=[...document.querySelectorAll('.explorer-tab')];
let wireStep=0;
const wireframes=[
 ['車型選擇','同一畫面呈現車型、關鍵硬體與價格，方便橫向比較。','wire-model'],
 ['車輛配置','分開處理車色、車輪與內飾選擇，並同步顯示總價。','wire-config'],
 ['個人資訊','確認個人或公司購買、聯絡資料與付款方式。','wire-info'],
 ['預訂完成','提示意向金權益，並引導查看訂單與小程序。','wire-success']
];
function wireframeMarkup(){const [title,body,img]=wireframes[wireStep];return `<div class="process-panel-head"><span>03 / WIREFRAME</span><h3>把流程變成可操作的原型。</h3><p>根據測試結果與 User Flow，收斂成四個購車步驟。點擊下方步驟，在同一區塊切換各頁 Wireframe。</p></div><div class="wire-selector" role="tablist" aria-label="Wireframe 訂車步驟">${wireframes.map((v,i)=>`<button type="button" data-wire="${i}" role="tab" aria-controls="wire-display" aria-selected="${i===wireStep}" tabindex="${i===wireStep?0:-1}" class="${i===wireStep?'is-active':''}"><span>0${i+1}</span>${v[0]}</button>`).join('')}</div><div class="wire-display" id="wire-display" role="tabpanel"><div><span class="small-label">0${wireStep+1} / 04 · UX WIREFRAME</span><h4>${title}</h4><p>${body}</p></div>${imageButton(img,`${title} Wireframe`,'wire-image')}</div>`}
const panel=document.querySelector('#process-panel');
function setProcess(key,focus=false){processTabs.forEach(b=>{const on=b.dataset.process===key;b.classList.toggle('is-active',on);b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1;if(on&&focus)b.focus()});panel.setAttribute('aria-labelledby',`process-tab-${key}`);
 if(key==='testing'){const shots=(a,b,c,d)=>`<div class="insight-shots"><figure>${imageButton(a,c,'insight-shot')}<figcaption>${c}</figcaption></figure><figure>${imageButton(b,d,'insight-shot')}<figcaption>${d}</figcaption></figure></div>`;const insight=(no,title,body,dir,shotsHtml)=>`<article><div class="insight-copy"><span>${no}</span><h4>${title}</h4><p>${body}</p><b>${dir}</b></div>${shotsHtml}</article>`;panel.innerHTML=`<div class="testing-layout"><div class="process-panel-head"><span>01 / USER TESTING</span><h3>先用既有購車流程，<br>確認在地化問題。</h3><p>將已上線的美國與歐洲銷售官網翻譯為中文原型，招募中國用戶進行訪談與易用性測試，再把回饋歸納成後續設計方向。</p><div class="method-flow"><span>翻譯原型</span><i>→</i><span>招募與訪談</span><i>→</i><span>歸納 Insight</span></div><figure class="interview-feature"><img src="${A('interview-participants')}" alt="Mach-E 購車流程訪談參與者照片" loading="lazy"><figcaption>訪談用戶</figcaption></figure></div><div class="insight-list">${insight('INSIGHT 01','車型差異難以比較','用戶希望在同一頁查看不同車型的關鍵配置，而不是反覆打開詳情或向下捲動。','→ 同屏比較車型',shots('insight-model-source','insight-model-battery','車型選擇','電池方案選擇'))}${insight('INSIGHT 02','頁面資訊過多','選配時應聚焦車輛外觀與當下任務，減少無關選項的干擾。','→ 分步呈現選配',shots('insight-config-source','insight-config-info','配置選擇','查看預訂資訊'))}${insight('INSIGHT 03','品牌感需要更鮮明','用戶期待更強烈的 Mustang 風格與電動科技視覺。','→ 強化車輛與品牌畫面',shots('insight-brand-source','insight-brand-share','Landing Page','社群分享'))}</div></div>`}
 if(key==='define')panel.innerHTML=`<div class="define-layout"><div class="process-panel-head"><span>02 / DEFINE</span><h3>High-level Design<br>Workshop</h3><p>依據用戶測試回饋，與福特數位部門一起定義基本 User Journey，討論購車流程與功能，整理 MVP 核心功能、User Flow 及後續交車方向。</p><div class="define-points"><span>車型比較</span><span>360° 看車</span><span>個人 / 公司資料</span><span>意向金付款</span><span>訂單管理</span></div></div><div class="workshop-images"><figure>${imageButton('workshop-people','福特團隊進行 High-level Design Workshop','workshop-image')}<figcaption>與福特數位部門進行 Workshop</figcaption></figure><figure>${imageButton('workshop-flow','Workshop 討論後的流程與功能草圖','workshop-image')}<figcaption>定義 User Journey 與功能</figcaption></figure></div></div>`;
 if(key==='wireframe')panel.innerHTML=wireframeMarkup();
 if(key==='ui')panel.innerHTML=`<div class="ui-layout"><div class="process-panel-head"><span>04 / UI DESIGN</span><h3>沿用 Ford Design System，<br>再為中國市場本地化。</h3><p>以美國 Ford Design System 的佈局、色彩、按鈕與排版為基礎，參考 US / EU 官網規範，再依中國用戶的使用情境調整組件，完成官網與小程序介面。</p></div><div class="ui-reference-sequence"><figure>${imageButton('ds-us-full','美國 Ford Design System：元件與互動狀態','ui-reference-image')}<figcaption>Ford Design System</figcaption></figure><span class="ui-sequence-arrow" aria-hidden="true">→</span><figure>${imageButton('ds-us-site','US / EU 官網選配規範','ui-reference-image')}<figcaption>US / EU 官網規範</figcaption></figure><span class="ui-sequence-arrow" aria-hidden="true">→</span><figure>${imageButton('ds-local-full','中國市場本地化按鈕規範','ui-reference-image')}<figcaption>本地化規範</figcaption></figure></div></div>`;
 if(key==='iteration')panel.innerHTML=`<div class="iteration-layout"><div class="process-panel-head"><span>05 / ITERATION</span><h3>從小定，延伸到大定與交車。</h3><p>意向金預訂完成後，設計範圍延伸至定金與交車手續。電子合同、金融服務、尾款支付與線上驗車等功能，銜接準車主後續任務。</p></div><div class="mobile-gallery-controls"><span>小定 → 大定 → 交車，左右滑動查看</span><button type="button" data-gallery-next>下一張 →</button></div><div class="iteration-cards"><article><span>01 / 小定</span>${imageButton('mini-success','小定：預訂成功','iteration-image')}<p>意向金預訂</p></article><i aria-hidden="true">→</i><article><span>02 / 大定</span>${imageButton('deposit-method','大定：選擇定金預訂方式','iteration-image')}<p>支付定金</p></article><i aria-hidden="true">→</i><article><span>03 / 交車</span>${imageButton('app-progress','交車：EV App 購車進度','iteration-image')}<p>交付手續</p></article></div></div>`;
}
processTabs.forEach(b=>b.addEventListener('click',()=>setProcess(b.dataset.process)));
bindArrowTabs(document.querySelector('.explorer-tabs'),'.explorer-tab',b=>setProcess(b.dataset.process));
panel.addEventListener('click',e=>{const b=e.target.closest('[data-wire]');if(b){wireStep=Number(b.dataset.wire);panel.innerHTML=wireframeMarkup();return}const jump=e.target.closest('[data-jump-stage]');if(jump)setStage(jump.dataset.jumpStage)});
panel.addEventListener('keydown',e=>{const list=[...panel.querySelectorAll('[data-wire]')],i=list.indexOf(document.activeElement);if(i<0)return;let n=e.key==='ArrowRight'?(i+1)%list.length:e.key==='ArrowLeft'?(i-1+list.length)%list.length:-1;if(n<0)return;e.preventDefault();wireStep=n;panel.innerHTML=wireframeMarkup();panel.querySelectorAll('[data-wire]')[n].focus()});
setProcess('testing');

document.addEventListener('click',e=>{const next=e.target.closest('[data-gallery-next]');if(!next)return;const gallery=next.parentElement.parentElement.querySelector('.display-images,.iteration-cards');if(!gallery)return;const nearEnd=gallery.scrollLeft+gallery.clientWidth>=gallery.scrollWidth-8;gallery.scrollTo({left:nearEnd?0:gallery.scrollLeft+Math.max(190,gallery.clientWidth*.72),behavior:'smooth'})});

const dialog=document.querySelector('#image-dialog');
document.addEventListener('click',e=>{const b=e.target.closest('[data-image]');if(!b)return;document.querySelector('#dialog-caption').textContent=b.dataset.caption;const img=document.querySelector('#dialog-image');const phoneImage=/mini-|app-|deposit-|contract-|inspection-|owner-|insight-/.test(b.dataset.image);dialog.classList.toggle('phone-dialog',phoneImage);img.src=b.dataset.image;img.alt=b.dataset.caption;dialog.showModal()});
document.querySelector('#dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});

// Header: hide while scrolling down, show again on any upward scroll or near the top.
{const header=document.querySelector('.header');let last=scrollY;addEventListener('scroll',()=>{const y=scrollY;if(Math.abs(y-last)<6)return;header.classList.toggle('is-hidden',y>last&&y>header.offsetHeight);last=y},{passive:true})}
