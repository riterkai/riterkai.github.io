/* Portfolio localization. Keep authored Traditional Chinese intact for exact restoration.
 * OpenCC JS 1.4.2 (MIT) is vendored locally; no visitor text leaves the browser.
 */
(() => {
  'use strict';
  const pageRoot = document.documentElement;
  const route = window.KC_LOCALE;
  const allowed = route?.allowed || ['zh-TW', 'en'];
  let language = route?.language || 'zh-TW';
  // Built on first use: Traditional readers never pay for the converter or the English table.
  let convertCharacters = null;
  // Product/engineering terminology used in Mainland China, beyond character conversion.
  const terms = [
    ['替代实境', '替代现实'], ['虚拟实境', '虚拟现实'], ['混合实境', '混合现实'], ['扩增实境', '增强现实'], ['扩充实境', '增强现实'], ['使用者体验', '用户体验'], ['使用者研究', '用户研究'], ['使用者', '用户'],
    ['模组', '模块'], ['讯息', '消息'], ['录影', '录像'], ['搜寻', '搜索'], ['纪录', '记录'], ['连线', '连接'], ['灯号', '指示灯'], ['情境', '场景'], ['直觉', '直观'], ['登入', '登录'], ['登出', '退出登录'], ['范本', '模板'], ['回馈', '反馈'], ['相容', '兼容'], ['硬体', '硬件'], ['软体', '软件'], ['互动', '交互'], ['智慧', '智能'],
    ['元件', '组件'], ['组件模板', '组件模板'], ['程式码', '代码'], ['程式', '程序'],
    ['原始码', '源代码'], ['前端代码', '前端代码'], ['影片', '视频'], ['视讯', '视频'],
    ['确认资料', '确认信息'], ['买家资料', '买家信息'], ['订车资料', '订车信息'], ['填写资料', '填写信息'], ['资料夹', '文件夹'], ['资料库', '数据库'], ['资料', '数据'], ['档案', '文件'],
    ['介面', '界面'], ['装置', '设备'], ['连结', '链接'], ['萤幕', '屏幕'],
    ['滑鼠', '鼠标'], ['游标', '光标'], ['检视', '查看'], ['捲动', '滚动'],
    ['卷动', '滚动'], ['页签', '选项卡'], ['预设', '默认'], ['设定', '设置'],
    ['储存', '保存'], ['汇出', '导出'], ['汇入', '导入'], ['载入', '加载'],
    ['网路', '网络'], ['伺服器', '服务器'], ['记忆体', '内存'], ['效能', '性能'],
    ['解析度', '分辨率'], ['最佳化', '优化'], ['资讯', '信息'], ['专案', '项目'],
    ['数位', '数字'], ['行销', '营销'], ['社群', '社交平台'], ['行动端', '移动端'],
    ['穿戴式设备', '可穿戴设备'], ['行动装置', '移动设备'], ['行动应用', '移动应用'], ['导览', '导航'],
    ['卖场', '店铺'], ['结帐', '结算'], ['结账', '结算'], ['联络', '联系'], ['相簿', '相册'], ['帐号', '账号'], ['帐户', '账户'], ['品质', '质量'],
    ['计程车', '出租车'], ['计画', '计划'], ['透过', '通过'], ['藉由', '借助'],
    ['实作', '实现'], ['串接', '对接'], ['串连', '连接'], ['触控', '触摸'],
    ['简报', '演示文稿'], ['按钮', '按钮'], ['团队协作', '团队协作']
  ].filter(([a,b]) => a !== b).sort((a,b) => b[0].length-a[0].length);
  const termMap = new Map(terms);
  const pattern = new RegExp(terms.map(([a]) => a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
  const simplify = text => {
    convertCharacters ||= OpenCC.Converter({ from: 'tw', to: 'cn' });
    return convertCharacters(text).replace(pattern, match => termMap.get(match));
  };
  const normalize = text => text.replace(/\s+/g, ' ').trim();
  let english = null, fragmentPattern = null;
  function buildEnglish() {
    english = new Map();
    Object.entries(window.KC_EN || {}).forEach(([source, target]) => {
      english.set(normalize(source), target);
      english.set(normalize(simplify(source)), target);
    });
    // Exact sentences first; phrase matching also covers captions assembled at runtime.
    const fragments = [...english.keys()].filter(key => /[\u3400-\u9fff]/.test(key))
      .sort((a, b) => b.length - a.length);
    fragmentPattern = new RegExp(fragments.map(key => key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
  }
  const toEnglish = text => {
    if (!english) buildEnglish();
    const key = normalize(text);
    if (!/[\u3400-\u9fff]/.test(key)) return text;
    const translated = english.get(key) ?? key.replace(fragmentPattern, match => english.get(match));
    return text.slice(0, text.indexOf(text.trimStart())) + translated + (text.match(/\s*$/)?.[0] || '');
  };
  const originals = new WeakMap();
  const attrs = ['alt', 'title', 'aria-label', 'placeholder'];
  const excluded = 'script,style,noscript,code,pre,textarea,[contenteditable="true"],[data-no-localize],.kc-language';
  function update(node, key, current, write) {
    let entries = originals.get(node);
    if (!entries) { entries = {}; originals.set(node, entries); }
    let record = entries[key];
    // A tab or application script may have just supplied a fresh authored value.
    if (!record || (current !== record.rendered && current !== record.source)) {
      record = entries[key] = { source: current, rendered: current };
    }
    const next = language === 'zh-CN' ? simplify(record.source) : language === 'en' ? toEnglish(record.source) : record.source;
    record.rendered = next;
    if (current !== next) write(next);
  }
  function element(el) {
    if (el.closest(excluded)) return;
    for (const attr of attrs) if (el.hasAttribute(attr)) {
      update(el, attr, el.getAttribute(attr), value => el.setAttribute(attr, value));
    }
    if (el.matches('meta[name="description"],meta[property="og:title"],meta[property="og:description"]')) {
      update(el, 'content', el.content, value => { el.content = value; });
    }
  }
  function translate(root) {
    if (!root.isConnected) return;
    if (root.nodeType === Node.TEXT_NODE) {
      if (!root.parentElement?.closest(excluded)) update(root, 'text', root.nodeValue, value => { root.nodeValue = value; });
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    element(root);
    root.querySelectorAll('*').forEach(element);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) translate(walker.currentNode);
  }
  let observer, scheduled = false;
  const pending = new Set();
  const options = { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: [...attrs, 'content'] };
  function flush() {
    scheduled = false;
    observer.disconnect();
    pending.forEach(translate);
    pending.clear();
    if (pageRoot.isConnected) observer.observe(pageRoot, options);
  }
  function setLanguage(next, initial = false) {
    if (!allowed.includes(next)) return;
    language = next;
    observer.disconnect();
    document.documentElement.lang = next;
    // The page is authored in Traditional Chinese: opening it in zh-TW needs no pass over the DOM.
    if (!(initial && next === 'zh-TW')) translate(document.documentElement);
    document.querySelectorAll('.kc-language button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === next));
    });
    route?.setLanguage(next);
    if (pageRoot.isConnected) observer.observe(pageRoot, options);
    document.dispatchEvent(new CustomEvent('kc:languagechange', { detail: { language: next } }));
  }
  function init() {
    const header = document.querySelector('body > header');
    if (header) {
      const control = document.createElement('div');
      control.className = 'kc-language';
      control.setAttribute('role', 'group');
      control.setAttribute('aria-label', 'Language / 语言 / 語言');
      control.innerHTML = allowed.map(code => `<button type="button" lang="${code}" data-language="${code}" aria-pressed="false">${{'zh-CN':'简体','zh-TW':'繁體',en:'English'}[code]}</button>`).join('');
      control.addEventListener('click', event => {
        const button = event.target.closest('button[data-language]');
        if (button) setLanguage(button.dataset.language);
      });
      header.appendChild(control);
    }
    observer = new MutationObserver(records => {
      for (const record of records) {
        if (record.type === 'childList') record.addedNodes.forEach(node => pending.add(node));
        else pending.add(record.target);
      }
      if (!scheduled) { scheduled = true; queueMicrotask(flush); }
    });
    setLanguage(language, true);

  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
