<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Scraping the live site (https://cakarenerji.com/)

- From now on, further data collection from the live site is done with the **Ultimate Web Scraper Chrome extension**, run by the user in their own Chrome. Agents cannot install or drive it: ask the user to run it and hand over the export (HTML, text, JSON, screenshots or HAR), then work from that.
- Do **not** re-crawl the site with Playwright, curl or fetch scripts, and do not bypass blocks with proxies or IP changes. Automated runs (~1000 requests in a few minutes, mostly the home page at ~118 requests per load) got this machine's IP throttled twice (`ERR_CONNECTION_TIMED_OUT`, TCP 443 drops to both site IPs). The site works on the user's phone.
- The extension's Claude integration needs a paid plan, so the user collects data by hand in their own Chrome instead: open the page, DevTools (`F12`) → Console → `copy(document.body.innerText)` (or `copy(document.documentElement.outerHTML)` for HTML), then paste into a file. Screenshots only for visual issues (viewport, not full page, a handful at most).
- **Create the target files yourself, do not ask the user to make them.** Before telling the user to paste something, create the empty files in `audit-data/scraper/` (git-ignored) with `: > name.txt` and list the names and page URLs in your message. Use ASCII, lowercase, hyphenated names by route (`cati-ges.txt`, `iletisim.txt`, `blog-teias.txt`); the user's own copy may have Turkish letters, so `ls` the folder first and reuse an existing file instead of creating a duplicate. Screenshots the user takes cannot be pre-created; give the expected file name instead. Ask for one step at a time, and read the saved files afterwards to check they are not empty (an unsaved IDE tab leaves a 0-byte file).
- Existing data lives in `audit-data/` (git-ignored). Check it before asking for anything new. What is still unmeasured is listed in `AUDIT.md` section 1 and in `OPEN-QUESTIONS.md`.

# Open questions

- `OPEN-QUESTIONS.md` is the single list of things nobody has answered yet: questions for the business owner (section A) and technical uncertainties (section B). Business information (address, hours, phone, legal name, claims, project references) is never invented: if you need something that is not in the repo, add a row there instead of guessing, and keep the related text as a marked placeholder.
- When an answer arrives, update that row's status (`answered`, then `done` once it is on the site) and fill the answer column. Cite the `AUDIT.md` issue ID in the "related issue" column.

# Git

- The project lives at `D:\CodeSpace\cakarenerji-web` and has its own repo (branch `main`, no remote). Run git from there.
- It was moved here from `C:\Users\4D\cakarenerji-web`. The old accidental repo in `C:\Users\4D` was deleted by the user.
