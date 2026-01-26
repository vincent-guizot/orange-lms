const express = require("express");
const router = express.Router();

// GET
router.get("/", (req, res) => res.send("Get all tasks"));
router.get("/:id", (req, res) => res.send("Get task by id"));

// POST
router.post("/", (req, res) => res.send("Create task"));

// PUT
router.put("/:id", (req, res) => res.send("Update task"));

// DELETE
router.delete("/:id", (req, res) => res.send("Delete task"));

module.exports = router;
