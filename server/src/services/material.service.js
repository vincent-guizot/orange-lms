const { Material, Class, User, Meeting } = require("../models");

class MaterialService {
  static async findAllByMeeting(meetingId) {
    return Material.findAll({
      where: { meetingId },
      include: [
        {
          model: Class,
          attributes: ["id", "code", "name"],
        },
        {
          model: User,
          as: "MaterialUploadedBy",
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
    return Material.findAll({
      include: [
        {
          model: Class,
          attributes: ["id", "code", "name"],
        },
        {
          model: User,
          as: "MaterialUploadedBy",
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
    return Material.findByPk(id, {
      include: [
        {
          model: Class,
          attributes: ["id", "code", "name"],
        },
        {
          model: User,
          as: "MaterialUploadedBy",
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
