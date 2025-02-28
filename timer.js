let timerInterval;
let remainingTime = 0;
let isRunning = false;
let minutesInput=document.getElementById("minutesInput");
let secondsInput=document.getElementById("secondsInput");
let hoursInput=document.getElementById("hoursInput");

function startTimer() {
    if (isRunning) return;
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    if (remainingTime === 0) {
        remainingTime = hours * 3600 + minutes * 60 + seconds;
        if (remainingTime <= 0) {
            alert("please enter a valid time");
            return;
        }
    }
    isRunning = true;
    document.getElementById("hoursInput").style.display="none";
    document.getElementById("minutesInput").style.display="none";
    document.getElementById("secondsInput").style.display="none";
    document.getElementById("startBtn").disabled = true;
    document.getElementById("pauseBtn").disabled = false;
    timerInterval = setInterval(() => {
        remainingTime--;
        updateDisplay(remainingTime);
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            alert("time is finish");
            resetTimer();
        }
    }, 1000);
}
function pauseTimer() {
    clearInterval(timerInterval);
    isRunning=false;
    document.getElementById("startBtn").disabled = false;
    document.getElementById("pauseBtn").disabled = true;
}
function resetTimer() {
    clearInterval(timerInterval);
    remainingTime = 0;
    isRunning = false;
    document.getElementById("startBtn").disabled = false;
    document.getElementById("pauseBtn").disabled = true;
    hoursInput.style.display="block";
    minutesInput.style.display="block";
    secondsInput.style.display="block";
    minutesInput.value="";
    hoursInput.value="";
    secondsInput.value="";
    updateDisplay(0);
}
function updateDisplay(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    document.getElementById("timerDisplay").innerHTML = 
    `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}
console.log(isRunning);
