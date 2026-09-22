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
| `/arazi-ges-konstrüksiyon` | Heading "Arazi Tipi Güneş Enerji Santrali Taşıyıcı Sistemleri" and a photo slider of 9 pictures (live page checked 2026-09-22). |
| `/solar-carport-sistemleri` | Heading "Solar Carport Sistemleri" and a photo slider of 9 pictures (live page checked 2026-09-22; the saved 2023 HTML had the heading only). |
| `/çatı-ges-konstrüksiyon` | "Deneyimsel Çözümler Yakında...", "Zaman daraldığı için hazırlıkları elden bırakmıyoruz. Kaçırmayın!", countdown (Gün/Saat/Dakika/Saniye). |
| `/projeleri̇mi̇z-1` | Heading "TEKLİF AL", form "Bize mesaj atın!": Şirket Adı, E-posta*, Mesaj, "Gönder". Visit text, WhatsApp button, company name, address, e-mail, phone. No projects (as on live). |
| `/blog-1` | Heading "Çakar Enerji'den Faydalı İçerikler". 7 post entries: date, title, excerpt, "Continue Reading" link. Then the live template's EPC block. |
| `/blog-1/f/<slug>` (7) | "Çakar Enerji'den Faydalı İçerikler", "All Posts" link, post title, date, full body verbatim, "Recent Posts" (3 newest other posts, short dates), then the live template's EPC block. |

## Blocks not reproduced or not verifiable

Musts on the live site whose content is missing or unknown. They are **not** invented. What V0 does instead is stated.

| Block | Route | Status in V0 |
|---|---|---|
| Arazi GES / Solar Carport content | 2 routes | Heading and photo slider, no other text, as on the live pages in 2026 (BRK-01, Q-06). Slider layout is a guess (U-26). |
| Countdown target | `/çatı-ges-konstrüksiyon` | Approximated: capture said 131 d 02:44:26 at 2026-09-21 16:15:53 +03:00, so target = 2027-01-30 19:00:19 +03:00. Real date and purpose unknown (BRK-02, Q-07, U-03). |
| Map location | `/` | Embeds a Google Map searched by the address text (street without the disputed number); the live embed's exact place is not recorded. Loaded on click. |
| Vimeo video | `/` | URL is known (`player.vimeo.com/video/738877978`, from `audit-data/pages/00_home.html`). What it shows is unknown (Q-15). Embedded lazily (poster visible without a click). Its position on the live page is unknown (placed beside the HAKKIMIZDA teaser). |
| "Başvuru Formu (doc)" | `/i̇nsan-kaynakları` | Linked to the live site's CDN URL (`img1.wsimg.com/blobby/...`). The file is not in the repo; needs to be self-hosted (TD-01). |
| Form backend | 4 forms | Submitting opens the visitor's mail client addressed to info@cakarenerji.com (stand-in, CNV-02, Q-10). File uploads cannot be attached this way. |
| reCAPTCHA note | forms | Not shown: reCAPTCHA is not wired, so the sentence would be false. |
| "Share this post:" | posts | Not reproduced: which share buttons existed is unknown. |
| Logo | all | Header and footer: the live logo image, linked from the live CDN. On the light themes the header logo sits on a dark chip because the logo is light on transparent. The typographic stand-in is no longer used. Originals not available (TD-01, Q-14). |
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

Pages show the corrected text with **no marking**. Every fix is recorded once in the content files as `{ t: corrected, fixed: "before → after" }`, and the gallery route **`/duzeltmeler`** collects them automatically (`lib/typo-fixes.ts`) and shows the live site's wrong text with the faded red box-shadow border (`.typo-fixed`, defined only in `app/duzeltmeler/gallery.css`) next to the corrected text. The gallery is a review aid, not one of the live site's routes: the only link is the gallery icon in the header, it is `noindex`, and it also lists the errors left as they are. Only spelling is changed, never meaning. Wrong facts, numbers and claims are not typos (Q-04, Q-08, Q-19).

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
| `/duzeltmeler` | New route | Typo gallery (review aid), `noindex`. Originally unlinked; now opened from the header settings menu (section "Yazım düzeltmeleri") | Requested: show the live site's errors and what was fixed. |
| all | Footer | "Destekli GoDaddy Airo" badge not reproduced; social icons and WhatsApp placed in the footer (live position unknown) | Platform badge of the site being replaced. |
| all | Logo | Header: typographic wordmark replaces the logo image. Footer: the live logo image (hotlinked) | The live logo is light on transparent, so it only works on the dark footer. |
| `/` | Hero photo | Live hero photo (`pexels-tom-fisk`, all widths; the `9D437085…` file is a hidden second header media on the live page and is no longer used) behind the hero, under a panel-colour overlay, with the light-grid effect kept on top | Live home hero is that photo (`audit-data/pages/00_home.html`). Was missing in V0. |
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
| `/` | Video, map | Both embeds are in the page and load lazily when they scroll near (Vimeo poster and Google map visible without a click) | Requested: they looked empty. Undoes the click-to-load default of PRF-01 (Maps ~600 KB and Vimeo ~490 KB now load on scroll). |
| unknown routes | 404 page | New minimal page "Sayfa bulunamadı" + "Ana Sayfa" | Live shows the GoDaddy default (UX-03). New copy. |
| `/çatı-ges-konstrüksiyon` | Countdown | Live ticking to an approximated target | See above. |
| hr | Download | Points at the live CDN file | See above. |
| all routes | Skip link | Added "İçeriğe geç", visible only on keyboard focus | A11y. New UI string, no page content changed. |
| all routes | Heading levels | Contact card and HR `h4` → `h3`; mobile menu group labels `h2` → `p`; cookie title `h4` → `strong`. Look unchanged | Heading order (axe). |
| all routes | Logo `aria-label` | "ÇAKAR ENERJİ, Ana Sayfa" (was "Çakar Enerji A.Ş, Ana Sayfa") | Label-in-name. |
| `/` | Hero light | Glow only (the lit cell grid is removed), moved by transform; position eased in one rAF loop, touch driven by touchmove so it glides on phones | Performance, see `docs/ui-optimization/`. |
| all routes | Design switch | Section "Tasarım" of the header settings menu: "Ana tasarım" / "İkinci tasarım (UI 2)", keeps the current page. Replaces the separate "1 / 2" switch | Requested. New UI control, no page content changed. |
| all routes | Gallery link | Section "Yazım düzeltmeleri" of the header settings menu, link "Hata galerisi" to `/duzeltmeler` (`/ui-2/duzeltmeler` inside the second design). Replaces the separate gallery icon | Requested. Reverses the earlier "unlinked" default (D-07). |
| `/ui-2/duzeltmeler` | New route | The typo gallery in the second design (re-export of the classic page) | Keeps the visitor in the design being browsed. |
| all routes | Top menu (desktop) | Groups open on mouse hover and close when the mouse leaves; a click no longer pins them open. Touch and keyboard still toggle. Mobile menu unchanged | Requested fix. |
| all routes | Header logo | The live logo image replaces the typographic wordmark in the header (dark chip on light themes) | Requested. Same image as the footer. |
| all routes | WhatsApp icon | Standard WhatsApp glyph, centred, replaces the hand-drawn one (footer and contact card) | Requested (icon looked off-centre). |
| all routes | Active menu link | The current page is marked in the menu also when the URL ends with `/` (GitHub Pages) | Bug fix found on the deploy. |
| all routes | Settings menu | The palette button became a settings button (sliders icon). One popover with three titled sections: Tema (8 themes), Tasarım (main / UI 2), Yazım düzeltmeleri (gallery). Same on mobile, so the mobile menu no longer has extra tools | Requested. No page content changed. |
| `/` | Hero photo, small screens | Removed the `9D437085…` image shown at 450 px and below; the hero uses `pexels-tom-fisk` at every width, as the live CSS does | Requested (wrong first image on mobile). Unverified against the live page by eye, see `docs/images.md`. |
| `/duzeltmeler` | Card labels | Each card shows a short plain-language mistake name ("Yazım hatası", "Parantez içinde fazladan boşluk", …) instead of the internal ids (YAZ-02 …); short intro line above "Olduğu gibi bırakılanlar"; those cards got shorter, clearer texts | Requested. Review page only. |
| `/` | Hero grid | The cell grid (dim and lit) behind the hero title is removed; the photo is shown as it is in the upper part, the panel colour only fades in at the bottom behind the text | Requested. Decorative only, no content. |
| `/` | Slogan band | "Enerji daha güçlü atılımlar için birikimdir.." now sits on its live photo (`9D437085…`, lit bulb with energy icons) under a panel-colour veil, white text, as in the live mobile screenshot | Requested (looks like the live site). Was a plain gold band. |
| `/` | Hero photo | Still `pexels-tom-fisk`, the green field. The live mobile hero shows a sunset over a hill with panels; that file is not in the saved HTML, so it could not be used yet | Waiting for the file name (U-25). The field is a lower band on the live page. |
| `/` | Partner logos | The five logos (Huawei, CW Enerji, Tommatech, Fimer, the fifth) are a carousel: 4 in view on desktop, 3 / 2.4 / 1.6 on narrower screens, turns by itself every 3.4 s, endless loop, swipe or arrow buttons. Stops while the pointer, focus or a finger is on it, when off screen or the tab is hidden, and never turns with reduced motion. Two arrow buttons (aria-labels "Önceki logolar" / "Sonraki logolar") and a region label "İş ortakları" are new UI text; the list is rendered three times for the loop (extra copies are `aria-hidden`) | Requested. Logos, order and alt texts unchanged. |
| `/` | Photo strip | A wide photo strip (the green field) sits between the hero and Hakkımızda, as on the live page. Decorative (`aria-hidden`), no text. The live strip also carries a second "İLETİŞİM KURUN" button; not added (the hero already has it) | Requested. Until the sunset hero photo is known (U-25) the hero uses the same field photo, so the two show the same picture cropped differently. |
| all routes | Header on narrow phones | The logo shrinks instead of pushing the buttons off the screen (checked 320 / 360 / 390 px, no horizontal scroll); on phones the settings panel spans the header width (it used to hang off the left edge below about 370 px); buttons 42 px below 400 px | Requested fix. Same in UI 2. |
| `/arazi-ges-konstrüksiyon` | Photo slider | Added the live page's 9 pictures (`1.jpg` … `9.jpg`) as a self-turning, swipeable slider under the heading (same component as the partner logos, arrows labelled "Önceki fotoğraf" / "Sonraki fotoğraf", region "Fotoğraflar"). Order follows the picture list from the live page; the pictures have no alt text on live and none here | Requested. Was heading only, from the 2023 saved HTML. The list held 9 files, the owner's phone screenshots showed about 6 in the loop, so a few may belong to another breakpoint (U-26). |
| `/solar-carport-sistemleri` | Photo slider | Added the live page's 9 `pexels-kindelmedia-…` pictures as the same slider, whole pictures shown (one is portrait) | Requested. Layout on live (slider or grid) not seen (U-26). |
| `/` | Partner carousel | Same look, now built on the shared `LoopCarousel` component | Refactor, no visible change. |
| `/` | Logo strip / partner carousel | REMOVED: the five logos (Huawei, CW Enerji, Tommatech, Fimer, `indir.png`) and their carousel are gone from the home page. They were in the 2023 saved HTML only; the owner checked the live home page on 2026-09-22 and they are not there. Rows "Logo strip" and "Partner logos" above are obsolete | Requested. Closes Q-26 (nothing to publish). `LoopCarousel` stays, the two photo sliders use it. |
| `/arazi-ges-konstrüksiyon`, `/solar-carport-sistemleri` | Slider look | The two photo sliders show the picture in front at full size with the neighbours peeking (smaller, dimmer) and the pictures drifting against their frames while scrolling (CSS scroll-driven animations; browsers without support show plain slides, none with reduced motion). Under the slider: arrows and one dot per picture (buttons named "Fotoğraf 1" …); the active dot fills over 4.5 s and that fill is the timer for the next picture, so it pauses under the pointer, on focus, on touch, off screen or in a hidden tab. Full width on phones | Requested (livelier). No content change; arrows and dots are new UI on pages that did not have a slider before. |
| `/` | Hero photo | The hero photo is now the live first image (sunset over hills with a panel array, `isteam/getty/2155735205`, found in the owner's page dump). The green field (`pexels-tom-fisk`) stays only in the photo strip under the hero, as on the live page. Rows above saying the hero still uses the green field are obsolete | Requested. Closes U-25. |
| `/arazi-ges-konstrüksiyon`, `/solar-carport-sistemleri` | Enlarge button | Every slider photo has a round enlarge button top right. It opens the picture full screen (native dialog: Esc, arrows, previous/next, counter). The slider stands still while it is open | Requested. New UI on the sliders; no content added. The hero photo, the photo strip and card photos are not galleries and have no button. |
| `/arazi-ges-konstrüksiyon`, `/solar-carport-sistemleri` | Stop / restart button | A button next to the arrows stops the automatic turning and starts it again (hidden with reduced motion, where nothing turns by itself). Only keyboard focus holds the slider now, so it runs again after a mouse click on the button | Requested (accessibility: moving content over 5 s needs a stop control). |
| `/arazi-ges-konstrüksiyon`, `/solar-carport-sistemleri` | Slider size | Pictures are bigger: front picture 80% of the frame on desktop (was 72%), 88% on phones (was 82%), frame up to 1400 px wide (was 1200), height cap 84% of the screen. On phones the wide Arazi GES pictures are shown 3:2 (cropped; the enlarge button shows them whole) | Requested ("pictures a bit small"). |
| all pages | Link to the current page | A link to the page you are already on (e.g. "Arazi GES Konstrüksiyon" in the footer) scrolls back to the top; before, nothing happened | Requested. Bug fix in the shared `Link`. |
| `/` | Photo strip moved | The photo strip (green field with panel rows) moved from directly under the hero to under the "Hakkımızda" block (after its text and video), so two similar aerial photos no longer sit back to back. Same photo, same block, only its place changed; the earlier "Photo strip under the hero" row describes the old place | Requested (UX advice). |
| `/` | Hero photo on phones | On phones the hero photo is cropped to a narrow window aimed at the sun (right side of the picture, `object-position: 80% 50%`), and the browser is now asked for the width the photo is really drawn at (`sizes="max(100vw, 130svh)"`), so it is sharper on high-density screens | Requested (UX advice). No content change. |
| `/` | Photo strip merged into "Çakar Enerji A.Ş." | The separate photo strip (green field with panel rows) is gone as its own block: the same photo is now the background of the "Çakar Enerji A.Ş." text block (heading, paragraph, "Daha fazla bilgi edinin" link), under a dark panel veil so the white text stays readable in every theme. The block is dark now instead of white. The two rows above about the strip's place are obsolete | Requested. Nothing removed: the photo and all the text are still on the page. |
| `/` | Hero photo on phones | Window aimed at 38% (was 80%) so more of the panel rows show; the sun is partly out of frame on phones. Replaces the 80% value in the row above | Requested. |
| `/` | Two hero photos (try-out, then kept) | The field photo (green field with panel rows) is now a second strip directly under the sunset hero, cropped (not scaled) to about 24vw high, with a gold divider bar with a shadow between the two. The hero itself is shorter (64% of the screen instead of 84%) so both fit the first screen. The "Çakar Enerji A.Ş." block is white again (the field photo is no longer its background). In `/ui-2` the divider is hidden: the strip is a floating rounded panel and the gap is the divider. Replaces the two rows above about the strip in the "Çakar Enerji A.Ş." background | Requested as a try-out; merged into `main` after it was tried. |
| `/` | Hero split into two photos (branch `feature/hero-split-photos`) | The hero is now one block with two stacked photos: the sunset behind "ÇAKAR ENERJİ" and "Solar Solutions", the field behind "İletişim Kurun" and the phone number, split by the gold shadowed divider right under the tagline. The hero ends under the phone number (no empty space below it, no fixed height). Photos fit the width and are cropped in height, never scaled up beyond that; the field has an even panel veil so the button and number stay readable. Replaces the row above about the field strip under the hero (that separate strip is gone). In `/ui-2` the same block is one rounded panel | Requested; not merged into `main` yet. |
| `/`, `/ui-2` and the header settings menu | Home page layout options | The first-screen layouts we tried are now options under a new settings section "Ana sayfa düzeni" (saved in the browser like the theme, `<html data-home-layout>`, `lib/home-layout.ts`): **Bölünmüş hero** (default: two photos in one hero, divider under the tagline), **Hero + kırpık şerit** (short hero, field strip under a shadowed divider), **Hero + şerit** (full hero, field strip right under it, as first built), **Şerit Hakkımızda altında** (strip after the About block), **Tarla arka planda** (field photo behind the "Çakar Enerji A.Ş." text, the block turns dark). Picking one closes the panel; from another page it also opens the home page. All parts are in the page and CSS shows or hides them, so the rows above about each try describe these options, not fixed layouts | Requested. New settings UI for the pitch; no content added or removed. |
| header settings menu | Compact panel, two columns | The panel is smaller so it fits a phone screen without scrolling (about 510 px high, tested at 360x640): smaller items and swatches, light and dark themes side by side in two columns, layouts and the two designs in two columns too. Touch targets are 36 px high instead of 44 px | Requested. |
