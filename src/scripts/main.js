'use strict';
const body = document.querySelector('body');
const counter = document.createElement('div');
counter.style.cssText = `
    font-size: 50px;
    font-weight: 700;
    text-align: center;
    `;
if (sessionStorage.counter !== null) {
  counter.textContent = sessionStorage.counter;
} else {
  counter.textContent = 0;
}

body.append(counter);
body.addEventListener('click', () => {
  ++counter.textContent;
  sessionStorage.counter = counter.textContent;
});
