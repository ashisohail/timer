let countdownTime = 0;

document.getElementById("startButton").addEventListener("click", function () {
  countdownTime = parseInt(document.getElementById("countInput").value);
  if (countdownTime > 0) {
    startCountdown();
  }
});

function startCountdown() {
  setInterval(function () {
    const countdownOutput = document.getElementById("countOutput");
    if (countdownTime > 0) {
      countdownOutput.innerHTML =
        "Time remaining: " + countdownTime + " seconds";
      countdownTime--;
    } else {
      countdownOutput.innerHTML = "Time's up!";
    }
  }, 1000); // Update every 1 second (1000 milliseconds)
}
