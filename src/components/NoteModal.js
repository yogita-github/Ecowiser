import React, { useState, useEffect } from "react";
import "../App.css";

const NoteModal = ({ note, onClose, onSave }) => {
  const [title, setTitle] = useState(note.title);
  const [tagline, setTagline] = useState(note.tagline);
  const [body, setBody] = useState(note.body);

  useEffect(() => {
    setTitle(note.title);
    setTagline(note.tagline);
    setBody(note.body);
  }, [note]);

  const handleSave = () => {
    onSave({ ...note, title, tagline, body });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />
        <textarea
          className="note-textarea"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button className="save" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default NoteModal;
