const nav = document.querySelector('.nav_sticky');
const openMenu = document.querySelector('.header--menu_open');
const closeMenu = document.querySelector('.header--menu_close');
const htmlElement = document.documentElement;

const showMenu = () => {
  nav.style.display = 'flex';
  htmlElement.style.overflow = 'hidden';
  closeMenu.style.display = 'block';
  openMenu.style.display = 'none';
}

const hideMenu = () => {
  nav.style.display = 'none';
  htmlElement.style.overflow = 'visible';
  closeMenu.style.display = 'none';
  openMenu.style.display = 'block';

}

openMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);
nav.addEventListener('click', hideMenu);
