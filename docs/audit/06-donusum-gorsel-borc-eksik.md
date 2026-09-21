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
