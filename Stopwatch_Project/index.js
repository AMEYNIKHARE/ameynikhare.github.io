let start = document.getElementById("start");  // Fetched start button
let stopButton = document.getElementById("stop");  // Fetched stop button
let reset = document.getElementById("reset");   // Fecthed reset button
let time = document.getElementsByClassName('time');   // Fetched all span element to show time

let TimerId;  // variable to store ID for setInterval timer function
let hr = 00;  // variable to store current hour time
let min = 00;  // variable to store current minute time
let sec = 00;  // variable to store current second time
let stopWatchRunning = false;   // variable to know whether the stopwatch currently running or not

start.addEventListener("click", startTimer);  // Adding event listner on start button 
stopButton.addEventListener("click", stopTimer);   // Adding event listner on stop button 
reset.addEventListener("click", resetTimer);   // Adding event listner on reset button 

(function initiate() {   // Execute the function when screen get loaded.
    time[2].innerText = '00';
    time[1].innerText = '00';
    time[0].innerText = '00';
})();


function startTimer() {     // Execute the fuction when start button get clicked
    if (!stopWatchRunning) {   //  If Stopwatch is not running it will starts the stopwatch
        TimerId = setInterval(startTheClock, 1000); // Call startTheClock function after every 1 Sec
        stopWatchRunning = true;   // Set variable to true to show stopwatch is running
    }
}

function stopTimer() {   // Execute the fuction when stop button get clicked
    clearInterval(TimerId); // Stops the execution of startTheClock function
    stopWatchRunning = false; // Set variable to false to show stopwatch is stopped
}

function resetTimer() {     // Execute the fuction when reset button get clicked
    hr = 00;
    min = 00;
    sec = 00;
    clearInterval(TimerId);  // Stops the execution of startTheClock function
    stopWatchRunning = false;  // Set variable to false to show stopwatch is stopped
    for (let i = 0; i < time.length; i++) {   // For loop to reset timer to 00 position
        time[i].innerText = '00';
    }
}

function startTheClock() {  // This function get called after every 1 sec and shows the timer on screen
    sec = parseInt(sec); // 
    sec++;  // increase second count every second store 
    min = parseInt(min);
    hr = parseInt(hr);

    if (sec >= 60) {  // if sec count reached to 60 it set sec to zero and increase min count by one
        sec = 0; 
        min++;
        if (min >= 60) { // if min count reached to 60 it set min to zero and increase hour count by one
            min = 0;
            hr++;
            if (hr >= 24) { // if hour count reached to 24 it gives an alert and reset the stopwatch
                alert('Stopwatch has reached its limit...Restting STOPWATCH!!!')
                resetTimer();
            }
        }
    }

    if (sec < 10) {   // This is to make sec count double digit when sec count is actually less that 10
        sec = '0' + `${sec}`;
    }

    if (min < 10) {  // This is to make min count double digit when min count is actually less that 10
        min = '0' + `${min}`;
    }

    if (hr < 10) {  // This is to make hour count double digit when hour count is actually less that 10
        hr = '0' + `${hr}`;
    }

    time[2].innerText = `${sec}`;   // changing the text of sec count on screen
    time[1].innerText = `${min}`;   // changing the text of min count on screen
    time[0].innerText = `${hr}`;    // changing the text of hour count on screen
}