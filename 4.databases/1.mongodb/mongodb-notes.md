# Database
    # Database is an organized colleciton of data. They can store large amounts of data efficiently and store it compactly.
    # DBMS is a software that interact with end users, applications and the database to capture and analyze the data.
    # They provide tools for easy insertion, querying and updating the data.
    # They generally offer security features and control over data.
    # They scale well (generally).

# Broad categories: SQL vs NoSQL
    1. Structured Query Language (SQL):
        # They are primarily called Relational Databases (RDBMS) where everything is stored in tables and one table is related to another  with a common property.
        # They are vertically scalable, which means that we can increase the load on a single server by increasing things like RAM, CPU, or SSD.
        # They follow ACID properties (Atomicity, Consistency, Isolation, and Durability).
            # Examples: MySQL, Postgres, SQLite, Oracle, Microsoft SQL Server
    2. No Structured Query Language (NoSQL):
        # They are primarily called non-relational or distributed databases where they have a dynamic schema for unstructured data.
            # Unlike SQL that requires a predefined schema for tables (which specifies the types of data and constraints on those data types), NoSQL databases can store data without enforcing a fixed structure
        # They are horizontally scalable, meaning you handle more traffic by sharding ( distributing data across multiple servers or databases), or adding more servers in our NoSQL database.
        # They can be document-oriented, column-oriented, graph-based, or organized as a key-value store.
        # They follow the Brewers CAP theorem (Consistency, Availability, and Partition tolerance).
            # Examples: MongDB, CouchDB, Neo4j, Cassandra, Redis

# MongoDB:
    # Document-Oriented: Data is stored as documents, and documents are grouped in collections. Documents are self-contained and can be treated as objects.
        # Self contained here is opposite to the table format where the data is spread across multiple tables and are linked through relationships. Here just imagine an object with properties. Each property by itslef can be an object and any property within that object can also be an object  and this nesting can go on. But all the data is at one place.
    # Documents are stored in the BSON format, which is a binary-encoded JSON format. This means that the data is stored in a binary format, which is much faster than JSON.
    # In the MongoDB server, you are allowed to run multiple databases. 

# Installation  and initial setup of MongoDB:
    # Download both with default configuration
        # Server: https:# www.mongodb.com/try/download/community 
        # Shell: https:# www.mongodb.com/try/download/shell
        # If you dont want to interact through shell you can opt for a GUI - mongoDB-compass
    # Installation: npm i mongodb
    # Type 'mongosh' in bash. This will connect to the server and the shell that you are seeing is a JS shell where you can type JS code.
    # 'Show dbs/databases' will give you the existing databases (There are few by default)
    # 'use dbName' to create and switch to that db. But until we put some data into it, it won't be shown among the list of databases. 
    # 'db' will show in which database we are in
    # 'show collections' will show the list of collections that we have within the database.
        # Example: Lets say we have a database names 'animal'. Within that collections can be cats, dogs, etc. Within cats we can have multiple documents
    # Operations on db:
        # To delete a collection, db.collectionName.drop()
        # To delete a db, go to that db, db.dropDatabase()
        # To change the db name, you cannot directlt do that.
            # Create a New Database
            # Copy Data from Old Database to New Database: 
                # Export Data from Old Database: mongodump --db oldDatabaseName --out /path/to/backup
                I# mport Data to New Database: mongorestore --nsFrom="oldDatabaseName.*" --nsTo="newDatabaseName.*" /path/to/backup
        # Switch to the New Database and Verify
        # Delete the Old Database

# CRUD operations
    1. INSERT:
        # db.dogs.insertOne({name: "Mac", age: 7}) = Inserts one document to the database
        # db.dogs.insertMany({name: "Ronaldo", age: 7}, {name: "Tarren", age: 3})
    2. FIND:
        # db.dogs.find({})/db.dogs.find() = Lists out all the dogs
        # db.dogs.find({age: 7}) = Lists out dogs with age 7
    3. UPDATE:
        # db.dogs.updateOne({name: "Mac"}, {$set: {age: 8}, $currentDate: {lastModified: true}})
            # Here, first argument is the property that you can use to find the document
            # Second argument is the $set operator whose value should the "property and updated value" of the document. There is an optional second operator called $currentDate which will log the modified date and time.
        #  db.dogs.updateMany({name: "Mac"}, {$set: {age: 8, breed: "Country dog"}, $currentDate: {lastModeified: true}})
            # There is no property called breed. But the above command will add the new property
    4. DELETE:
        # db.dogs.deleteOne
        # db.dogs.deleteMany

# Finding/Querying in Detail:
    Lets consider the following dataset.
    db.inventory.insertMany([
        { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
        { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
        { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
        { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
        { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
    ]);
    # db.inventory.find( {} ) => It will list all the documents
    # db.inventory.find( { status: "D" } ) => Lists only the documents with status property whose value is "D"
    # db.inventory.find( { status: { $in: [ "A", "D" ] } } ) => Status property with value "A" or "D"
    # db.inventory.find( { status: "A", qty: { $lt: 30 } } ) => qty that is less than 30
    # db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } ) => Documents with status value to be "A" or qty less than 30.
    # db.inventory.find( { status: "A", $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]} ) => It selects all documents in the collection where the status equals "A" and either qty is less than ($lt) 30 or item starts with the character p:
    # db.inventory.find( { "size.uom": "in" } ) => Access to the nested object is using the method operator.
    # db.inventory.find( { "size.h": { $lt: 15 }, "size.uom": "in", status: "D" } ) => Another example for AND. Note that we dont explcitly mention the word AND in MongoDB unlike SQLite.
    # db.inventory.find( { tags: ["red", "black"] } ) => queries for all documents where the field tags value is an array with exactly two elements, "red" and "blank", in the specified order
    # db.inventory.find( { tags: { $all: ["red", "black"] } } ) => looks for array that contains "red" and "blank" not necessarily in the same order and it may contain additional tags too.
There are many more. Please look at https:# www.mongodb.com/docs/manual/crud/

# Mongoose Object Data Modelling(ODM):
    # An ODM is a library that maps your JS objects in the application to documents in the database. It provides us a way to write a programming language that can interact with our database. 
    # It is similar to JDBC with Java. Both ODMs and JDBC facilitate communication between an application and a database.  While JDBC is an API, ODM is a library.
        # API: A set of defined methods and protocols for communication. It is a contract for how software components interact. APIs can be part of libraries, frameworks, or packages.
        # Library: Provides reusable code and functions, and it exposes an API.
        # Framework: A larger structure that dictates the architecture of applications and provides an API for developers to use within that structure.
        # Package: A collection of related code components that can contain libraries, which, in turn, provide APIs.
    # Functioning:
        1. Define a schema (a blueprint) for your documents.
        2. Create a model based on that schema.
        3. Create instances of the model which are the actual documents.
        4. These documents can be saved, retrieved, updated, and deleted in the database using methods provided by the ODM.
    # Example: Let’s say we want a “users” collection in our MongoDB database, and each document in that collection represents a user with properties like name, email, and age. We can use an ODM to create a “User” model, define the user’s schema, and use that model to create new users, fetch them from the database, update them, and delete them. Instead of using MongoDB commands to work with the data, we can use the methods provided by the model, which are more straightforward and intuitive.
    # Note (Just know it): 
        # MongoDB is an object/document oriented. Hence it can be used with other object oriented languages too.
        # Based on the language, we have different ODM's for MongoDB
            1. Mongoose: Node.js 
            2. Beanie: Python
            3. Doctrine: PHP
            4. Morphia: Java
    # Installation: npm install mongoose

# Steps to create a database using Mongoose:
    1. Import mongoose => "const mongoose = require('mongoose')"
    2. Connect to MongoDB using the mongoose.connect('mongodb:# localhost:27017/dbName')
    3. Define a Schema: A schema defines the structure of our documents. You can define a schema using new mongoose.Schema(). It returns an object.
        # Example: const movieSchema = new mongoose.Schema({
                        title: String,
                        year: Number,
                        rating: Number
                    });
    4. Create a Model: A model is a constructor compiled from a schema. We can create a model using mongoose.model()
        # .model() can take two arguments. First argument is the singular name (It cannot be plural). When we save the created model, .model() will automatically create a collection whose name is the plural form of first argument. Second argument is the schema based on which the model will be created.
        # The mongoose.model() function returns a constructor function. This function, along with every instance created from it, has access to all the CRUD operations.
    5. Use the Model: Now that we have a model, we can use it to create, read, update, and delete documents in our database.    
        # Example: const myMovie = new Movie({ title: 'Inception', year: 2010, rating: 8.8 });
                    myMovie.save(function (err, myMovie) {
                        if (err) return console.error(err);
                        console.log('Movie saved successfully!');
                    });

# CRUD in Mongoose:
1. Model.deleteMany(filter, options, callback): Deletes all documents that match the given filter. 
    Example: await Character.deleteMany({ name: Stark, age: { $gte: 18 } }); # returns {deletedCount: x} where x is the number of documents deleted.

2. Model.deleteOne(filter, options, callback): Deletes the first document that matches the given filter. 
    Example: await YourModel.deleteOne({ name: 'John Doe' });

3. Model.find(filter, projection, options, callback): Returns all documents that match the given filter. 
    Examples: 
        await MyModel.find({}); # find all documents
        await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec(); # find all documents
         <!-- More about exec() at the bottom  -->
        named john and at least 18
        await MyModel.find({ name: /john/i }, 'name friends').exec(); #  case-insensitive matching for the string "john" and next is the projection parameter (name and friends) will make sure that the query returns only the document with name and friends parameters.

4. Model.findById(id, projection, options, callback): Returns the document with the provided id. 
    Examples: 
        await Adventure.findById(id).exec(); # Find the adventure with the given `id`, or `null` if not found
        await Adventure.findById(id, 'name length').exec(); # select only the adventures name and length

5. Model.findByIdAndDelete(id, options, callback): Deletes the document with the provided id and returns the deleted document. 
    Example: let deletedDoc = await YourModel.findByIdAndDelete('document_id');

6. Model.findByIdAndRemove(id, options, callback): Same as findByIdAndDelete() - We dont use this anymore as it is a legacy code.
    Example: let removedDoc = await YourModel.findByIdAndRemove('document_id');

7. Model.findByIdAndUpdate(id, update, options, callback): Updates the document with the provided id and returns the updated document. 
    Example: 
        Model.findByIdAndUpdate(id, { name: 'jason bourne' }, options)
            # options can be 'before' and 'after' (By default, it will return the document before the update was applied)

8. Model.findOne(filter, projection, options, callback): Returns the first document that matches the given filter.
    Examples: 
        await Adventure.findOne({ country: 'Croatia' }).exec();  
            # Find one adventure whose `country` is 'Croatia', otherwise `null`
            # Model.findOne() no longer accepts a callback
        await Adventure.findOne({ country: 'Croatia' }, 'name length').exec(); 
            # Select only the adventures name and length

9. Model.findOneAndDelete(filter, options, callback): Deletes the first document that matches the given filter and returns the deleted document.     
    Example:
        const doc = await Model.findOneAndDelete({ name: 'Alice' })

10. Model.findOneAndReplace(filter, replacement, options, callback): Replaces the first document that matches the given filter with the provided replacement document. 
    Example: let replacedDoc = await YourModel.findOneAndReplace({ name: 'John Doe' }, { name: 'Jane Doe' }, { new: true });

11. Model.findOneAndUpdate(filter, update, options, callback): Updates the first document that matches the given filter and returns the updated document.    
    Example: 
        const query = { name: 'borne' };
        Model.findOneAndUpdate(query, { name: 'jason bourne' }, options)

12. Model.replaceOne(filter, replacement, options, callback): Replaces the first document that matches the given filter with the provided replacement document.   
    Example: const res = await Person.replaceOne({ _id: 24601 }, { name: 'Jean Valjean' });

13. Model.updateMany(filter, update, options, callback): Updates all documents that match the given filter. 
    Example: const res = await Person.updateMany({ name: /Stark$/ }, { isDeleted: true });
    <!-- isDeleted: true is not a standard feature or option provided by Mongoose itself. Instead, it is typically used as a custom field or flag that developers might add to their schema to indicate that a document has been logically deleted, rather than physically removed from the database. -->

14. Model.updateOne(filter, update, options, callback): Updates the first document that matches the given filter. 
    Example: const res = await Person.updateOne({ name: 'Jean-Luc Picard' }, { ship: 'USS Enterprise' });
Note:
    # filter is the condition the query will match.
    # projection determines which fields to include or exclude in the returned document.
    # options are additional options for the query.
    # callback is an optional callback function that will be invoked with the results of the query.
    # update is the update operations to be applied to the document.
    # replacement is the replacement document that replaces the matching document.
    # id is the _id of the document to find.

# About exec()
    # The exec() method is used to execute a Mongoose query. It returns a promise that resolves with the result of the query.
    # When you use Mongoose queries, they return a query object that can be executed in a few different ways. Calling exec() on this query object executes the query and returns a promise.
    # Returning a promise makes it compatible with async/await syntax, and also try/catch can be used along with async/await which makes it easier for error handling.

# Mongoose virtuals
    # The purpose of using virtuals in Mongoose is to have control over the data that we don't want to persist in the MongoDB database. 
    # In technical terms, virtuals allow us to define more complex relationships between data fields, manipulate data before outputting, and even combine fields. They are great for:
        # Formatting: We can format the data before sending it to the client. For example, we might want to format a date field into a more readable format.
        # Combining fields: If you have first name and last name fields, we can create a 'full name virtual field' that combines these two.
        # Hiding sensitive data: If we don't want to send sensitive data to the client, we can use a virtual to send a modified version of the data.
    # Virtuals are not saved in the database. They only exist logically and are not persisted in the database. They are a powerful tool when we want to add fields to our model that do not need to be saved, and can be populated dynamically.
    # Example:
        personSchema.virtual('fullName').get(function () {
            return `${this.first} ${this.last}`
        })
    # The get method of a virtual property can get the value of the virtual property from existing document field values, and it returns the virtual property value. Mongoose calls the get method every time you access the virtual property.
    # The set method of a virtual property can set the value of existing document fields from the value of the virtual property. (exactly opposite to get)

# Middleware in mongoose
    # Each process has a lifecycle right? For user login, we have to display the login page, read the input data, match the entered data in our database and then show the user related content. Here we might want to do few things.
    # In this context, middleware functions can be used to perform certain operations at different stages of the process.
        # A pre middleware function could be used to hash the password entered by the user before it’s compared with the stored hashed password in the database. This ensures that the entered password is in the correct format for comparison.
            # Syntax: 
                schema.pre('operation', function(next) {
                    # Middleware logic here
                    next(); # Proceed to the next middleware or operation
                });

        # A post middleware function could be used to log the login event or update user details after the user has been authenticated and shown their related info.
            # Syntax: 
                schema.post('operation', function(result, next) {
                    # Middleware logic here
                    next(); # Proceed to the next middleware or operation
                });
    # The callback function for pre middleware typically takes a single argument, next, which is a function you call to proceed to the next middleware or the actual operation. On the other hand, Post Middleware is executed after the operation is completed. Its primary role is to perform additional actions based on the result of the operation.
    # next() is a function that passes control to the next middleware function. If the current middleware function does not end the request-response cycle (by rendering or sending a response), it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

# Express Middleware vs Mongoose Middleware:    
    # Express Middleware: Facilitates interactions between the client and the server.
    # Mongoose Middleware: Facilitates interactions between the server and the database.
    # Express middleware functions are used to handle and process HTTP requests and responses in your Express application. They have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
    # On the other hand, Mongoose middleware, also known as pre and post hooks, are functions that intercept the execution of asynchronous operations in Mongoose. They are a way to add custom logic before or after various actions on your MongoDB data. For example, you might use Mongoose middleware to hash a password before saving it to the database

# Types of middlewares in Mongoose.
    1. Document Middleware: Document middleware is specific to individual documents (instances of a model). It's triggered during actions like `save`, `validate`, `remove`, `updateOne`, and `deleteOne`. For example, you might use document middleware to perform some custom logic before saving a document.
        const mongoose = require('mongoose');
        const userSchema = new mongoose.Schema({ name: String });
        userSchema.pre('save', function(next) {
          #  Custom logic before saving
          next();
        });
    2. Model Middleware: Model middleware operates on entire collections of documents. It's triggered during actions like `insertMany`. For instance, you could use model middleware to perform some action before inserting multiple documents.
        const mongoose = require('mongoose');
        const bookSchema = new mongoose.Schema({ title: String });
        bookSchema.pre('insertMany', function(next) {
          #  Custom logic before inserting multiple documents
          next();
        });
    3. Aggregate Middleware: Aggregate middleware is for operations performed using `MyModel.aggregate()`. It allows you to modify aggregation pipelines. For example, you might use aggregate middleware to add a `$match` stage to every aggregation pipeline.
        const mongoose = require('mongoose');
        const productSchema = new mongoose.Schema({ name: String, price: Number });
        productSchema.pre('aggregate', function() {
          #  Modify the aggregation pipeline
          this.pipeline().unshift({ $match: { price: { $gt: 0 } } });
        });
    4. Query Middleware: Query middleware lets you modify queries before or after they are executed. It's triggered during actions like `find`, `findOne`, `update`, and `remove`. For instance, you could use query middleware to perform some custom logic before executing a `find` query. With respect to our case, deletion comes under query middleware. 
        const mongoose = require('mongoose');
        const articleSchema = new mongoose.Schema({ title: String, content: String });
        articleSchema.pre('find', function() {
          #  Custom logic before executing a find query
        });
In all these cases, "pre" hooks run before the main action, and "post" hooks run after the main action. They allow you to add custom logic before or after various actions on your MongoDB data.
    # IMPORTANT NOTE:
        # Memorizing which middleware will be triggered for each Mongoose operation can be challenging.
        # For example, using 'findByIdAndDelete' to delete a farm does not directly trigger a middleware named 'findByIdAndDelete'.
        # Instead, 'findOneAndDelete' middleware is triggered when 'findByIdAndDelete' is executed.
        # Therefore, it's crucial to refer to the Mongoose documentation to understand which middleware operations are triggered by specific CRUD operations.
        # REMEMBER: The name of the Mongoose operation used for CRUD (e.g., 'findByIdAndDelete') might differ from the middleware name that needs to be used for pre/post hooks (e.g., 'findOneAndDelete').

# Cookies:
    # They are small pieces of data that websites store on a user's browser. 
    # They are used to remember information about the user, such as login credentials, site preferences, or shopping cart items.
    # Types of cookies:
        1. Normal cookies: 
            #  These are standard cookies that are sent back and forth between the browser and the server with every HTTP request.
            #  They are not encrypted or signed, making them susceptible to tampering.
                #  Examples: Remembering user preferences (dark theme) or tracking user sessions.
        2. Signed cookies:
            #  These are similar to normal cookies but include a cryptographic signature, making them more secure.
            #  The signature ensures that the cookie has not been tampered with.
            #  They are often used for sensitive data like user authentication tokens.

#  cookie-parser: 
    #  It is a middleware for Express.js that parses cookies attached to the client's request and makes them available in the req.cookies object for easier access and manipulation.
    #  We have to use app.use(cookieParser()) before defining your routes, so that cookies are parsed before reaching your route handlers.

#  express-session: 
    #  npm i express-session
    #  It is a middleware too. With respect to use case, we will be using it similar to cookies.
    #  Once it is required, req will have acess to session property.
    #  When we use sessions, a unique session identifier is typically stored in a cookie on the client's browser. This cookie acts as a key to link the client's browser with the corresponding session data stored on the server.
        #  1. When a user accesses a website for the first time, the server generates a unique session identifier for that user's session.
        #  2. The server sends this session identifier back to the client's browser in the form of a cookie. This cookie is typically named something like session_id or similar.
        #  3. In subsequent requests made by the client (such as clicking on links or submitting forms), the client's browser automatically includes the session identifier cookie in the request headers.
        #  4. On the server side, Express uses the session identifier from the cookie to retrieve the corresponding session data stored on the server.
        #  5. The server then uses this session data to maintain the user's state and track their interactions with the website. This may include storing user preferences, authentication status, shopping cart contents, etc.

# Cookies vs Sessions:
# Sessions: 
    # They are a server-side mechanism for maintaining stateful information about a user’s interaction with a website.
    #  When a user visits a website, the server creates a unique session ID for that user.
    #  This session ID is stored on the server, typically in a file or a database.
    #  As the user interacts with the website (e.g., logs in, adds items to a shopping cart), the server associates relevant data with their session ID.
    #  The session data can include user-specific information, such as login status, preferences, and shopping cart contents.
    #  Sessions are generally more secure because the data resides on the server and can be encrypted.
#  Cookies: 
    # They are small pieces of data stored on the user’s device (usually in their browser).
    #  When a user visits a website, the server sends a cookie to their browser.
    #  The browser stores this cookie locally.
    #  Cookies can hold information like user preferences, login tokens, and tracking data.
    #  Unlike sessions, cookies are limited in size (usually around 4 KB per cookie).
    #  Cookies can persist even after the user leaves the site, depending on their expiration date.
    #  However, they are less secure because the data is stored in plain text on the client-side.

--------------------------------------------------------------------------------------------------
| Aspect     |                Sessions                  |              Cookies                   |
--------------------------------------------------------------------------------------------------
| Storage    | Server-side files that contain user      | Client-side files saved on the user's  |
|            | information.                             | computer.                              |
--------------------------------------------------------------------------------------------------
| Purpose    | Used to store large amounts of data on   | Used to store small amounts of data    |
|            | the server.                              | locally.                               |
--------------------------------------------------------------------------------------------------
| Security   | Generally more secure, as session data is| Less secure, as cookie data is stored  | 
|            | saved on the server and can be encrypted.| in plain text on the client-side.      |
--------------------------------------------------------------------------------------------------
| Lifetime   | Ends when the user closes their browser  | Depends on the lifetime set for the    | 
|            | or logs out.                             | cookie (can persist across sessions).  |
--------------------------------------------------------------------------------------------------
| Data       | Can hold an unlimited amount of data     | Limited to approximately 4 KB per      |
| Capacity   | (within server memory limits).           | cookie.                                |
--------------------------------------------------------------------------------------------------
| Activation | Requires starting the session explicitly | Automatically created when a user      |
|            | using the `session_start()` method.      | visits a website.                      |
--------------------------------------------------------------------------------------------------
| Data       | Session data is automatically deleted    | Cookies can persist even after the user| 
| Persistence| when the user logs out or shuts down the | leaves the site, depending on their    |
|            | machine.                                 | expiration date.                       |
--------------------------------------------------------------------------------------------------

#  Relationship between sessions and cookies:
    #  In web development, sessions are often implemented using cookies. When a user logs in or interacts with a web application, a unique session identifier (usually a random string) is generated and stored in a cookie on the user's browser.
    #  This session identifier is then sent back to the server with each subsequent request, allowing the server to retrieve the associated session data and maintain the user's state (e.g., login status, shopping cart contents, preferences) throughout their session.

#  We now that session is stored in servers. But where exactly?
    #  1. Memory: This approach provides fast access but may lose data if the server restarts. (default)
    #  2. File System: It can be stored as files on the server’s file system (e.g., in a temporary directory). These files are associated with the session ID.
    #  3. Databases: This approach allows persistence and scalability.
    #  4. Cache Systems: Some use cache systems (e.g., Redis) to store session data efficiently.
CONCLUSION: In terms of functionality, both cookies and sessions are used to store user-specific data to maintain state across HTTP requests. The primary difference lies in how they are stored, where they are stored, size of data that they can hold and security aspect due to the combinaiton of first two. 

# flash:
    #  npm i connect-flash
    #  Now every req object will have access to a property (method) called flash
    #  Syntax: 
        # To set: req.flash(type, message);
        #  To retrieve: req.flash(type) where type is optional
            #  type: Acts as a key 
            #  message: Stored as an array of messages under each type-key
    #  Examples: 
        #  To set a flash message: 
            #  req.flash('success', 'Successfully created')
            #  req.flash('success', 'Successfully updated') 
            #  req.flash('success', 'Successfully deleted') 
            #  req.flash('error', 'Failed to create') 
            #  req.flash('error', 'Failed to update')
        #  To retrieve a flash message:
            #  res.locals.messages = req.flash() - It retreives all the flash messages and stores it under res.locals with a variable name called messages. (can be any name by the way)
            #  res.locals.messages = req.flash('success') - It retrieves the success messages only. 
    #  Internally this is how the stored messages will look:
        {
            "success": ["Successfully created", "Successfully updated", "Successfully deleted"]
        }
#  res.locals:
    #  res.locals is an object that contains response local variables scoped to the request. This means that the variables stored in res.locals are available only for the life of the request and are not shared between different requests.
    #  The main purpose of res.locals is to pass data from your middleware to your view templates, enabling you to render dynamic content based on the data processed during the request. 
        #  In our case, .ejs files will have automatic access to the messages variable under res.locals
    #  Lifecycle of res.locals
        #  Initialization: When an HTTP request is received by the Express application, res.locals is initialized as an empty object.
        #  Middleware Population: Middleware functions can add properties to res.locals to store data that needs to be accessible to the view templates.
        #  View Rendering: When the request is finally handled by a route that renders a view, the data stored in res.locals is passed to the view template.
        #  Response Sent: After the response is sent to the client, the data in res.locals is discarded, and a new empty res.locals object is created for the next request.

#  Need for sessions without authentication:
To handle flash.
    #  HTTP, the protocol on which web applications are built, is stateless. This means that by default, the server doesn’t remember anything about the client between requests. However, in many applications, you need to maintain state (like user login information) between requests. This is where sessions come in.
    #  When a user logs in, the server creates a session with a unique identifier and stores it on the server-side. The server also sends a cookie back to the client, which contains this unique session identifier. For every subsequent request, the browser sends this cookie, and the server uses it to match the request with the session.
    #  Now, flash messages are a way to send one-time messages to the user. They get cleared after being displayed once. If you don’t use sessions while using flash, you won’t have a way to store these messages between requests, and they might not work as expected. Imagine a situation where you set a flash message during one request, but want to display it on a subsequent request (like after a redirect), the server wouldn’t remember the message unless it was stored somewhere.
    #  That’s where the session comes in. By storing the flash message in the session, the server can remember it across multiple requests. The message stays in the session until it’s displayed to the user, at which point it’s cleared out. This is why flash messages are often used for things like form validation errors or success messages, which you only want to display once.
    # They are added to the session via the req.flash(type, message) method. The type is usually a category like 'success' or 'error', and the message is the content of the flash message.

# Authentication vs Authorization: 
    # Authentication is the process of verifying the identity of a user or system. It answers the question: "Who are you?" 
    # Authorization, on the other hand, is the process of determining what actions a user is allowed to perform within a system or application.

# Hashing:
    # We never store the plain text passwords. 
    # Hashing are functions that takes arbitrary size input and converts it into fixed size output values (called hash code/hash value). (That is input may be different size but the output will always be of same length)
        1. Hashing is a one-way function. That is if we have the hashed output, we can’t figure out the original input data. Example of one-way function abs. abs (-100) is 100. With that output can we figure the input? No. It could be either 100 or -100. It has just 2 possibilities. So it might sound silly. But this example will help you to understand about one-way functions.
            # When you create an account, your password is hashed and stored. When you log in, your password is hashed again and compared to the stored hash. If they match, you’re in!
            # Now lets say that someone has stolen information of your database. They can't figure out anything with password. Why? They are stored in hash values and they are one-way functions. So we can't trace back to the input.
        2. Small change in the input leads to large change in the output
        3. Deterministic - Same input gives the same output. So its not that we are generating random values when a hashing function runs.
        4. Unlikely to find two same outputs with same value. 1.2 * sqrt(2^n) where n changes depending on the hash function. for SHA-256, n is 256. The choice of hash size often involves a trade-off between security and performance. Larger hashes provide more security against collisions but require more computational resources to generate and store.
        5. Password hashings are deliberately slow as hackers try billions of combinations in a short period of time. When the function is slow it will increase the total time taken significantly higher (many many years)
            # But SHA-256 is generally fast. So we cannot use that for passwords

# Salting:
    # It is a process used in cryptography to add an additional layer of security to hashed data.
        1. Generation of Salt: A salt is a random string of characters that is generated for each password. This salt is unique for each user or even each password instance.
        2. Combining Salt and Password: The salt and the password are combined, typically through concatenation. This means that even if two users have the same password, their salted passwords will be different.
        3. Hashing: The combined salt and password are then passed through a hash function. This produces a hashed output that is unique to the salted password.
        4. Storing the Salt and Hash: The salt and the hashed output are stored in the database. The salt can be stored in plaintext, as knowing the salt alone is not enough for an attacker.
    # When a user tries to authenticate, the same process is repeated: the salt is added to the entered password, the result is hashed, and the output is compared to the stored hash. If the two hashes match, the password is correct.
    # So why salting is required?
        # 4% of the entire passwords are commonly used passwords like qwerty, 123456, abcdef, etc.
        # So the attackers will make a table called rainbow table which is filled with most commonly used passwords and their corresponding hash values.
            # To do this, the attacker needs to know which type of hashing function is used. Since there are few hashing functions, a well trained hacker will be able to spot the type of hashing function just by looking at the hash value. So when the database is stolen, they can certainly figure the type of hashing function.
        # Now without salting, they can compare the hash values stored in the database and their rainbow table. When the values match , they can figure-out the password. 
        # Salting prevents this. Since it adds a string, qwerty will have a completely different hash value than what is it is present in their rainbow table.

# Bcrypt:
    # It is a password hashing function.
    # It helps us to hash the password and also takes care of salting.
    # Installation: There are 2 packages for bcrypt.
        # bcryptjs: Made entirely from JS. Can run on both client and server side
        # bycrypt: Can run only on server side (we will use this). It is made for node. It is built on top of c++.
            # npm i bcrypt

# JSON Web Token:
    # Installation: npm i jsonwebtoken
    # JWT is used for securely transmitting information between parties as a JSON object. In many applications, it's used to authenticate users after they log in. Once authenticated, the user can perform operations without re-entering credentials for every request.
        # Example: When a user logs in, a token is generated and sent back in a response (typically as part of a cookie). This token is used to verify the user in subsequent requests, eliminating the need to repeatedly ask for the password. 
    # Structure of JWT: It consist of three parts separated by dots (.) - Header, Payload and Signature.
        # Example: xxxxx.yyyyy.zzzzz
    # Methods:
        # const token = jwt.sign(payload, secretOrPrivateKey, [options, callback])
        # const isTokenSame = jwt.verify(token, secretOrPublicKey, [options, callback])
    # payload will be generally the user object; secretOrPrivateKey is chosen by the developer (can be anything); options deals with encryption method for token generation and callback to log the outcome of the token generation/verification

# Indexes:
    # They are special data structures that store a small portion of the collection’s data in an easy-to-scan form.
    # When you query a MongoDB collection, MongoDB will check if an index exists on the fields in the query. If an index is found, the query will run much faster by scanning the index instead of the entire collection.
    # Compound Index:  It is an index that includes more than one field. Here, the order of fields in a compound index is important. 
        # Example: schema.index({ first: 1, last: -1 })

# Mongo relations
There are multiple ways by which datas can be related. Lets consider an example of user details in twitter.
    1. One to few: Embedded - The most common way which we know. Just nest documents within documents within documents and so on.
        Example: user's properties - first name, last name, email, location, likes, comments, tweets, etc. Now location can have few properties - street, city, country, pincode, etc.
    2. One to many: Separate documents but they are connected with a reference - Parent will hold childs reference
        Example: User (parent) - comment (child) => When you look at the user, we can find all the comments
    3. One to too many: Same as above. But here child will hold parents reference.
        Example: User (parent) - comment (child) => When you look at a comment, we can see user details.
With respect to 2 and 3, both can be combined too. That is both can hold each others reference. Depending up on the requirement we have to make our decisions to choose from above. Also, in SQL DB we avoid duplication of data. But here, we may duplicate things (which is technically called denormalization) if required. Denormalization is the process of duplicating fields or deriving new fields from existing ones.

# When does database denormalization make sense?
1. With denormalization you can avoid costly joins, at the expense of having more complex and expensive updates. Therefore, you should practice denormalization on only those fields that are read most often and are seldom updated since data redundancy is less of an issue.
2. If you frequently run $lookup operations, consider restructuring your schema through denormalization such that the your application can query a single collection to obtain all of the information it needs. Use embedded documents and arrays to capture relationships between data in a single document structure.
So embrace database denormalization for operational databases—the efficiency of reading or writing an entire record in a single operation outweighing any modest increase in storage requirements. A field that will mostly be read and only seldom updated is a good candidate for denormalization.

# When does database normalization make sense?
1. When embedding would result in duplication of data but would not provide sufficient read performance advantages to outweigh the implications of data duplication.
2. To represent more complex many-to-many relationships.
3. To model large hierarchical data sets.

# When deciding on database denormalization, consider the following factors:
We cannot perform an atomic update on denormalized data. (Atomicity property will be broken)
    Example: consider a monetary transfer from bank account A to account B. It consists of two operations: withdrawing the money from account A and saving it to account B. Performing these operations in an atomic transaction ensures that the database remains in a consistent state, i.e., money is neither lost nor created if either of those two operations fails. But denormalization can make atomic updates challenging because the same piece of data may exist in multiple places. If you update it in one place, you must also update it in all other places to maintain consistency. If any part of this multi-step update fails, it could lead to inconsistencies in the database
Denormalization only makes sense when you have a high read-to-write ratio.

# Official guidlines to ask questions before deciding in the type of realtionship that you want to maintain
1. What is the cardinality of the relationship? Is it “one-to-few,” “one-to-many,” or “one-to-squillions”?
2. Do you need to access the object on the “N” side separately, or only in the context of the parent object?
3. What is the ratio of updates-to-reads for a particular field?

# ref and populate:
    # The ref keyword in Mongoose allows you to define a reference to another document in a different collection. It's like setting up a foreign key in SQL, but instead of enforcing referential integrity, it's just a reference to another document’s _id.
    # Once you have defined a reference using ref, you can use Mongoose’s populate() function to automatically retrieve the data from the referenced document (instead of just getting the _id).

# Pagination:
    # It is the process of dividing a large set of data into smaller, more manageable chunks, or pages. 
    # This is essential in web applications, especially when dealing with large datasets, such as search results, product listings, or blog posts, where showing all data at once would be inefficient and overwhelming for the user and server.
    # Instead of loading the entire dataset at once, pagination allows you to load just one page at a time, making it easier to navigate through the dataset and reducing the load on both the server and the client.
    # Common Pagination Methods: 
        1. Offset-based: It involves using an offset and a limit to determine which items to return. Offset specifies the number of records to skip from the beginning of the dataset and Limit specifies the maximum number of records to return in a single query.
            # Example:
                const page = parseInt(req.query.page) || 1;
                const limit = parseInt(req.query.limit) || 10;
                const skip = (page - 1) * limit;
                const users = await User.find().skip(skip).limit(limit);
        2. Cursor-based: It does not rely on skipping records. Instead, it uses a cursor (a unique identifier such as an _id or timestamp) to determine where the next page of results should start. Here, Each page query returns a set of results, along with a cursor pointing to the last item on the page. The client stores the cursor and uses it in the next request to fetch the subsequent set of results.
            # Example: 
                const lastId = req.query.lastId;
                const limit = parseInt(req.query.limit) || 10;
                const query = lastId ? { _id: { $gt: lastId } } : {};
                const users = await User.find(query).limit(limit);
        3. Page-based: It is similar to offset-based pagination but explicitly works with page numbers. Instead of using an offset, you use a page number and a limit (the number of items per page).
            # Example: 
                const page = parseInt(req.query.page) || 1;
                const limit = parseInt(req.query.limit) || 10;
                const skip = (page - 1) * limit;
                const users = await User.find().skip(skip).limit(limit);

# Express Mongoose Sanitize:
    # It is a middleware that helps prevent NoSQL injection attacks by sanitizing user input and removing harmful characters from MongoDB queries
    # NoSQL injection is a type of attack where an attacker tries to inject malicious code into a NoSQL database query, such as MongoDB, through user input fields.
    # Example: User.find({ username: req.body.username }); Here req.body.username comes from the user's input. If the user has entered { $gt: "" }, the query will change to User.find({ username: { $gt: "" } }); That is it will return all users (as all users are > an empty string)
    # So, the primary function of express-mongo-sanitize is to sanitize user inputs by removing any $-prefixed keys and . characters from objects passed to MongoDB queries.  The middleware cleans up the incoming request data (both the req.body and req.query objects) and ensures that malicious characters are removed, so the query remains safe.
    # npm i express-mongo-sanitize

# Cross Site Scripting (XSS):
    # The core idea of XSS is that attackers find ways to inject their own scripts into web pages that are then executed by the victim’s browser to steal sensitive information like cookies, session tokens, or even perform actions on behalf of the user.
    # Injections could happen via form input, query parameters, or any other means of user-generated content. When the victim visits the compromised page, the malicious script is executed in their browser.
    # Example: An attacker submits a comment like this. 
        <script>alert('Your session has been hijacked!');</script> 
    Now, every time another user visits that page, their browser executes the script, showing an alert. A more dangerous script could be used to steal cookies or redirect the user to a phishing page.

# Difference Between XSS and Injection Attacks:
|------------------|---------------------------------|-------------------------------------|
| Feature          | XSS (Cross-Site Scripting)      | Injection Attacks (SQL/NoSQL, etc.) |
|------------------|---------------------------------|-------------------------------------|
| Target           | User’s browser                  | Server or database                  |
| Attack vector    | Client-side (usually in browser)| Server-side (affects database, etc.)|
| Payload          | Script (usually JavaScript)     | Code or query (SQL, NoSQL, etc.)    |
| Primary Goal     | Affect other users              | Compromise server/database          |
| Common Prevention| Input sanitization, CSP         | Input sanitization, prepared queries|
|------------------|---------------------------------|-------------------------------------|

# helmet:
    # It is a middleware for Express.js that helps secure your web application by setting various HTTP headers.
    # It provides protection against some well-known web vulnerabilities by configuring headers that are often overlooked in web development. These headers enhance security by preventing certain types of attacks like cross-site scripting (XSS), clickjacking, and other HTTP-based exploits.
    # app.use(helmet()) will include all the headers be default.
    # One of the header is "Content-Security-Policy". When we used app.use(helmet()) initially our broke due to "Content-Security-Policy" header. This is because CSP Helps prevent XSS attacks and data injection attacks by restricting which resources (scripts, styles, images) the browser is allowed to load.
        # So, we have to specify our sources to CSP like bootstrap, unsplash, fonts, etc.
    # npm i helmet

# connect-mongo:
    # It is an official MongoDB session store for Express.js.
    # In Express, sessions are typically stored using the express-session middleware. This middleware by default stores session data in memory (MemoryStore), which is not suitable for production since the session data is lost when the server restarts.
    # By using connect-mongo, session data is persisted in a MongoDB database. You configure it to store and retrieve session data via MongoDB instead of the default MemoryStore.
    # It basically creates a collection called sessions and stores the session data users in the database. 
    # In our DD project we have included the following code after importing 'connect-mongo'
        const store = MongoStore.create({
            mongoUrl: process.env.DB_URL,
            touchAfter: 24 * 60 * 60,
            crypto: {
                secret: 'destinationDiaries2024'
            }
        });
    # We have then passed store to session object
    # npm i express-session connect-mongo
