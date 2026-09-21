/** Blog posts: metadata here, bodies verbatim in content/blog/<key>.txt (from audit-data/scraper). */
export type Post = {
  key: string;
  slug: string; // percent-encoded, as on the live site
  title: string;
  date: string;
  short: string;
  excerpt: string;
};

export const posts: Post[] = [
  {
    key: "teias",
    slug: "tei%CC%87a%C5%9F-2022-eyl%C3%BCl-ay%C4%B1-kurulu-g%C3%BC%C3%A7-raporunu-yay%C4%B1nlad%C4%B1",
    title: "TEİAŞ, 2022 Eylül Ayı Kurulu Güç Raporunu Yayınladı",
    date: "18 Ekim 2022",
    short: "18 Eki 2022",
    excerpt:
      "2022 Eylül Ayı kurulu güç raporuna göre bilinmesi gereken bazı öne çıkan bilgiler aşağıdaki gibidir.",
  },
  {
    key: "agri",
    slug: "ges-tar%C4%B1m-agrivoltaic-sistemler",
    title: "GES-Tarım: Agrivoltaic Sistemler",
    date: "4 Haziran 2022",
    short: "4 Haz 2022",
    excerpt:
      "İnsanoğlunun varoluşundan, günümüze kadar olan temel ihtiyaçları; barınma, beslenme ve neslinin devamı gibi ilkelerdir. Bu süreçte teknolojinin ilerlemesi, yaşam kalitesinin artması, dünya nüfusunun hızlı artışı gibi fak...",
  },
  {
    key: "spot",
    slug: "spot-piyasada-elektrik-fiyatlar%C4%B1-03062022",
    title: "Spot Piyasada Elektrik Fiyatları",
    date: "3 Haziran 2022",
    short: "3 Haz 2022",
    excerpt:
      "Spot piyasada elektrik fiyatları (03.06.2022) Spot piyasada bir megavatsaat elektriğin fiyatı yarın için en yüksek 3 bin 184 lira 1 kuruş, en düşük 750 lira olarak belirlendi.",
  },
  {
    key: "hibe",
    slug: "g%C3%BCne%C5%9F-enerjisi-hibe-destek-programlar%C4%B1",
    title: "Güneş Enerjisi Hibe Destek Programları",
    date: "2 Haziran 2022",
    short: "2 Haz 2022",
    excerpt:
      "Güneş Enerjisi Hibe Destek Programları KKYDP (Kırsal Kalkınma Destekleri Kapsamında Tarıma Dayalı Ekonomik Yatırımların Desteklenmesi Hakkında Tebliğ) 2021-2025 Programı",
  },
  {
    key: "sulama",
    slug: "solar-tar%C4%B1msal-sulama",
    title: "Solar Tarımsal Sulama",
    date: "2 Haziran 2022",
    short: "2 Haz 2022",
    excerpt: "1.1. Tarımsal Sulama Nedir ?",
  },
  {
    key: "gida",
    slug: "g%C4%B1da-krizi-enerji-krizi-1",
    title: "Gıda Krizi & Enerji Krizi",
    date: "27 Mayıs 2022",
    short: "27 May 2022",
    excerpt: "1.1. Gıda Krizi Kavramının Ortaya Çıkışı",
  },
  {
    key: "yenilenebilir",
    slug: "yenilenebilir-enerji",
    title: "Yenilenebilir Enerji",
    date: "27 Mayıs 2022",
    short: "27 May 2022",
    excerpt:
      "Yaşadığımız dünyada enerjinin yeri oldukça büyük ve önemlidir. Sadece bununla da kalmayıp enerji günümüz dünyasında kalkınma ve gelişmişliğin en önemli göstergesidir. Artan nüfusla birlikte enerji kaynakları oldukça hızl...",
  },
];

export const postBySlug = (slug: string) =>
  posts.find((p) => decodeURIComponent(p.slug) === decodeURIComponent(slug));

