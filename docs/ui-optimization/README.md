# UI optimization

Measured audits of the V0 build (2026-09-21), and what was changed because of them.

| Folder | What is in it |
|---|---|
| `ui-ux/` | Full UI/UX audit (`audit-2026-09-21.md`): findings, status, remaining work. `scripts/` holds the axe and keyboard checks. |
| `animation-performance/` | Hero light and sunrise measurements (`measurements.md`): before, after, method, caveats. `scripts/` holds the harnesses. |

## Running the scripts

They are not part of the app and are not in `package.json`. In a scratch folder:

```
npm i playwright-core axe-core
```

Then `npm run build && npm run start` in the repo (port 3100) and run a script with `node`. Edit the hard-coded Chrome path (`C:/Program Files/Google/Chrome/Application/chrome.exe`) if needed. `ui-ux/scripts/audit.js` reads a `routes.json` (array of paths) next to it; the route list is in `.next/prerender-manifest.json`. They only ever hit localhost, never the live site (see `docs/scraping.md`).

Lighthouse was run with `npx lighthouse http://localhost:3100/ [--preset=desktop] --only-categories=performance,accessibility,best-practices,seo`.
