

var main = document.createElement("main");
for (let i = 0; i < 8; i++) {
  function randomInteger(min, max) {
    let randomNumber = min + Math.random() * (max - min + 1);
    return Math.abs(Math.round(randomNumber));
  }
  var mainElement = document.createElement("a");
  main.id = "main";
  mainElement.id = i;
  mainElement.classList.add("main_card");
  mainElement.href = "#/cards";
  mainElement.innerHTML = `<img src='assets/${cards[i + 1][randomInteger(0, 6)].image}' alt='${cards[0][i]}'> ${cards[0][i]}`;
  main.appendChild(mainElement);
};

document.body.appendChild(main);

//change cards
for (let j = 0; j < 8; j++) {
  document.getElementById(j).addEventListener('click', () => {
    for (let i = 0; i < 8; i++) {
      document.getElementById(`${i}`).innerHTML = `<img style='width: 100%; height: 240px; margin: 0px;' src='assets/${cards[j + 1][i].image}' alt='${cards[j + 1][i]}'> ${cards[j + 1][i].word}`;
    };
  });
}
