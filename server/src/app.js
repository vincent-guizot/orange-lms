const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// Import routes nanti
const userRoutes = require("./routes/userRoutes");
const classRoutes = require("./routes/classRoutes");
const meetingRoutes = require("./routes/meetingRoutes");
const taskRoutes = require("./routes/taskRoutes");
const materialRoutes = require("./routes/materialRoutes");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev")); // logging HTTP request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/meetings", meetingRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/materials", materialRoutes);
app.use("/api/notes", noteRoutes);

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Orange LMS Server is running" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: true,
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
