let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerDisplay = document.getElementById('timer-display');
let startTimerInterval;

// implement the below funtion using the setInteral funtion
function startTimer() {
    
    timer = setTimeout(updateTimer, 10);
}

function updateTimer() {

    milliseconds++;
    if( milliseconds === 100){

        milliseconds = 0;
        seconds++;

    }    


    if( seconds === 60){ 

        seconds = 0;
        minutes++;
    }

    timerDisplay.textContent = formatTime( minutes, seconds, milliseconds);
    timer = setTimeout(updateTimer, 10);


}




function formatTime(minutes, seconds, milliseconds) {
    return (
        (minutes < 10 ? '0' + minutes : minutes) +
        ':' +
        (seconds < 10 ? '0' + seconds : seconds) +
        ':' +
        (milliseconds < 10 ? '0' + milliseconds : milliseconds)
    );
}



function pauseTimer() {

    clearTimeout(timer);
}

function resetTimer() {
    clearTimeout(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    timerDisplay.textContent = '00:00:00';
}