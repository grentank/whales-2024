'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProblemCompletion extends Model {
    static associate({ Student, Problem }) {
      this.belongsTo(Student, { foreignKey: 'studentId' });
      this.belongsTo(Problem, { foreignKey: 'problemId' });
    }
  }
  ProblemCompletion.init(
    {
      studentId: DataTypes.INTEGER,
      problemId: DataTypes.INTEGER,
      duration: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ProblemCompletion',
    },
  );
  return ProblemCompletion;
};
