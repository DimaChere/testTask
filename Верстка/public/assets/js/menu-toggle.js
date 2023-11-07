"use strict";

const menuToggle = document.getElementById("menu-toggle");
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menu.style.visibility = "hidden";

menuToggle.addEventListener("click", () => {
  const isMenuOpen = menu.style.visibility === "hidden";

  menuIcon.src = isMenuOpen
    ? "./public/assets/icons/burger_cross.svg"
    : "./public/assets/icons/burger.svg";

  menuIcon.alt = isMenuOpen ? "Close Menu" : "Open Menu";

  if (isMenuOpen) {
    menu.style.visibility = "visible";
  } else {
    menu.style.visibility = "hidden";
  }
});
