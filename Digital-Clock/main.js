function updateClock() {
    const clockElement = document.getElementById("clock");

    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero to minutes and seconds if less than 10
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Format time in 24-hour format
    const timeString = hours + ":" + minutes + ":" + seconds;

    clockElement.textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display time immediately
updateClock();
