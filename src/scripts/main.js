'use strict';
const body = document.querySelector('body');
const counter = document.createElement('div');
body.append(counter);

if (sessionStorage.getItem('counter') !== null) {
  counter.textContent = sessionStorage.getItem('counter');
}

body.addEventListener('click', () => {
  counter.textContent++;
  sessionStorage.setItem('counter', counter.textContent);
});
