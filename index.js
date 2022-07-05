'use strict';

const menuBar = document.querySelector('.fa-bars');
const cancelBar = document.querySelector('.fa-xmark');

const rightNavbar = document.getElementById('right--navbar');

const menuDropdown = function () {
  if (menuBar.classList.contains('fa-bars')) {
    menuBar.classList.remove('fa-bars');
    menuBar.classList.add('fa-xmark');

    rightNavbar.style.visibility = 'visible';
  } else if (menuBar.classList.contains('fa-xmark')) {
    menuBar.classList.remove('fa-xmark');
    menuBar.classList.add('fa-bars');

    rightNavbar.style.visibility = 'hidden';
  }
};

menuBar.addEventListener('click', menuDropdown);
