# What is Node?
    # Until recently we could run JS code only in a web-browser (client side). Node is JS runtime that executes code outside of the browser.
    # For server side we relied on python/ruby/php. Now JS can be used in server side too with the help of NodeJs.
    # Even before node we had Netscape's 'Livewire Pro Web' which can do the same but only for linux and macos.

# What can we build with Node?
    1. Web servers
    2. Command Line Tools
    3. Native Apps (VSCode is a Native app)
    4. Video games
    5. Drone Software, etc.

# We will using JS in CLI rather than in browser.
    # Window, document, DOM API's (browser specific concepts) are not a thing in node
    # But we can interact with OS and files/folders

Note: Native apps are software applications developed specifically for a particular platform or operating system. Unlike cross-platform or web apps, native apps are designed to run on a specific device or operating system, taking advantage of the platform's features and capabilities. These apps are written in languages that are compatible with the target platform, such as Swift or Objective-C for iOS, and Java or Kotlin for Android.

# Starting node:
    # Just node and hit enter in CLI. This environment is called as node REPL.
    # Node REPL (Read-Eval-Print Loop) is an interactive CLI that comes with Node.js. It allows you to interactively execute JavaScript code, line by line, and see the results immediately. The REPL environment is useful for testing out code snippets, exploring JavaScript features, and debugging.
    > .help
        # .break   -  Sometimes you get stuck, this gets you out
        # .clear   -  Alias for .break
        # .editor  -  Enter editor mode
        # .exit    -  Exit the REPL
        # .help    -  Print this help message
        # .load    -  Load JS from a file into the REPL session
        # .save    -  Save all evaluated commands in this REPL session to a file

    # We can just type the typical JS code within CLI 
    # Window object has the global scope in JS. Similarly here the gobal scope is named 'global'
    # Executing the file: node fileName/pathToTheFileName 
        # Example: node test.js or node "C:\Users\Bharath Srinath\Documents\GitHub\web-development\node\test.js"

# fs Module:
    # The File System module in Node.js provides an API for interacting with the file system. 
    # It allows us to perform various file-related operations such as reading from and writing to files, creating directories, and managing file permissions. 
    # This module is part of the Node.js core, so we don't need to install any additional packages to use it. Just use this at the top of the file "const fs = require('fs');".
    # They can be sync/async. 
    # There are extremely large number of commands. We will lokk at some of them.
1. Reading Files: fs.readFile() and fs.readFileSync()
        fs.readFile('example.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
        console.log(data);
        });
    example.txt is the filename. utf8' specifies the character encoding to be used while reading the file. UTF-8 character set supports a wide range of characters from various languages. Other values are ascii, utf16le, latin1/binary, null/undefined, etc. (err, data) is the callback function.
2. Writing Files: fs.writeFile() and fs.writeFileSync()
        fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
            if (err) {
                console.error(err);
                return;
            }
        console.log('File written successfully.');
        });
3. Working with Directories:
        fs.mkdir('example', (err) => {
            if (err) {
                console.error(err);
                return;
            }
        console.log('Directory created successfully.');
        });
        fs.readdir('example', (err, files) => {
            if (err) {
                console.error(err);
                return;
            }
        console.log('Files in the directory:', files);
        });
4. Checking if a File or Directory Exists:
        if (fs.existsSync('example.txt')) {
            console.log('File exists.');
        } else {
            console.log('File does not exist.');
        }

# process object:
    # It is a global object that provides information and control over the current Node.js process. 
    # It allows you to access various details about the running process, interact with the environment, and control the execution flow.
    # One commonly used property of the process object is argv (argument vector). It is an array that contains the command-line arguments passed to the Node.js process. The first two elements of the array are:
        1. The path to the Node.js executable. (node)
        2. The path to the JavaScript file being executed. (fileName)
    # After these initial elements, the rest of the array contains any additional command-line arguments provided when running the Node.js script.

Example.js
console.log('The path to the Node.js executable:', process.argv[0]);
console.log('The path to the JavaScript file being executed:', process.argv[1]);
console.log('Command-line arguments:', process.argv.slice(2));
    # slice is to exclude argv[o] and argv[1] and consider the rest

CLI: node example.js arg1 arg2 arg3

Output:
The path to the Node.js executable: /path/to/node
The path to the JavaScript file being executed: /path/to/example.js
Command-line arguments: [ 'arg1', 'arg2', 'arg3' ]

    # process.cwd() => Prints the working directory
    # process.cwd(..) => Goes back one directory
    # process.chdir("Path") => Changes the directory. The path should have forward slahes or double backslashes.

# NPM (node package manager)
    # They are basically a library of thousands of packages published by other devlopers that can be used by us in our project.
    # Just type 'npm' and hit enter in CLI to see the install of commands that you can use with npm.
        # Example: npm install packageName, npm unistall packageName
    # All commands:
        access, adduser, audit, bugs, cache, ci, completion,
        config, dedupe, deprecate, diff, dist-tag, docs, doctor,
        edit, exec, explain, explore, find-dupes, fund, get, help,
        help-search, hook, init, install, install-ci-test,
        install-test, link, ll, login, logout, ls, org, outdated,
        owner, pack, ping, pkg, prefix, profile, prune, publish,
        query, rebuild, repo, restart, root, run-script, search,
        set, shrinkwrap, star, stars, start, stop, team, test,
        token, uninstall, unpublish, unstar, update, version, view,
        whoami
    # package.json is a metadata file that provides information about a Node.js project. It includes details about the project, such as its name, version, entry point, scripts, and dependencies. We can create package.json with a command 'npm init'. But when you install node.js, it is automatically created (latest update).

# Local vs Global installation of packages:
    # Locally install packages in a project directory as often as you can. Because you may work with different projects each of which require different versions. Newer versions may not work woth projects that depend on older version
    # But if at all you want to install globally, add this -g tag
        # Example: npm install -g packageName 

# Express
    # It is a framework for creating server side application using Node.js
        # Libary: We are in control of the flow of the application code and we decide when to use the library.
        # Framework: Here the control is inverted. The framework is incharge and we are merely a participant. It tells you where to plug in the code. 
    # At its core, it is also a package that we install and make use of.
    # Uses:
        1. Starts a server to listen for request
        2. Parse incoming requests
        3. Match those request to particular routes
        4. craft our http reponse and associated content
# nodemon
    # It is a utility for Node.js that helps in the development process by automatically restarting the Node application when file changes are detected. 

# Templating
    # Templating is a technique used in web development to separate presentation (HTML/CSS) from logic(JS).
    # It allows us to inject dynamic data into your HTML which is useful for displaying user-specific data, form submissions, database queries, etc.
    # It allows us to reuse the same base layout across multiple pages which reduces code duplication.
    # Templates are written in a templating language that allows you to embed code inside HTML. 
    # We will be using EJS(Embedded JS). Others are Pug, Handlebars, Mustache.
    # In React, we use {} to embed JS expressions within JSX (we say that it escapes JSX). Similarly we use the tag <%= %> in EJS to embed JS expressions (HTML escaped). But there are other tags too.
        # <% %> : Used to enclose JS code but doesn't render the code. See in an html file we cannot add a JS logic like if (n%2 == 0) print("Even"). But when you enlcose the logic with this tag, we can add it.
Note: Install ejs extensio =n in vscode for formatiing purpose

# Partials
    # They are just reusbale html codes. For an example, in every html/ejs file we see the head is generally the same. We can import this into other html/ejs files rather than duplicating it everytime.
    # <%- inlcude( 'filename/path' ) %> is tag to include it. 
    # For a better structure, always create a folder called partials and place those files inside it.
    
# Get vs Post
    1. GET:
        # It is mainly used on the client (Browser) side to send a request to a specified server to get certain data or resources1.
        # The server should only let us receive the data and not change its state.
        # The request parameter of the GET method is appended to the URL.
        # It can be cached, remain in the browser history, and can be bookmarked.
        # It should never be used when dealing with sensitive data.
        # They have length restrictions.
        # They are only used to request data (not modify).
    2. POST:
        # It is mainly used at the client (Browser) side to send data to a specified server in order to create or rewrite a particular resource/data.
        # This data sent to the server is stored in the request body of the HTTP request.
        # They are never cached, do not remain in the browser history, and cannot be bookmarked.
        # They have no restrictions on data length.
        # They can handle ASCII characters as well as binary data.
        # It is a little safer than GET because the parameters are not stored in browser history or in web server logs.

# Put vs Patch
    1. PUT:
        # PUT is used to update an entire resource.
        # If the resource does not exist, PUT can create a new resource.
        # PUT is idempotent, meaning calling it once or multiple times successively has the same effect.
            # Example: if you want to update a user’s name and email, you have to send all the parameters of the user, including those not to be updated, in the request body. It will update the content to be edited and replace the rest with the same content.
    2. PATCH:
        # PATCH is used to update partial data within a resource.
        # PATCH only updates the fields that were included in the request body.
        # PATCH is not idempotent, meaning the outcome might be different if you call it multiple times in a row.
            # Example: if you want to update a user’s email, you only need to send the new email in the request body.

# REST - Representational State Transfer
    # It is an architectural style to a separate protocol like HTTP. To understand this we have to know what existed before REST => SOAP (Simple Object Access Protocol)
    # In a SOAP-based web service, you would typically send different SOAP messages (in an XML document) to the same endpoint (same URL like www.example.com) to perform different operations or interact with different resources. The specific operation or resource is determined by the content of the SOAP message, not the URL.
    # In a RESTful web service, each resource has its own unique URL (like www.example.com/books/1 for the first book, www.example.com/books/2 for the second book, etc.). The operation you want to perform (like getting information about a book, updating a book, deleting a book, etc.) is determined by the HTTP method (like GET, POST, PUT, DELETE) you use when you make the request.
    # So the simple understandin for REST is using specific URLs (also known as “endpoints”) to represent resources, and different HTTP methods (like GET, POST, PUT, DELETE) to represent operations you can perform on those resources. Look at the below example. Here we are using comments as a resource
        # GET /comments - display all comments
        # POST /comments - Create a new comment 
        # GET /comments/:id - Get one comment (using ID)
        # PATCH /comments/:id - Update one comment
        # DELETE /comments/:id - Destroy one comment
