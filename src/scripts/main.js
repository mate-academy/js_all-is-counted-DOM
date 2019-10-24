'use strict';

let click = sessionStorage.getItem('clickAmount') || 0;
const counter = document.querySelector('.counter');
counter.innerHTML = `You clicked ${click} times`;

document.body.addEventListener('click', () => {
  click++;
  sessionStorage.setItem('clickAmount', click);
  counter.innerHTML = `You clicked ${click} times`;
});
