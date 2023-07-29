const { default: mongoose } = require("mongoose");

// create modale 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already present"],
    },
    password: {
        type: String,
        required: true,

    },
    date: {
        type: Date,
        default: Date.now
    }

})

// create collection 
module.exports = mongoose.model('user',userSchema);

