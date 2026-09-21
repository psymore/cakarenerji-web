# Çakar Enerji Website - Project Status

Source site: https://cakarenerji.com/ (GoDaddy Website Builder, no source code available)

## Current phase

Phase 1: live-site audit. Data collected, `AUDIT.md` not written yet. See `HANDOFF.md` for findings and what could not be measured.

## Done

- Next.js 16, React 19, TypeScript, Tailwind 4 and ESLint set up. `npm run dev` and `npm run build` work.
- 23 live pages crawled into `audit-data/` (git-ignored).

## Not done

- `AUDIT.md`
- Remaining measurements (responsive, accessibility, blog bodies); listed in `HANDOFF.md`
- Design system, components, routes, content

## Constraints

- Do not invent business information.
- Preserve existing content, functionality and routes (percent-encoded slugs exactly as on the live site).
- Further data collection from the live site goes through the Ultimate Web Scraper Chrome extension (see `AGENTS.md`).
