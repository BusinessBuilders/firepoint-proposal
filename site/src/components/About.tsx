"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      /* ── Text block fade up ── */
      gsap.from(textBlockRef.current, {
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

      /* ── Logo image fade up with slight delay ── */
      gsap.from(imageRef.current, {
        y: 30,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="about" ref={sectionRef} className="sand-section">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div ref={textBlockRef}>
          <p className="eyebrow mb-4">About</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-medium text-navy mt-2">
            A decade as the person who signs off on your project.
          </h2>
          <div
            ref={accentRef}
            className="w-16 h-0.5 bg-gradient-to-r from-gold to-transparent mt-4 mb-10"
          />
          <p className="text-navy/75 text-[1.05rem] leading-relaxed mt-4">
            Most fire consultants come from engineering firms. This one comes
            from the other side of the table. After 10 years as an Authority
            Having Jurisdiction — the person who reviews and approves fire
            protection plans — I started Fire Point Consulting to help
            developers, architects, and fire departments get it right the first
            time.
          </p>
          <p className="text-navy/75 text-[1.05rem] leading-relaxed mt-4">
            12 years of direct fire protection experience. No firm overhead. No
            layers of project managers between you and the person doing the work.
            When you call Fire Point, you get the consultant who served as the
            AHJ, who reviewed the plans, who knows exactly what the reviewer on
            the other side of the table is looking for.
          </p>
          <p className="text-navy/75 text-[1.05rem] leading-relaxed mt-4">
            Based in Holden, MA. Serving projects throughout Massachusetts and
            New England.
          </p>
        </div>
        <div ref={imageRef} className="flex items-center justify-center">
          <Image
            src="/assets/firepoint/LogoNavy.png"
            alt="Fire Point Consulting logo"
            width={300}
            height={300}
            className="rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
