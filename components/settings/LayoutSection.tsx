"use client";

import { usePathname, useRouter } from "next/navigation";
import { useSyncExternalStore } from "react";
import { stripBase, useBase } from "@/components/AppLink";
import { applyHomeLayout, DEFAULT_HOME_LAYOUT, homeLayouts, type HomeLayout } from "@/lib/home-layout";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-home-layout"] });
  return () => observer.disconnect();
}
const current = () => (document.documentElement.dataset.homeLayout as HomeLayout | undefined) ?? DEFAULT_HOME_LAYOUT;

/**
 * Settings section "Ana sayfa düzeni": the first-screen layouts we tried, to compare them. Picking one
 * closes the panel; from another page it also goes to the home page, where the choice shows.
 */
export function LayoutSection({ panelId, onPick }: { panelId: string; onPick: () => void }) {
  const layout = useSyncExternalStore(subscribe, current, () => DEFAULT_HOME_LAYOUT);
  const router = useRouter();
  const base = useBase();
  const onHome = stripBase(usePathname()) === "/";
  const title = `${panelId}-layout`;
  return (
    <section className="settings-menu__section" aria-labelledby={title}>
      <p className="settings-menu__title" id={title}>
        Ana sayfa düzeni
      </p>
      <ul className="settings-menu__cols">
        {homeLayouts.map((l) => (
          <li key={l.id}>
            <button
              type="button"
              className="settings-menu__item"
              aria-pressed={l.id === layout}
              title={l.hint}
              onClick={() => {
                applyHomeLayout(l.id, true);
                if (!onHome) router.push(base || "/");
                onPick();
              }}
            >
              <span>{l.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
