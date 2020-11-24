function randomInteger(min, max) {
  let randomNumber = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(randomNumber);
}

var main = document.createElement("main");
for (let i = 0; i < 8; i++) {
  console.log(randomInteger(0, 8))
  var mainElement = document.createElement("a");
  main.id = "main";
  mainElement.classList.add("main_card");
  mainElement.href = "#/cards";
  mainElement.innerHTML = `<img src='assets/${cards[i + 1][randomInteger(0, 8)].image}' alt='${cards[0][i]}'> ${cards[0][i]}`;
  main.appendChild(mainElement);
};

document.body.appendChild(main);
