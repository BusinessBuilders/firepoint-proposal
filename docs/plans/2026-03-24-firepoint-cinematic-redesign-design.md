# Firepoint Cinematic Frontend Redesign

**Date:** 2026-03-24
**Status:** Approved
**Scope:** Full-page visual rewrite focused on first impression and page rhythm

---

## Goal

Shift the current Firepoint site from a premium consulting landing page into a more cinematic, editorial brand experience without losing credibility, clarity, or conversion focus.

The redesign should make the site feel authored and atmospheric. Motion, pacing, and composition should do more of the work than UI objects, cards, or proof widgets.

## Design Direction

### Visual Thesis

Firepoint should feel like a controlled title sequence for a serious documentary about code review, buildings, and authority. Calm, precise, and cinematic. Not flashy. Not techy. Not corporate-template premium.

### Content Plan

1. Hero: cinematic brand statement with one dominant visual field
2. Support/proof: restrained credibility beat after the hero
3. Detail: services and expertise presented with heavier editorial structure
4. Final CTA: compressed closing conversion beat

### Interaction Thesis

1. A staged hero entrance that reveals hierarchy over time rather than showing everything at once
2. A scroll-linked depth or pin moment that strengthens the transition out of the hero
3. Section reveals that feel like film edits, with each section having one clear motion behavior

## Hero Redesign

### Composition

Replace the current split text-plus-panel layout with a full-canvas hero composition that reads as one poster. The brand and monogram must become the loudest signal in the first viewport. The hero should no longer feel like two columns or a SaaS layout.

### Content Budget

The first viewport should contain only:

- Firepoint brand / monogram
- one H1
- one short support sentence
- one CTA group
- one dominant atmospheric visual field
- one restrained proof line

### What Must Be Removed

- overlapping metric cards
- dashboard-like proof objects
- any hero treatment that reads like product UI
- visual clutter that competes with the brand mark

### Visual Language

The dominant visual field should suggest architecture, blueprint structure, controlled light, and material depth. It should feel atmospheric rather than illustrative. Gold should be used as a restrained accent, not a glow-heavy effect. The image plane can be abstracted, but it must still feel tied to built environments and review work.

## Page Rhythm Redesign

The page should behave like a film edit, not a conventional landing-page stack. Each section should feel distinct in weight and pacing. The rhythm should alternate between immersive sections, quieter breathing sections, and denser editorial sections.

### Rhythm Rules

- each section gets one job
- each section gets one visual behavior
- repeated emphasis patterns should be removed
- transitions should create contrast between heavy and quiet beats
- spacing should be used intentionally to create release between major moments

### Section Implications

- The current stats bar should be removed, absorbed into later proof content, or heavily restaged so it does not flatten the hero immediately after the first screen.
- Services should feel more editorial and less like a conventional card grid.
- Credibility sections should be quieter and more confident.
- The final CTA should feel like a closing frame, not a generic contact block.

## Motion System Redesign

Keep GSAP, but simplify the motion language. Motion should be slower, more choreographed, and more legible. The current site has too many object-level cues in the hero. The redesign should prefer larger-scale movement and reveal behavior over floating UI pieces.

### Required Motion Set

- one hero entrance sequence
- one scroll-linked depth or pin moment
- one section reveal system used consistently across the rest of the page

### Motion Rules

- motion must improve hierarchy
- motion must remain smooth on mobile
- motion should be noticeable in a quick screen recording
- ornamental movement should be removed
- reduced-motion behavior must remain safe and clean

## Constraints

- Preserve the Firepoint sand / navy / gold identity
- Preserve the consulting-site credibility and direct conversion goal
- Avoid purple, generic SaaS, and dashboard tropes
- Avoid cards in the hero
- Avoid default font stacks
- Preserve strong desktop and mobile behavior
- Keep the brand unmistakable in the first screen

## Recommended Execution Choice

Proceed with a full-page visual rewrite, not a motion-only pass and not a surgical top-half tweak. The first impression and page rhythm are both core problems, so limiting the work to the hero would underdeliver on the requested direction.
