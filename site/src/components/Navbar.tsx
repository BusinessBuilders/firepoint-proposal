"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const navLinks = [
  { href: "#services", label: "Services", id: "services" },
  { href: "#about", label: "About", id: "about" },
  { href: "#faq", label: "FAQ", id: "faq" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      /* ── Active section highlighting ── */
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: "top 40%",
          end: "bottom 40%",
          onEnter: () => setActiveSection(id),
          onEnterBack: () => setActiveSection(id),
        });
      });

      /* ── Navbar entrance ── */
      gsap.from(navRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.1,
      });
    },
    { scope: navRef }
  );

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-cream/8 bg-[rgba(10,16,27,0.38)] backdrop-blur-xl"
    >
      <nav aria-label="Main navigation" className="flex items-center justify-between max-w-[1320px] mx-auto px-5 py-4 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-[0.9rem] border border-cream/10 bg-navy shadow-[0_12px_28px_rgba(10,16,27,0.22)]">
            <Image
              src="/assets/firepoint/LogoNavy.png"
              alt="Fire Point Consulting logo"
              width={28}
              height={28}
              className="h-auto w-7 object-contain"
            />
          </div>
          <span className="font-body text-[0.76rem] font-medium uppercase tracking-[0.28em] text-cream">
            Firepoint Consulting
          </span>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map(({ href, label, id }) => (
            <li key={id}>
              <a
                href={href}
                className={`relative pb-1 transition-colors duration-200 ${
                  activeSection === id
                    ? "text-gold"
                    : "text-cream/66 hover:text-gold"
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-gold transition-all duration-300 ${
                    activeSection === id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] w-11 h-11 items-center justify-center"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-5 h-[2px] bg-cream transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-cream transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-cream transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 pb-4 sm:px-8">
          {navLinks.map(({ href, label, id }) => (
            <li key={id}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 text-base font-medium transition-colors ${
                  activeSection === id
                    ? "text-gold"
                    : "text-cream/70 hover:text-gold"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
