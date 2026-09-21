# Work summary so far

In order. Decisions and rules are in the files named in the right column.

| # | Task | Result | Where |
|---|---|---|---|
| 1 | Split large docs, cut token cost | `AUDIT.md` became an intro plus `docs/audit/01…07`; `docs/scraping.md` split out; `HANDOFF.md`, `PROJECT-STATUS.md` slimmed | `AUDIT.md`, `docs/` |
| 2 | Restore the user's "Open questions" section in `AGENTS.md` (it was cut by mistake) and keep the a992b05 versions of `AUDIT.md` and `OPEN-QUESTIONS.md` intact | Restored verbatim; only additions since | `AGENTS.md` |
| 3 | Record the repo's goal | Goal section in `README.md` and `AGENTS.md` | `README.md` |
| 4 | Must-have blocks per route, report of anything moved, filled, translated, merged or removed | Per-route musts, unreproducible blocks, contradictions, incomplete reads, change log | `docs/route-must-haves.md` |
| 5 | Build V0 | Full redesign on Next.js: 23 routes, 404, shell, home hero, all page kinds, blog, click-to-load video and map facades, mailto forms, countdown | `app/`, `components/`, `content/`, `lib/` |
| 6 | Fix typos without other content changes | 18 fixes recorded as data, 7 suspicious items left | `content/typo-notes.ts`, `lib/typo-fixes.ts` |
| 7 | Avoid god components | One view per page kind, one content module per page group | `README.md` Architecture |
| 8 | Note open-ended decisions and everything left as is | Section D (D-01…D-07) and the "left as is" table | `OPEN-QUESTIONS.md` |
| 9 | Move typo marking out of the pages into a gallery | `/duzeltmeler`, `noindex`, red border only there (first unlinked, later opened from a header icon) | `app/duzeltmeler/`, `components/fixes/` |
| 10 | Full UI/UX audit | 9 findings, axe, keyboard and screenshot checks | `docs/ui-optimization/ui-ux/` |
| 11 | Performance analysis of the mouse light and load | Light fine with a GPU, janky without; sunrise was the bigger cost | `docs/ui-optimization/animation-performance/` |
| 12 | Fix what the audits found | Hero light and sunrise moved to transforms; skip link; heading levels; tap targets; menu scroll lock; logo label; Q-25 for the meta description | code, `docs/route-must-haves.md` change log |

## Rules that came out of the work

- Redesign only. Business information is never invented; missing facts become rows in `OPEN-QUESTIONS.md`.
- Anything moved, filled, translated, merged or removed goes in the change log and is told to the user.
- Never crawl the live site with scripts; the user collects live data by hand.

## Not done

Deploy, git remote, owner review, and the UI/UX items listed in `docs/current-state.md`.
