const openbtn = document.querySelector("#open-menu-btn");
const menulist = document.querySelector(".menulist");
const openbtnnew = document.querySelector(".open");
const closebtn = document.querySelector(".close");

openbtn.addEventListener("click", () => {
  menulist.classList.toggle("hidden");
  openbtnnew.classList.toggle("hidden");
  closebtn.classList.toggle("hidden");
});
