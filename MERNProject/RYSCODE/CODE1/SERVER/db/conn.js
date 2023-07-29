const mongoose = require('mongoose');
const CONNSTRING = process.env.CONNSTRING;

mongoose.connect(CONNSTRING).then(()=>{
    console.log('connected');
}).catch(()=>{
    console.log('not connected');
})