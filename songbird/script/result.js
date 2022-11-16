let score = JSON.parse(localStorage.getItem('score'));
let lang = JSON.parse(localStorage.getItem('lang'));
console.log(lang)
console.log(score)


let arrFamilyBird = ['Warm up', 'Passerines', 'Forest birds', 'Songbirds', 'Predator birds', 'Sea birds']

if(lang === 'en'){
    document.querySelector('.score_p').innerHTML = 'Score:'

    document.querySelectorAll('.bird-family_item').forEach((item, index) => {
        item.innerHTML = `${arrFamilyBird[index]}`
    })

    document.querySelector('.first').innerHTML = 'Congratulations!';
    document.querySelector('.second').innerHTML = 'You passed the quiz and scored <span>0</span> out of 30 possible points';
    document.querySelector('.again_button_a span').innerHTML = 'Try one more time';
}

document.querySelector('.score_number').innerHTML = score;
document.querySelector('.second span').innerHTML = score;