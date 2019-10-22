'use strict';

let counter = sessionStorage.getItem('counter') || 0;
const span = document.querySelector('span');

span.innerText = counter;
document.addEventListener('click', () => {
  counter++;
  span.innerText = counter;
  sessionStorage.setItem('counter', counter);
});
