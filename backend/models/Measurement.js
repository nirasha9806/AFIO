const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const measurementSchema = mongoose.Schema({
    email: {
        type: String
    },

    size: {
        type: String
    },

    product: {
        type: String
    },

    height: {
        type: String
    },

    waist: {
        type: String
    },

    neck: {
        type: String
    },

    color: {
        type: String
    }
    
},{ timesamps: true})

const Measurement = mongoose.model('Measurement', measurementSchema);

module.exports = {Measurement}