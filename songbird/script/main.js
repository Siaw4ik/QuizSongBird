import {birdsData} from '../script/bird.js'

const birdLi = document.querySelectorAll('.block_radio_ul li');
const buttonNext = document.querySelector('.block_next');
const blockAboutBird = document.querySelector('.two_block_about-item');
const blockQuestion = document.querySelector('.block_question');
const birdFamilyItem = document.querySelectorAll('.bird-family_item');

let countArr = 0;
let shufleArr;


function changeListBird(count){
  shufleArr = birdsData[count].sort(() => Math.random() - 0.5);
  for(let i = 0; i < shufleArr.length; i++){
      birdLi[i].innerHTML = `<span class='li_button'></span>${shufleArr[i].name}`
  }
  console.log(shufleArr)
}

changeListBird(countArr)

function createBlockQuestion(){
  const randomNumber = Math.floor(Math.random() * (5 -  0 + 1)) + 0;
  
  let div_questionPhoto = document.createElement('div');
  div_questionPhoto.classList = 'block_question_photo';
  div_questionPhoto.innerHTML = `<img src="../assets/image/bird_none.jpg" alt="bird none">`
  blockQuestion.appendChild(div_questionPhoto);

  let div_qustionNameAudio = document.createElement('div');
  div_qustionNameAudio.classList = 'block_question_audio';
  div_qustionNameAudio.innerHTML = `
    <p class="block_question_audio_p">**********</p>
    <div class="block_question_audio audio"><audio id="${shufleArr[randomNumber].name}" class="answer" src="${shufleArr[randomNumber].audio}" controls></audio></div>`
  blockQuestion.appendChild(div_qustionNameAudio);
}

createBlockQuestion();


function colorBirdFamilyItem(count) {
  birdFamilyItem.forEach((family) => {
    family.style.backgroundColor = 'transparent'
  })
  birdFamilyItem[count].style.backgroundColor = 'rgb(16, 139, 98)';
}

colorBirdFamilyItem(countArr);


let isRight = true;
let countScore = 5;
let score = 0;

/* function clickNext(){
  buttonNext.addEventListener('click', function() {
    if ( countArr < 5){
      countArr++;
      console.log(countArr)
      changeListBird(countArr);
      blockAboutBird.innerHTML = '';
      blockAboutBird.innerHTML = `Послушайте плеер.<br>
      Выберите птицу из списка`;
      blockQuestion.innerHTML = ''
      createBlockQuestion();
      colorBirdFamilyItem(countArr);
      countScore = 5;
      isRight = true
    }
  })
} */

function clickNext(){
  if ( countArr < 5){
    countArr++;
    console.log(countArr)
    changeListBird(countArr);
    blockAboutBird.innerHTML = '';
    blockAboutBird.innerHTML = `Послушайте плеер.<br>
    Выберите птицу из списка`;
    blockQuestion.innerHTML = ''
    createBlockQuestion();
    colorBirdFamilyItem(countArr);
    countScore = 5;
    isRight = true;
    buttonNext.removeEventListener('click', clickNext);

    buttonNext.style.backgroundColor = 'rgb(52, 51, 51)';
    buttonNext.style.cursor = 'default';
  }
}

birdLi.forEach((bird, index) => {
  bird.addEventListener('click', function clickLi() {
    blockAboutBird.innerHTML = '';

    let div_photoAndaudio = document.createElement('div')
    div_photoAndaudio.classList = 'block_about-item_photo-audio';
    div_photoAndaudio.innerHTML = `
      <div class="photo-audio_image">
        <img src="${shufleArr[index].image}" alt="">
      </div>
      <div class="photo-audio_audio">
        <p class="photo-audio_audio_name-bird">${shufleArr[index].name}</p>
        <p class="photo-audio_audio_name-birdFamily">${shufleArr[index].species}</p>
        <div class="photo-audio_audio_play">
        <audio src="${shufleArr[index].audio}" controls></audio>
        </div>
      </div>`
    blockAboutBird.appendChild(div_photoAndaudio);

    let div_text = document.createElement('div');
    div_text.classList = 'block_about-item_text';
    div_text.innerHTML = `${shufleArr[index].description}`;
    blockAboutBird.appendChild(div_text)

    const answer = document.querySelector('.answer').id;

    if (answer === shufleArr[index].name) {
      trueSound();
      bird.querySelector('span').style.backgroundColor = 'rgb(19, 175, 123)';
      if(document.querySelector('.block_question_audio_p').innerHTML === '**********'){
        score += countScore;
      }
      
      document.querySelector('.score span').innerHTML = score;
      
      document.querySelector('.block_question_photo img').src = shufleArr[index].image;
      document.querySelector('.block_question_audio_p').innerHTML = shufleArr[index].name;

      isRight = false
      buttonNext.style.backgroundColor = 'rgb(19, 175, 123)';
      buttonNext.style.cursor = 'pointer';

      buttonNext.addEventListener('click', clickNext);
    } else {
      if(document.querySelector('.block_question_audio_p').innerHTML === '**********'){
        countScore -= 1;
      }
      if(isRight){
        falseSound();
        bird.querySelector('span').style.backgroundColor = 'red';
      }
    }

  })
})

function trueSound() {
  var audio = new Audio();
  audio.src = '../assets/audio/zvuk-otvet-zaschitan-galochka-5193-1-1__=3 (mp3cut.net).mp3';
  audio.autoplay = true;
}

function falseSound() {
  var audio = new Audio();
  audio.src = '../assets/audio/standartnyiy-zvuk-s-oshibochnyim-otvetom-5199-1__=8 (mp3cut.net).mp3';
  audio.autoplay = true;
}





