'use strict';

document.addEventListener('click', () => {
  let clickCounter = sessionStorage.getItem('clickCounter');
  
  if(!clickCounter) {
    sessionStorage.setItem('clickCounter', 1);
  }
  else {
    sessionStorage.setItem('clickCounter', ++clickCounter);
  }

  console.log(`You clicked: ${sessionStorage.getItem('clickCounter')} times`);
});
