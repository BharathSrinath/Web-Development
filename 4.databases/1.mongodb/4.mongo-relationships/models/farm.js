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

// Understanding deletion
// Express vs Mongoose middleware functions
    // Express middleware functions are used to handle and process HTTP requests and responses in your Express application. They have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
    // On the other hand, Mongoose middleware, also known as pre and post hooks, are functions that intercept the execution of asynchronous operations in Mongoose. They are a way to add custom logic before or after various actions on your MongoDB data. For example, you might use Mongoose middleware to hash a password before saving it to the database
// Types of middlewares in Mongoose.
    // 1. Document Middleware: Document middleware is specific to individual documents (instances of a model). It's triggered during actions like `save`, `validate`, `remove`, `updateOne`, and `deleteOne`. For example, you might use document middleware to perform some custom logic before saving a document.

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

    // 4. Query Middleware: Query middleware lets you modify queries before or after they are executed. It's triggered during actions like `find`, `findOne`, `update`, and `remove`. For instance, you could use query middleware to perform some custom logic before executing a `find` query. With respect to our case, deletion comes under query middleware. 

        // const mongoose = require('mongoose');
        // const articleSchema = new mongoose.Schema({ title: String, content: String });

        // articleSchema.pre('find', function() {
        //   // Custom logic before executing a find query
        // });

// In all these cases, "pre" hooks run before the main action, and "post" hooks run after the main action. They allow you to add custom logic before or after various actions on your MongoDB data.

// IMPORTANT NOTE:
// Memorizing which middleware will be triggered for each Mongoose operation can be challenging.
// For example, using 'findByIdAndDelete' to delete a farm does not directly trigger a middleware named 'findByIdAndDelete'.
// Instead, 'findOneAndDelete' middleware is triggered when 'findByIdAndDelete' is executed.
// Therefore, it's crucial to refer to the Mongoose documentation to understand which middleware operations are triggered by specific CRUD operations.
// REMEMBER: The name of the Mongoose operation used for CRUD (e.g., 'findByIdAndDelete') might differ from the middleware name that needs to be used for pre/post hooks (e.g., 'findOneAndDelete').
