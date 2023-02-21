"use script";

window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#civil_container").addEventListener("click", zoom);
  document.querySelector("#bandit1_container").addEventListener("click", zoom2);
}

function zoom() {
  document.querySelector("#civil_container").classList.add("paused");
  document.querySelector("#civil_sprite").classList.add("zoom_out");
  
}
document.querySelector("#civil_container").removeEventListener("click", start);


function zoom2() {
  document.querySelector("#bandit1_container").classList.add("paused");
  document.querySelector("#bandit1_sprite").classList.add("zoom_out");
}

document.querySelector("bandit1_container").removeEventListener("click", start);


