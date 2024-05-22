function sumIntegers(n) {
  if (n <= 0) return 0; // base
  return sumIntegers(n - 1) + n; // step
}

function sumIntegersIterative(n) {
  let res = 0;
  for (let index = 1; index <= n; index++) {
    res += index;
  }
  return res;
}

// sumIntegers(4) = 1 + 2 + 3 + 4;
// sumIntegers(5) = sumIntegers(4) + 5; // 15
// sumIntegers(6) = sumIntegers(5) + 6;

console.log(sumIntegers(1e6));
