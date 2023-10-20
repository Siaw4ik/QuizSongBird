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



const ruButton = document.querySelector('.lang_ru');
const enButton = document.querySelector('.lang_en'); 
let lang = JSON.parse(localStorage.getItem('lang'));

if(lang === 'en'){
  document.querySelector('.one a').textContent = 'Home';
  document.querySelector('.two a').textContent = 'Quiz Page';
  document.querySelector('.three a').textContent = 'Bird Gallery';
  document.querySelector('.four a').textContent = 'Home';
  document.querySelector('.five a').textContent = 'Quiz Page';
  document.querySelector('.six a').textContent = 'Bird Gallery';
  document.querySelector('.seven').textContent = 'Start Quiz';
  ruButton.classList.remove('lang-active');
  enButton.classList.add('lang-active');
}

enButton.addEventListener('click', () => {
  ruButton.classList.remove('lang-active');
  enButton.classList.add('lang-active');
  lang = 'en';
  console.log(lang);
  localStorage.setItem('lang',JSON.stringify(lang));
  document.querySelector('.one a').textContent = 'Home';
  document.querySelector('.two a').textContent = 'Quiz Page';
  document.querySelector('.three a').textContent = 'Bird Gallery';
  document.querySelector('.four a').textContent = 'Home';
  document.querySelector('.five a').textContent = 'Quiz Page';
  document.querySelector('.six a').textContent = 'Bird Gallery';
  document.querySelector('.seven').textContent = 'Start Quiz';
})

ruButton.addEventListener('click', () => {
  ruButton.classList.add('lang-active');
  enButton.classList.remove('lang-active');
  lang = 'ru';
  console.log(lang);
  localStorage.setItem('lang',JSON.stringify(lang));
  document.querySelector('.one a').textContent = 'Главная страница';
  document.querySelector('.two a').textContent = 'Викторина';
  document.querySelector('.three a').textContent = 'Галерея птиц';
  document.querySelector('.four a').textContent = 'Главная страница';
  document.querySelector('.five a').textContent = 'Викторина';
  document.querySelector('.six a').textContent = 'Галерея птиц';
  document.querySelector('.seven').textContent = 'Начать Викторину';
})