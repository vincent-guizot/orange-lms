const express = require("express");
const router = express.Router();
const { NoteController } = require("../controllers");

/**
 * Nested (by meeting)
 * /meetings/:meetingId/notes
 */
router.get("/", NoteController.getByMeeting);
router.post("/", NoteController.create);

/**
 * Note detail
 */
router.get("/all", NoteController.getAll);
router.get("/:id", NoteController.getById);
router.put("/:id", NoteController.update);
router.delete("/:id", NoteController.delete);

module.exports = router;
