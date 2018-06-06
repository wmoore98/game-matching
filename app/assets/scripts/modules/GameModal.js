class GameModal {
	constructor(game) {
    this.game       = game;
    this.modalElem  = document.getElementById("myModal");
    this.closeElem  = document.querySelector(".modal__close");
    this.btnYesElem = document.getElementById("btnYes");;
    this.btnNoElem  = document.getElementById("btnNo");;
    this.events();
  }

  events() {
    this.closeElem.addEventListener("click", this.closeModal.bind(this));
    this.btnYesElem.addEventListener("click", this.newGame.bind(this));
    this.btnNoElem.addEventListener("click", this.closeModal.bind(this));
  }

  promptNewGame() {
    this.displayModal();
  }

  newGame() {
    this.closeModal();
    this.game.newGame.call(this.game);
  }

  displayModal() {
    this.modalElem.classList.add("modal--is-visible");

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == this.modalElem) {
        this.closeModal();
      }
    }.bind(this);

  }

  closeModal() {
    // Close the modal
    this.modalElem.classList.remove("modal--is-visible");
  }


}

export default GameModal;