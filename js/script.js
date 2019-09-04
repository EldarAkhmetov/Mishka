var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

var modal = document.querySelector('.modal');
var orderButton = document.querySelector('.week-product__order-button');
var modalBackground = document.querySelector('.modal__background');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }
});

if (orderButton) {
  orderButton.addEventListener('click', function() {
    modal.classList.remove('modal--closed');
  });
}

modalBackground.addEventListener('click', function() {
  modal.classList.add('modal--closed');
});
