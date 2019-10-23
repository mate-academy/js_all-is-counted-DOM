'use strict';

const countNum = document.createElement('span');
const body = document.querySelector('body');
const container = document.querySelector('.container');
let counter = sessionStorage.getItem('counter') || 0;

countNum.innerText = counter;
container.append(countNum);

body.addEventListener('click', (evt) => {
  counter++;
  sessionStorage.setItem('counter', counter);
  countNum.innerHTML = counter;
});
