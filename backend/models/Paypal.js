const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paypalSchema = mongoose.Schema({
    cname: {
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: String
    },
   
    baddress:{
        type: String
    }

},{ timesamps: true})

const Paypal = mongoose.model('Paypal', paypalSchema);

module.exports = {Paypal}