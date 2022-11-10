const menu = document.querySelector('.burger_menu');
const burger = document.querySelector('.burger');
const cross = document.querySelector('.cross');
const body = document.body;

burger.addEventListener('click', () => {
  menu.classList.add('active');
  body.classList.add('lock');
})

menu.addEventListener('click', () => {
  menu.classList.remove('active');
  body.classList.remove('lock');
})

cross.addEventListener('click', () => {
  menu.classList.remove('active');
  body.classList.remove('lock');
})