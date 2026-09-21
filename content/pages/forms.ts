import type { PageDef } from "./types";
import { slugs } from "@/lib/site";

export const formPages: Record<string, PageDef> = {
  [slugs.hr]: { kind: "hr", title: "İnsan Kaynakları", h1: "KARİYER" },
  [slugs.contact]: { kind: "contact", title: "İletişim", h1: "Bize Ulaşın" },
  [slugs.quote]: { kind: "quote", title: "PROJELERİMİZ", h1: "TEKLİF AL" },
};
