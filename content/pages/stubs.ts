import type { PageDef } from "./types";
import { slugs } from "@/lib/site";

export const stubPages: Record<string, PageDef> = {
  [slugs.landFrames]: {
    kind: "stub",
    title: "Arazi GES Konstrüksiyon",
    h1: "Arazi Tipi Güneş Enerji Santrali Taşıyıcı Sistemleri",
  },
  [slugs.carport]: {
    kind: "stub",
    title: "Solar Carport Sistemleri | Çakar Enerji",
    h1: "Solar Carport Sistemleri",
  },
  [slugs.roof]: {
    kind: "soon",
    title: "Çatı GES Konstrüksiyon",
    h1: "Deneyimsel Çözümler Yakında...",
    photo: "roof",
    text: "Zaman daraldığı için hazırlıkları elden bırakmıyoruz. Kaçırmayın!",
  },
};
