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
