const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    productName: {
        type: String
    },

    price:{
        type: String
    },

    discount: {
        type: String
    },

    categoryType:{
      type: String
    },

    description:{
      type: String
    }

},{ timesamps: true})

const Product = mongoose.model('Product', productSchema);

module.exports = {Product}