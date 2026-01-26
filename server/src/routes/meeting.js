const express = require("express");
const router = express.Router();

// GET
router.get("/", (req, res) => res.send("Get all meetings"));
router.get("/:id", (req, res) => res.send("Get meeting by id"));

// POST
router.post("/", (req, res) => res.send("Create meeting"));

// PUT
router.put("/:id", (req, res) => res.send("Update meeting"));

// DELETE
router.delete("/:id", (req, res) => res.send("Delete meeting"));

module.exports = router;
