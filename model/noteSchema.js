const mongoose = require("mongoose");

const notesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please add title"],
    },
    content: {
      type: String,
      required: [true, "please add your notes"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("notes", notesSchema);
