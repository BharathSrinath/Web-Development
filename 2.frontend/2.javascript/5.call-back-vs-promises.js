// Asynchronous/async functions
    // Generally functions are synchronous. That is they are executed in a sequential and blocking manner. When a synchronous function is called, it runs to completion before the program continues to the next line of code.
    // Asynchronous fucntions on the other hand do not block the execution of other code while they are running. Instead, they allow other parts of the program to continue running concurrently, even if the asynchronous function has not yet completed its task.
    // This is particularly important for tasks that might take some time to complete, such as fetching data from a remote server, reading a file from disk, or waiting for a user's input.
        // Example: All callback functions
        // Specific example: setTimeout()

// call backs
// It is a function that is passed as an argument to another function and is intended to be executed after the completion of a specific task or at a particular event.
// Look at the below example.
    // Here 'isRightTriangle()' will be called first.
    // This then calls 'square()'for the first parameter which will call 'multiply()'
    // Now multiply will return the result to square which will return the result to isRightTriangle. This process will now continue for other parameters too. But this is not the point here.
    // See, until multiply function returns a value to the square, it can't perform the action. It is waiting. Same applies to isRightTriangle(). It has to wait until square() returns a value to it.   Thus we can say that they are intended to be executed after the completion of a specific task.

const multiply = (x, y) => x * y;

const square = x => multiply(x, x);
 
const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)
console.log("BEFORE")
isRightTriangle(3, 4, 5)

console.log("DONEEEE!")

// call back hell/Pyramid of doom
// With above examples, we have assumed that everything will go as expected with each call back. But that may not be the case. Hence, We will always write a code for "what if a particular function doesn't work as expected during a call back?". This will result into an unavoidable nesting that may look like below. We have no of way of eliminating but there are ways where we can simplify it.

const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 2000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

// This might look daunting. But below is the function declaration with 3 arguments and above is the function definition.
    // fakeRequestCallback('books.com/page1', function (response), function (err))
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
// It is an object that represents an eventual completion/failure of an asynchronous operation. It provides a way to handle asynchronous code in a more structured manner, allowing you to chain callbacks using .then() for successful outcomes and .catch() for error handling.
// How Promises Work?
    // Promise Constructor: The Promise constructor takes a single function argument called the executor function, which itself takes two arguments: resolve and reject. These are callback functions provided by the JavaScript engine.
    // Resolve and Reject: resolve is called when the asynchronous operation completes successfully, passing the result. reject is called when the operation fails, passing the error.
// Promise in JS are immutable objects. 
// They can be in one of the 3 states - 
    // Pending - It doesn't yet have a value
    // Resolved - It has successfully obtained a value
    // Rejected - It failed to obtain a value for some reason
// The only way to access the resolved/rejected value is to chain a method on the end of the promise(or await it).
// Syntax:
    // const variableName = new Promise((resolve, reject) => {
    //     if (operationIsSuccessful) {
    //       resolve("Success result");
    //     } else {
    //       reject(new Error("An error occurred"));
    //     }
    //   });

// 'resolve' and 'reject' are callback functions provided by the Promise constructor. They are used to signal the completion or failure of an asynchronous operation, respectively.
// When you call resolve(result), the promise is considered fulfilled. When you call reject(error), the promise is considered rejected.

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
delayedColorChange2('red', 1000)
    .then(() => delayedColorChange2('orange', 1000))
    .then(() => delayedColorChange2('yellow', 1000))
    .then(() => delayedColorChange2('green', 1000))
    .then(() => delayedColorChange2('blue', 1000))
    .then(() => delayedColorChange2('indigo', 1000))
    .then(() => delayedColorChange2('violet', 1000))


// Async functions
// It is a special type of function that is designed to work with Promises and simplify asynchronous code.
// Async functions always return a Promise. If the function returns a value, the promise will be resolved with that value. If the function throws an exception, the promise will be rejected.
    // Hence, with async we dont need a constructor called new promise()
    // Even if you manually return a string or a number, the value will be returned after wrapping it with a promise. 
// Any function in JS can be declared as async

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    // Throw is used for error handling. When throw is executed, the entire program comes to halt if you dont catch it with catch().
    if (password === 'youareawesome') return 'WELCOME!'
    throw 'Invalid Password'
}

login('todd', 'youareawesome')
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

// Here we are neither using nesting nor using chaining. Rather we are using a special function called await
// IMPORTANT NOTE: await cannot be used separately without async. 
// Most importantly async and await are built on top of promises which by itself is built on the concept of callbacks but providing a cleaner, more structured approach. 
// async-await are mere sure syntactic sugar that makes the code more readable.
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
   console.log("END OF RAINBOW!");
}
printRainbow();

// Example 2:
// In previous example we didn't consider the possibility of rejection while the 'await' is waiting. The next await will be executed only when the previous await is 'resolved' with a value. What if, if the previous function was rejected? If there is an error, it will reject it. This will stop the execution of the next lines of code. To overcome we can use the try and catch method.
// Before that lets try and understand the difference between 'try and catch' vs '.then and .catch'
    // try and catch: They are used with regular functions and blocks of code. It can be used in any function, whether synchronous or asynchronous, to capture and handle exceptions.
    // .then and .catch: They are methods provided by Promises. They are used with functions that return Promises, typically in asynchronous operations.
// To put it simply, try and catch can be used with any block of code whereas .then and .catch can be used only with functions that return promises. 

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

// promise with .then vs async-await
// Example:

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise resolved value");
    },10000)
});

// using async-await
async function handlePromise(){
    const val = await p;
    // Here we are awaiting promise. Without resolving the above line, the control will not move to the next line.
    // Hence both "Namaste JS" and  "Promise resolved value" will be printed at the same time after 10s.
    console.log("Namaste JS!");
    console.log(val);
}
handlePromise();

// using promise with .then
function getData(){
    p.then(res => console.log(res));
    // Here "Namaste JS!" will be printed immediately without waiting for the promise to resolve.
    // After 10 seconds "Promise resolved value" will be printed.
    // That is JS Engine doesn't wait for the promise to be resolved
    console.log("Namaste JS!")
}

// async-await - behind the scenes
// Example 1:

    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved value 1");
        },10000)
    });

    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved value 2");
        },5000)
    });

    async function handlePromise(){
        const val1 = await p1;
        console.log("Namaste JS 1!");
        console.log(val1);

        const val2 = await p2;
        console.log("Namaste JS 2!");
        console.log(val2);
    }
    handlePromise();
// Here we have 2 await with in a single function. We haven't learned this before. So pay attention!
// Execution cotext is created
// variables and functions are assigned a value in the Variable Environment
// Now under code component, 
    // Two promises p1 and p2 are created
        // At this point, both p1 and p2 are in the "pending" state, and the setTimeout callbacks are registered in the browser's Web API environment.
    // The handlePromise() function is called and pushed onto the call stack with a newly created execution context.
    // When await is encountered, JS Engine checks whether the promise is resolved or not.
    // Since p1 is pending, handlePromise() is suspended and removed from the call stack.
    // The engine continues executing other tasks in the event loop (if available).
    // After 5,000ms, the setTimeout for p2 triggers first and the callback inside setTimeout for p2 moves to the task queue.
    // The call stack is empty, so the event loop picks up this callback and pushes it onto the call stack.
    // The callback executes, resolving p2 with "Promise resolved value 2" and now p2 is resolved.
    // After 10,000ms, the setTimeout for p1 triggers.
    // The callback inside setTimeout for p1 moves to the task queue. Again, the event loop picks this callback and pushes it onto the call stack.
    // The callback executes, resolving p1 with "Promise resolved value 1" and now p1 is resolved.
    // Once p1 is resolved, the promise returned by await p1 is fulfilled, and handlePromise will again be pushed back to the call-stack and continues its execution (from where it left previously).
    // "Namaste JS 1!" is logged to the console.
    // The value of val1, which is "Promise resolved value 1", is logged to the console.
    // Now, it again encounters await. Now when it checks for the promise, it sees that the promise is resolved already. Hence no suspension takes place.
    // "Namaste JS 2!" is logged to the console.
    // The value of val2, which is "Promise resolved value 2", is logged to the console.
    // handlePromise finishes execution and is removed from the call stack.

// Promise.all() method
// It takes an iterable (mostly array) of promises and returns a single promise. 
// This returned promise fulfills when all the promises in the array have fulfilled, or it rejects if any of the promises reject. Remember this, as soon as any one of the promise got rejected, it will not even wait for the result of others. promise.all will immediately throw a rejection error.
    // Lets say you have different promises making different API requests. Now one has failed and hence promise.all() is rejected. Now what happens to the API calls made by the other promises? Will they be cancelled? No. Those promises still complete their execution in the background. But Promise.all() just stops caring about their results after the first rejection. 
// It is a powerful tool for managing multiple asynchronous operations concurrently.
// Disadvantage: If any of the input promises is rejected, the returned promise immediately rejects with the reason of the first promise that rejects. This means that if multiple promises fail, you only get information about the first one that fails, making it difficult to determine which specific operation(s) failed.
    // To overcome this, we can use Promise.allSettled, which was introduced in ECMAScript 2020. This method also takes a array of promises and returns a single promise that resolves after all of the given promises have either resolved or rejected, and it provides an array of objects describing the outcome of each promise.

// Example:
const lotsOfFetchCalls = [
    fetch(`${BASE_URL}/1`),
    fetch(`${BASE_URL}/2`),
    fetch(`${BASE_URL}/3`),
    fetch(`${BASE_URL}/4`),
    fetch(`${BASE_URL}/5`),
    fetch(`${BASE_URL}/6`),
];

async function getLotsOfPokemon() {
    try {
      const results = await Promise.all(lotsOfFetchCalls);
      console.log("Promise.all() is done and resolved!");
      console.log(results);
    } catch (e) {
      console.log("ONE of the promises was rejected");
      console.log(e);
    }
}
  
// Promise.allSettled() method
// Example: 

async function allSettledDemo() {
    
    const GITHUB_BASE_URL = "https://api.github.com"; //base URL
    let elieP = fetch(`${GITHUB_BASE_URL}/users/elie`); 
    let joelP = fetch(`${GITHUB_BASE_URL}/users/joelburton`);
    let badUrl = fetch("http://definitelynotarealsite.com"); //incorrect URL
    let coltP = fetch(`${GITHUB_BASE_URL}/users/colt`);
    let anotherbadUrl = fetch("http://definitelynotarealsite.com"); //incorrect URL

    let results = await Promise.allSettled([
      elieP,
      joelP,
      badUrl,
      coltP,
      anotherbadUrl,
    ]);
  
    console.log(results);
    const fulfilled = results.filter((r) => r.status === "fulfilled");
    const rejected = results.filter((r) => r.status === "rejected");
    console.log(fulfilled);
    console.log(rejected);
  }
  
// Promise.race method
// It also accepts array of promises and returns a new promise
// The returned promise will resolve/reject as soon as any one promise in the arary is resolved/rejected.
// That is the fastest promise which will be settled (resolved/rejected) will be the result. 

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const lotsOfFetchCalls2 = [
  fetch(`http://nope.nope`), //incorrect URL
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  fetch(`${BASE_URL}/5`),
  fetch(`${BASE_URL}/6`),
];

Promise.race(lotsOfFetchCalls2)
  .then((winner) => {
    console.log(winner);
  })
  .catch((err) => console.log(err));

// Promise.any method:
// Similar to race. The only difference is it will return the first promise that is resolved (unlike race with returns the first promise that is settled)
// If all of them fails, it will return an aggregated error. (Error of all the promises)

// So you understand that async functions returns a promise. But can you tell me what are the situations where you need to create a instance of a promise like "new promise((res, rej) => {.....})? 
    // 1. All modern day codes are async. So we need a new instance when we want synchronous code to return a promise. We can achieve that as above (initial examples of promise).
    // Example: 
        function synchronousFunction() {
            const result = "HIYYYYYAAAAA!"
            return result;
        }
        
        function asyncWrapper() {
            return new Promise((resolve, reject) => {
                try {
                    const result = synchronousFunction();
                    console.log(result)
                } catch (error) {
                    reject(error);
                    console.log(error) 
                    // To check it just change 'result' to 'results', you will see the error.
                }
            });
        }
        asyncWrapper();

    // 2. When dealing with older APIs or libraries that use callback functions instead of promises, you can manually create a promise to work with modern asynchronous patterns.
    // Example: 
        function callbackBasedFunction(callback) {
            // Some asynchronous code with a callback
            // ...
            if (success) {
                callback(null, result);
            } else {
                callback(error);
            }
        }
        
        function promiseWrapper() {
            return new Promise((resolve, reject) => {
                callbackBasedFunction((error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                });
            });
        }
        promiseWrapper();
// Conclusion? In general, using new Promise is more common when you need to integrate non-promise-based code into a promise-based environment or when dealing with legacy APIs. In most cases, you can use the async keyword and create asynchronous functions that implicitly return promises, which simplifies the syntax and improves code readability.
    
// Debouncing
// Debouncing is a technique used in programming to limit the rate at which a function is executed. In React.js, debouncing is commonly applied to events such as user input, scrolling, or resizing to improve performance and avoid unnecessary re-renders or API calls.
// Debouncing ensures that a function is executed only after a specified delay period has passed since the last time it was invoked. This is useful for events that may fire frequently in a short amount of time, such as typing in a search bar or resizing a window.
// Example: (youtube-clone)
    // useEffect(() => {
    //     const timer = setTimeout(() => getSearchSuggestions(), 200);
    //          return () => clearTimeout(timer);
    //   }, [searchQuery]);

    //   const getSearchSuggestions = async () => {
    //     const suggestionData = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    //     const jsonSuggestionData = await suggestionData.json();
    //     setSuggestions(jsonSuggestionData[1]);
    //   };