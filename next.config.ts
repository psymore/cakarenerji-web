import type { NextConfig } from "next";

// GitHub Pages serves the site as static files under /<repo>. The deploy workflow sets
// PAGES_BASE_PATH; local dev and `next start` stay at the root.
const basePath = process.env.PAGES_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  ...(process.env.PAGES_EXPORT ? { output: "export", trailingSlash: true } : {}),
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
