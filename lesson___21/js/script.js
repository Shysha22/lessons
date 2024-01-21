"use strict";

let header = document.querySelector(".header"),
  openMenu = document.querySelector(".icon-menu");

openMenu.addEventListener("click", () => {
  header.classList.toggle("open-menu");
  if (header.classList.contains("open-menu")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
});
