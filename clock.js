let hours = document.querySelector("#hour-hand")
let minutes = document.querySelector("#minute-hand")
let seconds = document.querySelector("#second-hand")

function displayTime() {
    let date = new Date();
    
    let secondData = date.getSeconds();
    let minuteData = date.getMinutes();
    let hourData = date.getHours();
    
    let hourRotation = 30 * hourData + minuteData/2 + secondData/120;
    let minuteRotation = 6 * minuteData + secondData/10;
    let secondRotation = 6 * secondData;

    hours.style.transform = `rotate(${hourRotation}deg)`;
    minutes.style.transform = `rotate(${minuteRotation}deg)`;
    seconds.style.transform = `rotate(${secondRotation}deg)`;

 }

 setInterval(displayTime,1000);

let digitalClock = document.querySelector(".digital-clock-time")
    function displayDigitalTime(){
        let digitalTime = new Date()
        digitalClock.innerHTML = digitalTime.toLocaleTimeString()
    }

setInterval(displayDigitalTime,1000)