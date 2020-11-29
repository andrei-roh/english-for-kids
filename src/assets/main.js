//Main
import cards from './cards.js';
import {removeActiveClass} from './header.js';
import {randomInteger} from './header.js';
import conditions from './conditions.js';

let numberOfStack;

//function of reading sounds
function soundHandler(soundSource) {
	const keySound = document.createElement('audio');
	keySound.src = soundSource;
	keySound.play();
 }

//create main element
var main = document.createElement("main");
for (let i = 0; i < 8; i++) {
  var mainElement = document.createElement("a");
  main.id = "main";
  mainElement.id = i;
  mainElement.classList.add("main_card");
  mainElement.href = "#/cards";
  mainElement.innerHTML = `<img src='assets/${cards[i + 1][randomInteger(0, 6)].image}'> ${cards[0][i]}`;
  main.appendChild(mainElement);
};

document.body.appendChild(main);

for (let j = 0; j < 8; j++) {
  document.getElementById(j).addEventListener('click', () => {
    if (conditions.cardsStack == true) {
      soundHandler(`assets/${cards[numberOfStack + 1][j].audioSrc}`);
    }
    if (conditions.cardsStack == false) {
      removeActiveClass ()
      document.getElementById(`${j + 11}`).classList.add("active");
      numberOfStack = j;
      for (let i = 0; i < 8; i++) {
        document.getElementById(`${i}`).classList.remove("main_card")
        document.getElementById(`${i}`).innerHTML = `
        <div class="flip_box">
          <div class="flip_box_inner">
            <div class="flip_box_front">
              <img style='width: 100%; height: 220px; margin: 0px' src='assets/${cards[j + 1][i].image}'>
              <div class='card_bottom'><div class="card_name">${cards[j + 1][i].word}</div><a class='rotate'></a></div>
            </div>
            <div class="flip_box_back">
              <img style='width: 100%; height: 220px; margin: 0px' src='assets/${cards[j + 1][i].image}'>
              <div class='card_bottom'><div class="card_name">${cards[j + 1][i].translation}</div>
            </div>
          </div>
        </div>`;
      };
      conditions.cardsStack = true;
    }
  });
}
