let timer;
let remaining;

function startTimer(seconds) {
  clearInterval(timer);
  remaining = seconds;
  updateDisplay();

  timer = setInterval(() => {
    remaining--;
    updateDisplay();
    if (remaining <= 0) {
      clearInterval(timer);
      document.getElementById("ding").play();
    }
  }, 1000);
}

function updateDisplay() {
  const minutes = String(Math.floor(remaining / 60)).padStart(2, '0');
  const secs = String(remaining % 60).padStart(2, '0');
  document.getElementById("display").textContent = `${minutes}:${secs}`;
}