# Fire Point Consulting — Client Brief

## 1. The Client

**Business name:** Fire Point Consulting
**Industry / niche:** Fire protection consulting / fire code compliance
**One-sentence description:** Independent fire protection consultant providing code consulting, third-party design review, and NFPA 241 plans for developers, architects, and fire departments.
**Location:** Holden, MA

## 2. The Audience

**Primary audience:** Property developers, architects, general contractors, and fire departments who need expert fire code guidance before or during construction.
**What do they want?** Confidence that their project will pass fire code review — fast, with no surprises.
**What should they do?** Contact directly (LinkedIn, Facebook, or contact form).
**Secondary audience:** AHJs (Authorities Having Jurisdiction) seeking third-party review support.

## 3. Brand Feel

**This brand feels like:** A premium consulting firm's editorial website — warm, confident, refined. Think high-end architecture firm portfolio. Sand background gives warmth and distinction. Navy card blocks create rhythm and weight. The gold ties it together as an accent.
**This brand does NOT feel like:** A dark-mode SaaS app, a tech startup, a generic Bootstrap consulting template, or anything cold/corporate. Not navy-dominant — the sand is the primary canvas.
**Anti-patterns:** Dark-dominant themes, floating gradient blobs, purple anything, Inter/Roboto/Arial, generic stock photos of handshakes, "Welcome to Fire Point" hero copy, centered-everything layouts.

## 4. Brand Assets

**Color palette (THESE ARE EXACT — do not substitute):**
- Sand (primary background): `#F3EEE5`
- Midnight Navy (card sections / accent blocks): `#16192E`
- Soft Gold (accent — buttons, highlights, details): `#A06E41`
- Text on sand: `#16192E` (navy)
- Text on navy: `#F3EEE5` (sand)
- Muted text: soft gold or a gray derived from navy

**Fonts:**
- Display / headings: Source Serif 4 (variable, weights 300–600) — refined editorial serif
- Body: DM Sans (variable, weights 400–700) — clean sans-serif pairing
- Source: Google Fonts via next/font/google (self-hosted at build time)

**Logo:** F monogram — Art Deco geometric frame with gold metallic accent
- `LogoNavy.png` — for navy backgrounds
- `translogo.png` — for sand/light backgrounds
- Lighthouse logo (LOGO.jpg) is DEPRECATED — do not use

## 5. Design System — The Alternating Card Layout

**THIS IS THE KEY DESIGN PATTERN from the approved proposal:**

The page uses an alternating rhythm of:
- **Sand sections** (full-width, `#F3EEE5` background) for content blocks
- **Navy card sections** (large rounded-corner containers, `#16192E` background, `border-radius: 32px`) for contrast blocks

These navy cards are NOT full-bleed. They are large rounded-rectangle blocks sitting on the sand background with visible margin/padding around them — like oversized cards. This creates a distinctive scrolling rhythm: sand → navy card → sand → navy card → sand → navy card.

**Overall spacing:** Generous editorial layout — let it breathe. Large padding inside navy cards. Comfortable margins between sections.

## 6. Site Structure

**Single page. No CMS. Next.js 15 static export.**

1. **Nav** (sticky) — F monogram logo + "Firepoint Consulting" text. Links: Services, About, FAQ, Contact. Gold underline on active section.
2. **Hero** (sand bg) — Large serif H1 "Fire code clarity before the first review." + subtext + 2 CTAs. Right side: navy panel with 3 overlapping glassmorphism authority cards with parallax depth.
3. **Stats bar** (sand) — 3 animated counters: 12+ years / 10 years AHJ / 10-day turnaround. Gold dividers.
4. **Services** (navy card) — 5 service cards: Fire Department Consulting, Third Party Design Review, Code Consulting, Design Services, NFPA 241 Creation
5. **About / Authority** (sand bg) — AHJ credibility block + F monogram logo large
6. **Why Fire Point** (navy card) — 3 differentiators with large serif numbers (01, 02, 03)
7. **FAQ** (sand bg) — 3 questions, accordion style
8. **CTA / Contact** (navy card) — "Let's talk fire code." + LinkedIn + Facebook links
9. **Footer** (sand bg) — Minimal. Company name, Holden MA, copyright.

## 7. Content

**Hero headline:** "Fire code clarity before the first review."
**Hero subtext:** Direction — independent expertise that eliminates surprises at inspection.
**Hero CTAs:** Gold primary "Get Started" + ghost "Our Services"

**FAQ:**
Q: What's your turnaround time?
A: 10 business days. Most projects completed ahead of schedule.

Q: What's your experience working with AHJs?
A: I served as an Authority Having Jurisdiction for 10 years. I know exactly what AHJs look for because I was one.

Q: How long have you been in the industry?
A: 12 years in fire protection — from field inspections to code consulting to third-party review.

**CTA tone:** Short. Direct. "Let's talk fire code." energy. No fluff.

## 8. Motion Requirements (HIGH PRIORITY — Awwwards-tier)

- **Hero headline:** GSAP SplitText word-by-word mask reveal on load
- **Smooth scroll:** GSAP ScrollSmoother wrapper on entire page
- **Scroll progress bar:** Native CSS `animation-timeline: scroll()` — gold bar at top
- **Section reveals:** GSAP ScrollTrigger fade-up + stagger on all sections
- **Authority cards:** Parallax depth — 3 cards at different scroll speeds
- **Number counters:** GSAP ScrollTrigger animated count-up on stats section
- **Service card hovers:** Gold border glow + translateY(-6px) lift
- **Heading accents:** Gold underline draw-on via GSAP on scroll enter
- **FAQ accordion:** CSS grid-template-rows 0fr→1fr + icon rotation
- **Nav active state:** ScrollTrigger onEnter/onLeave toggling active class
- **Reduced motion:** `prefers-reduced-motion` disables all GSAP, CSS fallbacks

## 9. Technical Requirements

**Stack:** Next.js 15 (App Router), Tailwind CSS v4, GSAP + @gsap/react, TypeScript, static export
**Responsive:** 375px, 768px, 1024px, 1440px
**Social links:** LinkedIn + Facebook (placeholder `#` URLs for now)

## 10. What "Done" Looks Like

- Single-page site matching the alternating sand/navy-card rhythm
- Sand dominant, navy cards with 32px border-radius
- Source Serif 4 display headlines, DM Sans body
- SplitText hero headline reveal + ScrollSmoother + full scroll-driven motion
- All 5 services, 3 FAQ items, stats bar, CTA with social links
- Fully responsive at all 4 breakpoints
- Real copy — no lorem ipsum
- Deployed as static export
