'use strict';

const identifier = 'clicks';
const clicked = document.getElementById('clickInfo');
let counter = sessionStorage.getItem(identifier) || 0;

clicked.textContent = sessionStorage.getItem(identifier);

document.addEventListener('click', () => {
  sessionStorage.setItem(identifier, ++counter);
  clicked.textContent = counter;
});
