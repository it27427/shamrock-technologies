const openbtn = document.querySelector("#open-menu-btn");
const menulist = document.querySelector(".menulist");

// page load এ correct state সেট করা
const setMenuState = () => {
  if (window.innerWidth >= 992) {
    // Desktop: hide mobile menu
    menulist.classList.add("menu-closed");
    menulist.classList.remove("menu-open");
    openbtn.classList.remove("is-open");
  } else {
    // Mobile: show closed menu
    menulist.classList.add("menu-closed");
    menulist.classList.remove("menu-open");
  }
};

// প্রথমে set state
setMenuState();

// resize হলে state ঠিক করা
window.addEventListener("resize", setMenuState);

// toggle button
openbtn.addEventListener("click", (e) => {
  e.stopPropagation(); // button click event bubble বন্ধ
  openbtn.classList.toggle("is-open");
  menulist.classList.toggle("menu-closed");
  menulist.classList.toggle("menu-open");
});

// document click: menu এর বাইরে click করলে close
document.addEventListener("click", (e) => {
  if (
    window.innerWidth < 992 && // মোবাইলে
    menulist.classList.contains("menu-open") && // menu open আছে
    !menulist.contains(e.target) && // click menur বাইরে
    e.target !== openbtn // click button না
  ) {
    // close menu
    menulist.classList.add("menu-closed");
    menulist.classList.remove("menu-open");
    openbtn.classList.remove("is-open");
  }
});
