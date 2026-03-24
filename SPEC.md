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
- Display / headings: A refined serif — use something editorial and premium (e.g., Playfair Display, DM Serif Display, or similar). NOT Archivo Black. The proposal uses a classic serif for the hero.
- Body: Outfit (weights: 300, 400, 500, 600) or a clean sans-serif that pairs well with the serif display
- Source: Google Fonts

**Logo:** PENDING — use a text wordmark for now. The company name in the nav should feel understated.

## 5. Design System — The Alternating Card Layout

**THIS IS THE KEY DESIGN PATTERN from the approved proposal:**

The page uses an alternating rhythm of:
- **Sand sections** (full-width, `#F3EEE5` background) for content blocks
- **Navy card sections** (large rounded-corner containers, `#16192E` background) for contrast blocks

These navy cards are NOT full-bleed. They are large rounded-rectangle blocks sitting on the sand background with visible margin/padding around them — like oversized cards. This creates a distinctive scrolling rhythm: sand → navy card → sand → navy card → sand → navy card.

**Hero:** Sand background. Large editorial serif headline on the left. Tilted device mockup on the right showing the site. Two CTAs below the headline. Premium and airy.

**Overall spacing:** Generous. This is an editorial layout — let it breathe. Large padding inside navy cards. Comfortable margins between sections.

## 6. Site Structure

**Single page. No CMS. Static HTML/Next.js static export.**

1. **Hero** (sand bg) — Editorial serif headline + subtext + 2 CTAs + tilted device mockup
2. **Stats bar** (can be sand or navy) — 12 years experience / 10 years as AHJ / 10-day turnaround
3. **Services section** (navy card) — 5 services:
   - Fire Department Consulting
   - Third Party Design Review
   - Code Consulting
   - Design Services
   - NFPA 241 Creation
4. **About / Authority section** (sand bg) — Credibility block. AHJ background. Why this person.
5. **Why Fire Point** (navy card) — Key differentiators
6. **FAQ** (sand bg) — 3 questions, accordion style
7. **CTA / Contact** (navy card) — Short and direct. LinkedIn + Facebook links.
8. **Footer** (sand bg) — Minimal

Adjust the sand/navy assignments as needed to maintain the alternating rhythm — the key is that dark and light sections trade off consistently with the navy blocks having large rounded corners.

## 7. Content

**Hero headline direction:** Something confident and specific about fire code expertise. Not generic consulting language. The proposal used "A stronger website presence for fire and life-safety consulting" — the production site headline should speak to what the CLIENT's customers get, not what the website is.

**FAQ:**

Q: What's your turnaround time?  
A: 10 business days. Most projects completed ahead of schedule.

Q: What's your experience working with AHJs?  
A: I served as an Authority Having Jurisdiction for 10 years. I know exactly what AHJs look for because I was one.

Q: How long have you been in the industry?  
A: 12 years in fire protection — from field inspections to code consulting to third-party review.

**CTA tone:** Short. Direct. "Contact me" energy. No fluff.

## 8. Motion Requirements (HIGH PRIORITY)

Client wants heavy scroll-driven motion throughout:
- Scroll-triggered section reveals with stagger delays (IntersectionObserver)
- Animated number counters on the stats section
- Smooth entrance animations on every section (fade up, slide in, scale)
- Hover effects on service cards and CTAs (gold glow/border animations)
- FAQ accordion with smooth expand/collapse
- Scroll progress bar at top of viewport
- Active nav highlighting on scroll
- Smooth scroll with sticky nav
- Parallax depth on background elements where appropriate
- Respect `prefers-reduced-motion`

## 9. Technical Requirements

**Stack:** Next.js 15 (App Router), static export. No CMS, no database.  
**Responsive:** 375px, 768px, 1024px, 1440px  
**Social links:** LinkedIn + Facebook (placeholder `#` URLs for now)  
**No Lighthouse auditing required.**

## 10. What "Done" Looks Like

- Single-page site matching the alternating sand/navy-card rhythm from the proposal
- Sand dominant, navy cards with large rounded corners
- Serif display headlines, sans-serif body
- All 5 services, 3 FAQ items, stats bar, CTA with social links
- Heavy scroll-triggered motion on every section
- Fully responsive
- Real copy — no lorem ipsum
- Deployed as static export
