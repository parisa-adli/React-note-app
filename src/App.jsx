import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NotesList from "./components/NotesList";
import NoteStatus from "./components/NoteStatus";
import NotesHeader from "./components/NotesHeader";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    // const filteredNote = notes.filter((n) => n.id !== id);
    // setNotes(filteredNote);
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };

  const handleCompeleteNote = (e) => {
    console.log(e.target.value);
    const nodeId = Number(e.target.value);
    // const newNotes = notes.map((note) =>
    //   note.id === nodeId ? { ...note, complated: !note.complated } : note
    // );
    // setNotes(newNotes);
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === nodeId ? { ...note, complated: !note.complated } : note
      )
    );
  };

  return (
    <div className="cntainer">
      <NotesHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NotesList
            notes={notes}
            onDelete={handleDeleteNote}
            onComplete={handleCompeleteNote}
            sortBy={sortBy}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
