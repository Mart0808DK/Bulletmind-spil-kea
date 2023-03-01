"use script";

let points = 0;
let lives = 3;
const startingMinutes = 2;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

window.addEventListener("load", start);

function start() {
  console.log("start");

  startBt();
}

function startBt() {
  document.querySelector("#start_g").classList.remove("hidden");
  document.querySelector("#startGame").addEventListener("click", startGame);
}

function startGame() {
  console.log("startGame");
  document.querySelector("#sound_start_game").play();
  document.querySelector("#sound_start_game").loop = true;
  document.querySelector("#startGame").removeEventListener("click", startGame);
  document.querySelector("#start_g").classList.add("hidden");
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
  document
    .querySelector("#bandit3_container")
    .addEventListener("click", zoom_Bandit3);
}

function zoom_Civil1() {
  console.log("civil 1 hit");
  let civ1 = document.querySelector("#civil_container");

  civ1.removeEventListener("click", zoom_Civil1);

  civ1.classList.add("paused");

  civ1.querySelector("img").classList.add("zoom_in");

  civ1.addEventListener("animationend", repeatC1);

  decrementPoints();
}

function repeatC1() {
  console.log("restart civil1");
  let restartC1 = document.querySelector("#civil_container");

  restartC1.removeEventListener("animationend", repeatC1);

  restartC1.querySelector("img").classList.remove("zoom_in");

  restartC1.classList.remove("paused");

  restartC1.classList.remove("civil1");
  restartC1.offsetWidth;
  restartC1.classList.add("civil1");

  restartC1.addEventListener("click", zoom_Civil1);
}

function zoom_Civil2() {
  console.log("civil 2 hit");
  let civ2 = document.querySelector("#civil_container2");

  civ2.removeEventListener("click", zoom_Civil2);

  civ2.classList.add("paused");

  civ2.querySelector("img").classList.add("zoom_in");

  civ2.addEventListener("animationend", repeatC2);

  decrementPoints();
}

function repeatC2() {
  console.log("restart civil2");
  let restartC2 = document.querySelector("#civil_container2");

  restartC2.removeEventListener("animationend", repeatC2);

  restartC2.querySelector("img").classList.remove("zoom_in");

  restartC2.classList.remove("paused");

  restartC2.classList.remove("civil2");
  restartC2.offsetWidth;
  restartC2.classList.add("civil2");

  restartC2.addEventListener("click", zoom_Civil2);
}

function zoom_Civil3() {
  console.log("civil 3 hit");
  let civ3 = document.querySelector("#civil_container3");
  civ3.removeEventListener("click", zoom_Civil3);

  civ3.classList.add("paused");

  civ3.querySelector("img").classList.add("zoom_in");

  civ3.addEventListener("animationend", repeatC3);

  decrementPoints();
}

function repeatC3() {
  console.log("restart civil 3");
  let restartC3 = document.querySelector("#civil_container3");

  restartC3.removeEventListener("animationend", repeatC3);

  restartC3.querySelector("img").classList.remove("zoom_in");

  restartC3.classList.remove("paused");

  restartC3.classList.remove("civil3");
  restartC3.offsetWidth;
  restartC3.classList.add("civil3");

  restartC3.addEventListener("click", zoom_Civil3);
}

function zoom_Bandit1() {
  console.log("bandit1 hit");
  document.querySelector("#sound_bandit_gun").play();
  let ban1 = document.querySelector("#bandit1_container");

  ban1.removeEventListener("click", zoom_Bandit1);

  ban1.classList.add("paused");

  ban1.querySelector("img").classList.add("zoom_out");

  ban1.addEventListener("animationend", repeatB1);

  incrementPoints();
}

function repeatB1() {
  console.log("restart bandit1");
  let restartB1 = document.querySelector("#bandit1_container");

  restartB1.removeEventListener("animationend", repeatB1);

  restartB1.querySelector("img").classList.remove("zoom_out");

  restartB1.classList.remove("paused");

  restartB1.classList.remove("band1");
  restartB1.offsetWidth;
  restartB1.classList.add("band1");

  restartB1.addEventListener("click", zoom_Bandit1);
}

function zoom_Bandit2() {
  console.log("bandit2 hit");
  document.querySelector("#sound_bandit_gun").play();
  let ban2 = document.querySelector("#bandit2_container");

  ban2.removeEventListener("click", zoom_Bandit2);

  ban2.classList.add("paused");

  ban2.querySelector("img").classList.add("zoom_out");

  ban2.addEventListener("animationend", repeatB2);

  incrementPoints();
}

function repeatB2() {
  console.log("restart bandit 2");
  let restartB2 = document.querySelector("#bandit2_container");

  restartB2.removeEventListener("animationend", repeatB2);

  restartB2.querySelector("img").classList.remove("zoom_out");

  restartB2.classList.remove("paused");

  restartB2.classList.remove("band2");
  restartB2.offsetWidth;
  restartB2.classList.add("band2");

  restartB2.addEventListener("click", zoom_Bandit2);
}

function zoom_Bandit3() {
  console.log("bandit 3 hit");
  document.querySelector("#sound_bandit_gun").play();
  let ban3 = document.querySelector("#bandit3_container");

  ban3.removeEventListener("click", zoom_Bandit3);

  ban3.classList.add("paused");

  ban3.querySelector("img").classList.add("zoom_out");

  ban3.addEventListener("animationend", repeatB3);

  incrementPoints();
}

function repeatB3() {
  console.log("restart bandit 3");
  let restartB3 = document.querySelector("#bandit3_container");

  restartB3.removeEventListener("animationend", repeatB3);

  restartB3.querySelector("img").classList.remove("zoom_out");

  restartB3.classList.remove("paused");

  restartB3.classList.remove("band2");
  restartB3.offsetWidth;
  restartB3.classList.add("band2");

  restartB3.addEventListener("click", zoom_Bandit3);
}

function incrementPoints() {
  points = points + 10;
  displayPoints();
  if (points == 50) {
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
  document.querySelector("#sound_start_game").pause();
  document.querySelector("#sound_level_complete").play();
}

function game_Over1() {
  document.querySelector("#game_background").classList.remove("hidden");
  document.querySelector("#game_elements").classList.add("hidden");
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#sound_start_game").pause();
  document.querySelector("#sound_game_over").play();
}

function game_start() {
  document.querySelector("#game_background").classList.remove("hidden");
  document.querySelector("#game_elements").classList.add("hidden");
  document.querySelector("#start_g").classList.remove("hidden");
}

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
}
