'use strict';
const countWindow = document.querySelector('.count-window');

const clickerCount = 'clickerCount';
const getClickerCount = sessionStorage.getItem(clickerCount);
if (!sessionStorage.getItem(clickerCount)) {
  sessionStorage.setItem(clickerCount, 0);
}

countWindow.innerText = getClickerCount;

document.body.addEventListener('click', (e) => {
  countWindow.innerText = getClickerCount;
  sessionStorage.clickerCount++;
  /* control number position, where user click */
  const windowWidth = countWindow.clientWidth;
  const heightWidth = countWindow.clientHeight;
  countWindow.style.left = `${e.clientX - windowWidth / 2}px`;
  countWindow.style.top = `${e.clientY - heightWidth / 2}px`;
});
