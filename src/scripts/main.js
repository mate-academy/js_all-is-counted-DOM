'use strict';

let counter = sessionStorage.getItem('counter') || 0;
const clickedSpan = document.querySelector('#clicked');

clickedSpan.innerText = counter;
document.addEventListener('click', () => {
  counter++;
  clickedSpan.innerText = counter;
  sessionStorage.setItem('counter', counter);
});
