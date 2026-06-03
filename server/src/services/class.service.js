const { User, Class, Meeting, Task, Note, Material } = require("../models");

class ClassService {
  static async findAll() {
    return Class.findAll({
      order: [["id", "ASC"]],
      include: [
        {
          model: User,
          as: "creator",
          attributes: ["id", "name", "email"],
        },
        {
          model: User,
          as: "mentor",
          attributes: ["id", "name", "email"],
        },
        {
          model: User,
          as: "mentees",
          attributes: ["id", "name", "email"],
          through: { attributes: [] },
        },
        {
          model: Meeting,
          as: "meetings",
        },
        {
          model: Note,
          as: "notes",
        },
        {
          model: Task,
          as: "tasks",
        },
        {
          model: Material,
          as: "materials",
        },
      ],
    });
  }

  static async findById(id) {
    return Class.findByPk(id, {
      include: [
        {
          model: User,
          as: "creator",
          attributes: ["id", "name", "email"],
        },
        {
          model: User,
          as: "mentor",
          attributes: ["id", "name", "email"],
        },
        {
          model: User,
          as: "mentees",
          attributes: ["id", "name", "email"],
          through: { attributes: [] },
        },
        {
          model: Meeting,
          as: "meetings",
        },
        {
          model: Note,
          as: "notes",
        },
        {
          model: Task,
          as: "tasks",
        },
        {
          model: Material,
          as: "materials",
        },
      ],
    });
  }

  static async create(data, currentUser) {
    if (!["Admin", "Owner"].includes(currentUser.role)) {
      throw new Error("Permission denied");
    }

    return Class.create({ ...data, createdBy: currentUser.id });
  }

  static async update(id, data, currentUser) {
    if (!["Admin", "Owner"].includes(currentUser.role)) {
      throw new Error("Permission denied");
    }

    const cls = await Class.findByPk(id);

    if (!cls) throw new Error("Class not found");

    return cls.update(data);
  }

  static async delete(id, currentUser) {
    if (!["Admin", "Owner"].includes(currentUser.role)) {
      throw new Error("Permission denied");
    }

    const cls = await Class.findByPk(id);

    if (!cls) throw new Error("Class not found");

    await Meeting.destroy({ where: { ClassId: id } });
    await Task.destroy({ where: { ClassId: id } });
    await Note.destroy({ where: { ClassId: id } });
    await Material.destroy({ where: { ClassId: id } });

    return cls.destroy();
  }
}

module.exports = ClassService;
