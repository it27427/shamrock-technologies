const firstHeadings = document.querySelectorAll(".first-heading");
const secondHeadings = document.querySelectorAll(".second-heading");

gsap.from(firstHeadings, {
  xPercent: -30,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
});

gsap.from(secondHeadings, {
  xPercent: 30,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  delay: 0.2,
});
