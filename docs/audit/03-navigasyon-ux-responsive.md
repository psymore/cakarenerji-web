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
