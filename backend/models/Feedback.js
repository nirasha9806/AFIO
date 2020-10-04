const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = mongoose.Schema({
    Comment: {
        type: String
    },
    cusId: {
        type: String
    }

},{ timesamps: true})

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = {Feedback}