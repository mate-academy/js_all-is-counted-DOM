'use strict';

let counter = sessionStorage.getItem('counter') || 0;

document.body.innerText = `You clicked ${counter} times`;
document.addEventListener('click', () => {
  counter++;
  document.body.innerText = `You clicked ${counter} times`;
  sessionStorage.setItem('counter', counter);
});
