"use script";

let points = 0;
let lives = 3;
const startingMinutes = 2;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown')

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
  let civ1 = document.querySelector("#civil_container");
  
  civ1.removeEventListener("click", zoom_Civil1);

  civ1.classList.add("paused");

  civ1.querySelector("img").classList.add("zoom_out");

  civ1.addEventListener("animationend", repeatC1);

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
  let civ2 = document.querySelector("#civil_container2");
  civ2.removeEventListener("click", zoom_Civil2);

  civ2.classList.add("paused");

  civ2.querySelector("img").classList.add("zoom_out");

  civ2.addEventListener("animationend", repeatC2);

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

function zoom_Bandit3() {
  document
    .querySelector("#bandit3_container")
    .removeEventListener("click", zoom_Bandit3);

  document.querySelector("#bandit3_container").classList.add("paused");

  document.querySelector("#bandit3_sprite").classList.add("zoom_out");

  document
    .querySelector("#bandit3_container")
    .addEventListener("animationend", repeatB3);

  incrementPoints();
}

function repeatB3() {
  document
    .querySelector("#bandit3_container")
    .removeEventListener("animationend", repeatB3);

  document.querySelector("#bandit3_sprite").classList.remove("zoom_out");

  document.querySelector("#bandit3_container").classList.remove("paused");

  document.querySelector("#bandit3_container").classList.remove("band2");
  document.querySelector("#bandit3_container").offsetWidth;
  document.querySelector("#bandit3_container").classList.add("band2");

  document
    .querySelector("#bandit3_container")
    .addEventListener("click", zoom_Bandit3);
}


function incrementPoints() {
  points = points + 10;
  displayPoints();
  if (points == 100) {
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

function game_start() {
  document.querySelector("#game_background").classList.remove("hidden");
  document.querySelector("#game_elements").classList.add("hidden");
  document.querySelector("#start_g").classList.remove("hidden");
}

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds; 

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
}
