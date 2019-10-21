'use strict';
const countWindow = document.querySelector('.count-window');

if (!sessionStorage.hasOwnProperty('clickerCount')) {
  sessionStorage.setItem('clickerCount', 0);
}
countWindow.innerText = sessionStorage.getItem('clickerCount');
document.body.addEventListener('click', (e) => {
  sessionStorage.clickerCount++;
  countWindow.innerText = sessionStorage.getItem('clickerCount');
  /* control number position, where user click */
  const windowWidth = parseInt(window.getComputedStyle(countWindow).width);
  const heightWidth = parseInt(window.getComputedStyle(countWindow).height);
  countWindow.style.left = `${e.clientX - windowWidth / 2}px`;
  countWindow.style.top = `${e.clientY - heightWidth / 2}px`;
});
