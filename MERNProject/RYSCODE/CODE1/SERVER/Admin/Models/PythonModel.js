const mongoose = require('mongoose');
const TopicsSchema = require('./TopicsSchema');

const PYTHONTOPICS = mongoose.model('pythontopic', TopicsSchema);
module.exports = PYTHONTOPICS;