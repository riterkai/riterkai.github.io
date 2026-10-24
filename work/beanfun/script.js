const tabs = [...document.querySelectorAll('[data-tab]')];

function activateTab(selected) {
  tabs.forEach((tab) => {
    const active = tab.dataset.tab === selected;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    const panel = document.getElementById(`panel-${tab.dataset.tab}`);
    panel.hidden = !active;
    panel.classList.toggle('is-active', active);
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab.dataset.tab));
  tab.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    const next = tabs[(index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
    activateTab(next.dataset.tab);
    next.focus();
  });
});

const themeData = {
  red: { image: 'assets/landing-red.jpg.webp', color: '#a6090d', name: '紅色' },
  navy: { image: 'assets/landing-navy.jpg.webp', color: '#111856', name: '藍色' },
  pink: { image: 'assets/landing-live.jpg.webp', color: '#b60083', name: '粉色' }
};
const themePreview = document.querySelector('.theme-preview');
const themeImage = document.getElementById('theme-image');
const themePhone = document.querySelector('.theme-phone');
document.querySelectorAll('[data-theme]').forEach((button) => {
  button.addEventListener('click', () => {
    const theme = themeData[button.dataset.theme];
    document.querySelectorAll('[data-theme]').forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    themePreview.style.setProperty('--theme', theme.color);
    themeImage.src = theme.image;
    themeImage.alt = `${theme.name}主題 Landing Page 示例`;
    themePhone.dataset.lightbox = theme.image;
    themePhone.dataset.caption = `主題化 Landing Page：${theme.name}`;
  });
});

const homeAfterImage = document.getElementById('home-after-image');
const homeAfterLabel = document.getElementById('home-after-label');
const homeHotspot = document.getElementById('home-view-hotspot');
const homeCompareScreen = homeHotspot.closest('.compare-image');
homeHotspot.addEventListener('click', () => {
  const showMine = homeCompareScreen.dataset.view !== 'mine';
  homeCompareScreen.dataset.view = showMine ? 'mine' : 'feed';
  homeAfterImage.src = showMine ? 'assets/mine-new.jpg.webp' : 'assets/feed-theme-other.jpg.webp';
  homeAfterImage.alt = showMine
    ? '新版 SHOW 我的資產頁，集中整理使用者已發布的內容'
    : '新版 SHOW 動態頁，主題列、活動提示與展覽內容清晰呈現';
  homeAfterLabel.textContent = showMine ? '新版 / 我的資產' : '新版 / 動態看展';
  homeHotspot.setAttribute('aria-label', showMine ? '點擊動態，切換回動態看展頁' : '點擊我的，切換到我的資產頁');
  homeHotspot.title = showMine ? '查看動態看展' : '查看我的資產';
  homeCompareScreen.setAttribute('aria-label', showMine ? '新版 SHOW 我的資產頁' : '新版 SHOW 動態頁');
  homeCompareScreen.scrollTop = 0;
});

const dialog = document.getElementById('image-dialog');
const dialogImage = document.getElementById('dialog-image');
const dialogCaption = document.getElementById('dialog-caption');
document.querySelectorAll('[data-lightbox]').forEach((button) => {
  button.addEventListener('click', () => {
    dialogImage.src = button.dataset.lightbox;
    dialogImage.alt = button.dataset.caption || '設計畫面';
    dialogCaption.textContent = button.dataset.caption || '設計畫面';
    dialog.showModal();
  });
});
document.getElementById('dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener('close', () => {
  dialogImage.removeAttribute('src');
});

// Header: hide while scrolling down, show again on any upward scroll or near the top.
{const header=document.querySelector('.site-header');let last=scrollY;addEventListener('scroll',()=>{const y=scrollY;if(Math.abs(y-last)<6)return;header.classList.toggle('is-hidden',y>last&&y>header.offsetHeight);last=y},{passive:true})}
