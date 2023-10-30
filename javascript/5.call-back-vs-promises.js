// call backs
// It is a function that is passed as an argument to another function and is intended to be executed after the completion of a specific task or at a particular event.
// Look at the below example.
// Here 'isRightTriangle()' will be called first.
// This then calls 'square()'for the first parameter which will call 'multiply()'
// Now multiply will return the result to sqaure which will return the result to isRightTriangle. This process will now continue for other parameters too. But this is not the point here.
// See, until multiply fucntion returns a value to the square, it can't perform the action. It is waiting. Same applies to isRightTriangle(). It has to wait until square() returns a value to it.   Thus we can say that they are intended to be executed after the completion of a specific task.

const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)
console.log("BEFORE")
isRightTriangle(3, 4, 5)

console.log("DONEEEE!")

// call back hell
// With above examples, we have assumed that everything will go as expected with each call back. But that may not be the case. Hence, We will always write a code for "what if a particular function doesn't work as expected during a call back?". This will result into an unavoidable nesting that may look like below. We have no of way of eliminating but there are ways where we can simplify it.

const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

// This might look daunting. But below is the function declaration with 3 arguments and above is the function definition.
    // fakeRequestCallback('books.com/page1', function (response), function (response))
    // first function (response) corresponds to success() while the second corresponds to failure() 
        // This is being repeated for 3 callbacks which are nested inside each other.

fakeRequestCallback('books.com/page1',
    function (response) {
        console.log("IT WORKED!!!!")
        console.log(response)
        fakeRequestCallback('books.com/page2',
            function (response) {
                console.log("IT WORKED AGAIN!!!!")
                console.log(response)
                fakeRequestCallback('books.com/page3',
                    function (response) {
                        console.log("IT WORKED AGAIN (3rd req)!!!!")
                        console.log(response)
                    },
                    function (err) {
                        console.log("ERROR (3rd req)!!!", err)
                    })
            },
            function (err) {
                console.log("ERROR (2nd req)!!!", err)
            })
    }, function (err) {
        console.log("ERROR!!!", err)
    })


// Promise
// They are a way to handle asynchronous operations in a more structured and readable manner.
// Syntax:
    // const variableName = new Promise((resolve, reject) => {
    //     if (operationIsSuccessful) {
    //       resolve("Success result");
    //     } else {
    //       reject(new Error("An error occurred"));
    //     }
    //   });
  
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// Just like above where you use 2 functions to capture success and failure, here too we have 'then' and 'catch' method to capture resolve and reject. Here too we are nesting the function declarations.

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log("IT WORKED!!!!!! (page1)")
        fakeRequestPromise('yelp.com/api/coffee/page2')
            .then(() => {
                console.log("IT WORKED!!!!!! (page2)")
                fakeRequestPromise('yelp.com/api/coffee/page3')
                    .then(() => {
                        console.log("IT WORKED!!!!!! (page3)")
                    })
                    .catch(() => {
                        console.log("OH NO, ERROR!!! (page3)")
                    })
            })
            .catch(() => {
                console.log("OH NO, ERROR!!! (page2)")
            })
    })
    .catch(() => {
        console.log("OH NO, ERROR!!! (page1)")
    })

// In the first scenario, the association is based on the order of arguments in the function call. The first argument provided corresponds to the first parameter in the function definition, the second argument corresponds to the second parameter, and so on. This method relies solely on the position of the arguments in both the function definition and the function call.
// In Promises, the associations are based on the use of specific methods like .then() and .catch(). These methods always refer to the first argument provided as a success callback for .then() and the second argument as an error callback for .catch(). 


fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!!!!! (page1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!")
        console.log(err)
    })

// Here, we are not nesting, rather we are chaining it.
    // Chaining:
        // It is the practice of linking multiple method calls or operations together in a sequence. 
        // It allows you to perform a series of tasks or operations one after the other, with the output of one operation becoming the input for the next.
        // Ex:
            // const numbers = [1, 2, 3, 4, 5];
            // const result = numbers.map((x) => x * 2).filter((x) => x > 5).reduce((acc, x) => acc + x, 0);
    // This is what is exactly happening below. Just that we are writing in different lines for readability.
        // Only difference is that we are making up a return value that is suitable for this demonstration rather than the default value (which would have been console.log(data)) of one being passed on to the next.

// Another Example:
// Regular callback: 

const delayedColorChange1 = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
        // This line of code is interesting. So pay attention.
        // doNext is the variable that holds the callback function and doNext() is the function itself.
            // This line will return true only when doNext has a variable stored in it and doNext() will be an executable function.
            // Imagine this. Once the code has reached violet color , there is nothing that could be stored in doNext. So when doNext is null, the code exits.
            // Also, lets say there exists another line which is not a function, you dont want that to be stored in doNext and gets executed. To avoid this, we also check for 'if there exists a next line and that line is a function'. Only then both conditions will satisfy and the program will carry on. If not, it indicates that there are no more functions that needs to be executed.   
    }, delay)
}

delayedColorChange1('red', 1000, () => {
    delayedColorChange1('orange', 1000, () => {
        delayedColorChange1('yellow', 1000, () => {
            delayedColorChange1('green', 1000, () => {
                delayedColorChange1('blue', 1000, () => {
                    delayedColorChange1('indigo', 1000, () => {
                        delayedColorChange1('violet', 1000, () => {

                        })
                    })
                })
            })
        })
    })
});

// Using promises:
// In this example, we are not making use of reject. Hence we dont need '.catch'

const delayedColorChange2 = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// We are again chaining them and using implicit declaration we are returning one to the next
delayedColorChange('red', 1000)
    .then(() => delayedColorChange2('orange', 1000))
    .then(() => delayedColorChange2('yellow', 1000))
    .then(() => delayedColorChange2('green', 1000))
    .then(() => delayedColorChange2('blue', 1000))
    .then(() => delayedColorChange2('indigo', 1000))
    .then(() => delayedColorChange2('violet', 1000))


// Async functions
// It is a special type of function that is designed to work with Promises and simplify asynchronous code.
// Asynchronous functions:
    // They are those that doesn't necessarily execute in a linear or sequential order from top to bottom. 
    // Instead, it allows for operations to run in the background and not block the main thread of execution. 
    // This is particularly important for tasks that might take some time to complete, such as fetching data from a remote server, reading a file from disk, or waiting for a user's input.
    // Ex: setTimeout()
// Async functions always return a Promise. If the function returns a value, the promise will be resolved with that value. If the function throws an exception, the promise will be rejected.
    // Hence, with async we dont need a constructor called new promise()

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    // Throw is used for error handling. When throw is executed, the entire program comes to halt if you dont catch it with catch().
    if (password === 'corgifeetarecute') return 'WELCOME!'
    throw 'Invalid Password'
}

login('todd', 'corgifeetarecute')
    .then(msg => {
        console.log("LOGGED IN!")
        console.log(msg)
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    })

// await
// Example 1:
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// Here we are neither using nesting nor using chaining. Rather we are using a special function called await that works hand-in-hand with promises.
// It is used to pause the execution of an async function until the Promise being awaited is resolved. 

async function rainbow() {
    await delayedColorChange('red', 1000)
    // See the line below will run only after the completion of the line above 
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "ALL DONE!"
}

async function printRainbow() {
   const var1 = await rainbow();
   console.log(var1);
    console.log("END OF RAINBOW!")
}
printRainbow();

// Example 2:
// In previous example we didn't consider the possibility of rejection while the 'await' is waiting. The next await will be executed only when the previous await is 'resolved' with a value. What if, if the previous function was rejected? If there is an error, it will reject it. This will stop the execution of the next lines of code. To overcome we can use the try and catch method.
// Before that lets try and understand the difference between 'try and catch' vs '.then and .catch'
    // try and catch: They are used with regular functions and blocks of code. It can be used in any function, whether synchronous or asynchronous, to capture and handle exceptions.
    // .then and .catch: They are methods provided by Promises. They are used with functions that return Promises, typically in asynchronous operations.
// To put it simply, try and catch can be used with any block of code whereas .them and .catch can be used only with functions that return promises. 

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {
        console.log("CAUGHT AN ERROR!")
        console.log("error is:", e)
    }
}
makeTwoRequests();