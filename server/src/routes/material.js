const express = require("express");
const router = express.Router();

// GET
router.get("/", (req, res) => res.send("Get all materials"));
router.get("/:id", (req, res) => res.send("Get material by id"));

// POST
router.post("/", (req, res) => res.send("Create material"));

// PUT
router.put("/:id", (req, res) => res.send("Update material"));

// DELETE
router.delete("/:id", (req, res) => res.send("Delete material"));

module.exports = router;
