const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}


// Responsive hero image slider: assets/images/slider1.png through slider5.png.
const hero = document.querySelector(".hero");
if (hero) {
  const slides = Array.from(hero.querySelectorAll(".hero-slide"));
  const dots = Array.from(hero.querySelectorAll(".slider-dot"));
  const previous = hero.querySelector(".slider-prev");
  const next = hero.querySelector(".slider-next");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeIndex = 0;
  let timer = null;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === activeIndex);
      slide.setAttribute("aria-hidden", String(i !== activeIndex));
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === activeIndex);
      dot.setAttribute("aria-pressed", String(i === activeIndex));
    });
  };

  const stopAutoplay = () => {
    if (timer) window.clearInterval(timer);
    timer = null;
  };
  const startAutoplay = () => {
    stopAutoplay();
    if (!reduceMotion && !document.hidden) timer = window.setInterval(() => showSlide(activeIndex + 1), 5000);
  };

  previous?.addEventListener("click", () => { showSlide(activeIndex - 1); startAutoplay(); });
  next?.addEventListener("click", () => { showSlide(activeIndex + 1); startAutoplay(); });
  dots.forEach((dot, index) => dot.addEventListener("click", () => { showSlide(index); startAutoplay(); }));
  hero.addEventListener("mouseenter", stopAutoplay);
  hero.addEventListener("mouseleave", startAutoplay);
  hero.addEventListener("focusin", stopAutoplay);
  hero.addEventListener("focusout", startAutoplay);
  document.addEventListener("visibilitychange", () => document.hidden ? stopAutoplay() : startAutoplay());
  showSlide(0);
  startAutoplay();
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const name = String(data.get("name") || "").trim();
    const community = String(data.get("community") || "").trim();
    const topic = String(data.get("topic") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent(`Constituency message: ${topic}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCommunity: ${community || "Not provided"}\nTopic: ${topic}\n\nMessage:\n${message}\n\nSent through the campaign website contact form.`
    );
    const status = document.querySelector("#form-status");
    if (status) status.textContent = "Your email app should open with the message prepared. Review it before sending.";
    window.location.href = `mailto:samueladhieu2021@email.com?subject=${subject}&body=${body}`;
  });
}
