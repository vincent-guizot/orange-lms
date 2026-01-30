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
      Note.belongsTo(models.Class, { foreignKey: "classId" });
      Note.belongsTo(models.User, {
        foreignKey: "createdBy",
        as: "NoteCreatedBy",
      });
    }
  }
  Note.init(
    {
      classId: DataTypes.INTEGER,
      meetingId: DataTypes.INTEGER,
      createdBy: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      fileUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Note",
    },
  );
  return Note;
};
