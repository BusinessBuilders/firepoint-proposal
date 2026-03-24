"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const blocks = [
  {
    number: "01",
    title: "Former Authority Having Jurisdiction",
    text: "Most consultants study the code. I enforced it. 10 years of reviewing and approving fire protection plans means I know exactly what gets flagged, what gets approved, and what wastes everyone\u2019s time.",
  },
  {
    number: "02",
    title: "One consultant, no overhead",
    text: "No account managers. No junior associates learning on your project. When you hire Fire Point, you work directly with the consultant who has the experience. That\u2019s it.",
  },
  {
    number: "03",
    title: "10-day turnaround",
    text: "Most projects completed in 10 business days or less. Many ahead of schedule. No open-ended timelines. No waiting for a slot in the queue.",
  },
];

export default function WhyFirepoint() {
  const sectionRef = useRef<HTMLElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const borderRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      /* ── Navy card fade up ── */
      gsap.from(sectionRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      /* ── Gold accent line scale in ── */
      gsap.from(accentRef.current, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: accentRef.current,
          start: "top 85%",
          once: true,
        },
      });

      /* ── Blocks stagger from left ── */
      gsap.from(blockRefs.current.filter(Boolean), {
        x: -30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true,
        },
      });

      /* ── Gold top border scale in ── */
      borderRefs.current.filter(Boolean).forEach((border, i) => {
        gsap.from(border, {
          scaleX: 0,
          transformOrigin: "left",
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            once: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="navy-card">
      <p className="eyebrow">Why Fire Point</p>
      <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-medium text-cream mt-2">
        The difference is direct experience.
      </h2>
      <div
        ref={accentRef}
        className="w-16 h-0.5 bg-gradient-to-r from-gold to-transparent mt-4 mb-10"
      />
      <div className="grid lg:grid-cols-3 gap-6 mt-10">
        {blocks.map((block, i) => (
          <div
            key={i}
            ref={(el) => { blockRefs.current[i] = el; }}
            className="pt-6 relative"
          >
            {/* Animated gold top border */}
            <div
              ref={(el) => { borderRefs.current[i] = el; }}
              className="absolute top-0 left-0 right-0 h-[2px] bg-gold/60"
            />
            <p className="font-display text-5xl text-cream/40 mb-3">
              {block.number}
            </p>
            <h3 className="font-body text-lg font-medium text-cream mb-2">
              {block.title}
            </h3>
            <p className="text-cream/70 text-[0.95rem] leading-relaxed">
              {block.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
