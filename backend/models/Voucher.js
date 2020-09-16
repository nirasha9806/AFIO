const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voucherSchema = mongoose.Schema({
    number: {
        type: String
    },

    searchField: {
        type: String
    },

    radio1: {
        type: String
    },

    message: {
        type: String
    },

    note: {
        type: String
    }

},{ timesamps: true})

const Voucher = mongoose.model('Voucher', voucherSchema);

module.exports = {Voucher}