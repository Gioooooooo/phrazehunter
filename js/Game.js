class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      "goodbye",
      "yolo",
      "javascript",
      "css",
      "hi there",
      "how are you",
    ];
    this.phraseClass = "";
  }

  getRandomPhrase() {
    const randomNum = Math.floor(Math.random() * this.phrases.length);
    this.chosenPhrase = this.phrases[randomNum];
    return this.chosenPhrase;
  }

  handleInteraction(event, letter) {
    const letterIsInPhrase = this.phraseClass.checkLetter(letter);

    if (letterIsInPhrase) {
      this.phraseClass.showMatchedLetter(letter);
      this.checkForWin();
    } else {
      if (event instanceof KeyboardEvent) {
        const wrongInputs = document.querySelectorAll(".wrong");

        if (wrongInputs) {
          for (let i = 0; i < wrongInputs.length; i++) {
            if (wrongInputs[i].textContent === letter) {
              return false;
            }
          }
        }

        const buttonElements = document.querySelectorAll(".key");
        let targetLetter;

        for (let i = 0; i < buttonElements.length; i++) {
          if (buttonElements[i].textContent === letter) {
            targetLetter = buttonElements[i];
          }
        }

        targetLetter.classList.add("wrong");
      } else {
        event.target.classList.add("wrong");
      }

      this.removeLife();
    }
  }

  removeLife() {
    this.missed += 1;
    document.getElementsByClassName("tries")[0].remove();

    if (this.missed === 5) {
      this.gameOver("lost, no more lives left!");
    }
  }

  checkForWin() {
    const showCount = document.querySelectorAll(".show").length;
    const letterCount = this.phraseClass.phrase.length;

    if (letterCount === showCount) {
      this.gameOver(`You won! The phrase was <i>"${this.chosenPhrase}</i>"`);
    }
  }

  gameOver(message) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("gameOverMessage").innerHTML = message;
    document.getElementById("btnReset").textContent = "Reset Game";
  }

  startGame() {
    if (document.getElementById("btnReset").textContent === "Reset Game") {
      window.location.reload(true);
      return false;
    }

    const phrase = this.getRandomPhrase();
    this.phraseClass = new Phrase(phrase);
    this.phraseClass.addPhraseToDisplay();
    document.getElementById("overlay").style.display = "none";
  }
}
