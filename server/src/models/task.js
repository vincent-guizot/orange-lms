"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.Meeting, { foreignKey: "meetingId" });
      Task.belongsTo(models.Class, { foreignKey: "classId" });
      Task.belongsTo(models.User, {
        foreignKey: "createdBy",
        as: "TaskCreatedBy",
      });
      Task.hasMany(models.TaskSubmission, {
        foreignKey: "taskId",
        onDelete: "CASCADE",
      });
    }
  }
  Task.init(
    {
      classId: DataTypes.INTEGER,
      meetingId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      createdBy: DataTypes.INTEGER,
      dueDate: DataTypes.DATE,
      maxScore: DataTypes.INTEGER,
      fileUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Task",
    },
  );
  return Task;
};
