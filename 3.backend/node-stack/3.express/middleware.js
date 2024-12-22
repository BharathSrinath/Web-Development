const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('tiny'));

// The below code somewhat replicates what the morgan package does
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS!!")
    next();
})

// This is a middleware which is passed to '/secret' route. So whenever the user hits '/secret' route, they need to provide the query '?password=chickennugget' to access the content under secret route. 
const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send("YOU NEED A PASSWORD!")
}


// app.use((req, res, next) => {
//     console.log("THIS IS MY FIRST MIDDLEWARE!!!")
//     return next();
//     console.log("THIS IS MY FIRST MIDDLEWARE - AFTER CALLING NEXT()")
// })
// app.use((req, res, next) => {
//     console.log("THIS IS MY SECOND MIDDLEWARE!!!")
//     return next();
// })
// app.use((req, res, next) => {
//     console.log("THIS IS MY THIRD MIDDLEWARE!!!")
//     return next();
// })


app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE!')
})

// app.get('/donothing', (req, res) => {
//     console.log("Server will not respond")
// })
    // When you dont send any response back, the request will be in sending process until it hits a timeout. 

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOOF WOOF!')
})

// This is where the we pass the middleware. That is the next() will redirected here.
app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone')
})
// Just know that the syntax of HTTP method is as follows
// app.get('/route', middleware1, middleware2, ..., middlewareN, routeHandler);
    // It can take any number of middleware arguments

app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})


app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})