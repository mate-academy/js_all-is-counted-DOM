'use strict';

const page = document.querySelector('body');
const clickCounter = document.querySelector('.click-counter');
let counter = sessionStorage.getItem('autosave');
page.addEventListener('click', () => {
  counter++;
  clickCounter.textContent = `You clicked ${counter} times`;
  sessionStorage.setItem('autosave', counter);
});
