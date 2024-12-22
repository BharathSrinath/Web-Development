const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
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

// If you dont understand this code immediately, please look for below explanation
app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
})

// In show.ejs (which displays an individual product detail) we have added a feature.
    // It will display product name and category type as the basic details.
// Now when the category type is clicked (fruit/vegetable/milk), it will display all the products that belongs to that category. 
// We are rendering the product page in both occassions. 
    // When the category is All, '/products' is rendered 
    // When the category is fruit, '/products?category=fruit' will be rendered 
// You can think of it like a filter. So which condition will be executed will depend on from where the request comes.
    // When the request from the anchor tag of category type under show.ejs, then the information regarding category will be available. So the if condition will be satisfied.
    // If it comes from anywhere else (directly typing '/products' in the url or clicking all products anchor under show.ejs), category will be null/undefined. 
 

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})
// For some of the routes, the order really matters. '/products/new' cannot come after '/products/:id'. Becuase from '/products/:id' when a new request is made, express matches the pattern and it will treat whatever that comes after 'products/' as id. Hence you will see an error that there is no id called 'new'.

app.post('/products', async (req, res) => {
    const {name, price, category} = req.body;
    const newProduct = new Product({name, price, category});
    // So products/new will allow the user to enter the product details in the input field. But it is not going to automatically create the data in the databse right? So we will get the data and pass it to the new instance of our object.
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
    // This line of code is very important. Why res.redirect or why not res.render?
    // res.render mean you are still in the same url (/products). Now whenever you reload the page you new post request will be sent which will add the products again and again. 
    // To overcome this, after submitting we have to redirect to a different url.
        // Examples that you might have seen in real life: form submission - redirects to a page with message, "thanks for submitting the form"   
    // For all the post requests (put, patch, delete, etc.), we will redirect
})
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})


