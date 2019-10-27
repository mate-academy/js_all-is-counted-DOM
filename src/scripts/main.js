'use strict';

let counter = sessionStorage.getItem('times') || 0;
const title = document.querySelector('h1');
title.innerHTML = `You clicked ${counter} times!`;

const wholePage = document.querySelector('html');
wholePage.addEventListener('click', () => {
  counter++;
  title.innerHTML = `You clicked ${counter} times!`;
  sessionStorage.setItem('times', counter);
});
