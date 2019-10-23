'use strict';

const counter = document.querySelector('#counter');
let clickTime = sessionStorage.getItem('count') || 0;
counter.textContent = clickTime;

document.body.addEventListener('click', () => {
  clickTime++;
  counter.textContent = clickTime;
  sessionStorage.setItem('counter', clickTime);
});
