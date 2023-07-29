const mongoose = require('mongoose');
const TopicsSchema = require('./TopicsSchema');

const PHPTOPICS = mongoose.model('phptopic', TopicsSchema);
module.exports = PHPTOPICS;