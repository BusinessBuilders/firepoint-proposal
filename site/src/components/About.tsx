"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(textRef.current, {
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 45%",
          scrub: 0.8,
        },
      });

      gsap.fromTo(
        panelRef.current,
        { y: 26, opacity: 0.65 },
        {
          y: -10,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            end: "bottom 35%",
            scrub: 1,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section id="about" ref={sectionRef} className="navy-card">
      <div
        data-testid="about-scene"
        data-pin-scene="true"
        className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] lg:items-end"
      >
        <div ref={textRef}>
          <p className="eyebrow mb-4">About</p>
          <h2 className="mt-3 max-w-[10ch] font-display text-[clamp(2.5rem,4.2vw,4.8rem)] font-medium leading-[0.96] tracking-[-0.04em] text-cream">
            A decade as the person who signs off on your project.
          </h2>
          <p className="mt-6 max-w-[39rem] text-[1.03rem] leading-relaxed text-cream/72">
            FirePoint Consulting provides approval-focused fire protection engineering
            services for fire departments, design teams, contractors, and owners moving
            through the Massachusetts review process.
          </p>
          <p className="mt-4 max-w-[39rem] text-[1.03rem] leading-relaxed text-cream/72">
            Services are provided by a licensed Massachusetts Professional Engineer with
            extensive municipal plan review experience, built around clarifying code paths
            early, anticipating fire department concerns, and reducing back-and-forth during review.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="border-l border-gold/45 pl-4">
              <p className="text-[0.72rem] uppercase tracking-[0.24em] text-gold/82">
                Licensed Massachusetts PE
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream/68">
                Practical engineering guidance grounded in municipal plan review experience.
              </p>
            </div>
            <div className="border-l border-gold/45 pl-4">
              <p className="text-[0.72rem] uppercase tracking-[0.24em] text-gold/82">
                Rutland, Massachusetts
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream/68">
                Supporting fire departments, architects, developers, owners, and contractors.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={panelRef}
          className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-cream/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]"
        >
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(243,238,229,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(243,238,229,0.12)_1px,transparent_1px)] [background-size:52px_52px]" />
          <div className="absolute inset-x-8 top-8 border-t border-gold/30" />
          <div className="absolute bottom-8 left-8 right-8 border-t border-cream/10" />
          <div className="absolute inset-y-0 right-0 w-[40%] bg-[linear-gradient(180deg,rgba(72,78,148,0.14),rgba(72,78,148,0.05))]" />
          <div className="absolute left-8 bottom-8 max-w-[14rem]">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-gold/80">
              Working method
            </p>
            <p className="mt-3 font-display text-[2rem] leading-[0.98] tracking-[-0.04em] text-cream">
              Clear guidance. Defensible code paths.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/62">
              FirePoint Consulting offers code consulting and engineering services and does not act as Authority Having Jurisdiction.
            </p>
          </div>
          <Image
            src="/assets/firepoint/LogoNavy.png"
            alt="Fire Point Consulting logo"
            width={320}
            height={320}
            className="absolute right-8 top-1/2 h-auto w-[13.5rem] -translate-y-1/2 object-contain opacity-[0.22] sepia-[0.5] hue-rotate-[330deg] saturate-[1.6] brightness-[1.5]"
          />
        </div>
      </div>
    </section>
  );
}
