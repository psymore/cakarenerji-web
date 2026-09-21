/**
 * Themes are selected with <html data-theme> (the palette) and <html data-scheme> (light | dark, for the few non-colour rules).
 * Palettes live in app/globals.css (`light`, the :root default) and app/themes.css (all the others).
 * `swatches` is [panel, accent, page]: only the preview dots in the header menu use it, keep it in step with themes.css.
 */
export type Scheme = "light" | "dark";
export type ThemeMeta = { id: string; label: string; scheme: Scheme; swatches: [string, string, string] };

export const themes = [
  { id: "light", label: "Açık", scheme: "light", swatches: ["#12303f", "#d9a03c", "#f1f5f7"] },
  { id: "blue-gold", label: "Mavi & Altın", scheme: "light", swatches: ["#001f5b", "#d4af37", "#fdf8e7"] },
  { id: "earth", label: "Toprak Tonları", scheme: "light", swatches: ["#5a3a29", "#daa53f", "#f5eadd"] },
  { id: "ocean", label: "Okyanus Esintisi", scheme: "light", swatches: ["#004080", "#40e0d0", "#edfff9"] },
  { id: "dark", label: "Koyu", scheme: "dark", swatches: ["#143444", "#d9a03c", "#0b1920"] },
  { id: "dark-blue-gold", label: "Koyu Mavi & Altın", scheme: "dark", swatches: ["#002b66", "#8f7925", "#000c2e"] },
  { id: "dark-earth", label: "Derin Toprak", scheme: "dark", swatches: ["#663319", "#9f7b44", "#2e1f16"] },
  { id: "dark-ocean", label: "Derin Esinti", scheme: "dark", swatches: ["#002b80", "#4b8782", "#001830"] },
] as const satisfies readonly ThemeMeta[];

export type Theme = (typeof themes)[number]["id"];

export const THEME_KEY = "theme";
export const DEFAULT_THEME: Theme = "light";

const schemeOf = (id: string): Scheme => themes.find((t) => t.id === id)?.scheme ?? "light";
const isTheme = (v: string | null): v is Theme => themes.some((t) => t.id === v);

/** Saved choice, else the OS preference. Client only. */
export function resolveTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (isTheme(saved)) return saved;
  } catch {}
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(theme: Theme, persist = false) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.dataset.scheme = schemeOf(theme);
  if (!persist) return;
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {}
}

const schemes = Object.fromEntries(themes.map((t) => [t.id, t.scheme]));

/** Runs during HTML parsing so the first paint already has the right palette (same logic as resolveTheme). */
export const themeInitScript = `(function(){try{var m=${JSON.stringify(schemes)},t;try{t=localStorage.getItem("${THEME_KEY}")}catch(e){}if(!m.hasOwnProperty(t))t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";var r=document.documentElement;r.dataset.theme=t;r.dataset.scheme=m[t]}catch(e){}})()`;
