import {birdsData} from '../script/bird.js'
let lang = JSON.parse(localStorage.getItem('lang'));

let arrBird = [];

birdsData.forEach(elem => {
  for( let i = 0; i < elem.length; i++){
    arrBird.push(elem[i])
  }
})

for(let i = 0; i < arrBird.length; i++){
  arrBird[i].id = i + 1
}

const prevButton = document.querySelector('.button_prev');
const nextButton = document.querySelector('.button_next');

let count = 0;
const audio = new Audio();
let intervalID;

function draw(){
  let img = document.createElement('img');
  img.src = arrBird[count].image;
  img.setAttribute('id', count);
  document.querySelector('.slider').append(img)
  drawDescription();
  createAudio();
}

draw();

function drawDescription(){
  let descript = document.querySelector('.block_description');
  descript.innerHTML = '';
  descript.innerHTML = `
  <p class="name">${lang === 'en' ? arrBird[count].name_en : arrBird[count].name}</p>
  <p class="name-lat">${arrBird[count].species}</p>
  <div class="audio"></div>
  <p class="description">${lang === 'en' ? arrBird[count].description_en : arrBird[count].description}</>`;

  audio.src = arrBird[count].audio;
  audio.classList = count;
  document.querySelector('.audio').append(audio);
  
}

nextButton.addEventListener('click', () => {
  if(count === arrBird.length - 1){
    count = 0
  }else{
    count++
  }
  console.log(count)
  draw();
  let imgArr = document.querySelectorAll('.slider img') 
  imgArr[0].remove();
  drawDescription();
  createAudio();
})

prevButton.addEventListener('click', () => {
  if(count === 0){
    count = 35
  }else{
    count--
  }
  console.log(count)
  draw();
  let imgArr = document.querySelectorAll('.slider img') 
  imgArr[0].remove();
  drawDescription();
  createAudio();
})

function createAudio(){
  let div_audioplayer = document.createElement('div');
  div_audioplayer.classList = 'audioplayer';
  div_audioplayer.innerHTML = `
      <div class="controls">
        <div class="play-button">
          <div class="form play"></div>
        </div>
        <div class="timebar">
          <div class="time"></div>
          <div class="timebar-bar">
            <div class="timebar-line"></div>
            <div class="timebar-circle"></div>
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
      </div>`
  document.querySelector('.audio').appendChild(div_audioplayer);
  if(audio.muted){
    console.log('muted')
    audio.muted = !audio.muted
  }
  durationTime();
  play_pauseAudio();
  audio.addEventListener('ended', () => {
    document.querySelector('.form').classList.remove("pause");
    document.querySelector('.form').classList.add("play");
  })
  clickTimeBarLine();
  clickVolume();
  volumeSliderHover();
  clearInterval(intervalID); 
  setInterval(() => {
    let current = audio.currentTime / audio.duration * 100;
    document.querySelector('.timebar-line').style.background = `linear-gradient(to right, rgb(19, 175, 123) 0%, rgb(61, 133, 140) ${current}%, rgb(115, 115, 115) ${current}%, grey 100%)`;
    document.querySelector('.timebar-circle').style.left = `${current}%`;
  }, 200);
  intervalID = setInterval(() => {
    document.querySelector('.timebar-time_currentTime').innerHTML = getTimeFromNum(audio.currentTime);
  }, 1000)
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

function durationTime() {
  audio.addEventListener('loadeddata', () => {
    document.querySelector('.time').innerHTML = '';
    let div_time = document.createElement('div');
    div_time.classList = 'timebar-time';
    div_time.innerHTML = `
        <div class="timebar-time_currentTime">00:00</div>
        <span> / </span>
        <div class="timebar-time_durationTime">${getTimeFromNum(audio.duration)}</div>`
    document.querySelector('.time').prepend(div_time);
  })
}

function play_pauseAudio() {
  document.querySelector('.play-button').addEventListener('click', () => {
    if(audio.paused){
      document.querySelector('.form').classList.remove("play");
      document.querySelector('.form').classList.add("pause");
      audio.play();
    }else {
      document.querySelector('.form').classList.remove("pause");
      document.querySelector('.form').classList.add("play");
      audio.pause();
    }
  })
}

function clickTimeBarLine(){
  const line = document.querySelector('.timebar-line');
  line.addEventListener('click', e => {
    const lineWidth = window.getComputedStyle(line).width;
    audio.currentTime = e.offsetX / parseInt(lineWidth) * audio.duration;
  })
}

function clickVolume() {
  const onVolumeBird = document.querySelector('.volume.on');
  const outVolumeBird = document.querySelector('.volume.out');
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

function volumeSliderHover() {
  const volumeSlider = document.querySelector('.volume-slider');
  document.querySelector('.timebar-volume').addEventListener('mouseenter', () =>{
    document.querySelector('.timebar-volume').style.width = `140px`
    volumeSlider.classList.add('active');
  })

  document.querySelector('.timebar-volume').addEventListener('mouseleave', () =>{
    volumeSlider.classList.remove('active');
    document.querySelector('.timebar-volume').style.width = `30px`
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
