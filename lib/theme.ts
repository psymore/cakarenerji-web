/** Themes are selected with <html data-theme>. Palettes live in app/globals.css (light) and app/themes.css (the rest). */
export const themes = ["light", "dark"] as const;
export type Theme = (typeof themes)[number];

export const THEME_KEY = "theme";
export const DEFAULT_THEME: Theme = "light";

const isTheme = (v: string | null): v is Theme => themes.includes(v as Theme);

/** Saved choice, else the OS preference. Client only. */
export function resolveTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (isTheme(saved)) return saved;
  } catch {}
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(theme: Theme, persist = false) {
  document.documentElement.dataset.theme = theme;
  if (!persist) return;
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {}
}

/** Runs during HTML parsing so the first paint already has the right palette (same logic as resolveTheme). */
export const themeInitScript = `(function(){try{var t;try{t=localStorage.getItem("${THEME_KEY}")}catch(e){}if(${JSON.stringify(themes)}.indexOf(t)<0)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}})()`;
