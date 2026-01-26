// services/index.js

const userService = require("./user.service");
const profileService = require("./profile.service");

const classService = require("./class.service");
const classUserService = require("./classUser.service");

const meetingService = require("./meeting.service");

const taskService = require("./task.service");
const taskSubmissionService = require("./taskSubmission.service");

const noteService = require("./note.service");
const materialService = require("./material.service");

module.exports = {
  // User
  userService,
  profileService,

  // Class
  classService,
  classUserService,

  // Learning Flow
  meetingService,
  taskService,
  taskSubmissionService,
  noteService,
  materialService,
};
