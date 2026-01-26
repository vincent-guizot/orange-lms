const { User, Profile } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserService {
  static async create({ email, password, role, name }) {
    const hashed = await bcrypt.hash(password, 10);
    return User.create({ email, password: hashed, role, name });
  }

  static async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("User not found");
    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid credentials");

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );
    return { user, token };
  }

  static async findAll() {
    return User.findAll({ include: Profile });
  }

  static async findById(id) {
    return User.findByPk(id, { include: Profile });
  }

  static async update(id, data, currentUser) {
    // Admin can update anyone, non-admin can only update self
    const user = await User.findByPk(id);
    if (!user) throw new Error("User not found");
    if (user.role === "owner" && currentUser.role !== "owner")
      throw new Error("Cannot update owner");
    return user.update(data);
  }

  static async delete(id, currentUser) {
    const user = await User.findByPk(id);
    if (!user) throw new Error("User not found");
    if (user.role === "owner") throw new Error("Cannot delete owner");
    await Profile.destroy({ where: { userId: id } });
    await user.destroy();
    return true;
  }
}

module.exports = new UserService();
