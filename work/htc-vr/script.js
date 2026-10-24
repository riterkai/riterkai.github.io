const figmaFile='https://www.figma.com/design/Mk040r1YUevAiLz0mXWvKa/HTC-Vive-Eagle-%E6%91%98%E8%A6%81';
const specs=[
  {id:'basic',group:'core',label:'普通模式',tag:'CORE 01 / BASIC MODE',title:'從選取開始，立即操作物件。',lead:'選中物件後打開面版 預設進入基礎操作，用戶可以直接用Controller或是手勢拖拽移動。',points:[['選取與面板','抓取物件後進入選取狀態並開啟面板，可查看物件資訊與基本操作。'],['模式切換','可從面板切換移動、旋轉、縮放的 Gizmo 操作。']],image:'../updated/basic.jpg',imageAlt:'物件面板與普通模式 UX 規格畫面',caption:'Object Panel · Basic Mode',node:'2014-9982'},
  {id:'gizmo',group:'core',label:'Gizmo',tag:'CORE 02 / PRECISION CONTROL',title:'三軸控制，兼顧自由與精準。',lead:'進入 Gizmo 模式後，控制器依移動、旋轉或縮放任務切換，用戶可以透過細部軸向以及數字進行精細化調整。',points:[['移動 Move','拖曳 X、Y、Z 軸箭頭，沿指定方向移動。'],['旋轉 Rotate','拖曳三軸旋轉環，繞指定軸旋轉。'],['縮放 Scale','拖曳軸向控制柄做單軸縮放；拖曳中心控制柄等比縮放。']],image:'../updated/gizmo.jpg',imageAlt:'Gizmo 移動旋轉縮放三軸規格畫面',caption:'Gizmo Control · Move / Rotate / Scale',node:'2014-10408'},
  {id:'duplicate',group:'core',label:'複製',tag:'CORE 03 / DUPLICATE',title:'快速建立物件副本。',lead:'適用於重複擺放相同模型的場景。複製後保留原物件的旋轉角度與縮放比例。',points:[['進入放置模式','點擊複製後，使用控制器預覽新物件要放的位置。'],['確認複製','移動至目標位置，按下 Trigger 完成複製並載入新物件。'],['保留設定','新物件沿用原物件的旋轉角度與縮放比例。']],image:'../updated/duplicate.jpg',imageAlt:'物件列表複製與放置流程 UX 規格畫面',caption:'Object List · Duplicate',node:'2014-12761'},
  {id:'lock',group:'core',label:'鎖定／隱藏',tag:'CORE 04 / LOCK & HIDE',title:'保護配置，管理物件可見性。',lead:'鎖定後取消選取高亮並停用移動、旋轉與縮放；隱藏則切換物件的可見狀態，讓空間中的配置更容易管理。',points:[['隱藏物件','隱藏後物件不可編輯，僅保留鎖定與刪除。'],['鎖定物件','取消選取高亮；移動、旋轉、縮放停用，保留查看權限。']],image:'../updated/lock.jpg',imageAlt:'物件隱藏與鎖定狀態 UX 規格畫面',caption:'Object Panel · Lock / Hide',node:'2014-12356'},
  {id:'selection',group:'edge',label:'選取狀態',tag:'EDGE 01 / SELECTION STATES',title:'每一步，都有清楚的狀態回饋。',lead:'從可互動提示到選取完成，再到取消選取，讓使用者知道物件是否正被操作。',points:[['Hover','射線指向物件，或控制器進入抓取範圍時，呈現懸停狀態。'],['Selected','按下 Grip 或直接抓取後，物件高亮並顯示面板。'],['Deselected','點擊場景空白處，取消選取並關閉面板。']],image:'../updated/selection.jpg',imageAlt:'Hover Selected Deselected 物件選取狀態規格畫面',caption:'Object Selection · Hover / Selected / Deselected',node:'2014-11319'},
  {id:'hand',group:'edge',label:'手勢模式',tag:'EDGE 02 / HAND MODE',title:'操作面板跟著手走。',lead:'切換為手勢輸入時，物件面板預設附著在手掌後方，跟隨手部移動。',points:[['隨手可用','常用控制維持在手邊，減少尋找面板的動作。'],['左右切換','點擊切換按鈕，可將面板移至另一隻手。']],image:'../updated/hand.jpg',imageAlt:'手勢模式物件面板規格畫面',caption:'Advanced Mode · Hand Mode',node:'2014-13419'},
  {id:'switch-hand',group:'edge',label:'遙控器切換',tag:'EDGE 03 / SWITCH CONTROLLER',title:'切換左右手，保持操作順手。',lead:'點擊切換按鈕，將物件面板移至另一側，配合左右手的操作需求。',image:'../updated/switch-hand.jpg',imageAlt:'物件面板左右控制器切換規格畫面',caption:'Object Panel · Switch Hand'},
  {id:'controller',group:'edge',label:'單控制器',tag:'EDGE 04 / CONTROLLER DISCONNECT',title:'一支控制器，操作不中斷。',lead:'任一側控制器斷線時，系統自動進入單控制器模式。面板附著在斷線側手部，另一側持續負責射線與物件操作。',points:[['左側斷線','面板附著左手；右側控制器負責操作。'],['右側斷線','面板附著右手；左側控制器負責操作。']],image:'../updated/controller.jpg',imageAlt:'單側控制器斷線後的互動規格畫面',caption:'Advanced Mode · Single Controller',node:'2014-13522'},
  {id:'joystick',group:'edge',label:'搖桿輸入',tag:'EDGE 05 / INPUT CONFLICT',title:'同一時間，只讓一種輸入生效。',lead:'按住 Trigger 並推動搖桿，可依目前軸向進行刻度化移動、旋轉或縮放物件。',points:[['移動','按住 Trigger 推動搖桿，沿目前軸向移動；暫停 Trigger 拖曳以避免衝突。'],['旋轉','按住 Trigger 推動搖桿，向上為順時針，向下為逆時針。'],['縮放','向上推動放大，向下推動縮小；暫停 Trigger 拖曳縮放。']],image:'../updated/joystick.jpg',imageAlt:'搖桿操作與輸入衝突規格畫面',caption:'Advanced Mode · Joystick',node:'2014-16785'}
];
const tabs=[...document.querySelectorAll('.spec-tabs')];
let active='basic';
for(const spec of specs){const tab=document.createElement('button');tab.type='button';tab.className='spec-tab';tab.id=`tab-${spec.id}`;tab.setAttribute('role','tab');tab.setAttribute('aria-controls','spec-panel');tab.dataset.spec=spec.id;tab.textContent=spec.label;document.querySelector(`#${spec.group}-tabs`).appendChild(tab)}
const allTabs=[...document.querySelectorAll('.spec-tab')];
function showSpec(id,focus=false){active=id;const spec=specs.find(s=>s.id===id);allTabs.forEach(tab=>{const on=tab.dataset.spec===id;tab.setAttribute('aria-selected',String(on));tab.tabIndex=on?0:-1;if(on&&focus)tab.focus()});const panel=document.querySelector('#spec-panel');panel.setAttribute('aria-labelledby',`tab-${id}`);panel.innerHTML=`<p class="spec-lead">${spec.lead}</p><figure class="spec-figure"><div class="spec-image-scroll" tabindex="0" role="region" aria-label="完整 UX Spec 圖片，可左右捲動"><button type="button" class="spec-image-button" data-enlarge data-image="assets/spec/illustrations/${spec.image}" aria-label="放大查看 ${spec.caption}"><img src="assets/spec/illustrations/${spec.image}" alt="${spec.imageAlt}"><span>放大查看 ↗</span></button></div></figure>`}
allTabs.forEach(tab=>tab.addEventListener('click',()=>showSpec(tab.dataset.spec)));
tabs.forEach(list=>list.addEventListener('keydown',e=>{const items=[...list.querySelectorAll('.spec-tab')],i=items.indexOf(document.activeElement);if(i<0)return;let n=e.key==='ArrowRight'||e.key==='ArrowDown'?(i+1)%items.length:e.key==='ArrowLeft'||e.key==='ArrowUp'?(i-1+items.length)%items.length:e.key==='Home'?0:e.key==='End'?items.length-1:-1;if(n<0)return;e.preventDefault();showSpec(items[n].dataset.spec,true)}));
showSpec(active);
document.querySelector('#demo-fullscreen')?.addEventListener('click',()=>{const frame=document.querySelector('.demo-window');if(document.fullscreenElement)document.exitFullscreen();else frame.requestFullscreen?.()});
const dialog=document.querySelector('#image-dialog');document.querySelector('#spec-panel').addEventListener('click',e=>{if(!e.target.closest('[data-enlarge]'))return;const spec=specs.find(s=>s.id===active);const img=document.querySelector('#dialog-image');img.src=e.target.closest("[data-enlarge]").dataset.image;img.alt=spec.imageAlt;document.querySelector('#dialog-caption').textContent=spec.caption;dialog.showModal()});document.querySelector('#dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});

document.querySelectorAll("[data-mode]").forEach(link=>link.addEventListener("click",()=>showSpec(link.dataset.mode)));

// Header: hide while scrolling down, show again on any upward scroll or near the top.
{const header=document.querySelector('.header');let last=scrollY;addEventListener('scroll',()=>{const y=scrollY;if(Math.abs(y-last)<6)return;header.classList.toggle('is-hidden',y>last&&y>header.offsetHeight);last=y},{passive:true})}

// Prototype full screen for phones/tablets: real fullscreen where supported (Android, iPad),
// otherwise a full-viewport overlay (iPhone Safari has no element fullscreen).
{const win=document.querySelector('.demo-window'),open=document.querySelector('.demo-expand'),close=document.querySelector('.demo-close');
const exit=()=>{win.classList.remove('is-full');document.body.classList.remove('demo-locked');close.hidden=true;if(document.fullscreenElement)document.exitFullscreen().catch(()=>{})};
const overlay=()=>{win.classList.add('is-full');document.body.classList.add('demo-locked')};
open?.addEventListener('click',async()=>{close.hidden=false;if(!win.requestFullscreen)return overlay();
// Some browsers neither grant nor reject the request; fall back to the overlay if nothing happens.
const ok=await Promise.race([win.requestFullscreen({navigationUI:'hide'}).then(()=>true,()=>false),new Promise(r=>setTimeout(()=>r(false),500))]);
if(ok&&document.fullscreenElement)return;overlay()});
close?.addEventListener('click',exit);
document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement&&!win.classList.contains('is-full'))close.hidden=true});
addEventListener('keydown',e=>{if(e.key==='Escape'&&win.classList.contains('is-full'))exit()});}

// Move the hero illustration with pointer or keyboard input.
{
  const object=document.querySelector('.hero-object'),hero=object?.closest('.hero');
  if(object&&hero){
    let x=0,y=0,drag=null;
    function move(dx,dy){
      const r=object.getBoundingClientRect(),bounds=hero.getBoundingClientRect();
      const nextX=Math.max(bounds.left+12-r.left,Math.min(dx,bounds.right-12-r.right));
      const nextY=Math.max(bounds.top+44-r.top,Math.min(dy,bounds.bottom-12-r.bottom));
      x+=nextX;y+=nextY;
      object.style.setProperty('--drag-x',x+'px');object.style.setProperty('--drag-y',y+'px');
    }
    object.addEventListener('pointerdown',e=>{
      if(e.button!==0)return;
      drag={id:e.pointerId,x:e.clientX,y:e.clientY};
      object.setPointerCapture(e.pointerId);object.classList.add('is-dragging');
    });
    object.addEventListener('pointermove',e=>{
      if(!drag||drag.id!==e.pointerId)return;
      move(e.clientX-drag.x,e.clientY-drag.y);drag.x=e.clientX;drag.y=e.clientY;
    });
    const end=()=>{drag=null;object.classList.remove('is-dragging')};
    object.addEventListener('pointerup',end);object.addEventListener('pointercancel',end);object.addEventListener('lostpointercapture',end);
    object.addEventListener('keydown',e=>{
      const delta={ArrowLeft:[-16,0],ArrowRight:[16,0],ArrowUp:[0,-16],ArrowDown:[0,16]};
      if(delta[e.key]){e.preventDefault();move(...delta[e.key]);}
      if(e.key==='Home'){e.preventDefault();x=0;y=0;object.style.setProperty('--drag-x','0px');object.style.setProperty('--drag-y','0px');}
    });
    window.addEventListener('resize',()=>{x=0;y=0;object.style.setProperty('--drag-x','0px');object.style.setProperty('--drag-y','0px');});
  }
}
