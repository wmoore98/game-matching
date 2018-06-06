/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(1);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _Game2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameSounds = __webpack_require__(2);

var _GameSounds2 = _interopRequireDefault(_GameSounds);

var _GameClock = __webpack_require__(3);

var _GameClock2 = _interopRequireDefault(_GameClock);

var _GameBoard = __webpack_require__(4);

var _GameBoard2 = _interopRequireDefault(_GameBoard);

var _GameStats = __webpack_require__(6);

var _GameStats2 = _interopRequireDefault(_GameStats);

var _GameModal = __webpack_require__(7);

var _GameModal2 = _interopRequireDefault(_GameModal);

var _GameControl = __webpack_require__(8);

var _GameControl2 = _interopRequireDefault(_GameControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.sounds = {};
    this.clock = {};
    this.board = {};
    this.stats = {};
    this.modal = {};
    this.control = {};
    this.sounds = new _GameSounds2.default();
    this.clock = new _GameClock2.default(this);
    this.board = new _GameBoard2.default(this);
    this.stats = new _GameStats2.default(this);
    this.modal = new _GameModal2.default(this);
    this.control = new _GameControl2.default(this);
  }

  _createClass(Game, [{
    key: "gameFinished",
    value: function gameFinished() {
      this.clock.stop();
      this.sounds.tadaSnd.play();
      this.stats.addGame();
      this.modal.promptNewGame();
    }
  }, {
    key: "newGame",
    value: function newGame() {
      this.board.initBoard();
      this.stats.resetStats();
      this.clock.start();
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameSounds = function GameSounds() {
	_classCallCheck(this, GameSounds);

	this.startSnd = new Audio("/assets/sounds/start.wav");
	this.swishSnd = new Audio("/assets/sounds/whoosh.wav");
	this.beepSnd = new Audio("/assets/sounds/beep.wav");
	this.tadaSnd = new Audio("/assets/sounds/tada.wav");
};

exports.default = GameSounds;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameClock = function () {
  function GameClock(game) {
    _classCallCheck(this, GameClock);

    this.game = game;
    this.clockElem = document.getElementById("gameClock");
    this.startTime = {};
    this.elapsedTime = 0;
    this.clockInt = undefined;
    this.start();
  }

  _createClass(GameClock, [{
    key: "start",
    value: function start() {
      // Stop clock, if already running
      this.clockInt && this.stop();

      // Start time of game
      this.startTime = new Date().getTime();
      // too annoying this.game.sounds.startSnd.play();

      // Update the clock every 1 second
      this.clockInt = setInterval(function () {
        var now = new Date().getTime();
        this.elapsedTime = now - this.startTime;
        this.clockElem.textContent = this.formatTimeMS(this.elapsedTime);
      }.bind(this), 1000);
    }
  }, {
    key: "formatTimeMS",
    value: function formatTimeMS(time) {
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(time / (1000 * 60 * 60 * 24));
      var hours = Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(time % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(time % (1000 * 60) / 1000);

      // I want to display only minutes and seconds, since this is the normal timeframe,
      // but just in case, I will adjust it and add hours and days to minutes
      var adjMins = days * 24 * 60 + hours * 60 + minutes;

      var formatMins = adjMins > 9 ? adjMins.toString() : "0" + adjMins.toString();
      var formatSecs = seconds > 9 ? seconds.toString() : "0" + seconds.toString();

      return formatMins + ":" + formatSecs;
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.clockInt);
    }
  }]);

  return GameClock;
}();

exports.default = GameClock;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameTile = __webpack_require__(5);

var _GameTile2 = _interopRequireDefault(_GameTile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameBoard = function () {
  function GameBoard(game) {
    _classCallCheck(this, GameBoard);

    this.game = game;
    this.tiles = []; //JS objects for each tile
    this.faceUps = [];
    this.isSolved = false;
    this.isAnimating = false;
    this.gameGrid = document.querySelector(".game-grid");
    this.items = {}; //DOM elements of the tiles
    this.initBoard();
  }

  _createClass(GameBoard, [{
    key: "initBoard",
    value: function initBoard() {
      var itemsArr = ["Love", "Joy", "Peace", "Patience", "Kindness", "Goodness", "Faithfulness", "Gentleness", "Self-control"];

      var randomArray = this.makeRandomArray(itemsArr, 4);

      this.render(randomArray);
      this.items = this.gameGrid.querySelectorAll(".game-grid__item");

      this.createGameTiles();
    }
  }, {
    key: "makeRandomArray",
    value: function makeRandomArray(itemsArr, repeatCount) {
      var randomArray = [];
      for (var i in itemsArr) {
        for (var j = 0; j < repeatCount; j++) {
          randomArray.push(itemsArr[i]);
        }
      }
      randomArray.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      return randomArray;
    }
  }, {
    key: "render",
    value: function render(arr) {
      var fragment = document.createDocumentFragment();
      arr.forEach(function (text) {
        var div = document.createElement("div");
        var p = document.createElement("p");
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
  }, {
    key: "createGameTiles",
    value: function createGameTiles() {
      this.tiles = [];
      this.items.forEach(function (item) {
        this.tiles.push(new _GameTile2.default(item, item.textContent, this));
      }.bind(this));
    }
  }, {
    key: "handleTileClick",
    value: function handleTileClick(childElem) {
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
  }, {
    key: "isMaxFaceUps",
    value: function isMaxFaceUps() {
      this.refreshFaceUps();
      return this.faceUps.length >= 2;
    }
  }, {
    key: "refreshFaceUps",
    value: function refreshFaceUps() {
      this.faceUps = [];
      this.tiles.forEach(function (tile) {
        if (tile.isFaceUp()) {
          this.faceUps.push(tile);
        }
      }.bind(this));
    }
  }, {
    key: "turnDownFaceUps",
    value: function turnDownFaceUps() {
      this.refreshFaceUps();
      this.faceUps.forEach(function (tile) {
        tile.turnDownTile();
      });
    }
  }, {
    key: "evaluateFaceUps",
    value: function evaluateFaceUps() {
      this.refreshFaceUps();
      if (this.faceUps.length === 2 && this.faceUps[0].text === this.faceUps[1].text) {
        // Give animation turning up the second tile a half second to finish
        this.isAnimating = true;
        setTimeout(function () {
          this.faceUps.forEach(function (tile) {
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
  }]);

  return GameBoard;
}();

exports.default = GameBoard;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameTile = function () {
  function GameTile(domElem, text, board) {
    _classCallCheck(this, GameTile);

    this.domElem = domElem;
    this.text = text;
    this.board = board;
    this.isSolved = false;
    this.isRotating = false;

    this.events();
  }

  _createClass(GameTile, [{
    key: "events",
    value: function events() {
      this.domElem.addEventListener("click", this.board.handleTileClick.bind(this.board, this));
    }
  }, {
    key: "isFaceUp",
    value: function isFaceUp() {
      return this.domElem.classList.contains("game-grid__item--face-up");
    }
  }, {
    key: "turnDownTile",
    value: function turnDownTile() {
      this.domElem.classList.replace("game-grid__item--face-up", "game-grid__item--face-down");
      this.rotateTile();
    }
  }, {
    key: "turnUpTile",
    value: function turnUpTile() {
      this.domElem.classList.replace("game-grid__item--face-down", "game-grid__item--face-up");
      this.rotateTile();
    }
  }, {
    key: "rotateTile",
    value: function rotateTile() {
      // isRotating used to prevent bad effects from user clicking too fast
      this.isRotating = true;
      setTimeout(function () {
        this.isRotating = false;
      }.bind(this), 500);
    }
  }]);

  return GameTile;
}();

exports.default = GameTile;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameStats = function () {
	function GameStats(game) {
		_classCallCheck(this, GameStats);

		this.game = game;
		this.eTiles = document.getElementById("numTiles");
		this.eSolved = document.getElementById("numSolved");
		this.eUnsolved = document.getElementById("numUnsolved");
		this.eClicks = document.getElementById("numClicks");
		this.eGames = document.getElementById("totGames");
		this.eBestClicks = document.getElementById("bestClicks");
		this.eBestTime = document.getElementById("bestTime");
		this.gameTiles = game.board.tiles;
		this.numTiles = this.gameTiles.length;
		this.numSolved = 0;
		this.numUnsolved = 0;
		this.numClicks = 0;
		this.totGames = 0;
		this.bestClicks = Infinity;
		this.bestTime = Infinity;

		this.getStatTotals();
		this.updateStats();
	}

	_createClass(GameStats, [{
		key: "getStatTotals",
		value: function getStatTotals() {
			this.totGames = localStorage.getItem("totGames") || 0;
			this.bestClicks = localStorage.getItem("bestClicks") || Infinity;
			this.bestTime = localStorage.getItem("bestTime") || Infinity;
		}
	}, {
		key: "setStatTotals",
		value: function setStatTotals() {
			localStorage.setItem("totGames", this.totGames);
			localStorage.setItem("bestClicks", this.bestClicks);
			localStorage.setItem("bestTime", this.bestTime);
		}
	}, {
		key: "addGame",
		value: function addGame() {
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
	}, {
		key: "addClick",
		value: function addClick() {
			this.numClicks++;
			this.render();
			return this.numClicks;
		}
	}, {
		key: "updateStats",
		value: function updateStats() {
			this.numSolved = 0;
			this.numUnsolved = 0;
			this.gameTiles.forEach(function (tile) {
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
	}, {
		key: "resetStats",
		value: function resetStats() {
			this.gameTiles = this.game.board.tiles;
			this.numTiles = this.gameTiles.length;
			this.numSolved = 0;
			this.numUnsolved = 0;
			this.numClicks = 0;

			this.updateStats();
		}
	}, {
		key: "render",
		value: function render() {
			this.eTiles.textContent = this.numTiles;
			this.eSolved.textContent = this.numSolved;
			this.eUnsolved.textContent = this.numUnsolved;
			this.eClicks.textContent = this.numClicks;
			this.eGames.textContent = this.totGames;
			this.eBestClicks.textContent = this.bestClicks === Infinity ? "" : this.bestClicks;
			this.eBestTime.textContent = this.bestTime === Infinity ? "" : this.game.clock.formatTimeMS(this.bestTime);
		}
	}]);

	return GameStats;
}();

exports.default = GameStats;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameModal = function () {
  function GameModal(game) {
    _classCallCheck(this, GameModal);

    this.game = game;
    this.modalElem = document.getElementById("myModal");
    this.closeElem = document.querySelector(".modal__close");
    this.btnYesElem = document.getElementById("btnYes");;
    this.btnNoElem = document.getElementById("btnNo");;
    this.events();
  }

  _createClass(GameModal, [{
    key: "events",
    value: function events() {
      this.closeElem.addEventListener("click", this.closeModal.bind(this));
      this.btnYesElem.addEventListener("click", this.newGame.bind(this));
      this.btnNoElem.addEventListener("click", this.closeModal.bind(this));
    }
  }, {
    key: "promptNewGame",
    value: function promptNewGame() {
      this.displayModal();
    }
  }, {
    key: "newGame",
    value: function newGame() {
      this.closeModal();
      this.game.newGame.call(this.game);
    }
  }, {
    key: "displayModal",
    value: function displayModal() {
      this.modalElem.classList.add("modal--is-visible");

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == this.modalElem) {
          this.closeModal();
        }
      }.bind(this);
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      // Close the modal
      this.modalElem.classList.remove("modal--is-visible");
    }
  }]);

  return GameModal;
}();

exports.default = GameModal;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameControl = function () {
  function GameControl(game) {
    _classCallCheck(this, GameControl);

    this.game = game;
    this.newBtnElem = document.getElementById("btnNewGame");
    this.events();
  }

  _createClass(GameControl, [{
    key: "events",
    value: function events() {
      this.newBtnElem.addEventListener("click", this.game.newGame.bind(this.game));
    }
  }]);

  return GameControl;
}();

exports.default = GameControl;

/***/ })
/******/ ]);