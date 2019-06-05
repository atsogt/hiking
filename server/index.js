require("dotenv").config();
const express = require("express");
const massive = require("massive");
const app = express();
const PORT = 4588;

const cc = require("./controller");

app.use(express.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Database Connected");
  })
  .catch(err => {
    err;
  });

// REGISTER
app.post("/api/hello", cc.registerUser);

// NOTES SECTION

// READ (NOTES)
app.get("/api/notes", cc.readNotes);

// CREATE (NOTES)
app.post("/api/notes", cc.addToNotes);

// UPDATE
app.put("/api/notes/:id", cc.updateNotes);

// ALTER
app.post("/api/alter", cc.alterTable);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
