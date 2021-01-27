const navList = document.querySelector('nav ul');
const hamburger = document.querySelector('.hamburger');
const phoneInput = document.querySelector('#phonenumber');

//==========
// Nav interface
//==========

navList.classList.remove('navShowHide');

function toggleNav() {
  navList.classList.toggle('navShowHide');
}

function hideNav() {
  navList.classList.remove('navShowHide');
}

navList.addEventListener('click', hideNav)
hamburger.addEventListener('click', toggleNav);



//==========
// Telephone format
//==========

function formatTel() {
  let currentNum = phoneInput.value.replace(/\D/g,'');
  console.log(currentNum);
  phoneInput.value = `(${currentNum.substring(0,3)}) ${currentNum.substring(3,6)}-${currentNum.substring(6,10)}`;
}


phoneInput.addEventListener('input', formatTel);