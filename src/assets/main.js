//Main
import cards from './cards.js';
import {removeActiveClass} from './header.js';
import {randomInteger} from './header.js';
import {showStartButton} from './header.js';
import numberOfStack from '../index.js';
import conditions from './conditions.js';

//function popup
function PopUpShow(){
	popUp.style.display = 'flex';
}
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

//create main element
const main = document.createElement('main');
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

//popup
const popUp = document.createElement('div');
popUp.id = 'popup';
popUp.classList.add('popup');
popUp.style.display = 'none';

document.body.appendChild(popUp);

//Play Game
const divForGameButton = document.createElement('div');
divForGameButton.classList.add('div_for_game_button');
divForGameButton.id = 'divForGameButton';

const startGameButton = document.createElement('button');
startGameButton.classList.add('start_game_button');
startGameButton.id = 'startGameButton'
startGameButton.innerHTML = "START GAME";

main.appendChild(divForGameButton);
divForGameButton.appendChild(startGameButton);

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

document.getElementById('startGameButton').addEventListener('click', function goGame () {
	for (let i = 0; i < 8; i++) {
		document.getElementById(`${i + 50}`).style.display = 'none';
		document.getElementById(`${i + 40}`).style.paddingTop = '20px';
		document.getElementById(`${i + 40}`).style.transition = 'all 1s';
		// document.getElementById(`${i + 40}`).style.height = '260px';
	}
	//change button
	startGameButton.style.padding = '15px 15px';
	startGameButton.style.width = '65px';
	startGameButton.style.borderRadius = '50%';
	startGameButton.style.transition = 'all 1.5s';
	startGameButton.innerHTML = "<img src='./assets/img/repeat.svg'>"

	let listWords = [0, 1, 2, 3, 4, 5, 6, 7];
	shuffleGameCards(listWords);
	//Play game
	function getStage(cardNumber) {
		soundHandler(`assets/${cards[numberOfStack + 1][listWords[cardNumber]].audioSrc}`);
		for (let j = 0; j < listWords.length; j++) {
		  document.getElementById(j).addEventListener('click', () => {
				conditions.goodChoise = false;
				if (j === listWords[cardNumber]) {
					conditions.goodChoise = true;
					conditions.arrayOfChoise.push(true);
					soundHandler(`./assets/audio/correct.mp3`);
					document.getElementById(j).style.opacity = '0.5';
					cardNumber += 1;
					if (cardNumber === 8) {
						if(conditions.arrayOfChoise.includes(false) === false) {
								soundHandler(`./assets/audio/success.mp3`);
								allHide();
								popUp.innerHTML = "<img style='width: 400px, height: 400px' src='./assets/img/success.jpg'>"
								PopUpShow()
						}
						if(conditions.arrayOfChoise.includes(false) === true) {
								soundHandler(`./assets/audio/failure.mp3`);
								allHide();
								popUp.innerHTML = "<img style='width: 400px, height: 400px' src='./assets/img/failure.jpg'>"
								PopUpShow()
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
				}
			});
		}
	}
	getStage (0);
});
