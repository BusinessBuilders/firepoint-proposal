"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      /* ── Section fade up ── */
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

      /* ── Content reveal ── */
      gsap.from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      /* ── Social buttons stagger in ── */
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll("a");
        gsap.from(buttons, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="navy-card"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(160,110,65,0.25), transparent 34%), linear-gradient(145deg, #112235, #1b4273)",
      }}
    >
      <div ref={contentRef} className="text-center max-w-2xl mx-auto">
        <p className="eyebrow mb-4">Contact</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-medium text-cream mt-2">
          Let&apos;s talk fire code.
        </h2>
        <p className="text-cream/70 text-[1.05rem] leading-relaxed mt-4">
          Reach out directly. No forms, no gatekeepers.
        </p>
        <div
          ref={buttonsRef}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 text-cream font-medium transition-all hover:-translate-y-0.5 hover:border-gold/70"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 text-cream font-medium transition-all hover:-translate-y-0.5 hover:border-gold/70"
          >
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
