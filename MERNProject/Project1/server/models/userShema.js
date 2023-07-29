const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');      // tocken
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    work: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cPassword: {
        type: String,
        require: true
    },
    data:{
        type: Date,
        default : Date.now
    },
    messages : [
        {
            message:{
                type: String,
                require: true
            }
        }
    ],
    // tokens after login users 
    tokens: [
        {
            token: {
                type: String,
                require: true
            }
        }
    ]
})

// we are genarating token 
userSchema.methods.genrateAuthToken = async function () {
    try {
        // _id : get login user id in db 
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        // store token in tokens fild in db 
        this.tokens = this.tokens.concat({token : token});
        await this.save();         

        return token;
    } catch (error) {
        console.log(error);
    }
    
}

// we are store messgae 
userSchema.methods.addMessage=  async function (message) {
    try {
        this.messages = this.messages.concat({message});
        await this.save();
        return this.messages;
    } catch (error) {
        console.log(error);
        
    }
}

// create collection 
const User = mongoose.model('USER', userSchema);

module.exports = User;

