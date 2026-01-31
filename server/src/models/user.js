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
      User.hasMany(models.Class, {
        foreignKey: "mentorId",
        as: "mentoredClasses",
      });
      User.hasOne(models.Profile, {
        foreignKey: "userId",
        as: "profile",
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
      User.hasMany(models.Note, {
        foreignKey: "createdBy",
        as: "NoteCreatedBy",
      });
      // User.hasMany(models.Task, {
      //   foreignKey: "createdBy",
      //   as: "TaskCreatedBy",
      // });
      User.hasMany(models.Material, {
        foreignKey: "uploadedBy",
        as: "MaterialUploadedBy",
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
