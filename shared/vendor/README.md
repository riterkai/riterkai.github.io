# OpenCC JS

`opencc-t2cn.js` is the browser UMD Traditional-to-Simplified bundle from
OpenCC JS 1.4.2: https://www.npmjs.com/package/opencc-js/v/1.4.2
Source: https://github.com/nk2028/opencc-js
License: MIT (see `opencc-LICENSE`). Vendored so conversion works locally without a CDN.

The portfolio uses character conversion (`tw` → `cn`) and its own product/UX
terminology glossary in `shared/language.js`. Avoid the generic `twp` reverse
phrase dictionary here: it changes existing Mainland terms such as 微信小程序
into 微信小进程. Authored Traditional text is retained in memory for exact restoration.
