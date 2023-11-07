"use strict";

const slides = document.getElementsByClassName("slide");
const back = document.getElementById("back-control");
const forward = document.getElementById("forward-control");

const ammountOfSlides = slides.length;

let positon = 0;
let isActive = false;

// create dots

const dotsContainer = document.getElementById("dots-container");

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);
}

const dots = document.getElementsByClassName("dot");

dots[0].style.backgroundColor = "rgba(0, 128, 0, 0.5)";
slides[0].style.display = "block";

// arrows

back.addEventListener("click", () => {
  if (!isActive) {
    isActive = true;
    const nowPos = positon;
    positon = positon - 1 < 0 ? ammountOfSlides - 1 : positon - 1;

    dots[nowPos].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    dots[positon].style.backgroundColor = "rgba(0, 128, 0, 0.5)";

    moveLeft(nowPos, positon);
  }
});

forward.addEventListener("click", () => {
  if (!isActive) {
    isActive = true;
    const nowPos = positon;
    positon = positon + 1 > ammountOfSlides - 1 ? 0 : positon + 1;

    dots[nowPos].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    dots[positon].style.backgroundColor = "rgba(0, 128, 0, 0.5)";

    moveRight(nowPos, positon);
  }
});

// dots

for (let i = 0; i < ammountOfSlides; i++) {
  dots[i].addEventListener("click", () => {
    if (!isActive) {
      isActive = true;

      const prevPos = positon;
      positon = i;

      dots[prevPos].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      dots[positon].style.backgroundColor = "rgba(0, 128, 0, 0.5)";
      if (prevPos > positon) {
        moveLeft(prevPos, positon);
      } else {
        moveRight(prevPos, positon);
      }
    }
  });
}

// moving

const speed = 8;

function moveLeft(now, next) {
  let nowPos = 0,
    nextPos = -400;

  slides[next].style.left = "-400px";
  slides[next].style.display = "block";

  const intervalID = setInterval(() => {
    nowPos += speed;
    nextPos += speed;

    if (nextPos > 0) {
      slides[now].style.display = "none";
      isActive = false;
      clearInterval(intervalID);
    }

    slides[now].style.left = nowPos + "px";
    slides[next].style.left = nextPos + "px";
  }, 1);
}

function moveRight(now, next) {
  let nowPos = 0,
    nextPos = 400;

  slides[next].style.left = "400px";
  slides[next].style.display = "block";

  const intervalID = setInterval(() => {
    nowPos -= speed;
    nextPos -= speed;

    if (nextPos < 0) {
      slides[now].style.display = "none";
      isActive = false;
      clearInterval(intervalID);
    }

    slides[now].style.left = nowPos + "px";
    slides[next].style.left = nextPos + "px";
  }, 1);
}
