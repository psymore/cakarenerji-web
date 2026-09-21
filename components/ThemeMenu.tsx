"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import { applyTheme, DEFAULT_THEME, resolveTheme, themes, type Scheme, type Theme } from "@/lib/theme";

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

/** Header theme picker: a palette button that opens a list of all themes, grouped light and dark, each with a colour preview. */
export function ThemeMenu() {
  const theme = useSyncExternalStore(subscribe, current, () => DEFAULT_THEME);
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  // Dev Strict Mode remounts <html> and clears the attributes the inline script set; put them back. No-op in production.
  useLayoutEffect(() => {
    applyTheme(resolveTheme());
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      button.current?.focus();
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="theme-menu" ref={root}>
      <button
        ref={button}
        type="button"
        className="theme-toggle"
        aria-label="Tema seç"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-1.8 0-1.2-1-1.6-1-2.7 0-1 .8-1.7 1.9-1.7H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3Z" />
          <circle cx="7.5" cy="11" r="1" fill="currentColor" />
          <circle cx="10.5" cy="7.2" r="1" fill="currentColor" />
          <circle cx="15" cy="7.4" r="1" fill="currentColor" />
        </svg>
      </button>
      <div className="theme-menu__panel" id={panelId} hidden={!open}>
        {groups.map((g) => (
          <div key={g.scheme} role="group" aria-labelledby={`${panelId}-${g.scheme}`}>
            <p className="theme-menu__group" id={`${panelId}-${g.scheme}`}>
              {g.label}
            </p>
            <ul>
              {themes
                .filter((t) => t.scheme === g.scheme)
                .map((t) => (
                  <li key={t.id}>
                    <button
                      type="button"
                      className="theme-menu__item"
                      aria-pressed={t.id === theme}
                      onClick={() => {
                        applyTheme(t.id, true);
                        setOpen(false);
                        button.current?.focus();
                      }}
                    >
                      <span
                        className="theme-menu__swatch"
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
    </div>
  );
}
