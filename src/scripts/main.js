'use strict';
const body = document.querySelector('body');
const div = document.querySelector('div');
let clicked = sessionStorage.getItem('counter') || 0;
div.textContent = clicked;

body.addEventListener('click', () => {
  clicked++;
  div.textContent = clicked;
  sessionStorage.setItem('counter', clicked);
});
