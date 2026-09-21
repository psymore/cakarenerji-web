import type { Txt } from "@/lib/text";

/** Single source for contact data. Conflicting values on the live site: see docs/route-must-haves.md. */
export const site = {
  name: "Çakar Enerji",
  legal: "Çakar Enerji A.Ş",
  tagline: "Solar Solutions",
  phone: { display: "0 (312) 999 06 45", tel: "+903129990645" },
  email: "info@cakarenerji.com",
  whatsapp: "https://wa.me/903129990645",
  address: {
    street: "Macun Mahallesi 187. Cadde Türeli İş Merkezi No:54/73",
    city: "06374 Yenimahalle/Ankara",
  },
  hours: "08:00 – 19:00",
  year: 2026,
  social: {
    facebook: "https://www.facebook.com/338728497484094",
    instagram: "https://www.instagram.com/cakarenerjii",
    linkedin: "https://www.linkedin.com/company/%C3%A7akarenerji/?viewAsMember=true",
  },
} as const;

export const mapsQuery = "Macun Mahallesi 187. Cadde Türeli İş Merkezi Yenimahalle Ankara";

/** Routes are the live site's slugs, percent-encoded exactly as on the live site (no leading slash). */
export const slugs = {
  about: "hakk%C4%B1m%C4%B1zda-1",
  faq: "s%C4%B1k-sorulan-sorular",
  hr: "i%CC%87nsan-kaynaklar%C4%B1",
  contact: "i%CC%87leti%C5%9Fim",
  services: "hizmetlerimiz",
  industrial: "end%C3%BCstriyel-ges-kurulumu",
  land: "arazi-tipi-ges-kurulumu",
  carpark: "solar-otopark-uygulamalar",
  consulting: "proje-dan%C4%B1%C5%9Fmanl%C4%B1%C4%9F%C4%B1",
  supply: "hammadde-ve-%C3%BCr%C3%BCn-tedari%C4%9Fi",
  landFrames: "arazi-ges-konstr%C3%BCksiyon",
  carport: "solar-carport-sistemleri",
  roof: "%C3%A7at%C4%B1-ges-konstr%C3%BCksiyon",
  quote: "projeleri%CC%87mi%CC%87z-1",
} as const;

export const href = (slug: string) => `/${slug}`;

export type NavItem = { label: Txt; href: string };
export type NavGroup = { label: string; items: NavItem[] };

export const navHome: NavItem = { label: "Ana Sayfa", href: "/" };

export const navGroups: NavGroup[] = [
  {
    label: "KURUMSAL",
    items: [
      { label: "Hakkımızda", href: href(slugs.about) },
      { label: "Sık Sorulan Sorular", href: href(slugs.faq) },
      { label: "İnsan Kaynakları", href: href(slugs.hr) },
      { label: "İletişim", href: href(slugs.contact) },
    ],
  },
  {
    label: "HİZMETLERİMİZ",
    items: [
      { label: "Hizmetlerimiz", href: href(slugs.services) },
      { label: "Endüstriyel GES Kurulumu", href: href(slugs.industrial) },
      { label: "Arazi Tipi GES Kurulumu", href: href(slugs.land) },
      {
        label: { t: "Solar Otopark Uygulamaları", fixed: "Uygulamalar → Uygulamaları" },
        href: href(slugs.carpark),
      },
      { label: "Proje Danışmanlığı", href: href(slugs.consulting) },
      { label: "Hammadde ve Ürün Tedariği", href: href(slugs.supply) },
    ],
  },
  {
    label: "ÜRÜNLERİMİZ",
    items: [
      { label: "Arazi GES Konstrüksiyon", href: href(slugs.landFrames) },
      { label: "Solar Carport Sistemleri", href: href(slugs.carport) },
      { label: "Çatı GES Konstrüksiyon", href: href(slugs.roof) },
    ],
  },
];

export const navTail: NavItem[] = [
  { label: "PROJELERİMİZ", href: href(slugs.quote) },
  { label: "Blog", href: "/blog-1" },
];

export const productLinks = navGroups[2].items;
