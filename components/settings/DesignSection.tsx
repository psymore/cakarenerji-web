"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { inUi2, stripBase, UI2_BASE } from "@/components/AppLink";

/**
 * Settings section "Tasarım": the two designs. Each link keeps the visitor on the same page: /x <-> /ui-2/x.
 * Plain next/link on purpose: the design-aware Link would add the current design's prefix.
 */
export function DesignSection({ panelId, onNavigate }: { panelId: string; onNavigate: () => void }) {
  const raw = usePathname();
  const ui2 = inUi2(raw);
  const path = stripBase(raw);
  const title = `${panelId}-design`;
  const designs = [
    { label: "Ana tasarım", href: path, active: !ui2 },
    { label: "İkinci tasarım (UI 2)", href: path === "/" ? UI2_BASE : `${UI2_BASE}${path}`, active: ui2 },
  ];
  return (
    <section className="settings-menu__section" aria-labelledby={title}>
      <p className="settings-menu__title" id={title}>
        Tasarım
      </p>
      <ul>
        {designs.map((d) => (
          <li key={d.label}>
            <NextLink
              href={d.href}
              className="settings-menu__item"
              aria-current={d.active ? "true" : undefined}
              onClick={onNavigate}
            >
              {d.label}
            </NextLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
