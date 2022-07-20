// ==================== Line ====================
const line = document.querySelectorAll(".line-section");

line.forEach((line) => {
  line.style.width = line.parentElement.getBoundingClientRect().height + "px";
});

// ==================== Line ====================
ScrollReveal().reveal(".image-svg", {
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
