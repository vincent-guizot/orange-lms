const express = require("express");
const router = express.Router();

// GET
router.get("/", (req, res) => res.send("Get all classes"));
router.get("/:id", (req, res) => res.send("Get class by id"));

// POST
router.post("/", (req, res) => res.send("Create class"));

// PUT
router.put("/:id", (req, res) => res.send("Update class"));

// DELETE
router.delete("/:id", (req, res) => res.send("Delete class"));

module.exports = router;
