'use strict';

const action = 'clicks';
const showCount = document.querySelector('.showCount');
let counter = sessionStorage.getItem(action) || 0;

document.addEventListener('click', () => {
  sessionStorage.setItem(action, ++counter);
  showCount.textContent = `Number of clicks: ${counter}`;
});
