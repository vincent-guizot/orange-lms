const { TaskSubmission } = require("../models");

class TaskSubmissionService {
  static async create({ taskId, userId, submissionUrl }) {
    return TaskSubmission.create({
      taskId,
      userId,
      submissionUrl,
      status: "submitted",
    });
  }

  static async findAllByTask(taskId) {
    return TaskSubmission.findAll({ where: { taskId } });
  }
}

module.exports = new TaskSubmissionService();
