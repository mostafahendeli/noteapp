import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
function App() {
  const [notes, setNotes] = useState([]);
  const [sort, setSort] = useState("latest");
  const handleAddNewNote = (newNote) => {
    setNotes((prev) => [...prev, newNote]);
  };
  const handleDelNote = (id) => {
    const filteredNote = notes.filter((n) => n.id !== id);
    setNotes(filteredNote);
  };
  const handleCheck = (e) => {
    const id = Number(e.target.id);
    const newNote = notes.map((n) =>
      n.id === id ? { ...n, isCompleted: !n.isCompleted } : n
    );
    setNotes(newNote);
  };
  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sort}
        onSort={(e) => setSort(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNewNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            sort={sort}
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
