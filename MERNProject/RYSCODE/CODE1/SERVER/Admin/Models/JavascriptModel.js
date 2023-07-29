const mongoose = require('mongoose');
const TopicsSchema = require('./TopicsSchema');

const JAVASCRIPTTOPICS = mongoose.model('javascripttopic', TopicsSchema);
module.exports = JAVASCRIPTTOPICS;