# Fire Point Consulting — Full Design Spec

**Date:** 2026-03-24
**Status:** Approved
**Branch:** feature/fire-point-consulting

---

## 1. The Client and Audience

**Fire Point Consulting** is an independent fire protection consultant based in Holden, MA. One person. No firm overhead. The consultant has 12 years in fire protection and spent 10 of those years as an Authority Having Jurisdiction (AHJ) — the person who actually approves or rejects fire code compliance. That's the entire value proposition: he knows exactly what AHJs look for because he was one.

**Primary audience:** Property developers, architects, general contractors, and fire departments who need expert fire code guidance before or during construction. These are busy professionals managing multi-million-dollar projects. They don't want to read marketing copy. They want to know: can this person get my project past fire code review without delays?

**What they want:** Confidence that their project passes fire code review — fast, with no surprises.

**What they should do:** Contact directly via LinkedIn or Facebook. The site has exactly one conversion goal: get them to reach out.

**Secondary audience:** AHJs (Authorities Having Jurisdiction) who need third-party review support for projects in their jurisdiction.

---

## 2. Brand Feel

**This brand feels like:** A seasoned expert in a navy suit at an architecture firm's office. Quiet authority. The kind of person who walks into a code review meeting and the room relaxes because they know it's handled. Warm but not casual. Confident but not loud. The sand background is the warmth — like good paper, like a well-lit conference room. The navy card blocks are the authority — like the weight of a leather portfolio. The gold is the detail that says "this person takes their work seriously."

Think: premium architecture firm portfolio. High-end editorial magazine. A law firm that specializes in one thing and does it better than anyone.

**This brand does NOT feel like:**
- A dark-mode SaaS dashboard
- A tech startup landing page with gradients and 3D illustrations
- A generic Bootstrap consulting template with stock photos of handshakes
- Anything cold, corporate, or tech-forward
- Navy-dominant — the sand is the primary canvas, not the navy. Sand is the room. Navy is the furniture.

---

## 3. Anti-Patterns — Never Do These

- Dark-dominant themes (sand must be the dominant background color on screen)
- Floating gradient blobs with no brand connection
- Inter, Roboto, Arial, or system-ui as a primary font
- Generic stock photos of handshakes, hard hats, or office meetings
- Hero copy like "Welcome to Fire Point", "Elevate Your Business", "Solutions for Tomorrow", "Your Trusted Partner"
- Centered-everything layouts with no visual tension
- Drop shadows on every card
- Rounded corners on everything — only the navy card blocks get the large 32px radius
- Purple anything
- White background + blue accent + Inter font (the AI default trifecta)
- Building the entire site in a single pass
- Placeholder content when real copy exists in this spec
- Navy sections that go full-bleed edge-to-edge (they must float as rounded cards on sand)

---

## 4. Stack

- **Framework:** Next.js 15 (App Router), static export (`output: 'export'`)
- **Styling:** Tailwind CSS v4 (CSS-first `@theme` config in globals.css)
- **Animation:** GSAP + @gsap/react + ScrollTrigger + SplitText + ScrollSmoother (all free since GSAP 3.12)
- **Fonts:** Source Serif 4 (variable, 300–600) + DM Sans (variable, 400–700) via `next/font/google`
- **Language:** TypeScript
- **No component libraries.** No shadcn, no Radix, no MUI. Tailwind utilities + custom components only.

---

## 5. Brand Tokens

| Token | Hex | CSS Var | Tailwind | Usage |
|-------|-----|---------|----------|-------|
| Sand | `#F3EEE5` | `--color-sand` | `sand` | Primary background, text on navy |
| Navy | `#16192E` | `--color-navy` | `navy` | Card blocks, headings on sand, primary text |
| Navy Soft | `#1b3146` | `--color-navy-soft` | `navy-soft` | Hover state for navy buttons |
| Gold | `#A06E41` | `--color-gold` | `gold` | Buttons, accents, highlights, hover borders |
| Gold Soft | `rgba(160,110,65,0.2)` | `--color-gold-soft` | `gold-soft` | Subtle gold backgrounds, hover glows |
| Cream | `#FCF9F4` | `--color-cream` | `cream` | Bright variant for text on navy |
| Stone | `#d9d0c4` | `--color-stone` | `stone` | Muted borders, dividers on sand |
| Ink | `#101722` | `--color-ink` | `ink` | Deepest text color |

**Text rules:**
- Text on sand backgrounds: Navy (`#16192E`)
- Text on navy backgrounds: Sand (`#F3EEE5`) or Cream (`#FCF9F4`)
- Muted/secondary text: Gold (`#A06E41`) or a gray derived from navy
- Eyebrow labels: Gold, uppercase, letterspaced, small mono-style

---

## 6. Font Stack

| Role | Family | Weights | Usage |
|------|--------|---------|-------|
| Display | Source Serif 4 (variable) | 300, 400, 500, 600 | H1, H2, stat numbers, large quotes |
| Body | DM Sans (variable) | 400, 500, 700 | Body copy, nav links, buttons, card text |

Both loaded via `next/font/google` and self-hosted at build time. Zero external font requests.

**Sizing guidance from the proposal CSS:**
- H1 (hero): `clamp(3.7rem, 8vw, 7rem)`, font-weight 500, line-height 1.04, letter-spacing -0.03em
- H2 (section headings): `clamp(2.5rem, 4.4vw, 4.6rem)`, font-weight 500
- Body: `1.05rem`, line-height 1.75
- Eyebrow: `0.72rem`, uppercase, letter-spacing 0.16em, gold color

---

## 7. Logo

The F monogram — Art Deco geometric frame with gold metallic "F" letterform.

- `LogoNavy.png` — full logo with cream/gold on navy background. Use in the hero visual panel and footer on navy backgrounds.
- `translogo.png` — same logo on transparent background. Use in the navbar and about section on sand backgrounds. Note: the text portion is very faint on light backgrounds, so use primarily the icon portion or pair with a text wordmark.

The old lighthouse logo (`LOGO.jpg`) is **deprecated** — do not use.

**Nav treatment:** Small F monogram icon (cropped from translogo.png or used as-is) + "Firepoint Consulting" in DM Sans, weight 500. Understated. Not a large logo lockup.

---

## 8. The Alternating Card Layout — Design Rationale

This is the defining visual pattern of the site. Understanding WHY it works is critical to not breaking it.

**The rhythm:** Sand section → Navy card block → Sand section → Navy card block → Sand section → Navy card block → Sand section.

**Why this works:**
1. **Contrast creates hierarchy.** The navy cards are visually heavier. They draw the eye. This means the content inside navy cards (services, differentiators, CTA) gets more visual weight — which is exactly what we want for conversion-critical content.
2. **Sand is the room, navy is the furniture.** The sand background is always visible around and between the navy cards. It peeks through at the edges and between sections. This warmth is the brand's personality. If the navy goes full-bleed, the warmth disappears and it becomes a generic dark-mode site.
3. **The rounded corners matter.** The navy cards have `border-radius: 32px`. This softness is intentional — it makes the heavy navy feel approachable rather than institutional. It's the difference between a conference table and a boardroom slab.
4. **Editorial pacing.** The alternation creates a reading rhythm. Sand sections are breathing room. Navy cards are emphasis. Like paragraphs and pull quotes in a magazine.

**Implementation rules:**
- Navy card blocks: `max-width` constrained (e.g., `min(calc(100% - 2rem), 1200px)`), centered with auto margins, `border-radius: 32px`, generous internal padding (`clamp(1.3rem, 3vw, 3rem)` horizontal, `5.5rem` vertical)
- Sand sections: full-width background, content constrained to same max-width
- The sand MUST be visible between navy cards — at least `2rem` gap between consecutive navy blocks
- On mobile (< 640px): reduce side margins to `0.6rem` but KEEP the rounded corners and visible sand edges. The rhythm must hold on all breakpoints.
- Navy cards get a subtle box-shadow: `0 24px 50px rgba(16, 23, 34, 0.12)` — depth without heaviness

---

## 9. Site Sections — Full Content and Structure

### 9.1 Navbar (sticky, sand background)

**Structure:**
- Left: F monogram icon + "Firepoint Consulting" text wordmark
- Right: Navigation links — Services | About | FAQ | Contact
- Sticky on scroll with subtle backdrop blur

**Behavior:**
- Active section highlighting via ScrollTrigger (gold underline or text color shift on the active nav link)
- On mobile: hamburger menu or simplified horizontal scroll

**Heading level:** None (nav element, no heading)

---

### 9.2 Hero (sand background)

**Layout:** Two columns on desktop. Left column: copy. Right column: navy visual panel with authority cards.

**Left column content:**

- **Eyebrow** (gold, uppercase, letterspaced): `Fire protection consulting`
- **H1** (Source Serif 4, massive): `Fire code clarity before the first review.`
- **Subtext** (DM Sans, muted): `Independent fire code expertise for developers, architects, and fire departments. No firm overhead. No surprises at inspection.`
- **CTA buttons:**
  - Primary (gold bg, navy text): `Get Started` → links to #contact
  - Ghost (gold border, transparent bg): `Our Services` → links to #services

**Right column:**

Navy rounded panel (`border-radius: 42px`, same gradient treatment as proposal: `linear-gradient(160deg, #1f4b85 0%, #173a67 52%, #112235 100%)`). Inside: 3 overlapping glassmorphism authority cards with parallax depth:

- **Card 1** (top-right, largest): `12 Years` large serif number + `in fire protection` below
- **Card 2** (middle-left): `Former AHJ` large serif text + `10 years as Authority Having Jurisdiction` below
- **Card 3** (bottom-right): `10 Days` large serif number + `average turnaround` below

Cards have: `backdrop-filter: blur(18px)`, `background: rgba(247,241,232,0.14)`, `border: 1px solid rgba(255,255,255,0.28)`, cream text. Gold beam decorative elements behind cards (from proposal).

**Heading hierarchy:** H1 is the only H1 on the page.

---

### 9.3 Stats Bar (sand background)

**Layout:** Three stats in a horizontal row, separated by gold vertical dividers.

| Stat | Number | Label |
|------|--------|-------|
| 1 | `12+` | Years in fire protection |
| 2 | `10` | Years as Authority Having Jurisdiction |
| 3 | `10` | Business day turnaround |

Numbers in Source Serif 4, large (clamp ~3rem–5rem). Labels in DM Sans, muted navy.

**Animation:** Numbers count up from 0 when the section scrolls into view. GSAP ScrollTrigger with `snap` for clean integer counting.

---

### 9.4 Services (navy card block)

**Eyebrow:** `What we do`
**H2:** `Expertise across fire protection.`

**5 service cards** in a responsive grid (3 columns on desktop, 2 on tablet, 1 on mobile):

1. **Fire Department Consulting**
   Operational guidance for fire departments navigating complex code scenarios. From staffing reviews to policy alignment with current NFPA standards.

2. **Third Party Design Review**
   Independent review of architectural and engineering plans for fire code compliance. A second set of expert eyes before submission — catching issues that delay projects.

3. **Code Consulting**
   Direct code interpretation and compliance guidance for developers, architects, and general contractors. Clear answers on building code, fire code, and life-safety requirements.

4. **Design Services**
   Fire protection system design and layout — sprinkler systems, alarm systems, and suppression systems tailored to project requirements and local code.

5. **NFPA 241 Creation**
   Construction site fire safety plans per NFPA 241. Required for most construction permits. We create the plan, so your crew stays compliant from groundbreaking to occupancy.

**Card treatment:** Each card has a subtle gold left border accent (2px), padding, and on hover: gold border glow expands + card lifts `translateY(-6px)`.

---

### 9.5 About / Authority (sand background)

**Eyebrow:** `About`
**H2:** `A decade as the person who signs off on your project.`

**Content (left column):**
Most fire consultants come from engineering firms. This one comes from the other side of the table. After 10 years as an Authority Having Jurisdiction — the person who reviews and approves fire protection plans — I started Fire Point Consulting to help developers, architects, and fire departments get it right the first time.

12 years of direct fire protection experience. No firm overhead. No layers of project managers between you and the person doing the work. When you call Fire Point, you get the consultant who served as the AHJ, who reviewed the plans, who knows exactly what the reviewer on the other side of the table is looking for.

Based in Holden, MA. Serving projects throughout Massachusetts and New England.

**Right column:** F monogram logo displayed large (LogoNavy.png on a subtle navy background block, or translogo.png large on sand with gold accent frame).

---

### 9.6 Why Fire Point (navy card block)

**Eyebrow:** `Why Fire Point`
**H2:** `The difference is direct experience.`

**3 differentiator blocks** with large serif numbers:

**01 — Former Authority Having Jurisdiction**
Most consultants study the code. I enforced it. 10 years of reviewing and approving fire protection plans means I know exactly what gets flagged, what gets approved, and what wastes everyone's time.

**02 — One consultant, no overhead**
No account managers. No junior associates learning on your project. When you hire Fire Point, you work directly with the consultant who has the experience. That's it.

**03 — 10-day turnaround**
Most projects completed in 10 business days or less. Many ahead of schedule. No open-ended timelines. No waiting for a slot in the queue.

**Layout:** Stacked vertically or in a 3-column grid. Each block has a gold top border, large Source Serif 4 number, DM Sans headline and body.

---

### 9.7 FAQ (sand background)

**Eyebrow:** `FAQ`
**H2:** `Common questions.`

**3 accordion items:**

**Q: What's your turnaround time?**
A: 10 business days. Most projects completed ahead of schedule.

**Q: What's your experience working with AHJs?**
A: I served as an Authority Having Jurisdiction for 10 years. I know exactly what AHJs look for because I was one.

**Q: How long have you been in the industry?**
A: 12 years in fire protection — from field inspections to code consulting to third-party review.

**Accordion behavior:**
- Native `<button>` with `aria-expanded` attribute
- `aria-controls` pointing to the panel `id`
- CSS `grid-template-rows: 0fr → 1fr` transition for smooth height animation
- Gold `+` icon that rotates 45° to become `×` on expand
- Only one item open at a time (closing previous when opening new)

---

### 9.8 CTA / Contact (navy card block)

**Eyebrow:** `Contact`
**H2:** `Let's talk fire code.`
**Subtext:** `Reach out directly. No forms, no gatekeepers.`

**Social links as gold-bordered pill buttons:**
- LinkedIn → `#` (placeholder)
- Facebook → `#` (placeholder)

**Tone:** Short. Direct. "Contact me" energy. This section should feel like a firm handshake, not a marketing funnel.

---

### 9.9 Footer (sand background)

Minimal. One line:

`© 2026 Fire Point Consulting · Holden, MA`

Plus small nav links: Services | About | FAQ | Contact (same as main nav).

---

## 10. Motion System — Per-Section Specs

**Global setup:**
- GSAP + ScrollTrigger + SplitText + ScrollSmoother registered in `src/lib/gsap.ts`
- ScrollSmoother wraps the entire page for buttery smooth scrolling
- `prefers-reduced-motion`: when active, disable all GSAP animations, remove ScrollSmoother, use instant CSS fallbacks (no transforms, immediate opacity)

### Scroll Progress Bar
- **Technique:** Native CSS `animation-timeline: scroll()` — runs off main thread
- **Visual:** Gold `#A06E41` bar, 3px tall, fixed to top of viewport, grows left-to-right as user scrolls
- **Fallback:** For unsupported browsers, GSAP ScrollTrigger-based progress bar

### Navbar
- **Active highlighting:** GSAP ScrollTrigger `onEnter`/`onLeave` per section, toggling an `.active` class on the corresponding nav link (gold underline or text color)
- **Sticky behavior:** CSS `position: sticky; top: 0` with backdrop blur

### Hero
- **Headline:** GSAP SplitText splits H1 into words. Each word animates in with `from({ y: '100%', opacity: 0 })` with a mask (overflow hidden on word wrapper), staggered at 0.08s per word. Fires on page load, not scroll.
- **Subtext + CTAs:** Fade up (`from({ y: 30, opacity: 0 })`) after headline completes, stagger 0.1s
- **Authority cards:** Three cards at different `data-speed` values (0.06, 0.10, 0.14) creating parallax depth on scroll. Initial entrance: scale from 0.9 + fade up, staggered.
- **Gold beams:** CSS pseudo-elements with subtle parallax, always behind cards

### Stats Bar
- **Number counters:** GSAP `to()` with ScrollTrigger (`trigger: section, start: "top 80%"`). Interpolate from 0 to target value over 2 seconds with `ease: "power2.out"`. Use `snap: 1` for clean integers. The `+` suffix on "12+" appears after count completes.
- **Section reveal:** Fade up with stagger on the three stat blocks

### Services
- **Section reveal:** Entire navy card fades up. Then service cards stagger in (`from({ y: 40, opacity: 0 })`), 0.1s stagger delay.
- **Card hover:** CSS transition — gold left border widens from 2px to 4px, `translateY(-6px)`, subtle `box-shadow` with gold tint `0 8px 30px rgba(160,110,65,0.15)`

### About
- **Section reveal:** Left column text fades up, right column logo scales in from 0.95 with slight rotation

### Why Fire Point
- **Section reveal:** Navy card fades up. Then the 3 differentiator blocks stagger in from left (`from({ x: -30, opacity: 0 })`), 0.15s stagger.
- **Gold top borders:** Animate width from 0 to 100% on scroll enter

### FAQ
- **Section reveal:** Fade up, then accordion items stagger in
- **Accordion animation:** CSS `grid-template-rows: 0fr → 1fr` with `transition: 280ms ease`. GSAP rotates the `+` icon 45° on expand.

### CTA
- **Section reveal:** Navy card fades up. H2 does a subtle SplitText word reveal (simpler than hero — just opacity + y, no mask). Social buttons fade up with stagger.

### Footer
- **Minimal:** Simple fade up on scroll enter.

---

## 11. Responsive Breakpoints

| Breakpoint | Width | Key changes |
|-----------|-------|-------------|
| Mobile | 375px | Single column everything. Hero stacks (copy above, visual below). Nav collapses. Service cards 1-col. Stats stack vertical. Touch targets ≥ 44px. |
| Tablet | 768px | Hero still stacked. Service cards 2-col grid. Stats horizontal. FAQ full-width. |
| Desktop | 1024px | Hero two-column. Service cards 3-col (with 4th+5th wrapping). Full nav visible. |
| Wide | 1440px | Max-width container (1200px). More generous padding. Hero visual panel larger. |

**Critical rule:** The sand/navy alternating rhythm and rounded corners on navy cards must hold on ALL breakpoints. On mobile, reduce side margins but keep the rounded corners and visible sand edges.

---

## 12. Self-Check Criteria Per Pass

### After Pass 1 — Structure
Take a screenshot. Ask:
- Is every section present with real copy from this spec? No lorem ipsum, no placeholder text?
- Is the HTML semantic? One H1 (hero), H2 per section, logical H3 where needed?
- Are the FAQ questions the exact ones from this spec?
- Are all 5 services listed with their descriptions?
- Is the stats bar showing the correct 3 values?
- Does the page read correctly with zero styling — is the information architecture clear?

### After Pass 2 — Visual Direction
Take screenshots at 375px, 768px, 1024px, 1440px. Ask:
- Is sand `#F3EEE5` the dominant background color on screen (> 50% of visible area)?
- Are the navy blocks rounded cards with visible sand around them — NOT full-bleed?
- Is the serif/sans-serif font pairing loaded and applied? (Source Serif 4 for headings, DM Sans for body)
- Does the alternating sand → navy card → sand rhythm hold at every breakpoint?
- Does the gold appear only as an accent (buttons, borders, highlights) — not overwhelming?
- Does this look like the FullsiteView.png proposal — warm editorial, not dark SaaS dashboard?
- Is the logo (F monogram) placed correctly in nav and about section?

### After Pass 3 — Copy & Hierarchy
Take a screenshot at 1440px. Ask:
- Would a fire department captain or property developer know what this company does in 3 seconds?
- Is the hero headline "Fire code clarity before the first review." — not generic consulting copy?
- Is every CTA action-oriented? ("Get Started", "Our Services", "Let's talk fire code")
- Is there any filler copy that doesn't earn its space? Cut it.
- Does the heading hierarchy create clear visual rhythm? H1 largest, H2 per section, body smaller?
- Squint test: can you tell what's most important?

### After Pass 4 — Responsive & Motion
Take screenshots at all 4 widths PLUS test interactions. Ask:
- Does the SplitText hero headline animate word-by-word on page load?
- Do the stats numbers count up when you scroll to them?
- Do service cards lift and glow gold on hover?
- Does the FAQ accordion open/close smoothly? Only one at a time?
- Is the scroll progress bar visible and working (gold bar at top)?
- Does the nav highlight the active section on scroll?
- Is ScrollSmoother creating smooth scroll behavior?
- On mobile: are touch targets ≥ 44px? Does the nav work? Do stacked layouts look good?
- Does `prefers-reduced-motion` disable animations gracefully?

### After Pass 5 — QA Sweep
Full audit. Ask:
- Does every nav link scroll to the correct section?
- Does every CTA work?
- Does every hover state fire?
- Does the FAQ accordion work correctly (aria-expanded, only-one-open)?
- Is the alternating sand/navy rhythm correct at every breakpoint?
- Are meta tags set? (title, description, og:title, og:description)
- Is the favicon set (can use the F monogram)?
- Take final full-page screenshots at 375px, 768px, 1024px, 1440px — is it shippable?

---

## 13. File Structure

```
src/
  app/
    layout.tsx          # Root layout — fonts, metadata, ScrollSmoother wrapper
    page.tsx            # Section composition — imports all components in order
    globals.css         # Tailwind v4 @theme tokens, scroll progress bar, custom utilities
  components/
    Navbar.tsx          # Sticky nav with active section highlighting
    Hero.tsx            # Two-column hero with SplitText headline + authority cards
    StatsBar.tsx        # Animated number counters with gold dividers
    Services.tsx        # Navy card block with 5 service cards
    About.tsx           # Authority/credibility section with logo
    WhyFirepoint.tsx    # Navy card block with 3 differentiators
    FAQ.tsx             # Accordion with 3 questions
    CTA.tsx             # Navy card block with contact + social links
    Footer.tsx          # Minimal footer
  lib/
    gsap.ts             # GSAP + plugin registration (ScrollTrigger, SplitText, ScrollSmoother)
public/
  assets/firepoint/
    LogoNavy.png        # F monogram on navy background
    translogo.png       # F monogram on transparent background
```

---

## 14. What "Done" Looks Like

- Single-page site matching the alternating sand/navy-card rhythm from FullsiteView.png
- Sand dominant (> 50% of visible background at any scroll position)
- Navy cards with 32px border-radius, floating on sand with visible margins
- Source Serif 4 display headlines, DM Sans body — loaded via next/font, zero external requests
- F monogram logo in nav and about section
- SplitText hero headline reveal on page load
- ScrollSmoother for buttery smooth scroll
- Scroll progress bar (gold, native CSS where supported)
- All 5 services with real descriptions
- 3 FAQ items with smooth accordion
- Stats bar with animated count-up numbers
- Active nav highlighting on scroll
- Gold hover effects on service cards and CTAs
- All motion respects `prefers-reduced-motion`
- Fully responsive at 375px, 768px, 1024px, 1440px
- Real copy everywhere — zero lorem ipsum
- Deployed as Next.js static export
