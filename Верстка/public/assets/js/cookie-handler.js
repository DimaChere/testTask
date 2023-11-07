"use strict";

const cross = document.getElementById("cross__cookie");
const accept = document.getElementById("accept-cookie");
const decline = document.getElementById("decline-cookie");

cross.addEventListener("click", () => {
  const cookieBlock = document.getElementById("cookie");

  cookieBlock.style.visibility = "hidden";
});

accept.addEventListener("click", () => {
  const cookieBlock = document.getElementById("cookie");

  cookieBlock.style.visibility = "hidden";
});

decline.addEventListener("click", () => {
  const cookieBlock = document.getElementById("cookie");

  cookieBlock.style.visibility = "hidden";
});
