import type { PageDef } from "./types";
import { slugs } from "@/lib/site";

export const stubPages: Record<string, PageDef> = {
  [slugs.landFrames]: {
    kind: "stub",
    title: "Arazi GES Konstrüksiyon",
    h1: "Arazi Tipi Güneş Enerji Santrali Taşıyıcı Sistemleri",
    // Live page (checked 2026-09-22): the heading and a self-turning photo slider, no other text.
    gallery: { photos: ["frame4", "frame1", "frame2", "frame7", "frame8", "frame9", "frame6", "frame5", "frame3"], ratio: 806 / 343 },
  },
  [slugs.carport]: {
    kind: "stub",
    title: "Solar Carport Sistemleri | Çakar Enerji",
    h1: "Solar Carport Sistemleri",
    // Live page (checked 2026-09-22): the heading and nine photos, no other text. How the live page lays them
    // out (slider or grid) was not seen; V0 uses the same slider as Arazi GES (U-26).
    gallery: {
      photos: ["carport1", "carport2", "carport3", "carport4", "carport5", "carport6", "carport7", "carport8", "carport9"],
      ratio: 4 / 3,
      contain: true,
    },
  },
  [slugs.roof]: {
    kind: "soon",
    title: "Çatı GES Konstrüksiyon",
    h1: "Deneyimsel Çözümler Yakında...",
    photo: "roof",
    text: "Zaman daraldığı için hazırlıkları elden bırakmıyoruz. Kaçırmayın!",
  },
};
