/* URL prefix selects the audience; ?lang= selects its alternate language. */
(() => {
  const match = location.pathname.match(/^\/(CN|TW|EN)(?=\/|$)/);
  if (!match) {
    location.replace('/TW' + location.pathname + location.search + location.hash);
    return;
  }
  const prefix = match[1];
  const defaultLanguage = { CN: 'zh-CN', TW: 'zh-TW', EN: 'en' }[prefix];
  const allowed = prefix === 'CN' ? ['zh-CN', 'en'] : ['zh-TW', 'en'];
  const requested = new URL(location.href).searchParams.get('lang');
  let language = allowed.includes(requested) ? requested : defaultLanguage;
  function localize(raw) {
    const url = new URL(raw, document.baseURI);
    if (url.origin !== location.origin) return raw;
    const path = url.pathname.replace(/^\/(CN|TW|EN)(?=\/|$)/, '') || '/';
    if (!/^(\/$|\/profile\/(?:index\.html)?$|\/type\/(?:index\.html)?$|\/work\/[^/]+\/(?:index\.html)?$)/.test(path)) return raw;
    url.pathname = '/' + prefix + path;
    if (language !== defaultLanguage) url.searchParams.set('lang', language);
    else url.searchParams.delete('lang');
    return url.pathname + url.search + url.hash;
  }
  function updateLinks() {
    document.querySelectorAll('a[href]:not([download])').forEach(link => {
      const raw = link.getAttribute('href');
      const next = raw.startsWith('#') ? location.pathname + location.search + raw : localize(raw);
      if (next !== raw) link.setAttribute('href', next);
    });
  }
  window.KC_LOCALE = { prefix, allowed, defaultLanguage, language, localize,
    setLanguage(next) {
      language = next;
      this.language = next;
      const url = new URL(location.href);
      if (next === defaultLanguage) url.searchParams.delete('lang');
      else url.searchParams.set('lang', next);
      history.replaceState(history.state, '', url);
      updateLinks();
    }
  };
  document.documentElement.lang = language;
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]:not([download])');
    if (link) {
      const raw = link.getAttribute('href');
      const next = raw.startsWith('#') ? location.pathname + location.search + raw : localize(raw);
      if (next !== raw) link.setAttribute('href', next);
    }
  }, true);
  document.addEventListener('DOMContentLoaded', () => {
    updateLinks();
    const observer = new MutationObserver(updateLinks);
    const body = document.body;
    if (body) observer.observe(body, { childList: true, subtree: true });
  }, { once: true });
})();
