const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

// In index.js we saw how schema works. But there is more to it. When we specify name: string, it inherently means that type is string. But apart from type there are many properties as shown below. And as always you can nest properties. You can add a new property while creating a model instance. It won't break the code but at the same time it wont be added to the database too.
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive ya dodo!']
        // This is a custom validator message. 
    },
    onSale: {
        type: Boolean,
        default: false
        // When we give a default value, we dont need to include this property (onSale) while creating an instance as long we want the property to be false. 
    },
    categories: [String],
    // We can use this for tags. For an example consider a laptop, it can have tags like, windows, electronics, etc.
    // We are simply using array of strings. We can use it as array of objects too.
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
        // enum checks if the entered value is in this array list
    }

});

// 'Instance methods' - These methods are available to every instance of a model that we create. They perform operations that depend on instance-specific data.
// See the properties in schema applies to all the model that is created  by passing the schema. And so far we have added only the methods/properties that is provided by the mongoose. Now we will be creating our own.
// Syntax: schemaName.methods.methodName = function(callback){....}
// This can be directly written within the schema too just like other properties

productSchema.methods.toggleOnSale = function () {
    // Whenever we want to toggle onSale for a particular product we can call this method on that product
    // Here this refer to that particular product. (Hope you remember why we cant use arrow function here) 
    this.onSale = !this.onSale;
    return this.save();
    // So generally rather than writing the logic on every instance, we can define that as a method and call it on a product whenever we require.
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

// 'Static/Class methods' - These methods are available to the model itself, not to any specific instance. They typically perform operations that don't depend on instance-specific data. They are used when we need to perform an operation that involves the data of the entire model (that is, all instances of a model).
// Syntax: schemaName.statics.methodName = function(callback){....}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
    // We are updating everything by adding/modifying properties
    // here 'this' refers to the actual model itself (not the instance of a model like a instance methods)
}

// Above example may not make much sense to you. Because, you could simply define them as properties within schema. So why need a spearate method? Because, 
    // Schemas are primarily concerned with data validation, default values, and constraints. They don’t directly handle business logic or dynamic behavior.
    // Business logic refers to the rules, calculations, and operations specific to your application domain. While properties (fields) are essential for storing data, sometimes you need more than just data storage.
    // Separating properties (schema fields) from methods (business logic) adheres to the separation of concerns principle. It keeps your codebase modular, maintainable, and easier to reason about.
    // Example: Suppose we have a User schema with a balance field (representing the user’s account balance). We want to allow users to perform actions like deposit, withdraw, or transfer funds. These actions involve more than just setting or retrieving the balance value; they require additional logic.

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    // We are using await here so that we receive "this.save()" and then move on  to the next line. Because needs access to the returned data. Without await it will give us the data that is not updated. 
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}

// Product.fireSale().then(res => console.log(res))

// findProduct();


// const bike = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'XS' })
// bike.save()
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!")
//         console.log(err)
//     })

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 9 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!")
//         console.log(err)
//     })

// { new: true, runValidators: true }
    // 'new: true' means that once we update, the new updated value will be returned.
    // 'runValidators: true': When we create a new instance, validation is automatic. But when it is being updated we need to tell it explicitly.  

