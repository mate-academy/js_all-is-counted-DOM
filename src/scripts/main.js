'use strict';

const identifier = 'clicks';
const clicked = document.querySelector('.clickInfo');
let counter = sessionStorage.getItem(identifier);
if (!counter) {
  counter = 0;
}
sessionStorage.setItem(identifier, counter);

clicked.textContent = sessionStorage.getItem('clicks');

document.addEventListener('click', () => {
  counter++;
  sessionStorage.setItem(identifier, counter);
  clicked.textContent = sessionStorage.getItem(identifier);
});
