import type { PageDef } from "./types";
import { p, chips } from "./types";
import { slugs } from "@/lib/site";

const docsSentence = "Bu belgeler ışığında sizlere teklif hazırlanacaktır.";

export const faqPages: Record<string, PageDef> = {
  [slugs.faq]: {
    kind: "faq",
    title: "Sık Sorulan Sorular",
    h1: "Sık Sorulan Sorular",
    intro:
      "Sorunuzun yanıtını bulamadıysanız lütfen info@cakarenerji.com adresine yazarak bize ulaşın.",
    items: [
      {
        q: "On-grid çatı projelerinde ilk olarak ne tür belgeler talep ediyorsunuz ?",
        body: [
          chips([
            "Mimari Proje",
            "Elektriksel Proje",
            "Statik Proje",
            "Google Earth Konumu",
            "Elektrik Faturanız",
            "Sözleşme Gücü ve Trafo Gücü",
          ]),
          p(docsSentence),
        ],
      },
      {
        q: "Arazim var güneş enerji santrali kurmak istiyorum ne yapmam gerekiyor ?",
        body: [
          chips([
            "Plan Kote",
            "Aplikasyon Krokisi",
            "1/5000 1/25000 Haritalar",
            "Tapu",
            "İmar Planı Onayı",
          ]),
          p(docsSentence),
        ],
      },
      {
        q: "Çalışan dalgıç pompa ve motorum var. Güneş enerjisi ile çalıştırmak istiyorum, ne yapmam gerekiyor?",
        body: [
          p("Bizlere sadece güç/hp/kw bilgisini vermeniz yeterlidir."),
          p(
            "Detaylı bilgi için +09 (312) 999 06 45 numaralı telefonumuzdan veya İletişim sayfasında yer alan İletişim Formu'nu doldurarak bizlere ulaşabilirsiniz.",
          ),
        ],
      },
      {
        q: "Benim bir evim var güneş enerji sistemi yaptırmak ve kurduğumuz sistemden para kazanmak istiyorum.",
        body: [
          chips([
            "Mimari proje",
            "Elektriksel proje",
            "Statik proje",
            "Google Earth konumu",
            "Elektrik faturanız",
            "Sözleşme gücü ve trafo gücü",
          ]),
          p(docsSentence),
          p(
            "Tapu, ruhsat ve diğer resmi evrakların Çatı GES yaptıracak şahsa ait olması gerekmektedir.",
          ),
        ],
      },
      {
        q: "GES projelerinde devletin sağladığı teşvikler var mıdır? Varsa nelerdir?",
        body: [
          p(
            "Devlet teşvikleri sadece firmalara verilmekte olup firmanın hangi sektörde olduğuna göre de değişkenlik göstermektedir. TKDK(Tarım ve Kırsal Kalkınmayı Destekleme Kurumu)'nın sayfasından verilen teşvikleri inceleyebilirsiniz.",
          ),
          p(
            "Ayrıca Ekonomi ve Sanayi Bakanlığı aracılığı ile 240 KW ve üzeri kurulumlar için YTB(Yatırım Teşvik Belgesi)'ye başvurarak KDV muafiyetinden yararlanabilirsiniz.",
          ),
          p(
            "Ülkemizde Yenilenebilir Enerji Kaynakları’na(Güneş Enerjisi gibi) İl Tarım Müdürlükleri aracılığı ile IPARD(Instrument for Pre-Accession Assistance Rural Development) ve KKDF(Kaynak Kullanımı Destekleme Fonu) gibi fonlardan %50’ye varan destekler sağlanabilmektedir.",
          ),
          p(
            "Yukarıda bahsi geçen IPARD ve KKDF almaya aday firmalar, tedbir kapsamında yayınlanan kitapçıkta 101-103-302 kodları altında açıklanmaktadır.",
          ),
        ],
      },
      {
        q: "Tarımsal Sulama Proje’lerinde üretilen enerjinin fazlası satılabilir mi?",
        body: [
          p(
            "Şebeke destekli tarımsal sulamada On-Grid üretilen fazla enerji, şebekeye satılabilir. Şebeke destekli olan zaten bağlantı anlaşması yapılmış çifte sayaç sahibi projelerdir.",
          ),
        ],
      },
    ],
  },

};
