const mongoose = require('mongoose');
const TopicsSchema = require('./TopicsSchema');

const HTMLTOPICS = mongoose.model('htmltopic', TopicsSchema);
module.exports = HTMLTOPICS;