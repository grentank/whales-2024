function timer(sec) {
  console.log(sec);
  if (sec <= 0) return;

  setTimeout(() => {
    timer(sec - 1);
  }, 1000);
}

function timerIterative(sec) {
  for (let index = sec; index >= 0; index--) {
    setTimeout(() => {
      console.log(index);
    }, (sec - index) * 1000);
  }
}

timerIterative(Number(process.argv[2]));
// timer(Number(process.argv[2]));
// 1 1000
// 2 500
// 3 250
// 4 128
// 5 64
// 6 32
// 7 16
// 8 8
// 9 4
// 10 2
// 11 1