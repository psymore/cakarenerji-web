/**
 * Home page first-screen layouts we tried, kept as options in the header settings menu so they can be
 * compared side by side. The choice is <html data-home-layout> (CSS shows or hides the parts, see
 * "Home layouts" in app/globals.css) and is saved in localStorage, like the theme. `split` is the default.
 */
export const homeLayouts = [
  { id: "split", label: "Bölünmüş hero", hint: "İki fotoğraf, ayraç sloganın altında" },
  { id: "hero-strip", label: "Hero + kırpık şerit", hint: "Kısa hero, altında tarla şeridi" },
  { id: "strip", label: "Hero + şerit", hint: "Tam hero, hemen altında tarla şeridi" },
  { id: "strip-about", label: "Şerit Hakkımızda altında", hint: "Tarla şeridi metinden sonra" },
  { id: "company-bg", label: "Tarla arka planda", hint: "Tarla, Çakar Enerji A.Ş. bloğunun arkasında" },
] as const;

export type HomeLayout = (typeof homeLayouts)[number]["id"];

export const HOME_LAYOUT_KEY = "home-layout";
export const DEFAULT_HOME_LAYOUT: HomeLayout = "split";

const ids = homeLayouts.map((l) => l.id);
const isLayout = (v: string | null | undefined): v is HomeLayout => ids.some((id) => id === v);

export function resolveHomeLayout(): HomeLayout {
  try {
    const saved = localStorage.getItem(HOME_LAYOUT_KEY);
    if (isLayout(saved)) return saved;
  } catch {}
  return DEFAULT_HOME_LAYOUT;
}

export function applyHomeLayout(layout: HomeLayout, persist = false) {
  document.documentElement.dataset.homeLayout = layout;
  if (!persist) return;
  try {
    localStorage.setItem(HOME_LAYOUT_KEY, layout);
  } catch {}
}

/** Runs during HTML parsing, next to the theme script, so the first paint already has the chosen layout. */
export const homeLayoutInitScript = `(function(){try{var v=${JSON.stringify(ids)},l;try{l=localStorage.getItem("${HOME_LAYOUT_KEY}")}catch(e){}if(v.indexOf(l)<0)l="${DEFAULT_HOME_LAYOUT}";document.documentElement.dataset.homeLayout=l}catch(e){}})()`;
