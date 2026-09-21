# Çakar Enerji Website - Project Status

Source site: https://cakarenerji.com/ (GoDaddy Website Builder, no source code available)

## Current phase

Phase 1: live-site audit written (`AUDIT.md`). Waiting on the owner's answers (AUDIT.md section 19, Phase 0) before content work starts.

## Done

- Next.js 16, React 19, TypeScript, Tailwind 4 and ESLint set up. `npm run dev` and `npm run build` work. Dev and start ports are 3100.
- 23 live pages crawled into `audit-data/` (git-ignored); runtime text, cookie banner and menu captured by hand in `audit-data/scraper/`.
- `AUDIT.md` written.

## Not done

- Remaining measurements (some responsive widths, keyboard/focus, runtime contrast); listed in `AUDIT.md` section 1.
- Design system, components, routes, content

## Constraints

- Do not invent business information.
- Preserve existing content, functionality and routes (percent-encoded slugs exactly as on the live site).
- Further data collection from the live site is done by the user in their own Chrome, never by automated crawling (see `AGENTS.md`).
