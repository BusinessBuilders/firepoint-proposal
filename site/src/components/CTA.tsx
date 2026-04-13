"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(sectionRef.current, { y: 40, opacity: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true } });
      gsap.from(contentRef.current, { y: 30, opacity: 0, duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true } });
      if (formRef.current) {
        const fields = formRef.current.querySelectorAll("input, textarea, button");
        gsap.from(fields, { y: 20, opacity: 0, duration: 0.6, ease: "power2.out", stagger: 0.05, scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true } });
      }
    },
    { scope: sectionRef }
  );

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
    formData.append("subject", "New inquiry — Fire Point Consulting");
    formData.append("from_name", "Fire Point Consulting Website");
    formData.append("cc", "donovan@business-builder.online");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if (json.success) { setStatus("success"); form.reset(); } else { setStatus("error"); }
    } catch { setStatus("error"); }
  }

  return (
    <section id="contact" ref={sectionRef} className="sand-section sand-section--tight">
      <div className="overflow-hidden rounded-[2rem] border border-navy/10 bg-[linear-gradient(140deg,#172339_0%,#0c1422_68%,#0a111d_100%)] px-6 py-12 shadow-[0_30px_80px_rgba(10,18,30,0.22)] sm:px-10 lg:px-14 lg:py-16" style={{ backgroundImage: "radial-gradient(circle at top right, rgba(160,110,65,0.22), transparent 30%), radial-gradient(circle at 15% 10%, rgba(255,255,255,0.06), transparent 20%), linear-gradient(145deg, #112235, #1b4273)" }}>
        <div ref={contentRef} className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <p className="eyebrow mb-4">Contact</p>
            <h2 className="mt-3 max-w-[12ch] font-display text-[clamp(2.7rem,4.6vw,5rem)] font-medium leading-[0.94] tracking-[-0.04em] text-cream">Bring the project in before review gets expensive.</h2>
            <p className="mt-5 max-w-[31rem] text-[1.05rem] leading-relaxed text-cream/70">Reach out directly. Response within one business day.</p>
            <div className="mt-8 flex gap-4">
              <a href="mailto:contact@firepointconsult.com" className="group inline-flex items-center gap-3 rounded-full border border-cream/10 bg-white/6 px-6 py-3 transition-all duration-200 hover:border-gold/40 hover:bg-gold/10 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(160,110,65,0.18)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span className="text-[0.82rem] font-medium uppercase tracking-[0.18em] text-cream group-hover:text-gold transition-colors">Email</span>
              </a>
              <a href="tel:+17742391458" className="group inline-flex items-center gap-3 rounded-full border border-cream/10 bg-white/6 px-6 py-3 transition-all duration-200 hover:border-gold/40 hover:bg-gold/10 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(160,110,65,0.18)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.83-.83a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.27 16l-.35.92z"/></svg>
                <span className="text-[0.82rem] font-medium uppercase tracking-[0.18em] text-cream group-hover:text-gold transition-colors">Call</span>
              </a>
            </div>
          </div>
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center rounded-[1.75rem] border border-gold/30 bg-white/5 p-10 text-center">
              <p className="font-display text-2xl text-gold">Message sent.</p>
              <p className="mt-3 text-cream/60 text-sm">Jackie will be in touch within one business day.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4 rounded-[1.75rem] border border-cream/10 bg-white/6 p-5 backdrop-blur-sm sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-cream/82">Name</label>
                <input id="name" name="name" type="text" required className="w-full rounded-[1rem] border border-cream/12 bg-navy/35 px-4 py-3 text-cream outline-none placeholder:text-cream/35 focus:border-gold/50 transition-colors" />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-cream/82">Email</label>
                <input id="email" name="email" type="email" required className="w-full rounded-[1rem] border border-cream/12 bg-navy/35 px-4 py-3 text-cream outline-none placeholder:text-cream/35 focus:border-gold/50 transition-colors" />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-cream/82">Phone</label>
                <input id="phone" name="phone" type="tel" className="w-full rounded-[1rem] border border-cream/12 bg-navy/35 px-4 py-3 text-cream outline-none placeholder:text-cream/35 focus:border-gold/50 transition-colors" />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="address" className="mb-2 block text-sm font-medium text-cream/82">Address</label>
                <input id="address" name="address" type="text" className="w-full rounded-[1rem] border border-cream/12 bg-navy/35 px-4 py-3 text-cream outline-none placeholder:text-cream/35 focus:border-gold/50 transition-colors" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-cream/82">Subject</label>
                <input id="subject" name="subject" type="text" className="w-full rounded-[1rem] border border-cream/12 bg-navy/35 px-4 py-3 text-cream outline-none placeholder:text-cream/35 focus:border-gold/50 transition-colors" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-cream/82">Message</label>
                <textarea id="message" name="message" rows={5} required className="w-full rounded-[1rem] border border-cream/12 bg-navy/35 px-4 py-3 text-cream outline-none placeholder:text-cream/35 focus:border-gold/50 transition-colors" />
              </div>
              <div className="sm:col-span-2 flex flex-wrap items-center justify-end gap-4 pt-2">
                {status === "error" && (
                  <p className="text-red-400 text-sm mr-auto">Something went wrong — email <a href="mailto:contact@firepointconsult.com" className="underline">contact@firepointconsult.com</a> directly.</p>
                )}
                <button type="submit" disabled={status === "submitting"} className="inline-flex items-center rounded-full bg-gold px-6 py-3 font-medium text-navy transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(160,110,65,0.35)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                  {status === "submitting" ? "Sending…" : "Submit inquiry"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
