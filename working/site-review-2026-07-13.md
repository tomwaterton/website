# Site Review — tomwaterton.com

*Analysis produced by Bob (AI assistant) as part of a site restructure discussion.*

---

## What the current site does well

**Technical foundations are solid.** Gatsby + Tailwind + custom CSS is a reasonable, lightweight stack. The sitemap, robots.txt, canonical URLs, Google Analytics, and offline plugin are all properly configured. The responsive breakpoints mostly work, and the print styles are a thoughtful touch. The tile card pattern on the Articles and Patents pages is clean and reusable.

**Content is genuine and substantial.** The Portfolio, Speaking, Inventing, and Articles sections have real, high-quality content that clearly reflects serious professional work. The personal pages (Brewing, Dog, Family) give the site warmth and personality.

**The footer is clean and functional**, and the alternating background-colour panel pattern on multi-section pages (e.g., Speaking, Portfolio) creates visual rhythm.

---

## What needs improvement

### 1. Navigation architecture — the biggest problem

The current nav has three items: **Content design** (dropdown) | **Articles** (standalone) | **More...** (dropdown). This is structurally awkward:

- "Content design" is a job title, not a navigation category label. It's also confusing since "Articles" and "About" content sits *outside* it, yet many articles are about content design.
- "Articles" being a peer-level standalone item while everything else is inside dropdowns feels inconsistent and visually unbalanced.
- "More..." is vague and feels like an afterthought. **Inventing**, which is one of your strongest credentials (IBM Master Inventor!), is buried there alongside hobbies.
- There is currently **no "About me"** page. The `/about` route goes to "About this site" — a technical curiosity page. A visitor wanting to learn who you are has to piece it together from the homepage text and the experience page.
- The footer's "About this site" link goes to `/about`, but the new structure gives that slug to the new "About me" page. The existing "About this site" page moves to `/about-this-site`.

Your proposed new IA solves most of this and I think it's well-conceived. My thoughts on it:

### 2. Feedback on the proposed structure

| Decision | Verdict | Reasoning |
|---|---|---|
| 3 top-level menus: **About**, **Work**, **Fun** | ✅ Strong | Clear, immediately understandable, balanced — and honest about the personal side of the site |
| "About" as a parent-only heading (no page) | ✅ Good | Makes navigating to sub-pages fast; consistent with standard dropdown nav patterns |
| Moving **Articles** under **About** | ✅ Correct | Articles are personal expression, not portfolio work — they belong near "About me" |
| Moving **Speaking** under **About** | ✅ Correct | Same reasoning — these are personal appearances, not portfolio items |
| "What I do" + "Portfolio" as separate pages | ✅ Decision made: **no separate "What I do" page** | "What I do" narrative content will be merged into the Portfolio page intro. Portfolio becomes the single showcase page with tag-filter (AI / Content design / UX design). The homepage 3-domain cards will also surface the three areas. |
| Tag filter on Portfolio (AI / content-design / UX-design) | ✅ Excellent idea | The Articles page already implements this pattern well — applying it to Portfolio is logical and technically straightforward to implement |
| Moving **Inventing** from "More..." to **Work** | ✅ Absolutely — great change | IBM Master Inventor is a significant professional credential. It deserves to sit alongside your work |
| **Recommended books** under **Work** | ⚠️ Slight concern | Work-adjacent books make sense there, but it may surprise visitors who come to "Work" and find a book list. Consider calling the page **"Reading: non-fiction"** to parallel "Reading: fiction", and grouping both under **Fun**. Or rename the Work section to "Work & Learning" if books stay there |
| **Testimonials** under **About** | ✅ Good | It's personal social proof — belongs near "About me" |

### 3. The homepage needs a redesign

The current homepage is a centred photo + three short paragraphs. For a UX/content designer's portfolio site, this is underselling you significantly. Given your instinct to feature your AI or design work:

**Recommended approach:** A two-zone homepage:
- **Hero zone**: brief punchy positioning statement (not the current verbose paragraph), your title/role, and one strong visual/artifact — perhaps an animated or illustrated version of something you've built.
- **Work highlight cards**: 3 cards below the hero, one per domain (AI work / Content design / UX design), each with a short description and a link to the filtered portfolio view. This immediately communicates your three core areas and routes visitors where they want to go.

This also resolves the "What I do" page question — you surface those three areas *on the homepage* rather than as a separate page.

### 4. The "About me" page gap

You currently have no personal bio/intro page. The homepage has a brief intro, but a dedicated About me page should include:
- A friendly photo
- Proper professional bio (not just job title)
- Contact information (the homepage currently has the contact link *commented out*)
- Perhaps a brief "currently working on..." section

### 5. The Portfolio page needs structural upgrading, not just content

The current portfolio is a flat list of full-bleed panel sections. Each section uses a different background colour for visual variety, but there's no way to skim the whole portfolio at a glance. The tag-filter you proposed would solve this elegantly. The architecture I'd recommend:

- A brief intro paragraph
- A filter row (All / AI / Content design / UX design)
- A responsive grid of cards — each card with: image, title, one-line description, and a tag badge
- Clicking a card reveals the detailed panel (or links to a dedicated sub-page if the detail is long)

This mirrors what you already have on Articles and would make the portfolio much more scannable.

### 6. Minor code issues worth addressing

- **`src/components/header.js`**: The `isExpanded` state and `toggleExpansion` function are declared but never used — likely a leftover from a mobile hamburger menu that was removed. Dead code.
- **`src/pages/index.js`** (commented-out contact prompt): The contact prompt is commented out — `{/* Interested in working together? Do get in touch. */}`. Given you want the site to better reflect professional work, this should probably be uncommented and improved. *(Deferred — to address when creating the new "About me" page.)*
- **`src/pages/inventing.js`** (back-to-top links): `<a href="#">` for "Back to top" links — these should use proper anchor targets, not bare `#`, to avoid accessibility issues.
- **`src/pages/inventing.js`** (class components): `RenderPatents` and `PatentTile` are implemented as class components — the rest of the codebase uses functional components. These should be converted for consistency.
- **`src/css/style.css`**: A commented-out colour rule `/* color: #2980b9; */` — minor housekeeping.
- **`src/pages/articles.js`**: Article images use a relative path string `../images/articles/${image}` — this works in development but is fragile in Gatsby. Images should be imported or served from `static/`.

### 7. Design language observations

- The **pink/magenta heading colour** (`#d82286`) is distinctive and warm — it's a signature choice worth keeping.
- The **yellow hover state** (`#f6e05e`) on nav items is playful and consistent. Keep it.
- The **rotating image borders** (yellow border + `rotate(-3deg)`) on page hero images are charming and personal. Keep these.
- The **`body { min-width: fit-content; }`** rule in `style.css` is preventing the site from being fully responsive on small screens — it overrides the mobile layout. This should be reviewed.
- There is **no mobile hamburger menu** — on small screens, the nav items just wrap and get smaller. For a professional site in 2025 this should be addressed.

---

## Agreed revised IA

**Home** — `/` — redesigned with hero + 3 domain cards

| Menu | Page | Slug | Notes |
|------|------|------|-------|
| **About ▾** | About me | `/about` | New page: photo, bio, contact |
| | Articles | `/articles` | Existing, keep tag filter |
| | Speaking | `/speaking` | Existing |
| | Testimonials | `/testimonials` | Existing |
| **Work ▾** | Experience and skills | `/experience` | Existing |
| | Portfolio | `/portfolio` | Redesigned: "What I do" intro + tag filter (AI / Content / UX) |
| | Inventing | `/inventing` | Existing — elevated from "More..." |
| | Recommended books | `/recommended-books` | Existing |
| **Fun ▾** | Brewing | `/brewing` | Existing |
| | Cryptic crosswords | `/cryptic-crosswords` | Existing |
| | Family | `/family` | Existing |
| | Our dog | `/dog` | Existing |
| | Reading fiction | `/reading` | Existing |
| **Footer only** | About this site | `/about-this-site` | Moved from `/about` — `about.js` → `about-this-site.js` |
| | 404 | `/404` | Updated to match new IA |

*About, Work, and Fun are heading-only — they have no page of their own.*

Key decisions:
- No separate "What I do" page — that content merges into the Portfolio intro section
- "About me" takes the `/about` slug; existing "About this site" moves to `/about-this-site`
- Navigation: hover dropdowns on desktop

---

## Priority order for implementation

✅ = done

1. ✅ Minor code fixes (dead state, class components, back-to-top anchors, image paths)
2. ✅ Rename `about.js` → `about-this-site.js` and update footer link
3. ✅ New header nav — 3 hover-dropdown menus (About / Work / Fun) with correct slugs
4. ✅ New "About me" page at `/about` — photo, bio, contact
5. ✅ Homepage redesign — hero + 3 domain cards
6. ✅ Portfolio redesign — "What I do" intro + tag filter + card grid
7. ✅ Update 404 page — update headings and links to match new IA
8. ✅ Mobile nav — hamburger menu for small screens
