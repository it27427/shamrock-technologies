document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  function animateFromBottom(elem, options = {}) {
    const defaults = {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      start: "top 90%",
      end: "top 60%",
      stagger: 0.08,
    };
    const cfg = { ...defaults, ...options };

    if (NodeList.prototype.isPrototypeOf(elem) || Array.isArray(elem)) {
      gsap.fromTo(
        elem,
        { y: cfg.y, opacity: cfg.opacity },
        {
          y: 0,
          opacity: 1,
          duration: cfg.duration,
          ease: cfg.ease,
          stagger: cfg.stagger,
          scrollTrigger: {
            trigger: elem[0] || elem,
            start: cfg.start,
            end: cfg.end,
            toggleActions: "play none none reverse",
          },
        }
      );
    } else {
      gsap.fromTo(
        elem,
        { y: cfg.y, opacity: cfg.opacity },
        {
          y: 0,
          opacity: 1,
          duration: cfg.duration,
          ease: cfg.ease,
          scrollTrigger: {
            trigger: elem,
            start: cfg.start,
            end: cfg.end,
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }

  document.querySelectorAll(".animate-up").forEach((el) => {
    const children = el.querySelectorAll(".animate-child");

    if (children.length > 0) {
      animateFromBottom(children, {
        stagger: 0.08,
        start: "top 95%",
        end: "top 70%",
      });
    } else {
      animateFromBottom(el, {
        start: "top 95%",
        end: "top 75%",
      });
    }
  });
});
