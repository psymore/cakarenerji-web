import type { PageDef } from "./types";
import { p } from "./types";
import { slugs } from "@/lib/site";

export const supplyPages: Record<string, PageDef> = {
  [slugs.supply]: {
    kind: "doc",
    title: "Hammadde ve Ürün Tedariği",
    h1: "Ürün Tedariği ve Planlama",
    layout: "prose",
    cta: { label: "Ayrıntıları öğrenin", href: "/" },
    sections: [
      {
        heading: "Ürün Tedariği",
        body: [
          p(
            "Sektörün önde gelen üreticileri ile imzaladığımız uzun dönemli tedarik kontratları sayesinde, yatırımcılara rekabetçi fiyat ve yüksek kaliteli ürün çeşitliliği sunmaktayız.",
          ),
          p(
            "Stratejik bölgelerinde bulunan depolarımız ile ihtiyacınıza anında cevap vermekte ve dünyanın her yerine, talep edilen sürede ürün tedariği yapmaktayız.",
          ),
          p(
            "Yurt içi ve dışı güçlü partnerleri ile müşterilerimize özgü ekonomik çözümler yaratmak temel ilkemizdir.",
          ),
          p(
            "Müşterilerimiz; üstün özellikte ürün ve hizmet sahibi olmanın dışında güvenilir ve ekonomik hizmete de sahip olurlar.",
          ),
          p(
            "Sektörel deneyimimiz ile gelen taleplere en ekonomik ve en güvenilir çözümleri sahip olduğumuz geniş ürün gamı ile sağlamaktayız.",
          ),
          p("Güçlü partnerlerimiz, yurt içi satış ve servis ağımızla 7/24 yanınızdayız."),
          p("Sizler de teklif almak için taleplerinizi iletebilirsiniz."),
        ],
      },
    ],
  },

};
