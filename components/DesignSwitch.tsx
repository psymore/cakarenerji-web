"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { inUi2, stripBase, UI2_BASE } from "@/components/AppLink";

/**
 * Header switch between the two designs. It keeps the visitor on the same page: /x <-> /ui-2/x.
 * Plain next/link on purpose: the design-aware Link would add the current design's prefix.
 */
export function DesignSwitch({ className = "" }: { className?: string }) {
  const raw = usePathname();
  const ui2 = inUi2(raw);
  const path = stripBase(raw);
  const classic = path;
  const second = path === "/" ? UI2_BASE : `${UI2_BASE}${path}`;
  return (
    <div className={`design-switch ${className}`.trim()} role="group" aria-label="Tasarım">
      <NextLink href={classic} aria-label="Ana tasarım" title="Ana tasarım" aria-current={ui2 ? undefined : "true"}>
        1
      </NextLink>
      <NextLink href={second} aria-label="İkinci tasarım (UI 2)" title="İkinci tasarım (UI 2)" aria-current={ui2 ? "true" : undefined}>
        2
      </NextLink>
    </div>
  );
}
