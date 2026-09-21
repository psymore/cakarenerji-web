import type { ElementType, ReactNode } from "react";

/** Text. Objects record a typo fix: `t` is the corrected text, `fixed` says "before → after". */
export type Txt = string | { t: string; fixed: string };

export const text = (v: Txt) => (typeof v === "string" ? v : v.t);

/**
 * Renders a text element. A typo fix is just its corrected text here: pages show no marking.
 * The fixes are collected and shown, with the red border, on /duzeltmeler (see lib/typo-fixes.ts).
 */
export function T({
  v,
  as: Tag = "p",
  className,
  children,
  ...rest
}: {
  v: Txt;
  as?: ElementType;
  className?: string;
  children?: ReactNode;
  [prop: string]: unknown;
}) {
  return (
    <Tag {...rest} className={className}>
      {text(v)}
      {children}
    </Tag>
  );
}
