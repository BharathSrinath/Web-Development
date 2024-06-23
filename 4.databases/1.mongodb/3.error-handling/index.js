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
// Why do we need this separate type of error handling? Why can't use the same approach that we use for synchronous error handling be used here?
    // When you have an asynchronous function that you’re using as a route handler, you can’t just throw an error in the traditional way because the error won’t be caught by your error-handling middleware.
    // See async returns a promise. So we should be definitely handling the rejection of the promise. To handle a promise we can use try and block and that is exactly what we have done here with a touch of customisation.
    // See before the error is passed the function  
// We can wrap the asnyc function with try and catch. Infact that is what we have done. But rather than wrapping every function with try and catch we have created a custom function called wrapAsync() and passed the entire aysnc() to it. 
// If an error is thrown inside the asynchronous function, it gets passed to the next function, which then passes it to your error-handling middleware. 
// We are accepting a function and returning a function. I hope you remember name of the funciton when it can accept/return a functional argument. Yes you got it right! It is know as higher order functions.  

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

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})


