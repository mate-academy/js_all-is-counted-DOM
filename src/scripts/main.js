'use strict';
document.addEventListener("DOMContentLoaded", initCounter);

function clickCounter() {
  sessionStorage.clickCount = Number(sessionStorage.clickCount) + 1;
  document.getElementById("count").innerHTML = sessionStorage.clickCount;
}


function initCounter() {
  if(sessionStorage.clickCount === undefined) {
    sessionStorage.clickCount = 0;
  }

  document.getElementById("count").innerHTML = sessionStorage.clickCount;
}
