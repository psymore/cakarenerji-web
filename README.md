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

- `app/` routes: `page.tsx` (home), `[slug]/` (14 content routes, keyed by the live site's percent-encoded slugs, incl. U+0307 ones), `blog-1/` and `blog-1/f/[slug]/`, `duzeltmeler/` (typo gallery, review aid, not linked from the site), `not-found.tsx`, `layout.tsx`, `globals.css` (design tokens and styles).
- `content/` page text, verbatim from the live site: `pages/` (one module per page group), `home.ts`, `blog-posts.ts`, `blog-body.ts` (parser for `blog/*.txt`), `blog-template.ts`.
- `components/` UI (`fixes/` = typo gallery): shell (`SiteHeader`, `SiteFooter`, `CookieNotice`), shared (`PageHero`, `Blocks`, `Modules`, `MailForm`, `ContactCard`, `Facades`, `Countdown`), `home/`, `pages/` (one view per page kind), `blog/`.
- `lib/` `site.ts` (contact data, nav, slugs) and `text.tsx` (text renderer that marks typo fixes).
- `docs/` audit (`audit/`), scraping procedure, and `route-must-haves.md` (must-have blocks, contradictions, change log).
- Keep files small: split a file before it becomes a "god" component or data file.
