const express = require("express");
const router = express.Router();

// GET
router.get("/", (req, res) => res.send("Get all notes"));
router.get("/:id", (req, res) => res.send("Get note by id"));

// POST
router.post("/", (req, res) => res.send("Create note"));

// PUT
router.put("/:id", (req, res) => res.send("Update note"));

// DELETE
router.delete("/:id", (req, res) => res.send("Delete note"));

module.exports = router;
