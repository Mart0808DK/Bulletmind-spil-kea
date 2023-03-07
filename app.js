"use script";

window.addEventListener("load", start);

// variabler der viser liv og point i starten
let points = 0;
let lives = 3;

// Start skærm funktion
function start() {
  console.log("start");
  startBt();
  document.querySelector("#btn_go_to_start").addEventListener("click", showStartScreen);
  document.querySelector("#btn_restart").addEventListener("click", startGame);
}

// Start knap funktion der sætter spillet i gang
function startBt() {
  document.querySelector("#start_g").classList.remove("hidden");
  document.querySelector("#startGame").addEventListener("click", startGame);
}

// funktionen der sætter spillet igang
function startGame() {
  console.log("startGame");
  document.querySelector("#sound_level_complete").pause();
  document.querySelector("#sound_game_over").pause();
  resetLives();
  resetPoint();
  showGameScreen();
  time_bar();
  startAnimation();

  document.querySelector("#sound_start_game").play();
  document.querySelector("#sound_start_game").loop = true;
  document.querySelector("#sound_start_game").volume = 0.2;

  startClickEvent();
}

//----- ------------------------funktioner der sætter zoom og pause animation på det gode og det dårlige----- ---------------------//
function zoom_Civil1() {
  console.log("civil 1 hit");
  document.querySelector("#sound_civil").currentTime = 0;
  document.querySelector("#sound_civil").play();
  let civ1 = document.querySelector("#civil_container");

  civ1.removeEventListener("mousedown", zoom_Civil1);

  civ1.classList.add("paused");

  civ1.querySelector("img").classList.add("zoom_in");

  civ1.addEventListener("animationend", repeatC1);

  decrementPoints();
}

// genstarter civil 1 funktion
function repeatC1() {
  console.log("restart civil1");
  let restartC1 = document.querySelector("#civil_container");

  restartC1.removeEventListener("animationend", repeatC1);

  restartC1.querySelector("img").classList.remove("zoom_in");

  restartC1.classList.remove("paused");

  restartC1.classList.remove("civil1");
  restartC1.offsetWidth;
  restartC1.classList.add("civil1");

  restartC1.addEventListener("mousedown", zoom_Civil1);
}

function zoom_Civil2() {
  console.log("civil 2 hit");
  document.querySelector("#sound_civil").currentTime = 0;
  document.querySelector("#sound_civil").play();
  let civ2 = document.querySelector("#civil_container2");

  civ2.removeEventListener("mousedown", zoom_Civil2);

  civ2.classList.add("paused");

  civ2.querySelector("img").classList.add("zoom_in");

  civ2.addEventListener("animationend", repeatC2);

  decrementPoints();
}

// genstarter civil 2 funktion
function repeatC2() {
  console.log("restart civil2");
  let restartC2 = document.querySelector("#civil_container2");

  restartC2.removeEventListener("animationend", repeatC2);

  restartC2.querySelector("img").classList.remove("zoom_in");

  restartC2.classList.remove("paused");

  restartC2.classList.remove("civil2");
  restartC2.offsetWidth;
  restartC2.classList.add("civil2");

  restartC2.addEventListener("mousedown", zoom_Civil2);
}

function zoom_Civil3() {
  console.log("civil 3 hit");
  document.querySelector("#sound_civil").currentTime = 0;
  document.querySelector("#sound_civil").play();
  let civ3 = document.querySelector("#civil_container3");

  civ3.removeEventListener("mousedown", zoom_Civil3);

  civ3.classList.add("paused");

  civ3.querySelector("img").classList.add("zoom_in");

  civ3.addEventListener("animationend", repeatC3);

  decrementPoints();
}

// genstarter civil 3 funktion
function repeatC3() {
  console.log("restart civil 3");
  let restartC3 = document.querySelector("#civil_container3");

  restartC3.removeEventListener("animationend", repeatC3);

  restartC3.querySelector("img").classList.remove("zoom_in");

  restartC3.classList.remove("paused");

  restartC3.classList.remove("civil3");
  restartC3.offsetWidth;
  restartC3.classList.add("civil3");

  restartC3.addEventListener("mousedown", zoom_Civil3);
}

function zoom_Bandit1() {
  console.log("bandit1 hit");
  document.querySelector("#sound_bandit_gun").volume = 0.4;
  document.querySelector("#sound_bandit_gun").currentTime = 0;
  document.querySelector("#sound_bandit_gun").play();
  let ban1 = document.querySelector("#bandit1_container");

  ban1.removeEventListener("mousedown", zoom_Bandit1);

  ban1.classList.add("paused");

  ban1.querySelector("img").classList.add("zoom_out");

  ban1.addEventListener("animationend", repeatB1);

  incrementPoints();
}

// genstart bandit1 funktion
function repeatB1() {
  console.log("restart bandit1");
  let restartB1 = document.querySelector("#bandit1_container");

  restartB1.removeEventListener("animationend", repeatB1);

  restartB1.querySelector("img").classList.remove("zoom_out");

  restartB1.classList.remove("paused");

  restartB1.classList.remove("band1");
  restartB1.offsetWidth;
  restartB1.classList.add("band1");

  restartB1.addEventListener("mousedown", zoom_Bandit1);
}

function zoom_Bandit2() {
  console.log("bandit2 hit");
  document.querySelector("#sound_bandit_gun").currentTime = 0;
  document.querySelector("#sound_bandit_gun").play();
  let ban2 = document.querySelector("#bandit2_container");

  ban2.removeEventListener("mousedown", zoom_Bandit2);

  ban2.classList.add("paused");

  ban2.querySelector("img").classList.add("zoom_out");

  ban2.addEventListener("animationend", repeatB2);

  incrementPoints();
}

// genstart bandit2 funktion
function repeatB2() {
  console.log("restart bandit 2");
  let restartB2 = document.querySelector("#bandit2_container");

  restartB2.removeEventListener("animationend", repeatB2);

  restartB2.querySelector("img").classList.remove("zoom_out");

  restartB2.classList.remove("paused");

  restartB2.classList.remove("band2");
  restartB2.offsetWidth;
  restartB2.classList.add("band2");

  restartB2.addEventListener("mousedown", zoom_Bandit2);
}

function zoom_Bandit3() {
  console.log("bandit 3 hit");
  document.querySelector("#sound_bandit_gun").currentTime = 0;
  document.querySelector("#sound_bandit_gun").play();
  let ban3 = document.querySelector("#bandit3_container");

  ban3.removeEventListener("mousedown", zoom_Bandit3);

  ban3.classList.add("paused");

  ban3.querySelector("img").classList.add("zoom_out");

  ban3.addEventListener("animationend", repeatB3);

  incrementPoints();
}

// genstart bandit3 funktion
function repeatB3() {
  console.log("restart bandit 3");
  let restartB3 = document.querySelector("#bandit3_container");

  restartB3.removeEventListener("animationend", repeatB3);

  restartB3.querySelector("img").classList.remove("zoom_out");

  restartB3.classList.remove("paused");

  restartB3.classList.remove("band2");
  restartB3.offsetWidth;
  restartB3.classList.add("band2");

  restartB3.addEventListener("mousedown", zoom_Bandit3);
}

//--------------------------------------------- Game start funktioner-----------------------------------------------------------//
// funktion der viser startskærm efter level-complete
function showStartScreen() {
  console.log("showStartScreen");
  document.querySelector("#sound_level_complete").pause();
  document.querySelector("#start_g").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  //document.querySelector("#game").classList.add("hidden");
  console.log("I've added hidden");
  document.querySelector("#level_complete").classList.add("hidden");

  resetTimer();
}


// funktion der viser spilskærm
function showGameScreen() {
  console.log("showGameScreen");
  document.querySelector("#start_g").classList.add("hidden");
  document.querySelector("#start_g").addEventListener("animationend", transitionEnd);

  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

// funktion der nulstiller liv
function resetLives() {
  lives = 3;

  document.querySelector("#life_board1").classList.remove("broken_heart");
  document.querySelector("#life_board2").classList.remove("broken_heart");
  document.querySelector("#life_board3").classList.remove("broken_heart");

  document.querySelector("#life_board1").classList.add("life_B");
  document.querySelector("#life_board2").classList.add("life_B");
  document.querySelector("#life_board3").classList.add("life_B");
}

// funktion der nultiller points
function resetPoint() {
  points = 0;

  displayPoints();
}

// funktion der starter click event på alle container i spillet der skal clikkes på
function startClickEvent() {
  document.querySelector("#civil_container").addEventListener("mousedown", zoom_Civil1);
  document.querySelector("#civil_container2").addEventListener("mousedown", zoom_Civil2);
  document.querySelector("#civil_container3").addEventListener("mousedown", zoom_Civil3);
  document.querySelector("#bandit1_container").addEventListener("mousedown", zoom_Bandit1);
  document.querySelector("#bandit2_container").addEventListener("mousedown", zoom_Bandit2);
  document.querySelector("#bandit3_container").addEventListener("mousedown", zoom_Bandit3);
}

//------------------------------------------------ Tilstands funktioner-----------------------------------------------------------//

// level_complete funktionen
function level_Complete1() {
  console.log("Level_complete");
  stopAnimation();
  document.querySelector("#level_complete").classList.remove("hidden");
  document.querySelector("#sound_start_game").pause();
  document.querySelector("#sound_level_complete").play();
  resetTimer();
}

// game_over funktionen
function game_Over1() {
  console.log("Game_over");
  stopAnimation();
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#sound_start_game").pause();
  document.querySelector("#sound_game_over").play();
  resetTimer();
}

//-------------------------------------------- Animation funktioner--------------------------------------------------------//

// starter animation til spillet
function startAnimation() {
  document.querySelector("#civil_container").classList.add("civil1");
  document.querySelector("#civil_container2").classList.add("civil2");
  document.querySelector("#civil_container3").classList.add("civil3");
  document.querySelector("#bandit1_container").classList.add("band1");
  document.querySelector("#bandit2_container").classList.add("band2");
  document.querySelector("#bandit3_container").classList.add("band3");
}

// stopper animation når spillet er slut eller gennemført
function stopAnimation() {
  document.querySelector("#civil_container").classList.remove("civil1");
  document.querySelector("#civil_container").offsetWidth;
  document.querySelector("#civil_container2").classList.remove("civil2");
  document.querySelector("#civil_container2").offsetWidth;
  document.querySelector("#civil_container3").classList.remove("civil3");
  document.querySelector("#civil_container3").offsetWidth;

  document.querySelector("#bandit1_container").classList.remove("band1");
  document.querySelector("#bandit1_container").offsetWidth;
  document.querySelector("#bandit2_container").classList.remove("band2");
  document.querySelector("#bandit2_container").offsetWidth;
  document.querySelector("#bandit3_container").classList.remove("band3");
  document.querySelector("#bandit3_container").offsetWidth;
}

//------------------------------------------------ Game UI funktioner-------------------------------------------------------------//

// Viser time bar i øverste ventre hjørne
function time_bar() {
  document.querySelector("#time_bar_sprite").classList.add("shrink");
  document.querySelector("#time_bar_sprite").addEventListener("animationend", startGame);
  document.querySelector("#time_bar_sprite").addEventListener("animationend", timeisUp);
}

// funktion der afgør hvad der sker når tiden løber ud
function timeisUp() {
  if (points == 100) {
    level_Complete1();
  } else {
    game_Over1();
  }
}

// funktion der afgør hvor mange points man får at clikker på en god ting og når der er level-complete
function incrementPoints() {
  points = points + 10;
  displayPoints();
  if (points == 100) {
    level_Complete1();
  }
}

// funktion der viser points
function displayPoints() {
  document.querySelector("#score_countGO").textContent = points;
  document.querySelector("#score_count").textContent = points;
  document.querySelector("#score_countGO2").textContent = points;
}

// funktion der viser når man rammer en dårlig ting
function decrementPoints() {
  console.log("hello");
  if (lives <= 1) {
    game_Over1();
  }
  displayDecrementLives();
  lives--;
}

// funktion der viser at hjerte går fra rødt til gråt når man rammer en dårlig ting
function displayDecrementLives() {
  document.querySelector("#life_board" + lives).classList.remove("life_B");
  document.querySelector("#life_board" + lives).classList.add("broken_heart");
}

// funktion der nulstiller timeren
function resetTimer() {
  document.querySelector("#time_bar_sprite").removeEventListener("animationend", timeisUp);
  document.querySelector("#time_bar_sprite").classList.remove("shrink");
  document.querySelector("#time_bar_sprite").offsetWidth;
  document.querySelector("#time_bar_sprite").classList.add("shrink");
  document.querySelector("#time_bar_sprite").addEventListener("#animationend", timeisUp);
}
