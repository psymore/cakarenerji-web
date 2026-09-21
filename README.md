# Çakar Enerji Website - V0 Frontend Reconstruction

A clean, modern frontend reconstruction of the Çakar Enerji corporate website.

## Project Overview

This is a V0 repository foundation for a complete frontend reconstruction of [cakarenerji.com](https://cakarenerji.com/). The original website's source code and asset library are not available, so this reconstruction is based on live-site analysis and will preserve existing content, functionality, and routes.

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

This project follows Next.js best practices with a clean, scalable structure:

- `/app` - Next.js App Router pages and layouts
- `/public` - Static assets (to be populated during implementation)
- `/components` - Reusable React components (created as needed)
- `/lib` - Utility functions and helpers
