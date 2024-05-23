const fs = require('fs');

const values = fs
  .readFileSync('./numbers.txt', 'utf8')
  .split('\n')
  .slice(1)
  .map((row) =>
    row.replace(
      /\+?(\d+)[ \(]+(\d+)[ \)]+(\d{3})[ -]?(\d{2})[ -]?(\d{2})/gim,
      '+$1 ($2) $3-$4-$5',
    ),
  );

// console.log(values);

// const today = new Date();
// // console.log(today.valueOf(), +today, Number(today), Date.now());
// const yesterday = new Date();
// yesterday.setDate(today.getDate() - 1);
// console.log(
//   today - yesterday,
//   (today - yesterday) / (1000 * 60 * 60),
// );

function daysUntilNewYear(startDate) {
//   const today = new Date();
  const currentYear = startDate.getFullYear();
  const newYear = new Date(currentYear + 1, 0, 1, 0, 0, 0, 0);
  const diffMs = newYear - startDate;
  const days = diffMs / (1000 * 60 * 60 * 24);
  return Math.floor(days);
}

console.log(daysUntilNewYear(new Date(2024, 0, 1, 1)));
