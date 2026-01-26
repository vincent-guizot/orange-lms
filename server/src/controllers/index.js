// controllers/index.js

const UserController = require("./UserController");
const ProfileController = require("./ProfileController");

const ClassController = require("./ClassController");
const MeetingController = require("./MeetingController");

const TaskController = require("./TaskController");
const TaskSubmissionController = require("./TaskSubmissionController");

const NoteController = require("./NoteController");
const MaterialController = require("./MaterialController");

module.exports = {
  UserController,
  ProfileController,
  ClassController,
  MeetingController,
  TaskController,
  TaskSubmissionController,
  NoteController,
  MaterialController,
};
