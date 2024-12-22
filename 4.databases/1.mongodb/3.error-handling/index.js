const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const AppError = require('./AppError');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand2')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

const categories = ['fruit', 'vegetable', 'dairy'];

// 2. Error handling for asynchronous functions
// For async function, we handle error using try-catch block.
// But when you look at the separation of concerns principle, that code will look a lot messier. The job of a particular route should be to render/send a response based on which route is accessed rather than handling an error. 
// To overcome this we wrap the async() into another function (Conventionally called as wrapAsync).
// So when you reach a particular middleware, the first execution happens in wrapAsync. Think of it like a BODMAS principle. The function call within the paranthesis gets executed first. Now wrapAsync will return a normal function which wraps the asycn function call. 
// Now when a route is accessed, the normal function will be called. 
    // Mind you async function is a function call and not a function declaration. 
    // When normal function is called, the async function is executed.
    // For better clarity, this is the order of operation
        // 1. wrapAsync is called, which returns a function
        // 2. A route is accessed
        // 3. The returned function is called
        // 4. async function is executed
// We know that async returns a promise. Here we dont care about resolving the promise. Because If the async function executes successfully, it sends a response or renders a page, ending the middleware execution. But when the promise is rejected, we catch that using a catch block and send it to the error handling middlware.   
// WrapAsync is an higher order function as we are accepting a function and returning a function.  
// IMPORTANT QUESTION: Why the wrapAsync need to return a function rather than directly returning the async call as below?
                        // function wrapAsync(fn) {
                        //     return fn(req, res, next).catch(e => next(e))
                        // }
    // Because Express middleware functions are expected to have the signature (req, res, next).
    // When you return a function from wrapAsync, you ensure that this returned function conforms to the middleware signature (req, res, next):
    // The above code attempts to execute fn immediately, which is not what we want. fn should be executed only when the route is accessed, not when wrapAsync is defined.
    // So when you simply return fn(req, res, next), the resultant value will be a promise that is certainly not going to match the signature. But on the other hand when you place it under a function(req, res, next), it matches the signature.
// The wrapAsync function is typically used to streamline error handling for asynchronous operations in MongoDB API development. It allows you to avoid repeating try-catch blocks by catching any errors that occur in async functions and passing them to a centralized error handler (like next(err) in Express).
// However, if you need to handle errors for specific use cases (e.g., handling a specific database error or validation failure differently), you can still include individual catch blocks to address those cases before passing the error along to the general handler. This approach gives you flexibility for both general and specific error handling.

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}

app.get('/products', wrapAsync(async (req, res, next) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
}))

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

app.post('/products', wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
}))

app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    if (!product) {
        throw new AppError('Product Not Found', 404);
    }
    res.render('products/show', { product })
}))

app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError('Product Not Found', 404);
    }
    res.render('products/edit', { product, categories })
}))

app.put('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
}))

app.delete('/products/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
}));

const handleValidationErr = err => {
    console.dir(err);
    //In a real app, we would do a lot more here...
    return new AppError(`Validation Failed...${err.message}`, 400)
}

app.use((err, req, res, next) => {
    console.log(err.name);
    //We can single out particular types of Mongoose Errors:
    // These errors have in-built name property. We can make use of that
    if (err.name === 'ValidationError') err = handleValidationErr(err)
    next(err);
})
// Following is the error message on the web page for submitting with empty fields
// Validation Failed...Product validation failed: name: name cannot be blank, price: Path `price` is required.

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})


