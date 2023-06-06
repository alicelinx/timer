var beepAtSeconds = process.argv.slice(2);

// console.log('will beep at:', beepAtSeconds);

const timer = () => {
  if (beepAtSeconds.length === 0) {
    return;
  }
  for (let i = 0; i < beepAtSeconds.length; i++) {

    if (beepAtSeconds[i] > 0 || typeof beepAtSeconds[i] === "number") {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, beepAtSeconds[i] * 1000);
    }
  }
};


timer();
