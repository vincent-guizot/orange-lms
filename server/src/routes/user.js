const express = require("express");
const router = express.Router();

const { UserController, ProfileController } = require("../controllers");

/**
 * =====================
 * Auth
 * =====================
 */
router.post("/register", UserController.register);
router.post("/login", UserController.login);

/**
 * =====================
 * Users
 * =====================
 */
router.get("/", UserController.getAll);
router.post("/", UserController.create); // admin create user
router.get("/:id", UserController.getById);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

/**
 * =====================
 * User Profile (1:1)
 * =====================
 */
router.get("/:id/profile", ProfileController.getByUser);
router.post("/:id/profile", ProfileController.createOrUpdate);

module.exports = router;
