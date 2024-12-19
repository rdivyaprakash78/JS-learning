const time = document.getElementById("timestamp");
let second = 0;
let funcId = null;

function format_time(second) {
  const minutes = Math.floor(second / 60);
  const seconds = second % 60;
  formatted_minute = minutes.toString().padStart(2, "0");
  formatted_seconds = seconds.toString().padStart(2, "0");
  return `${formatted_minute}:${formatted_seconds}`;
}
function updateTime() {
  second++;
  time.innerHTML = format_time(second);
}
function startTimer() {
  if (funcId == null) {
    funcId = setInterval(updateTime, 1000);
  }
}

function stopTimer() {
  clearInterval(funcId);
  funcId = null;
}

function resetTimer() {
  stopTimer();
  second = 0;
  time.innerHTML = format_time(second);
}
