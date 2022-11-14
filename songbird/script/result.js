let score = JSON.parse(localStorage.getItem('score'));
console.log(score)

document.querySelector('.score span').innerHTML = score;
document.querySelector('.second span').innerHTML = score;
