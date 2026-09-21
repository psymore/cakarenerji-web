import type { PageDef } from "./types";
import { p, ul, chips } from "./types";
import { slugs } from "@/lib/site";

export const landingPages: Record<string, PageDef> = {
  [slugs.industrial]: {
    kind: "doc",
    title: "Endüstriyel GES Kurulumu",
    h1: "Endüstriyel Çatı Güneş Enerji Santralleri",
    layout: "facts",
    cta: { label: "Ayrıntıları öğrenin", href: "/hizmetlerimiz" },
    sections: [
      {
        heading: "GENEL",
        body: [
          p(
            "Çatılarınızın boş durması yerine yenilenebilir enerji kaynaklarının en popüleri olan Solar Enerji Sistemleri ile değerlendirerek kendi enerji ihtiyacınızı karşılayabilirsiniz. Elektrik faturası öder gibi veya daha düşük bir ödeme planı ile sistemin taksitlerini ödeyerek anında tasarruf etmeye başlayabilirsiniz. İşletme giderlerinizin önemli kısmını oluşturan enerji giderlerinizden kurtularak, rekabet gücünüzü arttırıp işletmenizin karlılığını arttırabilirsiniz. Çatınız ihtiyacınız olan kurulum alanından daha geniş ise faturanızı sıfırlamak ile kalmayıp ek gelir de elde edebilirsiniz.",
          ),
        ],
      },
      {
        heading: "AVANTAJLARI",
        body: [
          ul([
            "Kısa amortisman süresi",
            "40 yıl ömrünün ve 25 yıl üretici garantisinin olması",
            "Elektriğin tüketildiği yerde üretilmesi",
            "Genelde mevcutta trafo olması",
            "Düşük kablolama maliyeti",
            "Proje için mevcut çatıların genelde yeterli olması",
            "Bakım ve servis maliyetlerinin çok düşük olması",
            "Operatöre ihtiyaç duyulmaması",
            "Yeşil enerji, gürültü ve atık yok",
          ]),
        ],
      },
      {
        heading: "UYGULAMA ALANLARI",
        body: [
          chips([
            "Fabrikalar",
            "Hastaneler",
            "Okullar & üniversiteler",
            "Oteller",
            "Soğuk hava depoları",
            "Akaryakıt istasyonları",
            "Alışveriş merkezleri",
            "Stadyumlar",
            "Fuar alanları",
            "Havalimanları",
            "Depolar & antrepolar",
            "Otobüs terminalleri",
            "Kongre ve kültür merkezleri",
          ]),
        ],
      },
    ],
  },

  [slugs.land]: {
    kind: "doc",
    title: "Arazi Tipi GES Kurulumu",
    h1: "Arazi Tipi Güneş Enerji Santralleri",
    layout: "facts",
    cta: { label: "Ayrıntıları öğrenin", href: "/" },
    sections: [
      {
        heading: "GENEL",
        body: [
          p(
            "Ülkemizin dışa bağımlı olduğu en önemli sektör olan enerji alanında, yüksek kapasiteli solar santraller kurarak, 10 yıllık dolar bazlı devlet alım garantisi ile yatırım yapabilirsiniz. Tarımsal faaliyetlere elverişsiz olan atıl durumdaki arazilerinizi solar sistemleri ile değerlendirerek ekonomiye kazandırabilirsiniz. Çatılarınızın veya otopark alanlarınızın gerekli olan uygulama alanını karşılamaması durumlarında zemine Monte Solar Sistem uygulamaları ideal bir çözüm olabilir.",
          ),
        ],
      },
      {
        heading: "AVANTAJLARI",
        body: [
          ul([
            "Güneş sınırsız ve bedavadır.",
            "Enerji maliyetlerinizi düşürür veya sıfıra indirir.",
            "Temiz, çevreye ve canlılara zararsız, atık içermeyen enerjidir.",
            "Modülerdir, taşınabilir ve ihtiyaç halinde sisteme ilaveler yapılabilir.",
            "Elektriğinin üretildiği yerde tüketim imkanı sağlar.",
            "Son kullanıcıların yakınına kuruldukları için iletim ve dağıtım cihaz gereksinimi azalır ve yerel elektrik hizmetinin güvenilirliği artar.",
            "Elektrikte kaçak ve enerji iletim kayıpları en aza indirilerek, kaçak kullanım maliyetlerinden kurtulabilirsiniz.",
            "İşletme ve bakım maliyetleri diğer sistemlere göre yok denecek kadar azdır.",
            "Dağınık elektrik üretimi ve tüketimi sayesinde trafo merkezine yüklenilmez.",
            "40 yıl kullanım ömrü, 25 yıl üretici garantisi vardır.",
            "Gereken enerji her yerde, her bölgede ve her mevsimde bulunabilir.",
            "Pratik, kolay ve kısa sürede kurulum imkanı mevcuttur.",
          ]),
        ],
      },
      {
        heading: "UYGULAMA ALANLARI",
        body: [
          chips([
            "Çiftlikler",
            "Siteler, oteller",
            "Fabrikalar",
            "Endüstriyel tesisler",
            "Organize sanayi bölgeleri",
            "Şehir merkezi ve kırsal alan",
            "Açık alan ve araziler",
            "Milli emlaktan kiralanmış araziler",
          ]),
        ],
      },
    ],
  },

  [slugs.carpark]: {
    kind: "doc",
    title: "Solar Otopark Uygulamaları | Çakar Enerji", // typo fix: Uygulamalar → Uygulamaları (not visible on page)
    h1: "Solar Otopark Uygulamaları",
    layout: "facts",
    cta: { label: "Ayrıntıları öğrenin", href: "/" },
    sections: [
      {
        heading: "GENEL",
        body: [
          p(
            "Yazın kavurucu sıcaklarından araçlarınızı korurken atıl durumda olan otopark alanlarınızı daha estetik ve doğa dostu bir çözüm ile değerlendirerek enerji ihtiyacınızı karşılayıp gelir elde edebilirsiniz. Çatı uygulamalarındaki proje uygulama alanının yetersiz kalması durumunda çözüm olabilecek mükemmel bir alternatiftir. İster bir ister düzinelerce araçlık otopark alanları, düzgün bir geometriye sahip olmasalar dahi kolayca solar santrallere çevrilebilirler.",
          ),
        ],
      },
      {
        heading: "AVANTAJLARI",
        body: [
          ul([
            "Güneşin sınırsız ve bedava olması",
            "Araçları yazın güneşten kışın ise yağmur ve kardan koruması",
            "Kurulum için gerekli alanınızı işgal etmeden kullanmaya devam edebilmeniz",
            "Sistemin teknik olarak genişletilmeye her zaman müsait olması",
            "Hızlı ve kompakt kurulum seçenekleri",
            "Otopark alanlarının kış mevsimindeki kar küreme maliyetlerini düşürmesi",
            "Kısa vadeli amortisman süresi, 40 yıl sistem ömrü ve 25 yıl üretici garantisi olması",
          ]),
        ],
      },
      {
        heading: "UYGULAMA ALANLARI",
        body: [
          chips([
            "Katlı otoparklar",
            "Okulların otopark alanları",
            { t: "Alışveriş merkezlerinin otopark alanları", fixed: "Alısveriş → Alışveriş" },
            "Hastanelerin otopark alanları",
            "Sitelerin & evlerin otopark alanları",
            "Fabrikaların otopark alanları",
            "Fuar alanlarının otopark alanları",
          ]),
        ],
      },
    ],
  },

};
