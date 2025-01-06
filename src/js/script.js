// Gestion du menu déroulant
const menuToggle = document.getElementById('menuToggle');
const menuList = document.getElementById('menuList');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--active');
});
