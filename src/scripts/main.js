'use strict';

const clickCounter = document.querySelector('.clickCounter');
let counter = sessionStorage.getItem('clickedNTimes') || 0;
sessionStorage.setItem('clickedNTimes', counter);

clickCounter.textContent = sessionStorage.getItem('clickedNTimes');

document.addEventListener('click', () => {
  sessionStorage.setItem('clickedNTimes', ++counter);
  clickCounter.textContent = sessionStorage.getItem('clickedNTimes');
});
