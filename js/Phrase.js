class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  addPhraseToDisplay() {
    const phrase = this.phrase;
    const list = document.getElementById("phrase").firstElementChild;

    for (let i = 0; i < phrase.length; i++) {
      let letterItem = "";

      if (phrase[i] === " ") {
        letterItem = `<li class="hide show letter ${phrase[i]}"> ${phrase[i]} </li>`;
      } else {
        letterItem = `<li class="letter ${phrase[i]}"> ${phrase[i]} </li>`;
      }

      list.insertAdjacentHTML("beforeEnd", letterItem);
    }
  }

  checkLetter(letter) {
    return !!this.phrase.match(letter);
  }

  showMatchedLetter(letter) {
    const letterElements = document.getElementsByClassName(letter);
    for (let i = 0; i < letterElements.length; i++) {
      letterElements[i].classList.add("show");
    }
  }
}
