const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');


app.use(express.static(path.join(__dirname, 'public')))

// It is a built-in middleware function to serve static files.
// You specify a root directory ('public' by convention) from which static assets will be served.
// It is highly efficient and useful for serving files needed by the frontend of your application without requiring you to write additional routing logic for each file type.
// When a request is made to your server, Express will look for a matching file in the public directory. If it finds the file, it will be served directly to the client.
    // Example: If there is a file public/index.html, it can be accessed via http://localhost:3000/index.html. () 
// Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL.
// When we talk about static and dynamic in the context of serving files, we’re referring to something different.
// A statically served file means that "the file is sent to the client exactly as it is stored, without any changes made to it on the server during the request-response cycle".
// A dynamically served file means that "the file is generated or modified on the server during the request-response cycle before being sent to the client". This is in contrast to static files, which are sent to the client exactly as they are stored.
    // Dynamic content is specifically created on the server side, usually by making a database request and updating the page before it is sent to the user. This requires CPU processing on the web server.
    // Example: When a user logs into a website, the server might generate a personalized home page for that user.  

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

// set() method:
    // .set() is used for variable declaration and initialization where first argument is the variable name and second is the value stored in it.
    // Eventhough they can be used like a simple variable declaration and initialization, they are most commonly used to set specific properties that configure the Express application, such as 'view engine' or 'views'. 
// view engine():
    // The view engine setting specifies the template engine to be used by Express for rendering views. Template engines allow you to generate HTML dynamically by embedding JavaScript logic and variables within your HTML files.
    // When you set the view engine, Express internally configures itself to use the specified template engine when you call res.render().
    // It also helps us to avoid the usage of extension where we render like index.ejs. We can simply call res.render('index')
// views directory: 
    // express will always look for index.js within a folder named "views". So when we run the server from root directory, it is easy for express to find the views and the index.js file. But if you run the server from a different directory, Express might not find the "views" directory because relative paths can change based on the current working directory.
    // To prevent path issues, we set the views directory using an absolute path. So we are telling the express that whenever you are going to look for the views directory, don't choose the relative path, rather always look for the absolute path that we have set here. 
        // Here _dirname is a global variable in Node.js that contains the absolute path (simply the file path) of the directory that contains the currently executing file. 
            // Example (absolute path of this file): C:\Users\Bharath Srinath\Documents\GitHub\web-development\3.backend\node-stack\4.templating

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
    console.log("line 2:"+data);
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