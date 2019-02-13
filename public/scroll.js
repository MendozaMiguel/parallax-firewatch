let Parallax0 = document.querySelector("#parallax0");
let Parallax1 = document.querySelector("#parallax1");
let Parallax2 = document.querySelector("#parallax2");
let Parallax3 = document.querySelector("#parallax3");
let Parallax4 = document.querySelector("#parallax4");
let Parallax5 = document.querySelector("#parallax5");
let Parallax6 = document.querySelector("#parallax6");
let Parallax7 = document.querySelector("#parallax7");
let Parallax8 = document.querySelector("#parallax8");
let horsparallax = document.querySelector("#horsparallax");

let xScrollPosition;
let yScrollPosition;

function scrollLoop(e){
  xScrollPosition = window.scrollX;
  console.log("scroll horizontal: ", xScrollPosition)
  yScrollPosition = window.scrollY;
  console.log("scroll vertical: ", yScrollPosition)
  setTranslate(0, yScrollPosition * -0.12/5, Parallax0);
  setTranslate(0, yScrollPosition * -0.3/5, Parallax1);
  setTranslate(0, yScrollPosition * -0.66/5, Parallax2);
  setTranslate(0, yScrollPosition * -0.96/5, Parallax3);
  setTranslate(0, yScrollPosition * -1.56/5, Parallax4);
  setTranslate(0, yScrollPosition * -2.16/5, Parallax5);
  setTranslate(0, yScrollPosition * -2.94/5, Parallax6);
  setTranslate(0, yScrollPosition * -3.14/5, Parallax7);
  setTranslate(0, yScrollPosition * -6/5, Parallax8);
  setTranslate(0, yScrollPosition * -6/5, horsparallax);


  window.addEventListener("scroll", scrollLoop);
}
function setTranslate(xPos, yPos, el){
  el.style.transform = "Translate3d(" + xPos + "," + yPos + "px,0)";
}

window.scrollLoop()