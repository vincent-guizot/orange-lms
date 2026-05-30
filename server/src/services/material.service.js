const { Material } = require("../models");

class MaterialService {
  static async findAllByMeeting(MeetingId) {
    return Material.findAll({
      where: { MeetingId },
    });
  }

  static async getAll() {
    return Material.findAll();
  }

  static async findById(id) {
    return Material.findByPk(id);
  }

  static async create(currentUser, data) {
    if (!["Admin", "Owner", "Mentor"].includes(currentUser.role)) {
      throw new Error("Permission denied");
    }

    return Material.create(data);
  }

  static async update(id, data) {
    const material = await Material.findByPk(id);

    if (!material) throw new Error("Material not found");

    return material.update(data);
  }

  static async delete(id) {
    const material = await Material.findByPk(id);

    if (!material) throw new Error("Material not found");

    return material.destroy();
  }
}

module.exports = MaterialService;
