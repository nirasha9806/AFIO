const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categoryType: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 2
  },
}, {
  timestamps: true,
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;