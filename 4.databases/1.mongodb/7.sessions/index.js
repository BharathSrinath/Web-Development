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

// Sessions: They are a server-side mechanism for maintaining stateful information about a user’s interaction with a website.
    // When a user visits a website, the server creates a unique session ID for that user.
    // This session ID is stored on the server, typically in a file or a database.
    // As the user interacts with the website (e.g., logs in, adds items to a shopping cart), the server associates relevant data with their session ID.
    // The session data can include user-specific information, such as login status, preferences, and shopping cart contents.
    // Sessions are generally more secure because the data resides on the server and can be encrypted.
// Cookies: They are small pieces of data stored on the user’s device (usually in their browser).
    // When a user visits a website, the server sends a cookie to their browser.
    // The browser stores this cookie locally.
    // Cookies can hold information like user preferences, login tokens, and tracking data.
    // Unlike sessions, cookies are limited in size (usually around 4 KB per cookie).
    // Cookies can persist even after the user leaves the site, depending on their expiration date.
    // However, they are less secure because the data is stored in plain text on the client-side.


// Cookies vs Sessions
// --------------------------------------------------------------------------------------------------
// | Aspect     |                Sessions                  |              Cookies                   |
// --------------------------------------------------------------------------------------------------
// | Storage    | Server-side files that contain user      | Client-side files saved on the user's  |
// |            | information.                             | computer.                              |
// --------------------------------------------------------------------------------------------------
// | Purpose    | Used to store large amounts of data on   | Used to store small amounts of data    |
// |            | the server.                              | locally.                               |
// --------------------------------------------------------------------------------------------------
// | Security   | Generally more secure, as session data is| Less secure, as cookie data is stored  | 
// |            | saved on the server and can be encrypted.| in plain text on the client-side.      |
// --------------------------------------------------------------------------------------------------
// | Lifetime   | Ends when the user closes their browser  | Depends on the lifetime set for the    | 
// |            | or logs out.                             | cookie (can persist across sessions).  |
// --------------------------------------------------------------------------------------------------
// | Data       | Can hold an unlimited amount of data     | Limited to approximately 4 KB per      |
// | Capacity   | (within server memory limits).           | cookie.                                |
// --------------------------------------------------------------------------------------------------
// | Activation | Requires starting the session explicitly | Automatically created when a user      |
// |            | using the `session_start()` method.      | visits a website.                      |
// --------------------------------------------------------------------------------------------------
// | Data       | Session data is automatically deleted    | Cookies can persist even after the user| 
// | Persistence| when the user logs out or shuts down the | leaves the site, depending on their    |
// |            | machine.                                 | expiration date.                       |
// --------------------------------------------------------------------------------------------------

// Relationship between sessions and cookies:
    // In web development, sessions are often implemented using cookies. When a user logs in or interacts with a web application, a unique session identifier (usually a random string) is generated and stored in a cookie on the user's browser.
    // This session identifier is then sent back to the server with each subsequent request, allowing the server to retrieve the associated session data and maintain the user's state (e.g., login status, shopping cart contents, preferences) throughout their session.

// We now that session is stored in servers. But where exactly?
    // 1. Memory: This approach provides fast access but may lose data if the server restarts. (default)
    // 2. File System: It can be stored as files on the server’s file system (e.g., in a temporary directory). These files are associated with the session ID.
    // 3. Databases: This approach allows persistence and scalability.
    // 4. Cache Systems: Some use cache systems (e.g., Redis) to store session data efficiently.
   
// CONCLUSION: In terms of functionality, both cookies and sessions are used to store user-specific data to maintain state across HTTP requests. The primary difference lies in how they are stored, where they are stored, size of data that they can hold and security aspect due to the combinaiton of first two. 