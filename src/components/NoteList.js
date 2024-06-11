import React from "react";
import Note from "./Note";

const NoteList = ({ notes, onEdit, onPin, onDelete }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id}>
          <Note note={note} onEdit={onEdit} onPin={onPin} />
          <button className="delete" onClick={() => onDelete(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
