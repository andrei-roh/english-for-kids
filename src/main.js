import cards from './cards.js';
import { removeActiveClass } from './header.js';
import { randomInteger } from './header.js';
import { showStartButton } from './header.js';
import { soundHandler } from './header.js';
import conditions from './conditions.js';
import { setAllHide } from './allHide.js';

//show game result
function resultShow() {
  gameResult.style.display = 'flex';
}

//create main elements
const main = document.createElement('main');
//create game rating
const gameRating = document.createElement('div');
gameRating.classList.add('game-rating');
gameRating.id = 'gameRating';
main.appendChild(gameRating);

for (let i = 0; i < 8; i += 1) {
  const mainElement = document.createElement('a');
  main.id = 'main';
  mainElement.id = i;
  mainElement.classList.add('main-card');
  mainElement.href = '#/cards';
  mainElement.innerHTML = `<img src='assets/${
    cards[i + 1][randomInteger(0, 6)].image
  }'> ${cards[0][i]}`;
  main.appendChild(mainElement);
}

//close navLeft header-menu
document.getElementById('nav-toggle-left').addEventListener('click', () => {
  conditions.openLeftMenu = !conditions.openLeftMenu;
});
main.addEventListener('click', () => {
  if (conditions.openLeftMenu === true) {
    document.getElementById('nav-toggle-left').click();
  }
});

document.body.appendChild(main);
//create elements
for (let j = 0; j < 8; j += 1) {
  document.getElementById(j).addEventListener('click', (event) => {
    if (conditions.cardsStack === true) {
      if (event.target === document.getElementById(`${j + 30}`)) {
        document.getElementById(`${j + 20}`).style.transform =
          'rotateY(180deg)';
        document.getElementById(`${j + 30}`).style.opacity = '0';
        document.getElementById(`${j + 30}`).style.transitionDelay = '0s';

        document
          .getElementById(`${j + 20}`)
          .addEventListener('mouseleave', function () {
            document.getElementById(`${j + 20}`).style.transform =
              'rotateY(0deg)';
            document.getElementById(`${j + 30}`).style.transitionDelay = '0.2s';
            document.getElementById(`${j + 30}`).style.opacity = '1';
          });
      }
      if (
        event.target === document.getElementById(`${j + 40}`) &&
        conditions.switchTestPlay === false
      ) {
        soundHandler(
          `assets/${cards[conditions.numberOfStack + 1][j].audioSrc}`
        );
      }
    }
    if (conditions.cardsStack === false) {
      removeActiveClass();
      document.getElementById(`${j + 11}`).classList.add('active');
      conditions.numberOfStack = j;
      for (let i = 0; i < 8; i += 1) {
        document.getElementById(`${i}`).style.background = 'none';
        document.getElementById(`${i}`).classList.remove('main-card');
        document.getElementById(`${i}`).innerHTML = `
        <div class='flip-box'>
          <div id='${i + 20}' class='flip-box-inner'>
            <div class='flip-box-front'>
              <img
								id='${i + 40}'
								style='width: 100%; height: 220px; margin: 0px'
								src='assets/${cards[j + 1][i].image}'
							>
              <div id='${i + 50}' class='card-bottom'>
								<div class='card-name'>${cards[j + 1][i].word}</div>
								<a
									id='${i + 30}'
									class='rotate'
									style='background-image: ${
                    conditions.switchTestPlay === false
                      ? 'url(assets/img/rotate.svg)'
                      : 'url(assets/img/rotate-play.svg)'
                  }'
								></a>
							</div>
            </div>
            <div class='flip-box-back'>
              <img style='width: 100%; height: 220px; margin: 0px' src='assets/${
                cards[j + 1][i].image
              }'>
              <div class='card-bottom'>
								<div class='card-name'>${cards[j + 1][i].translation}</div>
							</div>
            </div>
          </div>
        </div>`;
      }
      conditions.cardsStack = true;
      if (conditions.switchTestPlay === true) {
        showStartButton();
      }
    }
  });
}

//result
const gameResult = document.createElement('div');
gameResult.id = 'gameResult';
gameResult.classList.add('game-result');
gameResult.style.display = 'none';

document.body.appendChild(gameResult);

//create play game elements
const divForGameButton = document.createElement('div');
divForGameButton.classList.add('div-for-game-button');
divForGameButton.id = 'divForGameButton';

const startGameButton = document.createElement('button');
startGameButton.classList.add('start-game-button');
startGameButton.id = 'startGameButton';
startGameButton.innerHTML = 'START GAME';

const repeatSoundButton = document.createElement('button');
repeatSoundButton.classList.add('repeat-sound-button');
repeatSoundButton.style.display = 'none';
repeatSoundButton.innerHTML =
  "<img style='width: 100%' src='./assets/img/repeat.svg'>";

main.appendChild(divForGameButton);
divForGameButton.appendChild(startGameButton);
divForGameButton.appendChild(repeatSoundButton);

function shuffleGameCards(array) {
  let presentValue,
    randomIndex,
    currentIndex = array.length;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    presentValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = presentValue;
  }
  return array;
}

startGameButton.addEventListener('click', function goGame() {
  conditions.gameStart = true;
  for (let i = 0; i < 8; i += 1) {
    document.getElementById(`${i + 50}`).style.display = 'none';
    document.getElementById(`${i + 40}`).style.paddingTop = '20px';
    document.getElementById(`${i + 40}`).style.transition = 'all 1s';
  }
  //change button
  startGameButton.style.display = 'none';
  repeatSoundButton.style.display = 'flex';

  let listWordsIndexes = Array.from(Array(8).keys());
  shuffleGameCards(listWordsIndexes);

  //play game
  function getStage(cardNumber) {
    repeatSoundButton.addEventListener('click', function repeatSound() {
      soundHandler(
        `assets/${
          cards[conditions.numberOfStack + 1][listWordsIndexes[cardNumber]].audioSrc
        }`
      );
    });
    soundHandler(
      `assets/${
        cards[conditions.numberOfStack + 1][listWordsIndexes[cardNumber]].audioSrc
      }`
    );
    for (let j = 0; j < listWordsIndexes.length; j += 1) {
      document.getElementById(j).addEventListener('click', () => {
        conditions.goodChoise = false;
        if (j === listWordsIndexes[cardNumber]) {
          conditions.goodChoise = true;
          conditions.arrayOfChoise.push(true);
          soundHandler(`./assets/audio/correct.mp3`);
          gameRating.insertAdjacentHTML(
            'beforeend',
            '<div class="star-win" style="background-image: url(assets/img/star-win.svg)"></div>'
          );
          document.getElementById(j).classList.add('not-active');
          cardNumber += 1;
          if (cardNumber === 8) {
            if (conditions.arrayOfChoise.includes(false) === false) {
              soundHandler(`./assets/audio/success.mp3`);
              setAllHide();
              gameResult.innerHTML =
                "<img style='width: 400px, height: 400px' src='./assets/img/success.jpg'>";
              resultShow();
            }
            if (conditions.arrayOfChoise.includes(false) === true) {
              soundHandler(`./assets/audio/failure.mp3`);
              setAllHide();
              gameResult.innerHTML =
                "<img style='width: 400px, height: 400px' src='./assets/img/failure.jpg'>";
              resultShow();
            }
            return setTimeout(function () {
              location.reload();
            }, 2500);
          }
          soundHandler(
            `assets/${
              cards[conditions.numberOfStack + 1][listWordsIndexes[cardNumber]]
                .audioSrc
            }`
          );
        }
        if (conditions.goodChoise === false) {
          conditions.goodChoise === false;
          conditions.arrayOfChoise.push(false);
          soundHandler(`./assets/audio/error.mp3`);
          gameRating.insertAdjacentHTML(
            'beforeend',
            '<div class="star-lose" style="background-image: url(assets/img/star.svg)"></div>'
          );
        }
      });
    }
  }
  getStage(0);
});
