# [FULL NAME] — Terminal Portfolio

> A single-page developer portfolio wrapped in a Neon Genesis Evangelion–inspired
> command-terminal aesthetic. Near-black surfaces, a single safety-orange accent,
> glitch micro-interactions, CRT scanlines, and a philosophical transmission-log tone.

> **Note on the stack:** this request targeted Astro v5. The build was delivered in this
> environment as **React 19 + Vite 7 + Tailwind CSS v4**, with the component structure
> mapped 1:1 to the requested Astro components (`EducationItem`, `CertificationItem`,
> `ProjectCard`, `AboutSection`, …). Porting each `.tsx` file to `.astro` is mechanical
> if you choose to migrate — all content lives in a single data file.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Customization Guide](#customization-guide)
  - [Placeholder Reference](#placeholder-reference)
  - [Images](#images)
  - [Tech-Stack Icons](#tech-stack-icons)
- [Design System](#design-system)
- [Component ↔ Astro Mapping](#component--astro-mapping)
- [Deployment (Vercel)](#deployment-vercel)
- [Accessibility & Motion](#accessibility--motion)

---

## Features

- **Single scrolling page**, full-width content, comfortable ~1000px reading container.
- **HUD header** — section nav, blinking `SYS:ONLINE` status, orange scroll-progress wire.
- **Hero** — huge glitching name, hazard-framed title bar, typewriter "MAGI terminal",
  radar/scope instrument panel (sync rate, MAGI vote), ghost unit numeral, warning marquee.
- **Sections in order:** Education → Certifications → Academic Projects → About Me → Footer.
- **Glitch micro-interactions** — RGB-split clip-path glitch on headings, jitter+flicker
  link hovers, scan-sweep over project imagery, CRT desaturation that "warms up" on hover.
- **Angular card system** — consistent cut-corner `clip-path` frames with accent border
  glow and hover lift, used across education / certification / project entries.
- **Scroll reveal** — IntersectionObserver-driven blur+slide transitions with stagger.
- **Atmosphere layers** — tactical grid, animated scanlines, film grain, vignette.
- **Responsive** — mobile-first, single column on small screens; instruments collapse
  gracefully below `lg`.
- **Reduced-motion safe** — effects are disabled for `prefers-reduced-motion`.

## Tech Stack

| Layer    | Choice                                   |
| -------- | ---------------------------------------- |
| Framework | React 19 (`src/App.tsx` entry)          |
| Bundler  | Vite 7 (+ `vite-plugin-singlefile`)      |
| Styling  | Tailwind CSS v4 (CSS-first `@theme` config) |
| Icons    | `lucide-react` + inline CC0 brand SVGs   |
| Type     | TypeScript                               |
| Fonts    | Chakra Petch · JetBrains Mono · Inter (Google Fonts) |
| Imagery  | AI-generated assets in `public/images/`  |

## Quick Start

```bash
npm install      # install dependencies
npm run dev      # local dev server (vite)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

The build inlines JS/CSS into a single `dist/index.html`; images are served from
`dist/images/`.

## Project Structure

```
├── index.html                    # fonts, meta, <title>
├── public/images/                # project previews + portrait placeholder
└── src/
    ├── App.tsx                   # page composition (all sections)
    ├── index.css                 # @theme tokens + glitch/scanline/clip/reveal CSS
    ├── data/
    │   └── portfolio.ts          # ⭐ ALL content & placeholders live here
    ├── utils/
    │   └── cn.ts                 # className merge helper
    └── components/
        ├── BackgroundFX.tsx      # grid / scanlines / grain / vignette layers
        ├── Hud.tsx               # fixed header + nav + scroll progress
        ├── Hero.tsx              # identity, typewriter terminal, radar panel
        ├── Marquee.tsx           # scrolling caution strip
        ├── SectionHeading.tsx    # numbered section headers
        ├── CardFrame.tsx         # cut-corner bordered card primitive
        ├── Reveal.tsx            # scroll-reveal wrapper
        ├── Socials.tsx           # social icon row
        ├── BrandIcons.tsx        # GitHub / LinkedIn / X inline SVGs
        ├── TechChip.tsx          # tech-stack chip w/ auto brand icon
        ├── EducationSection.tsx  # section 01
        ├── EducationItem.tsx     #   └── timeline entry
        ├── CertificationsSection.tsx # section 02
        ├── CertificationItem.tsx #   └── badge card
        ├── ProjectsSection.tsx   # section 03
        ├── ProjectCard.tsx       #   └── preview + chips + collaborators
        ├── AboutSection.tsx      # section 04 (photo + bio + spec sheet)
        └── FooterSection.tsx     # copyright, socials, END OF TRANSMISSION
```

## Customization Guide

### ⭐ Everything starts in `src/data/portfolio.ts`

Open that single file and replace every bracketed `[PLACEHOLDER]` with real content —
**do not invent facts; leave the bracket if unknown**. The file is fully typed
(`EducationEntry`, `CertificationEntry`, `ProjectEntry`, …) so your editor will guide
you when adding more entries (just append to the arrays).

Also update:

- `<title>` and meta description in `index.html`
- `public/images/portrait.jpg` — replace with your photo (any aspect; it's cropped to 4:5)
- Collapse/remove optional fields freely: `EducationEntry.detail`, `ProjectEntry.collaborators`

### Placeholder Reference

| Placeholder | Where it appears |
| --- | --- |
| `[FULL NAME]` / `[FN]` | Hero, HUD, About, Footer |
| `[PROFESSIONAL TITLE]` | Hero title bar, spec sheet, title tag |
| `[TAGLINE]` | Hero paragraph (2–3 sentences) |
| `[CITY, COUNTRY]` | Hero readout, spec sheet |
| `[EMAIL_ADDRESS]` | Contact CTA, socials, spec sheet |
| `[YEAR]` | Footer copyright |
| `[GITHUB_URL]` `[LINKEDIN_URL]` `[TWITTER_URL]` | Social icon row(s) |
| `[INSTITUTION_n]` `[DEGREE_n]` `[DATE_RANGE_n]` | Section 01 entries |
| `[CERT_TITLE_n]` `[ISSUER_n]` `[DATE_n]` `[CERT_LINK_n]` | Section 02 verify cards |
| `[PROJECT_NAME_n]` `[PROJECT_DESC_n]` `[REPO_LINK_n]` | Section 03 cards |
| `[TECH_n]` | Tech chips on project cards |
| `[COLLAB_n]` `[COLLAB_GH_URL_n]` | Collaborator avatars |
| `[ABOUT_TEXT]` | Section 04 paragraphs |
| `[PHOTO]` | Section 04 image (alt text) |

### Images

Project previews live at `public/images/project-1…4.jpg` and are referenced from the
`image` field of each project. Swap the files (keep the names) or point the field at
your own paths/URLs. Recommended aspect: 16:9 (any size ≥ 1200px wide).

### Tech-Stack Icons

`TechChip` auto-resolves ~40 real tech names ("React", "Python", "Docker", …) to
monochrome brand SVGs via `cdn.simpleicons.org`, with a generic terminal glyph as
fallback — so `[TECH_1]` placeholders render cleanly until replaced. Extend the
`SLUGS` map in `src/components/TechChip.tsx` for anything missing.

## Design System

| Token | Value | Use |
| --- | --- | --- |
| `--color-ink` | `#0a0a0a` | page background |
| `--color-panel` / `--color-panel2` | `#0f0f0e` / `#161613` | card surfaces |
| `--color-eva` | `#ff5c00` | primary accent |
| `--color-ember` | `#ff2d2d` | alerts, REC dots |
| `--color-acid` | `#a8ff3e` | PASS/OK status |
| `--color-fog` / `--color-dim` | `#a6a69c` / `#5f5f58` | muted typography |

- **Display font:** Chakra Petch (uppercase, tight tracking)
- **Mono font:** JetBrains Mono (HUD labels, terminal, meta)
- **Body font:** Inter
- **Shape language:** cut-corner `clip-path` (`.cc`, `.cc-sm`, `.cc-tl`), hazard stripes
  (`.hazard`), never rounded pills.
- **Effects:** `.glitch` (add `data-text` + wrap parent in `.glitch-parent` for
  hover-triggered RGB split), `.g-link`, `.flicker`, `.crt-img` scan sweep, `.rv` reveal.

## Component ↔ Astro Mapping

| Requested (Astro) | Delivered (React) |
| --- | --- |
| `EducationItem.astro` | `src/components/EducationItem.tsx` |
| `CertificationItem.astro` | `src/components/CertificationItem.tsx` |
| `ProjectCard.astro` | `src/components/ProjectCard.tsx` |
| `AboutSection.astro` | `src/components/AboutSection.tsx` |
| `Layout.astro` | `src/App.tsx` + `src/components/BackgroundFX.tsx` |

## Deployment (Vercel)

This project deploys as-is:

```bash
npm run build   # outputs dist/
```

1. Push the repo to GitHub/GitLab.
2. In Vercel: **New Project → Import** — Framework Preset **Vite**.
3. Build command `npm run build`, output directory `dist` (defaults are correct).
4. Deploy.

> The single-file plugin inlines JS/CSS, so `dist/index.html` is self-contained;
> `public/images/` is copied to `dist/images/` automatically.

## Accessibility & Motion

- Semantic landmarks (`header/main/footer/section`), labelled nav, alt text driven by
  content placeholders.
- All animation respects `prefers-reduced-motion` (glitch, scanlines, reveals, marquees
  are neutralized).
- Interactive elements keep visible focus/hover states; contrast tuned for the dark theme.

---

<p align="center">
  <sub>GOD'S IN HIS HEAVEN — ALL'S RIGHT WITH THE WORLD. · END OF TRANSMISSION</sub>
</p>
