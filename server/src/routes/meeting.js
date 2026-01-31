const express = require("express");
const router = express.Router({ mergeParams: true });
const { MeetingController } = require("../controllers");

/**
 * Nested (by class)
 * /classes/:class/meetings
 */
router.get("/", MeetingController.getByClass);
router.post("/", MeetingController.create);

/**
 * Single meeting
 * /meetings/:id
 */
router.get("/all", MeetingController.getAll);
router.get("/:id", MeetingController.getById);
router.put("/:id", MeetingController.update);
router.delete("/:id", MeetingController.delete);

module.exports = router;
