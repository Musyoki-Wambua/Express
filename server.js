const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3500;

//Routes 
app.get("/api/notes", (req, res) => {
    res.status(200).json({message: "Here are all the notes"});
});
app.get("/api/notes/:id", (req, res) => {
    res.status(200).json({message: `Get note for ${req.params.id}` });
});
app.post("/api/notes", (req , res) => {
  res.status(200).json({ message : 'Create a note'})
});
app.put("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: `Update note with id of ${req.params.id}` });
});
app.delete("/api/notes/:id", (req ,res) => {
  res.status(200).json({ message:`Delete note ${req.params.id}` });
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});


