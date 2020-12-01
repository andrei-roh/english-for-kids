(()=>{var n={850:(n,r,e)=>{"use strict";e.d(r,{Z:()=>a});var t=e(645),i=e.n(t)()((function(n){return n[1]}));i.push([n.id,"* {\r\n  font-family: 'Yanone Kaffeesatz', sans-serif;\r\n}\r\n\r\n/* Header */\r\n#header {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n/* Left menu */\r\n.nav_left {\r\n    width: 280px;\r\n    min-width: 280px;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: 0;\r\n    left: -280px;\r\n    padding: 15px 22px;\r\n    transition: left 0.3s;\r\n    z-index: 2000;\r\n    background: #4b475c;\r\n}\r\n\r\n.nav-toggle_left {\r\n    position: absolute;\r\n    left: 280px;\r\n    padding-left: 0.25em;\r\n    background: inherit;\r\n    color: #FFFFFF;\r\n    cursor: pointer;\r\n    font-size: 2em;\r\n    line-height: 1;\r\n    z-index: 2001;\r\n    transition: color .25s ease-in-out;\r\n}\r\n\r\n/*make button icon (TRIGRAM FOR HEAVEN)*/\r\n.nav-toggle_left:after {\r\n    content: '\\2630';\r\n    text-decoration: none;\r\n    color: #FFFFFF;\r\n}\r\n\r\n/*text color on hover*/\r\n.nav-toggle_left:hover {\r\n    color: #FFFFFF;\r\n}\r\n\r\n/*Hidden checkbox*/\r\n[id='nav-toggle_left'] {\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\n[id='nav-toggle_left']:checked ~ .nav_left {\r\n    left: 0;\r\n    padding-left: 0px;\r\n    box-shadow:4px 0px 20px 0px rgba(0,0,0, 0.5);\r\n    overflow-y: auto;\r\n}\r\n\r\n@media only screen and (min-width: 768px){\r\n  [id='nav-toggle_left']:checked ~ .nav_left {\r\n      left: 0;\r\n      padding-left: 50px;\r\n      box-shadow:4px 0px 20px 0px rgba(0,0,0, 0.5);\r\n      overflow-y: auto;\r\n  }\r\n}\r\n\r\n/*MULTIPLICATION X*/\r\n[id='nav-toggle_left']:checked ~ .nav_left > .nav-toggle_left:after {\r\n    content: '\\2715';\r\n    color: #FFFFFF;\r\n}\r\n\r\n[id='nav-toggle_left']:checked ~ .nav_left h2 {\r\n    opacity: 1;\r\n    transform: scale(1, 1);\r\n}\r\n\r\n/*menu style*/\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.nav_left > ul {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.nav_left > ul > li {\r\n    line-height: 2.5;\r\n    opacity: 0;\r\n    transform: translateX(-50%);\r\n    transition: opacity .5s .1s, transform .5s .1s;\r\n}\r\n\r\n[id='nav-toggle_left']:checked ~ .nav_left > ul > li {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n}\r\n\r\n.logo_header {\r\n  padding-top: 1em;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.header_menu {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 0px;\r\n}\r\n\r\n.header_item {\r\n  padding: 10px 0;\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  padding: 10px;\r\n  /* margin: 0 0 0 60px; */\r\n  color: #fff;\r\n  min-width: 145px;\r\n  text-align: left;\r\n}\r\n\r\n.header_item.active {\r\n  text-decoration: underline;\r\n}\r\n\r\n/* Switcher */\r\n.onoffswitch {\r\n  position: relative;\r\n  top: 0.5em;\r\n  width: 114px;\r\n}\r\n\r\n.onoffswitch-checkbox {\r\n  display: none;\r\n}\r\n\r\n.onoffswitch-label {\r\n  display: block;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  border: 2px solid #999999;\r\n  border-radius: 0px;\r\n}\r\n\r\n.onoffswitch-inner {\r\n  display: block;\r\n  width: 200%;\r\n  margin-left: -100%;\r\n  transition: margin 0.3s ease-in 0s;\r\n}\r\n\r\n.onoffswitch-inner:before, .onoffswitch-inner:after {\r\n  display: block;\r\n  float: left;\r\n  width: 50%;\r\n  height: 30px;\r\n  padding: 0;\r\n  line-height: 30px;\r\n  font-size: 14px;\r\n  color: #FFFFFF;\r\n  font-weight: bold;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.onoffswitch-inner:before {\r\n  content: \"PLAY\";\r\n  padding-left: 10px;\r\n  background-color: #9b806c;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.onoffswitch-inner:after {\r\n  content: \"TRAIN\";\r\n  padding-right: 10px;\r\n  background-color: #4b475c;\r\n  color: #FFFFFF;\r\n  text-align: right;\r\n}\r\n\r\n.onoffswitch-switch {\r\n  display: block;\r\n  width: 46px;\r\n  margin: 2px;\r\n  background: #FFFFFF;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 60px;\r\n  border: 2px solid #999999;\r\n  border-radius: 0px;\r\n  transition: all 0.3s ease-in 0s;\r\n}\r\n\r\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\r\n  margin-left: 0;\r\n}\r\n\r\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\r\n  right: 0px;\r\n}\r\n",""]);const a=i},556:(n,r,e)=>{"use strict";e.d(r,{Z:()=>l});var t=e(645),i=e.n(t),a=e(667),o=e.n(a),d=e(982),s=i()((function(n){return n[1]})),c=o()(d);s.push([n.id,"#main {\r\n  padding-top: 55px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  padding: 20px 15px;\r\n  max-width: 1440px;\r\n  margin: auto;\r\n}\r\n\r\n.main_card {\r\n  width: 300px;\r\n  height: 280px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n  color: #212529;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: Roboto;\r\n  font-size: 24px;\r\n  line-height: 36px;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  background: linear-gradient(180deg,#3b3749,#4b475c 40%,#fff 0,#fff);\r\n  margin: 20px 25px;\r\n  cursor: pointer;\r\n  -webkit-transition: .3s;\r\n  transition: .3s;\r\n}\r\n\r\n.main_card:hover {\r\n    box-shadow: 0 10px 20px rgba(0,0,0,.4);\r\n}\r\n\r\n.main_card img {\r\n  width: 140px;\r\n  height: 140px;\r\n  /* border-radius: 50%; */\r\n  /* border: 10px solid #fff; */\r\n  object-fit: cover;\r\n  margin: 30px auto;\r\n}\r\n\r\n.card_bottom {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n\r\n.rotate {\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 50px;\r\n  background-image: url("+c+");\r\n  background-size: 32px;\r\n  background-repeat: no-repeat;\r\n  background-position: center 5px;\r\n  /* bottom: 5px; */\r\n  right: 0px;\r\n  -webkit-transition: .3s;\r\n  transition: .3s;\r\n  /* filter: grayscale(1); */\r\n}\r\n\r\n/* Flip Box */\r\n.flip_box {\r\n  background-color: transparent;\r\n  /* width: 300px;\r\n  height: 200px; */\r\n  /* border: 1px solid #f1f1f1; */\r\n  perspective: 1000px;\r\n  width: 300px;\r\n  height: 280px;\r\n  /* border-radius: 5px; */\r\n  /* box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12); */\r\n  color: #212529;\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* font-family: Roboto; */\r\n  font-size: 24px;\r\n  /* line-height: 36px; */\r\n  font-weight: 400;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  /* background: -webkit-gradient(linear,left top,left bottom,from(#3b3749),color-stop(40%,#4b475c),color-stop(40%,#fff),to(#fff));\r\n  background: linear-gradient(180deg,#3b3749,#4b475c 40%,#fff 0,#fff); */\r\n  margin: 20px 25px;\r\n  cursor: pointer;\r\n  transition: .3s;\r\n}\r\n\r\n.flip_box_inner {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  transition: transform 0.8s;\r\n  transform-style: preserve-3d;\r\n}\r\n\r\n.flip_box_front, .flip_box_back {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n}\r\n\r\n.flip_box_front {\r\n  /* background-color: #bbb; */\r\n  color: black;\r\n  border-radius: 5px;\r\n  /* border: solid 1px black */\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n}\r\n\r\n.flip_box_back {\r\n  /* background-color: #555; */\r\n  color: black;\r\n  transform: rotateY(180deg);\r\n  border-radius: 5px;\r\n  /* border: solid 1px black */\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n}\r\n",""]);const l=s},645:n=>{"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(t)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);t&&i[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),r.push(s))}},r}},667:n=>{"use strict";n.exports=function(n,r){return r||(r={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,r,e)=>{"use strict";var t,i=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),a=[];function o(n){for(var r=-1,e=0;e<a.length;e++)if(a[e].identifier===n){r=e;break}return r}function d(n,r){for(var e={},t=[],i=0;i<n.length;i++){var d=n[i],s=r.base?d[0]+r.base:d[0],c=e[s]||0,l="".concat(s," ").concat(c);e[s]=c+1;var p=o(l),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(a[p].references++,a[p].updater(m)):a.push({identifier:l,updater:f(m,r),references:1}),t.push(l)}return t}function s(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var a=e.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var o=i(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}return r}var c,l=(c=[],function(n,r){return c[n]=r,c.filter(Boolean).join("\n")});function p(n,r,e,t){var i=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=l(r,i);else{var a=document.createTextNode(i),o=n.childNodes;o[r]&&n.removeChild(o[r]),o.length?n.insertBefore(a,o[r]):n.appendChild(a)}}function m(n,r,e){var t=e.css,i=e.media,a=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var g=null,u=0;function f(n,r){var e,t,i;if(r.singleton){var a=u++;e=g||(g=s(r)),t=p.bind(null,e,a,!1),i=p.bind(null,e,a,!0)}else e=s(r),t=m.bind(null,e,r),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else i()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=d(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var i=o(e[t]);a[i].references--}for(var s=d(n,r),c=0;c<e.length;c++){var l=o(e[c]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=s}}}},29:()=>{var n=document.createElement("footer");document.body.appendChild(n)},982:(n,r,e)=>{"use strict";n.exports=e.p+"8564a665cd6d24805ec6.svg"}},r={};function e(t){if(r[t])return r[t].exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{"use strict";var n={};e.r(n);var r=e(379),t=e.n(r),i=e(850);t()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=e(556);t()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;const o=[["Action (set A)","Action (set B)","Animal (set A)","Animal (set B)","Clothes","Emotions","Tech","Cats"],[{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"open",translation:"открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"play",translation:"играть",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"point",translation:"указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"пропускать, прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{word:"cat",translation:"кот",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"курица",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"собака",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"лошадь",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"свинья",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"rabbit",translation:"кролик",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"sheep",translation:"овца",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{word:"bird",translation:"птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"frog",translation:"жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"giraffe",translation:"жирафа",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{word:"skirt",translation:"юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"blouse",translation:"блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"dress",translation:"платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{word:"sad",translation:"грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"smile",translation:"улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}],[{word:"hologram",translation:"голограмма",image:"img/hologram.jpg",audioSrc:"audio/hologram.mp3"},{word:"satellite",translation:"спутник",image:"img/satellite.jpg",audioSrc:"audio/satellite.mp3"},{word:"space-suite",translation:"скафандр",image:"img/space-suite.jpg",audioSrc:"audio/space-suite.mp3"},{word:"airplane",translation:"самолет",image:"img/airplane.jpg",audioSrc:"audio/airplane.mp3"},{word:"laser",translation:"лазер",image:"img/laser.jpg",audioSrc:"audio/laser.mp3"},{word:"robot",translation:"робот",image:"img/robot.jpg",audioSrc:"audio/robot.mp3"},{word:"smartphone",translation:"смартфон",image:"img/smartphone.jpg",audioSrc:"audio/smartphone.mp3"},{word:"computer",translation:"компьютер",image:"img/computer.jpg",audioSrc:"audio/computer.mp3"}],[{word:"lynx",translation:"рысь",image:"img/lynx.jpg",audioSrc:"audio/lynx.mp3"},{word:"manul",translation:"манул",image:"img/manul.jpg",audioSrc:"audio/manul.mp3"},{word:"gepard",translation:"гепард",image:"img/gepard.jpg",audioSrc:"audio/gepard.mp3"},{word:"leopard",translation:"леопард",image:"img/leopard.jpg",audioSrc:"audio/leopard.mp3"},{word:"tiger",translation:"тигр",image:"img/tiger.jpg",audioSrc:"audio/tiger.mp3"},{word:"panther",translation:"пантера",image:"img/panther.jpg",audioSrc:"audio/panther.mp3"},{word:"puma",translation:"пума",image:"img/puma.jpg",audioSrc:"audio/puma.mp3"},{word:"serval",translation:"сервал",image:"img/serval.jpg",audioSrc:"audio/serval.mp3"}]],d={cardsStack:!1,switchTestPlay:!1},s=(document.querySelector("body"),document.createElement("header"));s.id="header";const c=document.createElement("menu"),l=document.createElement("input");l.id="nav-toggle_left",l.type="checkbox",l.hidden="";const p=document.createElement("nav");p.classList.add("nav_left"),p.id="navLeft";const m=document.createElement("label");m.classList.add("nav-toggle_left"),m.htmlFor="nav-toggle_left",m.onclick;const g=document.createElement("h2");g.classList.add("logo");const u=document.createElement("div");u.classList.add("logo_header"),u.innerHTML="ENGLISH FOR KIDS";const f=document.createElement("ul");f.classList.add("header_menu");const h=document.createElement("switcher");h.classList.add("onoffswitch");const b=document.createElement("input");b.id="myonoffswitch",b.classList.add("onoffswitch-checkbox"),b.type="checkbox",b.checked;const x=document.createElement("label");x.classList.add("onoffswitch-label"),x.htmlFor="myonoffswitch";const w=document.createElement("span");w.classList.add("onoffswitch-inner");const y=document.createElement("span");y.id="switchButton",y.classList.add("onoffswitch-switch"),document.body.appendChild(s),s.appendChild(c),c.appendChild(l),c.appendChild(p),p.appendChild(m),p.appendChild(g),g.appendChild(u),g.appendChild(f);for(let n=0;n<9;n++){const r=document.createElement("a");0===n?(r.id=n+10,r.href="#",r.classList.add("header_item"),r.classList.add("active"),r.innerHTML="Main Page"):(r.id=n+10,r.href="#/cards",r.classList.add("header_item"),r.innerHTML=`${o[0][n-1]}`),f.appendChild(r)}function v(n,r){let e=n+Math.random()*(r-n+1);return Math.abs(Math.round(e))}function S(){document.getElementById("navLeft").style.background="#4b475c";for(let n=0;n<8;n++)document.getElementById(`${n}`).style.background="linear-gradient(180deg,#3b3749,#4b475c 40%,#fff 0,#fff)"}function k(){document.getElementById("navLeft").style.background="#9b806c";for(let n=0;n<8;n++)document.getElementById(`${n}`).style.background="linear-gradient(180deg,#9b806c,#aa9483 40%,#fff 0,#fff)"}function j(){_(),document.getElementById("10").classList.add("active");for(let n=0;n<8;n++)document.getElementById(`${n}`).classList.add("main_card"),document.getElementById(`${n}`).innerHTML=`<img src='assets/${o[n+1][v(0,6)].image}'> ${o[0][n]}`;d.cardsStack=!1}function _(){for(let n=10;n<19;n++)document.getElementById(`${n}`).classList.remove("active")}function E(){for(let r=11;r<19;r++)document.getElementById(r).addEventListener("click",(()=>{_(),document.getElementById(`${r}`).classList.add("active");for(let n=0;n<8;n++)document.getElementById(`${n}`).style.background="none",document.getElementById(`${n}`).classList.remove("main_card"),document.getElementById(`${n}`).innerHTML=`\n        <div class="flip_box">\n          <div class="flip_box_inner">\n            <div class="flip_box_front">\n              <img style='width: 100%; height: 220px; margin: 0px' src='assets/${o[r-10][n].image}'>\n              <div class='card_bottom'><div class="card_name">${o[r-10][n].word}</div><a class='rotate'></a></div>\n            </div>\n            <div class="flip_box_back">\n              <img style='width: 100%; height: 220px; margin: 0px' src='assets/${o[r-10][n].image}'>\n              <div class='card_bottom'><div class="card_name">${o[r-10][n].translation}</div>\n            </div>\n          </div>\n        </div>`;d.cardsStack=!0,n.default=r-11}))}function F(n){const r=document.createElement("audio");r.src=n,r.play()}s.appendChild(h),h.appendChild(b),h.appendChild(x),x.appendChild(w),x.appendChild(y),document.getElementById("10").addEventListener("click",(()=>{j(),0==d.switchTestPlay&&S(),1==d.switchTestPlay&&k()})),E(),document.getElementById("myonoffswitch").onclick=function(){d.switchTestPlay=!d.switchTestPlay,0==d.switchTestPlay&&(0==d.cardsStack&&(j(),S()),1==d.cardsStack&&E()),1==d.switchTestPlay&&(0==d.cardsStack&&(j(),k()),1==d.cardsStack&&E())};const L=document.createElement("main");for(let n=0;n<8;n++){const r=document.createElement("a");L.id="main",r.id=n,r.classList.add("main_card"),r.href="#/cards",r.innerHTML=`<img src='assets/${o[n+1][v(0,6)].image}'> ${o[0][n]}`,L.appendChild(r)}document.body.appendChild(L);for(let r=0;r<8;r++)document.getElementById(r).addEventListener("click",(function(){if(1==d.cardsStack&&(event.target===document.getElementById(`${r+30}`)&&(document.getElementById(`${r+20}`).style.transform="rotateY(180deg)",document.getElementById(`${r+30}`).style.opacity="0",document.getElementById(`${r+30}`).style.transitionDelay="0s",document.getElementById(`${r+20}`).addEventListener("mouseout",(function(n){document.getElementById(`${r+20}`).style.transform="rotateY(0deg)",document.getElementById(`${r+30}`).style.transitionDelay="0.2s",document.getElementById(`${r+30}`).style.opacity="1"}))),event.target===document.getElementById(`${r+40}`)&&F(`assets/${o[n.default+1][r].audioSrc}`)),0==d.cardsStack){_(),document.getElementById(`${r+11}`).classList.add("active"),n.default=r;for(let n=0;n<8;n++)document.getElementById(`${n}`).style.background="none",document.getElementById(`${n}`).classList.remove("main_card"),document.getElementById(`${n}`).innerHTML=`\n        <div class="flip_box">\n          <div id="${n+20}" class="flip_box_inner">\n            <div class="flip_box_front">\n              <img id="${n+40}" style='width: 100%; height: 220px; margin: 0px' src='assets/${o[r+1][n].image}'>\n              <div class='card_bottom'><div class="card_name">${o[r+1][n].word}</div><a id="${n+30}" class='rotate'></a></div>\n            </div>\n            <div class="flip_box_back">\n              <img style='width: 100%; height: 220px; margin: 0px' src='assets/${o[r+1][n].image}'>\n              <div class='card_bottom'><div class="card_name">${o[r+1][n].translation}</div>\n            </div>\n          </div>\n        </div>`;d.cardsStack=!0}}));e(29)})()})();