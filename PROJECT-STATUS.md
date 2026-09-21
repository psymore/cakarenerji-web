# Çakar Enerji Website - Project Status

Source site: https://cakarenerji.com/ (GoDaddy Website Builder, no source code available)

## Current phase

Phase 1 done: live-site audit (`AUDIT.md`, `docs/audit/`). V0 frontend built for all 23 routes (redesign only, live content verbatim). Waiting on the owner's answers (`OPEN-QUESTIONS.md`) before any content decision; deployment (Vercel or GitHub) not done.

## Done

- Next.js 16, React 19, TypeScript, Tailwind 4 and ESLint set up. `npm run dev`, `npm run lint` and `npm run build` work. Dev and start ports are 3100.
- 23 live pages crawled into `audit-data/` (git-ignored); runtime text, cookie banner and menu captured by hand in `audit-data/scraper/`.
- Audit written and split into `docs/audit/`.
- V0 frontend: all 23 routes with the live site's exact slugs (incl. U+0307), verbatim text, new visual design. What was moved, filled or changed: `docs/route-must-haves.md` (change log).
- Second design with rounder shapes under `/ui-2/…` (same routes, same content, `noindex`); see `README.md` Architecture.
- Dark theme (branch `feature/dark-theme`): header toggle, saved choice, OS preference on first visit, both designs. Stage 1 of 4 themes (2 light, 2 dark); the other two are not started.

## Not done

- Remaining measurements and open owner questions (`OPEN-QUESTIONS.md`).
- Form backend, real logo and photos, legal texts, deployment.
- UI/UX and performance leftovers from the 2026-09-21 audits: `docs/ui-optimization/backlog.md` (mobile LCP 4.4 s from the cookie notice, empty mobile hero, hero light without GPU, blog heading order, fonts, unmeasured items).

## Constraints

- Do not invent business information.
- Preserve existing content, functionality and routes (percent-encoded slugs exactly as on the live site).
- Further data collection from the live site is done by the user in their own Chrome, never by automated crawling (see `AGENTS.md`, `docs/scraping.md`).
