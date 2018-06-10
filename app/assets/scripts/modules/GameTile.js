class GameTile {
	constructor(domElem, text, board) {
		this.domElem = domElem;
		this.text = text;
    this.board = board;
		this.isSolved = false;
    this.isRotating = false;

		// this.events();
	}

	// events() {
	// 	this.domElem.addEventListener("click", this.board.handleTileClick.bind(this.board, this));
	// }

  isFaceUp() {
    return this.domElem.classList.contains("game-grid__item--face-up");
  }

  turnDownTile() {
    this.domElem.classList.replace("game-grid__item--face-up", "game-grid__item--face-down");
    this.rotateTile();
  }

  turnUpTile() {
    this.domElem.classList.replace("game-grid__item--face-down", "game-grid__item--face-up");
    this.rotateTile();
  }

	rotateTile() {
    // isRotating used to prevent bad effects from user clicking too fast
    this.isRotating = true;
    setTimeout(function(){
      this.isRotating = false;
    }.bind(this), 500);
  }


}

export default GameTile;