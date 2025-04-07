let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

function updateClock(){
    let currentTime = new Date();

    // get current time
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    
/* if less than ten  vvv it will add 0 if not it will be empty vvv*/
hoursEl.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
minutesEl.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
secondsEl.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}
updateClock();
setInterval(updateClock, 1000);


