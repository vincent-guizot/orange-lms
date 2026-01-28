"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Class.belongsToMany(models.User, {
        through: models.ClassUser,
        foreignKey: "classId",
        otherKey: "userId",
      });
      Class.hasMany(models.ClassUser, { foreignKey: "classId" });
      Class.hasMany(models.Meeting, {
        foreignKey: "classId",
        onDelete: "CASCADE",
      });
    }
  }
  Class.init(
    {
      code: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      category: DataTypes.STRING,
      mentorId: DataTypes.INTEGER,
      level: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      status: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Class",
    },
  );
  return Class;
};
