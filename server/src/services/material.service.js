const { Material } = require("../models");

class MaterialService {
  static async findAllByMeeting(meetingId) {
    return Material.findAll({ where: { meetingId } });
  }

  static async findById(id) {
    return Material.findByPk(id);
  }

  static async create(currentUser, data) {
    if (!["admin", "owner", "mentor"].includes(currentUser.role))
      throw new Error("Permission denied");
    return Material.create(data);
  }

  static async update(id, data, currentUser) {
    const material = await Material.findByPk(id);
    if (!material) throw new Error("Material not found");
    return material.update(data);
  }

  static async delete(id, currentUser) {
    const material = await Material.findByPk(id);
    if (!material) throw new Error("Material not found");
    return material.destroy();
  }
}

module.exports = MaterialService;
