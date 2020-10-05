const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: { type: String },
    price: { type: Number },
    discount: { type: Number },
    categoryType: { type: String },
    description: { type: String },
    image: { type: String }

},{
    timestamps: true,
});

const Product = mongoose.model('Product' , productSchema);

module.exports = Product;