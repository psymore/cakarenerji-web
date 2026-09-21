# Open questions and uncertainties

Açık sorular ve belirsizlikler. `AUDIT.md`'de bulunan ama tek başına çözülemeyen her şey burada toplanır. Bu dosya canlı bir listedir: cevap gelince satırın durumunu ve cevabı güncelle, yeni belirsizlik çıkınca ekle.

**Kural:** İş bilgisi uydurulmaz. Bir bilgi bu listede "open" ise, yeni sitede o bilgiyi içeren metin yazılmaz ya da yer tutucu olarak işaretlenir.

Durumlar: `open` (cevap bekliyor), `answered` (cevap geldi, siteye uygulanmadı), `done` (siteye uygulandı).

---

## A. İş sahibine sorulacaklar

Cevabı yalnızca iş sahibi verebilir. "Bağlı sorun" sütunu `AUDIT.md`'deki ID'yi gösterir.

| ID | Soru | Neden önemli | Bağlı sorun | Durum | Cevap |
|---|---|---|---|---|---|
| Q-01 | Doğru adres nedir: `No:54/73` mü, `No:73` mü? | Sitede üç farklı yazım var. | NAP-01 | open | |
| Q-02 | Posta kodu 06374 doğru mu? | Yalnızca İletişim sayfasında var. | NAP-01 | open | |
| Q-03 | Çalışma saatleri nedir: 08:30–18:00 mü, 08:00–19:00 mu? Hafta sonu? | Ana sayfa ve İletişim sayfası farklı saat yazıyor. | NAP-02 | open | |
| Q-04 | Telefon `+90 312 999 06 45` doğru mu? (SSS'te `+09` yazıyor, WhatsApp bağlantısı `+90` ile uyumlu.) | Tek biçim ve `tel:` bağlantısı için. | NAP-03 | open | |
| Q-05 | Ticari unvan ve marka adı nedir? Hakkımızda "Çakar Enerji Taahhüt İnşaat Gıda Sanayi ve Ticaret A.Ş", diğer yerlerde "Çakar Enerji A.Ş." yazıyor. | Footer, hukuki metinler ve yapılandırılmış veri için. | NAP-04 | open | |
| Q-06 | Arazi GES Konstrüksiyon ve Solar Carport sayfalarının içeriği nedir? Yoksa sayfalar kaldırılıp yönlendirilsin mi? | Şu an yalnızca başlık var, menü ve footer'da linkler duruyor. | BRK-01, NAV-05 | open | |
| Q-07 | Çatı GES sayfasındaki geri sayım neyin, hangi tarihin geri sayımı? "Deneyimsel Çözümler Yakında..." ne anlama geliyor? | Yaklaşık 30 Ocak 2027'ye sayıyor, amacı belli değil. | BRK-02 | open | |
| Q-08 | Şu iddialar için dayanak var mı ve güncel mi? 10 yıllık devlet alım garantisi (dolar bazlı), 2016 Yenilenebilir Enerji Kanunu, YTB 240 kW KDV muafiyeti, "%50'ye varan" IPARD/KKDF desteği, "Ekonomi ve Sanayi Bakanlığı" adı, 40 yıl ömür / 25 yıl garanti, "sektörün önde gelen üreticileri ile uzun dönemli sözleşmeler", "GES yatırım geri dönüş süreleri 4 yıla kadar", "sektörde en uzun süredir anahtar teslim çatı kurulum tecrübesi". | Kanıtsız iddia yeni siteye taşınmaz. | IDD-01…IDD-06 | open | |
| Q-09 | Kalite politikası "kalite yönetim sistemi"nden söz ediyor, ama hiçbir sertifika adı yok. Sertifikanız (ISO vb.) var mı? Belgeler nerede? | "Kalite ve Sertifikasyon" başlığının içeriğini belirler. | IDD-07, VIS-01 | open | |
| Q-10 | Formlar kime gitsin? İletişim, Teklif, İnsan Kaynakları ve Bülten formları için alıcı e-posta adresi nedir? Şu an nereye gidiyor? | Yeni sitede form altyapısı kurulacak. | CNV-02 | open | |
| Q-11 | İletişim ve Teklif formlarına telefon alanı eklensin mi? (İnsan Kaynakları formunda var.) | Geri dönüş kanalını belirler. | CNV-01 | open | |
| Q-12 | Bülten aboneleri var mı? Varsa liste GoDaddy hesabından dışa aktarılabilir mi? | Abone listesi kaybolabilir. | CNV-04 | open | |
| Q-13 | Yayınlanabilir proje, referans, müşteri logosu ve gerçek fotoğraf var mı? | PROJELERİMİZ sayfası şu an proje içermiyor, görseller stok. | BRK-03, VIS-01 | open | |
| Q-14 | Orijinal logo (vektör ya da yüksek çözünürlük) ve yüklenmiş görsellerin orijinalleri elde var mı? GoDaddy hesabından indirilebilir mi? | Sitede yalnızca yeniden boyutlandırılmış sürümler var. | TD-01 | open | |
| Q-15 | Ana sayfadaki Vimeo videosu neyi gösteriyor? | Adresi bulundu (`player.vimeo.com/video/738877978`, `audit-data/pages/00_home.html`), içeriği ve sayfadaki yeri bilinmiyor. | PRF-01 | open | Adres: bulundu, iş sahibi içeriği doğrulasın. |
| Q-16 | 2022 tarihli 7 blog yazısı arşiv olarak kalsın mı? Yeni yazı planı var mı? | Blog stratejisini belirler. | BLG-01 | open | |
| Q-17 | Blog kartlarındaki TEİAŞ logosunu kullanma izniniz var mı? | Üçüncü taraf logosu. | VIS-03 | open | |
| Q-18 | Alan adı ve DNS yönetimi kimde? Yayına geçişte DNS değişikliğini kim yapacak? | Geçiş bu erişime bağlı. | R-07 | open | |
| Q-19 | Hizmetlerimiz sayfasındaki "Şebeke Bağlantılı (Off-Grid) Sistemler" başlığı yanlış mı, doğrusu "Şebekeden Bağımsız (Off-Grid)" mi? | Teknik olarak kendi metniyle çelişiyor. | YAZ-01 | open | |
| Q-20 | Ana sayfadaki "Tedarikçimiz olmak için teklif alın" cümlesi ne demek istiyor: müşteri mi çağrılıyor, tedarikçi mi? | Cümle belirsiz. | YAZ-07 | open | |
| Q-21 | "Ayrıntıları öğrenin" butonları hangi sayfalara gitmeli? (Şu an anasayfaya ya da `/hizmetlerimiz`'e gidiyorlar.) | Hedef sayfa iş sahibinin tercihi. | UX-01 | open | |
| Q-22 | Sağ altta 65×65 px yüzen bir öğe var. WhatsApp düğmesi mi, sohbet mi? Korunacak mı? | Ne olduğu bilinmiyor. | RSP-05 | open | |
| Q-23 | Gizlilik, KVKK aydınlatma ve çerez politikası metinleri kim tarafından hazırlanacak (avukat, danışman)? Çerez bannerında "reddet" seçeneği istenir mi? | Yasal metinleri biz uyduramayız. | LGL-01, LGL-02 | open | |
| Q-24 | Analitik (Google Analytics vb.) kullanılacak mı? Şu an yok. | Çerez rızasını etkiler. | LGL-02 | open | |
| Q-25 | Arama motoru sonuçlarında görünecek site açıklaması (meta description) için hangi cümle kullanılsın? Canlı sitede tanımlı mıydı? | V0'da yok, Lighthouse SEO puanı 90'da kalıyor. Metin iş bilgisidir, uydurulmaz. | Lighthouse (bkz. `docs/ui-optimization/`) | open | |

## B. Teknik belirsizlikler

Bunları iş sahibi olmadan, kendi Chrome'undan alınan veri ya da yeni sitedeki testlerle biz çözebiliriz.

| ID | Belirsizlik | Nasıl çözülür | Bağlı sorun | Durum | Sonuç |
|---|---|---|---|---|---|
| U-01 | Next.js'te birleşik noktalı (U+0307) ve percent-encoded slug'lar birebir eşleşiyor mu? | Faz 1'de her rotayı gerçek istekle test et. | TD-02 | done | Dört slug da (U+0307 içeren) `app/[slug]` ile eşleşiyor, 23 rota localhost'ta 200 döndü (`npm run build` + `next start`). |
| U-02 | Çerez bannerı 768 px ve 1440 px'te içeriğe biniyor mu? | Kendi Chrome'unda bu genişliklerde ekran görüntüsü. | RSP-04 | open | |
| U-03 | Çatı GES geri sayımı gerçekten saniye saniye ilerliyor mu? | Sayfayı iki kez, birkaç saniye arayla oku. | BRK-02 | open | |
| U-04 | Klavye gezinmesi, odak göstergesi ve dropdown'ın klavye davranışı nasıl? | Tab ile gezerek elle test. | A11Y-09, NAV-04 | open | |
| U-05 | Çalışma anı renk kontrastı, özellikle "Enerji daha güçlü atılımlar için birikimdir.." bandı? | Chrome DevTools kontrast aracı ya da Lighthouse. | A11Y-06 | open | |
| U-06 | Formların doğrulama, başarı ve hata durumları nasıl? | Canlı formu göndermeden bilinemez. Yeni sitede sıfırdan tasarlanır. | CNV-03 | open | |
| U-07 | Sosyal ikon linklerinin erişilebilir adı (`aria-label`) var mı? | DevTools ile kontrol. | A11Y-07 | open | |
| U-08 | Başlıklarda kullanılan altın italik serif fontun adı ve altın rengin hex değeri? | `getComputedStyle` ile başlık öğesinden al. | VIS-02 | open | |
| U-09 | Blog yazı gövdelerinde yazım ve olgu hataları var mı? | `scraper/blog-*.txt` dosyalarını satır satır oku. | BLG-04 | open | |
| U-10 | Kalan responsive ölçümleri: `/hizmetlerimiz` 430 ve 1024–1440 px, diğer dört sayfa 8 genişlik. | Kendi Chrome'unda cihaz çubuğuyla ekran görüntüsü. Otomatik tarama yapılmaz. | RSP bölümü | open | |
| U-11 | Sitemap `lastmod` 2025-08-28 ne anlama geliyor: içerik değişikliği mi, yeniden yayın mı? | Bilinmiyor, önemi düşük. | Bölüm 2 | open | |
| U-12 | Alt metni eksik görsellerin hangileri süs, hangileri içerik? | İlk HTML'deki görselleri tek tek incele. | A11Y-03 | open | |
| U-13 | Ana sayfa çalışma saati 08:30–18:00 mü, 08:00–19:00 mu? AUDIT NAP-02 ilkini yazıyor ama kayıtlı hiçbir dosyada yok. | Ana sayfayı kendi Chrome'unda `copy(document.body.innerText)` ile kaydet (`audit-data/scraper/ana-sayfa.txt`). | NAP-02 | open | |
| U-14 | Ana sayfanın çalışma anı yapısı: hero, video ve haritanın yeri, sosyal ikonların yeri, görseller. | Ana sayfa metni ve viewport ekran görüntüsü, kendi Chrome'undan. | Bölüm 12 | open | |
| U-15 | Çatı GES geri sayımının gerçek hedef tarihi. V0 yaklaşık 2027-01-30 19:00'a sayıyor. | Sayfayı iki kez, birkaç saniye arayla oku (U-03 ile birlikte). | BRK-02 | open | |
| U-16 | Blog yazı sayfalarındaki "Share this post:" hangi paylaşım düğmelerini gösteriyordu? | Bir yazı sayfasının ekran görüntüsü. | BLG-02 | open | |
| U-17 | SSS ve landing sayfalarındaki listelerin öğe sınırları ve Hakkımızda kalite politikasının yapısı (liste mi, paragraf mı). | İlgili sayfaların `outerHTML` ya da ekran görüntüsü. | Bölüm 10 | open | |
| U-18 | Blog yazı gövdelerinde başka yazım hatası var mı? V0'da yalnızca iki net hata düzeltildi. | `content/blog/*.txt` dosyalarını satır satır oku (U-09 ile birlikte). | BLG-04 | open | |

## C. Cevaplananlar

Cevap gelince satırı A ya da B bölümünden buraya taşıma, yalnızca durumunu `answered` ya da `done` yapıp cevap sütununu doldur. Bu bölüm henüz boş.

## D. V0'da varsayılan uygulanan kararlar

Cevap beklemeden uygulanan kararlar. "Açık uçlu" = gerçek cevap iş sahibinden ya da kullanıcıdan gelene kadar kesinleşmez. Ayrıntı: `docs/route-must-haves.md`.

| ID | Karar (V0 varsayılanı) | Açık uçlu mu | Nerede değişir | Bağlı |
|---|---|---|---|---|
| D-01 | Adres, saat ve telefon tek kaynaktan: `No:54/73, 06374`, `08:00 – 19:00`, `tel:+903129990645`. Canlıda sayfadan sayfaya değişiyor. | Evet | `lib/site.ts` | Q-01…Q-05, U-13, NAP-01…NAP-03 |
| D-02 | SSS'teki `+09 (312) 999 06 45` olduğu gibi bırakıldı (yazım değil, bilgi hatası). | Evet | `content/pages/faq.ts` | Q-04, NAP-03 |
| D-03 | Formlar mailto ile info@cakarenerji.com'a e-posta istemcisi açıyor, reCAPTCHA notu gösterilmiyor, dosya eki gitmiyor. | Evet | `components/MailForm.tsx` | Q-10, CNV-02 |
| D-04 | Çatı GES geri sayımı yaklaşık 2027-01-30 19:00'a sayıyor (yakalamadan hesaplandı). | Evet | `components/Countdown.tsx` | Q-07, U-15, BRK-02 |
| D-05 | Blogdaki EPC şablon bloğu duruyor (hataları düzeltildi), "Share this post:" eklenmedi, "Recent Posts" eklendi. Kaldırmak kapsam kararı. | Evet | `content/blog-template.ts`, `components/blog/` | BLG-02, U-16 |
| D-06 | Bilinmeyen adreslerde yeni, minimal 404 ("Sayfa bulunamadı"). Canlıda GoDaddy varsayılanı var, bu yeni metin. | Hayır (onay yeter) | `app/not-found.tsx` | UX-03 |
| D-07 | Yazım düzeltmeleri yalnızca `/duzeltmeler` galerisinde kırmızı çerçeveyle gösteriliyor, sitede hiçbir yerden bağlanmıyor, arama motorlarına kapalı. Yayına alınırken galerinin kalıp kalmayacağı kararı. | Evet | `app/duzeltmeler/` | docs/route-must-haves.md |

### Olduğu gibi bırakılanlar

Canlı sitedeki bu öğelere V0'da dokunulmadı. Yazım şüpheleri galeride ("Olduğu gibi bırakılanlar") da listeli.

| Öğe | Neden bırakıldı | Bağlı |
|---|---|---|
| Doğrulanmamış iddialar (devlet alım garantisi, 2016 kanunu, YTB/KDV, %50 destek, 40 yıl ömür / 25 yıl garanti, tedarik sözleşmeleri, "4 yıla kadar", "en uzun süredir", kalite sertifikası, 2 yıl montaj garantisi) | Yalnızca iş sahibi doğrulayabilir | IDD-01…IDD-07, Q-08, Q-09 |
| "Şebeke Bağlantılı (Off-Grid) Sistemler" başlığı | Yazım değil olgu hatası olabilir | YAZ-01, Q-19 |
| "Tedarikçimiz olmak için teklif alın." | Anlamı belirsiz | YAZ-07, Q-20 |
| "Ayrıntıları öğrenin" hedefleri (`/hizmetlerimiz` ve `/`) | Doğru hedef iş sahibinin tercihi | UX-01, Q-21 |
| İngilizce etiketler ("Continue Reading", "All Posts", "Recent Posts") | Çeviri metin değişikliği | YAZ-06 |
| Ticari unvan ve marka adı farkları (`Çakar Enerji A.Ş`, `A.Ş.`, `Çakar Enerji`) | Doğrusu bilinmiyor | NAP-04, Q-05 |
| Şüpheli yazımlar: `birikimdir..` ve tırnak, soru işaretinden önce boşluk, `%50si`, "yapılabiliyoruz", FAQ liste büyük/küçük harf farkı | Belirsiz ya da cümleyi değiştirir | galeri, `content/typo-notes.ts` |
| Blog gövdeleri (yalnızca 2 net hata düzeltildi) | Satır satır okunmadı | BLG-04, U-18 |
| Boş sayfalar (Arazi GES, Solar Carport) | İçerik yok, doldurulmadı | BRK-01, Q-06 |
