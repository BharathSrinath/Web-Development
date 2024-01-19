const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json'); // This is a typical file import

app.use(express.static(path.join(__dirname, 'public')))
// It is a built-in middleware function
// Once the static files are being served, you can access them directly via the URL. Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL.
// When we talk about static and dynamic in the context of serving files, we’re referring to something different.
// A statically served file means that "the file is sent to the client exactly as it is stored, without any changes made to it on the server during the request-response cycle".
// A dynamically served file means that "the file is generated or modified on the server during the request-response cycle before being sent to the client". This is in contrast to static files, which are sent to the client exactly as they are stored.
    // Dynamic content is specifically created on the server side, usually by making a database request and updating the page before it is sent to the user2. This requires CPU processing on the web server.
    // Example: When a user logs into a website, the server might generate a personalized home page for that user.  

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

// .set() is used for variable declaration and initialization where first argument is the variable name and second is the value stored in it.
// Eventhough they can be used like a simple variable declaration and initialization, they are most commonly used to set specific properties that configure the Express application, such as 'view engine' or 'views'. 
// These properties are recognized by Express.js and used to alter the behavior of the server. 
// Here, view engine is not an existing property but express will recognise that. Express.js understands that you’re specifying the template engine (ejs in our case) to be used for rendering views.
// express will always look for index.js within a folder named "views". So when we run the server from root directory, it is easy for express to find the views and the index.js file. But when you run it from outside the directory, it will thrown an error. __dirname indicates the current directory from where the server is running. 'path.join' will append the '/views' to that directory. Dont forget to require('path') to use that.

app.get('/', (req, res) => {
    res.render('home')
})
    // render the 'view' (.ejs file under views directory) and sends the rendered HTML string to the client.
    // Syntax: res.render(view [, locals] [, callback])
        // locals: It is used to pass variables to the view where view is the filename and locals is an object. (Additional explanation below (/random))
        // callback: res.render('index', { title: 'Hi', message: 'Hello there!' }, function(err, html) {
                    //  res.send(html);
                    // });
        // It is called after the view is rendered. If you provide a callback, the rendered HTML string is passed to it as the second argument. If there’s an error during the rendering process, the details of that error will be passed to the first argument 

// Example:
    // res.render('index', { title: 'Hey', message: 'Hello there!' }, function(err, html) {
    //     if (err) {
    //         console.log(err);
    //         res.send('An error occurred while rendering the view.');
    //     } else {
    //         res.send(html);
    //     }
    // });


app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
        // Here data is an object. We are spreading that and passing it as a parameter to the subreddit.
        // In subreddit.ejs we can use the object and display the properties as required.
    } else {
        res.render('notfound', { subreddit })
    }
})

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num })
    // We are rendering random and passing {num: num} which can be simplified as just {num}.
    // We can use some other name as rand: num. Now in our random.ejs file we should be using rand instead of num
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})