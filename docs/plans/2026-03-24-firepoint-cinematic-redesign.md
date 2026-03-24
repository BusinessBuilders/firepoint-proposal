# Firepoint Cinematic Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the Firepoint landing page into a cinematic, editorial experience with a stronger first impression and more deliberate full-page rhythm.

**Architecture:** Keep the existing Next.js App Router structure and GSAP stack, but rewrite the top-level composition and motion system around a full-canvas hero, fewer utility sections, and section-specific editorial layouts. Reuse the existing brand tokens and font system where they still fit, and refactor components instead of layering more behavior onto the current structure.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS v4, GSAP

---

### Task 1: Capture the current page structure and decide the new section sequence

**Files:**
- Modify: `site/src/app/page.tsx`
- Reference: `docs/plans/2026-03-24-firepoint-cinematic-redesign-design.md`

**Step 1: Inspect the current section order**

Run: `sed -n '1,220p' site/src/app/page.tsx`
Expected: Existing sequence includes `Hero`, `StatsBar`, `Services`, `About`, `WhyFirepoint`, `FAQ`, and `CTA`.

**Step 2: Define the new section sequence in code comments or notes before editing**

Use this target rhythm:
- hero
- restrained proof / intro
- services editorial section
- authority / about section
- FAQ or trust section only if it still earns space
- closing CTA

**Step 3: Remove or restage sections that flatten the rhythm**

Edit `site/src/app/page.tsx` to remove `StatsBar` from the top-of-page flow and reorder sections if needed.

**Step 4: Verify the page still compiles**

Run: `npm run lint`
Expected: No new lint errors from `page.tsx`.

**Step 5: Commit**

```bash
git add site/src/app/page.tsx
git commit -m "refactor: reset landing page section rhythm"
```

### Task 2: Rebuild the hero as a single cinematic composition

**Files:**
- Modify: `site/src/components/Hero.tsx`
- Modify: `site/src/app/globals.css`
- Reference: `site/public/assets/firepoint/LogoNavy.png`
- Reference: `site/public/assets/firepoint/translogo.png`

**Step 1: Write the failing visual criteria as a checklist in code comments or working notes**

Checklist:
- hero reads as one composition, not two columns
- brand is louder than the headline
- no floating metric cards remain
- one dominant atmospheric visual field is present
- CTA group remains clear on desktop and mobile

**Step 2: Rewrite the markup structure**

Replace the split-column layout with:
- full-viewport hero shell
- constrained text column anchored into a calm area
- brand lockup / monogram treatment
- single visual plane for atmosphere and proof line

**Step 3: Rewrite the hero styles**

Adjust `site/src/app/globals.css` for any shared utilities the new hero needs, such as:
- full-bleed hero container behavior
- cinematic overlay / texture utilities
- refined spacing tokens if current ones are too generic

**Step 4: Verify the hero does not regress basic behavior**

Run: `npm run lint`
Expected: No JSX or className issues.

**Step 5: Commit**

```bash
git add site/src/components/Hero.tsx site/src/app/globals.css
git commit -m "feat: rebuild hero as cinematic brand composition"
```

### Task 3: Rewrite hero motion from object animation to staged reveal

**Files:**
- Modify: `site/src/components/Hero.tsx`
- Reference: `site/src/lib/gsap.ts`

**Step 1: Remove current card-level animation assumptions**

Delete or replace logic tied to the three floating hero cards and split-column timing.

**Step 2: Implement the new motion sequence**

Add:
- brand / monogram reveal
- headline reveal
- support copy and CTA reveal
- atmospheric visual drift
- scroll-linked handoff into the next section

**Step 3: Keep reduced-motion safe**

Ensure all GSAP logic exits cleanly when `prefers-reduced-motion: reduce` is enabled.

**Step 4: Verify behavior**

Run: `npm run lint`
Expected: Motion code is type-safe and lint-clean.

**Step 5: Commit**

```bash
git add site/src/components/Hero.tsx
git commit -m "feat: replace hero animations with cinematic reveal system"
```

### Task 4: Redesign the support and services sections to restore page rhythm

**Files:**
- Modify: `site/src/components/Services.tsx`
- Modify: `site/src/components/About.tsx`
- Modify: `site/src/components/WhyFirepoint.tsx`
- Modify: `site/src/app/globals.css`

**Step 1: Inspect current section patterns**

Run: `sed -n '1,260p' site/src/components/Services.tsx`
Run: `sed -n '1,260p' site/src/components/About.tsx`
Run: `sed -n '1,260p' site/src/components/WhyFirepoint.tsx`
Expected: Repeated card or block patterns that can be simplified into stronger editorial sections.

**Step 2: Give each section one job**

Refactor sections so they have:
- one headline
- one short support line
- one dominant visual or layout move
- one motion behavior

**Step 3: Remove utility-strip energy**

Fold proof content into later sections where it feels earned rather than immediate. Avoid grids that read like dashboard summaries.

**Step 4: Verify rhythm and markup integrity**

Run: `npm run lint`
Expected: No new lint issues across edited sections.

**Step 5: Commit**

```bash
git add site/src/components/Services.tsx site/src/components/About.tsx site/src/components/WhyFirepoint.tsx site/src/app/globals.css
git commit -m "refactor: redesign editorial support sections"
```

### Task 5: Tighten the closing sequence and remove any leftover generic landing-page patterns

**Files:**
- Modify: `site/src/components/FAQ.tsx`
- Modify: `site/src/components/CTA.tsx`
- Modify: `site/src/components/Footer.tsx`
- Modify: `site/src/components/Navbar.tsx`

**Step 1: Audit the closing sequence**

Run: `sed -n '1,260p' site/src/components/FAQ.tsx`
Run: `sed -n '1,260p' site/src/components/CTA.tsx`
Run: `sed -n '1,260p' site/src/components/Footer.tsx`
Run: `sed -n '1,260p' site/src/components/Navbar.tsx`
Expected: Identify any component that reads more generic than cinematic or interrupts the closing rhythm.

**Step 2: Simplify the close**

Keep only the sections that help trust or conversion. Tighten copy and spacing so the CTA feels like a final frame.

**Step 3: Align nav and footer with the new art direction**

Navbar and footer should feel quieter and more integrated with the new hero and closing sequence.

**Step 4: Verify the site shell**

Run: `npm run lint`
Expected: No lint issues in global layout components.

**Step 5: Commit**

```bash
git add site/src/components/FAQ.tsx site/src/components/CTA.tsx site/src/components/Footer.tsx site/src/components/Navbar.tsx
git commit -m "refactor: tighten closing sequence and site chrome"
```

### Task 6: Run full verification and visual QA

**Files:**
- Modify: none unless fixes are required

**Step 1: Run lint**

Run: `npm run lint`
Expected: PASS

**Step 2: Run production build**

Run: `npm run build`
Expected: PASS

**Step 3: Run local visual check**

Run: `npm run dev`
Expected: Local site starts successfully for desktop and mobile viewport review.

**Step 4: Record any polish fixes and apply them in a final sweep**

Fix only issues found during verification:
- overlap
- unreadable contrast
- motion jank
- mobile spacing regressions

**Step 5: Commit**

```bash
git add site
git commit -m "fix: final cinematic redesign polish"
```
