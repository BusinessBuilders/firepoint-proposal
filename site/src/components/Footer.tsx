export default function Footer() {
  return (
    <footer className="sand-section pt-2 pb-10 text-center">
      <p className="text-[0.72rem] uppercase tracking-[0.24em] text-navy/42">
        &copy; 2026 Fire Point Consulting &middot; Rutland, MA
      </p>
      <nav aria-label="Footer navigation">
        <ul className="mt-4 flex justify-center gap-6">
          <li>
            <a href="#services" className="text-sm text-navy/46 hover:text-gold transition-colors">Services</a>
          </li>
          <li>
            <a href="#about" className="text-sm text-navy/46 hover:text-gold transition-colors">About</a>
          </li>
          <li>
            <a href="#faq" className="text-sm text-navy/46 hover:text-gold transition-colors">FAQ</a>
          </li>
          <li>
            <a href="#contact" className="text-sm text-navy/46 hover:text-gold transition-colors">Contact</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
