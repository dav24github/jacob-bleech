// ==================== Line ====================
const line = document.querySelectorAll(".line-section");

line.forEach((line) => {
  line.style.width = line.parentElement.getBoundingClientRect().height + "px";
});

// ==================== Line ====================
ScrollReveal().reveal(".image-svg-box", {
  duration: 300,
  delay: 500,
  afterReveal: function (el) {
    el.classList.add("is-visible");
  },
  beforeReset: function (el) {
    el.classList.remove("is-visible");
  },
});

ScrollReveal().reveal(".header__main-nav li", {
  distance: "100px",
  origin: "top",
  duration: 600,
  interval: 100,
});

ScrollReveal().reveal(".hero__social div", {
  distance: "100px",
  origin: "left",
  duration: 600,
  interval: 100,
});

ScrollReveal().reveal(".hero__text-box", {
  duration: 600,
  delay: 1500,
});

const tips = document.querySelector(".tips");
let old = 0;
// ==================== Line ====================
window.addEventListener("scroll", () => {
  console.log(old, "<", window.scrollY);
  if (window.scrollY >= 300) {
    tips.classList.add("visible");
    tips.classList.remove("hidden");
  } else if (old > window.scrollY) {
    tips.classList.add("hidden");
    tips.classList.remove("visible");
  }
  old = window.scrollY;
});
