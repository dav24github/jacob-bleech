// ==================== Line ====================
const line = document.querySelectorAll(".line-section");

line.forEach((line) => {
  line.style.width = line.parentElement.getBoundingClientRect().height + "px";
});
