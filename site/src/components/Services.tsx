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
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const numberRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(headingRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.85,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(cardsRef.current.filter(Boolean), {
        y: 24,
        opacity: 0,
        duration: 0.75,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          once: true,
        },
      });

      numberRefs.current.filter(Boolean).forEach((number, i) => {
        gsap.from(number, {
          x: 72,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current[i],
            start: "top 82%",
            once: true,
          },
        });
      });

      contentRefs.current.filter(Boolean).forEach((content, i) => {
        gsap.from(content, {
          y: 18,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.06,
          scrollTrigger: {
            trigger: cardsRef.current[i],
            start: "top 82%",
            once: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="services" ref={sectionRef} className="sand-section sand-section--tight">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
      <div ref={headingRef} className="lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-3 font-display text-[clamp(2.5rem,4.3vw,4.6rem)] font-medium leading-[0.95] tracking-[-0.04em] text-navy">
          Expertise built for the approval path.
        </h2>
        <p className="mt-5 max-w-[17rem] text-[1rem] leading-relaxed text-navy/62">
          Every service is framed around one outcome: cleaner reviews, fewer delays, and clearer code decisions.
        </p>
      </div>
      <div className="border-t border-navy/10">
        {services.map((service, i) => (
          <article
            key={i}
            ref={(el) => { cardsRef.current[i] = el; }}
            className="grid gap-4 border-b border-navy/10 py-7 md:grid-cols-[5rem_1fr] md:gap-8"
          >
            <p
              ref={(el) => { numberRefs.current[i] = el; }}
              data-fly-in="right"
              className="font-display text-[2.2rem] leading-none text-gold/70 will-change-transform"
            >
              0{i + 1}
            </p>
            <div ref={(el) => { contentRefs.current[i] = el; }}>
              <h3 className="font-body text-[1.2rem] font-medium text-navy">
                {service.title}
              </h3>
              <p className="mt-3 max-w-[42rem] text-[1rem] leading-relaxed text-navy/65">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
