"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const faqs = [
  {
    question: "What\u2019s your turnaround time?",
    answer: "10 business days for third-party plan reviews. Timelines for other project types vary \u2014 contact me to discuss your specific scope.",
  },
  {
    question: "What\u2019s your experience working with AHJs?",
    answer:
      "I served as an Authority Having Jurisdiction for 10+ years. I know exactly what AHJs look for because I was one.",
  },
  {
    question: "How long have you been in the industry?",
    answer:
      "12 years in fire protection \u2014 from field inspections to code consulting to third-party reviewer.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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

      /* ── Gold accent line ── */
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

      /* ── FAQ items stagger in ── */
      gsap.from(itemRefs.current.filter(Boolean), {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="faq" ref={sectionRef} className="sand-section">
      <p className="eyebrow mb-4">FAQ</p>
      <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-medium text-navy mt-2">
        Common questions.
      </h2>
      <div
        ref={accentRef}
        className="w-16 h-0.5 bg-gradient-to-r from-gold to-transparent mt-4 mb-10"
      />
      <div className="mt-10 flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            ref={(el) => { itemRefs.current[index] = el; }}
            className="bg-white/70 border border-navy/[0.08] rounded-[18px] overflow-hidden"
          >
            <button
              aria-expanded={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full text-left p-5 font-body font-medium text-navy flex justify-between items-center"
            >
              {faq.question}
              <span
                className={`text-gold text-xl transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              role="region"
              className={`grid transition-[grid-template-rows] duration-300 ${
                openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-navy/70 text-[0.95rem] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
