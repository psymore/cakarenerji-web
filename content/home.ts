import type { PhotoId } from "@/lib/images";
import type { Txt } from "@/lib/text";

/** Home page text (verbatim, first HTML of the live site). */
export const home = {
  heroPhone: { t: "+90 (312) 999 06 45", fixed: "(312 ) → (312)" } as Txt,
  aboutLabel: "HAKKIMIZDA",
  aboutH2: "Enerjiye Dair Her Şey !",
  aboutText:
    "Enerjiye Dair Her Şey ! sloganı ile yürümeye devam eden firmamız dünyadaki önemli sektör kuruluşlarından biri olma yolunda azim ve kararlılıkla çalışma hayatına devam etmektedir.",
  aboutLink: "Ayrıntıları öğrenin",
  companyH4: "Çakar Enerji A.Ş.",
  companyText:
    "Çakar Enerji, güneş enerji santrallerinin (GES) yatırım ve teknik danışmanlığı, projelendirme, sistem tasarımı, lisanslı ve lisanssız santral kurulumları, lisans alımı ve işletme, ayrıca lisanssız üretim yönetmeliğine uygun olarak projeler planlama, projelendirme, finans ve uygulama ile kurulum sonrası teknik bakım, onarım konularında da hizmet veriyor. Endüstriyel kurulumların yanı sıra evsel çatı kurulumlarında da çözümler sunuyor. Şebeke bağlantılı (On-Grid) sistemlerin yanı sıra şebekeden bağımsız akü destekli sistemler (Off-Grid), güneş enerjili sulama sistemleri, LED aydınlatma sistemleri, güneş enerjili kamera sistemleri ve elektrikli araç şarj istasyonları gibi alanlarda da hizmet vermektedir.",
  companyLink: "Daha fazla bilgi edinin",
  newsletterH2: "Çakar Enerji Bültenine Abone Olun",
  newsletterText: {
    t: "Çakar Enerji ürünleri, hizmetleri ve yeniliklerinden anında haber almak için üye olun.",
    fixed: "almak almak → almak",
  } as Txt,
  slogan: "Enerji daha güçlü atılımlar için birikimdir..\"",
  quoteLabel: "FİYAT AL !",
  quoteH2: "FİYAT AVANTAJLARI",
  quoteBefore: "Tedarikçimiz olmak için ",
  quoteLink: "teklif alın",
  quoteAfter: ".",
  contactH2: "Bize Ulaşın",
  directions: "Bilgi edinin",
  /** Logo strip of the live home page. The live images have no alt text; names come from the file names (Q-26). */
  partners: [
    { id: "huawei", alt: "Huawei" },
    { id: "cw", alt: "CW Enerji" },
    { id: "tomma", alt: "Tommatech" },
    { id: "fimer", alt: "Fimer" },
    { id: "partner5", alt: "" },
  ] as { id: PhotoId; alt: string }[],
};
