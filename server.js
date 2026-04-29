const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const notes = {};
let nextId = 1;

// POST /notes - create a note
app.post("/notes", (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "title and content are required" });
  }
  const id = String(nextId++);
  const note = { id, title, content, createdAt: new Date().toISOString() };
  notes[id] = note;
  res.status(201).json(note);
});

// GET /notes - get all notes
app.get("/notes", (req, res) => {
  res.json(Object.values(notes));
});

// GET /note/:id - get a note by id
app.get("/note/:id", (req, res) => {
  const note = notes[req.params.id];
  if (!note) return res.status(404).json({ error: "note not found" });
  res.json(note);
});

// PUT /note/:id - update a note
app.put("/note/:id", (req, res) => {
  const note = notes[req.params.id];
  if (!note) return res.status(404).json({ error: "note not found" });
  const { title, content } = req.body;
  if (title !== undefined) note.title = title;
  if (content !== undefined) note.content = content;
  res.json(note);
});

// DELETE /note/:id - delete a note
app.delete("/note/:id", (req, res) => {
  const note = notes[req.params.id];
  if (!note) return res.status(404).json({ error: "note not found" });
  delete notes[req.params.id];
  res.json({ message: "note deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
