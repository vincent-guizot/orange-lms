const { Task } = require("../models");

class TaskService {
  static async findAllByMeeting(meetingId) {
    return Task.findAll({ where: { meetingId } });
  }

  static async findById(id) {
    return Task.findByPk(id);
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

module.exports = new TaskService();
