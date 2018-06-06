import GameSounds from "./GameSounds";
import GameClock from "./GameClock";
import GameBoard from "./GameBoard";
import GameStats from "./GameStats";
import GameModal from "./GameModal";
import GameControl from "./GameControl";

class Game {
	constructor() {
    this.sounds = {};
		this.clock = {};
		this.board = {};
    this.stats = {};
    this.modal = {};
		this.control = {};
    this.sounds = new GameSounds();
		this.clock = new GameClock(this);
		this.board = new GameBoard(this);
    this.stats = new GameStats(this);
    this.modal = new GameModal(this);
		this.control = new GameControl(this);
	}

  gameFinished() {
    this.clock.stop();
    this.sounds.tadaSnd.play();
    this.stats.addGame();
    this.modal.promptNewGame();
  }

  newGame() {
  	this.board.initBoard();
  	this.stats.resetStats();
  	this.clock.start();	
  }

}

export default Game;