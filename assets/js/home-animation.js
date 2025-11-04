const firstHeading = document.querySelector(".first-heading");
const secondHeading = document.querySelector(".second-heading");

gsap.from(firstHeading, {
  xPercent: -30,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
});

gsap.from(secondHeading, {
  xPercent: 30,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  delay: 0.2,
});
