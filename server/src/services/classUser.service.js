const { ClassUser, User } = require("../models");

class ClassUserService {
  static async enrollMentee({ classId, userId }) {
    return ClassUser.create({
      classId,
      userId,
      roleInClass: "mentee",
      progressPercentage: 0,
      status: "active",
    });
  }

  static async assignMentor({ classId, userId }) {
    return ClassUser.create({
      classId,
      userId,
      roleInClass: "mentor",
      progressPercentage: 0,
      status: "active",
    });
  }

  static async getUsers(classId) {
    return ClassUser.findAll({ where: { classId }, include: User });
  }

  static async getMentees(classId) {
    return ClassUser.findAll({
      where: { classId, roleInClass: "mentee" },
      include: User,
    });
  }

  static async getMentor(classId) {
    return ClassUser.findOne({
      where: { classId, roleInClass: "mentor" },
      include: User,
    });
  }
}

module.exports = new ClassUserService();
