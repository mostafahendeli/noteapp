function NoteList({ notes, onDelete, onChecked, sort }) {
  let sortedNote = [];
  if (sort === "latest")
    sortedNote = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  if (sort === "earliest")
    sortedNote = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  if (sort === "completed")
    sortedNote = [...notes].sort(
      (a, b) => Number(a.isCompleted) - Number(b.isCompleted)
    );

  return (
    <div className="note-list">
      {sortedNote.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onChecked={onChecked}
        />
      ))}
    </div>
  );
}

export default NoteList;
function NoteItem({ note, onDelete, onChecked }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className={`note-item ${note.isCompleted ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.desc}</p>
        </div>
        <div className="actions">
          <div className="trash" onClick={() => onDelete(note.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
          <input type="checkbox" id={note.id} onChange={onChecked} />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
