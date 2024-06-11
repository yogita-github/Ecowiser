import React from "react";

const Note = ({ note, onEdit, onPin }) => {
  return (
    <div
      className={`note ${note.pinned ? "pinned" : ""}`}
      onClick={() => onEdit(note)}
    >
      <h2>{note.title}</h2>
      <p>{note.tagline}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPin(note.id);
        }}
      >
        {note.pinned ? "Unpin" : "Pin"}
      </button>
    </div>
  );
};

export default Note;