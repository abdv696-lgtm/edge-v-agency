// Subtle reveal effect for supported browsers; page remains readable without JavaScript.
const observer = ("IntersectionObserver" in window) ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12}) : null;

document.querySelectorAll(".hero-copy, .hero-mark, .owner, .about, .services, .statement, .contact").forEach(el => {
  el.classList.add("reveal");
  if (observer) observer.observe(el);
  else el.classList.add("visible");
});
