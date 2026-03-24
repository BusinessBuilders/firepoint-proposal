"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const services = [
  {
    title: "Fire Department Consulting",
    description:
      "Operational guidance for fire departments navigating complex code scenarios. From staffing reviews to policy alignment with current NFPA standards.",
  },
  {
    title: "Third Party Design Review",
    description:
      "Independent review of architectural and engineering plans for fire code compliance. A second set of expert eyes before submission — catching issues that delay projects.",
  },
  {
    title: "Code Consulting",
    description:
      "Direct code interpretation and compliance guidance for developers, architects, and general contractors. Clear answers on building code, fire code, and life-safety requirements.",
  },
  {
    title: "Design Services",
    description:
      "Fire protection system design and layout — sprinkler systems, alarm systems, and suppression systems tailored to project requirements and local code.",
  },
  {
    title: "NFPA 241 Creation",
    description:
      "Construction site fire safety plans per NFPA 241. Required for most construction permits. We create the plan, so your crew stays compliant from groundbreaking to occupancy.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      /* ── Navy card container fade up ── */
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

      /* ── Service cards stagger in ── */
      gsap.from(cardsRef.current.filter(Boolean), {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.1,
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
    <section id="services" ref={sectionRef} className="navy-card">
      <div ref={headingRef}>
        <p className="eyebrow">What we do</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-medium text-cream mt-2">
          Expertise across fire protection.
        </h2>
        <div
          ref={accentRef}
          className="w-16 h-0.5 bg-gradient-to-r from-gold to-transparent mt-4 mb-10"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => (
          <article
            key={i}
            ref={(el) => { cardsRef.current[i] = el; }}
            className="bg-cream/[0.08] border border-cream/[0.1] border-l-2 border-l-gold/60 rounded-[24px] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-l-4 hover:shadow-[0_8px_30px_rgba(160,110,65,0.15)]"
          >
            <h3 className="font-body text-lg font-medium text-cream mb-2">
              {service.title}
            </h3>
            <p className="text-cream/70 text-[0.95rem] leading-relaxed">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
