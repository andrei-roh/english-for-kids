//Main
import cards from './cards.js';
import {removeActiveClass} from './header.js';
import {randomInteger} from './header.js';
import {showStartButton} from './header.js';
import numberOfStack from '../index.js';
import conditions from './conditions.js';

//show game result
function resultShow() {
	gameResult.style.display = 'flex';
}
//hide header & main
function allHide() {
	main.style.display = 'none';
	header.style.display = 'none';
}

//function of reading sounds
function soundHandler(soundSource) {
	const keySound = document.createElement('audio');
	keySound.src = soundSource;
	keySound.play();
 }

//create main elements
const main = document.createElement('main');
//create game rating
const gameRating = document.createElement('div');
gameRating.classList.add('game_rating');
gameRating.id = 'gameRating'
main.appendChild(gameRating);

for (let i = 0; i < 8; i++) {
  const mainElement = document.createElement('a');
  main.id = 'main';
  mainElement.id = i;
  mainElement.classList.add('main_card');
  mainElement.href = '#/cards';
  mainElement.innerHTML = `<img src='assets/${cards[i + 1][randomInteger(0, 6)].image}'> ${cards[0][i]}`;
  main.appendChild(mainElement);
};

document.body.appendChild(main);
//Create elements
for (let j = 0; j < 8; j++) {
  document.getElementById(j).addEventListener('click', () => {
		if (conditions.cardsStack == true) {
			if (event.target === document.getElementById(`${j + 30}`)) {
				document.getElementById(`${j + 20}`).style.transform = 'rotateY(180deg)';
				document.getElementById(`${j + 30}`).style.opacity = '0';
				document.getElementById(`${j + 30}`).style.transitionDelay = '0s'

				document.getElementById(`${j + 20}`).addEventListener('mouseout', function(event) {
					document.getElementById(`${j + 20}`).style.transform = 'rotateY(0deg)';
					document.getElementById(`${j + 30}`).style.transitionDelay = '0.2s'
					document.getElementById(`${j + 30}`).style.opacity = '1';
				});
			};
			if (event.target === document.getElementById(`${j + 40}`) && conditions.switchTestPlay == false) {
				soundHandler(`assets/${cards[numberOfStack + 1][j].audioSrc}`);
			}
		}
    if (conditions.cardsStack == false) {
      removeActiveClass ()
      document.getElementById(`${j + 11}`).classList.add('active');
      numberOfStack = j;
      for (let i = 0; i < 8; i++) {
				document.getElementById(`${i}`).style.background = 'none';
        document.getElementById(`${i}`).classList.remove('main_card')
        document.getElementById(`${i}`).innerHTML = `
        <div class='flip_box'>
          <div id='${i + 20}' class='flip_box_inner'>
            <div class='flip_box_front'>
              <img id='${i + 40}' style='width: 100%; height: 220px; margin: 0px' src='assets/${cards[j + 1][i].image}'>
              <div id='${i + 50}' class='card_bottom'><div class='card_name'>${cards[j + 1][i].word}</div><a id='${i + 30}' class='rotate'></a></div>
            </div>
            <div class='flip_box_back'>
              <img style='width: 100%; height: 220px; margin: 0px' src='assets/${cards[j + 1][i].image}'>
              <div class='card_bottom'><div class='card_name'>${cards[j + 1][i].translation}</div>
            </div>
          </div>
        </div>`;
      };
      conditions.cardsStack = true;
			if (conditions.switchTestPlay == true) {
				showStartButton()
			}
    }
  });
}

//result
const gameResult = document.createElement('div');
gameResult.id = 'gameResult';
gameResult.classList.add('game_result');
gameResult.style.display = 'none';

document.body.appendChild(gameResult);

//Play Game
const divForGameButton = document.createElement('div');
divForGameButton.classList.add('div_for_game_button');
divForGameButton.id = 'divForGameButton';

const startGameButton = document.createElement('button');
startGameButton.classList.add('start_game_button');
startGameButton.id = 'startGameButton';
startGameButton.innerHTML = "START GAME";

const repeatSoundButton = document.createElement('button');
repeatSoundButton.classList.add('repeat_sound_button');
repeatSoundButton.style.display = 'none';
repeatSoundButton.innerHTML = "<img style='width: 100%' src='./assets/img/repeat.svg'>";


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

startGameButton.addEventListener('click', function goGame () {
	conditions.gameStart = true;
	for (let i = 0; i < 8; i++) {
		document.getElementById(`${i + 50}`).style.display = 'none';
		document.getElementById(`${i + 40}`).style.paddingTop = '20px';
		document.getElementById(`${i + 40}`).style.transition = 'all 1s';
	}
	//change button
	startGameButton.style.display = 'none';
	repeatSoundButton.style.display = 'flex';

	let listWords = [0, 1, 2, 3, 4, 5, 6, 7];
	shuffleGameCards(listWords);
	//Play game

	function getStage(cardNumber) {
		repeatSoundButton.addEventListener('click', function repeatSound () {
			soundHandler(`assets/${cards[numberOfStack + 1][listWords[cardNumber]].audioSrc}`);
		});
		soundHandler(`assets/${cards[numberOfStack + 1][listWords[cardNumber]].audioSrc}`);
		for (let j = 0; j < listWords.length; j++) {
		  document.getElementById(j).addEventListener('click', () => {
				conditions.goodChoise = false;
				if (j === listWords[cardNumber]) {
					conditions.goodChoise = true;
					conditions.arrayOfChoise.push(true);
					soundHandler(`./assets/audio/correct.mp3`);
					gameRating.insertAdjacentHTML('beforeend', '<div class="star_win"></div>');
					document.getElementById(j).classList.add('not_active');
					cardNumber += 1;
					if (cardNumber === 8) {
						if(conditions.arrayOfChoise.includes(false) === false) {
								soundHandler(`./assets/audio/success.mp3`);
								allHide();
								gameResult.innerHTML = "<img style='width: 400px, height: 400px' src='./assets/img/success.jpg'>"
								resultShow()
						}
						if(conditions.arrayOfChoise.includes(false) === true) {
								soundHandler(`./assets/audio/failure.mp3`);
								allHide();
								gameResult.innerHTML = "<img style='width: 400px, height: 400px' src='./assets/img/failure.jpg'>"
								resultShow()
						}
						return setTimeout(function(){
							location.reload();
						}, 2500);
					}
					soundHandler(`assets/${cards[numberOfStack + 1][listWords[cardNumber]].audioSrc}`);
				}
				if (conditions.goodChoise === false) {
					conditions.goodChoise == false;
					conditions.arrayOfChoise.push(false);
					soundHandler(`./assets/audio/error.mp3`);
					gameRating.insertAdjacentHTML('beforeend', '<div class="star_lose"></div>');
				}
			});
		}
	}
	getStage (0);
});
