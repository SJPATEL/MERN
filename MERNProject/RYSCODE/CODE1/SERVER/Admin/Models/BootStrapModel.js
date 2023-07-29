const mongoose = require('mongoose');
const TopicsSchema = require('./TopicsSchema');

const BOOTSTRAPTOPICS = mongoose.model('bootstraptopic', TopicsSchema);
module.exports = BOOTSTRAPTOPICS;