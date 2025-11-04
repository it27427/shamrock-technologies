const openbtn = document.querySelector("#open-menu-btn");
const menulist = document.querySelector(".menulist");
const openbtnnew = document.querySelector(".open");
const closebtn = document.querySelector(".close");

menulist.classList.add("menu-closed");
menulist.classList.add("flex");

openbtn.addEventListener("click", () => {
  menulist.classList.toggle("menu-closed");
  menulist.classList.toggle("menu-open");

  // বাটন আইকন টগল করার অংশ
  openbtnnew.classList.toggle("hidden");
  closebtn.classList.toggle("hidden");
});
