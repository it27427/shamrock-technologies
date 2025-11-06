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

const subtitle = document.querySelectorAll(".subtitle");
const mainHeading = document.querySelectorAll(".main-heading");
const aboutThumb = document.querySelector(".about-thumb");
const textBox = document.querySelector(".textbox");
const counterbox = document.querySelector(".counterbox");
const aboutbox = document.querySelector(".aboutbox");

const aboutTl = gsap.timeline({
  defaults: {
    duration: 1.2,
    ease: "power3.out",
  },
  delay: 0.2,
});

aboutTl.from(subtitle, {
  y: 30,
  opacity: 0,
});

aboutTl.from(
  mainHeading,
  {
    y: 30,
    opacity: 0,
  },
  "<0.1"
);

aboutTl.from(
  aboutThumb,
  {
    xPercent: -30,
    opacity: 0,
    duration: 1.5,
  },
  "+=0.3"
);

aboutTl.from(
  textBox,
  {
    y: 50,
    x: -30,
    opacity: 0,
    duration: 1.2,
  },
  "<0.2"
);

aboutTl.from(
  counterbox,
  {
    y: 30,
    x: -20,
    opacity: 0,
    duration: 1,
  },
  "<0.1"
);

aboutTl.from(
  aboutbox,
  {
    y: 20,
    x: -10,
    opacity: 0,
    duration: 0.8,
  },
  "<0.1"
);
