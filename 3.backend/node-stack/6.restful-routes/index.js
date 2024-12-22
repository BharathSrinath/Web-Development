const path = require('path');
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid'); //For generating ID's (npm install uuid)
// console.log(uuid);
    // uuid is an object with a property (which is a function) 'v4'
    // We are assigning it to a variable named uuid (It can be anything. But this is a convention)
    // Whenever you execute uuid() you will get a random id generated
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
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

// ********************************************
// READ - List of Existing comments
// ********************************************
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

// ********************************************
// READ - Read the new data entered by the user
// ********************************************
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


















