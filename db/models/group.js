'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate({ Student }) {
      this.hasMany(Student, { foreignKey: 'groupId' });
    }
  }
  Group.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Group',
    },
  );
  return Group;
};
