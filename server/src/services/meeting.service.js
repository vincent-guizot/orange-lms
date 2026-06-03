const { Meeting, Class, User, Task, Note, Material } = require("../models");

class MeetingService {
  static async findAllByClass(ClassId) {
    return Meeting.findAll({
      where: { ClassId },
      include: [
        {
          model: Class,
          as: "class",
        },
        {
          model: User,
          as: "creator",
          attributes: ["id", "name", "email"],
        },
      ],
    });
  }

  static async getAll() {
    return Meeting.findAll({
      include: [
        {
          model: Class,
          as: "class",
        },
        {
          model: User,
          as: "creator",
          attributes: ["id", "name", "email"],
        },
      ],
    });
  }

  static async findById(id) {
    return Meeting.findByPk(id, {
      include: [
        {
          model: Class,
          as: "class",
        },
        {
          model: User,
          as: "creator",
          attributes: ["id", "name", "email"],
        },
        {
          model: Task,
          as: "tasks",
        },
        {
          model: Note,
          as: "notes",
        },
        {
          model: Material,
          as: "materials",
        },
      ],
    });
  }

  static async create(currentUser, classId, data) {
    if (!["Admin", "Owner", "Mentor"].includes(currentUser.role)) {
      throw new Error("Permission denied");
    }

    return Meeting.create({
      ...data,
      ClassId: classId,
      createdBy: currentUser.id,
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
