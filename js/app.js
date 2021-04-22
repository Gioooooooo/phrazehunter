const game = new Game();

function resetDisplay() {
  game.startGame();
}

function markButton(event) {
  if (event.target.tagName === "BUTTON") {
    const letter = event.target.textContent;

    const targetLetter = event.target;
    targetLetter.setAttribute("disabled", "true");
    targetLetter.classList.add("chosen");

    game.handleInteraction(event, letter);
  } else if (event instanceof KeyboardEvent) {
    const input = event.key.toLowerCase();
    const letterReg = /[a-z]/g;
    const inputIsLetter = input.match(letterReg);

    if (inputIsLetter) {
      const buttonElements = document.querySelectorAll(".key");
      let targetLetter;

      for (let i = 0; i < buttonElements.length; i++) {
        if (buttonElements[i].textContent === input) {
          targetLetter = buttonElements[i];
        }
      }

      targetLetter.setAttribute("disabled", "true");
      targetLetter.classList.add("chosen");
      game.handleInteraction(event, input);
    }
  }
}

document.getElementById("btnReset").addEventListener("click", resetDisplay);

document.getElementById("qwerty").addEventListener("click", markButton);

document.addEventListener("keypress", markButton);
