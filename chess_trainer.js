
current_square = "";

function check(e) {
    console.log("Clicked: ", this.parentNode.id)
    updateCoord(this.parentNode.id);
}

Array.prototype.map.call(document.querySelectorAll("button:not(#start)"), function (element) {
    element.addEventListener("click", check, false);
});


var start_int;
var count;


function start_test() {
    console.log("starting test...")
    count = 3
    document.getElementById('chessboard').style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    start_int = setInterval(countdown, 1000);
}
function countdown() {
    if (count == 0) {
        clearInterval(start_int);
        // document.getElementById('countdown').remove();
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('start').style.display = 'none';
        document.getElementById('chessboard').style.background = "transparent"
        startStopwatch();
        start_training();
    } else {
        document.getElementById('countdown').innerHTML = count;
        // console.log(count)
        count -= 1;
    }
}

var stopwatchInterval;
var stopwatchTime = 0;
var stopwatchRunning = false;

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        stopwatchInterval = setInterval(updateStopwatch, 10);
    }
}

function stopStopwatch() {
    if (stopwatchRunning) {
        stopwatchRunning = false;
        clearInterval(stopwatchInterval);
    }
}

function updateStopwatch() {
    stopwatchTime += 10;

    if (stopwatchTime >= 15000) {
        stopStopwatch();
    }

    var minutes = Math.floor(stopwatchTime / 60000);
    var seconds = Math.floor((stopwatchTime % 60000) / 1000);
    var milliseconds = Math.floor((stopwatchTime % 1000) / 10);
    document.getElementById('stopwatch').innerHTML =
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + ":" +
        (milliseconds < 10 ? "0" + milliseconds : milliseconds);
}

characters = ["a", "b", "c", "d", "e", "f", "g", "h"]

var current_coord;
var score=0;

function generateCoord() {
    num = Math.floor(Math.random() * 8) + 1;
    char = characters[Math.floor(Math.random() * 8)];
    current_coord = char.concat(num.toString())

    document.getElementById('sq_2_click').innerHTML = current_coord;
    console.log(current_coord)
}

function start_training() {
    generateCoord()
}

function updateCoord(e) {
    if (e==current_coord){
        // console.log("match")
        score+=1;
        document.getElementById('score').innerHTML = score;
        generateCoord();
    }
    else{
        // console.log("no match")
        generateCoord();
    }
}