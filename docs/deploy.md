# Deploy (GitHub Pages)

The site is a static export served from GitHub Pages: `https://psymore.github.io/cakarenerji-web/`.

- **Trigger:** every push to `main` runs `.github/workflows/pages.yml` (also runnable by hand from the Actions tab).
- **Build:** `npm ci`, then `npm run build` with `PAGES_EXPORT=1` (turns on `output: "export"` and trailing slashes) and `PAGES_BASE_PATH=/<repo name>` (the site lives under `/cakarenerji-web`). `next.config.ts` reads both; without them local dev and `next start` are unchanged (root path, server output).
- **One-time setting:** repository Settings → Pages → Source must be "GitHub Actions".
- **Images:** `images.unoptimized` is on (no image server on Pages; the site hot-links the live site's images anyway, see `docs/images.md`).
- **Slugs:** Turkish and combining-dot slugs (`i̇letişim`) are exported as folders with the same bytes as the links use. Pages does not normalise Unicode, so only that exact form resolves.
- **Gallery:** `/duzeltmeler` is part of the deploy (linked from the header icon, `noindex`); see decision D-07.
- **Custom domain:** none. cakarenerji.com stays on GoDaddy; this is a preview for the owner.
