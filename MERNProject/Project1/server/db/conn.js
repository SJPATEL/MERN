const  mongoose  = require("mongoose");
const DB = process.env.DATABASE; // get env file

mongoose.connect(DB).then(() => {       // db connection
    console.log('connection successfull');   
}).catch((err) => {
    console.log("no connection");
});