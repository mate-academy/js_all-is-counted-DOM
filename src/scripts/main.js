'use strict';

let counter = sessionStorage.getItem('counter');

document.addEventListener('click', () => {
  counter++;
  document.body.querySelector('.number').innerHTML = `${counter}`;
  sessionStorage.setItem('counter', counter);
});
