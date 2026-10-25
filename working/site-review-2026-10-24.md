# Site Review — tomwaterton.com

*Analysis produced by Bob (AI assistant). Covers code quality, visual design and layout, and content. Based on reading the source (pages, components, CSS, data files, config) and running ESLint and Prettier. The site was not loaded in a browser, so visual-design comments are inferred from CSS and markup.*

---

## Summary

The site is in good shape. The content is distinctive, the testimonials are strong, and the homepage and portfolio read well. The biggest improvements are in how the site presents your current role and AI work to employers, plus a small number of real functional and accessibility bugs.

---

## 1. Code quality

### Functional issues (worth fixing)

| Issue | Where | Fix |
|---|---|---|
| `npm start` is broken. It runs `npm run develop`, but the script is named `dev`. | `package.json` line 77 | Change to `npm run dev`. |
| Desktop nav dropdowns open only on `:hover`. Keyboard users and touch tablets (640px and wider) can't open them. | `src/css/header.css` line 152; `src/components/header.js` line 26 | Add `:focus-within`, make the desktop nav a `<nav>`, add a skip link. |
| Caret icons are `<i className="fa fa-caret-down">`, but Font Awesome isn't loaded, so nothing renders. | `src/components/header.js` line 29 | Use a CSS or SVG caret, or remove the `<i>` elements. |
| Every page's `og:url` points at the homepage because no page passes `pathname` to `<Seo>`. `twitter:image:alt` also describes the homepage on every page. | `src/components/seo.jsx` line 20 | Pass `pathname` from each page, or use `useLocation()` inside `Seo`. |
| `ContentWidth` renders the class `"fullWidth null"` when no `bgColour` is passed. The prop isn't used anywhere. | `src/components/contentWidth.js` line 7 | Simplify to a function component with no `bgColour`. |
| The patents meta description hardcodes "19 issued patents", which won't update with the data. | `src/pages/inventing.js` line 171 | Compute from `patents.json`, or reword. |

### Hygiene

- **Lint and format:** ESLint reports 98 errors and 76 warnings. Almost all are `react/no-unescaped-entities` (76) or `react/prop-types`. Prettier flags 14 files. Either relax those two rules or fix them, so real problems show up.
- **Real lint findings:** `URLSearchParams` is flagged as undefined in `src/pages/portfolio.js` line 27 (the ESLint config lacks browser globals). Unused `i` parameters in `src/pages/reading.js` line 156 and `src/pages/cryptic-crosswords.js` line 58.
- **Dependencies:** `package.json` lists many packages that nothing in `src/` imports: `immutable`, `parse-url`, `body-parser`, `cookie`, `engine.io`, `minimatch`, `semver`, `ajv`, `cssnano`, `typescript`, `gatsby-cli`. They may be security pins for transitive dependencies (not verified). If so, they belong in `overrides`, not `dependencies`.
- **Leftovers:**
  - `optimize_id: "OPT_CONTAINER_ID"` in `gatsby-config.js` line 45 is a placeholder for Google Optimize, which has been shut down.
  - The `test` script is a stub.
  - `filter.css` has about 60 lines of dead rules.
  - The `links` field in `portfolio.json` is never queried.
  - `Layout` receives a `fullWidth` prop it ignores.
- **Duplication:** `src/pages/testimonials.js` is 558 lines of hardcoded markup. Moving it to a `testimonials.json` file, like the other data, would make it much easier to edit and reuse.

### Performance

- **Image size:** 29 images are over 400KB, including `src/images/family/AI-family.png` at 6.7MB. Images are imported as raw files with no `width`, `height` or `loading="lazy"`. `sharp` is installed but unused. `gatsby-plugin-image` would fix this and prevent layout shift.
- **Duplicate files:** the portfolio images exist in both `src/images/portfolio/` and `static/images/portfolio/` with identical contents.
- **Service worker:** `gatsby-plugin-offline` can serve stale content to returning visitors. Consider dropping it, especially while the site is being updated for job-hunting.

---

## 2. Visual design and layout

### What works

- The pink, yellow and grey palette is distinctive and applied consistently.
- The homepage hero and the three domain cards are clean and modern.
- The portfolio filter buttons and cards are good.
- The mobile menu is sound (it uses `aria-expanded`).
- The tilted yellow photo frames give the site personality.

### Issues

- **Two visual languages.** The homepage, portfolio and filters use a modern card style. Older pages (`experience`, `speaking`, `dog`, `about-this-site`) use the tilted-polaroid style. Decide which is the "professional" look and apply it to the Work pages. The polaroid style could stay on the Fun pages.
- **Low-contrast text.** `color: grey` (`#808080`) on white is about 3.9:1, below the 4.5:1 AA minimum for small text. Used in `src/css/reading.css` line 23, `src/css/inventing.css` line 25 and `.booksToRead h3`. Switch to `#6f6f6f` or darker.
- **Decorative images with alt text.** The testimonial quotation marks have `alt="Quotation mark"` six or more times, which screen readers read aloud. They should be `alt=""`.
- **Heavy use of `!important`.** `src/css/index.css` fights the global `h3`, `p` and `ul` rules. Scoping the global element styles would remove this.
- **Navigation.** Portfolio and Experience, the pages employers most want, sit inside dropdowns. "Recommended books" under "Work" is a slightly odd fit. Consider putting Portfolio and Experience at the top level.

---

## 3. Content

### Strengths

- The portfolio bullets are concrete: 200+ designers using the Figma plugin, the Guild growing from 7 people to 500+ in Slack, a 3,000-designer audience, external design awards, 19 patents.
- Your voice is clear and human throughout.
- The testimonials are senior and specific.

### Highest-impact improvements

1. **Make your current title consistent.**
   - The homepage eyebrow says "Senior AI / UX / Content Designer" (`src/pages/index.js` line 19). The homepage title, About page and every other meta description say "Senior UX / Content Designer". `src/pages/experience.js` line 75 lists "Design Lead for AI Productivity (Jul 2026 – present)", and that title appears nowhere else.
   - A recruiter will notice the mismatch. Pick one headline and use it everywhere.
2. **Show outcomes, not just process.** Several portfolio cards (AI assistant, content assessments, terminology research) describe what you did but not the result. A one-line "Impact:" per card (usage, adoption, time saved, a decision it enabled) would help. Where internal metrics are confidential, even "adopted by X teams" works.
3. **Back up the AI positioning with evidence.** The homepage and Experience page lead with AI tooling design (agent skills, memory and context systems, the human-AI loop), but the portfolio has only two AI cards. Add one or two AI case studies, such as skills you've built or your AI Productivity design-lead work, as far as confidentiality allows.
4. **Add a clear call to action.** There is no CV/résumé download and no "get in touch" button on the homepage. Contact details appear only on About and as footer icons.
5. **Pull proof forward.** A "highlights" strip on the homepage: 15+ years, IBM Master Inventor, 19 patents, 200+ designers using your plugin, 7 conference talks, plus two or three testimonial quotes.
6. **Address freshness.** The newest article is dated Oct 2023 and the latest talk is May 2021. With AI as the headline, no recent writing or speaking reads as a gap. Even a short "recent" note or a link to current work would help.
7. **Check one patent entry.** In `src/data/patents.json`, the Feb 27, 2020 entry uses `patent_abandoned_01.png` and is marked "(Pending)". If that application was abandoned, it is inflating the pending count (currently 2 of 21).
8. **Tone.** The 👋 and 🤖👨‍💻 emoji and the "copious cups of tea" line show personality, which is a strength. "Hi, I'm Tom 👋" appears on both the homepage and About, though. Keep the humour but trim the repetition on the pages employers see first.

---

## Suggested order of work

1. **Quick wins (under an hour)**
   - Fix the `npm start` script.
   - Fix the job title inconsistency.
   - Fix the grey text contrast.
   - Set the decorative quote-mark alt text to empty.
   - Remove the `OPT_CONTAINER_ID` placeholder.
   - Fix the `Seo` `pathname`.
2. **Medium effort**
   - Make the nav keyboard- and touch-accessible.
   - Resolve the ESLint and Prettier errors.
   - Move the testimonials to JSON.
   - Add a CTA and a CV link.
   - Add the homepage highlights strip.
3. **Larger**
   - Optimise images with `gatsby-plugin-image`.
   - Add outcome lines to the portfolio cards.
   - Write the AI case studies.
   - Unify the visual style.

---

## Progress log

### Fixed (session of 2026-10-24)

- **`npm start` script** — now runs `npm run dev` (`package.json`).
- **Nav dropdowns not keyboard/touch accessible** — the three desktop menus are now a `Dropdown` component in `src/components/header.js`. They open on click, tap, Enter or Space (and still on hover), with `aria-expanded`, and close on Escape, focus leaving, an outside tap, or the mouse leaving. Hover-to-open is restricted to devices that support hover, and a visible focus outline was added in `src/css/header.css`. Listeners are attached natively inside a `useEffect` to satisfy `jsx-a11y/no-static-element-interactions`.
- **`url.parse()` deprecation warning / `ERROR UNKNOWN` in dev** — caused by `gatsby-plugin-canonical-urls` (already at its latest version, 5.16.0). The plugin was removed from `gatsby-config.js`, `package.json` and `package-lock.json`, and `src/components/seo.jsx` now outputs the canonical `<link>` itself.
- **Every page's `og:url` pointed at the homepage** — fixed as part of the above. `Seo` now falls back to the current path via `useLocation`, so `og:url`, `twitter:url` and the canonical tag are correct per page (verified in the built HTML).
- **Decorative testimonial quote marks** — all 15 now have `alt=""` in `src/pages/testimonials.js` (the review originally estimated "six or more").
- **Grey text contrast** — plain `grey`/`gray` (`#808080`, 3.95:1) changed to `#6f6f6f` (5.02:1) in `reading.css`, `inventing.css`, `animated-count.css` and `recommended-books.css`. Checked in the dev build by the site owner.
- **Dash-style lists** — unordered lists on `/about`, `/experience`, `/inventing`, `/recommended-books`, `/dog` and `/about-this-site` now use the same "– " marker as `/reading` (earlier in the session; a `.ul-dash` utility class was added).

### Fixed (session of 2026-10-25)

- **Job title consistency** — the homepage eyebrow now reads "Senior Designer" (the dot and "IBM" removed; the existing CSS uppercases it). The page title and meta descriptions in `index.js`, `about.js`, `portfolio.js` and `experience.js`, and the About page sentence, were updated to match (text edits made by the site owner). The Experience job history was deliberately left as the factual record ("Senior UX / Content Designer", Apr 2024 – Jun 2026).
- **Social preview image** — `static/images/site_preview.png` was a 2023 screenshot of an old version of the site. Replaced with a new 1200 × 630 homepage screenshot, compressed from 314KB to 84KB with `sharp` (flattened transparency, 256-colour palette). `twitter:image:alt` in `src/components/seo.jsx` now describes the new image. Previews are cached by LinkedIn and others, so a refresh via LinkedIn's Post Inspector may be needed after deploying.

### Still to do

**Quick**
- Remove the dead `optimize_id: "OPT_CONTAINER_ID"` placeholder in `gatsby-config.js`.
- Fix `ContentWidth` rendering the class `"fullWidth null"`; remove the unused `bgColour` prop.
- Replace the nav `fa fa-caret-down` icons (Font Awesome is not loaded, so nothing renders) with a CSS or SVG caret.

**Medium**
- Resolve the ESLint errors (98 errors, mostly `react/no-unescaped-entities` and `react/prop-types`) and the 14 files Prettier flags; add browser globals to the ESLint config.
- Move the testimonials to a `testimonials.json` data file.
- Add a CV link and a clear call to action; add a homepage highlights strip.
- Remove unused dependencies from `package.json` (check first whether any are security pins that belong in `overrides`).
- Add a skip link and make the desktop nav a `<nav>` landmark.
- Check the Feb 2020 patent entry marked "(Pending)" that uses the "abandoned" image.

**Larger**
- Optimise images (`gatsby-plugin-image`; 29 images over 400KB, `AI-family.png` is 6.7MB; portfolio images are duplicated in `src/images/` and `static/images/`).
- Add outcome lines to the portfolio cards; write AI case studies; address content freshness (newest article Oct 2023, latest talk May 2021).
- Unify the visual style across Work pages.

### Deliberately not changed

- The `/portfolio` card lists (`.portfolio-card__bullets`) still use bullets; the owner will revisit that page separately.
- The generic `ul` rule in `src/css/style.css` is unchanged (it also affects the footer icons list), so dash lists use opt-in classes (`.ul-small`, `.ul-dash`).
