const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestStatusSchema = mongoose.Schema({
    Did: {
        type: String
    },

    Iemail: {
        type: String
    }

},{ timesamps: true})

const RequestStatus = mongoose.model('RequestStatus', requestStatusSchema);

module.exports = {RequestStatus}