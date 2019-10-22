'use strict';
const divCounter = document.createElement('div');
let clickCounter = sessionStorage.getItem('clickCounter') || 0;

divCounter.textContent = `You clicked: ${clickCounter} times`;
document.body.appendChild(divCounter);

document.addEventListener('click', () => {
  sessionStorage.setItem('clickCounter', ++clickCounter);
  divCounter.textContent = `You clicked: ${sessionStorage.getItem('clickCounter')} times`;
});
