const openbtn = document.querySelector("#open-menu-btn");
const mobilemenu = document.querySelector(".mobilemenu");

const setMenuState = () => {
  if (window.innerWidth >= 992) {
    openbtn.classList.remove("is-open");
    mobilemenu.classList.remove("menu-open");
    mobilemenu.classList.add("hidden");
    mobilemenu.classList.add("menu-closed");
  } else {
    mobilemenu.classList.remove("menu-open");
    mobilemenu.classList.remove("hidden");
    mobilemenu.classList.add("menu-closed");
  }
};

setMenuState();
window.addEventListener("resize", setMenuState);

openbtn.addEventListener("click", (e) => {
  e.stopPropagation();
  openbtn.classList.toggle("is-open");
  mobilemenu.classList.toggle("menu-open");
  mobilemenu.classList.toggle("menu-closed");
});

document.addEventListener("click", (e) => {
  if (
    window.innerWidth < 992 &&
    mobilemenu.classList.contains("menu-open") &&
    !mobilemenu.contains(e.target) &&
    e.target !== openbtn
  ) {
    mobilemenu.classList.add("menu-closed");
    mobilemenu.classList.remove("menu-open");
    openbtn.classList.remove("is-open");
  }
});
