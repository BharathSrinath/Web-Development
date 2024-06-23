const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String,
    userName: String,
    password: String
})

// Mongoose virtuals
// The purpose of using virtuals in Mongoose is to have control over the data that we don't want to persist in the MongoDB database. 
// In simple terms, virtuals are like our imaginary friends. They are there when we need them, but they don't actually exist in the real world (or in this case, in the database). We can talk to them, play with them, but when we go to sleep (or when you save our data), they disappear.
// In technical terms, virtuals allow us to define more complex relationships between data fields, manipulate data before outputting, and even combine fields. They are great for:
    // Formatting: We can format the data before sending it to the client. For example, we might want to format a date field into a more readable format.
    // Combining fields: If you we first name and last name fields, we can create a 'full name virtual field' that combines these two.
    // Hiding sensitive data: If we don't want to send sensitive data to the client, we can use a virtual to send a modified version of the data.
// Virtuals are not saved in the database. They only exist logically and are not persisted in the database. They are a powerful tool when we want to add fields to our model that do not need to be saved, and can be populated dynamically.

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

// The get method of a virtual property can get the value of the virtual property from existing document field values, and it returns the virtual property value. Mongoose calls the get method every time you access the virtual property.
// The set method of a virtual property can set the value of existing document fields from the value of the virtual property. (exactly opposite to get)


// Middleware in mongoose
// Each process has a lifecycle right? For user login, we have to display the login page, read the input data, match the entered data in our database and then show the user related content. Here we might want to do few things.
// In this context, middleware functions can be used to perform certain operations at different stages of the process.
    // A pre middleware function could be used to hash the password entered by the user before it’s compared with the stored hashed password in the database. This ensures that the entered password is in the correct format for comparison.
    // A post middleware function could be used to log the login event or update user details after the user has been authenticated and shown their related info.

personSchema.pre('save', function(next) {
    // Hash the password here... (we are not actually wriring any code here. Just for understanding purpose)
    next();
    // next() is a function that passes control to the next middleware function. If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
});

personSchema.post('save', function(doc) {
    console.log('User saved:', doc);
    // We are just priting userName and password in the console
});


const Person = mongoose.model('Person', personSchema);

const user = new Person({ name: 'Joe', password: '123456' });
user.save();

