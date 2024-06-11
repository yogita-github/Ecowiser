import React, { useState } from "react";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import NoteModal from "./components/NoteModal";
import Pagination from "./components/Pagination";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
 const [notesPerPage] = useState(6);

  const addNote = ({ title, tagline, body }) => {
    const newNote = { id: Date.now(), title, tagline, body, pinned: false };
    setNotes([...notes, newNote]);
  };

  const editNote = (updatedNote) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };

  const pinNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, pinned: !note.pinned } : note
      )
    );
  };
const deleteNote = (id) => {
  setNotes(notes.filter((note) => note.id !== id));
};
  const openNote = (note) => {
    setSelectedNote(note);
  };

  const closeNote = () => {
    setSelectedNote(null);
  };

  const sortedNotes = notes.sort((a, b) => b.pinned - a.pinned);

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = sortedNotes.slice(indexOfFirstNote, indexOfLastNote);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Note App</h1>
      <AddNote onAdd={addNote} />
      <NoteList
        notes={currentNotes}
        onEdit={openNote}
        onPin={pinNote}
        onDelete={deleteNote}
      />
      {selectedNote && (
        <NoteModal note={selectedNote} onClose={closeNote} onSave={editNote} />
      )}

      <Pagination
        notesPerPage={notesPerPage}
        totalNotes={notes.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;



