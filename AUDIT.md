# Çakar Enerji: canlı site denetimi

Tarih: 2026-09-21. Denetlenen site: https://cakarenerji.com/ (GoDaddy Website Builder). Bu belge, Next.js ile yeniden yapımdan önce sitenin durumunu kaydeder. Kaynak kod yoktur, tek referans canlı sitedir. Bölüm yapısı (19 bölüm) ve sorun alanları orijinal talepten alınmıştır.

**Kanıt dosyaları git'te yoktur.** `audit-data/` klasörü `.gitignore`'dadır. Kanıt sütunundaki yollar bu klasöre işaret eder:
- `audit-data/pages/`: 23 sayfanın ilk HTML'i, metni ve çıkarılmış özeti (`.json`).
- `audit-data/perf/`, `audit-data/responsive/`, `audit-data/sitemaps/`: ölçümler.
- `audit-data/scraper/`: kullanıcının kendi Chrome'undan aldığı çalışma anı (JS çalıştıktan sonraki) metin, HTML ve ekran görüntüleri.

**Sorun tablolarının sütunları:** ID · Rota · Kategori · Problem · Kanıt · Kullanıcı etkisi · İş etkisi · Çözüm önerisi · Karmaşıklık · Öncelik. Bir sorun yalnızca bir bölümde tam olarak yazılır, başka bölümlerde ID ile anılır.

**Öncelik ölçeği**
- **P0**: yeniden yapımı bloklar. İş sahibinden bilgi ya da karar olmadan doğru içerik yazılamaz.
- **P1**: ilk sürümde düzeltilmeli. Ziyaretçiyi yanıltır ya da engeller, güveni veya hukuki durumu etkiler.
- **P2**: ilk sürümde düzeltilmesi beklenir, çoğu ucuzdur.
- **P3**: sonraya bırakılabilir.

**Karmaşıklık:** Düşük (saatler), Orta (günler), Yüksek (haftalar ya da dış bağımlılık).

**"[doğrulanmadı]"** etiketi, o bilginin ölçülmediği ya da yalnızca gözle/çıkarımla söylendiği anlamına gelir.

---

## 1. Executive Summary (Yönetici Özeti)

Site küçük, statik ve hızlı. Sorunları performanstan çok içerik, bilgi tutarlılığı ve güven alanındadır.

1. **Üç "ürün" sayfası boş ya da yer tutucu** ve footer'daki tek navigasyon linkleri bunlar (BRK-01, BRK-02, NAV-05).
2. **"PROJELERİMİZ" sayfası aslında teklif formu.** Sitede hiç proje ya da referans yok (BRK-03, VIS-01).
3. **İletişim bilgileri kendi içinde çelişiyor:** adres (`No:54/73` ya da `No:73`), çalışma saatleri (08:30–18:00 ya da 08:00–19:00), telefon (üç görünür biçim, biri yanlış ülke koduyla) ve şirket adı (NAP-01…NAP-04). Doğrusu iş sahibinden öğrenilmeli.
4. **Menü, geniş ekranda bile Blog, Projeler ve Ürünler'i "MORE" altına gizliyor** ve etiket İngilizce (NAV-01, NAV-02).
5. **Yanlış yönlendiren butonlar.** Beş hizmet sayfasındaki "Ayrıntıları öğrenin" ilgisiz sayfalara gidiyor (UX-01).
6. **Blog terk edilmiş ve şablonu bozuk.** Yazıların hepsi Mayıs–Ekim 2022 tarihli, her blog sayfasının altında alakasız bir "EPC HİZİMETLERİMİZ" bloğu var (BLG-01, BLG-02).
7. **Hukuki eksikler.** Gizlilik, KVKK ve çerez politikası sayfası yok. Çerez bannerı yalnızca İngilizce "Accept" sunuyor, kontrastı yetersiz ve telefonda ekranın üçte birini kaplıyor (LGL-01, LGL-02, A11Y-04, RSP-01). Bu belge hukuki görüş değildir.
8. **Doğrulanması gereken iddialar.** Devlet alım garantisi, KDV muafiyeti, "%50'ye varan" hibe, ürün ömrü ve garanti süreleri, "sektörde en uzun süredir" gibi ifadeler kanıtsız yeni siteye taşınmamalı (IDD-01…IDD-07).
9. **SEO temel eksikleri.** 23 URL'nin 15'inde meta description yok, ana sayfanınki "Solar Solutions". Yapılandırılmış veri yok (SEO-01…SEO-07).
10. **Performans sorun değil**, ama Google Maps (~600 KB) ve Vimeo (~490 KB) ana sayfada erken yükleniyor (PRF-01).

### Bu denetimin güvenilirliği

**Önceki notlara göre düzeltmeler.** `HANDOFF.md`'nin ilk sürümündeki üç bilgi yanlıştı ya da eksikti:
- **"Footer'da © 2023"**: yanlış. İlk HTML'de 2023 yazıyor, tarayıcıda 2026 görünüyor (sonradan güncelleniyor). Sorun olarak listelenmedi.
- **"Çatı GES sayfası sıfırlarda takılı geri sayım gösteriyor"**: yalnızca ilk HTML için doğru. Çalışma anında `131 gün 02:44:26` gösteriyor (hedef yaklaşık 30 Ocak 2027, tek örnek).
- **"Çerez banner ölçümleri her yerde `-`"**: yanlış okunmuştu. Banner boyutu `fixed` listesinde kayıtlıydı, yalnızca `bannerRect` alanı boştu (bkz. RSP-01).

**Doğrulanmadı:**
- **Responsive:** `/hizmetlerimiz` 430 px ve 1024–1440 px; `/i̇letişim`, `/projeleri̇mi̇z-1`, `/blog-1`, `/endüstriyel-ges-kurulumu` için 8 genişliğin tamamı ve bu sayfaların ekran görüntüleri.
- **Erişilebilirlik çalışma anı:** klavye gezinmesi, odak göstergesi, çalışma anı renk kontrastı taraması (`a11y.js` çalıştırılamadı).
- **Etkileşimler:** menü dropdown'ının klavye ve dokunma davranışı, Vimeo oynatıcısı, harita.
- **Formlar:** hiçbiri gönderilmedi. Doğrulama mesajları, başarı ve hata durumları, alıcı adresi bilinmiyor.
- **Blog yazı gövdeleri** kaydedildi (`scraper/blog-*.txt`) ama satır satır denetlenmedi.
- **Görsel denetim** ana sayfanın 320/390/768/1440 px ekran görüntülerine (ilk tur) ve bu turda alınan beş ekran görüntüsüne dayanır. Başka sayfaların görsel incelemesi yapılmadı.
- **Performans:** yalnızca üç sayfada, throttling olmadan.

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

## 4. Navigation / IA

Menü: Ana Sayfa, KURUMSAL (Hakkımızda, SSS, İnsan Kaynakları, İletişim), HİZMETLERİMİZ (Hizmetlerimiz + 5 hizmet sayfası), ÜRÜNLERİMİZ (Arazi GES Konstrüksiyon, Solar Carport, Çatı GES), PROJELERİMİZ, Blog.

| ID | Rota | Kategori | Problem | Kanıt | Kullanıcı etkisi | İş etkisi | Çözüm önerisi | Karmaşıklık | Öncelik |
|---|---|---|---|---|---|---|---|---|---|
| NAV-01 | tüm sayfalar | Navigasyon | ÜRÜNLERİMİZ, PROJELERİMİZ ve BLOG geniş ekranda bile "MORE" altında gizli. | `scraper/hakkimizda-desktop.png` (2538 px genişlik), `scraper/menu-more.png` | Projeleri ve blogu bulamaz. | Proje ve blog içeriği görünmez, güven sinyali kaybı. | Tüm ana bölümleri üst menüde göster. Rotalar aynı kalır. | Düşük | P1 |
| NAV-02 | tüm sayfalar | Navigasyon, dil | Menü etiketi tarayıcıda İngilizce "MORE". | `scraper/menu-more.png`; ilk HTML'de etiket "Daha fazlası" | Türkçe sitede İngilizce etiket. | Özensiz izlenim. | Sabit Türkçe etiket ya da menüyü açık göster. | Düşük | P2 |
| NAV-03 | tüm sayfalar, `/solar-otopark-uygulamalar` | Navigasyon, yazım | Menü ve `<title>` "Solar Otopark Uygulamalar", h1 "Uygulamaları". | `pages/08_*.json`, `pages/00_home.json` | Yazım hatası her sayfanın menüsünde. | Özensiz izlenim. | Etiketi "Uygulamaları" yap. Rota (slug) değişmez. | Düşük | P2 |
| NAV-04 | tüm sayfalar | Navigasyon | KURUMSAL, HİZMETLERİMİZ, ÜRÜNLERİMİZ başlıkları `href="#"`. Klavye ve dokunma davranışı doğrulanmadı. | `pages/00_home.json` linkler | Başlık sayfaya değil, menüye açılır. Erişilebilir davranış bilinmiyor. | — | Klavyeyle açılan, `aria-expanded`'lı düğme. | Orta | P3 |
| NAV-05 | tüm sayfalar (footer) | Bilgi mimarisi | Footer'daki tek navigasyon linkleri üç boş/yer tutucu sayfa (Arazi GES, Solar Carport, Çatı GES). | `scraper/*.txt` footer metni | Footer'dan gezinen ziyaretçi boş sayfalara düşer. | Doğrudan iletişim ve hizmet yolu kaybı. | Footer'a ana bölümleri ve iletişimi koy. | Düşük | P2 |
| NAV-06 | menü | Bilgi mimarisi | "Hammadde ve Ürün Tedariği" HİZMETLERİMİZ altında, "ÜRÜNLERİMİZ" ise yalnızca üç konstrüksiyon sayfası içeriyor. Hizmet/ürün ayrımı belirsiz. | `pages/00_home.json` linkler | Ziyaretçi ürün ile hizmeti ayıramaz. | Teklif yönlendirmesi zayıflar. | Bilgi mimarisini iş sahibiyle yeniden kur. Rotalar aynı kalır. | Orta | P3 |

## 5. UX Audit

| ID | Rota | Kategori | Problem | Kanıt | Kullanıcı etkisi | İş etkisi | Çözüm önerisi | Karmaşıklık | Öncelik |
|---|---|---|---|---|---|---|---|---|---|
| UX-01 | `/endüstriyel-ges-kurulumu`, `/arazi-tipi-ges-kurulumu`, `/solar-otopark-uygulamalar`, `/proje-danışmanlığı`, `/hammadde-ve-ürün-tedariği` | UX, link | "Ayrıntıları öğrenin" butonları yanlış hedefe gidiyor: Endüstriyel → `https://cakarenerji.com/hizmetlerimiz`, diğer dördü → `/`. | `pages/06…10_*.json` linkler | Butona basan aynı sayfaya ya da anasayfaya düşer. | Hizmet detayına ulaşamayan ziyaretçi, dönüşüm kaybı. | Her butonu ilgili sayfaya bağla, hedefleri iş sahibiyle onayla. | Düşük | P1 |
| UX-02 | `/` | UX, CTA | "Ayrıntıları öğrenin" ve "Daha fazla bilgi edinin" aynı sayfaya (`/hakkımızda-1`) gidiyor, etiketler hedefi söylemiyor. | `pages/00_home.json` linkler | Nereye gideceği belirsiz. | Tıklama oranı düşebilir. | Hedefi belirten etiket ("Hakkımızda"). | Düşük | P3 |
| UX-03 | tanımsız rotalar | UX, hata | 404 sayfası GoDaddy varsayılanı. `/iletisim`, `/projelerimiz` gibi temiz adresler 404. | `HANDOFF.md`, `pages/` | Yanlış yazılan adreste marka ve menü yok. | Yanlış adres yazan ziyaretçi kaybı. | Markalı 404. Temiz adreslerden mevcut rotalara yönlendirme eklenebilir (birebir rotalar aynen kalır). | Düşük | P3 |

Doğrulanmadı: dropdown'ın klavye/dokunma davranışı, Vimeo oynatıcısı, harita etkileşimi (bkz. bölüm 1).

## 6. Mobile / Responsive Audit

Ana sayfa 8 genişlikte (320, 360, 390, 430, 768, 1024, 1280, 1440), `/hizmetlerimiz` 320/360/390/768 px'te ölçüldü. Ölçülen tüm genişliklerde **yatay taşma yok** (`overflowX` 0), bu olumlu.

| ID | Rota | Kategori | Problem | Kanıt | Kullanıcı etkisi | İş etkisi | Çözüm önerisi | Karmaşıklık | Öncelik |
|---|---|---|---|---|---|---|---|---|---|
| RSP-01 | tüm sayfalar | Responsive | Çerez bannerı telefonda 320–360 px'te 323 px, 390–430 px'te 272 px yüksekliğinde (800 px ekran varsayımıyla ≈ %40 ve ≈ %34). ≥768 px'te 400×272, sağ altta. | `responsive/results.jsonl` (`fixed` listesi) | Ekranın üçte biri banner, içerik okunmaz. | Mobil ziyaretçi ilk saniyede kaybedilebilir. | Kompakt, alt şerit banner. | Düşük | P1 |
| RSP-02 | `/` | Responsive, erişilebilirlik | 44 px'in altında dokunma hedefi 16 (≤768 px) ile 20 (≥1280 px), 24 px'in altında 6–7. Örnek: telefon linki 203×27, e-posta 156×19, hamburger 40×40. Eşikler 44 ve 24 px, satır içi link istisnaları elenmedi. | `responsive/results.jsonl` `smallTargets`, `tinyTargets`, `smallSample`. Eşikler: `scripts/responsive.js` | Küçük hedefe basmak zor. | Telefon ve e-posta linkine dokunma hataları. | Hedefleri en az 24 px, mümkünse 44 px yap. | Düşük | P2 |
| RSP-03 | tüm sayfalar | Responsive | 768 px tablette hamburger menü, 1024 px'te tam menü (7 link, 1280 px'te 9). | `responsive/results.jsonl` `navLinksVisible`, `hamburger` | Tablette gizli menü. | — | Yeni sitede karar ver. | Düşük | P3 |
| RSP-04 | tüm sayfalar | Responsive | Bannerın içeriğe bindiği ilk turda gözle görülmüştü. 2500 px'ten geniş ekranda içeriğe binmiyor (sağ boşlukta). 768 ve 1440 px'te doğrulanmadı [doğrulanmadı]. | `scraper/cookie-desktop-blog1.png` | İçerik bannerın arkasında kalabilir. | — | Yeni bannerda içeriği kapatma. | Düşük | P2 |
| RSP-05 | tüm sayfalar | Responsive | Sağ altta 65×65 px sabit (fixed) bir öğe var, hangi bileşen olduğu bilinmiyor (WhatsApp düğmesi olabilir) [doğrulanmadı]. | `responsive/results.jsonl` `fixed` (`fixed 65x65`) | Banner ya da içerikle çakışabilir. | Varsa WhatsApp yolu kesilebilir. | Öğeyi tanımla, bannerla çakışmasını önle. | Düşük | P2 |

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

## 10. Content Audit

### 10.1 Yazım ve dil

| ID | Rota | Kategori | Problem | Kanıt | Kullanıcı etkisi | İş etkisi | Çözüm önerisi | Karmaşıklık | Öncelik |
|---|---|---|---|---|---|---|---|---|---|
| YAZ-01 | `/hizmetlerimiz` | İçerik (olgu) | "Şebeke Bağlantılı (**Off-Grid**) Sistemler Şebekenin bulunmadığı yerlerde…" başlığı kendi metniyle çelişiyor. Hakkımızda'da doğrusu var: "şebekeden bağımsız … (Off-Grid)". | `pages/05_*.txt`, `scraper` Hakkımızda ekran görüntüsü | Teknik olarak yanlış bilgi. | Uzmanlık algısı zedelenir. | Başlığı iş sahibiyle doğrula, büyük olasılıkla "Şebekeden Bağımsız (Off-Grid)". | Düşük | P1 |
| YAZ-02 | `/proje-danışmanlığı` | Yazım | "Similasyonu", "Kordinatlı" (Simülasyonu, Koordinatlı olmalı). | `pages/09_*.txt` | — | Özensiz izlenim. | Düzelt. | Düşük | P2 |
| YAZ-03 | `/solar-otopark-uygulamalar` | Yazım | "Alısveriş" (Alışveriş olmalı). | `pages/08_*.txt` | — | Özensiz izlenim. | Düzelt. | Düşük | P2 |
| YAZ-04 | `/` | Yazım | "almak almak" (tekrarlanan kelime). | `pages/00_home.txt`, çalışma anı metni | — | Özensiz izlenim. | Düzelt. | Düşük | P2 |
| YAZ-05 | `/blog-1`, 7 yazı | Yazım | Blog şablonundaki EPC bloğunda "HİZİMETLERİMİZ", "tesfiye" (tesviye), "sarj" (şarj). | `scraper/blog-*.txt` | — | Hatalar sekiz sayfada tekrarlanıyor. | Blok zaten kaldırılacak (BLG-02). | Düşük | P2 |
| YAZ-06 | site geneli | Dil | Çalışma anında İngilizce kalan metinler: çerez bannerı, "MORE", "Continue Reading", "All Posts", "Open today", "GET DIRECTIONS", reCAPTCHA notu, "SOLAR SOLUTİONS" (İngilizce ve Türkçe karışık). Sayfa `lang="tr-TR"`. | `scraper/*.txt` | Türkçe sitede yabancı arayüz metni. | Ciddiyet ve güven algısı. | Hepsini Türkçeleştir. | Düşük | P2 |
| YAZ-07 | `/` | İçerik | "FİYAT AVANTAJLARI: Tedarikçimiz olmak için teklif alın." cümlesi belirsiz (ziyaretçi tedarikçi mi olacak, müşteri mi?). | `scraper` ana sayfa metni | Ne isteneceği belirsiz. | Yanlış hedef kitleye çağrı olabilir. | İş sahibine sor, anlamı netleştir. | Düşük | P2 |

### 10.2 Doğrulanması gereken iddialar

Aşağıdaki ifadeler sitede olduğu gibi duruyor. **Bunları doğrulamadım.** Yasal ve teşvik bilgileri zamanla değişir. Yeni siteye ancak iş sahibi güncel olduğunu ve dayanağını teyit ederse taşınmalı. Ortak etkiler: kullanıcı etkisi = yanlış ya da eski bilgiyle karar verme; iş etkisi = yanıltıcı beyan, hukuki ve itibar riski.

| ID | Rota | Kategori | Problem (ifade) | Kanıt | Kullanıcı etkisi | İş etkisi | Çözüm önerisi | Karmaşıklık | Öncelik |
|---|---|---|---|---|---|---|---|---|---|
| IDD-01 | `/hizmetlerimiz`, `/arazi-tipi-ges-kurulumu` | İçerik (iddia) | "10 yıllık" devlet alım garantisi ("dolar bazlı" ifadesi Arazi Tipi sayfasında). | `pages/05_*.txt`, `pages/07_*.txt` | Getiri beklentisi yanlış kurulabilir. | Yanıltıcı beyan riski. | Güncel dayanak yoksa kaldır ya da kaynakla. | Düşük | P0 |
| IDD-02 | `/hakkımızda-1` | İçerik (iddia) | "2016 yılında yürürlüğe giren 'Yenilenebilir Enerji Kanunu'". | `pages/01_*.txt` | Yanlış yasal referans. | İtibar riski. | Doğrula ve kaynakla. | Düşük | P1 |
| IDD-03 | `/sık-sorulan-sorular` | İçerik (iddia) | YTB 240 kW KDV muafiyeti, IPARD ve KKDF kapsamında "%50'ye varan" destek, "Ekonomi ve Sanayi Bakanlığı" adı. | `pages/02_*.txt` | Eskimiş teşvik bilgisiyle yatırım kararı. | Yanıltıcı beyan riski. | Güncel mevzuatla doğrula ya da kaldır. | Orta | P0 |
| IDD-04 | `/hizmetlerimiz`, `/endüstriyel-ges-kurulumu`, `/arazi-tipi-ges-kurulumu`, `/solar-otopark-uygulamalar` | İçerik (iddia) | "40 yıl ömür" (üç sayfada), "25 yıl garanti" (dört sayfada). | `pages/05…08_*.txt` | Garanti beklentisi. | Sözleşmesel taahhüt gibi okunabilir. | Garanti sahibinin belgesiyle doğrula. | Düşük | P0 |
| IDD-05 | `/hammadde-ve-ürün-tedariği` | İçerik (iddia) | "sektörün önde gelen üreticileri ile uzun dönemli sözleşmeler". | `pages/10_*.txt` | Tedarik güvencesi izlenimi. | Kanıtsız üstünlük iddiası. | Kanıtla ya da yumuşat. | Düşük | P1 |
| IDD-06 | blog liste + 7 yazı (şablon bloğu) | İçerik (iddia) | "GES yatırım geri dönüş süreleri 4 yıla kadar gerilemiştir"; "sektörde en uzun süredir anahtar teslim çatı kurulum tecrübesine sahip firmalardan birisi"; "12 Mayıs 2019 tarihinde yayımlanan yeni Lisanssız Elektrik üretim yönetmeliği". | `scraper/blog-*.txt` | Getiri ve firma deneyimi hakkında yanlış izlenim. | Kanıtsız üstünlük iddiası. | Blok kaldırılırken iddiaları iş sahibiyle doğrula. | Düşük | P1 |
| IDD-07 | `/hakkımızda-1` | İçerik (iddia) | "KALİTE VE SERTİFİKASYON" başlığı altında kalite politikası ve "kalite yönetim sistemimiz" anlatılıyor, ama hiçbir sertifika adı/numarası yok ("ISO" geçmiyor). "Dünya lideri olma yolunda" ifadesi var. | `pages/01_*.txt` | Sertifika arayan ziyaretçi bulamaz. | Kanıtsız kalite iddiası. | Sertifika belgelerini iş sahibinden iste, yoksa başlığı yeniden adlandır. | Düşük | P1 |

### 10.3 İletişim bilgileri (NAP)

| ID | Rota | Kategori | Problem | Kanıt | Kullanıcı etkisi | İş etkisi | Çözüm önerisi | Karmaşıklık | Öncelik |
|---|---|---|---|---|---|---|---|---|---|
| NAP-01 | `/`, `/i̇letişim`, `/projeleri̇mi̇z-1` | İçerik | Adres üç biçimde: ana sayfa `No:54/73`, İletişim `No:73, 06374 Yenimahalle/Ankara`, Projelerimiz `No:73` (posta kodu yok). | `scraper/iletisim.txt`, `scraper/projelerimiz.txt`, ana sayfa metni | Ofisi bulmakta zorlanır. | Ziyaret ve güven kaybı. | Doğru adresi iş sahibinden al, tek kaynaktan kullan. | Düşük | P0 |
| NAP-02 | `/`, `/i̇letişim` | İçerik | Çalışma saatleri: ana sayfa 08:30–18:00, İletişim 08:00–19:00. Projelerimiz'de yok. | `scraper/iletisim.txt`, ana sayfa metni | Yanlış saatte gider. | Boşa giden ziyaret. | Doğru saatleri iş sahibinden al. | Düşük | P0 |
| NAP-03 | `/sık-sorulan-sorular`, ana sayfa, footer | İçerik | Görünür biçimler: `0 (312) 999 06 45` (26 kez), `+09 (312) 999 06 45` (SSS, **yanlış ülke kodu**), `+90 (312 ) 999 06 45` (ana sayfa link metni ölçümü). `tel:03129990645`. WhatsApp `wa.me/903129990645` (+90 ile uyumlu). | `pages/*.txt`, `responsive/results.jsonl`, `pages/*.html` | Tek numara, birkaç biçim. SSS'teki `+09` aranırsa yanlış numaraya gider. | Ulaşılamayan müşteri. | Tek görünür biçim, `tel:+903129990645`. | Düşük | P1 |
| NAP-04 | `/hakkımızda-1`, footer, `/i̇letişim` | İçerik | Hakkımızda: "Çakar Enerji Taahhüt İnşaat Gıda Sanayi ve Ticaret A.Ş". Footer ve diğer yerler: "Çakar Enerji A.Ş." ve "Çakar Enerji A.Ş" (noktasız). İletişim: "Çakar Enerji". | ekran görüntüsü, `scraper/*.txt` | Firma kimliği belirsiz. | Ticari unvan ile marka karışık. | Unvan ve marka adını iş sahibiyle netleştir. | Düşük | P1 |

### 10.4 Blog içeriği

Blog `/blog-1` altında 7 yazı içerir, hepsi 2022 tarihli. Gövdeler `audit-data/scraper/blog-*.txt` içinde, her biri yaklaşık 900–1500 kelime.

| ID | Rota | Kategori | Problem | Kanıt | Kullanıcı etkisi | İş etkisi | Çözüm önerisi | Karmaşıklık | Öncelik |
|---|---|---|---|---|---|---|---|---|---|
| BLG-01 | `/blog-1` | İçerik | Son yazı 18 Ekim 2022, blog dört yıldır güncellenmemiş. | `scraper/blog-list.txt` | Terk edilmiş site izlenimi. | Güven kaybı. | Arşiv olarak tarihleriyle koru. Güncel içerik iş sahibinin kararı. | Düşük | P2 |
| BLG-02 | `/blog-1`, 7 yazı | Şablon | Sekiz sayfanın hepsinde "Hesabınızı Bizimle İlişkilendirin" başlığı ve "EPC HİZİMETLERİMİZ" bloğu (yazım hatalı, blogla ilgisiz). | `scraper/blog-*.txt` | Yazının altında alakasız hizmet metni. | Özensiz izlenim, tekrarlanan hatalı iddialar (IDD-06). | Blog şablonundan çıkar. İçeriği gerekirse iş sahibi onayıyla hizmet sayfalarına taşı. | Düşük | P1 |
| BLG-03 | `/blog-1`, 7 yazı | Dil | "Continue Reading" (liste), "All Posts" (yazı) İngilizce. | `scraper/blog-*.txt` | Karışık dil. | Özensiz izlenim. | Türkçeleştir (bkz. YAZ-06). | Düşük | P2 |
| BLG-04 | 7 yazı | İçerik | Yazı gövdeleri satır satır denetlenmedi [doğrulanmadı]. | `scraper/blog-*.txt` | Hatalı bilgi okunabilir. | İtibar riski. | Yeni siteye taşımadan önce gözden geçir. | Orta | P2 |
| BLG-05 | `/blog-1/f/spot-piyasada-…`, `/blog-1/f/tei…` | İçerik | Spot fiyatı 03.06.2022, TEİAŞ Eylül 2022 raporu gibi eski veriler güncel gibi okunabilir. | `scraper/blog-spot.txt`, `blog-teias.txt` | Eski veriyi güncel sanabilir. | Yanıltıcı izlenim. | Tarihi belirgin göster, "arşiv" olarak işaretle. | Düşük | P3 |

## 11. Conversion Audit

| Form | Rota | Alanlar (çalışma anı) | Not |
|---|---|---|---|
| Bülten | `/` | E-posta, KAYDOL | Aydınlatma metni yok |
| İletişim | `/i̇letişim` | Ad, E-posta*, Mesaj | Telefon alanı yok. Gizli bir `_app_id` alanı var (büyük olasılıkla bot tuzağı). |
| Teklif | `/projeleri̇mi̇z-1` | Şirket Adı, E-posta*, Mesaj | Başlık "TEKLİF AL", form başlığı "Bize mesaj atın!" |
| İnsan Kaynakları | `/i̇nsan-kaynakları` | İsim, Telefon, E-posta, Mesaj, dosya yükleme | Dosya yükleme özgeçmiş gibi kişisel veri alır |

İletişim ve Teklif formlarında reCAPTCHA notu var (İngilizce). Diğer dönüşüm yolları: telefon linki, `mailto:`, WhatsApp (`wa.me/903129990645`) ve ana sayfadaki "teklif alın" butonu (`/projeleri̇mi̇z-1` formuna gidiyor).

| ID | Rota | Kategori | Problem | Kanıt | Kullanıcı etkisi | İş etkisi | Çözüm önerisi | Karmaşıklık | Öncelik |
|---|---|---|---|---|---|---|---|---|---|
| CNV-01 | `/i̇letişim`, `/projeleri̇mi̇z-1` | Dönüşüm, form | Telefon alanı yok (İnsan Kaynakları formunda var). | `pages/03_*.json`, `04_*.json`, `14_*.json` | Teklif isteyen kişiye telefonla dönülemez. | Lead kalitesi düşer. | Telefon alanı eklenip eklenmeyeceğine iş sahibi karar versin. | Düşük | P2 |
| CNV-02 | tüm formlar | Dönüşüm, arka uç | Formlar büyük olasılıkla GoDaddy'nin form servisine gönderiyor, alıcı adresi bilinmiyor (hiçbiri gönderilmedi, doğrulanmadı). | `pages/*.json` form özellikleri | — | Yeni sitede form altyapısı kurulmazsa lead kaybolur. | Form arka ucu ve alıcı adresi için karar. | Orta | P0 |
| CNV-03 | tüm formlar | Dönüşüm, form | Doğrulama mesajları, başarı ve hata durumları bilinmiyor [doğrulanmadı]. | formlar gönderilmedi | Hata durumunda ne olacağı bilinmiyor. | — | Yeni sitede tanımla, canlı sitedeki davranışı kopyalama. | Orta | P2 |
| CNV-04 | `/` | Dönüşüm, veri | Bülten formu e-posta topluyor. Mevcut abone listesi varsa GoDaddy'den dışa aktarılması gerekebilir [doğrulanmadı]. | `pages/00_home.json` | — | Abone listesi kaybı. | İş sahibine sor. | Düşük | P1 |
| CNV-05 | `/i̇nsan-kaynakları`, tüm formlar | Dönüşüm, hukuki | Formlar (özellikle özgeçmiş yükleme) kişisel veri topluyor, aydınlatma metni yok (bkz. LGL-01). | `pages/03_*.json` | Verisinin nasıl kullanılacağını bilmez. | KVKK riski. | Aydınlatma metni ve onay kutusu. | Orta | P1 |

Teklif yolunun kendisi (menüde "PROJELERİMİZ", sayfada "TEKLİF AL") BRK-03'te ele alınır.

## 12. Visual Design Audit

Görsel denetim ana sayfanın (ilk tur) ve bu turda alınan beş ekran görüntüsüne dayanır. Tam tasarım incelemesi yapılmadı [doğrulanmadı].

| ID | Rota | Kategori | Problem | Kanıt | Kullanıcı etkisi | İş etkisi | Çözüm önerisi | Karmaşıklık | Öncelik |
|---|---|---|---|---|---|---|---|---|---|
| VIS-01 | site geneli | Görsel tasarım | Görseller stok fotoğraf (pexels/pixabay dosya adları). Referans, müşteri logosu, sertifika ve proje fotoğrafı yok. | `pages/*.json` görsel adları, `scraper/hakkimizda-desktop.png` | Jenerik görünüm, güven sinyali yok. | Ciddi bir EPC firması için zayıf güven. | Gerçek proje fotoğrafı, sertifika ve referans iste. | Orta (içeriğe bağlı) | P2 |
| VIS-02 | site geneli | Görsel tasarım | Başlıklar altın renkli, italik, serif bir fontla yazılmış, ama bu font yüklenen fontlar listesinde yok (yalnızca Montserrat 600, Roboto 400/700). Font ailesi ve altın rengin hex değeri bilinmiyor [doğrulanmadı]. | `scraper/*.png` ekran görüntüleri, `perf/perf.jsonl` `fontsLoaded` | — | Yeni site farklı görünebilir, marka tutarlılığı bozulur. | Tasarım sistemi kurulmadan önce `getComputedStyle` ile font ve renkleri al. | Düşük | P2 |
| VIS-03 | `/blog-1` | Görsel tasarım | Blog kartlarında üçüncü taraf logosu (TEİAŞ) ve stok görseller. Kullanım hakkı bilinmiyor [doğrulanmadı]. | `scraper/cookie-desktop-blog1.png` | — | Telif riski. | İş sahibine sor. | Düşük | P3 |

Banner kontrastı için A11Y-04, banner boyutu için RSP-01, slogan bandı için A11Y-06 bakın.

## 13. Technical Debt

| ID | Rota | Kategori | Problem | Kanıt | Kullanıcı etkisi | İş etkisi | Çözüm önerisi | Karmaşıklık | Öncelik |
|---|---|---|---|---|---|---|---|---|---|
| TD-01 | site geneli | Teknik borç | Kaynak ve orijinal varlık kütüphanesi yok. Görseller ve logo GoDaddy CDN'inde yalnızca yeniden boyutlandırılmış sürümlerle kayıtlı (örn. `rs=w:1535`, logo `rs=h:75`). | `perf/perf.jsonl` `top`, `pages/*.json` `imgs` | Bulanık logo ya da görsel riski. | Yeni sitede kaliteli varlık yok. | Orijinal logo ve görselleri iş sahibinden (GoDaddy hesabından) iste. | Orta | P1 |
| TD-02 | `/i̇nsan-kaynakları`, `/i̇letişim`, `/projeleri̇mi̇z-1`, blog yazısı | Teknik borç | Üç slug'da birleşik nokta (U+0307) ve blog slug'ları percent-encoded. Next.js dosya tabanlı yönlendirmede bu adreslerin birebir eşleşmesi doğrulanmadı [doğrulanmadı]. | `HANDOFF.md`, `pages/*.json` | Yanlış eşleşmede 404. | SEO ve bağlantı kaybı. | Faz 1'de her rotayı gerçek istekle test et. | Orta | P1 |
| TD-03 | `/blog-1` | Teknik borç | Blog listesi ve gövdeleri istemci tarafında `blog.apps.secureserver.net` feed'inden yükleniyor, ilk HTML'de yazı linkleri yok (27 linkten hiçbiri yazı değil). | `pages/15_blog1.json`, `perf/blog.json` | JS'siz ya da yavaş bağlantıda içerik yok. | Arama motoru için görünürlük zayıf. | Yeni sitede yazıları statik üret, mevcut metinleri `scraper/blog-*.txt`'ten taşı. | Orta | P2 |

## 14. Broken / Incomplete Pages

| ID | Rota | Kategori | Problem | Kanıt | Kullanıcı etkisi | İş etkisi | Çözüm önerisi | Karmaşıklık | Öncelik |
|---|---|---|---|---|---|---|---|---|---|
| BRK-01 | `/arazi-ges-konstrüksiyon`, `/solar-carport-sistemleri` | Eksik sayfa | Menü ve footer dışında yalnızca başlık. | `pages/11_*.txt`, `pages/12_*.txt` | Çıkmaz sokak. | Ürün bölümü boş, güven kaybı. | İçerik iş sahibinden. Gelene kadar sayfayı yayınlama ya da açıkça "hazırlanıyor" de. | Düşük (içeriğe bağlı) | P0 |
| BRK-02 | `/çatı-ges-konstrüksiyon` | Yer tutucu | "Deneyimsel Çözümler Yakında..." ve geri sayım `131 Days 02 Hrs 44 Mins 26 Secs` (hedef ≈ 30 Ocak 2027). İlk HTML'de sıfır. Saniyenin ilerlediği tek örnekle doğrulanmadı. | `scraper/çatı-ges.txt` | Neyin geri sayımı olduğu belli değil. | Ürün hakkında bilgi yok. | Amaç ve hedef tarihi iş sahibinden öğren, uydurma. | Düşük | P0 |
| BRK-03 | `/projeleri̇mi̇z-1` | Yanlış sayfa | Sayfa "TEKLİF AL" formu ("Şirket Adı / E-posta / Mesaj"), proje listesi yok. Menü etiketi "PROJELERİMİZ", form başlığı "Bize mesaj atın!". | `scraper/projelerimiz.txt` | Proje arayan teklif formuyla karşılaşır. | Referans eksikliği, teklif yolu belirsiz. | Proje ve referans içeriğini iş sahibinden iste. Rota aynı kalır. Teklif formunu ayrı bir bölüme al. | Orta (içeriğe bağlı) | P1 |
| BRK-04 | `sitemap.ola.xml` | Hata | HTTP 500 hata sayfası döndürüyor (bkz. SEO-05). | `sitemaps/sm_ola.xml` | — | Tarayıcı botlarda hata. | Yeni sitede kaldır. | Düşük | P3 |

Blog şablonundaki alakasız blok BLG-02'de, yanlış hedefli butonlar UX-01'de ele alınır.

## 15. Quick Wins

Düşük karmaşıklık, P1–P2 öncelikli, iş sahibi bilgisi gerektirmeyen ya da az gerektiren işler:

| ID | Ne yapılır |
|---|---|
| NAV-01, NAV-02, NAV-03 | Menüde tüm bölümleri göster, etiketleri Türkçeleştir, "Uygulamaları" yazımını düzelt |
| UX-01 | "Ayrıntıları öğrenin" butonlarını doğru sayfalara bağla |
| YAZ-02, YAZ-03, YAZ-04, YAZ-06 | Yazım hataları, İngilizce metinler |
| NAP-03 | Telefonu tek biçimde ve `tel:+90…` olarak yaz |
| SEO-01, SEO-02, SEO-03 | Her sayfaya Türkçe description, tek title şablonu, canonical |
| A11Y-01, A11Y-02, A11Y-04, A11Y-05, A11Y-08 | Landmark, başlık hiyerarşisi, banner kontrastı ve gerçek düğme, görünür label |
| RSP-01 | Kompakt çerez bannerı |
| BLG-02 | Blog şablonundan alakasız EPC bloğunu çıkar |

## 16. Medium-Term Improvements

Orta karmaşıklık, birkaç günlük işler:

| ID | Ne yapılır |
|---|---|
| TD-02 | Tüm rotaları birleşik noktalı slug'larla birebir kur ve test et |
| TD-03, BLG-04 | Blog yazılarını statik üret, gövdeleri gözden geçir |
| NAV-06 | Bilgi mimarisini (hizmet/ürün) yeniden kur |
| CNV-03 | Form doğrulama ve durum mesajlarını tasarla |
| IDD-03 | Teşvik ve yasal iddiaları güncel mevzuatla doğrula |
| PRF-01 | Google Maps ve Vimeo'yu tıklayınca yükle |
| VIS-02 | Mevcut sitenin font ve renklerini alıp tasarım sistemi kur |

## 17. Major Improvements

Yüksek karmaşıklık ya da dış bağımlılık:

| ID | Ne yapılır |
|---|---|
| CNV-02 | Form arka ucu, alıcı adresi ve spam koruması |
| LGL-01, LGL-02 | Gizlilik, KVKK ve çerez metinleri, rıza mekanizması (hukuki danışmanlıkla) |
| BRK-01, BRK-03, VIS-01 | Boş sayfalar, projeler ve referanslar için gerçek içerik ve fotoğraf |
| TD-01 | Orijinal logo ve görselleri temin etme |
| BLG-01 | Blog stratejisi: arşiv mi, yeni içerik mi |

### Hukuki gözlemler (LGL)

Bunlar gözlemdir. Hukuki değerlendirme gerekir, bu belge hukuki görüş değildir.

| ID | Rota | Kategori | Problem | Kanıt | Kullanıcı etkisi | İş etkisi | Çözüm önerisi | Karmaşıklık | Öncelik |
|---|---|---|---|---|---|---|---|---|---|
| LGL-01 | site geneli | Hukuki | 23 URL ve sitemap'te gizlilik, KVKK ya da çerez politikası sayfası yok. Bülten, iletişim, teklif ve özgeçmiş formları kişisel veri topluyor. | `pages/`, `sitemaps/` | Verisinin nasıl işlendiğini bilmez. | KVKK aydınlatma yükümlülüğü riski. | Metinleri iş sahibi ve hukuk danışmanı hazırlasın. | Orta | P1 |
| LGL-02 | tüm sayfalar | Hukuki | Çerez bannerı: metin İngilizce, tek buton "Accept", reddet ya da ayar yok. "analyze website traffic" diyor ama Google Analytics/GTM/Pixel bulunmadı. | `scraper/cookie-banner.html` | Rıza vermeden seçenek yok. | Rıza mekanizması ve metin uyumsuz. | Yeni bannerı hukuki görüşle tasarla. | Orta | P1 |

## 18. Risks

| ID | Risk | Etki | Azaltma |
|---|---|---|---|
| R-01 | Birleşik noktalı ve percent-encoded slug'ların yeni sitede eşleşmemesi (TD-02) | 404, SEO ve bağlantı kaybı | Faz 1'de her rotayı gerçek istekle test et. |
| R-02 | İş sahibinden gelmeyen bilgiyle içerik yazmak (NAP, iddialar) | Yanlış bilgi yayımlanır | Faz 0'ı tamamlamadan içerik yazma. Bilgi uydurma. |
| R-03 | Formlar ve bülten aboneleri taşınırken kayıp (CNV-02, CNV-04) | Lead ve abone kaybı | Alıcı adresi ve abone listesini önceden al. |
| R-04 | Hukuki gereksinimlerin atlanması (LGL-01, LGL-02) | KVKK riski | Yayından önce hukuki görüş. |
| R-05 | Kanıtsız iddiaların yeni siteye taşınması (IDD) | Yanıltıcı beyan, itibar | İddia başına dayanak iste. |
| R-06 | Eksik ölçümler yüzünden gözden kaçan sorunlar (bölüm 1) | Bilinmeyen sorunlar | Kalan ölçümleri kullanıcı kendi Chrome'undan alsın. Otomatik tarama yapılmaz. |
| R-07 | Alan adı ve DNS yönetiminin kimde olduğu bilinmiyor [doğrulanmadı] | Yayına geçiş engellenir | Erişimi iş sahibinden öğren. |
| R-08 | Yüksek çözünürlüklü logo ve görsel yok (TD-01) | Görsel kalite düşer | Orijinalleri iste. |
| R-09 | Üçüncü taraf logo ve görsellerin hakkı belirsiz (VIS-03) | Telif riski | İş sahibine sor, gerekirse değiştir. |

## 19. Recommended Implementation Order

**Faz 0: iş sahibinden gereken bilgi ve kararlar (P0)**
1. Doğru adres (`No:54/73` mü `No:73` mü), posta kodu (06374), çalışma saatleri, tek telefon biçimi, ticari unvan ve marka adı (NAP-01…NAP-04).
2. Üç boş sayfa ne olacak: içerik yazılacak mı, kaldırılıp yönlendirilecek mi? Geri sayımın amacı ve hedef tarihi (BRK-01, BRK-02).
3. Bölüm 10.2'deki iddialar için dayanak (IDD-01…IDD-07).
4. Formlar: alıcı e-posta adresi, telefon alanı gerekli mi, mevcut bülten aboneleri (CNV-01, CNV-02, CNV-04).
5. Proje, referans, sertifika, orijinal logo ve gerçek fotoğraflar; Vimeo video adresi (BRK-03, VIS-01, TD-01).
6. Blog: 2022 yazıları arşiv olarak kalsın mı (BLG-01)?
7. Alan adı ve DNS erişimi kimde (R-07)?

**Faz 1: iskelet**
- Rotaları birebir kur ve test et (bölüm 3, TD-02), layout, üst menü (NAV-01), footer (NAV-05), semantik landmark'lar (A11Y-01, A11Y-02).
- Tasarım sistemi: önce mevcut siteden font ve renk değerlerini al (VIS-02). Roboto ve Montserrat'ı self-host et.
- Blog şablonunu EPC bloğu olmadan kur, yazıları statik üret (BLG-02, TD-03).

**Faz 2: hızlı düzeltmeler (bölüm 15)**
- Yazım, dil ve link düzeltmeleri, Türkçe description ve title (SEO-01, SEO-02), NAP düzeltmeleri.
- Çerez bannerı: kompakt, Türkçe, yeterli kontrast, gerçek düğme (RSP-01, A11Y-04, A11Y-05) ve LGL-02'deki hukuki görüş.

**Faz 3: orta vadeli işler (bölüm 16) ve büyük işler (bölüm 17)**
- Form arka ucu, hukuki metinler, içerik ve görsel üretimi, blog stratejisi.

**Faz 4: kalan ölçümler**
- Kalan responsive ekran görüntüleri, klavye ve odak testleri, çalışma anı kontrast (bölüm 1). Kullanıcı yine kendi Chrome'undan veri alır, Playwright ve curl ile yeniden tarama yapılmaz.

### Bu denetimin sınırı
Bu belge canlı sitenin mevcut durumunu kaydeder. Yeni sitenin tasarımını, bileşenlerini ve içeriğini kapsamaz.
