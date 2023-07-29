const mongooes = require('mongoose');


const USERSCHEMA = new mongooes.Schema({
    name: {  
        type: String,
        require : true
       
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    contact: {
        type: Number,
        require: true
    },
    date: {
        type: Date, 
        default: Date.now
    },
    messages: [
        {
            message: {
                type: String,
                require: true
            }
        }
    ]
})

USERSCHEMA.methods.addMessage = async function (message) {
    try {
        this.messages = this.messages.concat({ message });
        await this.save();
        return this.messages;
    } catch (error) {
        return res.status(400).json({ error: "Not add message  !", success })
    }
}

const USER = mongooes.model('user', USERSCHEMA);

module.exports = USER;