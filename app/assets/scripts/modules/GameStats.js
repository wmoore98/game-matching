class GameStats {
	constructor(game) {
		this.game        = game;
		this.eTiles      = document.getElementById("numTiles");
		this.eSolved     = document.getElementById("numSolved");
		this.eUnsolved   = document.getElementById("numUnsolved");
		this.eClicks     = document.getElementById("numClicks");
		this.eGames      = document.getElementById("totGames");
		this.eBestClicks = document.getElementById("bestClicks");
		this.eBestTime   = document.getElementById("bestTime");
		this.gameTiles   = game.board.tiles;
		this.numTiles    = this.gameTiles.length;
		this.numSolved   = 0;
		this.numUnsolved = 0;
		this.numClicks   = 0;
		this.totGames    = 0;
		this.bestClicks  = Infinity;
		this.bestTime    = Infinity;

		this.getStatTotals();
		this.updateStats();
	}

  getStatTotals() {
  	this.totGames = localStorage.getItem("totGames") || 0;
  	this.bestClicks = localStorage.getItem("bestClicks") || Infinity;
  	this.bestTime = localStorage.getItem("bestTime") || Infinity;
  }

  setStatTotals() {
  	localStorage.setItem("totGames", this.totGames);
  	localStorage.setItem("bestClicks", this.bestClicks);
  	localStorage.setItem("bestTime", this.bestTime);
  }

  addGame() {
  	this.totGames++;
  	if (this.numClicks < this.bestClicks) {
  		this.bestClicks = this.numClicks;
  	}
  	if (this.game.clock.elapsedTime < this.bestTime) {
  		this.bestTime = this.game.clock.elapsedTime;
  	}
		this.setStatTotals();
		this.render();
  }

	addClick() {
		this.numClicks++;
		this.render();
		return this.numClicks;
	}

	updateStats() {
		this.numSolved = 0;
		this.numUnsolved = 0;
		this.gameTiles.forEach(function(tile) {
			if (tile.isSolved) {
				this.numSolved++;
			} else {
				this.numUnsolved++;
			}
		}.bind(this));
		this.render();
		if (this.numUnsolved === 0) {
			this.game.gameFinished();
		}
	}

	resetStats() {
		this.gameTiles   = this.game.board.tiles;
		this.numTiles    = this.gameTiles.length;
		this.numSolved   = 0;
		this.numUnsolved = 0;
		this.numClicks   = 0;

		this.updateStats();
	}

	render() {
		this.eTiles.textContent      = this.numTiles;
		this.eSolved.textContent     = this.numSolved;
		this.eUnsolved.textContent   = this.numUnsolved;
		this.eClicks.textContent     = this.numClicks;
		this.eGames.textContent      = this.totGames;
		this.eBestClicks.textContent = (this.bestClicks === Infinity) ? "" : this.bestClicks;
		this.eBestTime.textContent   = (this.bestTime === Infinity) ? "" : this.game.clock.formatTimeMS(this.bestTime);
	}
}

export default GameStats;