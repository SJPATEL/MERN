const mongoose = require('mongoose');
const TopicsSchema = require('./TopicsSchema');

const CSSTOPICS = mongoose.model('csstopic', TopicsSchema);
module.exports = CSSTOPICS;