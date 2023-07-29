const express = require("express");
const fetchuser = require("../middleware/fetchuser");  //  includeing fetchuser meddleware 
const Notes = require("../modul/Notes");   // imort User shcmas 
const { body, validationResult } = require("express-validator");; // add express-validator 
// import router 
const router = express.Router();


// get all the notes :GET "/api/note/fetchnotes" . LOGIN require auth 
router.get('/fetchnotes', fetchuser, async (req, res) => {
    try {
        
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);

    } catch (error) {
        res.status(500).send("Internal server Error ");

    }
})

// add a new note:POST "/api/note/addnote" . LOGIN require auth 
router.post('/addnote', fetchuser, [
    body('title', 'Enter a vlaid title').isLength({ min: 3 }),
    body('description', 'Enter a vlaid description').isLength({ min: 5 })
], async (req, res) => {
    const { title, description, tag } = req.body;
    const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ error: err.array() });
    }
    try {

        // 1]add a note on db
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const notes = await note.save();

        res.json(notes);

    } catch (error) {
        res.status(500).send("Internal server Error ");
        // res.status(500).send(error);

    }
})

//  Update a  note:PUT "/api/note/updatenote" . LOGIN require auth 
router.put("/updatenote/:id", fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        //1] create new note object
        const newNote = {};
        if (title) {
            newNote.title = title;
        }
        if (description) {
            newNote.description = description;
        }
        if (tag) {
            newNote.tag = tag;
        }
        console.log(newNote);

        //2] cheack not exist or not 
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not found");
        }

        // 3] cheack that users logding user or not 
        if (note.user.toString() !== req.user.id) {
            return res.status(404).send("Not Allowed");
        }

        //4] find the note to be update and update
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json(note);

    } catch (error) {
        res.status(500).send("Internal server Error ");
        // res.status(500).send(error);
    }
})

//  Delet a  note:DETETE "/api/note/deletenote" . LOGIN require auth 
router.delete("/deletenote/:id", fetchuser, async (req,res) => {
    try {

        //1] cheack user or not exist or not 
        let note = await Notes.findById(req.params.id);      
        if (!note) {
            return res.status(404).send("Not found");
        }

        // 3] cheack that users logding user or not // cheack getuser or logding use match  
        if (note.user.toString() !== req.user.id) {
            return res.status(404).send("Not Allowed");
        }

        //4] find the note to be delete and delete
        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({"success":"Your not is usccessfully deleted",note:note});

    } catch (error) {
        res.status(500).send("Internal server Error ");
        // res.status(500).send(error);
    }
})
module.exports = router;
