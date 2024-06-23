const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
// npm i cookie-parser
// Syntax: cookieParser (secret, options)
// Now this gives to a new property in the request called req.cookies
// cookie paresr is used to get the cookie data from the browser. You can just execute it without any arguments. But if it is a signed cookie we need a secret key.
// At the production level, the secret will be environment variable
app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies;
    // If there is no name property within that cookie, we are just giving it a defualt value called 'No-name'
    res.send(`Hey there, ${name}`)
})

// cookie syntax
// res.cookie(name, value [,options]) 

app.get('/setname', (req, res) => {
    res.cookie('name', 'henrietta');
    res.cookie('animal', 'harlequin shrimp')
    // cookies are not the actual response but they are part of the response
    // Now they will stored in the user's browser
    // Cookies can not just be sent. But whatever the cookies that are present in the browser can also be obtained for that respective domain using cookie parser.
    res.send('OK SENT YOU A COOKIE!!!')
})

// signed cookies
// signing doesnt mean that we are encrypting/hiding the data. It just means that we are making sure the cookie data that we sent to the browser is the same when we are receiving it. (ensuring that it is not been tampered)  
app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('OK SIGNED YOUR FRUIT COOKIE!')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
    // to get the signedCookies, we need to use this attribute
})

app.listen(3000, () => {
    console.log("SERVING!")
})

// cookies
    // They are small pieces of data that websites store on a user's browser. 
    // They are used to remember information about the user, such as login credentials, site preferences, or shopping cart items.
// Types of cookies:
    // 1. Normal cookies: 
        // These are standard cookies that are sent back and forth between the browser and the server with every HTTP request.
        // They are not encrypted or signed, making them susceptible to tampering.
            // Examples: Remembering user preferences (dark theme) or tracking user sessions.
    // 2. Signed cookies:
        // These are similar to normal cookies but include a cryptographic signature, making them more secure.
        // The signature ensures that the cookie has not been tampered with since it was created.
        // They are often used for sensitive data like user authentication tokens.
// cookie-parser: 
    // It is a middleware for Express.js that parses cookies attached to the client's request and makes them available in the req.cookies object for easier access and manipulation.
    // We have to use app.use(cookieParser()) before defining your routes, so that cookies are parsed before reaching your route handlers.
