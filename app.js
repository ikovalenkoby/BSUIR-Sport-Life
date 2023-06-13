const mybutton = document.getElementById('myBtn');
const closeMenuButton = document.getElementById('close');
const burgerMenu = document.getElementById('burger');
const overlay = document.getElementById('menu');

if (overlay.children.length > 3) {
  overlay.classList.toggle('space');
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

burgerMenu.addEventListener('click', function () {
  this.classList.toggle('close');
  overlay.classList.toggle('overlay');
  if (overlay.children.length > 3) {
    overlay.classList.toggle('scroll');
  }
});
