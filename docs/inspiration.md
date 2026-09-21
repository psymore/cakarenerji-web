# Inspiration: solar and energy company sites

Small desk study (2026-09-22): companies that work on the same subject as Çakar Enerji (solar EPC, industrial and commercial PV, storage) and are known for their web presence. Purpose: ideas for the V0 pitch, not to copy anything.

## How this was done, and what it cannot tell
- Each home page was fetched once and summarised from its **text and markup**. I did not see the pages rendered, so motion, video and typography details below are **inferred from the markup or the copy**, and marked "inferred" where that matters.
- Nextracker (nextracker.com) answered HTTP 429 and was not retried, so it is not covered.
- Agency round-ups (CyberOptik, Comrade Web, Hook Agency, Demand Convert, 99designs) were used only to pick names, not as evidence.
- The live cakarenerji.com was not touched (see AGENTS.md).
- Constraint that limits what we can borrow: V0 is a redesign only. No new blocks, no invented figures or references (`OPEN-QUESTIONS.md`). Ideas that need real numbers or projects are listed under "Needs owner data".

## The companies

### Lightsource bp (lightsourcebp.com), global solar developer
- **Liked:** the first sentence says exactly what they do ("end-to-end onshore renewable energy and battery storage solutions"). Four big figures follow straight away (GW built, markets, pipeline). The figures are shown as **count-up numbers** (inferred: the fetched text shows them as 0, which is how a count-up looks before it runs).
- **Liked:** one real, dated news item on the home page (a named partner, a named plant, a place), which reads as proof, not as a claim.
- **For us:** a count-up on the home page is a small, cheap way to make the numbers lively, but only with the owner's real numbers.

### ENERPARC (enerparc.de), German solar plant builder and operator
- **Liked:** the closest match to Çakar: builds plants for businesses. Hero is a background video with one plain line. Below it, three photo cards tell a short story: company, plants, people.
- **Liked:** the seven service areas are shown as an icon list, so the whole offer is visible without opening menus. ISO certificate badge in the footer as quiet trust.
- **For us:** our home page already has the services; a compact icon row like theirs would help scanning, but that would be a new block, so only as a re-layout of what exists.

### GreenYellow (greenyellow.com), industrial and commercial energy services
- **Liked:** the pictures are real roofs of warehouses and shops, so an industrial buyer sees their own building. Sector cards ("retail", "industry" ...) each lead to that sector's project gallery. A free e-book widget stays on screen (lead capture).
- **For us:** the roof and carport galleries we just added are the same idea. A caption naming the type of site would make them read as references (needs owner data).

### Enphase (enphase.com), microinverters and home/commercial systems
- **Liked:** the menu is split by who is reading (homeowner, business, installer), so nobody has to work out which page is theirs. Calm typography, rounded image corners used the same way everywhere, and a consistent "Get a quote" button.
- **For us:** Çakar's menu already groups services; the settings-menu and quote button are consistent. Not much to add except keeping the button wording identical everywhere.

### Sungrow (sungrowpower.com), inverters and storage
- **Liked:** the mega-menu is split into Homes, Businesses, Utility-Scale, Installers, Distributors. Big statistics with a third-party rating (ESG "AAA") as the trust signal. The Turkish version exists and reads naturally ("Herkes İçin Temiz Enerji"), useful as a tone reference.
- **For us:** third-party proof (certificates, ratings) beats self-praise; ask the owner for any (Q-list).

### Enel Green Power (enelgreenpower.com), world's largest renewables company
- **Liked:** the headline has a voice ("We're making the energy transition happen. For real.") even at that size. Each plant gets its own story page instead of only a map pin. Photo and video galleries are separate sections. A slider with a visible pause/play control (good accessibility, and matches what our carousels now do when held).
- **For us:** the pause control is worth checking on our sliders: today they pause on hover, touch and focus, but there is no visible pause button (WCAG 2.2.2 wants one for auto-moving content longer than 5 s).

### Ørsted (orsted.com), offshore wind
- **Liked:** the photography is all one blue-grey palette, so the page feels calm and expensive without decoration. Project cards are the same size, giving a steady rhythm. News items name the project and the place.
- **For us:** our theme system already has a blue-grey option; the lesson is to grade the photos we hotlink to one look (a colour overlay or the `--panel` veil we use in the slogan band).

### Octopus Energy (octopus.energy), UK supplier with solar and heat pumps
- **Liked:** a residential brand, so not a like-for-like, but the best example of **personality**: a mascot, plain words ("Sunny money"), a postcode field as the very first thing to do. One number of social proof (stars and review count) beside the button.
- **For us:** the lesson is a first action that starts immediately. Our first action is the phone button, which fits a phone-first business.

### Kalyon PV (kalyonpv.com), Turkish panel manufacturer
- **Liked:** local reference in the same language. Figures with real units (capacity, domestic content, R&D staff, patents), a process line (ingot → wafer → cell → panel) shown as steps, and a founder quote with emotion ("renewable energy, a Turkey rising like the sun").
- **For us:** a Turkish buyer reads this kind of page every day; Çakar should feel at least as serious. The process-steps layout could suit the existing "Anahtar Teslim" cards.

## Patterns across all of them
1. **One plain sentence** says what the company does, before anything else.
2. **Real photos of real sites**, not icons. Colour treatment kept the same across the page.
3. **Numbers as design**: big, few, with units, often counting up.
4. **Visitors sorted by need** in the menu.
5. **Proof by name**: a named project, place or certificate beats an adjective.
6. **One repeated call to action** with identical wording.

## What we already do, what we could try
| Idea | Status in V0 |
|---|---|
| Plain first sentence + phone button | Done (hero) |
| One colour treatment on photos | Partly: slogan band veil, hero scrim. Not applied to the galleries |
| Real photo galleries | Done (Arazi GES, Solar Carport) |
| Count-up numbers | Not possible without owner numbers (would be a new block) |
| Visible pause button on auto-moving sliders | **Missing**, good candidate (accessibility) |
| Captions naming site type on gallery photos | Needs owner data |
| Third-party proof (certificates, ratings) | Needs owner data |

## Needs owner data (add to `OPEN-QUESTIONS.md` if we go ahead)
- Real totals (installed MW, number of projects, years), if the owner wants a numbers strip.
- Project names, places and site types for gallery captions.
- Certificates or memberships worth showing.

## Sources
Company sites named above, fetched 2026-09-22. Agency lists used for names only: [CyberOptik](https://www.cyberoptik.net/blog/best-solar-website-designs/), [Comrade Web](https://comradeweb.com/blog/best-solar-websites/), [Hook Agency](https://hookagency.com/blog/solar-website-design-examples/), [Demand Convert](https://demandconvert.com/learn/blog/solar-website-design-examples/), [99designs](https://99designs.com/inspiration/websites/energy).
