"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

const headlineWords = [
  { text: "Fire", highlight: true },
  { text: "code", highlight: true },
  { text: "clarity", highlight: false },
  { text: "before", highlight: false },
  { text: "the", highlight: false },
  { text: "first", highlight: false },
  { text: "review.", highlight: false },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      /* ── Eyebrow ── */
      tl.from(eyebrowRef.current, { y: 20, opacity: 0, duration: 0.5 });

      /* ── H1 word-by-word reveal ── */
      const words = wordRefs.current.filter(Boolean);
      if (words.length > 0) {
        tl.from(words, { y: "110%", duration: 0.9, ease: "power4.out", stagger: 0.07 }, "-=0.2");
      }

      /* ── Subtext + CTAs ── */
      tl.from(subtextRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.4");
      tl.from(ctasRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.35");

      /* ── Panel — scale entrance, NO opacity hide ── */
      tl.from(panelRef.current, { scale: 0.92, duration: 1.2, ease: "power2.out" }, "-=0.8");

      /* ── Cards entrance — DON'T use opacity, use transform only ── */
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current];
      cards.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 60, scale: 0.85 },
          { y: 0, scale: 1, duration: 1, ease: "back.out(1.7)", delay: 1.2 + i * 0.2 }
        );
      });

      /* ── Card parallax on scroll ── */
      const speeds = [0.06, 0.12, 0.18];
      cards.forEach((card, i) => {
        if (!card) return;
        gsap.to(card, {
          y: speeds[i] * -150,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="sand-section min-h-[100svh] flex items-center py-16">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center w-full">
        {/* ── Left column — copy ── */}
        <div>
          <p ref={eyebrowRef} className="eyebrow mb-5 ">
            Fire protection consulting
          </p>

          <h1 className="font-display text-[clamp(2.8rem,6.5vw,5.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-navy">
            {headlineWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
                <span
                  ref={(el) => { wordRefs.current[i] = el; }}
                  className={`inline-block ${word.highlight ? "text-gold" : ""}`}
                >
                  {word.text}
                </span>
              </span>
            ))}
          </h1>

          <p ref={subtextRef} className="text-[1.05rem] leading-relaxed text-navy/65 mt-5 max-w-[42ch] ">
            Independent fire code expertise for developers, architects, and fire
            departments. No firm overhead. No surprises at inspection.
          </p>

          <div ref={ctasRef} className="flex flex-wrap gap-4 mt-8 ">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gold text-cream font-medium text-[0.95rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(160,110,65,0.35)]"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-8 py-4 rounded-full border border-gold/30 bg-white/50 text-navy font-medium text-[0.95rem] transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:bg-white/80"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* ── Right column — Navy visual panel ── */}
        <div
          ref={panelRef}
          className="relative min-h-[30rem] lg:min-h-[40rem] rounded-[42px] overflow-hidden shadow-[0_30px_80px_rgba(16,23,34,0.25)] "
          style={{
            background: `
              radial-gradient(circle at 75% 15%, rgba(160,110,65,0.18) 0%, transparent 40%),
              radial-gradient(circle at 25% 85%, rgba(160,110,65,0.1) 0%, transparent 35%),
              linear-gradient(160deg, #1f4b85 0%, #173a67 40%, #112235 100%)
            `,
          }}
        >
          {/* ── F monogram watermark — subtle brand presence ── */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
            <Image
              src="/assets/firepoint/LogoNavy.png"
              alt=""
              width={400}
              height={400}
              className="w-[70%] max-w-[320px] object-contain brightness-[3] saturate-0"
              aria-hidden="true"
            />
          </div>

          {/* ── Gold beam decorative elements ── */}
          <div className="absolute z-[1] w-[140%] h-72 bg-gradient-to-r from-transparent via-white/[0.07] via-[40%] to-transparent -top-8 -left-[20%] rotate-[20deg]" />
          <div className="absolute z-[1] w-[140%] h-56 bg-gradient-to-r from-transparent via-gold/[0.1] via-[55%] to-transparent bottom-12 -right-[20%] -rotate-[12deg]" />
          <div className="absolute z-[1] w-[120%] h-40 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent top-1/2 -left-[10%] rotate-[8deg]" />

          {/* ── Subtle grid texture ── */}
          <div
            className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: "44px 44px",
            }}
          />

          {/* ── Gold corner glows ── */}
          <div className="absolute top-0 right-0 w-56 h-56 bg-gold/[0.08] rounded-full blur-[60px] z-[1]" />
          <div className="absolute bottom-0 left-0 w-44 h-44 bg-gold/[0.05] rounded-full blur-[50px] z-[1]" />

          {/* ── Authority cards — ALWAYS VISIBLE via CSS, GSAP enhances only ── */}
          <div
            ref={card1Ref}
            className="hero-card absolute z-10 top-10 right-6 lg:right-10 max-w-[15rem] backdrop-blur-[20px] bg-white/[0.12] border border-white/[0.22] text-cream rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            style={{ animationDelay: "0s" }}
          >
            <p className="font-display text-[2.8rem] leading-none text-cream font-medium">
              12 Years
            </p>
            <p className="text-cream/70 text-[0.82rem] mt-2 tracking-wide uppercase">
              in fire protection
            </p>
          </div>

          <div
            ref={card2Ref}
            className="hero-card absolute z-10 top-[36%] left-5 lg:left-8 max-w-[14rem] backdrop-blur-[20px] bg-white/[0.12] border border-white/[0.22] text-cream rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="font-display text-[2.2rem] leading-tight text-cream font-medium">
              Former AHJ
            </p>
            <p className="text-cream/70 text-[0.82rem] mt-2 tracking-wide">
              10 years as Authority Having Jurisdiction
            </p>
          </div>

          <div
            ref={card3Ref}
            className="hero-card absolute z-10 bottom-10 right-6 lg:right-10 w-[13rem] backdrop-blur-[20px] bg-white/[0.12] border border-white/[0.22] text-cream rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            style={{ animationDelay: "1.6s" }}
          >
            <p className="font-display text-[2.8rem] leading-none text-cream font-medium">
              10 Days
            </p>
            <p className="text-cream/70 text-[0.82rem] mt-2 tracking-wide uppercase">
              average turnaround
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
