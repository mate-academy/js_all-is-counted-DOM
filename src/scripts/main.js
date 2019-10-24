'use strict';
const clickShow = document.querySelector('#click-text');
let clickNumber = sessionStorage.getItem('clickNumber') || 0;
clickShow.innerText = `You have clicked ${clickNumber} times`;
function increaseClick() {
  clickNumber++;
  sessionStorage.setItem('clickNumber', clickNumber);
  clickShow.innerText = `You have clicked `
    + `${sessionStorage.getItem('clickNumber')} times`;
}
document.body.addEventListener('click', increaseClick);
