const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loyaltyCardReqSchema = mongoose.Schema({
    name: {
        type: String
    },


    phone: {
        type: String
    },

    type: {
        type: String
    }

    

},{ timesamps: true})

const LoyaltyCardReq = mongoose.model('LoyaltyCardReq', loyaltyCardReqSchema);

module.exports = {LoyaltyCardReq}