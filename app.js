"use script";

let points = 0;
let lives = 3;

window.addEventListener("load", start);

function start() {
  console.log("start");
  document
    .querySelector("#civil_container")
    .addEventListener("click", zoom_Civil1);
  document
    .querySelector("#bandit1_container")
    .addEventListener("click", zoom_Bandit1);
}

function zoom_Civil1() {
  document
    .querySelector("#civil_container")
    .removeEventListener("click", start);

  document.querySelector("#civil_container").classList.add("paused");

  document.querySelector("#civil_sprite").classList.add("zoom_out");

  document
    .querySelector("#civil_container")
    .addEventListener("animationend", repeatC1);
}

function repeatC1() {
  document
    .querySelector("#civil_container")
    .removeEventListener("animationend", repeatC1);

  document.querySelector("#civil_sprite").classList.remove("zoom_out");

  document.querySelector("#civil_container").classList.remove("paused");

  document.querySelector("#civil_container").classList.remove("civil1");
  document.querySelector("#civil_container").offsetWidth;
  document.querySelector("#civil_container").classList.add("civil1");

  document
    .querySelector("#civil_container")
    .addEventListener("click", zoom_Civil1);
}

function zoom_Bandit1() {
  document
    .querySelector("#bandit1_container")
    .removeEventListener("click", start);

  document.querySelector("#bandit1_container").classList.add("paused");

  document.querySelector("#bandit1_sprite").classList.add("zoom_out");

  document
    .querySelector("#bandit1_container")
    .addEventListener("animationend", repeatB1);

    incrementPoints();
}

function repeatB1() {
  document
    .querySelector("#bandit1_container")
    .removeEventListener("animationend", repeatB1);

  document.querySelector("#bandit1_sprite").classList.remove("zoom_out");

  document.querySelector("#bandit1_container").classList.remove("paused");

  document.querySelector("#bandit1_container").classList.remove("band1");
  document.querySelector("#bandit1_container").offsetWidth;
  document.querySelector("#bandit1_container").classList.add("band1");

  document
    .querySelector("#bandit1_container")
    .addEventListener("click", zoom_Bandit1);
}

function incrementPoints() {
  points = points + 10;
  displayPoints();
}

function displayPoints() {
  document.querySelector("#score_count").textContent = points;
}
