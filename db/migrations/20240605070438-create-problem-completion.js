'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProblemCompletions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      studentId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Students',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'SET NULL',
      },
      problemId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Problems',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
      },
      duration: {
        type: Sequelize.INTEGER,
        defaultValue: 60,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProblemCompletions');
  },
};
