# Fire Point Consulting Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. **Every subagent MUST invoke the frontend-design skill before writing any UI code.** Use Opus model for all frontend agents.

**Goal:** Build a single-page production site for Fire Point Consulting — a premium editorial site with sand/navy alternating card rhythm, heavy scroll-driven motion, and static export.

**Architecture:** Next.js 15 App Router with static export. Nine section components composed in page.tsx. GSAP handles all scroll-driven motion (ScrollTrigger, SplitText, ScrollSmoother). Tailwind CSS v4 with CSS-first @theme config for brand tokens. No component libraries.

**Tech Stack:** Next.js 15, Tailwind CSS v4, GSAP + @gsap/react + ScrollTrigger + SplitText + ScrollSmoother, TypeScript, Source Serif 4 + DM Sans (next/font/google)

**Spec:** `docs/superpowers/specs/2026-03-24-fire-point-consulting-design.md`
**Brief:** `briefs/fire-point-consulting.md`
**Design reference:** `FullsiteView.png` (alternating sand/navy card rhythm)
**Logo:** `LogoNavy.png` (navy bg), `translogo.png` (transparent bg)

**Critical rules for all agents:**
1. Read the full spec before writing any code
2. Invoke the **frontend-design skill** before writing any UI code
3. Sand `#F3EEE5` is the dominant background — NOT navy
4. Navy cards are NOT full-bleed — they float with 32px radius on sand
5. Use exact copy from the spec — zero lorem ipsum
6. Source Serif 4 for headings, DM Sans for body — no Inter, no Roboto, no Arial
7. No Co-Authored-By lines in commits

---

## Phase 0: Project Scaffold

### Task 1: Initialize Next.js 15 project

**Files:**
- Create: `site/` (entire Next.js scaffold)
- Create: `site/next.config.ts`

- [ ] **Step 1: Create Next.js 15 project**

```bash
cd /home/magiccat/Nova-Rig/Firepoint
npx create-next-app@latest site --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
# Answer prompts: No to React Compiler, Yes to AGENTS.md (or skip)
```

- [ ] **Step 2: Configure static export**

In `site/next.config.ts`, set output to export:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

- [ ] **Step 3: Install GSAP**

```bash
cd site
npm install gsap @gsap/react
```

- [ ] **Step 4: Verify build works**

```bash
npm run build
```

Expected: Build succeeds with static export.

- [ ] **Step 5: Initialize git and commit**

```bash
cd /home/magiccat/Nova-Rig/Firepoint/site
git init
git add .
git commit -m "chore: initialize Next.js 15 project with Tailwind v4 and GSAP"
```

---

### Task 2: Configure brand tokens, fonts, and globals.css

**Files:**
- Modify: `site/src/app/layout.tsx`
- Modify: `site/src/app/globals.css`

- [ ] **Step 1: Set up fonts in layout.tsx**

Replace the default layout with Source Serif 4 + DM Sans loaded via `next/font/google`. Apply DM Sans as the body font. Export Source Serif 4 as a CSS variable for use in Tailwind.

```tsx
// site/src/app/layout.tsx
import type { Metadata } from "next";
import { Source_Serif_4, DM_Sans } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fire Point Consulting | Fire Code Compliance & Consulting",
  description:
    "Independent fire protection consultant providing code consulting, third-party design review, and NFPA 241 plans. 12 years experience. Former AHJ. Holden, MA.",
  openGraph: {
    title: "Fire Point Consulting | Fire Code Compliance & Consulting",
    description:
      "Independent fire protection consultant. 12 years experience. Former Authority Having Jurisdiction. 10-day turnaround.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${dmSans.variable}`}>
      <body className="font-body text-navy bg-sand antialiased">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Configure Tailwind v4 @theme tokens in globals.css**

Replace the default globals.css with the brand token system. Tailwind v4 uses `@theme` directives in CSS instead of a config file.

```css
/* site/src/app/globals.css */
@import "tailwindcss";

@theme {
  --color-sand: #F3EEE5;
  --color-navy: #16192E;
  --color-navy-soft: #1b3146;
  --color-gold: #A06E41;
  --color-gold-soft: rgba(160, 110, 65, 0.2);
  --color-cream: #FCF9F4;
  --color-stone: #d9d0c4;
  --color-ink: #101722;

  --font-display: var(--font-display);
  --font-body: var(--font-body);

  --radius-xl: 32px;
  --radius-lg: 24px;
  --radius-md: 18px;

  --shadow-card: 0 24px 50px rgba(16, 23, 34, 0.12);
  --shadow-soft: 0 30px 60px rgba(17, 34, 53, 0.08);
}

/* Scroll progress bar — native CSS scroll-driven animation */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--color-gold);
  transform-origin: left;
  transform: scaleX(0);
  z-index: 100;
  animation: scroll-progress linear;
  animation-timeline: scroll();
}

@keyframes scroll-progress {
  to {
    transform: scaleX(1);
  }
}

/* Eyebrow utility */
.eyebrow {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--color-gold);
  font-weight: 500;
}

/* Navy card block — the core design pattern */
.navy-card {
  background: var(--color-navy);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-card);
  color: var(--color-cream);
  width: min(calc(100% - 2rem), 1200px);
  margin-left: auto;
  margin-right: auto;
  padding: 5.5rem clamp(1.3rem, 3vw, 3rem);
}

/* Sand section — content constrained */
.sand-section {
  width: min(calc(100% - 2rem), 1200px);
  margin-left: auto;
  margin-right: auto;
  padding: 5.5rem 0;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .scroll-progress {
    animation: none;
    transform: scaleX(1);
    opacity: 0.3;
  }
}

@media (max-width: 640px) {
  .navy-card,
  .sand-section {
    width: min(calc(100% - 1.2rem), 1200px);
  }
}
```

Note: Tailwind v4's `@theme` directive may need adjustment based on the actual installed version. The font CSS variables from `next/font` are injected as `--font-display` and `--font-body` on the html element, and referenced in @theme. If Tailwind v4 has a different mechanism for custom font families, adapt accordingly — check the Tailwind v4 docs.

- [ ] **Step 3: Verify fonts load**

```bash
npm run dev
# Open http://localhost:3000 and inspect — Source Serif 4 and DM Sans should be loaded
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: configure brand tokens, fonts, and globals.css"
```

---

### Task 3: Set up GSAP library module

**Files:**
- Create: `site/src/lib/gsap.ts`

- [ ] **Step 1: Create GSAP registration module**

All GSAP plugin registration happens here. Components import `gsap` from this module only — never directly from `gsap`.

```ts
// site/src/lib/gsap.ts
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

export { gsap, ScrollTrigger, SplitText, ScrollSmoother, useGSAP };
```

Note: SplitText and ScrollSmoother became free in GSAP 3.12+. If the installed version doesn't include them, check `gsap/dist/` for the plugin files or install from the GSAP npm package. If SplitText is not available in the npm package, implement a custom word-splitting approach as a fallback (split text into span-wrapped words manually).

- [ ] **Step 2: Commit**

```bash
git add src/lib/gsap.ts
git commit -m "feat: set up GSAP library with ScrollTrigger, SplitText, ScrollSmoother"
```

---

### Task 4: Copy logo assets

**Files:**
- Create: `site/public/assets/firepoint/LogoNavy.png`
- Create: `site/public/assets/firepoint/translogo.png`

- [ ] **Step 1: Copy logos from parent directory**

```bash
mkdir -p site/public/assets/firepoint
cp /home/magiccat/Nova-Rig/Firepoint/LogoNavy.png site/public/assets/firepoint/
cp /home/magiccat/Nova-Rig/Firepoint/translogo.png site/public/assets/firepoint/
```

- [ ] **Step 2: Commit**

```bash
cd site
git add public/assets/firepoint/
git commit -m "feat: add Firepoint logo assets"
```

---

## Phase 1: Pass 1 — Structure (Semantic HTML, Real Copy, No Styling)

> Read spec sections 9.1–9.9 for exact copy. Every word comes from the spec. No lorem ipsum.

### Task 5: Create page.tsx shell and all section components with real copy

**Files:**
- Modify: `site/src/app/page.tsx`
- Create: `site/src/components/Navbar.tsx`
- Create: `site/src/components/Hero.tsx`
- Create: `site/src/components/StatsBar.tsx`
- Create: `site/src/components/Services.tsx`
- Create: `site/src/components/About.tsx`
- Create: `site/src/components/WhyFirepoint.tsx`
- Create: `site/src/components/FAQ.tsx`
- Create: `site/src/components/CTA.tsx`
- Create: `site/src/components/Footer.tsx`

This is a single task because all components are pure structure with zero logic. Each component is a simple function returning semantic HTML with the exact copy from the spec. No styling, no interactivity, no animation.

- [ ] **Step 1: Create all 9 components**

Each component exports a default function that returns semantic HTML. Use the exact copy from spec sections 9.1–9.9. Key rules:
- One `<h1>` in Hero only: "Fire code clarity before the first review."
- Each section gets an `<h2>` — use the exact headings from the spec
- Services get `<h3>` for each service name
- FAQ uses `<button>` elements with `aria-expanded="false"`
- All 5 service descriptions are from spec section 9.4
- All 3 FAQ Q&As are from spec section 9.7
- Stats: 12+, 10, 10 with labels from spec section 9.3
- About: full paragraphs from spec section 9.5
- WhyFirepoint: 01/02/03 blocks from spec section 9.6
- CTA: "Let's talk fire code." from spec section 9.8
- Footer: "© 2026 Fire Point Consulting · Holden, MA"
- Section IDs for nav: `id="services"`, `id="about"`, `id="faq"`, `id="contact"`
- Hero authority cards: 3 cards with the credential text from spec 9.2

**Navbar.tsx** — `<nav>` with logo text + 4 links (Services, About, FAQ, Contact)
**Hero.tsx** — `<section>` with H1, eyebrow, subtext, 2 CTA links, 3 authority card divs
**StatsBar.tsx** — `<section>` with 3 stat blocks (number + label)
**Services.tsx** — `<section id="services">` with eyebrow, H2, 5 articles (H3 + paragraph each)
**About.tsx** — `<section id="about">` with eyebrow, H2, 2 paragraphs, logo image
**WhyFirepoint.tsx** — `<section>` with eyebrow, H2, 3 blocks (number + H3 + paragraph)
**FAQ.tsx** — `<section id="faq">` with eyebrow, H2, 3 accordion items (button + panel)
**CTA.tsx** — `<section id="contact">` with eyebrow, H2, subtext, 2 social link buttons
**Footer.tsx** — `<footer>` with copyright + nav links

- [ ] **Step 2: Compose in page.tsx**

```tsx
// site/src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyFirepoint from "@/components/WhyFirepoint";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <About />
        <WhyFirepoint />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Verify page renders with all content**

```bash
npm run dev
# Open http://localhost:3000
# Should see all sections with unstyled real copy — ugly but complete
```

- [ ] **Step 4: Pass 1 self-check**

Take a screenshot. Verify:
- Every section present with real copy from the spec?
- One H1 ("Fire code clarity before the first review."), H2 per section?
- All 5 services listed with descriptions?
- All 3 FAQ questions with answers?
- Stats: 12+, 10, 10 with correct labels?
- About section has full credibility copy?
- CTA says "Let's talk fire code."?
- Footer: "© 2026 Fire Point Consulting · Holden, MA"?

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: Pass 1 complete — all sections with semantic HTML and real copy"
```

---

## Phase 2: Pass 2 — Visual Direction (Brand System, Layout, No Animation)

> Read the spec sections 5 (tokens), 6 (fonts), 8 (card layout rationale). Invoke **frontend-design skill** before styling. Sand is the room. Navy is the furniture.

### Task 6: Style the layout rhythm and Navbar

**Files:**
- Modify: `site/src/components/Navbar.tsx`
- Modify: `site/src/app/globals.css` (if needed)

- [ ] **Step 1: Apply the alternating sand/navy card rhythm**

Add Tailwind classes to all components following this pattern:
- Sand sections: use `.sand-section` class (defined in globals.css)
- Navy card sections (Services, WhyFirepoint, CTA): use `.navy-card` class
- Hero and StatsBar: sand background, use `.sand-section`
- About and FAQ: sand background, use `.sand-section`
- Footer: sand background

The sand/navy rhythm is: Nav(sand) → Hero(sand) → Stats(sand) → Services(**navy card**) → About(sand) → WhyFirepoint(**navy card**) → FAQ(sand) → CTA(**navy card**) → Footer(sand)

- [ ] **Step 2: Style Navbar**

Sticky nav on sand. Left: logo image (translogo.png, 40px height) + "Firepoint Consulting" in DM Sans 500. Right: nav links. Backdrop blur when scrolled. Gold text on hover.

```
position: sticky, top: 0, z-index: 50
backdrop-filter: blur(12px) when scrolled
padding: 1.5rem 0
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: apply sand/navy layout rhythm and style Navbar"
```

---

### Task 7: Style Hero section

**Files:**
- Modify: `site/src/components/Hero.tsx`

- [ ] **Step 1: Build two-column hero layout**

Left column: eyebrow (gold), H1 (Source Serif 4, massive serif with gradient clip), subtext (muted), 2 CTA buttons (gold primary + ghost).

Right column: navy rounded panel (`border-radius: 42px`, gradient bg `linear-gradient(160deg, #1f4b85 0%, #173a67 52%, #112235 100%)`), 3 glassmorphism authority cards positioned absolutely inside.

Hero is `min-height: 100svh`, grid on desktop (1.1fr / 0.9fr), stacked on mobile.

**CTA button styles:**
- Primary: `bg-gold text-navy rounded-full px-6 py-3 font-medium hover:translate-y-[-2px]`
- Ghost: `border border-gold/40 bg-white/60 text-navy rounded-full px-6 py-3 hover:border-gold/60`

**Authority cards:**
- `backdrop-filter: blur(18px)`, `bg-cream/[0.14]`, `border border-white/[0.28]`
- Card 1 (top-right): "12 Years" + "in fire protection"
- Card 2 (middle-left): "Former AHJ" + "10 years as Authority Having Jurisdiction"
- Card 3 (bottom-right): "10 Days" + "average turnaround"
- Gold beam pseudo-elements behind cards

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "feat: style Hero with two-column layout and authority cards"
```

---

### Task 8: Style StatsBar, Services, About sections

**Files:**
- Modify: `site/src/components/StatsBar.tsx`
- Modify: `site/src/components/Services.tsx`
- Modify: `site/src/components/About.tsx`

- [ ] **Step 1: Style StatsBar**

Three stats in horizontal row on sand. Large Source Serif 4 numbers. DM Sans labels. Gold vertical dividers between stats (1px wide, 50% height). On mobile: stack vertical with horizontal gold dividers instead.

- [ ] **Step 2: Style Services (navy card)**

Navy card block with eyebrow, H2, and 5 service cards in responsive grid (3-col desktop, 2-col tablet, 1-col mobile). Each card: subtle `bg-cream/[0.08]` background, `border border-cream/[0.1]`, `rounded-[24px]`, gold left border accent (2px). Padding `1.6rem`.

- [ ] **Step 3: Style About**

Sand section. Two columns on desktop: left column with H2 + body paragraphs, right column with logo (LogoNavy.png displayed large in a subtle navy-tinted rounded block or just the image). Gold accent rule under the H2.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: style StatsBar, Services, and About sections"
```

---

### Task 9: Style WhyFirepoint, FAQ, CTA, Footer

**Files:**
- Modify: `site/src/components/WhyFirepoint.tsx`
- Modify: `site/src/components/FAQ.tsx`
- Modify: `site/src/components/CTA.tsx`
- Modify: `site/src/components/Footer.tsx`

- [ ] **Step 1: Style WhyFirepoint (navy card)**

Navy card block. Eyebrow + H2. Three differentiator blocks — each with gold top border (2px), large Source Serif 4 number (01, 02, 03), DM Sans H3 + paragraph. Grid: 3-col desktop, 1-col mobile.

- [ ] **Step 2: Style FAQ (sand)**

Sand section. Eyebrow + H2. Three accordion items with: `bg-white/70 border border-navy/[0.08] rounded-[18px]`. Button full-width, text-left, padding 1.35rem. Gold `+` pseudo-element on right.

- [ ] **Step 3: Style CTA (navy card)**

Navy card with gradient treatment (like proposal: `radial-gradient(circle at top right, rgba(160,110,65,0.25), transparent 34%), linear-gradient(145deg, #112235, #1b4273)`). Eyebrow + H2 "Let's talk fire code." + subtext. Two gold-bordered pill buttons for LinkedIn and Facebook.

- [ ] **Step 4: Style Footer**

Sand background. Centered text: "© 2026 Fire Point Consulting · Holden, MA". Small nav links below. Minimal padding.

- [ ] **Step 5: Pass 2 self-check**

Take screenshots at 375px, 768px, 1024px, 1440px. Verify:
- Sand `#F3EEE5` dominant (> 50% visible area)?
- Navy blocks are rounded cards floating on sand — NOT full-bleed?
- Source Serif 4 on headings, DM Sans on body?
- Alternating sand → navy → sand rhythm holds at every breakpoint?
- Gold appears only as accent?
- Matches FullsiteView.png editorial warmth?
- Logo placed in nav and about?

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: Pass 2 complete — full visual direction applied"
```

---

## Phase 3: Pass 3 — Copy & Hierarchy

### Task 10: Refine copy, typography hierarchy, and CTA language

**Files:**
- Potentially modify: any component with copy adjustments

- [ ] **Step 1: Audit copy against spec**

Walk through every section and verify:
- Hero H1 is exactly: "Fire code clarity before the first review."
- Hero subtext is exactly from spec 9.2
- All 5 service names and descriptions match spec 9.4 word-for-word
- All 3 FAQ Q&As match spec 9.7 word-for-word
- About copy matches spec 9.5
- WhyFirepoint copy matches spec 9.6
- CTAs: "Get Started", "Our Services", "Let's talk fire code."

- [ ] **Step 2: Verify typographic hierarchy**

- H1 is the largest text on the page (clamp 3.7rem–7rem)
- H2s are clearly secondary (clamp 2.5rem–4.6rem)
- Body text is readable (1.05rem, line-height 1.75)
- Eyebrows are small gold uppercase (0.72rem)
- Gold `::after` accent rule under H2s (4.25rem wide, 2px tall)
- Squint test: hierarchy clear in 3 seconds?

- [ ] **Step 3: Cut filler**

Read every line of copy. Does it earn its place? If a fire department captain wouldn't care about it, cut it.

- [ ] **Step 4: Pass 3 self-check**

Screenshot at 1440px. Verify:
- Would a property developer know what this company does in 3 seconds?
- No generic consulting copy?
- Every CTA action-oriented?
- Heading hierarchy creates clear visual rhythm?

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: Pass 3 complete — copy and hierarchy refined"
```

---

## Phase 4: Pass 4 — Responsive & Motion

### Task 11: Set up ScrollSmoother and scroll progress bar

**Files:**
- Modify: `site/src/app/layout.tsx` or `site/src/app/page.tsx`
- Modify: `site/src/lib/gsap.ts` (verify plugins)

- [ ] **Step 1: Wrap page content in ScrollSmoother structure**

ScrollSmoother requires a wrapper > content structure:
```html
<div id="smooth-wrapper">
  <div id="smooth-content">
    <!-- all page content -->
  </div>
</div>
```

Create a client component `SmoothScroller.tsx` that initializes ScrollSmoother on mount using `useGSAP`. If ScrollSmoother is not available in the GSAP npm package, skip this step and rely on native `scroll-behavior: smooth` instead.

- [ ] **Step 2: Verify scroll progress bar works**

The CSS scroll-progress animation (defined in globals.css) should already work via native `animation-timeline: scroll()`. Open the page and verify the gold bar grows as you scroll.

If browser doesn't support `animation-timeline`, add a GSAP fallback in `SmoothScroller.tsx`:
```ts
gsap.to(".scroll-progress", {
  scaleX: 1,
  ease: "none",
  scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: true }
});
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: set up ScrollSmoother and scroll progress bar"
```

---

### Task 12: Hero SplitText animation + authority card parallax

**Files:**
- Modify: `site/src/components/Hero.tsx`

- [ ] **Step 1: Add SplitText word-by-word reveal on H1**

In Hero.tsx, use `useGSAP` hook to:
1. Split the H1 into words via SplitText (or manual word-splitting if SplitText unavailable)
2. Set each word wrapper to `overflow: hidden`
3. Animate each word `from({ y: '100%', opacity: 0 })` with 0.08s stagger
4. After headline completes, fade up subtext + CTAs (`from({ y: 30, opacity: 0 })`, 0.1s stagger)

This animation fires on page load, NOT on scroll.

**Fallback if SplitText unavailable:** Split the headline text into `<span>` elements manually in JSX, wrap each in an overflow-hidden container, and animate with GSAP.

- [ ] **Step 2: Add parallax to authority cards**

Three cards with `data-speed` attributes (0.06, 0.10, 0.14). Use ScrollTrigger to translate cards at different rates on scroll, creating depth.

Initial entrance: each card scales from 0.9 + fades up, staggered at 0.15s.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add SplitText hero animation and authority card parallax"
```

---

### Task 13: Section reveal animations (all sections)

**Files:**
- Modify: all section components or create a shared `useReveal` hook

- [ ] **Step 1: Create a reusable reveal pattern**

Option A: Custom hook `useScrollReveal(ref, options)` that sets up a ScrollTrigger `from({ y: 40, opacity: 0 })` animation on the ref element.

Option B: Add `data-reveal` attributes to elements and batch-initialize ScrollTrigger in a single client component.

Either way, every section should fade up when it enters the viewport. Children within sections should stagger (0.1s between elements).

Sections and their reveal behavior:
- **StatsBar:** Fade up, then 3 stat blocks stagger in
- **Services:** Navy card fades up, then 5 service cards stagger in
- **About:** Left column fades up, right column (logo) scales in from 0.95
- **WhyFirepoint:** Navy card fades up, then 3 differentiator blocks stagger in from left (x: -30)
- **FAQ:** Fade up, then 3 accordion items stagger in
- **CTA:** Navy card fades up, H2 word reveal (simpler than hero), social buttons stagger
- **Footer:** Simple fade up

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "feat: add ScrollTrigger reveal animations to all sections"
```

---

### Task 14: Stats counter animation

**Files:**
- Modify: `site/src/components/StatsBar.tsx`

- [ ] **Step 1: Animate number counters**

Use `useGSAP` with ScrollTrigger to count numbers from 0 to target:
- `12` → count up, then append `+` after animation completes
- `10` → count up (AHJ years)
- `10` → count up (turnaround days)

```ts
gsap.to(counterRef, {
  innerText: targetValue,
  duration: 2,
  ease: "power2.out",
  snap: { innerText: 1 },
  scrollTrigger: {
    trigger: sectionRef,
    start: "top 80%",
    once: true,
  },
});
```

The `+` suffix on "12+" should appear after the counter finishes (use `onComplete` callback).

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "feat: add animated number counters on stats bar"
```

---

### Task 15: Service card hover effects + FAQ accordion interaction

**Files:**
- Modify: `site/src/components/Services.tsx`
- Modify: `site/src/components/FAQ.tsx`

- [ ] **Step 1: Add service card hover effects**

CSS transitions on service cards:
- Gold left border: 2px → 4px on hover
- `translateY(-6px)` lift
- Subtle gold box-shadow: `0 8px 30px rgba(160,110,65,0.15)`
- Transition: `300ms cubic-bezier(0.2, 0.8, 0.2, 1)`

- [ ] **Step 2: Implement FAQ accordion**

FAQ.tsx needs client-side interactivity (`"use client"`):
- State: `openIndex` (number | null) — only one open at a time
- Click handler: toggle `aria-expanded`, set `openIndex`
- Panel: `grid-template-rows: 0fr` (closed) → `1fr` (open) with `transition: 280ms ease`
- Panel content: `overflow: hidden` inside the grid row
- Icon: `+` rotates 45° to `×` via CSS transform when `aria-expanded="true"`
- Bottom padding on panel content appears when open

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add service card hovers and FAQ accordion interaction"
```

---

### Task 16: Nav active highlighting + mobile responsive

**Files:**
- Modify: `site/src/components/Navbar.tsx`
- Potentially modify: all components for responsive adjustments

- [ ] **Step 1: Add active section highlighting**

Make Navbar a client component. Use `useGSAP` to set up ScrollTrigger for each section (`#services`, `#about`, `#faq`, `#contact`). On `onEnter`/`onEnterBack`, toggle an `.active` class on the corresponding nav link. Active style: gold text color or gold underline.

- [ ] **Step 2: Mobile nav**

On screens < 768px: hide nav links behind a hamburger button. Simple slide-down menu or sheet. Touch targets ≥ 44px.

- [ ] **Step 3: Responsive pass on all components**

Walk through every component at 375px, 768px, 1024px, 1440px:
- Hero: stacks to single column below 1024px
- Services: 3-col → 2-col → 1-col
- Stats: horizontal → vertical below 768px
- WhyFirepoint: 3-col → 1-col
- About: 2-col → 1-col
- Navy cards keep rounded corners and visible sand edges at all sizes
- Touch targets ≥ 44px on mobile

- [ ] **Step 4: Add prefers-reduced-motion handling**

In the GSAP setup, check `window.matchMedia('(prefers-reduced-motion: reduce)')`. If true, skip all GSAP animations, don't initialize ScrollSmoother. The CSS fallback in globals.css already handles `animation-duration: 0.01ms`.

- [ ] **Step 5: Pass 4 self-check**

Screenshots at all 4 widths + test interactions:
- SplitText hero headline animates word-by-word on load?
- Stats count up on scroll?
- Service cards lift and glow on hover?
- FAQ accordion opens/closes smoothly, one at a time?
- Scroll progress bar visible and working?
- Nav highlights active section?
- Mobile: touch targets ≥ 44px? Nav works? Stacked layouts look good?
- prefers-reduced-motion disables animations gracefully?

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: Pass 4 complete — responsive layout and full motion system"
```

---

## Phase 5: Pass 5 — QA Sweep

### Task 17: Full QA audit and meta tags

**Files:**
- Modify: `site/src/app/layout.tsx` (metadata refinement)
- Potentially modify: any component with issues

- [ ] **Step 1: Link audit**

Verify every nav link scrolls to the correct section. Verify CTA buttons link to correct anchors (#contact, #services). Social links are `#` placeholders — verify they're there.

- [ ] **Step 2: Interaction audit**

- FAQ accordion: aria-expanded toggles correctly, only one open at a time
- All hover states fire on desktop
- Mobile nav opens/closes
- Scroll progress bar works

- [ ] **Step 3: Visual audit at all breakpoints**

Take full-page screenshots at 375px, 768px, 1024px, 1440px.
- Sand/navy alternating rhythm holds?
- No broken layouts?
- Text readable everywhere?
- Gold accents consistent?

- [ ] **Step 4: Meta tags**

Verify in layout.tsx:
- `<title>`: "Fire Point Consulting | Fire Code Compliance & Consulting"
- `<meta name="description">`: real description of services
- og:title, og:description set
- Consider adding favicon using the F monogram (crop from translogo.png, convert to .ico/.svg)

- [ ] **Step 5: Build and verify export**

```bash
npm run build
npx serve out
# Open http://localhost:3000 and verify the static export works
```

- [ ] **Step 6: Final Pass 5 self-check**

- Every nav link works?
- Every CTA works?
- Every hover state fires?
- FAQ accordion works correctly?
- Sand/navy rhythm correct at every breakpoint?
- Meta tags set?
- Take final screenshots — is it shippable?

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: Pass 5 complete — QA sweep, meta tags, production ready"
```

---

## Execution Notes

- **Git:** All commits go to the local repo. No Co-Authored-By lines. Push to GitHub when ready.
- **GSAP plugins:** SplitText and ScrollSmoother were made free in GSAP 3.12. If they're not in the npm `gsap` package, check `gsap/dist/` or the GSAP website for installation instructions. Implement manual fallbacks if needed (custom word splitting, native smooth scroll).
- **Tailwind v4:** The `@theme` directive syntax may vary. Check the installed version's docs. If `@theme` doesn't work, use `@layer theme { :root { ... } }` pattern or CSS custom properties directly.
- **Static export:** `output: 'export'` means no server-side features. All interactivity must be client-side. GSAP, FAQ accordion, and nav highlighting all need `"use client"` directive.
- **Frontend-design skill:** Every agent touching UI code MUST invoke this skill first. It provides guidance on typography, color, spatial composition, and motion that prevents generic AI defaults.
