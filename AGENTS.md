<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Scraping the live site (https://cakarenerji.com/)

- Do **not** crawl the site with Playwright, curl or fetch scripts, and do not bypass blocks with proxies or IP changes. Automated runs got this machine's IP throttled twice.
- Live-site data is collected by the user by hand in their own Chrome. Check `audit-data/` (git-ignored) first. Before asking the user for anything, read `docs/scraping.md` (procedure, file naming, what is still unmeasured).

# Goal

- V0 is a pitch: redesign the live site as well as possible to show the business owner and win the job, possibly deployed on Vercel or GitHub. Redesign only: no feature changes, no additions, no removals of pages, content or functionality. Details in `README.md`.
- `docs/route-must-haves.md` lists the blocks each route must contain. Do not drop one. If you move, fill, translate, merge or remove any block, log it in that file's change log and tell the user. Fixed typos are written as `{ t, fixed: "before → after" }` in the content files: pages show no marking, the gallery route `/duzeltmeler` (not linked from the site) shows them with the red border, and they are logged too.

# Code

- Split a file whenever it is necessary to avoid a "god" component or data file (one view per page kind, one content module per page group). Layout: see `README.md` Architecture.

# Open questions

- `OPEN-QUESTIONS.md` is the single list of things nobody has answered yet: questions for the business owner (section A) and technical uncertainties (section B). Business information (address, hours, phone, legal name, claims, project references) is never invented: if you need something that is not in the repo, add a row there instead of guessing, and keep the related text as a marked placeholder.
- When an answer arrives, update that row's status (`answered`, then `done` once it is on the site) and fill the answer column. Cite the `AUDIT.md` issue ID in the "related issue" column.

# Git

- The project lives at `D:\CodeSpace\cakarenerji-web` and has its own repo (branch `main`, no remote). Run git from there.
- It was moved here from `C:\Users\4D\cakarenerji-web`. The old accidental repo in `C:\Users\4D` was deleted by the user.
