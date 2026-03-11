const revealElements = [...document.querySelectorAll("[data-reveal]")];
const parallaxElements = [...document.querySelectorAll("[data-parallax]")];
const faqButtons = [...document.querySelectorAll("[data-faq-button]")];
const heroTablet = document.querySelector(".js-hero-tablet");

revealElements.forEach((element, index) => {
  element.style.setProperty("--delay", `${Math.min(index * 60, 360)}ms`);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -8% 0px",
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

const updateParallax = () => {
  const viewportHeight = window.innerHeight || 1;
  parallaxElements.forEach((element) => {
    const speed = Number(element.dataset.speed || 0.1);
    const rect = element.getBoundingClientRect();
    const progress = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
    const translate = progress * speed * -80;
    element.style.transform = `translate3d(0, ${translate}px, 0)`;
  });
};

const updateHeroTablet = () => {
  if (!heroTablet) return;
  const progress = Math.min(window.scrollY / 180, 1);
  const translateY = (1 - progress) * 40;
  const scale = 0.94 + progress * 0.06;
  const rotate = (1 - progress) * -6;

  heroTablet.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotate}deg)`;
  heroTablet.classList.toggle("is-settled", progress > 0.94);
};

let ticking = false;

const onScroll = () => {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(() => {
    updateParallax();
    updateHeroTablet();
    ticking = false;
  });
};

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
updateParallax();
updateHeroTablet();

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = button.getAttribute("aria-expanded") === "true";

    faqButtons.forEach((otherButton) => {
      otherButton.setAttribute("aria-expanded", "false");
      otherButton.closest(".faq-item")?.classList.remove("is-open");
    });

    if (!isOpen) {
      button.setAttribute("aria-expanded", "true");
      item?.classList.add("is-open");
    }
  });
});
