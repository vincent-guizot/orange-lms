const { Note } = require("../models");

class NoteService {
  static async findAllByMeeting(MeetingId) {
    return Note.findAll({
      where: { MeetingId },
    });
  }

  static async getAll() {
    return Note.findAll();
  }

  static async findById(id) {
    return Note.findByPk(id);
  }

  static async create(currentUser, data) {
    if (!["Admin", "Owner", "Mentor"].includes(currentUser.role)) {
      throw new Error("Permission denied");
    }

    return Note.create(data);
  }

  static async update(id, data, currentUser) {
    if (!["Admin", "Owner", "Mentor"].includes(currentUser.role)) {
      throw new Error("Permission denied");
    }

    const note = await Note.findByPk(id);

    if (!note) {
      throw new Error("Note not found");
    }

    return note.update(data);
  }

  static async delete(id, currentUser) {
    if (!["Admin", "Owner", "Mentor"].includes(currentUser.role)) {
      throw new Error("Permission denied");
    }

    const note = await Note.findByPk(id);

    if (!note) {
      throw new Error("Note not found");
    }

    return note.destroy();
  }
}

module.exports = NoteService;
