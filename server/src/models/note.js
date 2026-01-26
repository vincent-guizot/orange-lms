"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Note.belongsTo(models.Meeting, { foreignKey: "meetingId" });
    }
  }
  Note.init(
    {
      classId: DataTypes.INTEGER,
      meetingId: DataTypes.INTEGER,
      createdBy: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Note",
    },
  );
  return Note;
};
