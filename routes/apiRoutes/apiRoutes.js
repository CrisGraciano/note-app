const router = require("express").Router();
const fs = require('fs');

router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json')); 
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})

module.exports = router;