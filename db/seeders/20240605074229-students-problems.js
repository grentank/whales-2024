'use strict';
const { Student, Problem, ProblemCompletion } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Student.bulkCreate([
      { name: 'Alex', groupId: 1 },
      { name: 'Bob', groupId: 2 },
      { name: 'Carl', groupId: 3 },
      { name: 'Dean', groupId: 1 },
      { name: 'Evan', groupId: 2 },
      { name: 'Frank', groupId: 3 },
      { name: 'Greg', groupId: 1 },
      { name: 'Harry', groupId: 2 },
      { name: 'Ivan', groupId: 3 },
    ]);

    await Problem.bulkCreate([
      {title: 'Granny Spam', description: 'Spam your Granny with API calls'},
      {title: 'Elbrus Wars', description: 'Campion vs Elbrius'},
      {title: 'Coffee', description: 'Buy coffee'},
      {title: 'Cats', description: 'Buy cats'},
      {title: 'Truck and Train', description: 'Class heridance with different vehicles'},
      {title: 'Dogs', description: 'Buy dogs'},
    ])

    await ProblemCompletion.bulkCreate([
      {studentId: 1, problemId: 1, duration: 40},
      {studentId: 2, problemId: 1, duration: 20},
      {studentId: 3, problemId: 1, duration: 10},
      {studentId: 4, problemId: 1, duration: 30},
      {studentId: 5, problemId: 1, duration: 50},
      {studentId: 6, problemId: 1, duration: 60},
      {studentId: 2, problemId: 3, duration: 70},
      {studentId: 2, problemId: 4, duration: 80},
      {studentId: 2, problemId: 5, duration: 90},
      {studentId: 3, problemId: 2, duration: 60},
      {studentId: 4, problemId: 2, duration: 50},
      {studentId: 5, problemId: 2, duration: 40},
      {studentId: 6, problemId: 2, duration: 30},
      {studentId: 7, problemId: 2, duration: 20},
      {studentId: 8, problemId: 2, duration: 10},
      {studentId: 3, problemId: 3, duration: 70},
      {studentId: 4, problemId: 3, duration: 80},
      {studentId: 5, problemId: 3, duration: 20},
      {studentId: 9, problemId: 5, duration: 10},
      {studentId: 8, problemId: 5, duration: 10},
      {studentId: 7, problemId: 5, duration: 10},
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
