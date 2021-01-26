const navList = document.querySelector('nav ul');
const hamburger = document.querySelector('.hamburger');

navList.classList.remove('navShowHide');

function toggleNav() {
  navList.classList.toggle('navShowHide');
}

function hideNav() {
  navList.classList.remove('navShowHide');
}

navList.addEventListener('click', hideNav)

hamburger.addEventListener('click', toggleNav);