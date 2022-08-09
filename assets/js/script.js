var chooseButton = document.querySelector("#choose");
var chosenChore = document.querySelector("#selected-chore");
var completedButton = document.querySelector("#completed");
var choreInput = document.querySelector("#chore-name");
var roomInput = document.querySelector("#room-select");
var responsibleInput = document.querySelector("#responsible");
var submitButton = document.querySelector("#submit");
var cardDescription = document.querySelector("#description");
var cardEdit = document.querySelector("#edit");
var cardDelete = document.querySelector("#delete");

chooseButton.addEventListener("click", function (event) {
  event.preventDefault();
  // write function to pull random chore and display in chosenChore
});

//Creates JSON object with input from form
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  var newChore = {
    chore: choreInput.value,
    room: roomInput.value,
    responsible: responsibleInput.value,
  };

  localStorage.setItem("newChore", JSON.stringify(newChore));
  createNewChore();
});

//Makes a card with saved chores
function createNewChore() {
  var lastChore = JSON.parse(localStorage.getItem("newChore"));

  if (lastChore !== null) {
    cardDescription.textContent = lastChore.chore;
  }
}
