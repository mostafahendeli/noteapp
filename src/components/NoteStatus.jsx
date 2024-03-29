function NoteStatus({ notes }) {
  const all = notes.length;
  const completed = notes.filter((n) => n.isCompleted).length;
  const uncompleted = all - completed;
  return (
    <div>
      <ul className="note-status">
        <ol>
          All
          <span>{all}</span>
        </ol>
        <ol>
          Completed
          <span>{completed}</span>
        </ol>
        <ol>
          UnCompleted
          <span>{uncompleted}</span>
        </ol>
      </ul>
    </div>
  );
}

export default NoteStatus;
