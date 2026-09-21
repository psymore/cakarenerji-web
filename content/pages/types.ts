import type { PhotoId } from "@/lib/images";
import type { Txt } from "@/lib/text";

/** Page text is verbatim from the live site (audit-data/pages, audit-data/scraper).
 *  A typo fix is written as { t: corrected, fixed: "before → after" }. */
export type Block = { p: Txt } | { ul: Txt[] } | { chips: Txt[] };
export type Section = {
  heading?: Txt;
  body: Block[];
  cards?: { heading: string; text: Txt; photo?: PhotoId }[];
};
export type DocPage = {
  kind: "doc";
  title: string;
  h1: Txt;
  layout: "prose" | "datasheet" | "facts";
  photo?: PhotoId; // hero background, from the live page
  sections: Section[];
  cta?: { label: string; href: string };
};
export type FaqPage = {
  kind: "faq";
  title: string;
  h1: Txt;
  intro: string;
  items: { q: Txt; body: Block[] }[];
};
export type FormPage = {
  kind: "hr" | "contact" | "quote";
  title: string;
  h1: Txt;
};
/** Photo slider of a live page: `ratio` is width / height of the frame; `contain` shows whole pictures (mixed portrait and landscape). */
export type Gallery = { photos: PhotoId[]; ratio: number; contain?: boolean };
export type StubPage = { kind: "stub"; title: string; h1: Txt; gallery?: Gallery };
export type SoonPage = { kind: "soon"; title: string; h1: Txt; text: Txt; photo?: PhotoId };
export type PageDef = DocPage | FaqPage | FormPage | StubPage | SoonPage;

export const p = (v: Txt): Block => ({ p: v });
export const ul = (v: Txt[]): Block => ({ ul: v });
export const chips = (v: Txt[]): Block => ({ chips: v });

