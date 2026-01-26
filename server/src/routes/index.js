const express = require("express");
const router = express.Router();

const userRoutes = require("./user");
const classRoutes = require("./class");
const meetingRoutes = require("./meeting");
const taskRoutes = require("./task");
const noteRoutes = require("./note");
const materialRoutes = require("./material");

// Base routes
router.use("/users", userRoutes);
router.use("/classes", classRoutes);
router.use("/meetings", meetingRoutes);
router.use("/tasks", taskRoutes);
router.use("/notes", noteRoutes);
router.use("/materials", materialRoutes);

// Default route
router.get("/", (req, res) => {
  res.json({ message: "Orange LMS Server is running" });
});

module.exports = router;
