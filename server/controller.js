const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  console.log("hit");
  console.log(req.body);
  const db = req.app.get("db");

  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const result = await db.signup([username, hash]).catch(err => {
    res.status(400).json("Username already exists");
  });
};

const alterTable = (req, res) => {
  const db = req.app.get("db");
  db.alter().then(skills_4 => res.status(200).json(skills_4));
};

let notes = [];

// READ (NOTES)
const readNotes = (req, res) => {
  res.status(200).json(notes);
};

// CREATE (NOTES)
const addToNotes = (req, res) => {
  req.body.id = notes.length + 1;
  notes.push(req.body);
  res.status(200).json(notes);
};

// UPDATE
const updateNotes = (req, res) => {
  const index = notes.findIndex(note => {
    return note.id === +req.params.id;
  });
  notes[index].note = req.body.newNote;
  res.status(200).json(notes);
};

module.exports = {
  registerUser,
  readNotes,
  addToNotes,
  updateNotes,
  alterTable
};
