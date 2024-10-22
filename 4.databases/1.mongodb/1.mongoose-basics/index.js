const mongoose = require('mongoose');
// Hope You know what the above line does.

mongoose.connect('mongodb://localhost:27017/movieApp')
// Here we are setting up a connection to a MongoDB database.
// movieApp is the name of the database we are connecting to.
// .connect() returns a promise.
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

// Permitted SchemaTypes:
// ---------------------------------------------------------
// | Property     | Values                                 |
// |--------------|----------------------------------------|
// | type         | String, Number, Date, Buffer, Boolean, |
// |              | Mixed, ObjectId, Array,  Decimal128,   |   
// |              | Map, UUID                              |
// | required     | true, false                            |
// | default      | Any valid value                        |
// | unique       | true, false                            |
// | index        | true, false, { options }               |
// | sparse       | true, false                            |
// | lowercase    | true, false                            |
// | uppercase    | true, false                            |
// | trim         | true, false                            |
// | match        | RegExp                                 |
// | enum         | Array of values                        |
// | minlength    | Number                                 |
// | maxlength    | Number                                 |
// | min          | Number                                 |
// | max          | Number                                 |
// | validate     | Function, { validator, message }       |
// | get          | Function                               |
// | set          | Function                               |
// | immutable    | true, false                            |
// ---------------------------------------------------------

// Creating a model - Saving the model creates a collection in mongoDB (that will have a plural name - movies) 
const Movie = mongoose.model('Movie', movieSchema);
const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' }); 
// Here we have created an instance of the object Movie. We can access this in node shell like a JS object. But it is still not created in the database as we have not saved. Lets do that.
amadeus.save().then(m => {
    console.log(m.title+" has bee added successfully")
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
        // console.log(data)
        // data is an array of objects. To access individual objects and its property, we have to iterate over them.
        for (let i of data){
            console.log(i.title+" has been inserted successfully");
        }
    })
