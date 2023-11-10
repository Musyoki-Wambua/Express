const express = require("express");
const app = express();
connectDB = require("./config/dbConnection");
require("dotenv").config();
const PORT = process.env.PORT || 3500;



//middleware
app.use(express.json())
app.use("/api/notes", require("./route/notesRoutes"));

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});


