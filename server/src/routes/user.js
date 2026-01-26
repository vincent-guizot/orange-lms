const express = require("express");
const router = express.Router();

// GET
router.get("/", (req, res) => res.send("Get all users"));
router.get("/:id", (req, res) => res.send("Get user by id"));

// POST
router.post("/", (req, res) => res.send("Create user"));

// PUT
router.put("/:id", (req, res) => res.send("Update user"));

// DELETE
router.delete("/:id", (req, res) => res.send("Delete user"));

module.exports = router;
