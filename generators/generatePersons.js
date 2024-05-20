const { fakerRU: faker } = require('@faker-js/faker');

function generatePersons(amount) {
  const persons = new Array(amount).fill(null).map(() => {
    const name = faker.person.fullName({ sex: 'male' });
    const jobTitle = faker.person.jobTitle();
    const person = {
      name: name,
      jobTitle: jobTitle,
    };
    return person;
  });
  return persons;
}

module.exports = generatePersons;
