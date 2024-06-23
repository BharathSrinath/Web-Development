const path = require('path');
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid'); //For generating ID's (npm install uuid)
    // uuid is an object with a property (which is a function) 'v4'
    // We are assigning it to a variable names uuid (It can be anything. But this is a convention)
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// For every post request that we send, we need to specify how do we need to parse the data. 
// Remember that, data that we send are just treated as mere text. When we console.log(req.body), we will just see 'undefined' by default. 
// In order to use this data effectively, we need to parse it into a format that our application can understand.
    // 1. JSON: To parse JSON data from the request body. 
        // express.json()
    // 2. URL-encoded: To parse data from the body of a request when the Content-Type is application/x-www-form-urlencoded. 
        // express.urlencoded()
    // 3. Text: To parse text data from the request body. 
        // bodyParser.text()
    // 4. Raw: To parse data from the request body without any specific encoding.  
        // bodyParser.raw()
    // 5. Multipart/Form-data: To parse multipart/form-data from the request body, which is primarily used for uploading files. We can use multer middleware for this.


// To 'fake' put/patch/delete requests: 
// HTML forms allows only GET and POST request. So trick that we have to install and import a libray called method-override (npm install method-override).
// Now in HTML form will still use method = POST (Don't forget that put/patch/delete always uses POST)
// But action attribute will be appended as a query string - "?_method=PUT" or "?_method=PATCH" or "?_method=DELETE"
// Example: <form method="POST" action="/comments/<%=comment.id%>?_method=PATCH">
app.use(methodOverride('_method'))

// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Our fake database:
let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

// Based on the logic in index.ejs, all the comments will be obtained from the database (our fake database) 
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
    // Dont get confused. Here comments is is an object written in shortcut (comments: comments) If you had remembered the second argument of .render(), you woudn't have got confused in the first place.
})
// ********************************************
// READ - Read the new data entered by the user
// ********************************************

// When a user wants to make new comment,  they have enter those details in some input field right? (we are using a form rather than a single input field in new.ejs). It is from this new.ejs file, we will get the data that the user has entered and send it to the server using a post request. 
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

// *******************************************
// CREATE - Post the new data to the server
// *******************************************

// Creating the the data on the server which is obtained from above get request
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    // We are destrcuturing username and comment from the request and pushing it to the existing list of comments in the index.ejs 
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments');
    // Okay now the user has submitted the form. What next? We have to redirect them to a particular route or another .ejs file. This is where .redirect() method comes into picture.
    // You can specify status codes too. By default status code is 302
        // The HTTP status code 302, also known as “Found” or “Moved Temporarily”, is a common way of performing URL redirection
    // Syntax: res.redirect([status,] path)
     
})

// ********************************************
// READ - Read a single comment by id
// ********************************************
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})
// *******************************************
// EDIT - renders a form to edit a comment
// *******************************************
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})
// *******************************************
// UPDATE - updates a particular comment
// *******************************************
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id); 
    // When the user clicks a edit button (lets say there is an edit button) and types the new comment and submits it, we will get the id of the comment button of which the edit button was clicked from using req.params. Then we will search all the comments in the database to find that id. Once we get a match, we will store the existing comment in a variable (foundComment)

    //get the new comment from req.body
    const newCommentText = req.body.comment;
    //update the old comment with the new comment that we have acquired in above step
    foundComment.comment = newCommentText;
    //redirect back to index (or wherever you want)
    res.redirect('/comments')
})

// *******************************************
// DELETE/DESTROY- removes a single comment
// *******************************************
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    // So the user will send a request a right? We can destructure that content from req.body and use it as we want
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})


// Note: Many requests here that renders the form element will not be required in real use case scenario. We will be using axios/postman/fetch from where the request will arrive rather the from form submission. 


















