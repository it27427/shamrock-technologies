const firstHeadings = document.querySelectorAll(".first-heading");
const secondHeadings = document.querySelectorAll(".second-heading");
const heroTop = document.querySelectorAll(".herotop");
const heroDesign = document.querySelectorAll(".herodesign");

const tl = gsap.timeline({
  defaults: {
    duration: 1.5,
    ease: "power3.out",
  },
});

tl.from(firstHeadings, {
  xPercent: -30,
  opacity: 0,
});

tl.from(
  secondHeadings,
  {
    xPercent: 30,
    opacity: 0,
  },
  "<0.2"
);

tl.from(
  heroTop,
  {
    yPercent: 30,
    opacity: 0,
  },
  "<0.3"
);

tl.from(
  heroDesign,
  {
    yPercent: 50,
    opacity: 0,
  },
  "+=0.2"
);
