(() => {
  const $ = (id) => document.getElementById(id);
  const comparison = {
    products: {
      old:'old-products',new:'new-products',oldRect:[2,25,58,5],newRect:[2,33,62,10],
      oldTitle:'商品名稱小，辨識依賴圖片。',oldCopy:'店員找商品時需要仔細閱讀小字；將平板轉向顧客核對時，也不容易看清楚。部分商家甚至自行在商品圖上加字、用顏色區分。',
      newTitle:'放大重點文字，拉開商品間距。',newCopy:'以更清楚的品名、對比與卡片留白，協助店員快速辨識商品；同時將分類列與常用入口展開，降低尋找成本。',evidence:'訪談依據：禮覓、Bella.FIR、登義提及字體與商品辨識問題。',label:'商品資訊辨識'
    },
    count: {
      old:'old-cart',new:'new-products',oldRect:[74,4,13,5],newRect:[67,91,31,7],
      oldTitle:'總件數存在，卻不容易被注意。',oldCopy:'店員會逐件與顧客核對，但部分商家在操作中忽略了購物車標題裡的總件數。件數資訊的層級不夠明確。',
      newTitle:'在結帳動作上，再次強調總件數。',newCopy:'保留購物車標題的件數，並在「繼續結帳」按鈕上顯示總件數；商品列明確呈現數量、單價與總價，支援最後核對。',evidence:'訪談依據：農純鄉、茶籽堂、逐露天下重視商品與總件數核對。',label:'商品件數核對'
    },
    member: {
      old:'old-member',new:'new-offers',oldRect:[46,7,26,15],newRect:[33,9,33,22],
      oldTitle:'會員資訊藏在不直觀的入口。',oldCopy:'店員不一定知道長按會員、點擊會員等級可以查看資訊。查消費紀錄還需切到顧客模組，打斷收銀流程。',
      newTitle:'把會員資訊入口放在收銀情境裡。',newCopy:'新版提案展開會員摘要與「會員資訊」入口，讓查詢更容易被看見。交易紀錄與續會差額的整合，則是研究提出的後續需求。',evidence:'訪談依據：茶籽堂、旺萊山、登義不易找到會員資訊；Bella.FIR、農純鄉等需要消費紀錄。',label:'會員資訊入口'
    },
    offers: {
      old:'old-offers',new:'new-offers',oldRect:[60,81,38,8],newRect:[67,10,31,64],
      oldTitle:'要先套用，才知道優惠；異動後又重來。',oldCopy:'店員需點「套用優惠」才看得到已達與未達優惠。商品增減會讓優惠失效，忙碌時容易漏套，甚至需要取消訂單重結。',
      newTitle:'獨立優惠區域，讓確認成為必經步驟。',newCopy:'完整呈現可享優惠與門檻，保留是否套用的選擇。提案讓店員可返回商品列表，切回優惠時保留設定，減少反覆操作。',evidence:'訪談依據：禮覓、Bella.FIR、茶籽堂、農純鄉、旺萊山與登義均提及優惠重設或互斥問題。',label:'優惠顯示與套用'
    }
  };
  const issues = {
    font:{kicker:'ISSUE 01 / READABILITY',title:'商品名稱太小，只能靠圖片辨識。',text:'商品列表和購物車的字體偏小，店員找商品要靠圖片；把平板轉給顧客確認時，顧客也不容易看清楚。有店家甚至自己在商品圖上加字、用顏色區分。',quote:'現在商品的品名文字比較小，我們會自己去做圖，就是讓品名的文字。',cite:'登義',stores:'提及店家：禮覓、Bella.FIR、登義',image:'issue-font',caption:'商品名稱與購物車品名字體偏小'},
    count:{kicker:'ISSUE 02 / ITEM COUNT',title:'總件數有顯示，卻沒人注意到。',text:'店員會一件一件跟顧客核對數量，但購物車標題裡的總件數、商品上的數量角標都不夠明顯，部分店家在操作中直接略過。',quote:'如果能顯示總數量我覺得會更好，有時候還是會跟客人核對一下。',cite:'茶籽堂',stores:'提及店家：農純鄉、茶籽堂、逐露天下',image:'issue-count',caption:'總件數與單品數量標示不夠明顯'},
    member:{kicker:'ISSUE 03 / MEMBERSHIP',title:'會員升等資訊，要長按才找得到。',text:'店家想在結帳時告訴顧客離下一個會員等級還差多少，但這個資訊要長按會員才會出現，多數店員不知道有這個入口。',quote:'沒發現點擊「會員等級」可以查看等級資訊，發現的時候很驚訝。',cite:'登義',stores:'提及店家：茶籽堂、旺萊山、登義',image:'issue-member',caption:'會員說明要長按才出現，入口不直觀'},
    history:{kicker:'ISSUE 04 / PURCHASE HISTORY',title:'看不到消費紀錄，要切到顧客模組。',text:'店家會用消費紀錄確認顧客是否符合 VIP 資格、推薦回購商品，但結帳畫面沒有入口，必須切到顧客模組重新查一次。',quote:'消費紀錄最為重要，會透過查看線上線下消費記錄來確定顧客是不是滿足 VIP 資格。',cite:'Bella.FIR',stores:'提及店家：Bella.FIR、茶籽堂、農純鄉',image:'issue-history',caption:'結帳畫面沒有消費紀錄入口'},
    hidden:{kicker:'ISSUE 05 / OFFER VISIBILITY',title:'沒按「套用優惠」，就不知道有什麼優惠。',text:'購物車不會顯示已達、未達的優惠，必須點「套用優惠」才看得到。忙碌時容易漏按，也很難跟顧客說「再買一件就有折扣」。',quote:'很容易發生店員沒按到「套用優惠」，就無法知道這個商品有優惠。',cite:'逐露天下',stores:'提及店家：逐露天下、登義',image:'issue-offer-hidden',caption:'未點套用優惠前，看不到已達／未達優惠'},
    reset:{kicker:'ISSUE 06 / OFFER RESET',title:'商品一增減，套好的優惠就失效。',text:'套用優惠不是即時計算，只要加減商品，原本的優惠就會消失，必須重新套用；漏套時甚至要取消訂單重結。這是走查中反饋最多的問題。',quote:'只要增加或刪減商品，所有東西都會重來，要再套用優惠。',cite:'茶籽堂',stores:'提及店家：禮覓、Bella.FIR、茶籽堂、農純鄉、旺萊山、登義',image:'issue-offer-reset',caption:'加減商品後，已套用的優惠消失'},
    gift:{kicker:'ISSUE 07 / GIFTS',title:'贈品無法選擇，只能送最貴的。',text:'設定多階層贈品時，系統只會自動帶入符合條件中金額最高的贈品，也不支援多規格，店家只好另外設 0 元商品來處理。',quote:'希望可以「選擇要送什麼」或「不送」。',cite:'登義',stores:'提及店家：逐露天下、登義',image:'issue-gift',caption:'贈品自動帶入，無法選擇規格'}
  };
  function selectTab(button) {
    button.parentElement.querySelectorAll('[role=tab]').forEach(tab => {
      const selected = tab === button;
      tab.setAttribute('aria-selected',String(selected)); tab.tabIndex = selected ? 0 : -1;
    });
  }
  function animate(el) { el.classList.remove('swap-in'); void el.offsetWidth; el.classList.add('swap-in'); }
  function setScreen(prefix,asset,label) {
    $(prefix+'-image').src = 'assets/'+asset+'.webp';
    $(prefix+'-image').alt = label;
    $(prefix+'-screen').dataset.image = 'assets/'+asset+'.webp';
    $(prefix+'-screen').dataset.caption = label;
  }
  document.querySelectorAll('[data-compare]').forEach(button => button.addEventListener('click',() => {
    const item = comparison[button.dataset.compare]; selectTab(button);
    $('compare-panel').setAttribute('aria-labelledby',button.id);
    ['old','new'].forEach(prefix => {
      setScreen(prefix,item[prefix],(prefix === 'old' ? '舊版 POS：' : '新版提案：')+item.label);
      ['x','y','w','h'].forEach((key,index) => $(prefix+'-focus').style.setProperty('--'+key,item[prefix+'Rect'][index]+'%'));
      $(prefix+'-title').textContent = item[prefix+'Title']; $(prefix+'-copy').textContent = item[prefix+'Copy'];
    });
    animate($('compare-panel'));
  }));
  function showIssue(key) {
    const d = issues[key];
    $('issue-panel').setAttribute('aria-labelledby','issue-tab-'+key);
    $('issue-kicker').textContent=d.kicker;$('issue-title').textContent=d.title;$('issue-text').textContent=d.text;
    $('issue-quote').textContent='「'+d.quote+'」';$('issue-cite').textContent='— '+d.cite;$('issue-stores').textContent=d.stores;
    $('issue-image').src='assets/'+d.image+'.webp';$('issue-image').alt=d.caption;
    $('issue-screen').dataset.image='assets/'+d.image+'.webp';$('issue-screen').dataset.caption=d.caption;$('issue-caption').textContent=d.caption;
  }
  document.querySelectorAll('[data-issue]').forEach(button => button.addEventListener('click',() => { selectTab(button); showIssue(button.dataset.issue); animate($('issue-panel')); }));
  showIssue('font');
  document.querySelectorAll('[role=tablist]').forEach(list => list.addEventListener('keydown',event => {
    const tabs=[...list.querySelectorAll('[role=tab]')],index=tabs.indexOf(document.activeElement);
    if(index<0)return;let next;
    if(event.key==='ArrowRight')next=(index+1)%tabs.length;
    if(event.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;
    if(event.key==='Home')next=0;
    if(event.key==='End')next=tabs.length-1;
    if(next!==undefined){event.preventDefault();tabs[next].focus();tabs[next].click();}
  }));
  const dialog=$('image-dialog');
  document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click',() => {
    $('dialog-image').src=button.dataset.image;$('dialog-image').alt=button.dataset.caption;
    $('dialog-caption').textContent=button.dataset.caption;dialog.showModal();
  }));
  $('dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
})();

// Header: hide while scrolling down, show again on any upward scroll or near the top.
{const header=document.querySelector('.header');let last=scrollY;addEventListener('scroll',()=>{const y=scrollY;if(Math.abs(y-last)<6)return;header.classList.toggle('is-hidden',y>last&&y>header.offsetHeight);last=y},{passive:true})}
