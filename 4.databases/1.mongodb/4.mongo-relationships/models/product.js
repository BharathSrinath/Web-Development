const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    },
    farm: {
        type: Schema.Types.ObjectId,
        ref: 'Farm'
    }
    // This represents many to one relationship
    // We are referring to a farm because, a product can be added only after entering into a farm page.  
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product; 