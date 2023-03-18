
current_square = "";

function check(e) {
    console.log("Clicked: ", this.parentNode.id)
}

Array.prototype.map.call(document.querySelectorAll("button:not(#start)"), function (element) {
    element.addEventListener("click", check, false);
});


function start_test() {
    console.log("starting test...")
    startStopwatch()
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

    if (stopwatchTime >= 15000){
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