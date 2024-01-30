const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')


const Product = require('./models/product');
// So far we have had models defined in index.js file. But lets be practical. In any project that we will be working in the future, it won't be the case. So we are defining it in a separate file placed under a folder named 'products' and importing it to index.js.
// Also, we have another file called seeds.js that contains the actual data with which we will be working.

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

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    // So products/new will allow the user to enter the profuct details in the input field. But it is not going to automatically create the data in the databse right? So we will get the data and pass it to the new instance of our object which is done withe code new Product(req.body)
    // Ideally we will not do this. Because the body might contain some other detail that we don't want. So we will destructure and pass only the required data. Then We have consider error handling among others.   
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
    // This line of code is very important. Without this line, our webpage will show the product that we have saved. Now when we reload, a post request will be sent again and again. To avoid this, we will place the newly created product under redirect method so that when the user reloads the page, rather than sending the post request again and again, they will be redirected to the same newly created content. 
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


