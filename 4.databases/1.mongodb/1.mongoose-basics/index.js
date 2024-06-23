const mongoose = require('mongoose');
// Hope You know what the above love line does.

mongoose.connect('mongodb://localhost:27017/movieApp')
// Here we are setting up a connection to a MongoDB database.
// mongodb:// is the protocol
// movieApp is the name of the database we are connecting to.
// .connect() returns a promise. Hence we using that to our advantage. If connection is successful we will display the message with .then(), if not we will display error message with .catch()
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })


// Creating a schema
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

// The permitted SchemaTypes are:
    // String
    // Number
    // Date
    // Buffer
    // Boolean
    // Mixed
    // ObjectId
    // Array
    // Decimal128
    // Map
    // UUID

// Creating a model - Saving the model creates a collection in mongoDB (that will have a plural name - movies) 
const Movie = mongoose.model('Movie', movieSchema);
const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' }); 
// Here we have created an instance of the object Movie. We can access this in node shell like a JS object. But it is still not created in the database as we have not saved. Lets do that.
amadeus.save().then(m => {
    console.log(m)
}).catch(e => {
    console.log('Error:', e)
})

// .save() returns a promise by the way

// Unlike creating a new instance like above, insertMany() allows you to insert multiple documents into the database at once, without needing to create individual model instances for each document. But it doesn’t change the model or the schema and all. Since there is no new instance, we don't require it to be saved.


Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
])
    .then(data => {
        console.log("IT WORKED!")
        console.log(data);
    })


// VERY IMPORTANT
// CRUD operations in Mongoose returns something like a promise called 'mongoose query' which is a 'thenable object'. Just like a promise we can use .then() here too. 
// If we want to use the return statement exactly like a promise we can apend .exec() to the query. 
    // Example: Movie.find({rating: 9.5}).exec()
// Promise vs query:
    // A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. They allow the rest of our code to run before they resolve or reject.
    // A Thenable is an object or function that defines a then method. While thenables can be used similarly to promises, they don’t provide the same guarantees. 
        // Example: A thenable might not handle errors or asynchronous behavior as promise does.
// So, while we can use .then() and .catch() with both promises and thenables, promises provide more consistent behavior and additional features due to the standards they follow.
// Then why do we have 'thenables' in the first place? We have evolved from thenables to promises at this point of time. We just need to know about them to manage the legacy code.