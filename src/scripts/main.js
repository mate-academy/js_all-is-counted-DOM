'use strict';

let counter = sessionStorage.getItem('counter') || 0;
const count = document.getElementById('counter');
count.textContent = counter;


document.addEventListener('click' , () => {
  counter++;
  count.textContent = counter;
  sessionStorage.setItem('counter', counter)

});
