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
    ]
});

// DELETE ALL ASSOCIATED PRODUCTS AFTER A FARM IS DELETED
// We are using mongoose post middleware here 
farmSchema.post('findOneAndDelete', async function (farm) {
    // When 'findOneAndDelete' is triggered, async() will be executed. To write this code, we have require product. Don't forget that.
    if (farm.products.length) {
        // Checking if there are any products available under farm 
        const res = await Product.deleteMany({ _id: { $in: farm.products } })
        // We know the products id is associated with famr with help of reference (type: Schema.Types.ObjectId,). Now if the product id is present in farm.products, it will be deleted.
        console.log(res);
    }
})

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;

// Understanding deletion
// Express vs Mongoose middleware functions
    // Express middleware functions are used to handle and process HTTP requests and responses in your Express application1. They have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle1. The next middleware function is commonly denoted by a variable named next1.
    // On the other hand, Mongoose middleware, also known as pre and post hooks, are functions that intercept the execution of asynchronous operations in Mongoose2. They are a way to add custom logic before or after various actions on your MongoDB data2. For example, you might use Mongoose middleware to hash a password before saving it to the database
// Types of middlewares in Mongoose.
    // 1. Document Middleware: Document middleware is specific to individual documents (instances of a model). It's triggered during actions like `save`, `validate`, `remove`, `updateOne`, and `deleteOne`¹. For example, you might use document middleware to perform some custom logic before saving a document.

        // const mongoose = require('mongoose');
        // const userSchema = new mongoose.Schema({ name: String });

        // userSchema.pre('save', function(next) {
        //   // Custom logic before saving
        //   next();
        // });

    // 2. Model Middleware: Model middleware operates on entire collections of documents. It's triggered during actions like `insertMany`. For instance, you could use model middleware to perform some action before inserting multiple documents.

        // const mongoose = require('mongoose');
        // const bookSchema = new mongoose.Schema({ title: String });

        // bookSchema.pre('insertMany', function(next) {
        //   // Custom logic before inserting multiple documents
        //   next();
        // });

    // 3. Aggregate Middleware: Aggregate middleware is for operations performed using `MyModel.aggregate()`. It allows you to modify aggregation pipelines. For example, you might use aggregate middleware to add a `$match` stage to every aggregation pipeline.

        // const mongoose = require('mongoose');
        // const productSchema = new mongoose.Schema({ name: String, price: Number });

        // productSchema.pre('aggregate', function() {
        //   // Modify the aggregation pipeline
        //   this.pipeline().unshift({ $match: { price: { $gt: 0 } } });
        // });

    // 4. Query Middleware: Query middleware lets you modify queries before or after they are executed. It's triggered during actions like `find`, `findOne`, `update`, and `remove`. For instance, you could use query middleware to perform some custom logic before executing a `find` query. With respect to our case, deletion comes under query middlware. 

        // const mongoose = require('mongoose');
        // const articleSchema = new mongoose.Schema({ title: String, content: String });

        // articleSchema.pre('find', function() {
        //   // Custom logic before executing a find query
        // });

// In all these cases, "pre" hooks run before the main action, and "post" hooks run after the main action. They allow you to add custom logic before or after various actions on your MongoDB data.

// IMPORTNAT NOTE:
// When will each of the middlware will be triggered is not easy not memorize. For an example, we have used 'findByIdAndDelete' to delete the farm. But we dont have any middleware that will be triggered when 'findByIdAndDelete' is executed. 
// But when you look at the docs, we can see that when 'findByIdAndDelete' is executed, 'findOneAndDelete' is triggered. 