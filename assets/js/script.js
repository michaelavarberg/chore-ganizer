var chooseButton = document.querySelector("#choose");
var chosenChore = document.querySelector("#selected-chore");
var completedButton = document.querySelector("#completed");
var choreInput = document.querySelector("#chore-name");
var roomInput = document.querySelector("#room-select");
var responsibleInput = document.querySelector("#responsible");
var submitButton = document.querySelector("#submit");
var cardDescription = document.querySelector("#description");
var cardSubtitle = document.querySelector("#subtitle");
var cardEdit = document.querySelector("#edit");
var cardDelete = document.querySelector("#delete");

var cards = [];

chooseButton.addEventListener("click", function (event) {
  event.preventDefault();
  // write function to pull random chore and display in chosenChore
});

function storeCards() {
  localStorage.setItem("cards", JSON.stringify(cards));
}
//Creates JSON object with input from form
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  var newChore = {
    chore: choreInput.value.trim(),
    room: roomInput.value.trim(),
    responsible: responsibleInput.value.trim(),
  };
  localStorage.setItem("newestChore", JSON.stringify(newChore));
  cards.push(localStorage.getItem("newestChore"));
  storeCards();
  renderCards();
});

//Makes a card with saved chores
function renderCards() {
  var currentCards = JSON.parse(localStorage.getItem("cards") || "[]");
  cardsArray = currentCards.split();
  for (var i = 0; i < cards.length; i++) {
    localStorage.setItem("currentChore", JSON.parse(cardsArray[i]));
    var checkPrint = localStorage.getItem("currentChore");
    console.log(checkPrint);
    if (currentChore.choice !== null) {
      cardDescription.textContent = currentChore.chore;
      cardSubtitle.textContent =
        "in the " +
        currentChore.room +
        " \n" +
        currentChore.responsible +
        " is Responsible.";
    } else {
      return;
    }
  }
}

//TODO:
//Keep track of multiple chores in local storage
//Be able to choose random chore from local storage and display
//Clean up design of new cards
//Create ability to edit or delete a card from the card
//Show something on the card when chore is completed
