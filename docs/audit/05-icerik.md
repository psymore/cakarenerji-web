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
