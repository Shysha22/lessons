"use strict";

let header = document.querySelector(".header"),
  openMenu = document.querySelector(".icon-menu");
console.log(openMenu);

openMenu.addEventListener("click", () => {
  header.classList.toggle("open-menu");
});
