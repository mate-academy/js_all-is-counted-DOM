'use strict';
const span = document.getElementById('times');

const cookieKey = 'timesClicked';
let timesClicked = sessionStorage.getItem(cookieKey) || 0;
span.textContent = timesClicked;

document.body.addEventListener('click', () => {
  timesClicked++;
  sessionStorage.setItem(cookieKey, timesClicked);
  span.textContent = timesClicked;
});
