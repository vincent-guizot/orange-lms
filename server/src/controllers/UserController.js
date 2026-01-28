const { userService, profileService } = require("../services");

class UserController {
  static async register(req, res, next) {
    try {
      const { email, password, role, name } = req.body;

      const user = await userService.create({ email, password, role, name });
      const profile = await profileService.create({ userId: user.id });

      res
        .status(201)
        .json({ message: "User registered", data: { user, profile } });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const result = await userService.login(email, password);
      res.json({ message: "Login success", data: result });
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const users = await userService.findAll();
      res.json(users);
    } catch (err) {
      next(err);
    }
  }

  static async getById(req, res, next) {
    try {
      const user = await userService.findById(req.params.id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    try {
      const user = await userService.create(req.body);
      const profile = await profileService.create({ userId: user.id });
      res.status(201).json({ user, profile });
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const updatedUser = await userService.update(
        req.params.id,
        req.body,
        req.user,
      );
      res.json(updatedUser);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      await userService.delete(req.params.id, req.user);
      res.json({ message: "User deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
