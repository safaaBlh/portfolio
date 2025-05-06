

const menuBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-xmark');
const dropdownMenu = document.querySelector('.dropdown');

// Afficher le menu
menuBtn.addEventListener('click', () => {
  dropdownMenu.style.display = 'flex';
});

// Cacher le menu
closeBtn.addEventListener('click', () => {
  dropdownMenu.style.display = 'none';
});

