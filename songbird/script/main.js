import {birdsData} from '../script/bird.js'

const birdLi = document.querySelectorAll('.block_radio_ul li');
const buttonNext = document.querySelector('.block_next');
const blockAboutBird = document.querySelector('.two_block_about-item')

let countArr = 0;
let shufleArr;


function changeListBird(count){
  shufleArr = birdsData[count].sort(() => Math.random() - 0.5);
  for(let i = 0; i < shufleArr.length; i++){
      birdLi[i].innerHTML = `<input type="radio" name="bird" id="${shufleArr[i].id}">${shufleArr[i].name}`
  }
  console.log(shufleArr)
}

changeListBird(countArr)


buttonNext.addEventListener('click', function() {
  if ( countArr < 5){
    countArr++;
    console.log(countArr)
    changeListBird(countArr);
    blockAboutBird.innerHTML = '';
    blockAboutBird.innerHTML = `Послушайте плеер.<br>
    Выберите птицу из списка`;
  }
})

birdLi.forEach((bird, index) => {
  bird.addEventListener('click', () => {
    const birdInput = bird.querySelector('input')
    console.log(birdInput.id)
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
  })
})


