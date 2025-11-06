document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".videocontainer",
      start: "top bottom",
      end: "top center",
      scrub: true,
      markers: false,
    },
  });

  tl.to(".brands-thumb-wrap", {
    marginTop: "0px",
    ease: "power2.out",
  });

  tl.to(".brands-video", {
    marginLeft: "0px",
    ease: "power2.out",
  });

  tl.to(
    ".videocontainer",
    {
      maxWidth: "100%",
      ease: "power2.out",
    },
    "<"
  );
});
