const clock = document.getElementById('clock');

// to change the time every second a method is delcare in javascript that is setInterval()

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
