const express = require("express");
const router = express.Router();

//Routes 
router.route("/").get((req, res) => {
    res.status(200).json({message: "Here are all the notes"});
});
router.route("/:id").get((req, res) => {
    res.status(200).json({message: `Get note for ${req.params.id}` });
});
router.route("/").post((req , res) => {
  res.status(200).json({ message : 'Create a note'})
});
router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Update note  ${req.params.id}` });
});
router.route("/:id").delete((req ,res) => {
  res.status(200).json({ message:`Delete note ${req.params.id}` });
});

module.exports = router;