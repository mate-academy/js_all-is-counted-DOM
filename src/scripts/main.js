'use strict';

let timer = document.querySelector('#timer');
let count = sessionStorage.getItem('clicketCount') || 0;


document.body.addEventListener('click', (e) => {
  count++;
  sessionStorage.setItem('clicketCount', count);
  timer.innerText = `I clicked ${count} times`;
});
