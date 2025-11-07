"use strict";

/**  UP-FUNCTION  */
function up(set) {
  const upBtn = document.createElement("button");
  const defaultIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15l7-7l7 7" /></svg>`;
  upBtn.classList.add("up-btn", "up-btn__hide");

  function showBtn(num) {
    if (document.documentElement.scrollTop >= num) {
      upBtn.classList.remove("up-btn__hide");
    } else {
      upBtn.classList.add("up-btn__hide");
    }
  }

  if (set) {
    if (set.src) {
      upBtn.innerHTML = set.src;
    } else {
      upBtn.innerHTML = defaultIcon;
    }

    upBtn.style.top = set.top || "";
    upBtn.style.bottom = set.bottom || "";
    upBtn.style.left = set.left || "";
    upBtn.style.right = set.right || "";
    upBtn.style.background = set.bg || "";
    upBtn.style.width = set.width || "";
    upBtn.style.height = set.height || "";

    if (set.circle) {
      upBtn.classList.add("up-btn_circle");
    }

    document.body.append(upBtn);

    const showOnScroll = set.whenShow || 400;

    window.addEventListener("scroll", () => {
      showBtn(showOnScroll);
    });
  } else {
    upBtn.innerHTML = defaultIcon;
    document.body.append(upBtn);

    window.addEventListener("scroll", () => {
      showBtn(400);
    });
  }

  upBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

const newIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M5 8c.742 0 1.85-.733 2.78-1.475c1.2-.954 2.247-2.094 3.046-3.401C11.425 2.144 12 .956 12 0m0 0c0 .956.575 2.145 1.174 3.124c.8 1.307 1.847 2.447 3.045 3.401C17.15 7.267 18.26 8 19 8m-7-8v24"></path></svg>`;

up({
  bottom: "2.25rem",
  right: "1.25rem",
  width: "2.5rem",
  height: "2.5rem",
  bg: "oklch(32.109% 0.00004 271.152)", //#333
  src: newIcon,
  whenShow: 400,
  circle: true,
});
