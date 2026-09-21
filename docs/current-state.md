# Current state (2026-09-21)

V0 pitch of https://cakarenerji.com/ is built and runs. Redesign only: no features, pages, content or functionality added or removed. Only typos are fixed.

## What exists

- **Site:** Next.js 16.3.5 App Router, all pages statically generated. 23 live routes (home, service and product pages, about, FAQ, HR, contact, projects, blog list and 7 posts) plus the new 404 and the typo gallery `/duzeltmeler`. Live slugs with Turkish and combining-dot characters resolve through one `app/[slug]` route.
- **Design:** PV-module idea. Panel blue, silver busbar lines, one gold sun. Archivo (width axis) and Source Serif 4. The home hero is a cell grid lit by a sun that rises once, then follows the pointer.
- **Typo gallery `/duzeltmeler`:** 18 fixes shown as before/after with a faded red border on the live wording, plus 7 errors left as they are. Opened from a gallery icon in the header, `noindex`, built from the `{ t, fixed }` records in the content files.
- **Code layout:** see `README.md` Architecture. Content in `content/`, one component per view in `components/`.
- **Build:** lint and typecheck clean, `npm run build` succeeds.

## Measured quality (Lighthouse, localhost)

| | Perf | A11y | Best practices | SEO |
|---|---|---|---|---|
| Mobile | 83 | 100 | 100 | 90 |
| Desktop | 99 | 100 | 100 | 90 |

Details: `docs/ui-optimization/`.

## Open

- **Owner answers** to `OPEN-QUESTIONS.md` (Q-01…Q-25). Business facts stay placeholders until answered.
- **Decision D-07:** does the gallery ship with the public deploy or come out at launch.
- **UI/UX left (backlog `docs/ui-optimization/backlog.md`, UIO-01…12):** empty upper half of the mobile hero, mobile cookie notice size and its effect on mobile LCP (4.4 s), blog post body heading levels, software-raster jank of the hero light. See `docs/ui-optimization/ui-ux/audit-2026-09-21.md` and `animation-performance/measurements.md`.
- **Deploy:** GitHub Pages via Actions on every push to `main`, see `docs/deploy.md`.
- **Not done:** owner review.

## Where things are recorded

| Need | File |
|---|---|
| Goal and architecture | `README.md`, `AGENTS.md` |
| Blocks each route must keep, every moved/filled/changed block | `docs/route-must-haves.md` |
| Live-site audit | `AUDIT.md` → `docs/audit/` |
| Unanswered questions and default decisions | `OPEN-QUESTIONS.md` |
| Scraping rules | `docs/scraping.md` |
| UI/UX and performance measurements | `docs/ui-optimization/` |
| What was done so far | `docs/session-summary.md` |
