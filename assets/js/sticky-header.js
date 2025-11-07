const header = document.querySelector("#header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;

  if (scrollY > viewportHeight) {
    header.classList.add("sticky-header");
    header.classList.remove("relative");

    if (scrollY > lastScrollY) {
      header.classList.add("hide-header");
    } else {
      header.classList.remove("hide-header");
    }
  } else {
    header.classList.remove("sticky-header");
  }

  lastScrollY = scrollY;
});
