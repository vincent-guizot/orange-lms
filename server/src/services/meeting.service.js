const { Meeting, Task, Note, Material } = require("../models");

class MeetingService {
  static async findAllByClass(classId) {
    return Meeting.findAll({
      where: { classId },
      include: [Task, Note, Material],
    });
  }

  static async findById(id) {
    return Meeting.findByPk(id, { include: [Task, Note, Material] });
  }

  static async create(currentUser, classId, data) {
    if (!["admin", "owner"].includes(currentUser.role))
      throw new Error("Permission denied");
    return Meeting.create({ classId, ...data });
  }

  static async update(id, data, currentUser) {
    const meeting = await Meeting.findByPk(id);
    if (!meeting) throw new Error("Meeting not found");
    return meeting.update(data);
  }

  static async delete(id, currentUser) {
    const meeting = await Meeting.findByPk(id);
    if (!meeting) throw new Error("Meeting not found");

    await Task.destroy({ where: { meetingId: id } });
    await Note.destroy({ where: { meetingId: id } });
    await Material.destroy({ where: { meetingId: id } });

    return meeting.destroy();
  }
}

module.exports = new MeetingService();
