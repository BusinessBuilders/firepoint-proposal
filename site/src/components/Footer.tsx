export default function Footer() {
  return (
    <footer className="sand-section py-8 text-center">
      <p className="text-navy/50 text-sm">&copy; 2026 Fire Point Consulting &middot; Rutland, MA</p>
      <nav aria-label="Footer navigation">
        <ul className="flex justify-center gap-6 mt-3">
          <li>
            <a href="#services" className="text-sm text-navy/40 hover:text-gold transition-colors">Services</a>
          </li>
          <li>
            <a href="#about" className="text-sm text-navy/40 hover:text-gold transition-colors">About</a>
          </li>
          <li>
            <a href="#faq" className="text-sm text-navy/40 hover:text-gold transition-colors">FAQ</a>
          </li>
          <li>
            <a href="#contact" className="text-sm text-navy/40 hover:text-gold transition-colors">Contact</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
