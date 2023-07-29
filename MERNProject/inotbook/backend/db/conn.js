const { default: mongoose } = require("mongoose");


mongoose.connect('mongodb://127.0.0.1:27017/pro1')
    .then(() => console.log('Connected!'))
    .catch((err) => console.log(err));