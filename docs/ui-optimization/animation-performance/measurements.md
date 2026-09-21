# Hero animation performance (2026-09-21)

Question: does the pointer-following light on the home hero run badly on desktop?

## Answer

- **With a GPU, no.** 144 fps on a 144 Hz GPU machine, and 116-142 fps even with the CPU slowed 4-6×.
- **Without GPU raster, yes.** Software rendering (old PCs, VMs, remote desktop, hardware acceleration off) dropped to ~51 fps with 33 ms stalls. Turning the light off gave a steady 60 fps.
- **The load-time "sunrise" was the bigger cost.** It animated CSS variables on the main thread.

## Cause (before)

`HomeHero` wrote `--sx` / `--sy` on the `<section>` on every `pointermove`. They were registered `@property` values with `inherits: true`, so each write recalculated style for the whole hero subtree. They also drove a `mask-image` (lit grid) and a `radial-gradient` (glow), so two large layers were repainted per move. The sunrise did the same for 3.2 s at load. Lighthouse flagged the `.hero` animation as non-composited.

## Change

`components/home/HomeHero.tsx` and the hero block of `app/globals.css`. The look is the same; only the mechanism differs.

- Glow (840 px) and lit-grid window (600 px, fixed radial mask) are separate layers moved only by `transform`. The lit plane inside the window moves the opposite way, so the grid stays put while the window slides over it.
- Sunrise is a Web Animations API transform animation (compositor). A pointer move cancels it.
- Hero size is cached with a `ResizeObserver` (no `getBoundingClientRect` layout read per event beyond one rect), updates are coalesced with `requestAnimationFrame`, `prefers-reduced-motion` skips the sunrise.
- No React state anymore (`live` / `is-live` removed).

## Method

Chrome (system install, Playwright driving it), production build (`next start`), localhost. Pointer test: 3 s of `page.mouse.move` roughly every 4 ms over the hero, rAF frame deltas plus CDP `Performance.getMetrics` (style recalcs, style ms, task ms). "no-lit" = `.hero__lit, .hero__glow` hidden, as the floor. Scripts in `scripts/`.

- `perf.js`: pointer sweep, 1440×900, 1× and 4× CPU throttle, mask/glow variants (before code only).
- `perf2.js`: `hidpi` (1920×1080 at DPR 2, GPU) and `sw` (`--disable-gpu`, software raster) modes, 1× and 6× throttle.
- `load.js`: page load, 4.5 s from `load`, 4× throttle, mobile 390×844@3 and desktop.
- `probe.js`: style recalcs during the sunrise and idle afterwards.

## Results

### Pointer sweep, before (old code)

| Setup | fps | p99 ms | max ms | style ms | task ms |
|---|---|---|---|---|---|
| GPU, 1440×900, 1× | 144 | 7.2 | 7.2 | 121 | 370 |
| GPU, 1440×900, 4× | 142.3 | 13.7 | 14 | 575 | 1732 |
| GPU, 1920×1080@2, 1× | 144 | 7.2 | 7.3 | 80 | 265 |
| GPU, 1920×1080@2, 6× | 116.4 | 20.9 | 27.8 | 734 | 2375 |
| Software raster, 1× | 50.8 | 33.4 | 33.4 | 50 | 153 |
| Software raster, 6× | 40.6 | 33.4 | 33.4 | 676 | 2088 |

Floor with the light removed: GPU 1440×900 1× 144 fps / 186 ms task; 4× 144 fps / 988 ms; 1920×1080@2 6× 134.7 fps; software 1× and 6× both a steady 60 fps.
Removing only the lit-grid mask and glow (variant `no-mask-no-glow`) also held software raster at 60 fps, so the two layers are the cost.

### Pointer sweep, after

| Setup | fps | p99 ms | max ms | style ms | task ms |
|---|---|---|---|---|---|
| GPU, 1920×1080@2, 1× | 144 | 7.2 | 7.3 | 32 | 269 |
| GPU, 1920×1080@2, 6× | 125.1 | 27.7 | 48.6 | 304 | 2395 |
| Software raster, 1× | 48 | 33.4 | 33.4 | 20 | 140 |
| Software raster, 6× | 50.3 | 33.4 | 66.7 | 194 | 1388 |

Not re-run after the change: GPU 1440×900 at 4×.

### Page load

Mobile 390×844@3, CPU 4×, 4.5 s after `load`:

| | style ms | recalcs | task ms |
|---|---|---|---|
| Before | 1432 | 317 | 4632 |
| Before, sunrise disabled (floor) | 98 | 3 | 2389 |
| After | 565 | 460 | 3684 |

Desktop 1440×900, CPU 4×: before 1290 ms / 336 recalcs / 4304 ms; floor 99 / 4 / 2880; after 486 / 451 / 3199.

Probe without the harness's rAF loop, desktop, CPU 4×: 3 style recalcs and 349 ms of task time during the 1.5 s of the sunrise, 0 recalcs when idle afterwards, 0 running animations after it ends.

### Lighthouse (localhost)

| | Perf | A11y | Best practices | SEO | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|
| Mobile, before | 83 | 98 | 100 | 90 | 4.4 s | 130 ms | 0 |
| Mobile, after | 83 | 100 | 100 | 90 | 4.4 s | 130 ms | 0 |
| Desktop, before | 99 | 98 | 100 | 90 | 0.9 s | 0 ms | 0 |
| Desktop, after | 99 | 100 | 100 | 90 | 0.9 s | 0 ms | 0 |

Non-composited animations flagged: 1 before, 0 after. Mobile LCP element is the cookie notice text, not the hero (see below).

## Conclusions and caveats

- Main-thread style work is down by 55-75 % in the pointer test and by about 60 % during load. Compositor-side, the sunrise now runs with essentially no style recalcs (probe).
- **The software-raster case is not fixed.** It stays at roughly 48-50 fps. That cost is CPU compositing of the moving glow and masked window, which a transform cannot remove. It only matters without hardware acceleration.
- The 1× GPU numbers are already at the display's refresh rate, so they show no difference. The 6× GPU case is only slightly better (116 → 125 fps); its total task time is unchanged because Playwright's own input dispatch is in it.
- The `load.js` "after" recalc count (~450) is inflated by the harness: its always-on rAF loop forces main frames while the animation runs, and all three of its variants still run the sunrise. The `probe.js` run is the cleaner number.
- Lab results on one machine (144 Hz, discrete GPU). Real low-end phones were not tested.

## Still open

- Software-raster jank: shrink or drop the glow, or a smaller lit window. Needs a visual decision.
- Mobile LCP 4.4 s: the cookie notice mounts after hydration and is the largest text. Rendering it in the server HTML (hidden by an inline script for returning visitors) should move LCP to the hero.
- Fonts are 358 KB of the 546 KB page (6 woff2 files). The italic Source Serif is only used for a tagline and the quote.
- Sticky-header `backdrop-filter` cost while scrolling was not measured.
