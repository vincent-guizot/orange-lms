const { Meeting } = require("../models");

class MeetingService {
  static async findAllByClass(ClassId) {
    return Meeting.findAll({
      where: { ClassId },
    });
  }

  static async getAll() {
    return Meeting.findAll();
  }

  static async findById(id) {
    return Meeting.findByPk(id);
  }

  static async create(currentUser, ClassId, data) {
    if (!["Admin", "Owner"].includes(currentUser.role)) {
      throw new Error("Permission denied");
    }

    return Meeting.create({
      ClassId,
      ...data,
    });
  }

  static async update(id, data, currentUser) {
    if (!["Admin", "Owner"].includes(currentUser.role)) {
      throw new Error("Permission denied");
    }

    const meeting = await Meeting.findByPk(id);

    if (!meeting) throw new Error("Meeting not found");

    return meeting.update(data);
  }

  static async delete(id, currentUser) {
    if (!["Admin", "Owner"].includes(currentUser.role)) {
      throw new Error("Permission denied");
    }

    const meeting = await Meeting.findByPk(id);

    if (!meeting) throw new Error("Meeting not found");

    return meeting.destroy();
  }
}

module.exports = MeetingService;
