## 2. Technology / Architecture

- **Platform:** GoDaddy Website Builder (`Server: DPS`, `img1.wsimg.com` varlıkları, footer'da "Destekli GoDaddy Airo"). Kaynak kod yok, taşınacak bir şey yok. Yeniden yapım sıfırdan bir Next.js sitesidir.
- **Dil:** `<html lang="tr-TR">`, doğru. Arayüzün bazı parçaları İngilizce (bkz. YAZ-06).
- **Breakpoint'ler:** 450, 768, 1024, 1280, 1536 px. Hamburger menü 768 px'e kadar, 1024 px'te tam menü.
- **Tipografi (ölçülen):** gövde Roboto, başlık Montserrat 600. Yüklenen fontlar: Montserrat 600, Roboto 400 ve 700. Ekran görüntülerindeki başlıklar ise altın renkli italik serif (bkz. VIS-02).
- **Renk (ölçülen):** metin `#161616`, vurgu `#455A64`. Çerez banner zemini yaklaşık `rgb(186,135,62)`.
- **Sayfa başına ağırlık:** ana sayfa 118 istek, 2,37 MB. İç sayfalar 48–50 istek, 0,48–0,66 MB (bölüm 9).
- **Üçüncü taraf bağımlılıklar:**

| Bağımlılık | Kanıt | Yeni sitede |
|---|---|---|
| GoDaddy (`csp.secureserver.net`, `img1.wsimg.com`, `blog.apps.secureserver.net`) | `perf/perf.jsonl` `byHost` | Kaldırılır. Görseller ve blog verisi taşınmalı (TD-01, TD-03). |
| Google Maps (`maps.googleapis.com`, `gstatic`) | ana sayfa ≈ 600 KB, 29 istek | Tıklayınca yükle. |
| Vimeo (`player.vimeo.com`, `*.vimeocdn.com`) | ana sayfa ≈ 490 KB | Tıklayınca yükle. Video adresi kayıtlı değil, iş sahibinden iste. |
| Google Fonts (`fonts.googleapis.com`) | 3 istek | Roboto ve Montserrat'ı kendi sunucundan (self-host) ver. |
| reCAPTCHA | form notları | Form altyapısıyla birlikte karar ver (CNV-02). |
| Sosyal ağlar | Facebook, Instagram, LinkedIn linkleri | Linkler korunur. |

- **İzleme:** yalnızca GoDaddy'nin kendi kodları. Google Analytics, GTM ve Meta Pixel bulunmadı. Yeni sitede analitik eklenecekse çerez rızasıyla birlikte kararlaştırılmalı.
- **Sitemap'ler:** `sm_website.xml`, `sm_blog.xml`, `sm_ola.xml`. Birçok sayfanın `lastmod` değeri 2025-08-28; bu, sitenin o tarihte yeniden yayınlandığını gösterebilir ama içeriğin o tarihte değiştiği anlamına gelmeyebilir [doğrulanmadı].

## 3. Complete Page Inventory

23 URL'nin hepsi HTTP 200 döndü. Yeni sitede adresler **birebir** korunmalıdır. Üç slug'da birleşik nokta (U+0307, `i̇`) vardır. `/iletisim` ve `/projelerimiz` gibi temiz adresler 404 verir. `/hizmetlerimiz/` (sonda eğik çizgi) da 200 döner (bkz. SEO-03).

| # | Rota (percent-encoded, birebir) | Başlık | Meta description | Durum |
|---|---|---|---|---|
| 0 | `/` | Çakar Enerji | "Solar Solutions" | dolu |
| 1 | `/hakk%C4%B1m%C4%B1zda-1` | Hakkımızda | yok | dolu |
| 2 | `/s%C4%B1k-sorulan-sorular` | Sık Sorulan Sorular | yok | dolu |
| 3 | `/i%CC%87nsan-kaynaklar%C4%B1` | İnsan Kaynakları | yok | dolu, form (dosya yüklemeli) |
| 4 | `/i%CC%87leti%C5%9Fim` | İletişim | yok | dolu, form |
| 5 | `/hizmetlerimiz` | Hizmetlerimiz \| Çakar Enerji | yok | dolu |
| 6 | `/end%C3%BCstriyel-ges-kurulumu` | Endüstriyel GES Kurulumu | yok | dolu |
| 7 | `/arazi-tipi-ges-kurulumu` | Arazi Tipi GES Kurulumu | yok | dolu |
| 8 | `/solar-otopark-uygulamalar` | Solar Otopark Uygulamalar \| Çakar Enerji | yok | dolu |
| 9 | `/proje-dan%C4%B1%C5%9Fmanl%C4%B1%C4%9F%C4%B1` | Proje Danışmanlığı \| Çakar Enerji | yok | dolu |
| 10 | `/hammadde-ve-%C3%BCr%C3%BCn-tedari%C4%9Fi` | Hammadde ve Ürün Tedariği | yok | dolu |
| 11 | `/arazi-ges-konstr%C3%BCksiyon` | Arazi GES Konstrüksiyon | yok | **boş** (yalnızca başlık) |
| 12 | `/solar-carport-sistemleri` | Solar Carport Sistemleri \| Çakar Enerji | yok | **boş** (yalnızca başlık) |
| 13 | `/%C3%A7at%C4%B1-ges-konstr%C3%BCksiyon` | Çatı GES Konstrüksiyon | yok | **yer tutucu** ("Yakında" + geri sayım) |
| 14 | `/projeleri%CC%87mi%CC%87z-1` | PROJELERİMİZ | yok | **teklif formu**, proje yok |
| 15 | `/blog-1` | Blog | yok | liste (JS ile yükleniyor) |
| 16 | `/blog-1/f/tei%CC%87a%C5%9F-2022-eyl%C3%BCl-ay%C4%B1-kurulu-g%C3%BC%C3%A7-raporunu-yay%C4%B1nlad%C4%B1` | TEİAŞ, 2022 Eylül Ayı Kurulu Güç Raporunu Yayınladı | var (gövdeden) | yazı, 18 Ekim 2022 |
| 17 | `/blog-1/f/ges-tar%C4%B1m-agrivoltaic-sistemler` | GES-Tarım: Agrivoltaic Sistemler | var | yazı, 4 Haziran 2022 |
| 18 | `/blog-1/f/spot-piyasada-elektrik-fiyatlar%C4%B1-03062022` | Spot Piyasada Elektrik Fiyatları | var | yazı, 3 Haziran 2022 |
| 19 | `/blog-1/f/g%C3%BCne%C5%9F-enerjisi-hibe-destek-programlar%C4%B1` | Güneş Enerjisi Hibe Destek Programları | var | yazı, 2 Haziran 2022 |
| 20 | `/blog-1/f/solar-tar%C4%B1msal-sulama` | Solar Tarımsal Sulama | var | yazı, 2 Haziran 2022 |
| 21 | `/blog-1/f/g%C4%B1da-krizi-enerji-krizi-1` | Gıda Krizi & Enerji Krizi | var | yazı, 27 Mayıs 2022 |
| 22 | `/blog-1/f/yenilenebilir-enerji` | Yenilenebilir Enerji | var | yazı, 27 Mayıs 2022 |

Sayfa olmayan ama korunacak öğeler: WhatsApp bağlantısı `wa.me/903129990645`, `tel:` ve `mailto:info@cakarenerji.com` linkleri, Facebook (`facebook.com/338728497484094`), Instagram (`instagram.com/cakarenerjii`) ve LinkedIn (`linkedin.com/company/çakarenerji`) bağlantıları, bülten kayıt formu.
