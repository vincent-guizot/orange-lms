const express = require("express");
const router = express.Router();
const { TaskController } = require("../controllers");

/**
 * Nested (by meeting)
 * /meetings/:meetingId/tasks
 */
router.get("/", TaskController.getByMeeting);
router.post("/", TaskController.create);

/**
 * Task detail
 */
router.get("/:id", TaskController.getById);
router.put("/:id", TaskController.update);
router.delete("/:id", TaskController.delete);

/**
 * Task Submissions (pivot)
 */
router.post("/:id/submit", TaskController.submitTask);
router.get("/:id/submissions", TaskController.getSubmissions);

module.exports = router;
