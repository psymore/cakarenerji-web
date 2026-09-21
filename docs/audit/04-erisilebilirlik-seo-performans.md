## 7. Accessibility Audit

Bulguların çoğu **ilk HTML ve birkaç çalışma anı ölçümüne** dayanır. Klavye, odak ve çalışma anı kontrast taraması yapılmadı.

| ID | Rota | Kategori | Problem | Kanıt | Kullanıcı etkisi | İş etkisi | Çözüm önerisi | Karmaşıklık | Öncelik |
|---|---|---|---|---|---|---|---|---|---|
| A11Y-01 | tüm sayfalar | Erişilebilirlik | Hiçbir sayfada `<main>`, `<header>`, `<footer>` yok. | `pages/*.json`, ilk HTML | Ekran okuyucu bölgeler arasında gezinemez. | Erişilebilirlik uyumsuzluğu. | Semantik landmark'lar. | Düşük | P2 |
| A11Y-02 | `/`, iç sayfalar | Erişilebilirlik | Ana sayfada iki h1. İç sayfalarda h1'den h4'e atlama. Banner başlığı h4. | `pages/00_home.json` `headings` | Başlık hiyerarşisi bozuk. | SEO ve erişilebilirlik. | Sayfa başına tek h1, sıralı hiyerarşi. | Düşük | P2 |
| A11Y-03 | `/`, `/hakkımızda-1`, hizmet sayfaları, blog | Erişilebilirlik | `alt`'sız görsel (ilk HTML): ana sayfa 14/16, Hakkımızda 5/7, beş hizmet sayfası 1/3, blog 2/7. Süs ve içerik görseli ayrılmadı [kısmen doğrulanmadı]. | `pages/*.json` `imgsNoAlt` | İçerik görselleri okunmaz. | Görsel arama ve erişilebilirlik kaybı. | İçerik görsellerine alt yaz, süs görsellerine boş alt. | Düşük | P2 |
| A11Y-04 | tüm sayfalar | Erişilebilirlik | Çerez banner metni düşük kontrastlı: beyaz metin `rgb(186,135,62)` üzerinde ≈ 3,17:1. WCAG AA normal metin için 4,5:1 ister. | `scraper/cookie-banner-closeup.png` (piksel örnekleme) | Metin zor okunur. | Yasal metnin okunabilirliği zayıf. | Koyu zemin ya da koyu metin. | Düşük | P1 |
| A11Y-05 | tüm sayfalar | Erişilebilirlik | "Accept" düğmesi `<a href="">`, `<button>` değil. | `scraper/cookie-banner.html` | Düğme rolü ve klavye davranışı yok. | Rıza mekanizmasının güvenilirliği. | Gerçek `<button>`. | Düşük | P1 |
| A11Y-06 | `/` | Erişilebilirlik, görsel | "Enerji daha güçlü atılımlar için birikimdir.." bandında beyaz metin açık gri zeminde gözle okunmaz. Ölçülmedi [doğrulanmadı]. | ilk tur ana sayfa ekran görüntüleri, `HANDOFF.md` | Slogan okunmaz. | Marka mesajı kaybolur. | Kontrastı ölç ve düzelt. | Düşük | P2 |
| A11Y-07 | tüm sayfalar | Erişilebilirlik | Sosyal ikon linklerinin metni boş. Erişilebilir adı (`aria-label`) doğrulanmadı [doğrulanmadı]. | `pages/*.json` linkler | Ekran okuyucuda adsız link olabilir. | — | `aria-label` ekle. | Düşük | P2 |
| A11Y-08 | `/i̇letişim`, `/projeleri̇mi̇z-1` | Erişilebilirlik, form | Mesaj alanında yalnızca `aria-label` ve `placeholder` var, görünür label yok. | `pages/04_*.json`, `pages/14_*.json` form alanları | Yazmaya başlayınca alanın ne olduğu görünmez. | Form terk oranı. | Görünür label. | Düşük | P2 |
| A11Y-09 | tüm sayfalar | Erişilebilirlik | Klavye gezinmesi, odak göstergesi ve çalışma anı kontrast taraması yapılamadı [doğrulanmadı]. | `perf/a11y.txt` (betik bağlantı hatasıyla düştü) | Bilinmiyor. | Bilinmiyor. | Kendi Chrome'undan Lighthouse ya da elle test. | Düşük | P2 |

## 8. SEO Audit

| ID | Rota | Kategori | Problem | Kanıt | Kullanıcı etkisi | İş etkisi | Çözüm önerisi | Karmaşıklık | Öncelik |
|---|---|---|---|---|---|---|---|---|---|
| SEO-01 | 23 URL'nin 15'i | SEO | Meta description yok. Ana sayfa: "Solar Solutions". | `pages/*.json` `metas` | Arama sonucunda zayıf özet. | Tıklama oranı ve görünürlük kaybı. | Her sayfa için Türkçe description. İş bilgisi uydurma, sayfanın kendi metninden türet. | Düşük | P1 |
| SEO-02 | site geneli | SEO | Title eki tutarsız: `Hizmetlerimiz \| Çakar Enerji`, `Solar Otopark Uygulamalar \| Çakar Enerji`, `Proje Danışmanlığı \| Çakar Enerji`, `Solar Carport Sistemleri \| Çakar Enerji`. Diğerlerinde ek yok. Ana sayfa yalnızca "Çakar Enerji". | `pages/*.json` `title` | — | Marka tutarsızlığı. | Tek title şablonu. | Düşük | P2 |
| SEO-03 | `/hizmetlerimiz/` | SEO | Sonda eğik çizgili sürüm de 200 dönüyor. Canonical yalnızca blog yazılarında var. | `HANDOFF.md`, `pages/*.json` | — | Yinelenen URL, sinyal bölünmesi. | Her sayfaya canonical, tek biçim. | Düşük | P2 |
| SEO-04 | site geneli | SEO | Yapılandırılmış veri yok. | `pages/*.json` | — | Zengin sonuç fırsatı yok. | Onaylı iletişim bilgileriyle Organization/LocalBusiness ekle (NAP netleştikten sonra). | Düşük | P2 |
| SEO-05 | `sitemap.ola.xml`, `robots.txt` | SEO | `sm_ola.xml` HTTP 500 hata sayfası döndürüyor. `robots.txt` yalnızca `User-agent: *`. | `sitemaps/sm_ola.xml` | — | Kırık sitemap, tarayıcı botlarda hata. | Yeni sitede tek sitemap ve `robots.txt`. | Düşük | P3 |
| SEO-06 | `/` | SEO | `og:image` stok fotoğraf (pexels), `twitter:description` "ÇAKAR ENERJİ", `og:description` "Solar Solutions". | `pages/00_home.json` `metas` | Paylaşım kartı zayıf. | Sosyal medyada zayıf görünüm. | Marka görseli ve tutarlı açıklama. | Düşük | P3 |
| SEO-07 | 7 blog yazısı | SEO | Description gövdeden alınmış ham metin, örn. "1.1. Tarımsal Sulama Nedir ?". | `pages/20_*.json` | Arama sonucunda anlamsız özet. | Blog tıklaması azalır. | Yazı başına özet yaz (içerik iş sahibinin metnine dayansın). | Düşük | P2 |

Olumlu: `<html lang="tr-TR">` doğru.

## 9. Performance Audit

Ölçüm, throttling olmadan, üç sayfada, sayfa aşağı kaydırılarak yapıldı. Gerçek kullanıcı koşullarını temsil etmez.

| Sayfa | Cihaz | İstek | Toplam | JS | LCP | CLS |
|---|---|---|---|---|---|---|
| `/` | masaüstü | 118 | 2368 KB | 1076 KB (61 dosya) | 0,91 sn | 0,002 |
| `/` | mobil | 103 | 1532 KB | 1074 KB | 0,55 sn | 0 |
| `/hizmetlerimiz` | masaüstü / mobil | 48 | 477 KB | 266 KB | 0,41 / 0,43 sn | 0,002 / 0 |
| `/endüstriyel-ges-kurulumu` | masaüstü / mobil | 50 | 658 / 572 KB | 266 KB | 1,47 / 1,48 sn | 0,002 / 0 |

| ID | Rota | Kategori | Problem | Kanıt | Kullanıcı etkisi | İş etkisi | Çözüm önerisi | Karmaşıklık | Öncelik |
|---|---|---|---|---|---|---|---|---|---|
| PRF-01 | `/` | Performans | Google Maps (29 istek, ≈ 600 KB) ve Vimeo (≈ 490 KB) erken yükleniyor. | `perf/perf.jsonl` `byHost` | Kullanılmayan içeriğe veri harcanır. | Mobilde ağır ilk yükleme. | Harita ve videoyu tıklayınca ya da görünür olunca yükle. | Düşük | P2 |
| PRF-02 | `/` | Performans | Hero görseli 558 KB WebP, tembel yükleme yok (`lazyImgs` 0). | `perf/perf.jsonl` `top` | Ağır ilk görsel. | — | Doğru boyutta modern format, gerekli yerde lazy load. | Düşük | P3 |

Performans sitenin asıl sorunu değildir.
