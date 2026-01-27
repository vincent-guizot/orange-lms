const { profileService } = require("../services");

class ProfileController {
  static async getByUser(req, res, next) {
    try {
      const profile = await profileService.findByUserId(req.params.id);
      res.json(profile);
    } catch (err) {
      next(err);
    }
  }

  static async createOrUpdate(req, res, next) {
    try {
      const profile = await profileService.createOrUpdate(
        req.params.id,
        req.body,
      );
      res.json(profile);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProfileController;
