"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      User.hasOne(models.Profile, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
      User.belongsToMany(models.Class, {
        through: models.ClassUser,
        foreignKey: "userId",
        otherKey: "classId",
      });
      User.hasMany(models.ClassUser, { foreignKey: "userId" });
      User.hasMany(models.TaskSubmission, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      avatarUrl: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    },
  );
  return User;
};
