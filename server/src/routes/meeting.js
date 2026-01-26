const express = require("express");
const router = express.Router();
const { MeetingController } = require("../controllers");

/**
 * Nested (by class)
 * /classes/:classId/meetings
 */
router.get("/", MeetingController.getByClass);
router.post("/", MeetingController.create);

/**
 * Single meeting
 * /meetings/:id
 */
router.get("/:id", MeetingController.getById);
router.put("/:id", MeetingController.update);
router.delete("/:id", MeetingController.delete);

module.exports = router;
