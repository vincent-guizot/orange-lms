const { meetingService } = require("../services");

class MeetingController {
  static async getByClass(req, res, next) {
    try {
      const classId = Number(req.params.classId);

      if (Number.isNaN(classId)) {
        throw { name: "BadRequest", message: "Invalid classId" };
      }

      const meetings = await meetingService.findAllByClass(classId);
      res.json(meetings);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const meetings = await meetingService.getAll();
      res.json(meetings);
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    try {
      const meeting = await meetingService.create(
        req.user,
        req.params.classId,
        req.body,
      );
      res.status(201).json(meeting);
    } catch (err) {
      next(err);
    }
  }

  static async getById(req, res, next) {
    try {
      const meeting = await meetingService.findById(req.params.id);
      res.json(meeting);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const meeting = await meetingService.update(
        req.params.id,
        req.body,
        req.user,
      );
      res.json(meeting);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      await meetingService.delete(req.params.id, req.user);
      res.json({ message: "Meeting deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MeetingController;
