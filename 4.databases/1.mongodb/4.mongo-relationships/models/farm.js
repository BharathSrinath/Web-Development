const mongoose = require('mongoose');
const Product = require('./product');
const { Schema } = mongoose;

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name!']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email required']
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
        // This represents one to many relationship  
    ]
});

// DELETE ALL ASSOCIATED PRODUCTS AFTER A FARM IS DELETED
// We are using mongoose post middleware here 
farmSchema.post('findOneAndDelete', async function (farm) {
    // When 'findOneAndDelete' is triggered (actually when 'findByIdAndDelete' is triggered), async() will be executed (more on that at the end). To write this code, we have to require the product. Don't forget that.
    // Also, we can see that async function has access to farm that was deleted. Kindly look at the syntax. A post middleware will have access to 'next' and 'result'. Here farm is a result of the action performed by 'findOneAndDelete'.
    if (farm.products.length) {
        // Checking if there are any products available under farm 
        const res = await Product.deleteMany({ _id: { $in: farm.products } })
        // We know the products id is associated with farm with help of reference (type: Schema.Types.ObjectId,). Now if the product id is present in farm.products, it will be deleted.
        console.log(res);
    }
})

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;
