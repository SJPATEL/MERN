const { default: mongoose } = require("mongoose");

// create modale 
const noteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref :'user'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: "General"
    }

})

// create collection 
module.exports = mongoose.model('notes', noteSchema);

