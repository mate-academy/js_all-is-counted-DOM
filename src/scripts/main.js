'use strict';

const counterBlock = document.querySelector('#counter');
let counter = sessionStorage.getItem('counter') || 0;
counterBlock.textContent = counter;

document.addEventListener('click', () => {
  counter++;
  counterBlock.textContent = counter;
  sessionStorage.setItem('counter', counter);
});
