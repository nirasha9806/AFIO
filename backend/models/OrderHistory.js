const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderHistorySchema = mongoose.Schema({
    DeliveryId: {
        type:String
    },

    name: {
        type: String
    },

    CId:{
        type: String
    },

    email: {
        type: String
    },

    phone: {
        type: String
    },

    city: {
        type: String
    }

},{ timesamps: true})

const OrderHistory = mongoose.model('OrderHistory', orderHistorySchema);

module.exports = {OrderHistory}