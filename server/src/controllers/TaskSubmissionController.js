const { taskSubmissionService } = require("../services");

class TaskSubmissionController {
  static async submit(req, res, next) {
    try {
      const { taskId } = req.params;
      const submission = await taskSubmissionService.create({
        taskId,
        userId: req.user.id,
        submissionUrl: req.body.submissionUrl,
      });
      res.status(201).json(submission);
    } catch (err) {
      next(err);
    }
  }

  static async grade(req, res, next) {
    try {
      const submission = await taskSubmissionService.grade(
        req.user,
        req.params.id,
        req.body.score,
        req.body.feedback,
      );
      res.json({ message: "Task graded", data: submission });
    } catch (err) {
      next(err);
    }
  }

  static async findAll(req, res, next) {
    try {
      const submissions = await taskSubmissionService.findAll();
      res.json(submissions);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = TaskSubmissionController;
