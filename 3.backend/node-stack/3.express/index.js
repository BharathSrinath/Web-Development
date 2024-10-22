
const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to the home page!')
})

// Pattern macthing
// It allows you to create routes with dynamic segments
// This is particularly useful when you want to handle different URL's with a common route structure.
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    // params is a property of req
    // When a GET request is made to a URL that matches this pattern, the app.get() function is triggered. The value in the URL that corresponds to :subreddit is captured and stored in req.params.subreddit
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})
// /r/ is a fixed part of the path. It means that the route will match any URL that starts with our-site.com/r/. ":subreddit" is a route parameter. 
// Here subreddit is a PLACEHOLDER for a variable part of the URL.
    // Lets say the user requests for '/r/:cats', now req.params will hold the value called 'cat'
// The colon : tells Express to expect a value at this position in the URL.
// Example of an URL - http://localhost:3000/r/chickens
    // Here "chickens" is the variable parameter

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})


app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    } else {
        res.send(`<h1>Search results for: ${q}</h1>`)
    }
})

// The req.query object is used to access the query parameters of the request. 
// Query parameters are the part of a URL that comes after the question mark ?. 
// They are key-value pairs separated by &. 
    // Example, in the URL http://localhost:3000/search?q=express, q=express is the query parameter

app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})

// When the user searches for a path that is not mentioned in above routing methods, then we will dispaly the above message. The order is important. When we place at the top of the file, we will always get "I dont know that path" as it wont even check the other routing paths.

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})

