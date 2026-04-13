"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(sectionRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });

      gsap.from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
      });
    },
    { scope: sectionRef }
  );

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "New inquiry — Fire Point Consulting",
          from_name: "Fire Point Consulting Website",
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
      <div ref={contentRef} className="max-w-2xl mx-auto">
        <p className="eyebrow mb-4 text-center">Contact</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-medium text-cream mt-2 text-center">
          Let&apos;s talk fire code.
        </h2>
        <p className="text-cream/70 text-[1.05rem] leading-relaxed mt-4 text-center">
          Reach out directly. Response within one business day.
        </p>
        <div className="flex justify-center mt-4">
          <a
            href="tel:+17742391458"
            className="inline-flex items-center gap-2 text-gold font-medium text-[1.05rem] hover:text-gold/80 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            (774) 239-1458
          </a>
        </div>

        {status === "success" ? (
          <div className="mt-10 text-center p-8 rounded-2xl border border-gold/30 bg-white/5">
            <p className="text-gold font-medium text-lg">Message sent.</p>
            <p className="text-cream/60 mt-2 text-sm">
              Jackie will be in touch within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-cream placeholder-cream/40 focus:outline-none focus:border-gold/60 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-cream placeholder-cream/40 focus:outline-none focus:border-gold/60 transition-colors"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-cream placeholder-cream/40 focus:outline-none focus:border-gold/60 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              required
              rows={4}
              className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-cream placeholder-cream/40 focus:outline-none focus:border-gold/60 transition-colors resize-none"
            />
            {status === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong — please try again or email{" "}
                <a href="mailto:contact@firepointconsult.com" className="underline">
                  contact@firepointconsult.com
                </a>{" "}
                directly.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 inline-flex justify-center items-center px-8 py-4 rounded-full bg-gold text-cream font-medium text-[0.95rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(160,110,65,0.35)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === "submitting" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
