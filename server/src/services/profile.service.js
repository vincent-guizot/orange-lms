const { Profile } = require("../models");

class ProfileService {
  static async findByUserId(userId) {
    return Profile.findOne({ where: { userId } });
  }

  static async create({ userId, ...data }) {
    return Profile.create({ userId, ...data });
  }

  static async createOrUpdate(userId, data) {
    const profile = await Profile.findOne({ where: { userId } });
    if (profile) return profile.update(data);
    return Profile.create({ userId, ...data });
  }
}

module.exports = ProfileService;
