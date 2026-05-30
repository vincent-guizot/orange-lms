const { Task } = require("../models");

class TaskService {
  static async findAllByMeeting(MeetingId) {
    return Task.findAll({
      where: { MeetingId },
    });
  }

  static async getAll() {
    return Task.findAll();
  }

  static async findById(id) {
    return Task.findByPk(id);
  }

  static async create(currentUser, data) {
    if (!["Admin", "Owner", "Mentor"].includes(currentUser.role)) {
      throw new Error("Permission denied");
    }

    return Task.create(data);
  }

  static async update(id, data, currentUser) {
    if (!["Admin", "Owner", "Mentor"].includes(currentUser.role)) {
      throw new Error("Permission denied");
    }

    const task = await Task.findByPk(id);

    if (!task) {
      throw new Error("Task not found");
    }

    return task.update(data);
  }

  static async delete(id, currentUser) {
    if (!["Admin", "Owner", "Mentor"].includes(currentUser.role)) {
      throw new Error("Permission denied");
    }

    const task = await Task.findByPk(id);

    if (!task) {
      throw new Error("Task not found");
    }

    return task.destroy();
  }
}

module.exports = TaskService;
