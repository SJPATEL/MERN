const express = require("express");
var cors = require('cors')  // cros

const dotenv = require("dotenv");  
dotenv.config({path: './config.env'});  // import env file 
require('./db/conn'); // db connection

const app = express(); //use express funciton
const PORT = process.env.PORT;
app.use(cors())

app.use(express.json())

// Availabe routes 
app.use(require('./router/auth'));    // we link the router file 


app.listen(PORT, () => {
    console.log(`connection is success at ${PORT}`);
});