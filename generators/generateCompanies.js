const { fakerRU: faker } = require('@faker-js/faker');

function generateCompanies(amount) {
  //   const companyName = faker.company.name();
  //   return companyName;
  const companies = [];
  for (let index = 0; index < amount; index++) {
    const companyName = faker.company.name();
    companies.push(companyName);
  }
  return companies;
}

module.exports = generateCompanies;
