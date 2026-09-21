import type { PageDef } from "./types";
import { aboutPages } from "./about";
import { consultingPages } from "./consulting";
import { faqPages } from "./faq";
import { formPages } from "./forms";
import { landingPages } from "./landing";
import { servicesPages } from "./services";
import { stubPages } from "./stubs";
import { supplyPages } from "./supply";

export type { Block, DocPage, FaqPage, FormPage, PageDef, Section, SoonPage, StubPage } from "./types";

/** Every content page by percent-encoded slug (no leading slash). */
export const pages: Record<string, PageDef> = {
  ...aboutPages,
  ...faqPages,
  ...formPages,
  ...servicesPages,
  ...landingPages,
  ...consultingPages,
  ...supplyPages,
  ...stubPages,
};
