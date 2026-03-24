"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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

      gsap.from(imageRef.current, {
        y: 22,
        opacity: 0,
        scale: 0.97,
        duration: 0.95,
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
    <section id="about" ref={sectionRef} className="navy-card">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(17rem,0.9fr)] lg:items-end">
        <div ref={textBlockRef}>
          <p className="eyebrow mb-4">About</p>
          <h2 className="mt-3 font-display text-[clamp(2.4rem,4vw,4.5rem)] font-medium leading-[0.96] tracking-[-0.04em] text-cream">
            A decade as the person who signs off on your project.
          </h2>
          <p className="mt-6 max-w-[40rem] text-[1.03rem] leading-relaxed text-cream/72">
            Most fire consultants come from engineering firms. This one comes
            from the other side of the table. After 10 years as an Authority
            Having Jurisdiction — the person who reviews and approves fire
            protection plans — I started Fire Point Consulting to help
            developers, architects, and fire departments get it right the first
            time.
          </p>
          <p className="mt-4 max-w-[40rem] text-[1.03rem] leading-relaxed text-cream/72">
            12 years of direct fire protection experience. No firm overhead. No
            layers of project managers between you and the person doing the work.
            When you call Fire Point, you get the consultant who served as the
            AHJ, who reviewed the plans, who knows exactly what the reviewer on
            the other side of the table is looking for.
          </p>
          <p className="mt-8 border-l border-gold/50 pl-5 text-sm uppercase tracking-[0.22em] text-gold/82">
            Based in Holden, MA. Serving projects throughout Massachusetts and
            New England.
          </p>
        </div>
        <div ref={imageRef} className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-cream/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(243,238,229,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(243,238,229,0.12)_1px,transparent_1px)] [background-size:52px_52px]" />
          <div className="absolute inset-x-8 top-8 border-t border-gold/35" />
          <div className="absolute bottom-10 left-8 right-8 border-t border-cream/12" />
          <div className="absolute bottom-8 left-8 max-w-[14rem]">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-gold/80">
              Working method
            </p>
            <p className="mt-3 font-display text-[2rem] leading-[0.98] tracking-[-0.04em] text-cream">
              Quiet authority. Direct review.
            </p>
          </div>
          <Image
            src="/assets/firepoint/LogoNavy.png"
            alt="Fire Point Consulting logo"
            width={360}
            height={360}
            className="absolute right-[-2rem] top-[-1rem] h-auto w-[18rem] object-contain opacity-60 brightness-[2.6]"
          />
        </div>
      </div>
    </section>
  );
}
