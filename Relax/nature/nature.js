const timer = 5;
let timeAmount = timer * 60;
const btn = document.querySelector('#startBtn');

btn.addEventListener('click', function () {
    document.querySelector('#myVideo').play();
    document.querySelector('#player').play();
})

function calculateTime() {
    const countdown = document.querySelector('#countdown');
    let minutes = Math.floor(timeAmount/60);
    let seconds = timeAmount % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    countdown.textContent = `${minutes} : ${seconds}`; 
    timeAmount--;


    if (timeAmount < 0) {
        stopTimer();
        timeAmount = 0;
    }

    function stopTimer () {
        clearInterval(timerFunc);
    }
}

let timerFunc = setInterval(calculateTime, 1000);