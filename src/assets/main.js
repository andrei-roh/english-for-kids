//Main
import cards from './cards.js';
import {removeActiveClass} from './header.js';
import {randomInteger} from './header.js';
import numberOfStack from '../index.js';
import conditions from './conditions.js';

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
			if (event.target === document.getElementById(`${j + 40}`)) {
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
              <div class='card_bottom'><div class='card_name'>${cards[j + 1][i].word}</div><a id='${i + 30}' class='rotate'></a></div>
            </div>
            <div class='flip_box_back'>
              <img style='width: 100%; height: 220px; margin: 0px' src='assets/${cards[j + 1][i].image}'>
              <div class='card_bottom'><div class='card_name'>${cards[j + 1][i].translation}</div>
            </div>
          </div>
        </div>`;
      };
      conditions.cardsStack = true;
    }
  });
}

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

document.getElementById('startGameButton').addEventListener('click', function startGame () {
	let listWords = [0, 1, 2, 3, 4, 5, 6, 7];
	shuffleGameCards(listWords);
	// for (let i = 0; i < listWords.length; i++) {
	// 	soundHandler(`assets/${cards[numberOfStack + 1][i].audioSrc}`);
	// }
	soundHandler(`assets/${cards[numberOfStack + 1][listWords[0]].audioSrc}`);
	console.log(listWords);
});
