const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
// npm i cookie-parser
// Syntax: cookieParser (secret, options)
// Now this gives us a new property in the request object called req.cookies
// cookie parser is used to get the cookie data from the browser. You can just execute it without any arguments. But if it is a signed cookie we need a secret key.
// At the production level, the secret will be an environment variable
app.use(cookieParser('thisismysecret'));
// Here cookieParser() is a function call.
// It returns a function with express's expected signature (req,res,next)
// Now this function becomes the callback function that will be called for the respective route if route is defined.
// This callback function inherently takes care of retrieving/creating cookies and pass it to the next middleware. So unlike Java we need not worry about those things.

app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies;
    // If there is no value in the name property within that cookie, we are just giving it a default value called 'No-name'
    res.send(`Hey there, ${name}`)
})

// cookie syntax
// res.cookie(name, value [,options]) 

app.get('/setname', (req, res) => {
    res.cookie('name', 'henrietta');
    res.cookie('animal', 'harlequin shrimp')
    // cookies are not the actual response but they are part of the response
    // They will bestored in the user's browser
    // Cookies can be sent/retrieved from the browser using cookie parser.
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