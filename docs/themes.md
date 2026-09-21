# Themes

Eight themes, chosen from the header palette button (both designs). `<html data-theme="id">` picks the palette, `<html data-scheme="light|dark">` is set with it for the few non-colour dark rules. The first visit follows the OS setting (`light` / `dark`), the choice is saved in `localStorage` (`theme`).

| id | Label | Scheme | Source |
|---|---|---|---|
| `light` | Açık | light | original site palette (`:root` in `app/globals.css`) |
| `blue-gold` | Mavi & Altın | light | palette sheet |
| `earth` | Toprak Tonları | light | palette sheet |
| `ocean` | Okyanus Esintisi | light | palette sheet |
| `dark` | Koyu | dark | original dark palette |
| `dark-blue-gold` | Koyu Mavi & Altın | dark | palette sheet |
| `dark-earth` | Derin Toprak | dark | palette sheet |
| `dark-ocean` | Derin Esinti | dark | palette sheet |

## Where things live

- `lib/theme.ts`: the theme list (id, label, scheme, preview swatches), the pre-paint inline script and `applyTheme` / `resolveTheme`.
- `app/themes.css`: one token block per theme except `light`. Roles are documented at the top of the file.
- `app/ui-2/css/tokens.css`: `/ui-2` reads `--ui2-frost`, `--ui2-line`, `--ui2-card`, `--ui2-field` and `--shade` from the theme block.
- `components/settings/ThemeSection.tsx`: the picker section (grouped light / dark); `components/settings/SettingsMenu.tsx` is the header button and popover (also design and gallery sections; Esc and outside click close it).

## How a palette sheet turns into tokens

The sheet gives five swatches per theme. They set the structure, not the text colours:

- panel band (`--panel`, white text on it) and its twin (`--panel-2`): the two darker blues / browns of the sheet,
- accent (`--sun`, button fill with `--on-sun` text): the sheet's gold / ochre / turquoise,
- page (`--frost`) and raised surface (`--paper`): the lightest swatch (light themes) or the deepest swatch (dark themes).

Text-side colours are **derived**, not copied, because sheet swatches such as Pale Gold or Turquoise cannot carry text on a light page: `--ink`, `--ink-soft`, `--slate`, `--sun-deep` (accent as text on the page) and `--sun-lit` (accent as text on a panel band) are moved toward black or white in 2 % steps until they reach WCAG AA (4.5:1, ink 7:1) against every surface they sit on, including the `/ui-2` page tint. The accent fill itself is nudged the same way when the `--on-sun` text on it would fall under 4.5:1 (e.g. Earth ochre `#D9A33B` → `#DAA53F`, Blue & Gold gold `#D4AF37` unchanged).

A scan of every text node on `/`, `/ui-2`, and the inner pages `hizmetlerimiz` and `blog-1` (both designs) in all 8 themes, with the cookie banner accepted, found no text under AA against its solid background (gradient backgrounds are not covered by the scan and were checked by eye).

## Hex codes read from the sheet

Several codes on the sheet are garbled; these are the readings used (see `OPEN-QUESTIONS.md` U-23):

| Theme | Swatch | Reading |
|---|---|---|
| Blue & Gold | Dark Navy / Pale Gold | `#001F5B` / `#F7E5AB` |
| Warm Earth Tones | Ochre Yellow, Chocolate Brown (no code on the sheet) | `#D9A33B`, `#5A3A29` |
| Dark Earth | Burnished Bronze | `#8F6625` |
| Others | as printed | |

## Adding a theme

1. Add `{ id, label, scheme, swatches }` to `themes` in `lib/theme.ts`.
2. Add a `:root[data-theme="id"]` block to `app/themes.css` overriding the same tokens as an existing block of the same scheme (include the `--ui2-*` and `--shade` tokens).
3. Check contrast and view both designs. Do not hard-code colours in component CSS.

## Removed

Green, Shadow Green, Monochrome Neutrals and Midnight Neutrals from the sheet were removed on request (2026-09-21). To bring one back, add it as described above.
