const openbtn = document.querySelector("#open-menu-btn");
const menulist = document.querySelector(".menulist");

const setMenuState = () => {
  if (window.innerWidth >= 992) {
    menulist.classList.add("menu-closed");
    menulist.classList.remove("menu-open");
    openbtn.classList.remove("is-open");
  } else {
    menulist.classList.add("menu-closed");
    menulist.classList.remove("menu-open");
  }
};

setMenuState();

window.addEventListener("resize", setMenuState);

openbtn.addEventListener("click", (e) => {
  e.stopPropagation();
  openbtn.classList.toggle("is-open");
  menulist.classList.toggle("menu-closed");
  menulist.classList.toggle("menu-open");
});

document.addEventListener("click", (e) => {
  if (
    window.innerWidth < 992 &&
    menulist.classList.contains("menu-open") &&
    !menulist.contains(e.target) &&
    e.target !== openbtn
  ) {
    menulist.classList.add("menu-closed");
    menulist.classList.remove("menu-open");
    openbtn.classList.remove("is-open");
  }
});
