'use strict';

const body = document.querySelector('body');
const number = document.querySelector('#counter');
let counter = sessionStorage.getItem('counter');

body.addEventListener('click', (evt) => {
  counter++;
  sessionStorage.setItem('counter', counter);
  number.innerHTML = counter;
});
