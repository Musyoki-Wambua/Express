//get all notes
//@route GET/api/notes
const getNotes = (req, res) => {
    res.status(200).json({ message: "here are all the notes" });
  };
  
  //get a notes
  //@route GET/api/notes/:id
  const getNote = (req, res) => {
    res.status(200).json({ message: `get note for ${req.params.id}` });
  };
  
  //create or post a notes
  //@route POST/api/notes
  const createNote = (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
      res.status(400);
      throw new Error("All fields are required!");
    }
    console.log(req.body);
  res.status(200).json({ message: "Create a note" });
};

  
  //update a note
  //@route PUT/api/notes/:id
  const updateNote = (req, res) => {
    res.status(200).json({ message: `update note ${req.params.id}` });
  };
  
  //delete a note
  //@route DELETE/api/notes/:id
  const deleteNote = (req, res) => {
    res.status(200).json({ message: `delete note ${req.params.id}` });
  };
  
  module.exports = { getNotes, getNote, createNote, updateNote, deleteNote };
  