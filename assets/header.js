//create menu
var body = document.querySelector("body");
//create left menu
var header = document.createElement("header");
var menu = document.createElement("menu");
var inputLeft = document.createElement("input");
var nav_left = document.createElement("nav");
var labelLeft = document.createElement("label");
var h2_left = document.createElement("h2");
var logo_header = document.createElement("div");
var list_left = document.createElement("ul");
var formList = document.createElement("li")
//create switcher
var switcher = document.createElement("switcher");
var inputSwitch = document.createElement("input");
var labelSwitch = document.createElement("label");
var onoffswitch_inner = document.createElement("span");
var onoffswitch_switch = document.createElement("span");

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
list_left.appendChild(formList);
//Add switcher in document
header.appendChild(switcher);
switcher.appendChild(inputSwitch);
switcher.appendChild(labelSwitch);
labelSwitch.appendChild(onoffswitch_inner);
labelSwitch.appendChild(onoffswitch_switch);
