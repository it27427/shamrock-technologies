const openbtn = document.querySelector("#open-menu-btn");
const menulist = document.querySelector(".menulist");
const openbtnnew = document.querySelector(".open");
const closebtn = document.querySelector(".close");

menulist.classList.add("menu-closed", "flex");

openbtn.addEventListener("click", () => {
  openbtn.classList.toggle("is-open");

  menulist.classList.toggle("menu-closed");
  menulist.classList.toggle("menu-open");
});
