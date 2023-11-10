const Note = require("../model/notesModel");

//get all notes
//@route GET/api/notes

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: "an error occurred" });
  }
};

//get a note
//@route GET/api/notes/:id
const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).json({ error: "note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: "an error occurred" });
  }
};


//create or post a notes
//@route POST/api/notes

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      res.status(400).json({ error: "all fields are required" });
    }
    const note = await Note.create({ title, content });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: "Error occurred when creating a note" });
  }
};



//update a note
//@route PUT/api/notes/:id
const updateNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!note) {
      res.status(404).json({ error: "note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: "an error occurred" });
  }
};

//delete a note
//@route DELETE/api/notes/:id
const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      res.status(404).json({ error: "note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: "an error occurred" });
  }
};

module.exports = { getNotes, getNote, createNote, updateNote, deleteNote };
