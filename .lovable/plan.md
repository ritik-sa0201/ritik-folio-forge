
# Ritik Saini Portfolio — Build Plan

Single-page dark/editorial/brutalist portfolio built on the existing TanStack Start + Tailwind v4 stack. All copy/data extracted from the uploaded resume.

## Stack notes (adapted to this project)

- TanStack Start, Tailwind v4 (CSS-first), Framer Motion (`motion/react`), lucide-react.
- Routes live in `src/routes/` (no CRA `src/` page model). Single page goes in `src/routes/index.tsx` composed from section components in `src/components/sections/`.
- Resume data centralized in `src/data/resume.ts`.
- Theme tokens added to `src/styles.css` under `@theme` (colors + fonts). Google Fonts (Syne, DM Mono, Space Mono) loaded via `<link>` in `src/routes/__root.tsx` head (NOT `@import` — Lightning CSS limitation).
- Smooth scroll + dark bg set on `html`/`body`.

## Files to create / change

- `src/data/resume.ts` — typed export with hero, about, education, currently, experience, projects, skills, achievements, contact.
- `src/styles.css` — add color tokens (`--color-bg #0a0a0a`, `--color-surface #111`, `--color-accent #e8ff47`, `--color-line #1f1f1f`, `--color-muted #5a5a5a`), font tokens (`--font-display: Syne`, `--font-mono: "DM Mono"`, `--font-label: "Space Mono"`), set body bg/text, marquee + draw keyframes.
- `src/routes/__root.tsx` — add Google Fonts `<link>` tags; update meta (title, description, og) for Ritik.
- `src/routes/index.tsx` — replace placeholder with `<PageReveal>` + composed sections, set page-specific head.
- `src/components/Navbar.tsx` — fixed, backdrop-blur, scroll-shadow border, IntersectionObserver active-link, mobile slide-in drawer.
- `src/components/PageReveal.tsx` — 400ms black overlay fade-out on mount.
- `src/components/ScrollIndicator.tsx` — looping dot-on-line.
- `src/components/Marquee.tsx` — CSS-only ticker for "Currently".
- `src/components/SectionLabel.tsx` — `// 0X — Name` left label.
- `src/components/sections/Hero.tsx`
- `src/components/sections/About.tsx`
- `src/components/sections/Experience.tsx`
- `src/components/sections/Projects.tsx`
- `src/components/sections/Skills.tsx`
- `src/components/sections/Achievements.tsx`
- `src/components/sections/Contact.tsx`
- `src/components/sections/Footer.tsx`

## Section behavior (per spec)

- Hero: 100vh, left-aligned, `clamp()` headline, "think." in accent, two CTAs (View Projects scrolls to #projects, Download Resume links to `/RITIK_SAINI.pdf` which we copy to `public/`), word-stagger Framer Motion entrance, scroll indicator bottom-right.
- About `// 01`: 2-col, rotated decorative "ABOUT" word, bio (1st person, constructed from resume), borderless education table, marquee currently strip.
- Experience `// 02`: vertical timeline, Innoveda Solutions + TechPranee, bullets verbatim, accent dot scaleY draw-in.
- Projects `// 03`: 2-col grid, PlacementGPT + PlanMyTrips, tech tags with accent border, hover border→accent + translateY -4.
- Skills `// 04`: typographic rows by category (Languages / Frameworks / Databases / ML / Tools), separators, no bars.
- Achievements `// 05`: alternating full-width rows, muted index numerals, slide-in-from-right on view.
- Contact `// 06`: "Let's build / something." with "something." accent; right-stack of plain links (email, GitHub, LinkedIn, LeetCode, Codeforces, GFG, Codolio) with hover color + `→`.
- Footer: single muted Space Mono line.

## Animation conventions

- Shared `sectionVariants` (opacity 0→1, y 60→0, ease `[0.22, 1, 0.36, 1]`, 0.6s) + `whileInView` once, amount 0.2.
- Stagger via `delayChildren: 0.1, staggerChildren: 0.08`.
- No spring on entrances. Hover transitions 200ms ease. Only hero indicator + marquee loop.

## Responsive

- Mobile: grids → 1 col, hamburger drawer (slide from right, dark bg), hero font via `clamp(2.5rem, 10vw, 8rem)`.
- No horizontal overflow (marquee uses `overflow-hidden` wrapper).

## Resume PDF

- Copy uploaded `RITIK_SAINI.pdf` into `public/RITIK_SAINI.pdf` so the Download Resume CTA serves it directly.

## Out of scope

- No backend, no Lovable Cloud, no auth, no hero photo, no testimonials, no skill bars, no light mode (per spec).

