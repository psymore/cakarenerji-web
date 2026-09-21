import type { Txt } from "@/lib/text";

/** Page text is verbatim from the live site (audit-data/pages, audit-data/scraper).
 *  A typo fix is written as { t: corrected, fixed: "before → after" }. */
export type Block = { p: Txt } | { ul: Txt[] } | { chips: Txt[] };
export type Section = {
  heading?: Txt;
  body: Block[];
  cards?: { heading: string; text: Txt }[];
};
export type DocPage = {
  kind: "doc";
  title: string;
  h1: Txt;
  layout: "prose" | "datasheet" | "facts";
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
export type StubPage = { kind: "stub"; title: string; h1: Txt };
export type SoonPage = { kind: "soon"; title: string; h1: Txt; text: Txt };
export type PageDef = DocPage | FaqPage | FormPage | StubPage | SoonPage;

export const p = (v: Txt): Block => ({ p: v });
export const ul = (v: Txt[]): Block => ({ ul: v });
export const chips = (v: Txt[]): Block => ({ chips: v });

