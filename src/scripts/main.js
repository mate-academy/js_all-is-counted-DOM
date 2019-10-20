'use strict';
let counter = sessionStorage.getItem('counter');
document.addEventListener('click', () => {
  counter++;
  document.body.querySelector('.counter')
    .innerHTML = `You clicked ${counter} times!`;
  sessionStorage.setItem('counter', counter);
});
