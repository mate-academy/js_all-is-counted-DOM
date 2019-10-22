'use strict';

const clickCounter = document.getElementById('clickCounter');
const timesClicked = 'timesClicked';
let counter = sessionStorage.getItem(timesClicked) || 0;

clickCounter.textContent = sessionStorage.getItem(timesClicked);

document.addEventListener('click', () => {
  sessionStorage.setItem(timesClicked, ++counter);
  clickCounter.textContent = counter;
});
