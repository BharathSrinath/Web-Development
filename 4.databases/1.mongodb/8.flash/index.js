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
// Now every req object will have access to a property (method) called flash
// Syntax: 
    // To set: req.flash(type, message);
    // To retrieve: req.flash(type) where type is optional
        // type: Acts as a key 
        // message: Stored as an array of messages under each type-key
            // Example 
                // To set a flash message: 
                    // req.flash('success', 'Successfully created')
                    // req.flash('success', 'Successfully updated') 
                    // req.flash('success', 'Successfully deleted') 
                    // req.flash('error', 'Failed to create') 
                    // req.flash('error', 'Failed to update')
                // To retrieve a flash message:
                    // res.locals.messages = req.flash() - It retreives all the flash messages and stores it under res.locals with a variable name called messages. (can be any name by the way)
                    // res.locals.messages = req.flash('success') - It retrieves the success messages only. 
            // Internally this how the stored messages will look:
                // {
                //  "success": ["Successfully created", "Successfully updated", "Successfully deleted"]
                // }
// res.locals:
// res.locals is an object that contains response local variables scoped to the request. This means that the variables stored in res.locals are available only for the life of the request and are not shared between different requests.
// The main purpose of res.locals is to pass data from your middleware to your view templates, enabling you to render dynamic content based on the data processed during the request. 
    // In our case, .ejs files will have automatic access to the messages variable under res.locals
// Lifecycle of res.locals
    // Initialization: When an HTTP request is received by the Express application, res.locals is initialized as an empty object.
    // Middleware Population: Middleware functions can add properties to res.locals to store data that needs to be accessible to the view templates.
    // View Rendering: When the request is finally handled by a route that renders a view, the data stored in res.locals is passed to the view template.
    // Response Sent: After the response is sent to the client, the data in res.locals is discarded, and a new empty res.locals object is created for the next request.

// Need for sessions:
// In this file we dont have any authentication. Without authentication why do we need sessions? To handle flash. 
// Relationship between flash and sessions.
    // HTTP, the protocol on which web applications are built, is stateless. This means that by default, the server doesn’t remember anything about the client between requests. However, in many applications, you need to maintain state (like user login information) between requests. This is where sessions come in.
    // When a user logs in, the server creates a session with a unique identifier and stores it on the server-side. The server also sends a cookie back to the client, which contains this unique session identifier. For every subsequent request, the browser sends this cookie, and the server uses it to match the request with the session.
    // Now, flash messages are a way to send one-time messages to the user. They get cleared after being displayed once. If you don’t use sessions while using flash, you won’t have a way to store these messages between requests, and they might not work as expected. Imagine a situation where you set a flash message during one request, but want to display it on a subsequent request (like after a redirect), the server wouldn’t remember the message unless it was stored somewhere.
    // That’s where the session comes in. By storing the flash message in the session, the server can remember it across multiple requests. The message stays in the session until it’s displayed to the user, at which point it’s cleared out. This is why flash messages are often used for things like form validation errors or success messages, which you only want to display once.
// They are added to the session via the req.flash(type, message) method. The type is usually a category like 'success' or 'error', and the message is the content of the flash message.
const Farm = require('./models/farm')

mongoose.connect('mongodb://localhost:27017/flashDemo')
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
    // Now every ejs files that is rendered during req-response cycle will have access to it. Depending up on which file wants that 'messages' variable we can make use of that.
    // In the above step we retrieve the flash messages using req.flash and strore it in the messages variable under res.locals. 
    next();
})

app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms })
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
    // Decide where to use them. We want to display the success message once the farm has been successfully created. This step alone is not going to display anything. Go to the route where it is going to be redirected.
    res.redirect('/farms')
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})



