const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const creditSchema = mongoose.Schema({
    cname: {
        type: String
    },

    email: {
        type: String
    },

    month: {
        type: String
    },

   year: {
        type: String
    },

    pin_number: {
        type: String
    },

    CVC: {
        type: String
    },

    cardName:{
        type: String
    },

    baddress:{
        type: String
    }

},{ timesamps: true})

const Credit = mongoose.model('Credit', creditSchema);

module.exports = {Credit}

