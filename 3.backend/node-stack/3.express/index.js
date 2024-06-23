
const express = require("express");
const app = express();
// This is a common practice. We can use like express().app.use(...) too. 

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     res.send('<h1>This is my webpage!</h1>')
//         When you load the webpage at localhost:8080, it will now display "This is my Webpage" 
// })

// An HTTP request is not an object. It is a text information. Now Express takes that request(req) and parses that into an object and send it as a response(res)
// The .use() method in Express is used to add middleware functions to our application.
    // Middleware functions are special functions that have access to the incoming request (req) and outgoing response (res) objects in an Express application. They are basically processes that occur between request and response. 
    // They are used for tasks like logging, authentication, modifying requests or responses, and more.
    // built-in middleware functions: 
        // express.static for serving static files
        // express.json for parsing JSON in the request body
        // express.urlencoded for parsing URL-encoded data, etc.
// .use() method can take 2 arguments. 
    // 1. An optional path or a pattern of paths for which the middleware function should be invoked. If a path is provided, the middleware function will only be executed for requests that match the specified path. If no path is provided, the middleware function will be executed for all requests.
        // Example: app.use('/example', (req, res, next) => {...}
    // 2. Callback Function:
        // This function can take 3 arguments 
        // It is executed for each incoming request that matches the specified path (or for all requests if no path is provided). 
        // It receives the request (req), response (res), and next parameters.
            // Example: app.use((req, res, next) => {...}
        // Next is a callback function that, when called, passes control to the next middleware in the stack.
    // You know .use() method runs for every request for the path that is proivded (and no path means it literally runs for everything). But still the order matters. By defining them at different places we can achive different things. 
        // Example: We have app.use((req,res,next){next()}), app.use('/dogs', (req,res,next){next()}), app.use('/cats', (req,res,next){next()}), at the top. Also we have get and put methods with the above routes and finally we have app.use((req,res)){res.send('NOT FOUND')}. Now when we search for route '/tiger', first app.use will be executed, and it will skip all since the route doesn't match and execute the lost with the message 'NOT FOUND'. So by placing them at the correct position, we can create these types of features.
// You can see the sample codes in middleware.js file
// morgan middleware:
    // It is the 3rd party middleware package which is used for logging the incoming request method, response time, etc.
    // After installing the package we can just use it as as following. It will be useful during development.
        // app.use(morgan('tiny')) 
        // There are many other options istead of tiny. You can use 'dev' too.
        // Different options may provide different information same information in different format

// Middleware vs routing methods
// Both middleware and routing methods are functions that handle requests and responses, they serve different purposes.
    // Middleware functions are used for operations that need to be executed for more than one route, while routing methods handle requests to specific paths.
        // app.use() can handle all types of HTTP requests (GET, POST, PUT, DELETE, etc.), while app.get() is specifically for handling GET requests.
    // HTTP routing methods: They are like a door to a specific room in a house. When we knock on that door (send a GET request to a specific path), the door opens (the server responds) and we see what’s inside the room (the response from the server).
    // Middleware: This is like a hallway in a house. No matter which room we want to go to, we have to pass through this hallway. So, every time we make any request (GET, POST, etc.), we are going to pass through this middleware. It’s a common area that every request will go through, no matter which door (path) it eventually knocks on.
// So, if we have something that we want to apply to many different paths (like checking if a user is logged in, or logging details about the request), we would put it in app.use(), because all requests pass through there. But if we have something specific to a certain path (like sending a specific response when the user visits the home page), we would put it in app.get() for that specific path.

app.get('/', (req, res) => {
    res.send('Welcome to the home page!')
})

// Pattern macthing
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    // params is a property of req
    // When a GET request is made to a URL that matches this pattern, the app.get() function is triggered. The value in the URL that corresponds to :subreddit is captured and stored in req.params.subreddit
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})
// /r/ is a fixed part of the path. It means that the route will match any URL that starts with our-site.com/r/.:subreddit is a route parameter. 
// It’s a placeholder for a variable part of the URL. 
// The colon : tells Express to expect a value at this position in the URL.

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

// When the user searches for a path that is not mentioned in above routing methods, then we will dsipaly the above message. The order is important. When we place at the top of the file, we will always get "I dont know that path" as it wont even check the other routing paths.

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
    // Once the starts to run, we can the see the console.log indicating to the developer that the server has started.
})

// res.send()
// 
