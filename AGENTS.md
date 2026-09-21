<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Scraping the live site (https://cakarenerji.com/)

- From now on, further data collection from the live site is done with the **Ultimate Web Scraper Chrome extension**, run by the user in their own Chrome. Agents cannot install or drive it: ask the user to run it and hand over the export (HTML, text, JSON, screenshots or HAR), then work from that.
- Do **not** re-crawl the site with Playwright, curl or fetch scripts, and do not bypass blocks with proxies or IP changes. Automated runs (~1000 requests in a few minutes, mostly the home page at ~118 requests per load) got this machine's IP throttled twice (`ERR_CONNECTION_TIMED_OUT`, TCP 443 drops to both site IPs). The site works on the user's phone.
- Existing data lives in `audit-data/` (git-ignored). Check it before asking for anything new. What is still unmeasured is listed in `HANDOFF.md` under "Yapılamayanlar".

# Git

- This folder has its own repo (`git init -b main`). Run git from here only.
- The parent `C:\Users\4D` is an unrelated repo with 10k+ untracked files. Never commit to it, never run `git add`/`git status` there, and do not touch its `.gitignore`.
