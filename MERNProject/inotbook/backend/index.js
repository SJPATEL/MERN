const express = require("express");
require("./db/conn")

var cors = require('cors') // enabel cors


const app = express(); 
const port = 5000;

app.use(cors())
app.use(express.json())            // you are use req.body

// Availabe routes 
app.use('/api/auth', require('./routes/auth'));
app.use('/api/note', require('./routes/notes'));



app.listen(port, () => {
    console.log(`connection is success at ${port}`);
});