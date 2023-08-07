const counterElement = document.getElementById("counter");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

let count = 0;
let intervalId = null;

startButton.addEventListener("click", function () {
  // Memulai interval penghitung
  intervalId = setInterval(function () {
    counterElement.textContent = count;
    count++;
  }, 1000); // Interval 1000ms (1 detik)
});

stopButton.addEventListener("click", function () {
  // Menghentikan interval penghitung
  clearInterval(intervalId);
});
