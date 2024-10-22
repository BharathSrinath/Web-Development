const express = require('express');
const app = express();
const session = require('express-session');
// npm i express-session

const sessionOptions = { 
    secret: 'thisisnotagoodsecret', // Secret key used to sign the session ID cookie
    resave: false, // Whether to save the session data even if it hasn't been modified
    saveUninitialized: false // Whether to save new sessions that have not been modified
}
app.use(session(sessionOptions));

// express-session is a middleware too.
// With respect to use case, we will be using it similar to cookies.
// Once it is required, req will have acess to session property.
// When we use sessions, a unique session identifier is typically stored in a cookie on the client's browser. This cookie acts as a key to link the client's browser with the corresponding session data stored on the server.
    // 1. When a user accesses a website for the first time, the server generates a unique session identifier for that user's session.
    // 2. The server sends this session identifier back to the client's browser in the form of a cookie. This cookie is typically named something like session_id or similar.
    // 3. In subsequent requests made by the client (such as clicking on links or submitting forms), the client's browser automatically includes the session identifier cookie in the request headers.
    // 4. On the server side, Express uses the session identifier from the cookie to retrieve the corresponding session data stored on the server.
    // 5. The server then uses this session data to maintain the user's state and track their interactions with the website. This may include storing user preferences, authentication status, shopping cart contents, etc.

app.get('/viewcount', (req, res) => {
    console.log(req.session)
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${req.session.count} times`)
})

app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet')
})

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Welcome back, ${username}`)
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})

