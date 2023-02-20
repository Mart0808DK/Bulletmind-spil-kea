window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#civil_container").addEventListener("click", zoom);
}

function zoom() {
  document.querySelector("#civil_container").classList.add("paused");
  document.querySelector("#civil_sprite").classList.add("zoom_out");
}
document.querySelector("#civil_container").removeEventListener("click", start);


