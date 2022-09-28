const fs = require('fs');
const path = require('path');

const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();
    app.use(express.urlencoded({ extended: true}));
    app.use(express.json());
    app.use(express.static('public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}!`);
});