'use strict';
const clickCounter = document.querySelector('#click-counter');
let counter = sessionStorage.getItem('saveClickCounter') || 0;
clickCounter.textContent = counter;
document.body.addEventListener('click', () => {
  counter++;
  clickCounter.textContent = `${counter}`;
  sessionStorage.setItem('saveClickCounter', counter);
});
