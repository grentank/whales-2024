// const createRandomUser = require("./generators/createRandomUser");

const generateCompanies = require('./generators/generateCompanies');
const generatePersons = require('./generators/generatePersons');
const fs = require('fs');

// const generateCompanies = require('./generators/generateCompanies');

// const res = generateCompanies(5);

function run() {
  const amountString = process.argv[2];
  const amount = Number(amountString);
  if (Number.isNaN(amount)) {
    console.error(new Error('Передано не число'));
    return;
  }

  const persons = generatePersons(amount);
  const companies = generateCompanies(amount);
  let res = '';
  for (let index = 0; index < amount; index++) {
    const personName = persons[index].name;
    const job = persons[index].jobTitle;
    const companyName = companies[index];
    const str = `${personName} работает в ${companyName} на должности ${job}\n`;
    // fs.appendFileSync('./output.txt', str, 'utf8');
    // console.log(str);
    res += str; // .join()
  }
  fs.writeFileSync('./output.txt', res, 'utf8');
}

// run();

console.log(new Array(3))
console.log([undefined, null, , ])

// console.log(process.argv);
