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
    .removeEventListener("click", zoom_Civil1);

  document.querySelector("#civil_container").classList.add("paused");

  document.querySelector("#civil_sprite").classList.add("zoom_out");

  document
    .querySelector("#civil_container")
    .addEventListener("animationend", repeatC1);

  decrementPoints();
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
    .removeEventListener("click", zoom_Bandit1);

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
  if (points == 30) {
    level_Complete1();
  }
}

function displayPoints() {
  document.querySelector("#score_count").textContent = points;
}

function decrementPoints() {
  console.log("hello");
  if (lives <= 1) {
    game_Over1();
  } 
  displayDecrementLives();
  lives--;
}

function displayDecrementLives() {
  document.querySelector("#life_board" + lives).classList.remove("life_B");
  document.querySelector("#life_board" + lives).classList.add("broken_heart");
}

function level_Complete1() {
  document.querySelector("#game_background").classList.remove("hidden");
  document.querySelector("#level_complete").classList.remove("hidden");
}

function game_Over1() {
  document.querySelector("#game_background").classList.remove("hidden");
  document.querySelector("#game_over").classList.remove("hidden");
}
