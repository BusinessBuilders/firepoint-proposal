"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap, ScrollSmoother, ScrollTrigger, useGSAP } from "@/lib/gsap";

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

  function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(target, true, "top 80px");
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-cream/8 backdrop-blur-xl" style={{background: "linear-gradient(to right, rgba(22,25,46,0.96) 0%, rgba(22,25,46,0.82) 40%, rgba(243,238,229,0.90) 100%)"}}
    >
      <nav aria-label="Main navigation" className="flex items-center justify-between max-w-[1320px] mx-auto px-5 py-4 sm:px-8 lg:px-10">
        <div className="flex items-center gap-0">
          <Image
            src="/assets/firepoint/fp-logo-new.png"
            alt="Fire Point Consulting logo"
            width={36}
            height={36}
            className="h-auto w-9 object-contain"
          />
          <Image
            src="/assets/firepoint/fp-wordmark.png"
            alt="Firepoint Consulting"
            width={160}
            height={32}
            className="h-auto w-[16rem] object-contain" style={{filter: "drop-shadow(0 0 0.5px currentColor) drop-shadow(0 0 0.5px currentColor) drop-shadow(0 0 0.5px currentColor)"}}
          />
          <span className="sr-only">Firepoint Consulting</span>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map(({ href, label, id }) => (
            <li key={id}>
              <a
                href={href}
                onClick={(e) => scrollTo(e, id)}
                className={`relative pb-1 transition-colors duration-200 ${
                  activeSection === id
                    ? "text-gold"
                    : "hover:text-gold"
                }`}
                style={activeSection === id ? {} : {color: "#F3EEE5"}}
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
                onClick={(e) => { scrollTo(e, id); setMenuOpen(false); }}
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
