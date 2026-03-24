"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const stats = [
  { value: 12, suffix: "+", label: "Years in fire protection" },
  { value: 10, suffix: "", label: "Years as Authority Having Jurisdiction" },
  { value: 10, suffix: "", label: "Business day turnaround" },
];

export default function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

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

      /* ── Number counter animation ── */
      numberRefs.current.forEach((el, i) => {
        if (!el) return;
        const stat = stats[i];
        const proxy = { val: 0 };

        gsap.to(proxy, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          snap: { val: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = String(Math.round(proxy.val));
          },
          onComplete: () => {
            el.textContent = String(stat.value) + stat.suffix;
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="sand-section sand-section--tight">
      <div className="rounded-[2rem] border border-navy/8 bg-white/28 px-6 py-10 backdrop-blur-sm sm:px-10 lg:px-14">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
        <div className="text-center">
          <p className="font-display text-[clamp(3.2rem,5vw,4.8rem)] font-medium text-navy">
            <span ref={(el) => { numberRefs.current[0] = el; }}>0</span>
          </p>
          <p className="mt-1 text-sm text-navy/60">{stats[0].label}</p>
        </div>
        <div className="hidden sm:block w-px h-12 bg-gold/30" />
        <div className="block sm:hidden h-px w-16 bg-gold/30" />
        <div className="text-center">
          <p className="font-display text-[clamp(3.2rem,5vw,4.8rem)] font-medium text-navy">
            <span ref={(el) => { numberRefs.current[1] = el; }}>0</span>
          </p>
          <p className="mt-1 text-sm text-navy/60">{stats[1].label}</p>
        </div>
        <div className="hidden sm:block w-px h-12 bg-gold/30" />
        <div className="block sm:hidden h-px w-16 bg-gold/30" />
        <div className="text-center">
          <p className="font-display text-[clamp(3.2rem,5vw,4.8rem)] font-medium text-navy">
            <span ref={(el) => { numberRefs.current[2] = el; }}>0</span>
          </p>
          <p className="mt-1 text-sm text-navy/60">{stats[2].label}</p>
        </div>
      </div>
      </div>
    </section>
  );
}
