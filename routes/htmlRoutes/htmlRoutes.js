// const path = require('path');
// const app = require('express');

// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/notes.html'));
// });

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// module.exports = app;

 module.exports = (app) => {

    // creating routes
    // GET /notes should return the notes.html file.
    app.get('/notes', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
  
    // GET * should return the index.html file.
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    })
  };