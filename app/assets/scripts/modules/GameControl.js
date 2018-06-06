class GameControl {
	constructor(game) {
    this.game  = game;
    this.newBtnElem = document.getElementById("btnNewGame");
    this.events();
  }

  events() {
    this.newBtnElem.addEventListener("click", this.game.newGame.bind(this.game));
  }


}

export default GameControl;