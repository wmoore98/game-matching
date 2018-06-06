class GameClock {
	constructor(game) {
    this.game = game;
    this.clockElem = document.getElementById("gameClock");
    this.startTime = {};
    this.elapsedTime = 0;
    this.clockInt = undefined;
    this.start();
  }

  start() {
    // Stop clock, if already running
    this.clockInt && this.stop();

    // Start time of game
    this.startTime = new Date().getTime();
    // too annoying this.game.sounds.startSnd.play();

    // Update the clock every 1 second
    this.clockInt = setInterval(function() {
      const now = new Date().getTime();
      this.elapsedTime = now - this.startTime;
      this.clockElem.textContent = this.formatTimeMS(this.elapsedTime);
    }.bind(this), 1000);
  }

  formatTimeMS(time) {
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    
    // I want to display only minutes and seconds, since this is the normal timeframe,
    // but just in case, I will adjust it and add hours and days to minutes
    const adjMins = (days * 24 * 60) + (hours * 60) + minutes;

    const formatMins = (adjMins > 9) ? adjMins.toString() : "0" + adjMins.toString();
    const formatSecs = (seconds > 9) ? seconds.toString() : "0" + seconds.toString();

    return `${formatMins}:${formatSecs}`;
  }

  stop() {
    clearInterval(this.clockInt);
  }

}

export default GameClock;