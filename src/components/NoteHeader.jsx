
function NoteHeader({ notes,sort,onSort }) {
  return (
    <div className="note-header">
      <h2>My Notes({notes.length})</h2>
      <select value={sort} onChange={onSort}>
        <option value="latest">Sort Based On Latest Notes</option>
        <option value="earliest">Sort Based On Earliest Notes</option>
        <option value="completed">Sort Based On Completed Notes</option>
      </select>
    </div>
  );
}

export default NoteHeader;
