const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loyaltyCardAddSchema = mongoose.Schema({
    cardType: {
        type: String
    },


    discount: {
        type: String
    },

    
    

},{ timesamps: true})

const LoyaltyCardAdd = mongoose.model('LoyaltyCardAdd', loyaltyCardAddSchema);

module.exports = {LoyaltyCardAdd}