"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLParagraphElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const bgLogoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(brandRef.current, { y: 28, opacity: 0, duration: 0.8 });
      tl.from(headlineRef.current, { y: 42, opacity: 0, duration: 1 }, "-=0.45");
      tl.from(subtextRef.current, { y: 24, opacity: 0, duration: 0.75 }, "-=0.55");
      tl.from(ctasRef.current, { y: 24, opacity: 0, duration: 0.75 }, "-=0.55");
      tl.from(proofRef.current, { y: 18, opacity: 0, duration: 0.65 }, "-=0.45");
      tl.from(visualRef.current, { scale: 0.96, opacity: 0, duration: 1.35 }, "-=1.1");

      // Logo: fade in tiny → spring up big → settle to normal
      if (bgLogoRef.current) {
        gsap.set(bgLogoRef.current, { scale: 0.08, opacity: 0 });
        gsap.to(bgLogoRef.current, {
          scale: 1.12,
          opacity: 1,
          duration: 2.2,
          ease: "power2.out",
          delay: 0.3,
          onComplete: () => {
            gsap.to(bgLogoRef.current, {
              scale: 1,
              duration: 0.7,
              ease: "power2.inOut",
            });
          },
        });
      }

      gsap.to(frameRef.current, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(glowRef.current, {
        xPercent: 12,
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden bg-[linear-gradient(180deg,#efe7db_0%,#efe9de_28%,#172339_100%)] text-cream"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(243,238,229,0.92),rgba(243,238,229,0.78)_22%,rgba(243,238,229,0.05)_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,22,36,0.34)_0%,rgba(14,22,36,0.14)_18%,rgba(14,22,36,0)_34%,rgba(14,22,36,0)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(243,238,229,0.12)_0%,rgba(243,238,229,0.04)_24%,rgba(22,25,46,0)_40%,rgba(10,18,30,0.9)_68%,rgba(7,12,22,1)_100%)]" />
        <div
          ref={glowRef}
          className="absolute right-[-12rem] top-[12rem] h-[32rem] w-[32rem] rounded-full bg-gold/12 blur-[100px]"
        />
      </div>

      <div
        ref={frameRef}
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58vw] overflow-hidden lg:block"
      >
        <div
          ref={visualRef}
          className="absolute inset-y-0 right-0 w-full bg-[linear-gradient(155deg,rgba(31,53,88,0.84)_0%,rgba(20,36,58,0.96)_48%,rgba(8,13,25,1)_100%)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_22%,rgba(160,110,65,0.28),transparent_22%),radial-gradient(circle_at_42%_72%,rgba(255,255,255,0.08),transparent_18%)]" />
          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(243,238,229,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(243,238,229,0.14)_1px,transparent_1px)] [background-size:120px_120px]" />
          <div className="absolute left-[14%] top-[6%] h-[82%] w-[72%] border border-cream/22" />
          <div className="absolute left-[24%] top-[14%] h-[68%] w-[58%] border border-cream/14" />
          <div className="absolute bottom-[10%] left-[18%] h-px w-[64%] bg-gradient-to-r from-gold/0 via-gold/70 to-gold/0" />
          <div className="absolute right-[4%] top-[12%] h-[66%] w-px bg-gradient-to-b from-cream/0 via-cream/35 to-cream/0" />
          <div ref={bgLogoRef} className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <Image
              src="/assets/firepoint/fp-bg-logo.png"
              alt=""
              width={1400}
              height={1400}
              className="h-[90%] w-auto max-w-none object-contain opacity-[0.52] saturate-[1.18] brightness-[1.18] contrast-[1.08] drop-shadow-[0_12px_40px_rgba(160,110,65,0.18)]"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1320px] items-end px-5 pb-14 pt-28 sm:px-8 lg:px-10 lg:pb-18">
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,34rem)_1fr] lg:items-end">
          <div className="relative z-10">
            <div ref={brandRef}>
            </div>

            <h1
              ref={headlineRef}
              className="mt-6 max-w-[8.7ch] font-display text-[clamp(2.6rem,5.3vw,5.0rem)] font-medium leading-[0.94] tracking-[-0.05em] text-cream [text-shadow:0_14px_40px_rgba(16,25,46,0.24)]"
            >
              Fire Protection Guidance That Keeps Projects Moving
            </h1>

            <p
              ref={subtextRef}
              className="mt-6 max-w-[34ch] text-[1.02rem] leading-relaxed text-cream/82"
            >
              Practical, approval-focused consulting for Massachusetts projects—helping teams avoid delays, reduce redesign, and move through code and plan review with confidence.
            </p>

            <div ref={ctasRef} className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-gold px-8 py-4 text-[0.95rem] font-medium text-navy transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(160,110,65,0.35)]"
              >
                Start the conversation
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-full border border-cream/26 bg-white/8 px-8 py-4 text-[0.95rem] font-medium text-cream transition-all duration-300 hover:-translate-y-1 hover:bg-white/14"
              >
                Review services
              </a>
            </div>

            <p
              ref={proofRef}
              className="mt-8 max-w-[28rem] border-l border-gold/55 pl-5 text-sm leading-relaxed text-cream/70"
            >
              Former AHJ. Twelve years in fire protection. Work shaped by what reviewers actually approve, not what consultants assume.
            </p>
          </div>

          <div className="relative h-[22rem] lg:hidden">
            <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(160deg,#20385c_0%,#12233a_58%,#0a121f_100%)] shadow-[0_30px_80px_rgba(10,18,30,0.35)]">
              <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(243,238,229,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(243,238,229,0.15)_1px,transparent_1px)] [background-size:42px_42px]" />
              <div className="absolute inset-x-6 top-6 border-t border-gold/40" />
              <div className="absolute inset-y-10 right-8 border-r border-cream/18" />
              <div className="absolute bottom-7 left-6 max-w-[14rem] border-l border-gold/45 pl-4">
                <p className="text-[0.7rem] uppercase tracking-[0.28em] text-gold/80">
                  Authority line
                </p>
                <p className="mt-3 font-display text-[2.3rem] leading-[0.95] tracking-[-0.04em] text-cream">
                  Former AHJ.
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/firepoint/fp-bg-logo.png"
                  alt=""
                  width={1200}
                  height={1200}
                  className="h-auto w-[200%] max-w-none object-contain opacity-[0.38] saturate-[1.14] brightness-[1.14] contrast-[1.06]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
