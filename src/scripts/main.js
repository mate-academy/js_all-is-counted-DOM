'use strict';

const clicked = document.querySelector('#click');
let clickCount = sessionStorage.getItem('count') || 0;
clicked.innerHTML = clickCount;

document.body.addEventListener('click', () => {
  clickCount++;
  clicked.innerHTML = clickCount;
  sessionStorage.setItem('count', clickCount);
});
