import GameTile from "./GameTile";

class GameBoard {
	constructor(game) {
		this.game = game;
		this.tiles = [];  //JS objects for each tile
		this.faceUps = [];
		this.isSolved = false;
    this.isAnimating = false;
		this.gameGrid = document.querySelector(".game-grid");
		this.items = {};  //DOM elements of the tiles
		this.initBoard();

    this.events();

	}

  events() {
    this.gameGrid.addEventListener("click", (e) => {
      if (e.target.classList.contains("game-grid__item")) {
        this.tiles.some((tile) => {
          if (tile.domElem === e.target) {
            this.handleTileClick(tile);
            return true;
          }
        });
      }
    });
  }

	initBoard() {
		const itemsArr = [
		   "Love", "Joy", "Peace"
		 , "Patience", "Kindness", "Goodness"
		 , "Faithfulness", "Gentleness", "Self-control"
		];

		let randomArray = this.makeRandomArray(itemsArr, 4);

		this.render(randomArray);
		this.items = this.gameGrid.querySelectorAll(".game-grid__item");

		this.createGameTiles();

	}

	makeRandomArray(itemsArr, repeatCount) {
		let randomArray = [];
		for (let i in itemsArr) {
			for (let j = 0; j < repeatCount; j++) {
				randomArray.push(itemsArr[i]);
			}
		}
		randomArray.sort(function(a, b){return 0.5 - Math.random()});
		return randomArray;
	}

	render(arr) {
		let fragment = document.createDocumentFragment();
		arr.forEach(function(text) {
			let div = document.createElement("div");
			let p = document.createElement("p");
			p.textContent = text;
			div.appendChild(p);
			div.classList.add("game-grid__item", "game-grid__item--face-down");
			fragment.appendChild(div);
		});
    // Delete old children, if any
    while (this.gameGrid.hasChildNodes()) {
      this.gameGrid.removeChild(this.gameGrid.firstChild);
    }
	 	this.gameGrid.appendChild(fragment);
	}

	createGameTiles() {
		this.tiles = [];
		this.items.forEach(function(item) {
			this.tiles.push(new GameTile(item, item.textContent, this));
		}.bind(this));
	}

  handleTileClick(childElem) {
    // Ignore click(s) while tile is rotating
    if (childElem.isRotating || this.isAnimating) {
      return;
    }
    // this.gameStats.addClick();
    this.game.stats.addClick();
    this.game.sounds.swishSnd.play();
    if (childElem.isFaceUp()) {
      childElem.turnDownTile();
    } else {
      //If two tiles already face up, turn them down first
      if (this.isMaxFaceUps()) {
        this.turnDownFaceUps();
      }
      childElem.turnUpTile();
      this.evaluateFaceUps();
    }

  }

  isMaxFaceUps() {
    this.refreshFaceUps();
    return (this.faceUps.length >= 2);
  }

  refreshFaceUps() {
    this.faceUps = [];
    this.tiles.forEach(function(tile) {
      if (tile.isFaceUp()) {
        this.faceUps.push(tile);
      }
    }.bind(this));
  }

  turnDownFaceUps() {
    this.refreshFaceUps();
    this.faceUps.forEach(function(tile) {
      tile.turnDownTile();
    });
  }

  evaluateFaceUps() {
    this.refreshFaceUps();
    if (this.faceUps.length === 2 && this.faceUps[0].text === this.faceUps[1].text) {
      // Give animation turning up the second tile a half second to finish
      this.isAnimating = true;
      setTimeout(function(){
        this.faceUps.forEach(function(tile) {
          tile.isSolved = true;
          tile.domElem.classList.remove("game-grid__item--face-up");
          tile.domElem.classList.add("game-grid__item--matched");
        });
        this.game.sounds.beepSnd.play();
        this.game.stats.updateStats();
        this.isAnimating = false;
      }.bind(this), 500);
    }
  }

}

export default GameBoard;