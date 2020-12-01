import cards from './cards.js';
import conditions from './conditions.js';
import numberOfStack from '../index.js';

// HEADER
//create menu
const body = document.querySelector("body");
//create left menu
const header = document.createElement("header");
//Header properties
header.id = "header";

const menu = document.createElement("menu"),
inputLeft = document.createElement("input");
inputLeft.id = "nav-toggle_left";
inputLeft.type = "checkbox";
inputLeft.hidden = "";

const navLeft = document.createElement("nav");
navLeft.classList.add("nav_left");
navLeft.id = "navLeft"

const labelLeft = document.createElement("label");
//Left menu's parts properties
labelLeft.classList.add("nav-toggle_left");
labelLeft.htmlFor = "nav-toggle_left";
labelLeft.onclick;

const h2Left = document.createElement("h2");
h2Left.classList.add("logo");

const logoHeader = document.createElement("div");
logoHeader.classList.add("logo_header");
logoHeader.innerHTML = "ENGLISH FOR KIDS";

const listLeft = document.createElement("ul");
listLeft.classList.add("header_menu");

//Create switcher
const switcher = document.createElement("switcher");
switcher.classList.add("onoffswitch");

const inputSwitch = document.createElement("input");
inputSwitch.id = "myonoffswitch";
inputSwitch.classList.add("onoffswitch-checkbox");
inputSwitch.type = "checkbox";
inputSwitch.checked;

const labelSwitch = document.createElement("label");
labelSwitch.classList.add("onoffswitch-label");
labelSwitch.htmlFor = "myonoffswitch";

const onOffSwitchInner = document.createElement("span");
onOffSwitchInner.classList.add("onoffswitch-inner");

const onOffSwitchSwitch = document.createElement("span");
onOffSwitchSwitch.id = "switchButton";
onOffSwitchSwitch.classList.add("onoffswitch-switch");

//Add body in document
document.body.appendChild(header);
//Add header in document
header.appendChild(menu);
//Add left menu in document
menu.appendChild(inputLeft);
menu.appendChild(navLeft);
navLeft.appendChild(labelLeft);
navLeft.appendChild(h2Left);
h2Left.appendChild(logoHeader);
h2Left.appendChild(listLeft);
for (let i = 0; i < 9; i++) {
  const formList = document.createElement("a");
  if (i === 0) {
    formList.id = i + 10;
    formList.href = "#";
    formList.classList.add("header_item");
    formList.classList.add("active");
    formList.innerHTML = `Main Page`;
  }
  else {
    formList.id = i + 10;
    formList.href = "#/cards";
    formList.classList.add("header_item");
    formList.innerHTML = `${cards[0][i - 1]}`;
  }
  listLeft.appendChild(formList);
}
//Add switcher in document
header.appendChild(switcher);
switcher.appendChild(inputSwitch);
switcher.appendChild(labelSwitch);
labelSwitch.appendChild(onOffSwitchInner);
labelSwitch.appendChild(onOffSwitchSwitch);

//Get random number
export function randomInteger(min, max) {
  let randomNumber = min + Math.random() * (max - min + 1);
  return Math.abs(Math.round(randomNumber));
 }
 //Change color on Purple
 function getPurpleColor () {
   document.getElementById('navLeft').style.background = "#4b475c";
   for (let i = 0; i < 8; i++) {
     document.getElementById(`${i}`).style.background = "linear-gradient(180deg,#3b3749,#4b475c 40%,#fff 0,#fff)";
   };
 }
//Change color on Brown
 function getBrownColor () {
   document.getElementById('navLeft').style.background = "#9b806c";
   for (let i = 0; i < 8; i++) {
     document.getElementById(`${i}`).style.background = "linear-gradient(180deg,#9b806c,#aa9483 40%,#fff 0,#fff)";
   };
 }
//Get Start menu
 function formStartMenu () {
   removeActiveClass ()
   document.getElementById(`${"10"}`).classList.add("active")
   for (let i = 0; i < 8; i++) {
     document.getElementById(`${i}`).classList.add("main_card");
     document.getElementById(`${i}`).innerHTML = `<img src='assets/${cards[i + 1][randomInteger(0, 6)].image}'> ${cards[0][i]}`;
   };
   conditions.cardsStack = false;
 };

//remove class "active" from all menu elements
export function removeActiveClass () {
  for (let k = 10; k < 19; k++){
    document.getElementById(`${k}`).classList.remove("active")
  }
}

//menu point Main Page
document.getElementById("10").addEventListener('click', () => {
  formStartMenu ();
  if (conditions.switchTestPlay == false) {
    getPurpleColor ();
  }
  if (conditions.switchTestPlay == true) {
    getBrownColor ();
  }
});

//Other menu points
function formOtherMenu () {
  for (let j = 11; j < 19; j++) {
    document.getElementById(j).addEventListener('click', () => {
      removeActiveClass ()
      document.getElementById(`${j}`).classList.add("active")
      for (let i = 0; i < 8; i++) {
        document.getElementById(`${i}`).style.background = "none";
        document.getElementById(`${i}`).classList.remove("main_card")
        document.getElementById(`${i}`).innerHTML = `
        <div class="flip_box">
          <div class="flip_box_inner">
            <div class="flip_box_front">
              <img style='width: 100%; height: 220px; margin: 0px' src='assets/${cards[j - 10][i].image}'>
              <div class='card_bottom'><div class="card_name">${cards[j - 10][i].word}</div><a class='rotate'></a></div>
            </div>
            <div class="flip_box_back">
              <img style='width: 100%; height: 220px; margin: 0px' src='assets/${cards[j - 10][i].image}'>
              <div class='card_bottom'><div class="card_name">${cards[j - 10][i].translation}</div>
            </div>
          </div>
        </div>`;
      };
      conditions.cardsStack = true;
      numberOfStack = j - 11;
    });
  }
}
formOtherMenu();

//Test/Play
document.getElementById('myonoffswitch').onclick = function changeTestPlay () {
  conditions.switchTestPlay = !conditions.switchTestPlay;
  if (conditions.switchTestPlay == false) {
    if (conditions.cardsStack == false) {
      formStartMenu ()
      getPurpleColor ()
    }
    if (conditions.cardsStack == true) {
      formOtherMenu();
    }
  }
  if (conditions.switchTestPlay == true) {
    if (conditions.cardsStack == false) {
      formStartMenu ();
      getBrownColor ();
    }
    if (conditions.cardsStack == true) {
      formOtherMenu();
    }
  }
};
