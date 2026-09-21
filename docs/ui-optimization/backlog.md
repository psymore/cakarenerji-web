# UI optimization backlog

What the 2026-09-21 audits found and V0 did **not** fix, plus measurements not yet taken. Evidence: `ui-ux/audit-2026-09-21.md`, `animation-performance/measurements.md`. Rows that need an owner or user decision are also in `OPEN-QUESTIONS.md` section B (column "Open question").

Status: `open`, `decided` (decision made, not built), `done`. Priority: P1 do before showing or launching, P2 soon, P3 nice to have.

| ID | Finding | Evidence | Proposed fix | Needs decision | Open question | Prio | Status |
|---|---|---|---|---|---|---|---|
| UIO-01 | Hero light drops to about 48-50 fps without GPU raster (old PCs, VMs, remote desktop, hardware acceleration off). Steady 60 fps with the light removed. | `measurements.md`, software-raster rows | Shrink or drop the 840 px glow, or shrink the 600 px lit window. A transform cannot remove CPU compositing cost. | Yes: visual (look of the light) | U-19 | P2 | open |
| UIO-02 | Mobile LCP 4.4 s (Lighthouse). The LCP element is the cookie notice text, which mounts only after hydration. Desktop LCP is the hero title (0.9 s). | Lighthouse mobile, `lcp-breakdown-insight` | Render the notice in the server HTML and hide it for returning visitors with a small inline script instead of `useSyncExternalStore` after hydration. | Partly: wording and a "reject" option wait on Q-23 | U-20 | P1 | open |
| UIO-03 | Mobile cookie notice covers about a quarter of the screen and overlaps the hero phone link. Desktop is one line and fine. | `ux/m-home` screenshot | Smaller footprint on mobile (text stays as on the live site). | Yes: design | U-20 | P2 | open |
| UIO-04 | Mobile hero: the upper half is empty and the grid shows only at the bottom. First impression is weak. | `ux/m-home` screenshot | Lower mobile `min-height`, or a taller, brighter grid on narrow screens. | Yes: design | U-21 | P2 | open |
| UIO-05 | Blog post bodies: axe heading-order on 6 pages. Body `h3` follows the page `h1` directly (one post also goes `h3` to `h4`). | axe after run, `.article > h3` | Render body headings one level higher in `postBody` (structure only, text unchanged). | No | | P2 | open |
| UIO-06 | Fonts are 358 KB of the 546 KB page (6 woff2 files). Source Serif italic is used for the hero tagline and the quote only. | Lighthouse network requests | Load the italic separately with `preload: false`, or with only the glyphs it needs. Check that Turkish letters in the quote still render. | No | | P3 | open |
| UIO-07 | Lighthouse `label-content-name-mismatch` on the logo. The visible text is "ÇAKAR ENERJİ" and the check lowercases `İ` to `i̇`. | Lighthouse, both presets | Treat as a false positive, or make the visible text and name identical in one script. | No | | P3 | open |
| UIO-08 | No meta description. Lighthouse SEO stays at 90. | Lighthouse `meta-description` | Add once the owner gives the text. | Yes: owner text | Q-25 | P2 | open |
| UIO-09 | Not measured: sticky-header `backdrop-filter` while scrolling, real phones, scroll performance, screen reader, forms beyond their labels. `load.js` recalc counts are inflated by its own rAF loop. | `measurements.md` caveats | Real-device run; a load harness without the rAF loop or a Chrome trace. | Yes: needs a device or the user's Chrome | U-22 | P2 | open |
| UIO-10 | Blog list titles are 35 px tall and a few inline links are under 44 px. Everything else is fixed (avg 8.7 → 2.0 small targets per page). | audit script | Add padding to blog titles if wanted. Large text, low risk. | No | | P3 | open |
| UIO-11 | Framework overhead: 28 KiB unused JS, 13 KiB legacy JS, 154 ms render-blocking stylesheet. | Lighthouse | Comes from Next.js and its stylesheet. Revisit only if the score matters. | No | | P3 | open |
| UIO-12 | Blog "Continue Reading" is English. Live wording, deliberately left. | `docs/route-must-haves.md` | Owner decides whether to translate. | Yes: owner | | P3 | open |

## Fixed on 2026-09-21 (for the record)

Hero sunrise and pointer light moved to compositor transforms, skip link, heading levels (contact card, HR, mobile menu labels, cookie title), tap targets, mobile menu scroll lock, logo `aria-label`. Details: audit doc and `docs/route-must-haves.md` change log.
