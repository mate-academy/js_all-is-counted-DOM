'use strict';

const clickNumber = document.getElementById('click');
let counter = sessionStorage.getItem('clickNumber') || 0;
clickNumber.innerText = `${counter}`;

document.body.addEventListener('click', () => {
  counter++;
  sessionStorage.setItem('clickNumber', counter);
  clickNumber.innerText = counter;
});
