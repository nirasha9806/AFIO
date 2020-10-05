const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = mongoose.Schema({

   writer:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    categoryID:{
        type: String,
        maxlength: 5
    },
    categoryName:{  
        type: String
    },
    categoryType:{
        type: String,
        // default: 1
    },
    description:{
        type: String
    },
subCategoryType:{
        type: Array,
        default: { val: [] }
    },
    images:{
        type: Array,
        default: []
    }
    
}, {timestamps: true})

const Category = mongoose.model('Category', categorySchema);

module.exports = { Category }
