'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TaskSubmission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TaskSubmission.init({
    taskId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    submissionUrl: DataTypes.STRING,
    score: DataTypes.INTEGER,
    feedback: DataTypes.TEXT,
    status: DataTypes.STRING,
    submittedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'TaskSubmission',
  });
  return TaskSubmission;
};