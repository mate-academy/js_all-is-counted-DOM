'use strict';
const countWindow = document.getElementById('count-window');

let getClicketCount = sessionStorage.getItem('clicketCount') || 0;
countWindow.innerText = getClicketCount;

document.body.addEventListener('click', (e) => {
  getClicketCount++;
  sessionStorage.setItem('clicketCount', getClicketCount);
  countWindow.innerText = getClicketCount;
  /* control number position, where user click */
  const windowWidth = countWindow.clientWidth;
  const heightWidth = countWindow.clientHeight;
  countWindow.style.left = `${e.clientX - windowWidth / 2}px`;
  countWindow.style.top = `${e.clientY - heightWidth / 2}px`;
});
