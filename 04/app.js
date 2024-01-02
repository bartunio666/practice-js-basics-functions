function runTimer() {
  let i = 0;
  interval = setInterval(() => {
    const time = new Date();
    console.log(time.toLocaleTimeString());
    i++;
    if (i === 5) clearInterval(interval);
  }, 5000);
}

runTimer();
