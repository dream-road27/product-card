// Покраска всех карточек
const productCards = document.querySelectorAll('.card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const purpleColorHash = '#800080' ;
const blueColorHash = '#0000FF';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = purpleColorHash);
})

// Покраска первой карточки
const firstProductCard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click',() => {
  firstProductCard.style.backgroundColor = blueColorHash;
});

//Открыть Google
const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
     window.open('https://google.com');
  } else {
    return;
  }
};

//Вывод консол лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('Дз №4') );

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
};

const title = document.querySelector('.catalog__title');

title.addEventListener('mouseenter', (event) => {
    
    console.log(event.target.textContent);
});


const buttonColor = document.querySelector('.btn-blue');

buttonColor.addEventListener('click', () => {

  buttonColor.classList.toggle('btn-green');
});
