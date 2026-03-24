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
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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

      gsap.from(blockRefs.current.filter(Boolean), {
        y: 26,
        opacity: 0,
        duration: 0.78,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true,
        },
      });

    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="sand-section sand-section--tight">
      <p className="eyebrow">Why Fire Point</p>
      <h2 className="mt-3 font-display text-[clamp(2.4rem,4vw,4.2rem)] font-medium leading-[0.96] tracking-[-0.04em] text-navy">
        The difference is direct experience.
      </h2>
      <p className="mt-5 max-w-[38rem] text-[1rem] leading-relaxed text-navy/62">
        Firepoint works best when the room needs someone who can speak both the language of design teams and the instincts of the reviewer on the other side.
      </p>
      <div className="mt-12 grid gap-8 border-t border-navy/10 pt-8 lg:grid-cols-3">
        {blocks.map((block, i) => (
          <div
            key={i}
            ref={(el) => { blockRefs.current[i] = el; }}
            className="relative border-l border-gold/35 pl-5"
          >
            <p className="mb-4 font-display text-5xl text-gold/62">
              {block.number}
            </p>
            <h3 className="font-body text-lg font-medium text-navy mb-2">
              {block.title}
            </h3>
            <p className="text-navy/65 text-[0.98rem] leading-relaxed">
              {block.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
