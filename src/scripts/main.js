'use strict';
let counter = sessionStorage.getItem('counter') || 0;
const item = document.getElementById('counter');
item.textContent = counter;

document.addEventListener('click', () => {
  counter++;
  item.textContent = counter;
  sessionStorage.setItem('counter', counter);
});
