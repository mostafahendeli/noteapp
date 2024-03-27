import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const handleAddNewNote = (newNote) => {
    setNotes((prev) => [...prev, newNote]);
  };
  const handleDelNote = (id) => {
    const filteredNote = notes.filter((n) => n.id !== id);
    setNotes(filteredNote);
  };
  const handleCheck = (e) => {
    console.log(e.target.id);
    const id = Number(e.target.id);
    const newNote = notes.map((n) =>
      n.id === id ? { ...n, isCompleted: !n.isCompleted } : n
    );
    setNotes(newNote)
  };
  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNewNote} />
        <div className="note-container">
          <NoteList
            notes={notes}
            onDelete={handleDelNote}
            onChecked={handleCheck}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
