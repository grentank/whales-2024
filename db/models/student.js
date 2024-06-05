'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate({ Group, ProblemCompletion, Problem }) {
      this.belongsTo(Group, { foreignKey: 'groupId' });
      this.belongsToMany(Problem, {
        through: ProblemCompletion,
        foreignKey: 'studentId',
      });
      this.hasMany(ProblemCompletion, { foreignKey: 'studentId' });
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      groupId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Student',
    },
  );
  return Student;
};
