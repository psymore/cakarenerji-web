import type { PageDef } from "./types";
import { ul } from "./types";
import { slugs } from "@/lib/site";

export const consultingPages: Record<string, PageDef> = {
  [slugs.consulting]: {
    kind: "doc",
    title: "Proje Danışmanlığı | Çakar Enerji",
    h1: "Proje, Mühendislik ve Yatırım Danışmanlığı",
    layout: "facts",
    photo: "consulting",
    cta: { label: "Ayrıntıları öğrenin", href: "/" },
    sections: [
      {
        heading: "Proje",
        body: [
          ul([
            "Optimum Panel & İnverter Konfigürasyonu (Dizi String Yerleşim Planı)",
            "3D Sistem Tasarımı ve Örnekleme",
            "Yön ve Gölge Hesaplamaları",
            "Statik Proje Çizimi",
            "Mekanik Proje Çizimi",
            "Elektrik Projeleri Çizimi ( AG / OG / ENH )",
            { t: "Yıllık Güneşlenme ve Üretim Simülasyonu", fixed: "Similasyonu → Simülasyonu" },
          ]),
        ],
      },
      {
        heading: "Mühendislik",
        body: [
          ul([
            "Proje Ön fizibilitesi",
            "Güneş Radyasyon Analizi",
            "Tozlanma ve Kirlilik Faktörlerinin Tespiti",
            "Gölgelenme Alanlarının Keşfi",
            "Bağlantı Noktası ve Dağıtım Trafosu Uygunluk Kontrolü",
          ]),
        ],
      },
      {
        heading: "Saha Geliştirme",
        body: [
          ul([
            { t: "Koordinatlı Aplikasyon", fixed: "Kordinatlı → Koordinatlı" },
            "Jeoteknik Çalışma ve Zemin Etüdü",
            "Hafriyat Çalışmaları",
            "Çakma Çekme Testi",
            { t: "Çatı Yük ve Dayanma Testleri", fixed: "ÇatI → Çatı" },
            "Proje Alanı Güvenlik Çalışmaları (Çit, tel Örgü, Kamera vs.)",
          ]),
        ],
      },
      {
        heading: "Proje Uygulama EPC",
        body: [
          ul([
            "Yıldırım Koruma ve Topraklama Sistemi Çalışması",
            "Taşıyıcı Sistemin Montajı",
            "PV Panel Montajı",
            "Evirici ve Pano Montajı",
            "DC / AC Kablolama ve Bağlantı Uygulaması",
            "Motor Kontrol Merkezi (MCC) Kurulumu ve Devreye Alma",
            "OG Altyapı Testler ve Devreye Alma",
          ]),
        ],
      },
    ],
  },

};
