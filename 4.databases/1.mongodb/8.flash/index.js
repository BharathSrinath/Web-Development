const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
// npm i connect-flash
// They are used to display temporary messages
    // Example: "You are successfully logged out"

const sessionOptions = { secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false }
app.use(session(sessionOptions));
app.use(flash());
// That's it. No arguments are needed to be passed.
// Now every req object will have access to a property (method) called flash
// In this file we dont have any authentication. Without authentication why do we need sessions? To handle flash. 
// Relationship between flash and sessions.
    // HTTP, the protocol on which web applications are built, is stateless. This means that by default, the server doesn’t remember anything about the client between requests. However, in many applications, you need to maintain state (like user login information) between requests. This is where sessions come in.
    // When a user logs in, the server creates a session with a unique identifier and stores it on the server-side. The server also sends a cookie back to the client, which contains this unique identifier1. For every subsequent request, the browser sends this cookie, and the server uses it to match the request with the session1.
    // Now, flash messages are a way to send one-time messages to the user. They get cleared after being displayed once. If you don’t use sessions while using flash, you won’t have a way to store these messages between requests, and they might not work as expected. Imagine a situation where you set a flash message during one request, but want to display it on a subsequent request (like after a redirect), the server wouldn’t remember the message unless it was stored somewhere.
    // That’s where the session comes in. By storing the flash message in the session, the server can remember it across multiple requests. The message stays in the session until it’s displayed to the user, at which point it’s cleared out. This is why flash messages are often used for things like form validation errors or success messages, which you only want to display once.

const Farm = require('./models/farm')


mongoose.connect('mongodb://localhost:27017/flashDemo', { useNewUrlParser: true, useUnifiedTopology: true })
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

// FARM ROUTES

app.use((req, res, next) => {
    res.locals.messages = req.flash('success');
    // Now every ejs files that is rendered during req-response cycle will have access to it. Depending up on which file wants that messages variable we can make use of that.
    next();
})
// In Express.js, res.locals is an object that holds 'response local variables' specific to the current request. It has a scope limited to the request and is accessible only to the view(s) rendered during that particular request/response cycle

app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms })
    // res.render('farms/index', { farms, messages: req.flash('success') })
    // Step 2: Pass the message to the render page. In render page we have to make use of this wherever we feel appropriate for the message to be displayed.
    // But rather than doing it for every route that requires a success or an error message, we are using an object called res.locals 
})
app.get('/farms/new', (req, res) => {
    res.render('farms/new')
})
app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', { farm })
})

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    req.flash('success', 'Successfully made a new farm!');
    // Step 1: Decide where to use them. We want display the success messgae once the farm has been successfully created. This step alone is not going to display anything. Go to the route where it is going to be redirected.
    res.redirect('/farms')
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})



