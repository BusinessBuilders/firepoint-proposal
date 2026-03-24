# Fire Point Consulting — Claude Code Prompt

Read `CLAUDE.md` and `briefs/fire-point-consulting.md` before writing any code. Read and use the **frontend-design skill**  before touching any UI. Follow the 5-pass build process from the CLAUDE.md — do NOT build the full site in one shot.

## The Design

This is NOT a dark-mode site. Sand `#F3EEE5` is the dominant background. The page uses an alternating rhythm of sand sections and large rounded-corner navy `#16192E` card blocks. Soft Gold `#A06E41` is the accent for buttons, highlights, and details. The hero uses a refined serif display font (editorial, premium). See the full design spec in the brief.

## Pass 1 — Structure

Build all sections with semantic HTML and real copy from the brief. No styling yet.

Sections in order:
1. Hero (sand bg) — serif headline + subtext + 2 CTAs + tilted device mockup area
2. Stats bar — 12 years experience / 10 years as AHJ / 10-day turnaround
3. Services (navy card block) — 5 service cards: Fire Department Consulting, Third Party Design Review, Code Consulting, Design Services, NFPA 241 Creation
4. About / Authority (sand bg) — AHJ credibility, 12 years, direct experience
5. Why Fire Point (navy card block) — key differentiators
6. FAQ (sand bg) — 3 questions with answers from the brief, accordion
7. CTA / Contact (navy card block) — short, direct, LinkedIn + Facebook links
8. Footer (sand bg) — minimal

Use the exact copy and FAQ answers from the brief. No lorem ipsum.

## Pass 2 — Visual Direction

Apply the brand system using the frontend-design skill for guidance on typography, color, and spatial composition.

- **Background:** Sand `#F3EEE5` as primary canvas
- **Navy blocks:** `#16192E` as large rounded-corner card containers (NOT full-bleed) sitting on the sand with visible padding/margin around them. Large border-radius. This is the defining design pattern.
- **Gold:** `#A06E41` for button fills, accent borders, highlights, hover states
- **Display font:** Refined editorial serif from Google Fonts (Playfair Display, DM Serif Display, or similar premium serif). NOT a sans-serif for headlines.
- **Body font:** Outfit or similar clean sans-serif
- **Text on sand:** Navy. Text on navy: Sand.
- **Layout:** Editorial. Generous whitespace. Airy. Let it breathe.
- **The alternating rhythm of sand → navy card → sand → navy card is the core visual identity. Maintain it.**

## Pass 3 — Copy & Hierarchy

- Hero headline must be specific to fire code expertise and the client's value prop — NOT "Welcome to Fire Point" or generic consulting language
- CTAs should be direct and action-oriented
- Cut any filler that doesn't earn its space
- Squint test: hierarchy must be clear in 3 seconds
- Every word intentional

## Pass 4 — Responsive & Motion

Client wants HEAVY scroll-driven motion throughout the site:

- Scroll-triggered section reveals with stagger delays (IntersectionObserver)
- Animated number counters on stats section (count up on scroll into view)
- Smooth entrance animations on every section (fade up, slide in, scale in)
- Hover effects on service cards and CTAs (gold glow, border animations, lift)
- FAQ accordion with smooth expand/collapse animation
- Scroll progress bar fixed at top of viewport
- Active nav section highlighting on scroll
- Sticky nav with smooth scroll behavior
- Parallax depth on background elements where it makes sense
- Respect `prefers-reduced-motion`
- Responsive breakpoints: 375px, 768px, 1024px, 1440px
- Touch targets ≥ 44px on mobile

## Pass 5 — QA

- Check every link, hover state, and animation
- Test mobile nav, FAQ accordion, all interactive elements
- Verify the alternating sand/navy rhythm holds on all breakpoints
- Meta tags and OG basics
- List and fix remaining issues
- No Lighthouse audit needed

## Notes

- LinkedIn and Facebook links are `#` placeholders for now
- No logo file yet — use understated text wordmark in the nav
- No CMS, no database — static export only
- The proposal screenshot is the design reference — match that alternating card rhythm
