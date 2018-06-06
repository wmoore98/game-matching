!function(i){var n={};function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=i,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,i){"use strict";var n,s=i(1);new((n=s)&&n.__esModule?n:{default:n}).default},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),s=c(i(2)),a=c(i(3)),o=c(i(4)),l=c(i(6)),r=c(i(7)),u=c(i(8));function c(e){return e&&e.__esModule?e:{default:e}}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sounds={},this.clock={},this.board={},this.stats={},this.modal={},this.control={},this.sounds=new s.default,this.clock=new a.default(this),this.board=new o.default(this),this.stats=new l.default(this),this.modal=new r.default(this),this.control=new u.default(this)}return n(e,[{key:"gameFinished",value:function(){this.clock.stop(),this.sounds.tadaSnd.play(),this.stats.addGame(),this.modal.promptNewGame()}},{key:"newGame",value:function(){this.board.initBoard(),this.stats.resetStats(),this.clock.start()}}]),e}();t.default=h},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.startSnd=new Audio("/assets/sounds/start.wav"),this.swishSnd=new Audio("/assets/sounds/whoosh.wav"),this.beepSnd=new Audio("/assets/sounds/beep.wav"),this.tadaSnd=new Audio("/assets/sounds/tada.wav")}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}();var s=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=e,this.clockElem=document.getElementById("gameClock"),this.startTime={},this.elapsedTime=0,this.clockInt=void 0,this.start()}return n(t,[{key:"start",value:function(){this.clockInt&&this.stop(),this.startTime=(new Date).getTime(),this.clockInt=setInterval(function(){var e=(new Date).getTime();this.elapsedTime=e-this.startTime,this.clockElem.textContent=this.formatTimeMS(this.elapsedTime)}.bind(this),1e3)}},{key:"formatTimeMS",value:function(e){var t=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),n=Math.floor(e%36e5/6e4),s=Math.floor(e%6e4/1e3),a=24*t*60+60*i+n;return(9<a?a.toString():"0"+a.toString())+":"+(9<s?s.toString():"0"+s.toString())}},{key:"stop",value:function(){clearInterval(this.clockInt)}}]),t}();t.default=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),a=i(5),o=(n=a)&&n.__esModule?n:{default:n};var l=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=e,this.tiles=[],this.faceUps=[],this.isSolved=!1,this.isAnimating=!1,this.gameGrid=document.querySelector(".game-grid"),this.items={},this.initBoard()}return s(t,[{key:"initBoard",value:function(){var e=this.makeRandomArray(["Love","Joy","Peace","Patience","Kindness","Goodness","Faithfulness","Gentleness","Self-control"],4);this.render(e),this.items=this.gameGrid.querySelectorAll(".game-grid__item"),this.createGameTiles()}},{key:"makeRandomArray",value:function(e,t){var i=[];for(var n in e)for(var s=0;s<t;s++)i.push(e[n]);return i.sort(function(e,t){return.5-Math.random()}),i}},{key:"render",value:function(e){var n=document.createDocumentFragment();for(e.forEach(function(e){var t=document.createElement("div"),i=document.createElement("p");i.textContent=e,t.appendChild(i),t.classList.add("game-grid__item","game-grid__item--face-down"),n.appendChild(t)});this.gameGrid.hasChildNodes();)this.gameGrid.removeChild(this.gameGrid.firstChild);this.gameGrid.appendChild(n)}},{key:"createGameTiles",value:function(){this.tiles=[],this.items.forEach(function(e){this.tiles.push(new o.default(e,e.textContent,this))}.bind(this))}},{key:"handleTileClick",value:function(e){e.isRotating||this.isAnimating||(this.game.stats.addClick(),this.game.sounds.swishSnd.play(),e.isFaceUp()?e.turnDownTile():(this.isMaxFaceUps()&&this.turnDownFaceUps(),e.turnUpTile(),this.evaluateFaceUps()))}},{key:"isMaxFaceUps",value:function(){return this.refreshFaceUps(),2<=this.faceUps.length}},{key:"refreshFaceUps",value:function(){this.faceUps=[],this.tiles.forEach(function(e){e.isFaceUp()&&this.faceUps.push(e)}.bind(this))}},{key:"turnDownFaceUps",value:function(){this.refreshFaceUps(),this.faceUps.forEach(function(e){e.turnDownTile()})}},{key:"evaluateFaceUps",value:function(){this.refreshFaceUps(),2===this.faceUps.length&&this.faceUps[0].text===this.faceUps[1].text&&(this.isAnimating=!0,setTimeout(function(){this.faceUps.forEach(function(e){e.isSolved=!0,e.domElem.classList.remove("game-grid__item--face-up"),e.domElem.classList.add("game-grid__item--matched")}),this.game.sounds.beepSnd.play(),this.game.stats.updateStats(),this.isAnimating=!1}.bind(this),500))}}]),t}();t.default=l},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}();var n=function(){function n(e,t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.domElem=e,this.text=t,this.board=i,this.isSolved=!1,this.isRotating=!1,this.events()}return s(n,[{key:"events",value:function(){this.domElem.addEventListener("click",this.board.handleTileClick.bind(this.board,this))}},{key:"isFaceUp",value:function(){return this.domElem.classList.contains("game-grid__item--face-up")}},{key:"turnDownTile",value:function(){this.domElem.classList.replace("game-grid__item--face-up","game-grid__item--face-down"),this.rotateTile()}},{key:"turnUpTile",value:function(){this.domElem.classList.replace("game-grid__item--face-down","game-grid__item--face-up"),this.rotateTile()}},{key:"rotateTile",value:function(){this.isRotating=!0,setTimeout(function(){this.isRotating=!1}.bind(this),500)}}]),n}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}();var s=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=e,this.eTiles=document.getElementById("numTiles"),this.eSolved=document.getElementById("numSolved"),this.eUnsolved=document.getElementById("numUnsolved"),this.eClicks=document.getElementById("numClicks"),this.eGames=document.getElementById("totGames"),this.eBestClicks=document.getElementById("bestClicks"),this.eBestTime=document.getElementById("bestTime"),this.gameTiles=e.board.tiles,this.numTiles=this.gameTiles.length,this.numSolved=0,this.numUnsolved=0,this.numClicks=0,this.totGames=0,this.bestClicks=1/0,this.bestTime=1/0,this.getStatTotals(),this.updateStats()}return n(t,[{key:"getStatTotals",value:function(){this.totGames=localStorage.getItem("totGames")||0,this.bestClicks=localStorage.getItem("bestClicks")||1/0,this.bestTime=localStorage.getItem("bestTime")||1/0}},{key:"setStatTotals",value:function(){localStorage.setItem("totGames",this.totGames),localStorage.setItem("bestClicks",this.bestClicks),localStorage.setItem("bestTime",this.bestTime)}},{key:"addGame",value:function(){this.totGames++,this.numClicks<this.bestClicks&&(this.bestClicks=this.numClicks),this.game.clock.elapsedTime<this.bestTime&&(this.bestTime=this.game.clock.elapsedTime),this.setStatTotals(),this.render()}},{key:"addClick",value:function(){return this.numClicks++,this.render(),this.numClicks}},{key:"updateStats",value:function(){this.numSolved=0,this.numUnsolved=0,this.gameTiles.forEach(function(e){e.isSolved?this.numSolved++:this.numUnsolved++}.bind(this)),this.render(),0===this.numUnsolved&&this.game.gameFinished()}},{key:"resetStats",value:function(){this.gameTiles=this.game.board.tiles,this.numTiles=this.gameTiles.length,this.numSolved=0,this.numUnsolved=0,this.numClicks=0,this.updateStats()}},{key:"render",value:function(){this.eTiles.textContent=this.numTiles,this.eSolved.textContent=this.numSolved,this.eUnsolved.textContent=this.numUnsolved,this.eClicks.textContent=this.numClicks,this.eGames.textContent=this.totGames,this.eBestClicks.textContent=this.bestClicks===1/0?"":this.bestClicks,this.eBestTime.textContent=this.bestTime===1/0?"":this.game.clock.formatTimeMS(this.bestTime)}}]),t}();t.default=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}();var s=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=e,this.modalElem=document.getElementById("myModal"),this.closeElem=document.querySelector(".modal__close"),this.btnYesElem=document.getElementById("btnYes"),this.btnNoElem=document.getElementById("btnNo"),this.events()}return n(t,[{key:"events",value:function(){this.closeElem.addEventListener("click",this.closeModal.bind(this)),this.btnYesElem.addEventListener("click",this.newGame.bind(this)),this.btnNoElem.addEventListener("click",this.closeModal.bind(this))}},{key:"promptNewGame",value:function(){this.displayModal()}},{key:"newGame",value:function(){this.closeModal(),this.game.newGame.call(this.game)}},{key:"displayModal",value:function(){this.modalElem.classList.add("modal--is-visible"),window.onclick=function(e){e.target==this.modalElem&&this.closeModal()}.bind(this)}},{key:"closeModal",value:function(){this.modalElem.classList.remove("modal--is-visible")}}]),t}();t.default=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}();var s=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=e,this.newBtnElem=document.getElementById("btnNewGame"),this.events()}return n(t,[{key:"events",value:function(){this.newBtnElem.addEventListener("click",this.game.newGame.bind(this.game))}}]),t}();t.default=s}]);