"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

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

const samePath = (a: string, b: string) => {
  try {
    return decodeURIComponent(stripBase(a)) === decodeURIComponent(stripBase(b));
  } catch {
    return stripBase(a) === stripBase(b);
  }
};

/**
 * next/link that keeps internal links inside the design the visitor is browsing. A link to the page the
 * visitor is already on scrolls back to the top (next/link does nothing then).
 */
export function Link({ href, onClick, ...rest }: ComponentProps<typeof NextLink>) {
  const base = useBase();
  const path = usePathname();
  const internal = typeof href === "string" && href.startsWith("/") && !href.startsWith("//");
  const to = internal ? `${base}${href === "/" ? "" : href}` || "/" : href;

  const click = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (internal && path && typeof to === "string" && !/[?#]/.test(to) && samePath(to, path)) {
      const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: calm ? "auto" : "smooth" });
    }
  };
  return <NextLink href={to} onClick={click} {...rest} />;
}
