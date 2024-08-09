
const express = require("express");
// There are two common module types - "Common JS module System" and "ES module System"
//  CommonJS module System - It is used by node.js
    // require() for importing and module.export for exporting
// ES module System - It is used in browsers (JS)
    // import/export statements in HTML, JS and React components
const app = express();
// This is a common practice. We can write as below too 
    // express().app.use(...) too. 

// node.js modules can be further categorized as,
    // 1. Core modules: in-built
        // Example: require ('http);
    // 2. Developer modules: Developed by us. Actually, Every JS file is treated as a module
        // Example: require('./lib/controller');
    // 3. 3rd party modules (from NPM):
        // Example: require('express'); 

// Express methods
// 1. HTTP Methods
    // app.get(path, callback): Defines a route for GET requests.
    // app.post(path, callback): Defines a route for POST requests.
    // app.put(path, callback): Defines a route for PUT requests.
    // app.delete(path, callback): Defines a route for DELETE requests.
    // app.patch(path, callback): Defines a route for PATCH requests.
    // app.options(path, callback): Defines a route for OPTIONS requests.
    // app.head(path, callback): Defines a route for HEAD requests.
    // app.all(path, callback): Defines a route for all HTTP methods.
// 2. Middleware and Routing
    // app.use(path, middleware): Mounts middleware functions or an entire application at the specified path.
    // app.route(path): Returns an instance of a single route, which you can then use to handle HTTP verbs with optional middleware.
    // app.param(name, callback): Adds callback triggers to route parameters, where name is the name of the parameter and callback is the callback function.
// 3. Settings and Configuration
    // app.set(name, value): Sets the value of app settings.
    // app.get(name): Gets the value of app settings.
    // Application-Level Middleware
    // app.use(middleware): Mounts middleware functions at the application level.
// 4. Template Engines
    // app.engine(ext, callback): Registers the given template engine callback as ext.
    // app.set('view engine', 'ext'): Sets the default engine extension to use when omitted.
// 5. Utility Methods
    // app.listen(port, [hostname], [backlog], [callback]): Binds and listens for connections on the specified host and port.
    // app.locals: An object containing local variables for the application.
// 6. Error Handling
    // app.use(errorHandler): Defines error-handling middleware.

// HTTP request:
// An HTTP request is initially a text-based message sent from the client to the server. A server-side framework like Express takes that request (req), parses it into an object that is easy to work with in JavaScript/other server-side langauges, and then allows you to send a response (res) back to the client.

// .use() method
    // app.use((req, res) => {
    //     console.log("WE GOT A NEW REQUEST!!")
    //     res.send('<h1>This is my webpage!</h1>')
    //         When you load the webpage at localhost:8080, it will now display "This is my Webpage" 
    // })
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
        // Next is a callback function that, when called, passes control to the next middleware in the stack. More on next() at the end.
    // You know .use() method runs for every request for the path that is proivded (and no path means it literally runs for everything). But still the order matters. By defining them at different places we can achive different things. 
        // Example: We have app.use((req,res,next){next()}), app.use('/dogs', (req,res,next){next()}), app.use('/cats', (req,res,next){next()}), at the top. Also we have get and put methods with the above routes and finally we have app.use((req,res)){res.send('NOT FOUND')}. Now when we search for route '/tiger', first app.use will be executed, and it will skip all since the route doesn't match and execute the lost with the message 'NOT FOUND'. So by placing them at the correct position, we can create these types of features.
// You can see the sample codes in middleware.js file
// morgan middleware:
    // It is the 3rd party middleware package which is used for logging the incoming request method, response time, etc.
    // After installing the package we can just use it as as following. It will be useful during development.
        // app.use(morgan('tiny')) 
        // There are many other options istead of tiny. You can use 'dev' too.
        // Different options may provide different information or same information in different format

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
    // Once the starts to run, we can the see the console.log indicating to the developer that the server has started.
})

// Next()
// The way Next() works depends on the method, route and the parameters of the callback function.
    // 1. A middlware with 'use' method will pass the next to the subsequent middlware 'use' method
    // 2. If the route is '/secret' and method is 'use', then next will will pass it to the subsequent middleware with 'use' method and '/secret' route.
    // 3.  If you get an error by performing any logic inside a middleware or when the user is trying to access an inavlid route, express will look for an 'error handling middleware' or you should handle that with a try catch block. If you haven't done any, express will implement the default error handling.
        // An error handling middleware doesn't have a route. So Whenever there is an error in a middleware, Express automatically forwards it to the error-handling middleware and display the message based on our customisation. 