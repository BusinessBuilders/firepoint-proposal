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
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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
    <section id="faq" ref={sectionRef} className="navy-card">
      <p className="eyebrow mb-4">FAQ</p>
      <h2 className="mt-3 font-display text-[clamp(2.2rem,4vw,4rem)] font-medium leading-[0.96] tracking-[-0.04em] text-cream">
        Practical questions, direct answers.
      </h2>
      <p className="mt-4 max-w-[34rem] text-[1rem] leading-relaxed text-cream/66">
        The site should answer the first pass quickly. The real work starts once the project details are on the table.
      </p>
      <div className="mt-10 flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            ref={(el) => { itemRefs.current[index] = el; }}
            className="overflow-hidden border-b border-cream/12"
          >
            <button
              aria-expanded={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="flex w-full items-center justify-between py-5 text-left font-body font-medium text-cream"
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
                <p className="pb-5 pr-10 text-[0.98rem] leading-relaxed text-cream/66">
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
