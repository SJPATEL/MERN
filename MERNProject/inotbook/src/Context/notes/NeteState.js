
import NoteContecxt from "./noteCotext";
import { useState } from "react";

const NoteState = (props) => {

  // set alert 
  const [alert,setAlert] = useState({ type: '', message: ''});
  const showAlert = (type,msg)=>{
    setAlert({
      type : type,
      message : msg
    })
    setTimeout(() => {
      setAlert({type: '', message: ''})
    }, 4000);
  }

  const host = "http://localhost:5000";
  const notesIntalize = [];
  const [notes, setNotes] = useState(notesIntalize)

  const getAllNotes = async () => {
    // TOOO: API CLALL 
    try {
      const response = await fetch(`${host}/api/note/fetchnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      // console.log(json);
  
      setNotes(json)
      
    } catch (error) {
      
    }


  }

  // Add a Note 
  const addNote = async (title, description, tag) => {
    // TOOO: API CLALL 
    const response = await fetch(`${host}/api/note/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const note = await response.json();
    setNotes(notes.concat(note))
    showAlert('success', 'Your not successfully add');
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // fetch api 
    const response = await fetch(`${host}/api/note/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });

    // match all note id != currunt(deletenot) not id  that not show 
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
    showAlert('success', 'delete proccess successfully complete');
  }

  // Edit a Note
  const editeNote = async (id, title, description, tag) => {
    // API CALL 
    const response = await fetch(`${host}/api/note/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();
    const newNote =JSON.parse(JSON.stringify(notes));
    // console.log(newNote);
    
    // Login to edite notes 
    for (let index = 0; index < newNote.length; index++) {
      // const element = notes[index];
      
      if (newNote[index]._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
      
    }
    showAlert('success', 'Not update proccess successfully complete');
    setNotes(newNote)

  }

  return (
    <NoteContecxt.Provider value={{ notes, addNote, deleteNote, editeNote, getAllNotes,showAlert,alert }}>
      {props.children}
    </NoteContecxt.Provider>
  )

}

export default NoteState;