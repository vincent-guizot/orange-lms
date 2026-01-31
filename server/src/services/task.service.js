const { Task, Class, User, Meeting } = require("../models");

class TaskService {
  static async findAllByMeeting(meetingId) {
    return Task.findAll({
      where: { meetingId },
      include: [
        {
          model: Class,
          attributes: ["id", "code", "name"],
        },
        {
          model: User,
          as: "TaskCreatedBy",
          attributes: ["id", "name", "email"],
        },
        {
          model: Meeting,
          attributes: ["id", "name", "meetingNumber"],
        },
      ],
    });
  }

  static async getAll() {
    return Task.findAll({
      include: [
        {
          model: Class,
          attributes: ["id", "code", "name"],
        },
        {
          model: User,
          as: "TaskCreatedBy",
          attributes: ["id", "name", "email"],
        },
        {
          model: Meeting,
          attributes: ["id", "name", "meetingNumber"],
        },
      ],
    });
  }

  static async findById(id) {
    return Task.findByPk(id, {
      include: [
        {
          model: Class,
          attributes: ["id", "code", "name"],
        },
        {
          model: User,
          as: "TaskCreatedBy",
          attributes: ["id", "name", "email"],
        },
        {
          model: Meeting,
          attributes: ["id", "name", "meetingNumber"],
        },
      ],
    });
  }

  static async create(currentUser, data) {
    if (!["admin", "owner", "mentor"].includes(currentUser.role))
      throw new Error("Permission denied");
    return Task.create(data);
  }

  static async update(id, data, currentUser) {
    const task = await Task.findByPk(id);
    if (!task) throw new Error("Task not found");
    return task.update(data);
  }

  static async delete(id, currentUser) {
    const task = await Task.findByPk(id);
    if (!task) throw new Error("Task not found");
    return task.destroy();
  }
}

module.exports = TaskService;
