'use strict';

let click = sessionStorage.getItem('clickAmount') || 0;
const counter = document.querySelector('.counter');

document.body.addEventListener('click', () => {
  click++;
  sessionStorage.setItem('clickAmount', click);
  counter.textContent = click;
});
