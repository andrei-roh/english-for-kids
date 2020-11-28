//create menu
var body = document.querySelector("body"),
//create left menu
header = document.createElement("header"),
menu = document.createElement("menu"),
inputLeft = document.createElement("input"),
nav_left = document.createElement("nav"),
labelLeft = document.createElement("label"),
h2_left = document.createElement("h2"),
logo_header = document.createElement("div"),
list_left = document.createElement("ul"),
//create switcher
switcher = document.createElement("switcher"),
inputSwitch = document.createElement("input"),
labelSwitch = document.createElement("label"),
onoffswitch_inner = document.createElement("span"),
onoffswitch_switch = document.createElement("span");


//Heared properties
header.id = "header";
//Left menu's parts properties
inputLeft.id = "nav-toggle_left";
inputLeft.type = "checkbox";
inputLeft.hidden = "";
nav_left.classList.add("nav_left");
labelLeft.classList.add("nav-toggle_left");
labelLeft.htmlFor = "nav-toggle_left";
labelLeft.onclick;
h2_left.classList.add("logo");
logo_header.classList.add("logo_header");
logo_header.innerHTML = "ENGLISH FOR KIDS";
list_left.classList.add("header_menu");
//Switcher parts properties
switcher.classList.add("onoffswitch");
inputSwitch.id = "myonoffswitch";
inputSwitch.classList.add("onoffswitch-checkbox");
inputSwitch.type = "checkbox";
inputSwitch.checked;
labelSwitch.classList.add("onoffswitch-label");
labelSwitch.htmlFor = "myonoffswitch";
onoffswitch_inner.classList.add("onoffswitch-inner");
onoffswitch_switch.classList.add("onoffswitch-switch");
//Add body in document
document.body.appendChild(header);
//Add header in document
header.appendChild(menu);
//Add left menu in document
menu.appendChild(inputLeft);
menu.appendChild(nav_left);
nav_left.appendChild(labelLeft);
nav_left.appendChild(h2_left);
h2_left.appendChild(logo_header);
h2_left.appendChild(list_left);
for (let i = 0; i < 9; i++) {
  var formList = document.createElement("a");
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
  list_left.appendChild(formList);
}
//Add switcher in document
header.appendChild(switcher);
switcher.appendChild(inputSwitch);
switcher.appendChild(labelSwitch);
labelSwitch.appendChild(onoffswitch_inner);
labelSwitch.appendChild(onoffswitch_switch);

//remove class "active" from all menu elements
function removeActiveClass () {
  for (let k = 10; k < 19; k++){
    document.getElementById(`${k}`).classList.remove("active")
  }
}
//menu point Main Page
document.getElementById("10").addEventListener('click', () => {
  removeActiveClass ()
  document.getElementById(`${"10"}`).classList.add("active")
  for (let i = 0; i < 8; i++) {
    document.getElementById(`${i}`).innerHTML = `<img src='assets/${cards[i + 1][randomInteger(0, 6)].image}'> ${cards[0][i]}`;
  };
  conditions.cardsStack = false;
});
//Other menu points
for (let j = 11; j < 19; j++) {
  document.getElementById(j).addEventListener('click', () => {
    removeActiveClass ()
    document.getElementById(`${j}`).classList.add("active")
    for (let i = 0; i < 8; i++) {
      document.getElementById(`${i}`).innerHTML = `<img style='width: 100%; height: 240px; margin: 0px;' src='assets/${cards[j - 10][i].image}'><div class='card_bottom'><div class="card_name">${cards[j - 10][i].word}</div><a class='rotate'></a></div>`;
    };
    conditions.cardsStack = true;
    numberOfStack = j - 11;
  });
}
