const express = require("express");
const router = express.Router();
const { ClassController } = require("../controllers");

/**
 * Classes
 */
router.get("/", ClassController.getAll);
router.post("/", ClassController.create);
router.get("/:id", ClassController.getById);
router.put("/:id", ClassController.update);
router.delete("/:id", ClassController.delete);

/**
 * Class ↔ User (class_users pivot)
 */
router.post("/:id/enroll", ClassController.enrollUser); // mentee join
router.post("/:id/assign-mentor", ClassController.assignMentor);

router.get("/:id/users", ClassController.getUsers);
router.get("/:id/mentees", ClassController.getMentees);
router.get("/:id/mentor", ClassController.getMentor);

module.exports = router;
