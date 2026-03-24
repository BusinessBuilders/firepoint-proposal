# CLAUDE.md — Business Builders Web Development Workflow

> Built from a proven AI website workflow. The core principle: one-shot prompting gives you a disposable mockup. A branded workflow gives you something shippable.

## The Rule

Never start building until you've read the client brief in `briefs/`. No brief, no code. The brief is the brain transplant for the project — stop rediscovering the client's taste every single run.

## Stack Defaults

- **Framework:** Next.js 15 (App Router), static export (`output: 'export'`) unless brief says otherwise
- **Styling:** Tailwind CSS 4, no component libraries unless the brief specifies
- **Fonts:** Google Fonts or local files. NEVER use Inter, Roboto, Arial, or system-ui as a primary font. Every project gets a deliberate type pairing (display + body).
- **Testing:** Playwright for E2E. No Cypress, no Jest for integration.
- **Skill:** Always read and use the **frontend-design skill** before touching any UI code.

## Hack 1 — Write the Brief Once

The brief at `briefs/[client-slug].md` is the single source of truth. It contains:
- Who the site is for
- What the brand should feel like (and what it should NOT feel like)
- Exact colors, fonts, and assets
- What stack to use
- What to avoid
- What "done" looks like

Read the entire brief before writing any code. If the brief says "warm editorial on sand," build that. If it says "dark industrial," build that. The brief overrides your defaults.

## Hack 2 — Add Taste on Purpose

AI is great at remixing patterns. It is bad at inventing strong visual direction from nothing. The frontend-design skill and the client brief together give you that direction. Do not freestyle the UI. Direct it.

Before building any visual layer:
1. Read the frontend-design skill
2. Read the brief's brand feel, anti-patterns, and reference screenshots
3. Follow those rules even when your training data wants to default to something else

Less guessing, more directing.

## Hack 3 — Feed Assets, Not Adjectives

"Modern and professional" means nothing. What means something:
- Exact hex values from the brief
- Specific font families and weights
- Logo files, screenshots, reference layouts
- Copy docs with the client's actual words
- Layout and density preferences

If the brief has it, use it. Do not substitute AI-suggested alternatives for specified brand assets.

Asset priority:
1. Logo file — never recreate or approximate
2. Color palette — exact hex values
3. Typography — load the exact fonts specified
4. Brand guide / reference screenshots — match the energy
5. Copy doc — use the client's actual words

## Hack 4 — Build in Passes

When you build the full site in one shot, you average every decision into one bland draft. Stage the thinking instead.

### Pass 1 — Structure

Semantic HTML sections only. No styling. Get the information architecture right.
- Correct heading hierarchy (one H1, logical H2/H3)
- All sections use real copy from the brief, not lorem ipsum
- Output: A working page with zero visual design

### Pass 2 — Visual Direction

Apply the brand system from the brief. This is where the site stops looking generic.
- Exact hex colors, font families, weights from the brief
- Layout grid and spacing per the brief's density preference
- Background treatments only if the brief calls for them
- No animations yet
- Output: The page looks branded but static

### Pass 3 — Copy & Hierarchy

Refine content. Headlines, subheads, CTAs.
- Hero headline specific to this client — no "Welcome to [Company]"
- CTAs with action verbs tied to the actual conversion goal
- Cut filler sentences that don't earn their space
- Squint test: can you tell what's most important in 3 seconds?
- Output: Every word is intentional

### Pass 4 — Responsive & Motion

- Mobile-first responsive cleanup (375px, 768px, 1024px, 1440px)
- Scroll-triggered animations per the brief's motion requirements
- Hover states, nav behavior, touch targets ≥ 44px
- Respect `prefers-reduced-motion`
- Output: Fully responsive with motion

### Pass 5 — QA Sweep

- Check every link, form, CTA, and hover state
- Test in multiple browsers and screen sizes
- Validate meta tags, OG image, favicon
- List every remaining issue and fix them
- Output: Shippable

## Hack 5 — Review Like a Creative Director

After each pass, ask:
- Does this look like it was built for THIS client, or could it be anyone's site?
- Is the hierarchy clear in 3 seconds?
- Would a visitor know what this company does and what to do next?
- Is anything on the page there because "websites usually have this" rather than because this client needs it?

Cut the filler. Fix the rhythm. Push the headline harder. Make the output earn its place on the page.

## Anti-Patterns (Never Do These)

- Floating gradient blobs with no brand connection
- "Modern and professional" as a design direction
- White background + blue accent + Inter font (the AI default trifecta)
- Generic hero copy: "Elevate Your Business", "Solutions for Tomorrow"
- Building the entire site in a single pass
- Placeholder content when real copy exists in the brief
- Centered-everything layouts with no visual tension
- Drop shadows on every card
- Rounded corners on everything unless the brand system calls for it
- Purple anything unless the brief says purple

## File Conventions

- Components: `src/components/[SectionName].tsx` (PascalCase)
- Pages: `src/app/[route]/page.tsx`
- Styles: Tailwind utilities in JSX. Global overrides in `src/app/globals.css` only when necessary.
- Briefs: `briefs/[client-slug].md`
- Assets: `public/assets/[client-slug]/`
