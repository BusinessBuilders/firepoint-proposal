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
      className="sand-section sand-section--tight"
    >
      <div
      className="overflow-hidden rounded-[2rem] border border-navy/10 bg-[linear-gradient(140deg,#172339_0%,#0c1422_68%,#0a111d_100%)] px-6 py-12 shadow-[0_30px_80px_rgba(10,18,30,0.22)] sm:px-10 lg:px-14 lg:py-16"
      style={{
        backgroundImage:
          "radial-gradient(circle at top right, rgba(160,110,65,0.22), transparent 30%), radial-gradient(circle at 15% 10%, rgba(255,255,255,0.06), transparent 20%), linear-gradient(145deg, #112235, #1b4273)",
      }}
    >
      <div ref={contentRef} className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4">Contact</p>
        <h2 className="mt-3 font-display text-[clamp(2.7rem,4.6vw,5rem)] font-medium leading-[0.94] tracking-[-0.04em] text-cream">
          Bring the project in before review gets expensive.
        </h2>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-cream/70">
          Reach out directly. No forms, no gatekeepers, no handoff between layers.
        </p>
        <div
          ref={buttonsRef}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-cream font-medium transition-all hover:-translate-y-0.5 hover:border-gold/70"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-cream font-medium transition-all hover:-translate-y-0.5 hover:border-gold/70"
          >
            Facebook
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
