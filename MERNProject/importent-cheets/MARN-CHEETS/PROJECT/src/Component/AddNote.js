import React, { useContext, useState } from 'react'
import noteContecxt from '../Context/notes/noteCotext';

const AddNote = () => {
    const context = useContext(noteContecxt);
    const { addNote } = context;

    const [note, setNotes] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNotes({ title: "", description: "", tag: "" })
    }
    const onChang = (e) => {
        setNotes({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className='container'>
            <div className='my-3'>
                <h2>Add a Note  </h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChang} value={note.title} minLength={5} required/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="Description" className="form-label">Descripiton</label>
                        <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChang} minLength={5} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">tag</label>
                        <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChang} />
                    </div>
                    <button type="submit" disabled={note.title.length < 5 || note.description.length<5} className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>

            </div>
        </div>
    )
}

export default AddNote
