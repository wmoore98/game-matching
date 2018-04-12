var itemsArr = [
   "Love", "Joy", "Peace"
 , "Patience", "Kindness", "Goodness"
 , "Faithfulness", "Gentleness", "Self-control"
 ];

var numTiles = 0;
var numSolved = 0;
var numUnsolved = 0;
var numClicks = 0;

var mainInt;
var gameClockInt;

var faceUps = [];

var swishSnd = new Audio("swish.wav");
var beepSnd = new Audio("beep.wav");
var tadaSnd = new Audio("tada.wav");

var y, y1, y2, ny, ny1, rotDInt, rotUInt;


initialization();

function initialization() {
/*
add code for high scores, etc.
*/
  initializeGame();
}


//Initialize game board
function initializeGame() {

  var matchArr = [];

  //Load array with items
  for (i in itemsArr) {
    for (j = 0; j < 4; j++) {
      matchArr.push(itemsArr[i]);
    }
  }

  //Randomize items
  matchArr.sort(function(a, b){return 0.5 - Math.random()});

  //Build HTML for board elements
  var text = "";
  for (var i in matchArr) {
    text += "<div onclick='toggle(\"id" + i + "\")' id=id" + i + " class='grid-item face-down'><p>" + matchArr [i] + "</p></div>";
  }
  document.getElementById("main").innerHTML = text;

  numTiles = matchArr.length;
  numSolved = 0;
  numUnsolved = numTiles;
  numClicks = 0;
  updateStats();

  startMainInt();
  startGameClock();

}

function updateStats() {
  document.getElementById("numTiles").innerHTML = numTiles;
  document.getElementById("numSolved").innerHTML = numSolved;
  document.getElementById("numUnsolved").innerHTML = numUnsolved;
  document.getElementById("numClicks").innerHTML = numClicks;
}

function startMainInt() {
  mainInt = setInterval(function() {
    if (numSolved == numTiles) {
      stopMainInt();
      stopGameClock();
      tadaSnd.play();
      promptNewGame();
    }
  }, 1000);
}

function promptNewGame() {
  displayModal();
}

function displayModal() {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // Open the modal 
  modal.style.display = "block";

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function closeModal() {
  // Close the modal
  document.getElementById("myModal").style.display = "none";
}


function startGameClock() {
  // Set the date we're counting down to
  var gameStart = new Date().getTime();

  stopGameClock();

  // Update the clock every 1 second
  gameClockInt = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = now - gameStart;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    myMins = (days * 24 * 60) + (hours * 60) + minutes;
    formatMins = (myMins > 9) ? myMins.toString() : "0" + myMins.toString();
    formatSecs = (seconds > 9) ? seconds.toString() : "0" + seconds.toString();
    document.getElementById("gameClock").innerHTML = formatMins + ":" + formatSecs;
    
  }, 1000);
}

function stopMainInt() {
  clearInterval(mainInt);
}

function stopGameClock() {
  clearInterval(gameClockInt);
}


function toggle(id) {
  var myClass = "";
  numClicks++;
  updateStats();
  myClass = document.getElementById(id).className;
  if (myClass.indexOf("face-down") >= 0) {
    if (faceUps.length == 2) {
      //automatically turn down other two tiles, sound effect will be provided by tile being turned up
      rotateDown(faceUps[0], faceUps[1]);
      faceUps=[];
    }
    if (faceUps.length < 2) {
      swishSnd.play();
      rotateUp(id);
      faceUps.push(id);
      if (faceUps.length == 2) {
        evaluateUps();
      }
    }
  } else if (myClass.indexOf("face-up") >= 0) {
    swishSnd.play();
    rotateDown(id);
    for (var i in faceUps) {
      if (faceUps[i] == id) {
        faceUps.splice(i, 1);
      }
    }
  } else {
    alert("Error: invalid id - " + id);
  }
}

function evaluateUps() {
  var myElement1 = document.getElementById(faceUps[0]);
  var myElement2 = document.getElementById(faceUps[1]);
  if (myElement1.innerHTML == myElement2.innerHTML) {
    setMatch(myElement1, myElement2);
  }
}

function setMatch(myElement1, myElement2) {
  matchInt = setInterval(function() {
    if (myElement2.className.indexOf("face-up") >= 0) {
      myElement1.className = myElement1.className.replace("face-up", "matched");
      myElement2.className = myElement2.className.replace("face-up", "matched");
      numSolved += 2;
      numUnsolved -= 2;
      updateStats();
      faceUps=[];
      beepSnd.play();
      clearInterval(matchInt);
    }
  }, 500);
}

function rotateDown(id1, id2) {
  ny1 = 0;  //starting degree of rotation
  y1 = document.getElementById(id1);
  y2 = document.getElementById(id2);
  clearInterval(rotDInt);
  rotDInt = setInterval("startDRotate()",10);
}

function startDRotate() {
  //advance rotation
  ny1 += 5;
  y1.style.transform = "rotateY(" + ny1 + "deg)";
  if (y2 != null) {
    y2.style.transform = "rotateY(" + ny1 + "deg)";
  }

  //switch display midway through rotation
  if (ny1 == 45) {
    y1.className = y1.className.replace("face-up", "face-down");
    if (y2 != null) {
      y2.className = y1.className.replace("face-up", "face-down");
    }
  }

  //rotation complete, clear interval
  if (ny1 == 180) {
    clearInterval(rotDInt);
  }
}


function rotateUp(id) {
  ny = 180;  //starting degree of rotation
  y = document.getElementById(id);
  clearInterval(rotUInt);
  rotUInt = setInterval("startURotate()",10);
}

function startURotate() {
  //advance rotation
  ny += 5;
  y.style.transform="rotateY(" + ny + "deg)";

  //switch display midway through rotation
  if (ny == 270) {
    y.className = y.className.replace("face-down", "face-up");
  }

  //rotation complete, clear interval
  if (ny == 360) {
    clearInterval(rotUInt);
  }
}
