const header = document.querySelector('.header');

const addShadowToHeader = () => {
  const scroll = window.scrollY;
  if (scroll > 0) {
    header.classList.add('-with_shadow')
  } else if (scroll === 0) {
    header.classList.remove('-with_shadow')
  }
}

window.addEventListener('scroll', addShadowToHeader);
