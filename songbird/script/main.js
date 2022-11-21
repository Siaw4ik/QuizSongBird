let lang = JSON.parse(localStorage.getItem('lang'));

let arrFamilyBird = ['Warm up', 'Passerines', 'Forest birds', 'Songbirds', 'Predator birds', 'Sea birds'];

if(lang === 'en'){
  document.querySelector('.score p').innerHTML = 'Score: <span>0</span>'

  document.querySelectorAll('.bird-family_item').forEach((item, index) => {
      item.innerHTML = `${arrFamilyBird[index]}`
  })

  document.querySelector('.two_block_about-item').innerHTML = `Listen to the player.<br>
  Select a bird from the list`;
  document.querySelector('.block_next p').innerHTML = 'Next Level';
}


import {birdsData} from '../script/bird.js'


const birdLi = document.querySelectorAll('.block_radio_ul li');
const buttonNext = document.querySelector('.block_next');
const blockAboutBird = document.querySelector('.two_block_about-item');
const blockQuestion = document.querySelector('.block_question');
const birdFamilyItem = document.querySelectorAll('.bird-family_item');

let countArr = 0;
let shufleArr;
let isRight = true;

function changeListBird(count){
  shufleArr = birdsData[count].sort(() => Math.random() - 0.5);
  for(let i = 0; i < shufleArr.length; i++){
      birdLi[i].innerHTML = `<span class='li_button'></span>${lang === 'en'? shufleArr[i].name_en : shufleArr[i].name}`
  }
/*   console.log(shufleArr) */
}

changeListBird(countArr)

const audio = new Audio();

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
    <div class="block_question_audio_audioplayer">
            <div class="controls">
              <div class="play-button">
                <div class="form play"></div>
              </div>
              <div class="timebar">
                <div class="time"></div>
                <div class="timebar-bar">
                  <div class="timebar-line"><div class="timebar-circle"></div></div>
                </div>
                <div class="timebar-other">
                  <div class="timebar-volume">
                    <div class="volume on active">
                      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 96.65"><title>sound</title><path fill="rgb(19, 175, 123)" d="M11,22.84H36.47L58.17,1A3.44,3.44,0,0,1,63,1a3.39,3.39,0,0,1,1,2.44h0V93.2a3.46,3.46,0,0,1-5.93,2.41L36.65,77.49H11a11,11,0,0,1-11-11V33.83a11,11,0,0,1,11-11Zm65.12,15a3.22,3.22,0,1,1,6.1-2,43.3,43.3,0,0,1,1.56,13.27c-.09,4.76-.78,9.44-2.13,12.21a3.23,3.23,0,1,1-5.8-2.83c.93-1.92,1.43-5.59,1.5-9.48a37.13,37.13,0,0,0-1.23-11.12Zm16.64-12a3.23,3.23,0,0,1,6-2.48c3,7.18,4.61,16.23,4.75,25.22s-1.17,17.72-4,24.77a3.22,3.22,0,1,1-6-2.4C96,64.64,97.15,56.66,97,48.6s-1.58-16.36-4.28-22.81Zm16.09-10.23a3.22,3.22,0,1,1,5.8-2.8,86.65,86.65,0,0,1,8.24,36.44c.09,12.22-2.37,24.39-7.73,34.77a3.22,3.22,0,0,1-5.73-3c4.88-9.43,7.11-20.56,7-31.77a80,80,0,0,0-7.6-33.69ZM37.89,29.74H11A4.11,4.11,0,0,0,6.9,33.83V66.51A4.11,4.11,0,0,0,11,70.6h26.9s2,.69,2.21.83L57.16,85.8v-74L40.52,28.53a3.46,3.46,0,0,1-2.63,1.21Z"/></svg>
                    </div>
                    <div class="volume out">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 100.13" style="enable-background:new 0 0 122.88 100.13" xml:space="preserve"><style type="text/css">.st0{fill: rgb(19, 175, 123);}</style><g><path class="st0" d="M85.66,37.03c-1.4-1.4-1.4-3.66,0-5.05c1.4-1.4,3.66-1.4,5.05,0l13.03,13.03l13.03-13.03 c1.4-1.4,3.66-1.4,5.05,0c1.4,1.4,1.4,3.66,0,5.05L108.8,50.06l13.03,13.03c1.4,1.4,1.4,3.66,0,5.05c-1.4,1.4-3.66,1.4-5.05,0 l-13.03-13.03L90.72,68.14c-1.4,1.4-3.66,1.4-5.05,0c-1.4-1.4-1.4-3.66,0-5.05L98.7,50.06L85.66,37.03L85.66,37.03z M11.39,23.67 h26.4L60.26,1.05c1.39-1.4,3.64-1.4,5.04-0.01c0.7,0.7,1.05,1.61,1.05,2.53h0.01v92.99c0,1.97-1.6,3.57-3.57,3.57 c-1,0-1.91-0.41-2.56-1.08L37.98,80.29H11.39c-3.13,0-5.98-1.28-8.04-3.34C1.28,74.89,0,72.04,0,68.91V35.06 c0-3.13,1.28-5.98,3.34-8.04C5.4,24.95,8.25,23.67,11.39,23.67L11.39,23.67z M39.26,30.82H11.39c-1.16,0-2.22,0.48-2.99,1.25 c-0.77,0.77-1.25,1.83-1.25,2.99v33.85c0,1.16,0.48,2.22,1.25,2.99c0.77,0.77,1.83,1.25,2.99,1.25h27.87v0.02 c0.81,0,1.62,0.27,2.29,0.83l17.67,14.9V12.21L41.97,29.57C41.32,30.33,40.34,30.82,39.26,30.82L39.26,30.82z"/></g></svg>
                    </div>
                    <div class="volume-slider"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
  blockQuestion.appendChild(div_qustionNameAudio);
  const audioPlayer = document.querySelector('.block_question_audio_audioplayer');
  audio.src = shufleArr[randomNumber].audio;
  audio.setAttribute ('id' , shufleArr[randomNumber].name);
  audio.classList = 'answer';
  if(audio.muted){
    console.log('muted')
    audio.muted = !audio.muted
  }
  audioPlayer.prepend(audio);

  clickVolume(audio);
  volumeSliderHover(audio);

  let line = document.querySelector('.timebar-line');
  let circle = document.querySelector('.timebar-bar').querySelector('.timebar-circle');
  clickTimeBarLine(audio, line);
  changeLineCircle(audio, line, circle);
}

createBlockQuestion();

audio.addEventListener('timeupdate', changeCurrentTime);

audio.addEventListener('ended', () => {
  document.querySelector('.form').classList.remove("pause");
  document.querySelector('.form').classList.add("play");
  document.querySelector('.timebar-circle').style.background = 'rgb(61, 133, 140)'
})

document.querySelector('.play-button').addEventListener('click', play_pauseAudio);

function play_pauseAudio() {
    if(audio.paused){
      document.querySelector('.form').classList.remove("play");
      document.querySelector('.form').classList.add("pause");
      audio.play();
      document.querySelector('.timebar-circle').style.background = 'grey'
    }else {
      document.querySelector('.form').classList.remove("pause");
      document.querySelector('.form').classList.add("play");
      audio.pause();
    }
}

function getTimeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;

  if(minutes < 10) {
    return `0${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  }else{
    return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  }
}

  audio.addEventListener('abort', () => {
    document.querySelector('.time').innerHTML = 'Loading...';
    audio.removeEventListener('timeupdate', changeCurrentTime)
  })
  audio.addEventListener('loadeddata', () => {
    document.querySelector('.time').innerHTML = '';
    let div_time = document.createElement('div');
    div_time.classList = 'timebar-time';
    div_time.innerHTML = `
        <div class="timebar-time_currentTime">00:00</div>
        <span> / </span>
        <div class="timebar-time_durationTime">${getTimeFromNum(audio.duration)}</div>`
    document.querySelector('.time').prepend(div_time);
    audio.addEventListener('timeupdate', changeCurrentTime);
  })

function clickVolume(audio) {
  const onVolume = document.querySelector('.volume.on');
  const outVolume = document.querySelector('.volume.out');

  onVolume.addEventListener('click', () => {
    audio.muted = !audio.muted;
    onVolume.classList.remove('active');
    outVolume.classList.add('active');
  })

  outVolume.addEventListener('click', () => {
    audio.muted = !audio.muted;
    onVolume.classList.add('active');
    outVolume.classList.remove('active');
  })
}

function volumeSliderHover (audio){
  const volumeSlider = document.querySelector('.volume-slider');
  document.querySelector('.timebar-volume').addEventListener('mouseenter', () =>{
    volumeSlider.classList.add('active');
  })

  document.querySelector('.timebar-volume').addEventListener('mouseleave', () =>{
    volumeSlider.classList.remove('active');
  })

  volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    console.log(e.offsetX)
    const newVolume = e.offsetX / parseInt(sliderWidth);
    console.log(newVolume)
    audio.volume = newVolume;
    volumeSlider.style.background = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${newVolume * 100}%, rgb(115, 115, 115) ${newVolume * 100}%, grey 100%)`

  })
}

function clickTimeBarLine(audio, elem){
  elem.addEventListener('click', e => {
    if(e.target.classList[0] === 'timebar-line'){
    const lineWidth = window.getComputedStyle(elem).width;
    audio.currentTime = e.offsetX / parseInt(lineWidth) * audio.duration;
    }
  })
}


function colorBirdFamilyItem(count) {
  birdFamilyItem.forEach((family) => {
    family.style.backgroundColor = 'transparent'
  })
  birdFamilyItem[count].style.backgroundColor = 'rgb(16, 139, 98)';
}

colorBirdFamilyItem(countArr);


let countScore = 5;
let score = 0;

function clickNext(){
  if ( countArr < 5){
    countArr++;
    /* console.log(countArr) */
    changeListBird(countArr);
    blockAboutBird.innerHTML = '';
    if(lang === 'en'){
      blockAboutBird.innerHTML = `Listen to the player.<br>
      Select a bird from the list`;
    }else{
      blockAboutBird.innerHTML = `Послушайте плеер.<br>
      Выберите птицу из списка`;
    }
    blockQuestion.innerHTML = '';
    audio.removeEventListener('timeupdate', changeCurrentTime);
    createBlockQuestion();
    colorBirdFamilyItem(countArr);
    document.querySelector('.play-button').removeEventListener('click', play_pauseAudio);
    document.querySelector('.play-button').addEventListener('click', play_pauseAudio);
    
    countScore = 5;
    isRight = true;
    buttonNext.removeEventListener('click', clickNext);

    buttonNext.style.backgroundColor = 'rgb(52, 51, 51)';
    buttonNext.style.cursor = 'default';
    audioBird.removeEventListener('timeupdate', changeCurrentTimeBird);
  }
}

const audioBird = new Audio();

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
        <p class="photo-audio_audio_name-bird">${lang === 'en' ? shufleArr[index].name_en : shufleArr[index].name}</p>
        <p class="photo-audio_audio_name-birdFamily">${shufleArr[index].species}</p>
        <div class="photo-audio_audio_play">
          <div class="controls_bird">
            <div class="play-button_bird">
              <div class="form_bird play"></div>
            </div>
            <div class="timebar_bird">
              <div class="time_bird"></div>
              <div class="timebar-bar_bird">
                <div class="timebar-line_bird"><div class="timebar-circle_bird"></div></div>
              </div>
              <div class="timebar-other_bird">
                  <div class="timebar-volume_bird">
                    <div class="volume_bird on active">
                      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 96.65"><title>sound</title><path fill="rgb(19, 175, 123)" d="M11,22.84H36.47L58.17,1A3.44,3.44,0,0,1,63,1a3.39,3.39,0,0,1,1,2.44h0V93.2a3.46,3.46,0,0,1-5.93,2.41L36.65,77.49H11a11,11,0,0,1-11-11V33.83a11,11,0,0,1,11-11Zm65.12,15a3.22,3.22,0,1,1,6.1-2,43.3,43.3,0,0,1,1.56,13.27c-.09,4.76-.78,9.44-2.13,12.21a3.23,3.23,0,1,1-5.8-2.83c.93-1.92,1.43-5.59,1.5-9.48a37.13,37.13,0,0,0-1.23-11.12Zm16.64-12a3.23,3.23,0,0,1,6-2.48c3,7.18,4.61,16.23,4.75,25.22s-1.17,17.72-4,24.77a3.22,3.22,0,1,1-6-2.4C96,64.64,97.15,56.66,97,48.6s-1.58-16.36-4.28-22.81Zm16.09-10.23a3.22,3.22,0,1,1,5.8-2.8,86.65,86.65,0,0,1,8.24,36.44c.09,12.22-2.37,24.39-7.73,34.77a3.22,3.22,0,0,1-5.73-3c4.88-9.43,7.11-20.56,7-31.77a80,80,0,0,0-7.6-33.69ZM37.89,29.74H11A4.11,4.11,0,0,0,6.9,33.83V66.51A4.11,4.11,0,0,0,11,70.6h26.9s2,.69,2.21.83L57.16,85.8v-74L40.52,28.53a3.46,3.46,0,0,1-2.63,1.21Z"/></svg>
                    </div>
                    <div class="volume_bird out">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 100.13" style="enable-background:new 0 0 122.88 100.13" xml:space="preserve"><style type="text/css">.st0{fill: rgb(19, 175, 123);}</style><g><path class="st0" d="M85.66,37.03c-1.4-1.4-1.4-3.66,0-5.05c1.4-1.4,3.66-1.4,5.05,0l13.03,13.03l13.03-13.03 c1.4-1.4,3.66-1.4,5.05,0c1.4,1.4,1.4,3.66,0,5.05L108.8,50.06l13.03,13.03c1.4,1.4,1.4,3.66,0,5.05c-1.4,1.4-3.66,1.4-5.05,0 l-13.03-13.03L90.72,68.14c-1.4,1.4-3.66,1.4-5.05,0c-1.4-1.4-1.4-3.66,0-5.05L98.7,50.06L85.66,37.03L85.66,37.03z M11.39,23.67 h26.4L60.26,1.05c1.39-1.4,3.64-1.4,5.04-0.01c0.7,0.7,1.05,1.61,1.05,2.53h0.01v92.99c0,1.97-1.6,3.57-3.57,3.57 c-1,0-1.91-0.41-2.56-1.08L37.98,80.29H11.39c-3.13,0-5.98-1.28-8.04-3.34C1.28,74.89,0,72.04,0,68.91V35.06 c0-3.13,1.28-5.98,3.34-8.04C5.4,24.95,8.25,23.67,11.39,23.67L11.39,23.67z M39.26,30.82H11.39c-1.16,0-2.22,0.48-2.99,1.25 c-0.77,0.77-1.25,1.83-1.25,2.99v33.85c0,1.16,0.48,2.22,1.25,2.99c0.77,0.77,1.83,1.25,2.99,1.25h27.87v0.02 c0.81,0,1.62,0.27,2.29,0.83l17.67,14.9V12.21L41.97,29.57C41.32,30.33,40.34,30.82,39.26,30.82L39.26,30.82z"/></g></svg>
                    </div>
                    <div class="volume-slider_bird"></div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
    blockAboutBird.appendChild(div_photoAndaudio);

    let div_text = document.createElement('div');
    div_text.classList = 'block_about-item_text';
    div_text.innerHTML = `${lang === 'en' ? shufleArr[index].description_en : shufleArr[index].description}`;
    blockAboutBird.appendChild(div_text);

    const timeBarLineBird = document.querySelector('.timebar-line_bird');

    audioBird.src = shufleArr[index].audio;
    audioBird.classList = 'audio-bird';
    if(audioBird.muted){
      console.log('muted')
      audioBird.muted = !audioBird.muted
    }
    document.querySelector('.volume-slider_bird').style.background = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${audioBird.volume * 100}%, rgb(115, 115, 115) ${audioBird.volume * 100}%, grey 100%)`
    document.querySelector('.photo-audio_audio_play').prepend(audioBird);
    document.querySelector('.play-button_bird').removeEventListener('click', play_pauseAudioBird);
    document.querySelector('.play-button_bird').addEventListener('click', play_pauseAudioBird)
    
    clickVolumeBird(audioBird);
    volumeSliderHoverBird(audioBird);
    clickTimeBarLineBird(audioBird, timeBarLineBird);
    let circleBird = document.querySelector('.timebar-bar_bird').querySelector('.timebar-circle_bird');

    changeLineCircle(audioBird, timeBarLineBird, circleBird);
    audioBird.removeEventListener('timeupdate', changeCurrentTimeBird);
    const answer = document.querySelector('.answer').id;
    if (answer === shufleArr[index].name) {
      trueSound();
      bird.querySelector('span').style.backgroundColor = 'rgb(19, 175, 123)';
      if(document.querySelector('.block_question_audio_p').innerHTML === '**********'){
        score += countScore;
      }
      
      document.querySelector('.score span').innerHTML = score;
      
      document.querySelector('.block_question_photo img').src = shufleArr[index].image;
      document.querySelector('.block_question_audio_p').innerHTML = lang === 'en' ? shufleArr[index].name_en : shufleArr[index].name;

      isRight = false
      buttonNext.style.backgroundColor = 'rgb(19, 175, 123)';
      buttonNext.style.cursor = 'pointer';

      buttonNext.addEventListener('click', clickNext);

      audio.pause();
      document.querySelector('.form').classList.remove("pause");
      document.querySelector('.form').classList.add("play");

      if(countArr === 5) {
        let div_finish = document.createElement('div');
        div_finish.classList = 'finish';
        if(lang === 'en'){
          div_finish.innerHTML = `<a class="finish_button_a" href="../html/result.html">
            <div><span>View result</span></div>
            </a>`
        }else{
          div_finish.innerHTML = `<a class="finish_button_a" href="../html/result.html">
            <div><span>Посмотреть результат</span></div>
            </a>`
        }
      buttonNext.remove();
      document.querySelector('.main').appendChild(div_finish);

      localStorage.setItem('score',JSON.stringify(score));
      }
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

audioBird.addEventListener('timeupdate', changeCurrentTimeBird);

audioBird.addEventListener('ended', () => {
  document.querySelector('.form_bird').classList.remove("pause");
  document.querySelector('.form_bird').classList.add("play");
  document.querySelector('.timebar-circle_bird').style.background = 'rgb(61, 133, 140)'
})

audioBird.addEventListener('abort', () => {
  document.querySelector('.time_bird').innerHTML = 'Loading...';
  audioBird.removeEventListener('timeupdate', changeCurrentTimeBird);
})

audioBird.addEventListener('loadeddata', () => {
  document.querySelector('.time_bird').innerHTML = '';
  let div_time = document.createElement('div');
  div_time.classList = 'timebar-time_bird';
  div_time.innerHTML = `
    <div class="timebar-time_bird_currentTime">00:00</div>
      <span> / </span>
      <div class="timebar-time_bird_durationTime">${getTimeFromNum(audioBird.duration)}</div>`
  document.querySelector('.time_bird').prepend(div_time);
  audioBird.addEventListener('timeupdate', changeCurrentTimeBird);
})

  function play_pauseAudioBird (){
    if(audioBird.paused){
      document.querySelector('.form_bird').classList.remove("play");
      document.querySelector('.form_bird').classList.add("pause");
      audioBird.play();
      document.querySelector('.timebar-circle_bird').style.background = 'grey'
    }else {
      document.querySelector('.form_bird').classList.remove("pause");
      document.querySelector('.form_bird').classList.add("play");
      audioBird.pause();
    }
}

function clickVolumeBird(audio) {
  const onVolumeBird = document.querySelector('.volume_bird.on');
  const outVolumeBird = document.querySelector('.volume_bird.out');
  onVolumeBird.addEventListener('click', () => {
    audio.muted = !audio.muted;
    onVolumeBird.classList.remove('active');
    outVolumeBird.classList.add('active');
  })

  outVolumeBird.addEventListener('click', () => {
    audio.muted = !audio.muted;
    onVolumeBird.classList.add('active');
    outVolumeBird.classList.remove('active');
  })
}

function volumeSliderHoverBird(audio) {
  const volumeSlider = document.querySelector('.volume-slider_bird');
  document.querySelector('.timebar-volume_bird').addEventListener('mouseenter', () =>{
    document.querySelector('.timebar-volume_bird').style.width = `140px`
    volumeSlider.classList.add('active');
  })

  document.querySelector('.timebar-volume_bird').addEventListener('mouseleave', () =>{
    volumeSlider.classList.remove('active');
    document.querySelector('.timebar-volume_bird').style.width = `30px`
  })

  volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    console.log(e.offsetX)
    const newVolume = e.offsetX / parseInt(sliderWidth);
    console.log(newVolume)
    audio.volume = newVolume;
    volumeSlider.style.background = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${newVolume * 100}%, rgb(115, 115, 115) ${newVolume * 100}%, grey 100%)`
  })
}

function clickTimeBarLineBird(audio, elem){
  elem.addEventListener('click', e => {
    if(e.target.classList[0] === 'timebar-line_bird'){
    const lineWidth = window.getComputedStyle(elem).width;
    audio.currentTime = e.offsetX / parseInt(lineWidth) * audio.duration;
    }
  })
}

function changeCurrentTime(){
  let current = audio.currentTime / audio.duration * 100;
  document.querySelector('.timebar-line').style.background = `linear-gradient(to right, rgb(19, 175, 123) 0%, rgb(61, 133, 140) ${current}%, rgb(115, 115, 115) ${current}%, grey 100%)`;
  document.querySelector('.timebar-time_currentTime').innerHTML = getTimeFromNum(audio.currentTime);
}

function changeCurrentTimeBird(){
  let current = audioBird.currentTime / audioBird.duration * 100;
  document.querySelector('.timebar-line_bird').style.background = `linear-gradient(to right, rgb(19, 175, 123) 0%, rgb(61, 133, 140) ${current}%, rgb(115, 115, 115) ${current}%, grey 100%)`;

  document.querySelector('.timebar-time_bird_currentTime').innerHTML = getTimeFromNum(audioBird.currentTime);
}

function changeLineCircle(audio, line, circle){  
  audio.addEventListener('timeupdate', changeLeftCircle)
  
  function changeLeftCircle() {
    let current = audio.currentTime / audio.duration * 100;
    circle.style.left = `${current}%`
  }
  
  
  circle.onmousedown = function(event){
    event.preventDefault();
    let widthLine = line.offsetWidth;
  
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    audio.removeEventListener('timeupdate', changeLeftCircle)
  
    function onMouseMove(event){
      let newLeftCircle = (event.clientX - line.getBoundingClientRect().left) / widthLine * 100 ;
  
      if (newLeftCircle < 0) {
        newLeftCircle = 0;
      }else if(newLeftCircle > 100) {
        newLeftCircle = 100
      }
  
      circle.style.left = newLeftCircle + '%'
      audio.currentTime = audio.duration * newLeftCircle / 100;
    }
  
    function onMouseUp(){
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
      audio.addEventListener('timeupdate', changeLeftCircle)
    }
  }
  
  circle.ondragstart = function() {
    return false;
  };
}

function trueSound() {
  const audio = new Audio();
  audio.src = '../assets/audio/zvuk-otvet-zaschitan-galochka-5193-1-1__=3 (mp3cut.net).mp3';
  audio.autoplay = true;
}

function falseSound() {
  const audio = new Audio();
  audio.src = '../assets/audio/standartnyiy-zvuk-s-oshibochnyim-otvetom-5199-1__=8 (mp3cut.net).mp3';
  audio.autoplay = true;
}




