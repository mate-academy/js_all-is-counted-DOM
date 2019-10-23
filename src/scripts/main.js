'use strict';
const body = document.querySelector('body');
const div = document.createElement('div');
const count = sessionStorage.getItem('div') || 0;
div.textContent = count;
body.append(div);

body.addEventListener('click', () => {
  div.textContent++;
  sessionStorage.setItem('div', div.textContent);
});
