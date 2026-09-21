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

## Bölüm haritası

Belge 19 bölümlü, `docs/audit/` altında konuya göre 7 dosyaya bölünmüştür. Bölüm numaraları ve ID'ler değişmedi, "bkz. bölüm N" atıfları aşağıdaki dosyaya gider. İhtiyacın olan dosyayı oku, hepsini okuma. **Kaynak `docs/audit/`'tir**, bu dosya yalnızca giriş ve haritadır (bölüm içeriği burada tekrarlanmaz). Sorun ekleme, düzeltme ve ID güncellemeleri `docs/audit/` altında yapılır. Önceki tek dosyalı sürüm git geçmişinde (`a992b05`).

| Dosya | Bölümler | ID önekleri |
|---|---|---|
| [01-ozet.md](docs/audit/01-ozet.md) | 1 Yönetici özeti, denetimin güvenilirliği, doğrulanmayanlar | |
| [02-mimari-ve-sayfalar.md](docs/audit/02-mimari-ve-sayfalar.md) | 2 Teknoloji/mimari, 3 Sayfa envanteri (23 rota, birebir slug'lar) | |
| [03-navigasyon-ux-responsive.md](docs/audit/03-navigasyon-ux-responsive.md) | 4 Navigasyon/IA, 5 UX, 6 Mobil/responsive | NAV, UX, RSP |
| [04-erisilebilirlik-seo-performans.md](docs/audit/04-erisilebilirlik-seo-performans.md) | 7 Erişilebilirlik, 8 SEO, 9 Performans | A11Y, SEO, PRF |
| [05-icerik.md](docs/audit/05-icerik.md) | 10 İçerik: yazım, doğrulanacak iddialar, NAP, blog | YAZ, IDD, NAP, BLG |
| [06-donusum-gorsel-borc-eksik.md](docs/audit/06-donusum-gorsel-borc-eksik.md) | 11 Dönüşüm/formlar, 12 Görsel, 13 Teknik borç, 14 Eksik sayfalar | CNV, VIS, TD, BRK |
| [07-plan-ve-riskler.md](docs/audit/07-plan-ve-riskler.md) | 15 Quick wins, 16 Orta vade, 17 Büyük işler ve hukuki gözlemler, 18 Riskler, 19 Uygulama sırası (Faz 0–4) | LGL, R |

Açık sorular: [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md).
