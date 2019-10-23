'use strict';
const countPlace = document.createElement('p');
const body = document.querySelector('body');
let count = sessionStorage.getItem('clicketCount') || 0;
countPlace.innerText = count;
body.append(countPlace);

document.body.addEventListener('click', (e) => {
  count++;
  sessionStorage.setItem('clicketCount', count);
  countPlace.innerText = count;
});
