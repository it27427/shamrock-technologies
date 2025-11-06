document.addEventListener("DOMContentLoaded", () => {
  const initVideoAnimation = () => {
    ScrollTrigger.getAll().forEach((st) => st.kill());

    if (window.innerWidth >= 768) {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".videocontainer",
          start: "top bottom",
          end: "top top",
          scrub: true,
          markers: false,
        },
      });

      tl.to(".brands-thumb-wrap", {
        marginTop: "0px",
        ease: "power2.out",
        duration: 1,
      });

      tl.to(
        ".brands-video",
        {
          marginLeft: "0px",
          ease: "power2.out",
          duration: 1,
        },
        "<"
      );

      tl.to(
        ".videocontainer",
        {
          maxWidth: "100%",
          ease: "power2.out",
          duration: 1,
        },
        "<"
      );

      gsap.set(".videobox", {
        paddingBottom: 80,
      });
    }
  };

  initVideoAnimation();

  window.addEventListener("resize", () => {
    initVideoAnimation();
  });
});
