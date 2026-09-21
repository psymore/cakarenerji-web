"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { applyTheme, DEFAULT_THEME, resolveTheme, type Theme } from "@/lib/theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
const current = () => (document.documentElement.dataset.theme as Theme | undefined) ?? DEFAULT_THEME;

/** Light/dark switch. Both icons are always rendered; CSS shows the one for the active theme, so there is no icon flash. */
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, current, () => DEFAULT_THEME);

  // Dev Strict Mode remounts <html> and clears the attribute the inline script set; put it back. No-op in production.
  useLayoutEffect(() => {
    applyTheme(resolveTheme());
  }, []);

  const next: Theme = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={next === "dark" ? "Koyu temaya geç" : "Açık temaya geç"}
      onClick={() => applyTheme(next, true)}
    >
      <svg className="theme-toggle__sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
      </svg>
      <svg className="theme-toggle__moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" />
      </svg>
    </button>
  );
}
