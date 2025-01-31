
// For see the clock design you have to open clock.html file
setInterval(() => {
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hour.innerHTML = hours % 12 == 0 ? 12 : hours % 12;
    minute.innerHTML = String(minutes).padStart(2, '0');
    second.innerHTML = String(seconds).padStart(2, '0');
 }, 1000);