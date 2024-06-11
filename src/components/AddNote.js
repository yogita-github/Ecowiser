import React, { useState } from "react";
import "../App.css";

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && tagline.trim() && body.trim()) {
      onAdd({ title, tagline, body });
      setTitle("");
      setTagline("");
      setBody("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className="title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="title"
        type="text"
        placeholder="Tagline"
        value={tagline}
        onChange={(e) => setTagline(e.target.value)}
      />
      <input
        className="title"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></input>
      <button className="add-button" type="submit">Add Note</button>
    </form>
  );
};

export default AddNote;