let map = document.querySelector('.contacts__map');
let navMain = document.querySelector('.header-nav');
let navToggle = document.querySelector('.header-nav__toggle');

navMain.classList.remove('header-nav--nojs');
map.classList.remove('contacts__map--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header-nav--closed')) {
    navMain.classList.remove('header-nav--closed');
    navMain.classList.add('header-nav--opened');
  } else {
    navMain.classList.add('header-nav--closed');
    navMain.classList.remove('header-nav--opened');
  }
});
