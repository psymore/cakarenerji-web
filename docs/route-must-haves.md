# Route must-haves

Blocks that must exist on each route of the redesign. Source: the live site as recorded in `audit-data/pages/` (first HTML) and `audit-data/scraper/` (runtime). Text is kept verbatim; the redesign changes look, order and layout only (see `README.md` Goal). Status: **built** (V0 frontend, all 23 routes return 200 on localhost with the live site's exact slugs).

**A block is a must if removing it changes what the page is or does:** the page's own heading and body content, working functionality (forms and their fields, CTAs, links, downloads, embeds), contact and identity details, and navigation targets. **Not musts:** stock photos, exact layout, block order, styling, and the live site's nav repeated three times (desktop, mobile, sticky).

Issue IDs refer to `AUDIT.md` / `docs/audit/`. Owner questions (Q-xx) are in `OPEN-QUESTIONS.md`.

## Global (every route)

- **Header:** brand, nav with every link: Ana Sayfa; KURUMSAL (Hakkımızda, Sık Sorulan Sorular, İnsan Kaynakları, İletişim); HİZMETLERİMİZ (Hizmetlerimiz, Endüstriyel GES Kurulumu, Arazi Tipi GES Kurulumu, Solar Otopark Uygulamaları, Proje Danışmanlığı, Hammadde ve Ürün Tedariği); ÜRÜNLERİMİZ (Arazi GES Konstrüksiyon, Solar Carport Sistemleri, Çatı GES Konstrüksiyon); PROJELERİMİZ; Blog. Live hides the last three groups under "MORE" (NAV-01); the links are the must, not the hiding.
- **Footer:** the three product links, company name, address, phone, "Telif Hakkı © … Çakar Enerji A.Ş - Tüm Hakları Saklıdır."
- **Links kept from the live site:** WhatsApp `wa.me/903129990645`, `tel:`, `mailto:info@cakarenerji.com`, Facebook, Instagram, LinkedIn (AUDIT §3).
- **Cookie notice:** the live site has one (single button). Presence is kept, wording and behaviour wait on Q-23 (LGL-02).
- **Routes:** slugs exactly as in AUDIT §3, including U+0307 slugs.
- **Page `<title>`:** as on live (SEO-02 lists inconsistencies, not changed by the redesign), except the typo fix below.

## Per route

| Route | Must-have blocks |
|---|---|
| `/` | Hero: brand, "Solar Solutions", "İletişim Kurun" + phone. HAKKIMIZDA teaser (slogan "Enerjiye Dair Her Şey !" + paragraph + "Ayrıntıları öğrenin" → `/hakkımızda-1`). "Çakar Enerji A.Ş." services paragraph + "Daha fazla bilgi edinin" → `/hakkımızda-1`. Newsletter: "Çakar Enerji Bültenine Abone Olun" + copy + E-posta field + Kaydol. Slogan band "Enerji daha güçlü atılımlar için birikimdir..". "FİYAT AL !" / "FİYAT AVANTAJLARI" / "Tedarikçimiz olmak için teklif alın." + "teklif alın" → `/projeleri̇mi̇z-1`. "Bize Ulaşın" block: "Daha da iyisi, gelin, yüz yüze görüşelim!" text, WhatsApp button, address, e-mail, phone, working hours. Google Maps and Vimeo video (runtime only). |
| `/hakkımızda-1` | h1 Hakkımızda. Company history (1992…), services paragraphs, quality sentence. MİSYONUMUZ & VİZYONUMUZ. KALİTE VE SERTİFİKASYON with the full quality-policy list. İNSAN KAYNAKLARI POLİTİKAMIZ. ANAHTAR TESLİM SOLAR SİSTEMLER: Mekanik Montaj, Elektrik Montaj, Ürün Seçimi, Uzman Mühendislerle Bilimsel Çözümler, Yatırım Fizibilitesi, each with its text. |
| `/sık-sorulan-sorular` | h1, intro line with info@cakarenerji.com, all 6 questions with their full answers. |
| `/i̇nsan-kaynakları` | KARİYER text (4 paragraphs). "Başvuru Formu (doc) İndirme" download. "Bizimle Çalışmak İster Misiniz?" / "Ekibimize Katılın" + text. "Şimdi Başvurun" form: İsim, Telefon, E-posta*, Mesaj, Özgeçmiş Ekle (file upload, "Ekler (n)"), "Başvuruyu Gönder". |
| `/i̇letişim` | h1 "Bize Ulaşın". Form "Bize mesaj atın!": Ad, E-posta*, Mesaj, "Gönder". Visit text, WhatsApp button, company name, address, e-mail, phone, "Çalışma Saatleri". |
| `/hizmetlerimiz` | h1 and all 12 service blocks with their text. |
| `/endüstriyel-ges-kurulumu` | h1 "Endüstriyel Çatı Güneş Enerji Santralleri", GENEL, AVANTAJLARI (whole list), UYGULAMA ALANLARI (whole list), "Ayrıntıları öğrenin". |
| `/arazi-tipi-ges-kurulumu` | h1 "Arazi Tipi Güneş Enerji Santralleri", GENEL, AVANTAJLARI, UYGULAMA ALANLARI, "Ayrıntıları öğrenin". |
| `/solar-otopark-uygulamalar` | h1 "Solar Otopark Uygulamaları", GENEL, AVANTAJLARI, UYGULAMA ALANLARI, "Ayrıntıları öğrenin". |
| `/proje-danışmanlığı` | h1 "Proje, Mühendislik ve Yatırım Danışmanlığı" and its four lists: Proje, Mühendislik, Saha Geliştirme, Proje Uygulama EPC. "Ayrıntıları öğrenin". |
| `/hammadde-ve-ürün-tedariği` | h1 "Ürün Tedariği ve Planlama", "Ürün Tedariği" text, "Ayrıntıları öğrenin". |
| `/arazi-ges-konstrüksiyon` | Heading "Arazi Tipi Güneş Enerji Santrali Taşıyıcı Sistemleri" only. |
| `/solar-carport-sistemleri` | Heading "Solar Carport Sistemleri" only. |
| `/çatı-ges-konstrüksiyon` | "Deneyimsel Çözümler Yakında...", "Zaman daraldığı için hazırlıkları elden bırakmıyoruz. Kaçırmayın!", countdown (Gün/Saat/Dakika/Saniye). |
| `/projeleri̇mi̇z-1` | Heading "TEKLİF AL", form "Bize mesaj atın!": Şirket Adı, E-posta*, Mesaj, "Gönder". Visit text, WhatsApp button, company name, address, e-mail, phone. No projects (as on live). |
| `/blog-1` | Heading "Çakar Enerji'den Faydalı İçerikler". 7 post entries: date, title, excerpt, "Continue Reading" link. Then the live template's EPC block. |
| `/blog-1/f/<slug>` (7) | "Çakar Enerji'den Faydalı İçerikler", "All Posts" link, post title, date, full body verbatim, "Recent Posts" (3 newest other posts, short dates), then the live template's EPC block. |

## Blocks not reproduced or not verifiable

Musts on the live site whose content is missing or unknown. They are **not** invented. What V0 does instead is stated.

| Block | Route | Status in V0 |
|---|---|---|
| Arazi GES / Solar Carport content | 2 stub routes | Heading only, as on live (BRK-01, Q-06). |
| Countdown target | `/çatı-ges-konstrüksiyon` | Approximated: capture said 131 d 02:44:26 at 2026-09-21 16:15:53 +03:00, so target = 2027-01-30 19:00:19 +03:00. Real date and purpose unknown (BRK-02, Q-07, U-03). |
| Map location | `/` | Embeds a Google Map searched by the address text (street without the disputed number); the live embed's exact place is not recorded. Loaded on click. |
| Vimeo video | `/` | URL is known (`player.vimeo.com/video/738877978`, from `audit-data/pages/00_home.html`). What it shows is unknown (Q-15). Loaded on click. Its position on the live page is unknown (placed beside the HAKKIMIZDA teaser). |
| "Başvuru Formu (doc)" | `/i̇nsan-kaynakları` | Linked to the live site's CDN URL (`img1.wsimg.com/blobby/...`). The file is not in the repo; needs to be self-hosted (TD-01). |
| Form backend | 4 forms | Submitting opens the visitor's mail client addressed to info@cakarenerji.com (stand-in, CNV-02, Q-10). File uploads cannot be attached this way. |
| reCAPTCHA note | forms | Not shown: reCAPTCHA is not wired, so the sentence would be false. |
| "Share this post:" | posts | Not reproduced: which share buttons existed is unknown. |
| Logo | all | Header: typographic stand-in (the live logo is light on transparent and would vanish on the light header). Footer: the live logo image, linked from the live CDN. Originals not available (TD-01, Q-14). |
| 65×65 fixed element | all | Not reproduced, unidentified (RSP-05, Q-22). |

## Contradictions between sources (not resolved by the source; V0 default in brackets)

| Item | Sources disagree | V0 default |
|---|---|---|
| Address number | Footer and home `No:54/73`, İletişim and Projelerimiz `No:73` | One value, `lib/site.ts`: `No:54/73, 06374` (NAP-01, Q-01, Q-02). |
| Working hours | First-HTML home and runtime İletişim both say 08:00 – 19:00. AUDIT NAP-02 says home is 08:30 – 18:00, but that string is in none of the saved files. | `08:00 – 19:00` (NAP-02, Q-03). "Bugün açık" kept as text; weekend hours unknown. |
| Phone display | `0 (312) 999 06 45`, `+90 (312 ) 999 06 45` (hero), `+09 (312) 999 06 45` (SSS). `tel:` hrefs: `0 (312) 999 06 45` (with spaces), `+903129990645`, `03129990645` | Display kept as on live per place; all `tel:` links use `tel:+903129990645`. The FAQ's `+09` is kept verbatim (wrong facts are not typos, Q-04). |
| Company name | `Çakar Enerji A.Ş`, `Çakar Enerji A.Ş.`, `Çakar Enerji` depending on the block | Each block keeps its live wording (NAP-04, Q-05). |
| Copyright year | First HTML 2023, runtime 2026 | 2026 (constant in `lib/site.ts`). |
| Slug count with U+0307 | AUDIT §3 and TD-02 say three; four slugs carry it (İnsan Kaynakları, İletişim, Projelerimiz, and the TEİAŞ post) | All four work (U-01 answered, see below). |
| Cookie text language | AUDIT says English only; the first HTML has the Turkish text, JS swaps in English at runtime | Turkish first-HTML text used. |
| Directions button | First HTML: "Bilgi edinin"; runtime: "GET DIRECTIONS" | "Bilgi edinin" kept (Turkish), linked to Google Maps directions. |
| Video URL | AUDIT §2 and Q-15 say it is not recorded | It is recorded (see above). |

## Read incompletely (structure or boundaries lost in the saved text)

- **Home runtime:** there is no runtime capture of the home page (`audit-data/scraper/` has none). Hero imagery, the position of the video and map, and where the social icons sit are unknown. V0 follows the first-HTML text order.
- **FAQ lists:** item boundaries were lost. Q2's list is split as Plan Kote / Aplikasyon Krokisi / 1/5000 1/25000 Haritalar / Tapu / İmar Planı Onayı by judgement.
- **Hakkımızda:** the quality policy is one run-on sentence in the saved text; rendered as a list of 9 items. The five "Anahtar teslim" headings were duplicated by the live carousel; headings were paired with their texts by meaning.
- **Landing pages:** lists were rendered from comma or sentence boundaries in the saved text; paragraph boundaries inside GENEL are unknown (each is one paragraph).
- **Blog bodies:** not proofread (BLG-04). Only two clear typos were fixed. Structure (headings, bullets, lists) is inferred from the saved text.
- **Forms:** validation, success and error states are unknown (CNV-03). Only field names come from the saved form data.
- **Not measured:** keyboard behaviour of the live dropdowns, live focus states (A11Y-09). The V0 header is keyboard operable (buttons with `aria-expanded`), which is new behaviour, not a copy.

## Conditional (on live, but the goal says no removals)

Removing these is a scope decision, not a redesign choice. They stayed.

- Blog template block "Hesabınızı Bizimle İlişkilendirin" / "EPC HİZMETLERİMİZ" on `/blog-1` and all 7 posts (BLG-02). Its typos are fixed and marked; its unverified claims (IDD-06) are untouched.
- English labels ("Continue Reading", "All Posts", "Recent Posts"): translating changes text (YAZ-06). Nav "MORE" is gone because all links are shown.
- Claims flagged in IDD-01…IDD-07 are untouched.
- "Ayrıntıları öğrenin" buttons keep the live targets (`/hizmetlerimiz` for Endüstriyel, `/` for the other four, UX-01, Q-21).

## Typo fixes: where they are shown

Pages show the corrected text with **no marking**. Every fix is recorded once in the content files as `{ t: corrected, fixed: "before → after" }`, and the gallery route **`/duzeltmeler`** collects them automatically (`lib/typo-fixes.ts`) and shows the live site's wrong text with the faded red box-shadow border (`.typo-fixed`, defined only in `app/duzeltmeler/gallery.css`) next to the corrected text. The gallery is a review aid, not one of the live site's routes: nothing on the site links to it, it is `noindex`, and it also lists the errors left as they are. Only spelling is changed, never meaning. Wrong facts, numbers and claims are not typos (Q-04, Q-08, Q-19).

Suspected typos **not** touched (ambiguous, your call): `birikimdir..` and the unmatched quote in the slogan; " ?" with a space before the question mark (FAQ, blog); "%50si" (hibe post); "yapılabiliyoruz" / "sunulabiliyoruz" (Hizmetlerimiz, should be "-yoruz" forms); "Şebeke Bağlantılı (Off-Grid)" (a fact, YAZ-01); lowercase vs capitalised document lists between FAQ Q1 and Q4.

## Change log (moved / filled / changed)

Every move, fill, translation, merge or removal of a must-have block goes here. Nothing was **moved to another route** and no empty page was **filled with new content**.

**Second design at `/ui-2`:** every route above is also served under `/ui-2/…` (same slugs, same content, same must-have blocks, another visual style: rounded, floating panels). No block was added, moved, filled or removed. `/ui-2` pages are `noindex`. Internal links stay inside the design being browsed.

**Dark theme (owner-approved addition):** the header on every route gets one icon button that switches between the light palette and a dark palette (both designs). The first visit follows the OS setting, the choice is saved in the browser. No must-have block was added, moved, filled or removed and no text changed; only the button and its label ("Koyu temaya geç" / "Açık temaya geç") are new.

**Theme picker (owner-approved addition, replaces the dark-theme toggle):** the header button on every route now opens a menu of 8 themes (the original light and dark plus six palettes from the supplied palette sheet, three light and three dark), both designs. Choice saved in the browser, first visit follows the OS setting. No must-have block was added, moved, filled or removed and no text changed; only the button ("Tema seç") and the menu labels are new. Details: `docs/themes.md`.

**Typo fixes (shown in the gallery at `/duzeltmeler`)**

| Route | Live text | Fixed text | Issue |
|---|---|---|---|
| `/proje-danışmanlığı` | Similasyonu | Simülasyonu | YAZ-02 |
| `/proje-danışmanlığı` | Kordinatlı | Koordinatlı | YAZ-02 |
| `/proje-danışmanlığı` | ÇatI Yük ve Dayanma Testleri | Çatı Yük ve Dayanma Testleri | new, not in AUDIT |
| `/solar-otopark-uygulamalar` | Alısveriş | Alışveriş | YAZ-03 |
| `/` | almak almak | almak | YAZ-04 |
| `/` (hero) | +90 (312 ) 999 06 45 | +90 (312) 999 06 45 | new (stray space) |
| nav menu | Solar Otopark Uygulamalar | Solar Otopark Uygulamaları | NAV-03 |
| `<title>` of `/solar-otopark-uygulamalar` | …Uygulamalar… | …Uygulamaları… | NAV-03 (not visible) |
| `/i̇nsan-kaynakları` | ulaşacağına inan Çakar Enerji | ulaşacağına inanan Çakar Enerji | new |
| `/hakkımızda-1` | bir biri ile | birbiri ile | new |
| `/hizmetlerimiz` | paylaşıyoruz.. | paylaşıyoruz. | new |
| blog template block (`/blog-1`, 7 posts) | HİZİMETLERİMİZ (×2) | HİZMETLERİMİZ | YAZ-05 |
| blog template block | tesfiye | tesviye | YAZ-05 |
| blog template block | sarj | şarj | YAZ-05 |
| blog template block | saha kurulumlarını göre | saha kurulumlarına göre | new |
| `/blog-1/f/solar-tarımsal-sulama` | Yönetemi | Yöntemi | new |
| `/blog-1/f/yenilenebilir-enerji` | olur.Dünyada | olur. Dünyada | new (missing space) |

**Other changes to live content (approval needed)**

| Route | Block | Change | Why |
|---|---|---|---|
| all | Contact details | One address / hours / phone source (`lib/site.ts`) instead of per-page values | Sources conflict (table above). Easy to switch. |
| all | Header | "MORE" menu dropped, all links shown; dropdowns are keyboard-operable buttons | NAV-01, NAV-02, NAV-04. Layout, not content. |
| `/duzeltmeler` | New route | Typo gallery (review aid), not linked from the site, `noindex` | Requested: show the live site's errors and what was fixed. |
| all | Footer | "Destekli GoDaddy Airo" badge not reproduced; social icons and WhatsApp placed in the footer (live position unknown) | Platform badge of the site being replaced. |
| all | Logo | Header: typographic wordmark replaces the logo image. Footer: the live logo image (hotlinked) | The live logo is light on transparent, so it only works on the dark footer. |
| `/` | Hero photo | Live hero photo (`pexels-tom-fisk`, mobile `9D437085…`) behind the hero, under a panel-colour overlay, with the light-grid effect kept on top | Live home hero is that photo (`audit-data/pages/00_home.html`). Was missing in V0. |
| `/` | Logo strip | Five logos (Huawei, CW Enerji, Tommatech, Fimer, one unnamed) added after the company text | They are on the live home page and were missing in V0. Live position unknown (U-14); alt text from file names, fifth empty (Q-26). |
| `/hakkımızda-1`, `/endüstriyel-…`, `/arazi-tipi-…`, `/solar-otopark-…`, `/proje-danışmanlığı`, `/hammadde-…`, `/çatı-ges-konstrüksiyon` | Hero photo | The live page's image behind the page hero, under a panel-colour overlay | Each live page has one image before its h1. Was missing in V0. |
| `/hakkımızda-1` | "Anahtar Teslim Solar Sistemler" cards | A photo on each of the 5 cards, matched in the live card order | Live cards have photos. Was missing in V0. |
| `/blog-1`, 7 posts | EPC block | Photo on the "Saha Tipi" group (`solar-panels…`) and on the "Otopark Üzeri" group (`29052017…`, live alt kept) | The live template shows these images; the exact spot of the first is not recorded (U-24). |
| `/`, 7 posts | Social preview | `og:image` set to the live site's image for the page (posts: their own photo, listed in `lib/images.ts`) | Live sets these in its `<head>`. |
| all | Images | Linked straight from the live CDN (`img1.wsimg.com`), not stored in the repo | They break if the owner changes the live site. Move to `public/` before launch (Q-27). |
| forms | reCAPTCHA note | Not shown | reCAPTCHA is not wired. |
| forms | Submit | Opens mail client (mailto) | Backend unknown. |
| forms | Mesaj field | Visible label "Mesaj" (live: placeholder only) | A11Y-08. |
| posts | "Share this post:" | Not reproduced | Buttons unknown. |
| `/hakkımızda-1` | Quality policy | Rendered as a list | Run-on sentence in saved text. |
| `/` | Video, map | Click-to-load facades | PRF-01. |
| unknown routes | 404 page | New minimal page "Sayfa bulunamadı" + "Ana Sayfa" | Live shows the GoDaddy default (UX-03). New copy. |
| `/çatı-ges-konstrüksiyon` | Countdown | Live ticking to an approximated target | See above. |
| hr | Download | Points at the live CDN file | See above. |
| all routes | Skip link | Added "İçeriğe geç", visible only on keyboard focus | A11y. New UI string, no page content changed. |
| all routes | Heading levels | Contact card and HR `h4` → `h3`; mobile menu group labels `h2` → `p`; cookie title `h4` → `strong`. Look unchanged | Heading order (axe). |
| all routes | Logo `aria-label` | "ÇAKAR ENERJİ, Ana Sayfa" (was "Çakar Enerji A.Ş, Ana Sayfa") | Label-in-name. |
| `/` | Hero light | Same look, moved by transform instead of CSS variables | Performance, see `docs/ui-optimization/`. |
