# Images

The live site's images are used in V0 (branch `feature/live-images`). They are **linked from the live site's image host, not stored in the repo**.

## How it works
- `lib/images.ts` lists every image by id (file name on `img1.wsimg.com`) and builds URLs. The live host resizes on the fly with `/:/rs=w:<px>,m`; the widths used (450, 767, 1023, 1535, 1920) are the ones the live site asks for.
- `components/Photo.tsx` renders a plain `<img>` with `srcSet`, so the visitor's browser fetches the image. `next/image` is not used: its optimizer would make this server download every image.
- Where they appear, and what was added, is in the change log of `docs/route-must-haves.md`.
- To self-host: download the originals by hand (see `docs/scraping.md`: no automated crawling), put them under `public/images/`, and change `photoUrl` / `originalUrl` in `lib/images.ts`. No other file knows where the images come from.

## Known limits
- **Home hero (open, U-25).** The owner's screenshots of the live mobile page show a sunset over hills with a panel array as the first image. Its file is not in `audit-data/pages/00_home.html`: the saved page has only `pexels-tom-fisk` (green field, shown lower on the live page with the İLETİŞİM KURUN button) and `9D437085…` (lit bulb, the slogan band background). The hero still uses the green field until the sunset file name is known. Older note: The live CSS uses `pexels-tom-fisk` for the header at every width; a second, hidden header media with `9D437085…` was wrongly used for 450 px and below and is removed. The owner saw a different, sunnier first image on the live mobile page; if it is not the tom-fisk photo, the live file name is needed (`audit-data/pages/00_home.html` does not show another one).
- **Fragile.** If the owner changes or removes an image on the live site, or the site goes away, V0 shows broken images. Self-host before launch (Q-27).
- **Unverified by eye.** Built and linted, but nobody has looked at the pages with the images loaded (U-24). Check the hero text is readable in all 8 themes and at 390 px, and the home hero light effect still runs smoothly with the photo behind it (U-19).
- **Placement guessed** where the saved HTML does not say: the "Saha Tipi" photo in the blog EPC block, and which Hakkımızda card gets which photo (matched by the live card order).
- **Header logo.** The live logo is light (gold and white) on transparent. The header now uses it too; on the light themes it sits on a dark chip (`--panel`). Original file still wanted (Q-14, TD-01).
- **Partner logos.** Five logos on the home page, shown on white chips (opaque white JPGs, the one hard-coded colour). Alt text comes from the file names; the fifth (`indir.png`) has none because the brand is unknown. They are third-party marks (Q-26).
- **Stock photos.** Most are Pexels/Pixabay (`pexels-…`). Free to use, but the owner may want real project photos (Q-13, Q-27). No photo credits are shown yet.
- **Blog posts** use their own photo only as `og:image`, as on the live site. The pages do not show it, so as not to add a block.
- Images have no `width`/`height`, so their boxes are sized by CSS (`aspect-ratio`, absolute fill). Not measured for layout shift.
