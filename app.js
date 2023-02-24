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
      .querySelector("#civil_container2")
      .addEventListener("click", zoom_Civil2);
  document
    .querySelector("#civil_container3")
    .addEventListener("click", zoom_Civil3);
  document
    .querySelector("#bandit1_container")
    .addEventListener("click", zoom_Bandit1);
  document
    .querySelector("#bandit2_container")
    .addEventListener("click", zoom_Bandit2);
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

function zoom_Civil2() {
  document
    .querySelector("#civil_container2")
    .removeEventListener("click", zoom_Civil2);

  document.querySelector("#civil_container2").classList.add("paused");

  document.querySelector("#civil_sprite2").classList.add("zoom_out");

  document
    .querySelector("#civil_container2")
    .addEventListener("animationend", repeatC2);

  decrementPoints();
}

function repeatC2() {
  document
    .querySelector("#civil_container2")
    .removeEventListener("animationend", repeatC2);

  document.querySelector("#civil_sprite2").classList.remove("zoom_out");

  document.querySelector("#civil_container2").classList.remove("paused");

  document.querySelector("#civil_container2").classList.remove("civil2");
  document.querySelector("#civil_container2").offsetWidth;
  document.querySelector("#civil_container2").classList.add("civil2");

  document
    .querySelector("#civil_container2")
    .addEventListener("click", zoom_Civil2);
}

function zoom_Civil3() {
  document
    .querySelector("#civil_container3")
    .removeEventListener("click", zoom_Civil3);

  document.querySelector("#civil_container3").classList.add("paused");

  document.querySelector("#civil_sprite3").classList.add("zoom_out");

  document
    .querySelector("#civil_container3")
    .addEventListener("animationend", repeatC3);

  decrementPoints();
}

function repeatC3() {
  document
    .querySelector("#civil_container3")
    .removeEventListener("animationend", repeatC3);

  document.querySelector("#civil_sprite3").classList.remove("zoom_out");

  document.querySelector("#civil_container3").classList.remove("paused");

  document.querySelector("#civil_container3").classList.remove("civil3");
  document.querySelector("#civil_container3").offsetWidth;
  document.querySelector("#civil_container3").classList.add("civil3");

  document
    .querySelector("#civil_container3")
    .addEventListener("click", zoom_Civil3);
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

function zoom_Bandit2() {
  document
    .querySelector("#bandit2_container")
    .removeEventListener("click", zoom_Bandit2);

  document.querySelector("#bandit2_container").classList.add("paused");

  document.querySelector("#bandit2_sprite").classList.add("zoom_out");

  document
    .querySelector("#bandit2_container")
    .addEventListener("animationend", repeatB2);

  incrementPoints();
}

function repeatB2() {
  document
    .querySelector("#bandit2_container")
    .removeEventListener("animationend", repeatB2);

  document.querySelector("#bandit2_sprite").classList.remove("zoom_out");

  document.querySelector("#bandit2_container").classList.remove("paused");

  document.querySelector("#bandit2_container").classList.remove("band2");
  document.querySelector("#bandit2_container").offsetWidth;
  document.querySelector("#bandit2_container").classList.add("band2");

  document
    .querySelector("#bandit2_container")
    .addEventListener("click", zoom_Bandit2);
}

function incrementPoints() {
  points = points + 10;
  displayPoints();
  if (points == 30) {
    level_Complete1();
  }
}

function displayPoints() {
  document.querySelector("#score_countGO").textContent = points;
  document.querySelector("#score_count").textContent = points;
  document.querySelector("#score_countGO2").textContent = points;
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
  document.querySelector("#game_elements").classList.add("hidden");
  document.querySelector("#level_complete").classList.remove("hidden");
}

function game_Over1() {
  document.querySelector("#game_background").classList.remove("hidden");
  document.querySelector("#game_elements").classList.add("hidden");
  document.querySelector("#game_over").classList.remove("hidden");
}
