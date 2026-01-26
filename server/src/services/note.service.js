const { Note } = require("../models");

class NoteService {
  static async findAllByMeeting(meetingId) {
    return Note.findAll({ where: { meetingId } });
  }

  static async findById(id) {
    return Note.findByPk(id);
  }

  static async create(currentUser, data) {
    if (!["admin", "owner", "mentor"].includes(currentUser.role))
      throw new Error("Permission denied");
    return Note.create(data);
  }

  static async update(id, data, currentUser) {
    const note = await Note.findByPk(id);
    if (!note) throw new Error("Note not found");
    return note.update(data);
  }

  static async delete(id, currentUser) {
    const note = await Note.findByPk(id);
    if (!note) throw new Error("Note not found");
    return note.destroy();
  }
}

module.exports = new NoteService();
