import React, { useContext, useEffect, useRef,useState } from 'react'
import noteContecxt from '../Context/notes/noteCotext';
import Notitems from './Notitems';
import AddNote from './AddNote';

const Note = () => {
    const context = useContext(noteContecxt);
    const { notes, getAllNotes,editeNote } = context;
    useEffect(() => {
        if(localStorage.getItem('token')){

            // Aa function only run karu se teno kai bijo use nathi 
            getAllNotes();
        }else{
            window.location.href = './Login.js';
        }
    }, [])
    const [note, setNotes] = useState({ id:"", etitle: "", edescription: "", etag: "" })
    const updatenote = (currentnote) => {
        reff.current.click();

        setNotes({id:currentnote._id, etitle: currentnote.title, edescription : currentnote.description,etag: currentnote.tag})
    }
    const reff = useRef(null)
    const closeref = useRef(null)

    const handleClick = (e) => {
        e.preventDefault();
        editeNote(note.id,note.etitle,note.edescription,note.etag)
        closeref.current.click();
        console.log("Handele ling note")
    }
    const onChang = (e) => {
        setNotes({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <AddNote />
            <button type="button" ref={reff} className="btn btn-primary d-none"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle"  value={note.etitle} onChange={onChang} minLength={5} required/>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Descripiton</label>
                                    <input type="text" className="form-control" id="edescription" name='edescription' onChange={onChang} value={note.edescription} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">tag</label>
                                    <input type="text" className="form-control" id="etag" name='etag' onChange={onChang} value={note.etag}  />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeref}>Close</button>
                            <button type="button"  disabled={note.etitle.length < 5 || note.edescription.length<5}  className="btn btn-primary"  onClick={handleClick} >Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <h2>Your Note</h2>
                <div className="container">
                    {notes.length === 0  && "Not exist any notes"}
                </div>
                {notes.map((note) => {
                    return <Notitems key={note._id} notes={note} updatenote={updatenote} />
                })}
            </div>
        </>
    )
}

export default Note
