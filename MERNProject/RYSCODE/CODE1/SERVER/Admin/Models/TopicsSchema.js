const mongoose = require('mongoose');

const TopicsStore = new mongoose.Schema({
    title:{
        type: String ,
        require : true
    }, 
    topic:{
        type: String ,
        require: true
    },
    desccode: {
        type: Array,
        require: true
    },
    imgdesc: {
        type: Array,
        require: true
    },
    vediodesc: { 
        type: Array,
        require: true
    },
    keyword: {
        type: String ,
        require: true
    },
    qusans : [
        {
            questions:{
                type: String ,
                require: true
            },
            answer:{
                type: Array ,
                require: true
            }
        }
    ]
})


module.exports = TopicsStore;
