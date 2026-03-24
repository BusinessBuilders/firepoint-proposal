"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

      if (formRef.current) {
        const fields = formRef.current.querySelectorAll("input, textarea, button");
        gsap.from(fields, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.05,
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
      <div ref={contentRef} className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-12">
        <div>
        <p className="eyebrow mb-4">Contact</p>
        <h2 className="mt-3 max-w-[12ch] font-display text-[clamp(2.7rem,4.6vw,5rem)] font-medium leading-[0.94] tracking-[-0.04em] text-cream">
          Bring the project in before review gets expensive.
        </h2>
        <p className="mt-5 max-w-[31rem] text-[1.05rem] leading-relaxed text-cream/70">
          Use the form to start the conversation. The field set matches the current FirePoint site, and the backend can be pointed at an external form service later without redesigning the UI.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.4rem] border border-cream/10 bg-white/6 p-5">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-gold/82">Email</p>
            <a href="mailto:contact@firepointconsult.com" className="mt-3 block text-[1.05rem] text-cream hover:text-gold transition-colors">
              contact@firepointconsult.com
            </a>
          </div>
          <div className="rounded-[1.4rem] border border-cream/10 bg-white/6 p-5">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-gold/82">Phone</p>
            <a href="tel:7742391458" className="mt-3 block text-[1.05rem] text-cream hover:text-gold transition-colors">
              774-239-1458
            </a>
          </div>
        </div>
        <p className="mt-6 max-w-[31rem] text-sm leading-relaxed text-cream/58">
          Recommended form service for a clean, ad-free frontend: Formspark. It keeps the custom UI, avoids embedded marketplace branding, and can be wired in later by replacing the form action.
        </p>
        </div>
        <form
          ref={formRef}
          action="#"
          method="post"
          data-form-service="formspark"
          className="grid gap-4 rounded-[1.75rem] border border-cream/10 bg-white/6 p-5 backdrop-blur-sm sm:grid-cols-2"
        >
          <div className="sm:col-span-1">
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-cream/82">Name</label>
            <input id="name" name="name" type="text" className="w-full rounded-[1rem] border border-cream/12 bg-navy/35 px-4 py-3 text-cream outline-none placeholder:text-cream/35" />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-cream/82">Email</label>
            <input id="email" name="email" type="email" className="w-full rounded-[1rem] border border-cream/12 bg-navy/35 px-4 py-3 text-cream outline-none placeholder:text-cream/35" />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-cream/82">Phone</label>
            <input id="phone" name="phone" type="tel" className="w-full rounded-[1rem] border border-cream/12 bg-navy/35 px-4 py-3 text-cream outline-none placeholder:text-cream/35" />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="address" className="mb-2 block text-sm font-medium text-cream/82">Address</label>
            <input id="address" name="address" type="text" className="w-full rounded-[1rem] border border-cream/12 bg-navy/35 px-4 py-3 text-cream outline-none placeholder:text-cream/35" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="subject" className="mb-2 block text-sm font-medium text-cream/82">Subject</label>
            <input id="subject" name="subject" type="text" className="w-full rounded-[1rem] border border-cream/12 bg-navy/35 px-4 py-3 text-cream outline-none placeholder:text-cream/35" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-cream/82">Message</label>
            <textarea id="message" name="message" rows={5} className="w-full rounded-[1rem] border border-cream/12 bg-navy/35 px-4 py-3 text-cream outline-none placeholder:text-cream/35" />
          </div>
          <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
            <p className="max-w-[24rem] text-sm leading-relaxed text-cream/58">
              External form service placeholder only for now. No backend is wired yet.
            </p>
            <button type="submit" className="inline-flex items-center rounded-full bg-gold px-6 py-3 font-medium text-navy transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(160,110,65,0.35)]">
              Submit inquiry
            </button>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
}
