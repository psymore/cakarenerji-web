"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

/** Route prefix of the second design (same routes, another look). Empty for the classic design. */
export const UI2_BASE = "/ui-2";

export const inUi2 = (path: string | null) => path === UI2_BASE || !!path?.startsWith(`${UI2_BASE}/`);

/** Current design's route prefix: "" or "/ui-2". */
export const useBase = () => (inUi2(usePathname()) ? UI2_BASE : "");

/**
 * Path without the design prefix and without a trailing slash (the static export on GitHub Pages serves
 * every page as /x/), so active-link checks work in both designs and on both hosts.
 */
export const stripBase = (path: string) => {
  const p = inUi2(path) ? path.slice(UI2_BASE.length) || "/" : path;
  return p.length > 1 ? p.replace(/\/+$/, "") : p;
};

/** next/link that keeps internal links inside the design the visitor is browsing. */
export function Link({ href, ...rest }: ComponentProps<typeof NextLink>) {
  const base = useBase();
  const internal = typeof href === "string" && href.startsWith("/") && !href.startsWith("//");
  return <NextLink href={internal ? `${base}${href === "/" ? "" : href}` || "/" : href} {...rest} />;
}
