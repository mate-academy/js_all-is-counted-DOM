'use strict';

let timer = document.querySelector('#timer');
let count = sessionStorage.getItem('clicketCount') || 0;

  timer.innerText = `I clicked ${count} times`;

document.body.addEventListener('click', function() {
  count++;
  sessionStorage.setItem('clicketCount', count);
  timer.innerText = `I clicked ${count} times`;
});
