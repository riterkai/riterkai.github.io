# Self-hosted portfolio fonts

Downloaded 2026-10-25. Font families and requested weights match the original Google Fonts stylesheets: Caveat, Inter, JetBrains Mono, Noto Sans TC, and Roboto. The VR outline face also uses a local copy of Inter Bold (upstream Inter v4.1).

Stylesheets retain their original unicode-range subsets and font-display: swap. Font files are shared across pages and locales; browsers only load the subsets they need. No page text was uploaded for font subsetting.

Sources and original URLs are recorded in manifest.json. These URLs are provenance only, not runtime requests. Fonts are distributed under the SIL Open Font License 1.1; original notices are in licenses/. Do not omit these licenses when deploying.

Deploy this complete directory with the site. Regenerate locale entry points using `python3 scripts/build_locale_routes.py` after editing canonical HTML.
