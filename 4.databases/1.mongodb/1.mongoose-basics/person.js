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

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

personSchema.pre('save', function(next) {
    // Perform some action before saving the document (Example: Hash the password)     
    next();
});

personSchema.post('save', function(doc) {
    console.log('User saved:', doc);
    // We are just priting userName and password in the console
});

// Did you notice anything? 
// Middlewares here are used directly on the schema itself and not on the model unlike CRUD operations.
// This is because, it ensures consistency across all models that use this schema. By placing middleware on the schema, you ensure that any model created with that schema will have the same behavior.

const Person = mongoose.model('Person', personSchema);

const user = new Person({ name: 'Joe', password: '123456' });
user.save();

