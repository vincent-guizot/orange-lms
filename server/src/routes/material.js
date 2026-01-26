const express = require("express");
const router = express.Router();
const { MaterialController } = require("../controllers");

/**
 * Nested (by meeting)
 * /meetings/:meetingId/materials
 */
router.get("/", MaterialController.getByMeeting);
router.post("/", MaterialController.create);

/**
 * Material detail
 */
router.get("/:id", MaterialController.getById);
router.put("/:id", MaterialController.update);
router.delete("/:id", MaterialController.delete);

module.exports = router;
