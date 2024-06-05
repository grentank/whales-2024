'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Problem extends Model {
    static associate(models) {
      this.belongsToMany(models.Student, {
        through: models.ProblemCompletion,
        foreignKey: 'problemId',
      });
      this.hasMany(models.ProblemCompletion, { foreignKey: 'problemId' });
    }
  }
  Problem.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Problem',
    },
  );
  return Problem;
};
