import { useState, useEffect } from "react";
import './App.css';
import api from './services/api';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    api.post("/",newNote)
    .then(() =>  setNotes( [...notes, newNote]))
    .catch(error => console.log(error))
  }
  
  const deleteNote = (id) => {
    api.delete(`/${id}`)
    .then(()=> setNotes(notes.filter((noteItem) => {
            return noteItem.id !== id})))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    api.get("/")
    .then(res => setNotes(res.data))
    .catch(error => console.log(error))
  },[])

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => {
        return (
          <Note
            key={noteItem.id}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
