# Çakar Enerji Website - V0 Frontend Reconstruction

A clean, modern frontend reconstruction of the Çakar Enerji corporate website.

## Project Overview

This is a V0 repository foundation for a complete frontend reconstruction of [cakarenerji.com](https://cakarenerji.com/). The original website's source code and asset library are not available, so this reconstruction is based on live-site analysis and will preserve existing content, functionality, and routes.

## Goal

V0 is a pitch piece. The goal is to redesign the existing site as well as possible, present it to the company's owner, and win the job of rebuilding their site. It may be deployed (Vercel or GitHub) so the owner can see it live.

- **Redesign only.** No feature changes, no additions, no removals: the same pages, content, functionality and routes, in a new visual design.
- Business information is not available beyond what the live site shows, so nothing is invented (see Important Constraints).

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Package Manager**: npm

## Installation

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3100](http://localhost:3100) in your browser.

## Production Build

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Linting

Check code quality:

```bash
npm run lint
```

## Project Status

See [PROJECT-STATUS.md](PROJECT-STATUS.md) for current phase and constraints.

## Important Constraints

- **Content Preservation**: All existing content must be preserved from the original site
- **Functionality Preservation**: All existing functionality and features must be maintained
- **Route Preservation**: Existing routes and link destinations must remain functional
- **No Invention**: Business information must not be invented or assumed
- **Source Limitations**: Original source code and asset libraries are unavailable

## Architecture

- `app/` routes: `layout.tsx` (bare `<html>`/`<body>`, fonts, `globals.css` tokens and styles), `(classic)/` (main design: `layout.tsx` with the site chrome, `page.tsx` home, `[slug]/` 14 content routes keyed by the live site's percent-encoded slugs incl. U+0307 ones, `blog-1/` and `blog-1/f/[slug]/`, `duzeltmeler/` typo gallery, review aid, linked from the header (gallery icon), `noindex`, also served at `/ui-2/duzeltmeler`, `not-found.tsx`), `ui-2/` (second design, rounder and floating panels; same routes under `/ui-2/…`), `not-found.tsx` (unmatched URLs).
- `app/ui-2/`: `layout.tsx` (own font, `noindex`, `.ui2` wrapper, loads `css/`), route files that only re-export the `(classic)` pages (content and views are shared, never copied), `css/` (`tokens.css`, `shell.css`, `content.css`, all scoped under `.ui2` and overriding `globals.css`). To change the second design, edit only these CSS files.
- Themes: `<html data-theme>` (8 ids; `light` = the `:root` palette in `app/globals.css`, the rest = token overrides in `app/themes.css`) plus `<html data-scheme="light|dark">`. `lib/theme.ts` holds the theme list, the pre-paint inline script (saved choice, else OS preference) and the helpers; `components/ThemeMenu.tsx` is the header picker. Colours are tokens with roles (`--panel` dark band, `--strong` panel colour as text/border on the page surface, `--on-sun`, `--sun-lit`, `--silver`, `--glass`…), so a new theme is one token block in `themes.css` (it also feeds `/ui-2` through `--ui2-*`). Do not hard-code colours in component CSS. How the palettes were derived and how to add one: `docs/themes.md`.
- `components/AppLink.tsx`: `Link` that keeps internal links inside the design being browsed (adds `/ui-2` when the current path is under it). Use it instead of `next/link` for internal links in shared components. `SiteChrome` is the shared shell (skip link, header, main, footer, cookie notice).
- `content/` page text, verbatim from the live site: `pages/` (one module per page group), `home.ts`, `blog-posts.ts`, `blog-body.ts` (parser for `blog/*.txt`), `blog-template.ts`.
- `components/` UI (`fixes/` = typo gallery): shell (`SiteHeader`, `SiteFooter`, `CookieNotice`), shared (`PageHero`, `Blocks`, `Modules`, `MailForm`, `ContactCard`, `Facades`, `Countdown`), `home/`, `pages/` (one view per page kind), `blog/`.
- `lib/` `site.ts` (contact data, nav, slugs) and `text.tsx` (text renderer that marks typo fixes).
- `docs/` audit (`audit/`), scraping procedure, and `route-must-haves.md` (must-have blocks, contradictions, change log).
- Keep files small: split a file before it becomes a "god" component or data file.
