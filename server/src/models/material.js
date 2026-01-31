"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Material.belongsTo(models.Meeting, { foreignKey: "meetingId" });
      Material.belongsTo(models.Class, { foreignKey: "classId" });
      Material.belongsTo(models.User, {
        foreignKey: "uploadedBy",
        as: "MaterialUploadedBy",
      });
    }
  }
  Material.init(
    {
      classId: DataTypes.INTEGER,
      meetingId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      type: DataTypes.STRING,
      uploadedBy: DataTypes.INTEGER,
      fileUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Material",
    },
  );
  return Material;
};
