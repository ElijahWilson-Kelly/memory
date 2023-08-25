export const formatTime = (timeInMilliseconds) => {
  let milliseconds = timeInMilliseconds % 1000;
  let seconds = Math.floor(timeInMilliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  seconds %= 60;

  let centiseconds = milliseconds.toString().slice(0, -1);
  while (centiseconds.length < 2) {
    centiseconds = "0" + centiseconds;
  }

  seconds = seconds.toString();
  while (seconds.length < 2) {
    seconds = "0" + seconds;
  }
  minutes = minutes.toString();
  while (minutes.length < 2) {
    minutes = "0" + minutes;
  }

  return `${minutes}:${seconds}:${centiseconds}`;
};
