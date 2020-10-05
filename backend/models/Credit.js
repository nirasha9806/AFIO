const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = mongoose.Schema({
    cname: {
        type: String
    },

    cardType: {
        type: String
    },
    bankname: {
        type: String
    },

    CVC: {
        type: String
    },

    expiry: {
        type: String
    },
    pin_number: {
        type: String
    },

   
    cardName:{
        type: String
    }
},{ timesamps: true})

const Card = mongoose.model('Card', cardSchema);

module.exports = {Card}