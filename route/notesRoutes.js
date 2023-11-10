const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notesController");

router.route("/").get(notesController.getNotes);
router.route("/:id").get(notesController.getNote);
router.route("/").post(notesController.createNote);
router.route("/:id").put(notesController.updateNote);
router.route("/:id").delete(notesController.deleteNote);

module.exports = router;
