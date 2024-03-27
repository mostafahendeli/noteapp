import { useState } from "react";

function AddNewNote({onAddNote }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return null;
    const newNote = {
      id: Date.now(),
      title,
      desc,
      createdAt: new Date().toISOString(),
      isCompleted: false,
    };
    onAddNote(newNote);
    setTitle("");
    setDesc("");
  };
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-field"
          type="text"
          placeholder="Enter Title..."
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="text-field"
          type="text"
          placeholder="Enter Description..."
        />
        <button className="btn btn--primary" type="submit">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
