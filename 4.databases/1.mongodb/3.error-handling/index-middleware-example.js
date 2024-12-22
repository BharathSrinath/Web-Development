const express = require('express');
const app = express();

const AppError = require('./AppError');


app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS!!")
    next();
})

// In express, we have lot of ways to handle errors. Will look at couple of ways - one for synchronous and another one for asnychronous (explained in index.js).
// 1. Synchronous: Create a instance of an error using throw new Error and define a class that extends to the error instance (refer AppError.js). This instance will have properties such as messgae and status. We will update that with our own message and status.
// VERY IMPORTANT THING TO UNDERSTAND: When we throw new ExpressError(msg, 400), you’re throwing an error, execution of the current function stops and it will propagate up through the application until it’s either caught by a catch block or it reaches our error-handling middleware (which we have defined at the last).
    // A middleware can be called an error handling middleware if if it takes 4 arguments => app.use((err, req, res, next). 
    // The middleware in which you may think an error may occur, you have to pass the error object as an argument to next() which will bring the error details to the error handling middleware.
// Since our AppError doesn't have a catch property, it will reach the error-handling middleware. 

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    } else {
        throw new AppError('password required', 401);
    }
    
}

app.get('/error', (req, res, next) => {
    chicken.fly();
    // We dont have anything called chicken in our page. So we get a message in the web page as "chicken is not defined"
    // This is because of the error handler middleware at the last. But even if we didn't have that error handler we will get that message + stack trace due to the default error handling mechanism of the Express.js which catches the unhandled errors and sends a response with the error message.
    // Now we wont get the stack trace printed because we have the error handler which displays the error message alone.
    // Not only the unexpected errors, you can even use this for expected errors like invalid login credentials. But to have a customised error message like that, we will make use of a class (we called it AppError) that extends 'Error'.
    // This class is used to set the values to the properties like message and status and then the control moves to the error handling middleware. 
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone')
    // Here verifyPassword is a middleware function. That function will have a logic to come back to this middlware only if the password is right. Else it will move to the error handling middleware. 
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin!', 403)
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})


// app.use((err, req, res, next) => {
//     console.log("******************************************")
//     console.log("*****************ERROR*****************")
//     console.log("******************************************")
//     console.log(err)
//     next(err)
// })

// Error-handling middleware
app.use((err, req, res, next) => {
    console.log(err);
    const { status = 500, message = 'Something Went Wrong' } = err;
    res.status(status).send(message)
})


app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})