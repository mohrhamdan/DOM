const messageElement = document.getElementById("message");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  // Mengubah teks menjadi "New Message" setelah 2 detik
  setTimeout(function () {
    messageElement.textContent = "New Message";
  }, 2000); // Delay 2000ms (2 seconds)
});
