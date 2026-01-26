'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClassUser.init({
    classId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    roleInClass: DataTypes.STRING,
    progressPercentage: DataTypes.INTEGER,
    status: DataTypes.STRING,
    joinedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ClassUser',
  });
  return ClassUser;
};