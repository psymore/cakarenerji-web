# Devir özeti: Çakar Enerji V0

Tarih: 2026-09-21. Hedef site: https://cakarenerji.com/

## Durum
- **AUDIT.md yazılmadı.** Denetim verisinin büyük kısmı toplandı, ama site bu bilgisayardan erişilemez hale gelince dosya yazılmadan durduruldu.
- Repo: `C:\Users\4D\cakarenerji-web`. Next.js 16.3.5, React 19, TypeScript, Tailwind 4 ve ESLint kurulu. `npm run dev` ve `npm run build` çalıştı.
- Bu repo canlı sitenin kaynağı değil, kurulum iskeleti. Canlı site **GoDaddy Website Builder** ile yapılmış. Kanıt: `Server: DPS`, `wsimg.com` varlıkları, footer'da "Destekli GoDaddy Airo". Kaynak kod yok, tek referans canlı site.

## İlk kurulumdaki hatalar (düzeltilmeli)
- İlk raporda `tailwind.config.ts` ve `postcss.config.js` var denmişti, yok. Sadece `postcss.config.mjs` var.
- "Git ile başlatıldı" denmişti, başlatılmadı. Klasör `C:\Users\4D` reposunun içinde (commit yok) ve `--skip-git` ile oluşturuldu.
- `app/page.tsx` tasarım kararı içeren bir placeholder. Var olmayan `/project-status` rotasına ve `github.com/anthropics/claude-code` adresine link veriyor. Bunlar yapılmamalıydı.
- `PROJECT-STATUS.md` istenen basit formatta değil, emojili ve uzun.
- README'de olmayan `/styles` klasörü yazıyor. `public/` içinde varsayılan Next SVG'leri duruyor.

## Toplanan bulgular (23 URL, hepsi 200 döndü)

**Yapı**
- 16 sayfa ve 7 blog yazısı var. Sitemap: 3 dosya. `sitemap.ola.xml` HTTP 500 hata sayfası döndürüyor, `robots.txt` içinde sadece `User-agent: *` var.
- Breakpoint'ler: 450, 768, 1024, 1280, 1536.
- Tipografi: Roboto (gövde), Montserrat (başlık).
- Renkler: metin `#161616`, vurgu `#455A64`. Logo altın renkli ama arayüz nötr.
- Analitik: sadece GoDaddy'nin kendi izleme kodları. GA, GTM ve Pixel bulunmadı.

**Boş veya yanlış sayfalar**
- **Arazi GES Konstrüksiyon** ve **Solar Carport Sistemleri** sadece başlık içeriyor.
- **Çatı GES Konstrüksiyon** "Deneyimsel Çözümler Yakında..." ve sıfırlarda takılı bir geri sayım gösteriyor (statik HTML'e göre; çalışma anındaki davranışı doğrulanmadı).
- Bu üç sayfa footer'daki tek navigasyon linkleri.
- **PROJELERİMİZ** sayfası aslında "TEKLİF AL" formu. Sitede hiç proje yok.
- Blog: 7 yazının hepsi Mayıs–Ekim 2022 tarihli, son yazı 18 Ekim 2022. Blog sayfasında alakasız bir "EPC HİZİMETLERİMİZ" bloğu ve "Hesabınızı Bizimle İlişkilendirin" başlığı var.
- Blog yazı listesi ve gövdeleri istemci tarafında yükleniyor (`blog.apps.secureserver.net` feed API'si). Statik HTML'de bloglar aynı iskelet.

**İçerik hataları (yeniden yazma, işaretle)**
- Hizmetlerimiz'de "Şebeke Bağlantılı (**Off-Grid**)" ifadesi kendi metniyle çelişiyor.
- SSS'te telefon `+09 (312) 999 06 45` yazıyor (doğrusu +90). Telefon toplam 4 farklı formatta geçiyor.
- Adres footer'da `No:54/73`, İletişim ve Projelerimiz sayfalarında `No:73`. Projelerimiz'de posta kodu yok.
- Yazım hataları: "Alısveriş", "Similasyonu", "Kordinatlı", "almak almak", "HİZİMETLERİMİZ". Nav ve title'da "Solar Otopark Uygulamalar" (h1 "Uygulamaları").
- Footer'da "© 2023".
- Doğrulanması gereken iddialar: "10 yıllık dolar bazlı devlet alım garantisi", "2016 Yenilenebilir Enerji Kanunu", YTB 240 kW KDV muafiyeti, "%50'ye varan" IPARD/KKDF desteği, "Ekonomi ve Sanayi Bakanlığı" adı, "40 yıl ömür / 25 yıl garanti", "sektörün önde gelen üreticileri ile uzun dönemli sözleşmeler".
- Görseller stok fotoğraf (pexels/pixabay dosya adları). Referans, müşteri logosu, sertifika, proje fotoğrafı yok.
- Gizlilik, KVKK ve çerez politikası sayfası yok. Çerez bannerında sadece "Kabul Et" var (hukuki değerlendirme gerekli).
- "Ayrıntıları öğrenin" butonları: Endüstriyel sayfasında `/hizmetlerimiz`'e gidiyor. Arazi, Otopark, Danışmanlık ve Tedarik sayfalarında `/` (anasayfa) adresine gidiyor. Anasayfadaki `/hakkımızda-1`'e gidiyor.

**SEO ve erişilebilirlik (statik HTML)**
- 23 URL'nin 15'inde meta description yok. Anasayfanın description'ı sadece "Solar Solutions".
- Canonical sadece blog yazılarında var. `/hizmetlerimiz/` (sonda eğik çizgi) da 200 dönüyor, yani yinelenen URL.
- Yapılandırılmış veri yok.
- Hiçbir sayfada `<main>`, `<header>` veya `<footer>` yok. Anasayfada iki h1 var, iç sayfalarda h1'den h4'e atlanıyor.
- İletişim formunda telefon alanı yok. Mesaj alanının görünür label'ı yok.
- 404 sayfası çıplak GoDaddy varsayılanı.

**Performans (masaüstü + mobil emülasyon, throttling yok, sayfa aşağı kaydırılarak ölçüldü)**
- Anasayfa: 118 istek, 2.37 MB, JS 1.08 MB (61 dosya), LCP 0.9 sn (mobilde 0.55 sn), CLS ~0.
- İç sayfalar: 48–50 istek, 0.48–0.66 MB.
- Google Maps yaklaşık 600 KB, Vimeo oynatıcısı yaklaşık 490 KB, ikisi de erken yükleniyor.
- Performans sitenin asıl sorunu değil.

**Görsel inceleme (yalnızca anasayfa, 320/390/768/1440 px)**
- Çerez bannerı mobilde ekranın yaklaşık %35–40'ını kaplıyor.
- 768 px ve masaüstünde içeriğin üstüne biniyor.
- "Enerji daha güçlü atılımlar için birikimdir.." bandı beyaz metin/açık gri zeminde neredeyse okunmuyor.
- Nav 1440 px'te bile "Daha fazlası" menüsüne taşıyor. ÜRÜNLERİMİZ ve PROJELERİMİZ orada gizli.

## Korunacak rotalar (percent-encoded, birebir)
`/`, `/hakk%C4%B1m%C4%B1zda-1`, `/s%C4%B1k-sorulan-sorular`, `/i%CC%87nsan-kaynaklar%C4%B1`, `/i%CC%87leti%C5%9Fim`, `/hizmetlerimiz`, `/end%C3%BCstriyel-ges-kurulumu`, `/arazi-tipi-ges-kurulumu`, `/solar-otopark-uygulamalar`, `/proje-dan%C4%B1%C5%9Fmanl%C4%B1%C4%9F%C4%B1`, `/hammadde-ve-%C3%BCr%C3%BCn-tedari%C4%9Fi`, `/arazi-ges-konstr%C3%BCksiyon`, `/solar-carport-sistemleri`, `/%C3%A7at%C4%B1-ges-konstr%C3%BCksiyon`, `/projeleri%CC%87mi%CC%87z-1`, `/blog-1` ve `/blog-1/f/<slug>` (7 yazı).

Blog yazı slug'ları (sitemap'ten):
- `tei%CC%87a%C5%9F-2022-eyl%C3%BCl-ay%C4%B1-kurulu-g%C3%BC%C3%A7-raporunu-yay%C4%B1nlad%C4%B1`
- `ges-tar%C4%B1m-agrivoltaic-sistemler`
- `spot-piyasada-elektrik-fiyatlar%C4%B1-03062022`
- `g%C3%BCne%C5%9F-enerjisi-hibe-destek-programlar%C4%B1`
- `solar-tar%C4%B1msal-sulama`
- `g%C4%B1da-krizi-enerji-krizi-1`
- `yenilenebilir-enerji`

İki slug'da birleşik nokta (U+0307) var (`i̇nsan`, `i̇letişim`, `projeleri̇mi̇z`). `/iletisim` ve `/projelerimiz` gibi temiz adresler 404 veriyor. Next.js'te bu adresler birebir korunmalı.

## Ölçülemeyenler (AUDIT.md'de "doğrulanmadı" diye işaretle)
- 8 genişlikte taşma, dokunma hedefi ve form ölçümleri. Sayısal veri kayboldu: ilk çalıştırma takıldı ve çıktısını yalnızca en sonda yazıyordu.
- Klavye gezinmesi, odak göstergesi ve çalışma anı kontrast taraması.
- Blog yazı gövdeleri, iç sayfaların render'ı, dropdown davranışı, Vimeo ve harita.
- Formlar bilerek gönderilmedi.

## Erişim engeli
Site bu bilgisayardan açılmıyor (`ERR_CONNECTION_TIMED_OUT`), kullanıcının telefonunda açılıyor. Otomasyon trafiği yüzünden bu IP büyük olasılıkla sınırlandı, bu kesin değil (kimin engellediği bilinmiyor, yanıtta engel mesajı yok, yalnızca zaman aşımı).

Olay dökümü:
- 1. engel: ilk ölçüm turundan sonra. Kullanıcı bunun bir güvenlik mekanizması olabileceğini düşündü.
- Bir süre sonra site yeniden açıldı (curl 200, Chromium 887 ms). Bu, engelin olmadığı anlamına gelmiyordu.
- 2. engel: düşük hızlı yeniden ölçümde (yükleme başına 4 sn bekleme, sıralı) 11 yüklemeden sonra başladı (anasayfa 8 genişlik + `/hizmetlerimiz` 3 genişlik, yaklaşık 1000 istek). Betik durdurulduktan sonra da `curl` ve TCP bağlantısı, sitenin iki IP'sine (`13.248.243.5`, `76.223.105.230`) zaman aşımına uğradı. `example.com` açıldı, yani genel internet çalışıyor.
- Tetikleyici büyük olasılıkla toplam istek hacmi, sayfa sayısı değil. Anasayfa tek yüklemede yaklaşık 118 istek yapıyor.

**Karar:** Bundan sonra veri Ultimate Web Scraper Chrome eklentisiyle toplanacak (bkz. `AGENTS.md`). Playwright/curl ile yeniden tarama yapılmayacak. Engeli proxy veya IP değiştirerek aşmak yok.

## Yapılamayanlar
İkinci turda yalnızca şu ölçümler alındı: anasayfa 8 genişlik (320, 360, 390, 430, 768, 1024, 1280, 1440), `/hizmetlerimiz` 320, 360, 390 ve 768. Sonuçlar `audit-data/responsive/results.jsonl` içinde. `AUDIT.md`'de aşağıdakiler "doğrulanmadı" diye işaretlenecek:
- **Responsive, kalan sayfalar:** `/hizmetlerimiz` 430 ve 1024–1440 px. `/i%CC%87leti%C5%9Fim`, `/projeleri%CC%87mi%CC%87z-1`, `/blog-1`, `/end%C3%BCstriyel-ges-kurulumu` için 8 genişliğin tamamı (iletişimde 320–768 arası denendi, hepsi zaman aşımı). Ekran görüntüleri (`*_top.png`, `*_full.png`) kalan sayfalar için yok.
- **Erişilebilirlik:** `a11y.js` (klavye gezinmesi, odak göstergesi, çalışma anı kontrast) hiç çalıştırılamadı.
- **Çerez bannerı:** ölçümlerde her yerde `-` çıktı (bulunamadı), oysa ilk turda anasayfada görsel olarak görülmüştü. Betikteki seçici yanlış olabilir ya da temiz oturumda banner çıkmıyor olabilir. Banner ölçülerine güvenilmemeli.
- **Blog yazı gövdeleri** (istemci tarafında yükleniyor), dropdown davranışı, Vimeo ve harita, iç sayfaların çalışma anı render'ı.
- **Formlar:** bilerek gönderilmedi.
- **Betik notu:** `audit-data/scripts/responsive.js` headless ve 4 sn beklemeli hale getirildi, özgün hali `responsive.orig.js`.

## Ham veri
- `audit-data/` (git'te yok, `.gitignore`'da `/audit-data/`): `pages/` (23 sayfa `.html`/`.txt`/`.json`), `sitemaps/`, `scripts/`, `perf/`, `responsive/` (kısmi ölçümler).
- Önceki geçici konumlar (`%TEMP%`, scratchpad) temizlenebilir.

## Önerilen sonraki adımlar
1. Site erişilebilir olunca **düşük hızda** kalan ölçümleri yap: ~6 sayfa, 8 genişlik, sıralı, aralarında bekleme.
2. `AUDIT.md`'yi 19 bölümlü formatta yaz. Sorun tablolarında ID, rota, kategori, kanıt, kullanıcı ve iş etkisi, çözüm, karmaşıklık ve P0–P3 olsun.
3. Uygulamadan önce iskeleti temizle: placeholder sayfa, `PROJECT-STATUS.md`, README ve gerçek bir `git init`.
