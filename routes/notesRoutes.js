const express = require("express");
const path = require("path");
const notesController = require("../controllers/notesController");

const router = express.Router();

router.get("/notes", notesController.getAllNotes);

router.post("/notes", notesController.addNewNote);

module.exports = router;
