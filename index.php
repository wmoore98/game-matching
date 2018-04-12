<!DOCTYPE html>
<!--
red:      #FF0000	(255, 0, 0)
          #FF8000	(255, 128, 0)
yellow:   #FFFF00	(255, 255, 0)
          #80FF00	(128, 255, 0)
green:    #00FF00	(0, 255, 0)
          #00FF80	(0, 255, 128)
cyan:     #00FFFF	(0, 255, 255)
          #0080FF	(0, 128, 255)
blue:     #0000FF	(0, 0, 255)
          #8000FF	(128, 0, 255)
magenta:  #FF00FF	(255, 0, 255)
          #FF0080	(255, 0, 128)

Scheme (light to dark)
#DDE3FD	(221, 227, 253)
#798EF6
#183BF0
#0A2299
#091034 (9, 16, 52)
-->

<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Matching Game</title>

<style>

body {
  background-color: #798EF6;
}

* {
  box-sizing: border-box;
}

html {
  font-family: "Lucida Sans", sans-serif;
}

header {
  background-color: #0A2299;
  color: #FFFFFF;
  padding: 15px;
  text-align: center;
  font-size: 1.5vw;
}

.sidebar {
  height: 100%;
  width: 25%;
  background-color: #798EF6;
  border-bottom: solid 1px #0A2299;
  color: #0A2299;
  padding: 15px;
  float: left;
}

.sidehdr {
  width: 100%;
  float: left;
  text-align: center;
  font-size: 1.5vw;
  font-weight: bold;
}

.tag {
  width: 75%;
  float: left;
  text-align: left;
  font-size: 1.25vw;
}

.stat {
  width: 25%;
  float: left;
  text-align: right;
  font-size: 1.25vw;
}

.grid-container {
  width: 75%;
  float: left;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  background-color: #798EF6;
  padding: .5vw;
  grid-gap: .25vw;
}

.grid-item {
  border: 1px solid rgba(0, 0, 0, .8);
  padding: 1vw;
  font-size: 1.25vw;
  text-align: center;
}

/*Use a media query to add a breakpoint at 800px:*/
@media (max-width:800px) {
  .sidebar, .grid-container {
    width:100%; /*The width is 100%, when the viewport is 800px or smaller*/
  }
}

.face-down {
  background-color: #0A2299;
}

.face-down p {
  visibility: hidden;
}

.face-up {
  background-color: #DDE3FD;
  color: #0A2299;
}

.matched {
  visibility: hidden;
}

.grid-item:hover {
  border: solid 1px lightgray;
}

button {
  background-color: #0A2299;
  color: #DDE3FD;
  padding: 15px;
  text-align: center;
}

.modal button {
  width: 15%;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 10%; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(9, 16, 52); /* Fallback color */
  background-color: rgba(9, 16, 52, 0.4); /* Dark w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #DDE3FD;
  color: #0A2299;
  text-align: center;
  margin: auto;
  padding: 20px;
  border: 1px solid #091034;
  width: 50%;
}

/* The Close Button */
.close {
  color: #183BF0;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #091034;
  text-decoration: none;
  cursor: pointer;
}
</style>

</head>

<body>

<header>Matching Game</header>

<aside class="sidebar" id="stats">
<div>
<p class="sidehdr">Current</p>
<p><span class="tag">Total # of tiles</span></td><td><span class="stat" id="numTiles"></span></p>
<p><span class="tag">Solved # of tiles</span><span class="stat" id="numSolved"></span></p>
<p><span class="tag">Unsolved # of tiles</span><span class="stat" id="numUnsolved"></span></p>
<p><span class="tag"># of clicks</span><span class="stat" id="numClicks"></span></p>
<p><span class="tag">Game timer</span><span class="stat" id="gameClock"></span></p>
</div>
<div>
<p class="sidehdr">Totals</p>
<p><span class="tag">Total # of games</span></td><td><span class="stat" id="numGames"></span></p>
<p><span class="tag">Best game # of clicks</span><span class="stat" id="bestClicks"></span></p>
<p><span class="tag">Best time</span><span class="stat" id="bestTime"></span></p>
</div>
<div class="sidehdr" style="margin-top: 1vw"><button type="button" onclick="initializeGame()">New Game</button></div>
</aside>

<div class="grid-container" id="main"></div>

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close" onclick="closeModal()">&times;</span>
    <p>Congratulations!</p>
    <p>Do you want to play a new game?</p>
    <p style="text-align:center"><button type="button" onclick="closeModal(); initializeGame()">Yes</button>
       <button type="button" onclick="closeModal()">No</button>
    </p>
  </div>

</div>



<!-- Load javascript w/unique id to avoid caching issues -->
<script>
var scr = document.createElement("script");
scr.src = "matching.js" + "?ts=" + new Date().getTime();
document.getElementsByTagName("head")[0].appendChild(scr);
</script>

</body>

</html>