const { Note, Class, User, Meeting } = require("../models");

class NoteService {
  static async findAllByMeeting(meetingId) {
    return Note.findAll({
      where: { meetingId },
      include: [
        {
          model: Class,
          attributes: ["id", "code", "name"],
        },
        {
          model: User,
          as: "NoteCreatedBy",
          attributes: ["id", "name", "email"],
        },
        {
          model: Meeting,
          attributes: ["id", "name", "meetingNumber"],
        },
      ],
    });
  }

  static async getAll() {
    return Note.findAll({
      include: [
        {
          model: Class,
          attributes: ["id", "code", "name"],
        },
        {
          model: User,
          as: "NoteCreatedBy",
          attributes: ["id", "name", "email"],
        },
        {
          model: Meeting,
          attributes: ["id", "name", "meetingNumber"],
        },
      ],
    });
  }
  static async findById(id) {
    return Note.findByPk(id, {
      include: [
        {
          model: Class,
          attributes: ["id", "code", "name"],
        },
        {
          model: User,
          as: "NoteCreatedBy",
          attributes: ["id", "name", "email"],
        },
        {
          model: Meeting,
          attributes: ["id", "name", "meetingNumber"],
        },
      ],
    });
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

module.exports = NoteService;
