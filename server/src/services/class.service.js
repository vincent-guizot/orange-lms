const { Class, Meeting, Task, Note, Material } = require("../models");

class ClassService {
  static async findAll() {
    return Class.findAll({ include: [Meeting, Task, Note, Material] });
  }

  static async findById(id) {
    return Class.findByPk(id, { include: [Meeting, Task, Note, Material] });
  }

  static async create(data, currentUser) {
    if (!["admin", "owner"].includes(currentUser.role))
      throw new Error("Permission denied");
    return Class.create(data);
  }

  static async update(id, data, currentUser) {
    const cls = await Class.findByPk(id);
    if (!cls) throw new Error("Class not found");
    return cls.update(data);
  }

  static async delete(id, currentUser) {
    const cls = await Class.findByPk(id);
    if (!cls) throw new Error("Class not found");

    // Cascade delete related meetings, tasks, notes, materials
    await Meeting.destroy({ where: { classId: id } });
    await Task.destroy({ where: { classId: id } });
    await Note.destroy({ where: { classId: id } });
    await Material.destroy({ where: { classId: id } });

    return cls.destroy();
  }
}

module.exports = ClassService;
