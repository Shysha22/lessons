"use strict";

let header = document.querySelector(".header"),
  openMenu = document.querySelector(".icon-menu");
console.log(openMenu);

openMenu.addEventListener("click", () => {
  header.classList.toggle("open-menu");
  if (header.classList.contains("open-menu")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
});

let btnHero = document.querySelectorAll(".hero__btn");
console.log(btnHero);

btnHero.forEach((btn) => {
  btn.addEventListener("mouseover", (e) => {
    btnHero.forEach((btn) => btn.classList.remove("hero__btn--action"));
    e.target.classList.add("hero__btn--action");
  });
});
