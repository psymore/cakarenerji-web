# Canlı siteden veri toplama (prosedür)

Kurallar `AGENTS.md`'de. Bu dosya, kullanıcıdan veri istemeden önce okunur.

## Yöntem
- Veriyi kullanıcı kendi Chrome'unda elle toplar (Ultimate Web Scraper eklentisinin Claude entegrasyonu ücretli plan ister). Ajanlar eklentiyi kurup çalıştıramaz.
- Sayfayı aç, DevTools (`F12`) → Console → `copy(document.body.innerText)` (HTML için `copy(document.documentElement.outerHTML)`), sonra bir dosyaya yapıştır.
- Ekran görüntüsü yalnızca görsel sorunlar için: viewport, tam sayfa değil, en fazla birkaç tane.

## Hedef dosyalar
- **Dosyaları sen oluştur, kullanıcıdan isteme.** Yapıştırmadan önce `audit-data/scraper/` (git-ignored) içinde `: > ad.txt` ile boş dosyaları aç. Mesajında dosya adlarını ve sayfa URL'lerini listele.
- Ad: ASCII, küçük harf, tire, rotaya göre (`cati-ges.txt`, `iletisim.txt`, `blog-teias.txt`). Kullanıcının kendi kopyasında Türkçe harf olabilir: önce `ls` yap, varsa yeniden kullan, kopya açma.
- Ekran görüntüleri önceden açılamaz, beklenen dosya adını ver.
- Her seferinde tek adım iste. Sonra dosyaları oku, boş olmadıklarını doğrula (kaydedilmemiş IDE sekmesi 0 bayt bırakır).

## Mevcut veri
`audit-data/` (git-ignored, 22 MB): `pages/`, `perf/`, `responsive/`, `sitemaps/`, `scraper/`, `scripts/`. Yeni bir şey istemeden önce buraya bak. Hâlâ ölçülmeyenler: `docs/audit/01-ozet.md` ("Doğrulanmadı") ve `OPEN-QUESTIONS.md` bölüm B.

## Neden otomatik tarama yok
Otomatik çalıştırmalar (birkaç dakikada ~1000 istek, ana sayfa yükleme başına ~118 istek) bu makinenin IP'sini iki kez sınırlandırdı (`ERR_CONNECTION_TIMED_OUT`, sitenin iki IP'sine `13.248.243.5` ve `76.223.105.230` TCP 443 zaman aşımı). `example.com` açılıyordu, kullanıcının telefonunda site açılıyordu. Tetikleyici büyük olasılıkla toplam istek hacmi, ama kesin değil. Playwright, curl ya da fetch ile yeniden tarama yapılmaz, engel proxy ya da IP değiştirerek aşılmaz.
