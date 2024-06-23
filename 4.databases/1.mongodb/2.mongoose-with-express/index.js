const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')


const Product = require('./models/product');
// So far we have had models defined in index.js file. But lets be practical. In any project that we will be working in the future, it won't be the case. So we are defining it in a separate file placed under a folder named 'products' and importing it to index.js.
// Also, we have another file called seeds.js that contains the initial data with which we will be working.

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
        // Above is shortcut for "category: category"
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
})

// In show.ejs we have the below line that corresponds to the above code.  
{/* <li>Category: <a href="/products?category=<%= product.category%>"><%= product.category%></a></li> */}
// See initially we just had <li>Category: $<%= product.category%></li>
// Now What we are trying to achieve is that when a user clicks a category (which is a link now), we will display the products with that category (So it will basically act as a filter).
// Lets say the category is fruit. When a user clicks that category, we are sending the data to "/products?category=fruit"
// Now with the above get request, we are trying to extract the category and trying to the find the products with that category. If no category matches the list, we are giving category a value called 'All' and find & return all the products.
// Now, in index.ejs file, we will have an if condition to say that if category !== All, we will display the All products link (That is when yoy are in the all products page, that link will not be available, else it will be available)    

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})
// For some of the routes, the order really matters. '/products/new' cannot come after '/products/:id'. Becuase from '/products/:id' when a new request is made, express matches the pattern and it will treat whatver that comes after products/ as id. Hence you will see an error that there is no id called 'new'.

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    // So products/new will allow the user to enter the product details in the input field. But it is not going to automatically create the data in the databse right? So we will get the data and pass it to the new instance of our object which is done withe code new Product(req.body)
    // Ideally we will not do this. Because the body might contain some other detail that we don't want. So we will destructure and pass only the required data. Then We have to consider error handling among others.   
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
    // This line of code is very important. Without this line, our webpage will show the product that we have saved. Now when we reload, a post request will be sent again and again. To avoid this, we will place the newly created product under redirect method so that when the once the product is saved, we will redirect it to a particular where we wanted. (Imagine submittinga form. Generally we will be redirected to a page which says thanks for submitting the application or something of that sort) 
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


