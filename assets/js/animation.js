const heroTop = document.querySelectorAll(".herotop");

const tl = gsap.timeline({
  defaults: {
    duration: 1.5,
    ease: "power3.out",
  },
});

tl.from(
  heroTop,
  {
    yPercent: 30,
    opacity: 0,
  },
  "<0.3"
);

const subtitle = document.querySelectorAll(".subtitle");

const aboutTl = gsap.timeline({
  defaults: {
    duration: 1.5,
    ease: "power3.out",
  },
  delay: 0.2,
});

aboutTl.from(subtitle, {
  y: 30,
  opacity: 0,
});
