"use client";

import { useSyncExternalStore } from "react";
import { applyTheme, DEFAULT_THEME, themes, type Scheme, type Theme } from "@/lib/theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
const current = () => (document.documentElement.dataset.theme as Theme | undefined) ?? DEFAULT_THEME;

const groups: { scheme: Scheme; label: string }[] = [
  { scheme: "light", label: "Açık temalar" },
  { scheme: "dark", label: "Koyu temalar" },
];

/** Settings section "Tema": every theme, light and dark side by side in two columns, each with a colour preview. */
export function ThemeSection({ panelId, onPick }: { panelId: string; onPick: () => void }) {
  const theme = useSyncExternalStore(subscribe, current, () => DEFAULT_THEME);
  const title = `${panelId}-theme`;
  return (
    <section className="settings-menu__section" aria-labelledby={title}>
      <p className="settings-menu__title" id={title}>
        Tema
      </p>
      <div className="settings-menu__cols">
        {groups.map((g) => (
          <div key={g.scheme} role="group" aria-labelledby={`${title}-${g.scheme}`}>
            <p className="settings-menu__group" id={`${title}-${g.scheme}`}>
              {g.label}
            </p>
            <ul>
              {themes
                .filter((t) => t.scheme === g.scheme)
                .map((t) => (
                  <li key={t.id}>
                    <button
                      type="button"
                      className="settings-menu__item"
                      aria-pressed={t.id === theme}
                      onClick={() => {
                        applyTheme(t.id, true);
                        onPick();
                      }}
                    >
                      <span
                        className="settings-menu__swatch"
                        aria-hidden
                        style={{ background: `linear-gradient(90deg, ${t.swatches[0]} 0 40%, ${t.swatches[1]} 40% 70%, ${t.swatches[2]} 70%)` }}
                      />
                      <span>{t.label}</span>
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
