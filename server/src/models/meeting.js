"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Meeting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Meeting.belongsTo(models.Class, { foreignKey: "classId", as: "class" });

      Meeting.hasMany(models.Task, {
        foreignKey: "meetingId",
        onDelete: "CASCADE",
      });
      Meeting.hasMany(models.Note, {
        foreignKey: "meetingId",
        onDelete: "CASCADE",
      });
      Meeting.hasMany(models.Material, {
        foreignKey: "meetingId",
        onDelete: "CASCADE",
      });
    }
  }
  Meeting.init(
    {
      classId: DataTypes.INTEGER,
      meetingNumber: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      meetingDate: DataTypes.DATE,
      startHour: DataTypes.TIME,
      finishHour: DataTypes.TIME,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Meeting",
    },
  );
  return Meeting;
};
