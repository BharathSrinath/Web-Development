// Always include the javascript at the bottom of your body.
// This is because, when you open a webpage with JS on top, it might take precedence to html/css, hence html and styling may not be rendered properly. So it is a best practice to place them at the bottom
// JS is very lenient langauge. Sometimes forgetting the semi-colon will not even throw errors.
// What is TypeScript? TS provides all the features of JavaScript and more, so when you write TypeScript, you’re essentially writing JavaScript with added syntax for type declarations.
console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log("Understanding Console");
// When you call console.log() and pass a value or expression as its argument, that value or expression will be printed to the console. This allows you to inspect and debug your code by outputting messages, variable values, or any other information you want to track during the execution of your JavaScript program.
console.time("This entire code took....");
console.log("first file of javascript");
console.log('Hello world');
// Whatever in the double quotes (""), single quotes ('') and backticks (``) will be displayed as it is. Generally you will use double and single quotes. But when you want to use any special characters or even double and single quotes in the content, backticks are preferred.
// Also backtick can preserve the indentation (lines and tabs between words)
console.log(`Bharath's world`);
console.log(100+2);  // This will be displayed as 102
console.log(100-2);
console.log(100*2);
console.log(100/2);
console.log(100%2);
console.log("100%2"); // This will be treated as string and will be displayed as 100%2
console.log(3 + 0 + 1 + "3" + 2 + 2 + "7") // '43227' - Once you encounter a string, all the subsequent numbers will treate as a string. 2 + 2 will not happen because we have encountered a string named "3"
console.log([10,20,30,40,50]); // It is an array that can store and display multiple values
console.log([10,"hello world",30,40,50]);
console.log({course: 'fullstack', ratings: '5'});
console.table({course: 'fullstack', ratings: 5}); // It will be displayed in a tabular format
console.warn("This is a warning"); // .warn will be displayed in yellow to mark something as warning
console.error("This is big error"); // red color
console.timeEnd("This entire code took....");
// It shows the time taken for the code to run that is between between console.time and console.timeEnd
// console.clear(); // It will clear all console

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log("Variables");
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Variables in JS - var, let and const
// You can start variable name with _, $ and alphabets but not with numbers
    // Best practice is always to start with letters
    // They are case-sensitive

// Most widely used programming variable case types
/*
    1. camelCase (small letter for first and capital for the second without any space) - Best practice
    2. kebab-case
    3. snake_case
    4. PascalCase
*/

// usage of variables
var aaa = 45;
var $bbb = 20;
var _ccc = 10;
var ddd = aaa + $bbb + _ccc;
console.log("Sum: "+ddd);

var language = "JavaScript";
var course = "full stack web development";
var ratings = 5;

console.log(language, course, ratings);
language = "C++";  // This change will not reflect in console. Because in console.log, for the variable language we still "JavaScript"
// So if you want to change you need another console after the above statemenet or just place the above statemnet before console.log 

const marks = 97;
// marks = 100; /* You cannot redeclare const variables. Its quite obvious isn't it */
console.log(marks); 

// 'Var' has function/global level scope
// JUST REMEMBER THIS: When var is used with in a function, it's scope is only within the function. Elsehwhere (At the global level or in conditional statements or in loops) they have global scope.
// var has an issue. Whenever it is declared outside the function, it becomes a part of the window object. Hence there is a possibility where you may override the existing window property with your own variable name. 
var city = "Berlin";
console.log (city);

if(true){
    var food = "chicken";
}
console.log(food) //Output will be chicken

function blach(){
    var animal = "Tiger";
}
// console.log(animal); // Output will be "animal is not defined"

{
    // 'let' and 'const' have block level scope
    // Like 'var', 'let' and 'const' are hoisted to the top of the containing scope.
    // 'const' cannot be declared and initialized separately. It should be together.
    // But 'var' can be accessed before it is declared and you will get the answer as 'undefined'. On the other hand, trying to access 'let' and 'const' before declaration will give a reference error.  
        const scopeCheck = "a";
        console.log(scopeCheck);
    // Its scope is within these curly braces
    let city = "Sydney";
    console.log(city);
}

scopeCheck = "b"; // Redeclaring const outside the scope
console.log(scopeCheck);

console.log(city);

var city = "Chennai";
console.log (city);

const arr = [10,20,40,50];
// arr = [10,20,40,50,30]; This is not possible. Why? Because you are trying to re-declare const. 
console.log (arr);
arr.push(30);
console.log (arr);
// Having said that, you can change or update the value with const as data-type.
// You just cannot redeclare const. (Read it again)

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log("Data-types");
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Data types
// JS is a loosely typed language. That is, it doesn't tie a variable to a particular data-type.
    // A variable can hold a number at one line and the same variable can hold a string in another line (string value replaces the number value).
// Types - Primitives (string, number, boolean, undefined, null, symbol, bigint) and Non-primitives (object) 
// 1. Strings
let name = "full stack2";
console.log("This course covers " + name + " web development");
console.log("The data type is "+ (typeof (name)));
// The strike is due to the fact 'name' was once a keyword in JS and now it has been deprecated. You can use now without any issues. Its just VS code dont want you to use that considering it as a key word and expecting that to perform its function.

// Note: when you add a number and a string, it will result in string
    // let result = 1 + "hi"
    // result will "1hi"

// 2. Numbers
let mark = 98;
console.log("Tom scored " + mark);
console.log("The data type is "+ (typeof mark));

// Note: 
    // NaN - It is not a number by itself (It also expands to Not a Number). 
    // It is a special value that represents the result of an operation that should return a numeric value, but the operation fails to produce a valid number.
        // Example 1: const result = 5 / "abc";
        // Example 2: let x;
                    // const result = x * 10;
                    // console.log(result); 
            // When you dont initialize a variable in an operation that should return a numeric value. Here x doesn't have a value.
        // Example 3: const result = Number("abc");
            // When you try to convert the string "abc" to a number. (Here if the string was "123", it would have been successful)
            // There is another function called parseInt that could do the same. But there are differences
                // Number (N is caps) can convert even the decimals and scientific notation which cannot be done by parseInt (will ignore the digits after the decimal point).
                // But parseInt can take an optional second argument to specify the base (radix) of the number when dealing with non-decimal numeric representations (e.g., binary or hexadecimal).
    // When you look at the typeof (NaN), the answer would be "number"
        // So technically, NaN is a number that represents the result what should have been a number but not a number 
 

// 3. Boolean
let state = false;
console.log("This is best web development course " + state);
console.log("The data type is " + (typeof state));

// 4. Null
let test1 = null;
console.log(test1);
console.log("The data type is " + (typeof test1));
// Here you are assigning null to the variable test1. But in test 2 (below) nothing has been assigned. Hence its type is undefined
// typeof(null) is object

// 5. Undefined
let test2;
console.log(test2);
console.log("The data type is " + (typeof test2));
// typeof(undefined) is undefined itself
// undefined vs not defined
    // undefined: Memory allocated (declared but not initialised)
    // not defined: No memory allocated (Not even declared) 
// IMPORTANT: Do not assign undefined as a value manually. Not a good practice.

// null vs undefined:
// undefined means that a variable has been declared but has not been assigned
// null is an explicit assignment that represents "no value" or "empty value."

// Reference (Heap / derived)
// When you create a variable of a reference type, the variable doesn't directly contain the data; instead, it holds a reference (memory address) to the location where the data is stored. This is in contrast to primitive data types like numbers and strings, which directly store their values in the variable.

// 1. Arrays
let array = [10,undefined,"jack",false,null];
console.log(array);

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("Functions")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// 2. Functions
function myFunction() {
    console.log('Hello, world!');
}
myFunction()

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("Object Literals")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// 3. Objects
// Object is one of the fundamental data types, along with other types like numbers, strings, and booleans.
// They are used to structure and organize data 
// They are collection of properties
    // Every Poperty is a 'key-value' pair.
    // Keys are typically strings (or symbols), and values can be of any data type, including another object.
// Rather than accessing the data using an index, we use custom keys 
// "Object literals" are a specific way to define and create objects in JavaScript. There are other types which we will study later
    // Constructor Functions
        // They are created with a key word 'new' => let x = new car;
        // Here car is an object created with constructor key word called 'new'.
        // Some of the inbuilt functions
            // date: let currentDate = new Date();
            // error: let myError = new Error('This is an error');
    // Object.create()
    // Class Syntax
// Each method has its own use cases and advantages. For example, object literals are quick and easy for creating single objects, while constructor functions and classes are useful for creating multiple instances of similar objects. The Object.create() method is great for setting up prototype chains.

// Example to describe Syntax 1:
let user = new Object();
user.name = 'Jack';
user.age = 19;
user.language = 'JavaScript';
console.log(user);

// Example to describe Syntax 2:
let users = {
    name: 'Jack',
    age: 19,
    language: 'JavaScript'
}
console.log(users);

// Example1 :

let person = {
    firstName: "John",
    // colon (:) after the identifier and a comma (,) after the value
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "hiking"],
    address: {
        // You can nest objects within objects. Object literals within object literals
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    },
};
console.log(person);
// You can even add or update details to the object literals

person.age = 35; // Modify age property
person.email = "john@example.com"; // Add a new property
console.log(person);

// Note: With objects you use curly braces when declaring them. When you are trying to access them, you can do it in 2 ways: person ["age"] or person.age
    // Whats happening is all the valid keys (there are few invalid like if, for, etc. which are basically reserved words which cannot be used as keys; no space is allowed; cannot start with a number or special characters (not even hypen is allowed) but underscore is allowed) will be converted to strings and the value stored in that string is displayed when you use the above commands.
    // You can even write the property and value in this format too. "firstName": "John"

console.table(person);
console.log("The data type is " + (typeof person));

// Example 2
// Here we will try to understand multiple things
    // difference between [] notation and . notation is as follows.
        // bracket notation is useful when the property name is dynamic or when it contains special characters or space
        // dot notation is when you know the property name in advance and it follows the rules for valid variable names (no spaces, starts with a letter, etc.)
    // What do you mean by dynamic?
        // when you don't know the property name in advance, and it needs to be determined at runtime.
        // Lets look at the below example

// let propertyName = prompt("Enter a property name:");
// let human = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// };
    // Using bracket notation with a dynamic property name provided by the user
    // Here user will enter the name of the property and the following condition will determine whether it exists or not and will print its 'value'
        // To achieve we use a built in JS function called hasOwnProperty
// if (human.hasOwnProperty("propertyName")) {
    // console.log(`The value of ${"propertyName"} is: ${human["propertyName"]}`);
        // There should be no space between ($) dollar sign and ({) curly braces
// } else {
//     console.log(`Property ${"propertyName"} does not exist in the person object.`);
// }
    // Look carefully - Everytime the propertyName is used, it is in quotes.

// create a variable named fullAddress that points to a string using the information from restaurant. 
// fullAddress should point to a string that includes the address, city, state, and zipcode from the restaurant object.

const restaurant = {
    name: 'Ichiran Ramen',
    address: `45 Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state}, ${restaurant.zipcode}`;
console.log(fullAddress);
const fullAddress1 = restaurant.address + ", " + restaurant.city + ", " + restaurant.state + ", " + restaurant.zipcode;
console.log(fullAddress1);

// Output will be 45 Johnson Ave, Brooklyn, NY, 11206

console.log("Truthy and Falsy");
// There are no technical words as such but widely accepted terms - Just know it

// All Js values have inherent truthyness or falsyness to them
// Falsy values - false, 0, "" (empty string), null, undefined and Nan
// EVerything else is truthy

// Example 1 - Empty String
    // const userInput = prompt ("Enter something");
        // Commenting out every code with prompt because everytime you save the file, it keeps prompting
    // if (userInput){
    // console.log("TRUE");}
    // else{
    // console.log ("FALSE");}

// Here we are equating userInput with anything to check. If you enter anything, even a space it will be considered true. Else it will be false (Empty String)

// Example 2 - It applies to all the other

if (0){
    // Here you replace anything with 0 (false, null, undefined and NaN) - The if condition will never equate to true and will always fail
console.log("TRUE");}
else{
console.log ("FALSE");}

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log("Type conversion and coercion");
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Type conversion
let variable1 = 100;
variable1 = String(120);
    // See from number data type, it has been converted to string.
    // Not just that you can also change the value itself while converting
    // Infact you dont even need a value to be converted. Look at the next example
console.log(variable1);

let variable2;
// No value here
variable2 = String(true);
// But still it can be converted. Why? technically it is an undefined data type that has been converted to string with new value of true.
console.log(variable2);

let variable3
variable3 = String(Date());
// Date function can show the date as Fri Oct 06 2023 09:14:50 GMT+0530 (India Standard Time)
console.log(variable3);

let arrays;
arrays = String([10,20,30,40,50]);
console.log(arrays);

let x = "842.5353";
x = parseInt("842.5353");
// Generally anything can be converted to string. But converting from string to other types requires some help
// To convert to integer, paseInt can be used
console.log(x);
x = parseFloat("842.5353");
console.log(x);
console.log(x.toFixed(2));
// This will round-off the number to 2 digits. 
console.log(Math.trunc(x));
// This will truncate everything after the decimal point
// In JS you dont have function to cut-down 'so and so decimal number' as you can do in C
console.log(Math.floor(Math.random() * 100) + 50);
    // Math.random will give random number in decimal (There is no direct method that we can make use of in JS to get random integer number)
        // Exampe: 0.6387232372. Now this number will be multiplied with n (say 10 at this point) to get 6.387232372 
    // Math.floor will truncate everything after the decimal point to result in 6 and this number will be added with m
    // Here n is based on total numbers between the range.
        // Example: If you want to get random numbers between 1 to 10, you can multiply with 10. If between 1 to 20, you can multiply with 20
    // Here m also plays a crucial role. When the range starts at 1, m will be 1. But when the range starts at 20, m will be 20
        // Example: If you want to get random numbers between 20 to 25, m will be 20 and n will 6 (there are 6 numbers from 20 to 25) 
    // Lets get a syntax for ourselves
        // Math.floor(Math.random() * n) + m
// There are plenty of math related functions including trigonomerty related. So just look over it when you need

// Type coercion
let a = "9";
let b = 10;
console.log(a+b);
// I hope you know how this works

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log("Strings");
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Strings

let varia1 = "Web development";
let varia2 = "course";
console.log(varia1+" "+varia2);

let varia3 = varia1.concat(' ', varia2);
// This is the concat funnction that can be ued to club 2 strings. 
// Here you are storing the value in varia3
console.log(varia3);

varia1 = varia1.concat(' ', varia2);
console.log(varia1);
// But here you are storing it directly in varaia 1 itself. Hence its value will be updated

let html = `<h1> Heading1 </h1> <p> Paragraph </p>`;
console.log(html);

// Below are the some common list of methods that are used in general
// Methods are functions that are defined as properties of objects or classes. They are associated with and invoked on objects or instances of classes.

console.log(html.length);
// This will tell you total number of characters
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html.trim());
// Removes the leading/trailing whitespace
console.log(html.trimStart());
// Removes the leading whitespace
console.log(html.trimEnd());
// Removes the trailing whitespace
console.log(html.indexOf('H'));
// This will tell you the position of the character 
// Only tells you the first character that it finds.
console.log(html[3]);
console.log(html.charAt(6));
console.log(html.at(-1));
// --------------------------------------------------------------------------------------------------
// |Feature            | string[3]           | string.charAt(3)    | string.at(3)                   |
// |-------------------|---------------------|---------------------|--------------------------------|
// |Returns            | Character at index 3| Character at index 3| Character at index 3           |
// |Out-of-Bounds Index| undefined           | Empty string ""     | undefined                      |
// |Negative Index     | Not supported       | Not supported       | Supported (e.g., string.at(-1))|
// |Browser Support    | Modern browsers     | All browsers        | Modern browsers                |
// |Works with         | Strings             | Strings             | Strings and other iterables    |
// --------------------------------------------------------------------------------------------------

console.log(html.charCodeAt(1));
// This will tell you the ASCII value of the respective character at the position.
console.log(html.endsWith('nejwj'));
// Searches the end of the variables value whether the text 'nejwj' exists or not. Returns a boolean value
console.log(html.startsWith('nejwj'));
// Searches the beginning of the variables value whether the text 'nejwj' exists or not. Returns a boolean value
console.log(html.includes('nejwj'));
// Same as above but searches the entire string and returns true/false
console.log(html.substring(1, 6));
// substring is a single word (So dont write it as 'subString')
// Provides the characters from index 1 (included) to 6 (excluded)
console.log(html.slice(0, 10));
// Same as substring
    // Difference: If the start index is greater than the end index, substring swaps the two indices and return an answer but slice will return an empty string as an answer.
// If you dont provide second argument, both will print from the first argument till the end
// There is another function called splice that works only on arrays which you will find under arrays
console.log(html.split('>'));
// It splits the string based on > by using it as a divider. 
// It returns an array of substrings based on a specified delimiter.
console.log(html.replace('Heading', 'Course'));
// But it will replace only once even if you had the heading multiple times
console.log(html.replaceAll('Heading', 'Course'));
// It will replace all occurences
console.log(html.trim().toLowerCase());
// You can also combine them and use

let item1 = 'life';
let item2 = 'Dorry';
let item3 = 'Swimming'

let html2 = `<h3> When ${item1} hits you hard, do as ${item2} says </h3> <h1> Just keep ${item3} </h1>`;
console.log(html2);
// With $ you can include the expressions between your strings. These are called as template literals. But for template literals you can use only backticks (not single quotes). Why? Because single quotes and double quotes will just make everything a string.
    // You can pretty much use anything within $ sign. Like all the methods we have discussed above, arithmetic operations, etc.
    // Also note that within backticks even h4 and h1 are not treated as texts. Rather they are treated as elements and their properties are applied to the text (not in the console. Look at the web page).

// document.body.innerHTML = html2;
    // Using this syntax you can directly modfiy the contents of a web page without going to an html document.
    // This command means inside the body of HTML include the variable html2

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log("Arrays");
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Arrays

// 2 syntax to create Array
let arrays1 = [1,2,3,4,5,'John'];
// let arrays1 = new Array(1,2,3,4,5,'John');
    // This is another way to declare. But lets just not use it at this point of time 
console.log(arrays1);

// splice function
console.log(arrays1.splice(1, 2, 6, 7));
// syntax: array.splice(startIndex, deleteCount, item1, item2, ...);
    // Here 1 stands for starting position, 2 stands for number of elements to be deleted that are located after 1 (2 and 3 in this case)
    // Whatever that is followed is the elements that you want to include (6 and 7 in this case)
    // splice() returns the removed elements from the array
    // If the starting index provided to the splice method is negative, it is treated as an offset from the end of the array. In other words, -1 refers to the last element, -2 refers to the second-to-last element, and so on. (similar to 'at' method of string)
    // Unlike slice(), splice() alters the original array.
console.log(arrays1);

// Note: Something interesting
    const animals = ["lion", "cheetah", "tiger"];
    console.log (animals);
    animals [10] = ["leopard"];
    console.log (animals);
// See now this what the output will be
    // ['lion', 'cheetah', 'tiger', empty × 7, Array(1)]
    // Since you have stored leopard in the 10th position
    // This isn't new to you. But JS displaying it as empty x 7 in the output is something that you haven't see previously.


// delete()
// Will just erase the value based on the index specified. But memory will be retained. That is length of the array will not be modified. It returns a boolean.
let arrays21 = [1,2,3,4,5];
delete(arrays21[2]);
console.log(arrays21); // Output is [1,2,,4,5]. See the array length is still the same 
let arrays2 = ['1st elem','2nd elem','3rd elem'];
console.log(arrays2[0]);
console.log(arrays2[1]);
console.log(arrays2.length);
// This will give you number of elements within the array
console.log(arrays2[arrays2.length-1]);
// This will do exactly as accessing index. arrays2[0], arrays2[1], etc. But you can use it without the index number.
    // This will be particularly useful when you want to access the last element
    // -1 is because the index starts from 0. length will be 3 here. So it is 0, 1 and 2.
    
// indexOf()
let students = ['John', 'Jack', 'Sam', 'Tom'];
let a1 = students.indexOf('Tom');
// See just like using index number to find the value, you can also use the value to find the index number using indexOf
console.log(a1);

// sort()
let age1 = [65, 56, 78, 87,19];
console.log(age1);
age1.sort();
// sorts in an ascending order
// Never use this method for sorting. 
// When JS sorts values, it sorts as strings. Hence it uses lexicographic (dictionary) order, not numerical order.
// Below method is the ideal way to do it
console.log(age1);

let age2 = [65, 56, 78, 87,19];
// ascending order
age2.sort(function(a, b) { return a - b;});
// descending order
age2.sort(function(a, b) { return b - a;});
// I know this is tricky. But hear me out. It is not as difficult as you think
    // Here custom comparison function is nothing but an anonymous function with two arguments
        // You need two arguments at the very least to sort - So dont think too much on that
    // The comparison logic inside this function is 'return b - a;' compares b and a to achieve descending order. 
        // If b - a is positive, it means b should come before a, which results in descending sorting.
        // If b - a is negative, it indicates that b is less than a, so a should come before b. This results in ascending order.
            // In other words if you specify a - b, it will sort in ascending order
        // If b - a is 0, it means a and b are considered equal, so their relative order remains unchanged.

console.log(age2);

// flat() - multi-dimnesional array to single dimensional array
let array22 = [[1,2,3,4], [5,6,7,8]];
let array23 = array22.flat();
console.log(array23); // Output is [1,2,3,4,5,6,7,8]

// join() - array to string using given characters
let array24 = [10,20,30,40];
let array25 = array24.join(" and ");
console.log(array25); // Output is 10 and 20 and 30 and 40

// toString() - array to string with default character comma(,)
let array26 = [10,20,30,40];
let array27 = array26.toString();
console.log(array27); // Output is 10,20,30,40

// isArray() - To check whether the given input is array or not
let array28 = [10,20];
console.log(Array.isArray(array28)); // Output is true
let string28 = "hi";
console.log(Array.isArray(string28)); // Output is false
// toString() is a method that belongs to the Array prototype. Hence you can call the method on the instance of an array.
// But isArray() is not a method on individual array instances. Instead, it is a static method of the Array object. Hence it needs to be called directly on the Array object and the instance of the array needs to be passed.

// reverse()
let age3 = [65, 56, 78, 87,19];
age3.reverse();
// Just reverses the elements in array
console.log(age3);

// reverse() with strings works somewhat differently. To reverse them, frst we have to breakdown the string into individual characters (can use split('')). Basically the string will be converted to array and then use reverse() on that array and finally perform join operation to convert them back to string.
let stringName = "Bharath";
let charArray = stringName.split('').reverse().join('');
console.log(charArray);

//  IMPORTANT CONCEPT THAT YOU KEEP FORGETTING
    // When you copy an array from one variable to another, remember that the other variable doesn't contain the new copy of an array rather it has only the reference of the address. So when you alter the copy, even the oroginal changes. 
    // So then how to make a copy? Here are some of the ways.
        // var copiedArray = originalArray.slice();
        // var copiedArray = [...originalArray];
        // var copiedArray = Array.from(originalArray);
        // var copiedArray = [].concat(originalArray);

// concat()
let alphabets = ['a','b','c'];
let numeric = [1,2,3];
let alphanumeric = alphabets.concat(numeric);
// Clubs both the array elements into single array
console.log(alphanumeric);

// push()
let cities = ['Munich', 'New York', 'Cape Town'];
console.log(cities);
cities.push('London');
// adds to the array at the end
console.log(cities);

// pop()
cities.pop();
// removes from the end of the array
console.log(cities);

// unshift()
cities.unshift('London');
// adds to the array at the beginning
console.log(cities);

// shift()
cities.shift();
// removes from the beginning of the array
// Remember these things dont work on a string just because thinking that strings are character arrays (Dont use that logic here)
// JS treats arrays and individual characters of a word differently
console.log(cities);
cities.push();

// When you dont provide arguments for adding an element (push and unshift), it will return the length of the array
    // console.log(cities.push()); Outputs 3

// Nested arrays
// Example:
    const gameboard = [
        ['X', 'O', 'X', 'X'],
        ['O', 'null', 'X', 'O'],
        ['O', 'X', 'O', 'X'],
    ];
    for (let i = 0; i < gameboard.length; i++)
    {
        const row = gameboard[i];
        // In the first iteration gameboard [0] values be assigned to row
        // So when you access row [j] in the next for loop, you are accessing each individual element in the row
        console.log (`ROW #${i+1}`);
        // # The ouput here will will look like ROW #1 (0+1) in the first iteration
        for (let j = 0; j < gameboard[0].length; j++)
        {
            console.log (row[j]);
        }
    }
    // Everything can be written in a single line too.

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log("conditionals and Switch case");
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Different operators
// a==b a is equal to b
// a > b  a is greater than b
// a < b  a is less than b
// a >= b a is greater than or equal to b
// a <= b a is greater than or equal to b
// a===b a and b has same value and same data type (This is known as strict equality)
// a!==b a and b dont have same value and dont even have same data type (This is known as strict inequality) 
    // See in JS 1 == '1' will return true. I know this might be a surprise. This is because, JS does type coercion (converts one or both of the values to a common type before making the comparison). So if we are comparing a data with respect to both 'value and the data type', then we have to use '==='. So basically type coercion doesn't happen with '==='.
        // Another Example: 0 == false will return true but 0 === false will return false 

// JS Type-Coercion rules while comparing different types
    // Boolean and Number: Convert to number.
        console.log(true == 1); // Outputs: true
        console.log(false == 0); // Outputs: true
    // String and Number: Convert to number.
        console.log(5 == "5"); // Outputs: true (string "5" is converted to number 5)
    // Object and Primitive: Convert to primitive.
        console.log([1, 2] == "1,2"); // Outputs: true (array [1, 2] is converted to string "1,2")
            // In JS, string is primitive data -type
    // Objects: They Compare references.
        // Example 1:
            let o1 = { a: 1 };
            let o2 = { a: 1 };
            console.log(o1 == o2); // Outputs: false (different references)
        // Example 2:
            if([1,2,3]==[1,2,3]) console.log("TRUE");
            else console.log("FALSE"); // Outputs: FALSE 
// Note: Whenever we use == and the data types are different, type coercion happens.  
    // When one of the operands is an object (like an array), JavaScript attempts to convert it to a primitive value. This process is called "object-to-primitive conversion".
    // Arrays are a type of object in JavaScript, and when an array is converted to a primitive value, JavaScript uses the toString() method (or valueOf() if necessary) to get the string representation of the array.

// If statement
if (5>0) {
    console.log("5 is greater than 0");
}
if (5<0) {
    console.log("5 is lesser than 0");
}

// If else statement
let age4 = 18;
if (age4>=18) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}

// Ternary operator
// Syntax: condition? statement1:statement2
    // If true statement 1 will be executed, else statement 2 will be executed
console.log(age4==19? 'You are 19':'You are not 19');

// else if statement
let salary = 500;
if (salary > 1000) {
    console.log("Your salary is greater than 1000");
} else if (salary < 1000) {
    console.log("Your salary is lesser than 1000")
}

// Switch case
switch (age4) {
    case 18:
        console.log("You can vote");
        break;

    case 15:
        console.log("You cannot vote");
        break;

    case 70:
        console.log("You should vote");
        break;
        
    default:
        console.log("Still thinking about giving you the voting rights");
        break;
}

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log("for");
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Loops
// for
for (let i = 1; i <= 5; i++) {
    console.log(i);
    if (i==4) {
        break;
    }
}

// Iterating over arrays
// say that you have an array of x number of animals that are defined using object literals with name 'animals'. How would you print them using for-loop in forward and in reverse direction?

// forward
for (let i = 0; i <= animals.length; i++)
{
    console.log (`${i} : ${animals [i]}`)
}

// backward
for (let i = animals.length; i >= 0; i--)
{
    console.log (`${i} : ${animals [i]}`)
}

// for-in
// Syntax: for (datatype key in iterableObject)
// For-in is primarily used iterate object literals where it can access both and key and its value
    
var persons = {name: 'Sam', language: 'JavaScript', age: 19};

for (var c in persons) {
    console.log(c + ": " + persons[c]);
    // Here c is printing the property name and persons[c] is printing the property value. 
}// Look at the example below that defines an object with information about 5 students

var schoolStudents = {
    student1: {
      name: "Alice",
      rollNumber: "S001",
      marks: 85
    },
    student2: {
      name: "Bob",
      rollNumber: "S002",
      marks: 92
    },
    student3: {
      name: "Charlie",
      rollNumber: "S003",
      marks: 78
    },
    student4: {
      name: "David",
      rollNumber: "S004",
      marks: 95
    },
    student5: {
      name: "Eva",
      rollNumber: "S005",
      marks: 88
    }
  };
  
  // Iterate over the students object using a for...in loop
  for (var iterate in schoolStudents) {
    var student = schoolStudents[iterate]; 
    // schoolStudents.iterate is wrong. Because dot notation is for the propertie of an object and not objects within objects (nested objects).
    console.log("Name: " + student.name);
    console.log("Roll Number: " + student.rollNumber);
    console.log("Marks: " + student.marks);
  }
//   Previously you have information about one person with 3 properties. Here you have an object literal called schoolStudents under which you have 5 more object literals and each of them as 3 properties 

// for-each or for-of - Will be dealt later

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("While")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// while
let x1 = 1, n = 5;
while (x1<=n) {
    console.log(x1);
    x1++;
}

// Example 1:

// const secret  = "Success";
// let guess = prompt ("Enter the secret word");
// while (guess !== secret)
// {
//     guess = prompt ("Try again. Enter the secret word");
// }
// console.log ("CONGRATS YOU CRACKED THE SECRET!");

// Example 2

// let input = prompt("Hey, say something!")
// while (true) {
    // input = prompt(input);
    // This will store the users input to input variable and display it on the screen since it is a prompt function being called again and again
    // if (input === "stop copying me") break;
// }
// console.log("OK YOU WIN!")
    // This loop will go on until the user enters "stop copying me"

// Do while
let a2 = 1 , m=5;
do {
    console.log(a2);
    a2++;
} while (a2<=m);

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("Logical Operators");
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Logical Operators

// Example 1: Focus on the logic of the code

// const password = prompt("Enter your password");
    // Commenting out every code with prompt because everytime you save the file, it keeps prompting
// if (password.length >= 6 && password.indexOf(' ') === -1) {
    // "password.indexOf (' ') === -1"  Here, if a space is found, it returns the index (position) of the first space in the string. If no space is found, it returns -1.
//     console.log("VALID PASSWORD!")
// } else {
//     console.log("INCORRECT FORMAT FOR PASSWORD!")
// }

// Example 2:

// let firstName = prompt("enter your first name");
// if (!firstName) {
//     When you dont enter anything it will prompt again. Again every prompt will be commented out
//     firstName = prompt("TRY AGAIN!!!");
// }

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log("Functions");
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Functions
// 1. Function Declaration/Function Statement
// Example 1:

function display_message(msg) {
    console.log(msg);
}
display_message("Hello world");
display_message("JavaScript is the brain of a web page");


// Example 2:

function distance(speed, time) {
    let dist = speed*time;
    console.log(dist);
}
distance(10,5);

// Example 3:

function repeat (str, numTimes)
{
    let result  = '';
    // When you are dealing with numbers, you can initialize them to 0. But here we are dealing with strings. So initialize the result to be an empty string.
    for (let i = 0; i < numTimes; i++)
    {
        result += str;
    }
    console.log (result);
}

repeat ("Lets do it!", 5);

// Example 4:

function isSnakeEyes (a,b)
{
    if (a === 1 && b === 1){
        console.log ("Snake Eyes!")
    }
    else{
        console.log ("Not Snake Eyes!")
    }
}

isSnakeEyes(2, 3);

// Example 5: Capitalize the first letter of the string

function capitalize (string1){
    console.log (string1);
    let string2 = string1.slice(0, 1).toUpperCase();
    let string3 = string1.slice(1);
    string2 = string2.concat(string3);
    console.log (string2);
    return string2;
}
capitalize ('bharath');

// Example 6:

let e;
function sumArray (e){
    let sum3 = 0;
    e.forEach (element => {
        sum3 += element;
    });
    console.log (sum3);
    return sum3;
}
sumArray([-10,-5,5,10]);

// Example 7:

function returnDay(a){
    let arrays4 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (a < 1 || a > 7){
        return null;
    }else{
        console.log (arrays4 [a-1]);
        return arrays4 [a-1];
        // Index starts at 0
    }
}

returnDay(2);

// You are declaring a function using the key word function followed by the name and arguments
// The function is defined with a name, making it a named function
// A function declaration must have a name.

// 2. Function Expression
let add = function(a,b) {
    return a+b;
}
console.log(add(4,3));

// A function expression can be either named or anonymous.
// Here you are defining an anonymous function and assigning it to a variable. Why is it called anonymous?
    // Technically, here add is name of the variable (that refers to the function) and not the name of the function. If you had used function declaration, add would have been the name of the function. But here function doesn't have a name hence called anonymous.

// Lets understand the significant difference between both which wasn't mentioned previously - Hoisting
    // See in function declaration, when you call the function before defining it, it is acceptable and that is not the case with function expression.
    // Lets look at the same example as above

    // Function declaration
    // display_message("Hello world");

        // function display_message(msg) {
        //     console.log(msg);
        // }

    // See that function has been called first before defining it.

    // Function expression
    // This cant be done with function expression. Error will be "Cannot access 'add3' before initialization"
    // The error has nothing to do with function declaration/expression. It has to do with the data-type 'let/const' 

        // console.log(add3(4,3));

        // let add3 = function(a,b) {
        //     return a+b;
        // } 

    // Okay then what will happen if the data type is 'var'? Then the error will be a 'TypeError' - 'add3 is not a function'
    // Why? Because when the data type is var, the variable will be initialized with undefined as the value. So at this point of time, 'add3' is not a function. But add3(4,3) treats it as a function. Hence we get that error.
    // So to rembers it easily, just understand that function expressions are treated just like a variable.

// Named Function Expression
let add4 = function xyz(a,b) {
    return a+b;
}
add4(4,3);
// This is completely possible in JS
// You cannot call this funciton as xyz(4,3). You will get the error as "Reference error: xyz is not defined"
// This is because the xyz is not created in the outer scope. add4 is in outer scope (global scope in our case). xyz is actually within the scope of add4. So xyz can be accessed within add4 as follows. (I know its weird - Welcome to JS)
    // let add4 = function xyz(a,b) {
    //     console.log(xyz);
    //     return a + b;
    // }
    // add4(4,3);
// Output for the line console.log(xyz); 
    // ƒ xyz(a,b) {
    //     console.log(xyz);
    //     return a + b;
    // }

// variable hoisting in JS
    // 1. var data-type: Variable declarations similar to function declarations are moved to top of their containing scope during the compile phase, before the code has been executed. These variables are initialized to undefined.
            // var x; 
            // console.log(x); // output is undefined
            // var x = 5;
            // console.log(x); // 5
            // console.log(y); // output is undefined
            // var y = 10;
                // You can imagine the above 2 lines as follows that is happening internally in JS
                    // var y = undefined;
                    // console.log(y);
                    // y = 10;
        // You see if it is a C language, it will throw an error.  Why? We need to declare 'x' before using that. But JS will move the 'var x' declaration to the top. (not the initialisation but only the declaration).   
    // 2. let and const data-type: They are also hoisted but not initialised. But unlike 'var' they cannot be used before declaration (JS prevents it). Okay then why hoist them when let and const variables cannot be used before declaration? Infact even with respect to var data-type what is the point of hoisting them when variable is going to initialised to undefined. There is a tricky and advanced concept called Temporal Dead Zone (TDZ).
        // The Temporal Dead Zone (TDZ) refers to the phase in which a let or const variable is hoisted but uninitialized, making it inaccessible and throwing a ReferenceError if accessed.  
        // If we try to access a let or const variable in its TDZ, we will get a ReferenceError.
        // The TDZ has an important role in catching errors. If JS didn’t have the TDZ and we mistyped a variable name or tried to use a variable before declaring it, JS would just assume we meant to use a global variable or undefined. With the TDZ, JavaScript lets you know that something’s wrong.
// While this might seem unnecessary or confusing, it’s simply a part of JS’s behavior. It’s simpler and more intuitive to use variables only after they’ve been defined. But, this is the approach taken by many programming languages.

// Few additional things about function declaration and function expressions:
    // when you have two function declarations with same name in the same scope, second will replace the first
    // But you can't have two function expressions or a function expression and a function declaration with same name in the same scope. 
       
// Nesting functions
// Example

function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp() {
        console.log(`WE ARE BEING ATTACKED!`)
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}

bankRobbery();
// Calling this function is alone not sufficient. Every function needs to be called inside. Remember that inner functions has access to outer functions. This is known as lexical scope.
// Technically, "Lexical scope is the ability for a function scope to access variables from the parent scope."

function xx(){ 
    var a=10; 
    function y(){ 
        console.log(a);
    }
}

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("Immediately Invoked Function Expression (IIFE)")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// We saw this in some of the online tests where the function is invoked without called explicitly.
// They are defined and immediately executed. 
// It’s often used to create a local scope for variables, preventing them from polluting the global scope.
// Syntax: (functionDefinition)();

// Example 1: 
(function() {
    // IIFE code block
    var localVar = 'This is a local variable';
    console.log(localVar); // Output: This is a local variable
    // That is we can create a variable name called var localVar outside the IIFE and it is completely independent of the variables that is inside IIFE.
})();

// Example 2:
var result = (function() {
    var x = 10;
    var y = 20;
    return x + y;
})();

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("Closures")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Closures are powerful constructs that allow functions to retain access to variables from their containing scope, even after the parent function has finished executing. Simply, it gives you access to an outer function’s scope from an inner function.
// They are useful for maintaining private data, creating modular code, and implementing callback functions with persistent state (refers to data that remains accessible even after the original context (such as a function call) has completed.)
// Simple Definition: A function along with its lexical environment bundled together is called closure. 
// Example 1:
function init() {
    var name = "Mozilla"; // 'name' is a local variable created by 'init'
    function displayName() {
        console.log(name); // Accessing the variable declared in the parent function
    }
    displayName();
}
init(); // Output: "Mozilla"

// Example 2i:
function idGenerator(){
    let count = 1;
    function generate(){
        count++;
        console.log(count);
    };
    return generate;
}
const nextId1 = idGenerator();
nextId1(); // Output will be 2
                    // NOTE regarding funnction execution. To execute both inner (that is returned by the outer function) and the outer function in one go you can write it as "idGenerator()()". 
// Above functionality can be simply achieved by below function too. But we are polluting the global scope by adding another variable called count. To avoid this we can go for closures.
// let count = 1;
// function nextId(){
//     return count++;
// }

// Example 2i:
function idGenerator(){
    let count = 1;
    function generate(){
        count++;
        console.log(count);
    };
    count = 100;
    return generate;
}
const nextId2 = idGenerator();
nextId1(); // Output will be 101
// IMPORTANT TO UNDERSTAND: count variable inside the function generate() doesnt hold the value of 1. Rather it refers to a memory place with the name count. So the count value got update to 100. Hence it will have a value 100 when you call the function generate().

// Lexical scope and closures
// In JS, the scope of a variable is defined by its location within the source code, and nested functions have access to variables declared in their outer functions or scopes. This scope is called lexical scope which is fixed and does not change based on where the function is called. In other words, a function can "see" or access variables that are declared in its outer (parent) scope but cannot access variables declared inside a nested (child) scope.
// A closure is a function that remembers the scope in which it was created, even if it is executed outside of that scope. Closures are made possible because of JavaScript’s lexical scoping. They allow the function to have access to variables from its outer scope, even after that outer scope has finished executing.

// Example:
function outerFunction() {
    let outerVariable = "I'm from outer scope";
  
    return function innerFunction() {
      console.log(outerVariable); // outerVariable is still accessible
    };
  }
  
  const closureFunction = outerFunction();
  closureFunction(); // Outputs: I'm from outer scope
// Here, closureFunction is a closure because it "closes over" outerVariable from the outerFunction scope, retaining access to it even after outerFunction has finished execution.  

//Example 3: Closures with objects
function createCounter(){
    let count = 0;
    return {
        increment: function(){
            return count++;
        },
        decrement: function(){
            return count--;
        },
        getCount: function(){
            return count;
        }
    };
}

let counter = createCounter();

let increment = counter.increment(); 
let decrement = counter.decrement();
let getCount = counter.getCount(); 

console.log(a); // 0 (because post-increment returns the value before incrementing)
console.log(b); // 0 (because post-decrement returns the value before decrementing)
console.log(c); // 0 (after both operations, the count is back to 0)


//Example 4i: Closures as factory functions
function createExponentFunction(exponent){
    return function(val){
        return val ** exponent;
    };
}
const square = createExponentFunction(2);
const cube = createExponentFunction(3);
square(2); // 4
cube(2); //8

//Example 4ii:
function uniqueIdGenerator(prefix){
    let id = 0;
    return function(){
        id += 1;
        return `${prefix}${id}`;
    };
}

const getBookId = uniqueIdGenerator("book-");
const getUserId = uniqueIdGenerator("user_");

//Example 5i:
function xxx(){
    for (var i = 1; i <= 5; i++){
        setTimeout(()=>{
            console.log(i);
        }, i*1000)
    }
    console.log("Hello world!")
}
xxx();
// Output will be
    // Hello World
    // 6
    // 6
    // 6
    // 6
    // 6
// But how?
    // var being function-scoped means it is scoped to the entire function, no matter where it is declared inside the function. let being block-scoped means it is scoped to the block { ... } in which it is defined. In the case of a for loop, each iteration of the loop creates a new block scope.
    // var i is declared once for the entire xxx function. i is not limited to the loop block { ... } but is accessible anywhere in the function. During each iteration of the loop, i is updated to the next value, but it still refers to the same i in memory.
    // let i is block-scoped, which means it is limited to the block { ... } of the loop. Here's the crucial part: for each iteration of the loop, JS creates a new block scope, and i is declared a new in that scope. So every iteration gets its own separate i.

// Example 5ii: Without changing the var to let, we can still achieve the result by enclosing the setTimeout() with in another function that can accept the value of i. 
function xxxx(){
    for (var i = 1; i <= 5; i++){
        function close(i){
            setTimeout(()=>{
                console.log(i);
            }, i*1000)
        }
       close(i);
    }
    console.log("Hello world!")
}
xxxx();
// It works because, with each iteration, the function close() is called with the current value of 'i'.
// When close(i) is invoked, it creates a new function scope, capturing the current value of 'i' as an argument.
// The setTimeout() function inside close() retains access to this captured value of 'i' through closure.
// As a result, the setTimeout() callback will have access to the correct value of 'i' for each iteration when it eventually executes.
 
// Issues with closures: 
    // Since inner function has access to lexical scope, the memory created for the variable exists even after the outer function has executed. This may accumulate over-time as the variable is not eligible for garbage collection. 

//Example 6i: Closures with event listeners
// Without closures - Here we polluting the globals scope with a variable names count 
let count = 0;
document.querySelector("button").addEventListener("click", () => {
    count += 1;
    console.log(`You clicked me ${count} times`);
});
// With closures - Global scope is neat and clean
// In this example we are using IIFE and closures together
document.querySelector("button").addEventListener("click", 
    (function(){
        let count = 0;
        return function(){
            count += 1;
            console.log(`You clicked me ${count} times`);
        };
    })()
);

// Example 6ii: 3 buttons - clicking each of them will increment the values based on the number of times it is being clicked.
function createButtonCounter(){
    const button = document.getElementById("btn");
    let count = 0;
    button.addEventListener("click", ()=>{
        count += 1;
        button.innerText = `Clicked me ${count} times`;
    });
}
createButtonCounter();
createButtonCounter();
createButtonCounter();

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("First Class Functions")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// First Class Functions
    // Functions are treated as first-class citizens
    // This concept implies that functions can be,
        // Assigned to variables
        // Passed as arguments to other functions
        // Returned from other functions
        // Stored in data structures 
    // It refers to the capability of functions to be used like any other value (like numbers, strings, etc.)
    // This capability is what enables functional programming patterns in JS, such as map, filter, and reduce.
        // Not just in JS, many other languages makes use of first class functions.  

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("Higher Order Functions")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Higher Order Functions
    // It either Takes one or more functions as arguments or Returns a function as a result.
    // They are specific types of functions that leverage the concept of first-class functions.
    // Examples: map, filter, reduce, etc.
// Example 1: Function as an argument

function callTwice (a){
    a();
    a();
}

function rollDie (){
    const roll = Math.floor (Math.random() * 6) + 1;
    console.log (roll);
}

callTwice (rollDie);

// Keep in mind not to use parenthesis while passing a function as an argument. Why?
    //  When you call callTwice(rollDie());, rollDie function wil execute first and then its result will be passed to callTwice function. That is you are passing a return value of the function rather than the function itself
    
// Example 2: Returning a fucntion

function makeMysteryFunc() {
    const a = 6;
    if (a > 5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("YOU WIN A MILLION DOLLARS!!")
        }
    } else {
        return function () {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
        }
    }
}

let msytery = makeMysteryFunc();
msytery();

// Returning functions are very powerful. As you see they can not only return functions but can also generate functions (function factories)
// Example 3: Function factories: It is a function that returns an object or a function. It is used to create and initialize multiple instances of an object with similar properties and methods, without using the new keyword, as would be done with a constructor function or class.

function makeBetweenFunc (min, max){
    return function (num){
        return num >= min && num < max;
        // Here true/false will be returned. We generally do this with an if condition
    }
}

// Whats happening here?
// When you call the makeBetweenFunc (0, 18), your output will be as
    //  function (num){
        // return num >= 10 && num <= 20;
        // } That is exactly the function definition will be returned.
// Now you can store this returning function in a variable. Now isChild variable will act as a function thus creating a new function
    // const isChild = makeBetweenFunc (0, 18)
        // This way, the return value of makeBetweeFunc has been stored in isChild
        // Now the important part is by passing different arguments, you can create different return value and create different functions

const isChild = makeBetweenFunc (0, 18);
console.log (isChild(17));

const isAdult = makeBetweenFunc (18, 65);
console.log (isAdult(20));

const isSenior = makeBetweenFunc (65, 120);
console.log (isSenior(60));

// Thus we are making use of the makeBetweenFunc to create other functions

// Difference between functions and methods:
    // Function is a block of code that can be defined and called independently to perform a specific task or return a value. Functions can be standalone or associated with objects. When we talk about functions, we usually mean standalone functions that can be invoked like this: functionName(). Functions can take parameters (input) and return a value (output).
    // A method is a function that is associated with an object. It's a property of an object, and it represents the behavior or actions that the object can perform. When you invoke a method, you are essentially asking the object to perform a specific action. To put it simply, "when you add a function as a property to an object, it becomes a method"
// This is why it is said that 'every method is a function' but 'not every function is a method'

// Functions can also be used as property in object literals
// Example: 
let square2 = {
    area: function (a){
        return a*a;
    },
    perimeter: function (a){
        return a*4;
    }
}
for (let i in square2){
    console.log(`${i}: ${square2[i](5)}`);
}

// Recent update in JS makes it even more easier. You dont even need the term function. You can just write area (a) and perimeter (a). It canbe rewritten as,
    // let square2 = {
    //     area(a){
    //         return a*a;
    //     },
    //     perimeter(a){
    //         return a*4;
    //     }
    // }


console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("Function Currying")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Function Currying
// It is a concept in JS (and other functional programming languages) that involves transforming a function with multiple arguments into a sequence of functions, each with a single argument. 
// Essentially, instead of passing all arguments to the function at once, you pass them one at a time, and each time you pass an argument, the function returns a new function that takes the next argument.
// Example: 
// Function without currying
function add5(a, b, c) {
    return a + b + c;
}
add5(1, 2, 3)
// Curried Version
function addd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
let firstCallResult = addd(1);
let secondCallResult = firstCallResult(2);
let thirdCallResult = secondCallResult(3);
// add(1)(2)(3) shorthand to call all 3 functions rather than following the above approach. (Just know it) 
// But curried functions are not called as a whole (like above).
// Their major purpose is reusability. When you break the functions into very small and very specific, that particular function can be reused in many places.

// Function Throttling:
// It is a technique used to control the frequency at which a function is executed. It ensures that a function is not called more often than a fixed time interval, even if the event that triggers the function occurs continuously.
// This is particularly useful when dealing with events that can fire many times in a short span, such as scrolling, resizing, or key presses. By throttling these events, you improve the performance of your application by reducing the number of times a function is called.
// So, When a throttled function is repeatedly called, it will execute only once every specified time interval.

// Example:
function throttle(func, delay) {
    let lastCall = 0; // Stores the time of the last function execution
  
    return function (...args) {
      const now = new Date().getTime();
  
      if (now - lastCall >= delay) {
        lastCall = now;
        func(...args);
      }
    };
  }

// func: The function you want to throttle.
// delay: The minimum time interval (in milliseconds) between two executions of the function.
// lastCall: Keeps track of the last time the function was executed

// Example: Let's say you have a function that handles a window resize event and you want to throttle it so that it executes at most once every 1 second:
function handleResize() {
    console.log("Resized!");
  }
  
window.addEventListener("resize", throttle(handleResize, 1000));
// In this example, even if the resize event is triggered multiple times as the user resizes the window, the handleResize function will be executed only once every 1000 milliseconds (1 second).
// Difference Between Throttling and Debouncing
    // Throttling: Ensures a function is called at regular intervals, regardless of how many times the event is triggered. It controls the rate of execution.
    // Debouncing: Ensures a function is called only after a certain period of time has passed since the last event. It delays execution until the event stops occurring.
    // In simple terms,
        // Debouncing waits for inactivity: The function will only execute after a certain period of complete inactivity. If the event keeps happening (like typing, scrolling, or clicking), the waiting period resets every time.
        // Throttling restricts execution rate: Instead of waiting for inactivity, throttling ensures that the function can only run at consistent intervals. Even if the event is continuously triggered, the function will execute at fixed intervals (ex: every 2 seconds), whether or not there is a pause.

  
// Pure functions:
    // Deterministic: For the same input arguments, the function always returns the same output. The output is entirely predictable and depends only on its input parameters.
    // No Side Effects: The function does not modify any external state or variables outside of itself. It does not affect or change the state of the application, such as modifying global variables, changing input arguments, or performing actions like logging to the console, writing to a file, or making network requests.
    
    
console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("Array Methods")
console.log ("ForEach")
console.log("------------------------------------------------------------------------------------------------------------------------------------");
    
// Arrays Methods

// for-each
// Syntax: 
    // array.forEach(function(currentValue, index, array) {
        // your code here
    //   }, thisArg);  
        // Current value refers to the the value in the array from which you want the loop to begin.
        // thisArg Value to use as 'this' when executing callback.
// The forEach method doesn't return a new array like map or filter. It just iterates through iterable like a regular for loop.
// You cannot use break or continue statements in a forEach loop. This is because forEach works by executing a callback function on every element of the array. Once forEach starts, it will keep running the callback for every item in the array until it has iterated through all of them, and there’s no built-in mechanism to break out of or skip an iteration.

const arrays3 = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
arrays3.forEach(function(element, index, arrays3) {
    sum += element;
    console.log(`${arrays3} - ${index}: ${sum}`);
});

const arrays6 = [1, 2, 3, 4, 5];
const multiplier = {
  factor: 2,
};

arrays6.forEach(function(number) {
  console.log(number * this.factor);
}, multiplier);
// Here multiplier is the thisArg(an object). 'this' keyword within console refers to the multiplier object.
// thisArg can be anything - an object, primitive value or even a function.


// forEach can accept 3 values. They are current value, index and array. current value by default represents the first value and the index will be array 0 to begin with and the array will be name of the array which holds the elements. 
// This array is same as the array over which we are iterating. Sometimes we may need access to other elements apart from the current element that we are currently accessing. In that case we can make use of that. But remember accessing of an element (reading) is okay, but modiying the element during the forEach cylce is  not a recommended practice as it will modify the existing array.

// for-of simplifies this even more. It doesnt even require a function 
// Syntax:
    // for (datatype value of iterableObject)
    // Difference is the usage. 
        // for-in is used to iterate over the properties of an object
        // for-of/for-each is used to iterate over the iterable objects, such as arrays, strings, maps, sets, and more.
            // You can also iterate over strings like for (const n1 of "hello world") which will print individual characters

// Example 1:
const numbers = [1, 2, 3, 4, 5];
let sum1 = 0;
for (const element of numbers) {
    sum1 += element;
    console.log(sum1);
}

// Example 2: Lets rewrite the X/O game with for-of loop. Remember it was a 2D array. 
for (let row of gameboard)
{
    for (let game of row)
    {
        console.log(game);
    }
}
// See how straightforward is this
// Here 'gameboard' reperents the entire array and the 'row' represents each row. So first for-loop can be used for every row
// In second for-loop, i am using another variable called 'game' to access individual elements in a row

// Example 3: Sqaure of numbers

const naturalNumbers = [1,2,3,4,5,6,7,8,9];
for (let z of naturalNumbers)
{
    console.log (z*z);
}

// Example 4:

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

movies.forEach(function (element) {
    console.log(`${element.title} - ${element.score}/100`);
    // When you put the 100 inside, it will actually divide it as both will be integers. 
})

// Same with for-of loop 
for (let element of movies){
    console.log(`${element.title} - ${element.score}/100`);
}

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("Map")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Map
// When you use for loops or other traditional loops, you can iterate over array elements and perform operations on those elements. However, these operations typically modify the elements in-place or perform some actions.
// On the other hand, the map() function allows you to transform the elements of the original array into a new set of values, and the result is a new array where each element corresponds to the transformed value of the original array element.
// Syntax: 
    // const newArray = originalArrayarray.map(function(currentValue, index, array) {
    // your code here
    // }, thisArg);

// Example 1 - Lets use the movies array to extract only the title and create a new array with it

const titles = movies.map (function(element){
    return element.title.toUpperCase();
})

console.log (titles);

// optional 'thisArg' parameter (an object) allows us to specify a value that will be used as 'this' when executing the callback function. Lets look at the below example.

let employees = [
    { id: 1, name: 'Alice', salary: 50000 },
    { id: 2, name: 'Bob', salary: 60000 },
    { id: 3, name: 'Charlie', salary: 75000 }
];
  
function calculateBonus(employee, index, array) {
    // Just know that index and array paramneters can be accessed here
    return employee.salary * this.bonusPercentage;
}
  
let annualBonuses = employees.map(calculateBonus, { bonusPercentage: 0.1 }); // 10% bonus
  
console.log(annualBonuses);

// If above code line confuses you, below is the that exactly matches with the syntax:
    // let annualBonuses = employees.map(function calculateBonus(employee, index, array) {
    //     return employee.salary * this.bonusPercentage;
    // }, { bonusPercentage: 0.1 });


console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("Find")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Find 
// Returns the first element in the array that matches the condition. If no match is found, it returns undefined.
var findArray = [1,2,3,4,5]
var find = findArray.find(i => {return i % 2 == 0});
console.log(find); // 2

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("Filter")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Filter
// Returns an array of all elements that match the condition. If no matches are found, it returns an empty array.
// The map() and filter() functions in JavaScript are similar in that they both operate on arrays and use a callback function to process elements.
// But the difference is 
    // map() will take each element in an array and apply transformation or computation and pushes the altered element into a new array. So the new array will still have all the element in it but with a modified version
    // filter() will filter out the elements in the array based on the condition that we provide and pushes the extracted element into new array. If the condition is satisfied by every element, you will see every element in the result. If not, only the element that satisfied the condition will be present.
// Both functions create new arrays, leaving the original array unchanged.
// Both can be used in combination.

// Example 1: For filters

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 
const numbers3 = numbers2.filter(n => {
    return n < 10
})
console.log (numbers3);

// Example 2: filter and map in combination

const movies1 = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

const badMovies = movies1.filter(m => m.score < 70)
console.log (badMovies);
const recentMovies = movies1.filter(m => m.year > 2000)
console.log (recentMovies);

// const goodMovies = movies1.filter(m => m.score > 80)
// const goodTitles = goodMovies.map(m => m.title)
    // Rather than doing the above 2 steps, you can just create a single line of code as below
const goodMovieTitles = movies1.filter(m => m.score > 80).map(m => m.title);
console.log (goodMovieTitles);    

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("Reduce Method")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Reduce Method - Somewhat complex. Pay attention
// Gives a single value from an array depending up on the computation 
// Syntax: array.reduce(function(accumulator, currentValue, index, array) {
            // Your computation goes here
                // return /* the result of your computation */;
            // }, initialValue);

// }
    // accumulator will be index [0] and current value will index [1] in the first iteration
    // initial value is optional value whcih will be the first value of accumulator. If not provided the first value of the array will be the initial value.
    // See here return will keep returning the value to the reduce method until it reached the last element

// Example 1: We are just adding everything just like we do it in for of loop.
    // One visible advantage compared to for loops is that we need not initialize a variable like total = 0 or price = 0

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
const total = prices.reduce((total, price) => {
    return total + price
})
console.log (prices);

// Example 2:

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})
console.log (minPrice);
// Here it compares the first 2 elements and returns the lowest and that will be compared with the next element. By this way you can find the min/max from an array

// Example 3:

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})
console.log (highestRated);
// This determines the best rated movie

// Example 4: Providing second argument which will act as the initial value

const evens = [2, 4, 6, 8];
const evensSum1 = evens.reduce((sum, num) => sum + num) //20
const evensSum2 = evens.reduce(function (sum, num) {
    return sum + num; //120
},100)
// or you can write them in a single line too
// const evensSum1 = evens.reduce((sum, num) => sum + num, 100)
console.log (evensSum1);
console.log (evensSum2);

// Summary of when to use what type of loops
/*
1. Traditional For Loop
Ideal Use Case: When you know how many times you want to loop. Great for iterating over arrays when you need to track the index, or when you want to modify the original array.
Not Ideal When: You're working with properties of an object. 

2. For...In Loop
Ideal Use Case: When you need to work with the properties of an object.
Not Ideal When: Iterating over arrays because there's no guarantee on the order of properties and it may return inherited enumerable properties.

3. For...Of Loop
Ideal Use Case: When you want to iterate over iterable objects like arrays, strings, maps, etc. It's great for cases where you don't need to track the index. Suitable for operations where breaking or continuing is not required.
Not Ideal When: You need to track the index or modify the original array because it does not provide access to the index of the array.

4. ForEach Method
Ideal Use Case: When you want to perform an operation for each element in an array and you don't need to create a new array. Great for performing side effects, like updating the DOM or logging to the console. Useful when you need to use break, continue, or return to control the loop.
Not Ideal When: You're trying to transform an array into a new array because it always returns undefined and is not chainable, meaning you can't use it in a chain of method calls like you can with methods that return a new array (like map).

5. Map Method
Ideal Use Case: When you want to transform an array into a new array. It's great for cases where you want to apply the same operation to each element of an array and put the results into a new array. It doesn't modify the original array.
Not Ideal When: You want to modify the original array or perform side effects. 

6. Filter Method
Ideal Use Case: When you want to create a new array containing only elements that satisfy a certain condition. Useful for filtering out unwanted elements from an array without modifying the original array.
Not Ideal When: You need to transform the elements or if you want to perform a complex operation that involves combining elements in the array. In such cases, consider using map or reduce.

7. Reduce Method
Ideal Use Case: When you need to accumulate values from an array into a single result. Useful for summing up numbers, finding the maximum or minimum value, or any other scenario where you need to compute a single value from an array.
Not Ideal When: You don't need to accumulate values or performing doesn't involve reducing the array to a single value.
*/

// My notes of comparison:
// Traditional For Loop and For...Of Loop: They are similar in that they are both used to iterate over iterable objects like arrays, strings, maps, etc. The traditional for loop offers more control because you can specify the initialization, condition, and increment expressions. The for...of loop is simpler and automatically iterates over the elements of the iterable.
// For…In Loop: It is used to iterate over the properties of an object. It’s not quite similar to the for...of loop in terms of control, because the for...in loop is specifically designed for objects, while the for...of loop is designed for iterable objects.
// ForEach Method, Map Method and Filter Method: Neither forEach or map or filter modifies the original array. The forEach method executes a provided function once for each array element but does not return a result, while the map method creates a new array with the results of calling a provided function on every element in the array and filter method also creates a new array with the elements that satisfy the provided condition.

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("Try and Catch")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Try/Catch
// You see when you encounter an error in a single line of code, the entire porgram stops.
// You can over come that with the help of try and catch mechanism

// Example 1:

try {
    hello.toUpperCase();
    // usually this will throw an error called 'hello' undefined
    // But now the code will run with a below message 
} catch {
    console.log("ERROR!!!!")
}

// Example 2;

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log (e);
        // What this will do is, capture the actual error that would have been displayed and prints to the console. While below is the customised error message.
        console.log("Please pass a string next time!")
    }
}
yell ()
// Here we are deliberately not passing an argument to catch the error

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("'this' Keyword")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// 'this' keyword in JS
// 'this' refers to the object that is executing the current function
// Before proceeding further, lets try to understand the following
    // 1. methods vs functions
        // A function when called on an object is considered a method. That is a function that is a property of an object is considered to be a method.
        // Technically we can argue that there are no functions in JS. Because functions that are declared with global scope (outside objects), are also methods because they are implicitly called on a global object called 'windows'.  
    // 2. strict mode in js:
        // Syntax: "use strict";
        // This can be used at the top of the file if you want to apply for the entire file or use it in any of the particular function to be specifically apply for that alone.
        // JS is very lenient language. Using strict mode will force us to write bug free code. Rather than ignoring the mistakes or using some of the inbuilt features to compensate for our mistakes it will directly throw us errors.
            // Example: function myFunction(){ x = 3.14; } Here x is not declared but directly initialised. JS will simply create a global variable called x (Using the inbuilt feature, it is compensating for our misatkes). But when you use strict mode like function myFunction(){ "use strict"; x = 3.14; }, it will thrown an error as "x is not defined".
            // You can assign NaN/undefined a value like undefined = 10; JS will simply ignore as they are read only. But using strict mode will throw an error as "cannot assign to read only property"
            // Strict mode prevents from using duplicate parameter names in a function.
                // function combine(a,a,c){
                //     return [a,a,c]
                // } 
                // combine(1,2,3);
                    // Lets say that by misake we are using 2 a's instead of a,b,c. Now the value 2 will assigned to both a's as the second 'a' will over-ride the first.
                    // We dont want this to happen. When we use strict mode it wil thrown an error as "duplicate parameter not allowed".
            // Properties can be created only non-primitives like objects. But when yoy try to create a property on primitive values like string(In JS string is a primitive datatype), it will simply ignore. But Strict mode will throw an error as "Cannot create property on primitive type"
                //"string".value = 10;
// Lets look at some of the basic examples based on the definition of 'this'.

// Example 1:
const cat = {
    name: 'Puchy',
    color: 'Black & White',
    breed: 'Street Smart',
    meow() {
        // console.log (color); 
            // This will throw an error. To access a property, you need to use objectName.propertyName as below
        console.log (this.color);
        return `${this.name}, a ${this.color} cat says MEOWWWW`;
        // Instead of objectName we can use the keyword 'this'
    }
}
console.log(cat.meow());

// Example 2:
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg (){
        return this.eggCount +=1;
    }
}
console.log(hen.layAnEgg())

// 'this' and its use cases:
// The 'this' keyword in JavaScript refers to the context in which a function is executed, not necessarily the closest object where it is located or defined. 
// 'this' context is determined by how the function is called. 
    // 1. Global Context: In the global execution context (outside any function), this refers to the global object (window in browsers, global in Node.js).
        // function(){
            // console.log(this) -> outputs an window oject
        // }
    // 2. Method Context: When a function is called as a method of an object (like object.methodName), this refers to that object.
        // const student = {
        //     name: "Bharath",
        //     marks(){
        //         console.log(`${this.name} has scored 99.9 percentile`);
        //     }
        // } 
        // student.marks(); -> output is "Bharath has scored 99.9 percentile"
    // 3. Function Context: If the function is called without an explicit object context, this refers to the global object (or undefined in strict mode).
        // const student = {
        //     name: "Bharath",
        //     marks(){
        //         console.log(`${this.name} has scored 99.9 percentile`);
        //         function total(){
        //               console.log(`${this.name} total marks scored is 999/1000`);
        //         }
        //         total() ->output is "undefined total marks scored is 999/1000"
        //     }
        // } 
        // student.marks(); -> output is "Bharath has scored 99.9 percentile"
    // 4. Constructor Context: When a function is called with the new keyword, this refers to the newly created object.
        // class Student {
        //     constructor(name) {
        //         this.name = name;
        //     }
        //     sayHello() {
        //         console.log(`Hello, my name is ${this.name}`);
        //     }
        // }
        // const student = new Student('Bharath');
        // student.sayHello(); -> output is "Hello, my name is Bharath"
    // 5. Explicit Binding: Using call, apply, or bind, you can explicitly set the value of this. All three of them involves a concept called function borrowing and all three methods allow you to control what the 'this' keyword refers to when invoking a function. They basically bind the function and the object with small differences between each of them. They are called on the function with which we are going to bind the object. 
        // First argument to all of them is the object to be bound. 
        // For call, 2nd, 3rd, etc. are the arguments that we are passing to the function.
        // For apply, exactly same as call but there will be only one argument and that will be an array within which we can pass as many elements as we want.
        // For bind, it is similar to the call method in terms of passing an argument. But it differs from one aspect compared to the above two. 
            // call and apply: Both are used to invoke a function immediately with a specified this context. 
            // bind: Returns a new function with a specified this context and optional arguments, but does not invoke the function immediately. It can be called later when needed.
        // This new function copy(known as bound function) is permanently bound to a particular object. It can be stored in a variable and invoked later. This is what we are doing when we pass them to an event handler. So rather than creating a new function everytime (like call/apply), we are just invoking this copy created by bind function. (so no new functions are created). 
            // Neither call() nor apply() creates a new function. They directly execute the original function.
            // So we use bind() when we want to create a reusable function with a specific context.
            // The bound function is created only once during initialization and then reused every time an error occurs.
                // let name = {
                //     firstName: 'Bharath',
                //     lastName: 'Srinath'
                // }

                // let printFullName = function(hometown, state){
                //     console.log(this.firstName + '' + this.lastName + " from " + hometown + ", " + state);
                // }

                // printFullName.call(name, 'Chennai', 'TamilNadu');

                // let name2 = {
                //     firstName: 'Aravind',
                //     lastName: 'Sundaresan'
                // }

                // let printFullName = function([hometown, state]){
                //     console.log(this.firstName + '' + this.lastName + " from " + hometown + ", " + state);
                // }

                // printFullName.call(name2, 'Madurai', 'TamilNadu');
                // printFullName.apply(name2, ['Madurai', 'TamilNadu']);

                // let printMyName = printFullName.bind(name, 'Bharath', 'TamilNadu');
                // console.log(printMyName);
                // console.log(printMyName());
        // VERY IMPORTANT: BIND, CALL, APPLY DOESNT WORK FOR THIS CONTEXT WITH RESPECT TO ARROW FUNCTIONS

// Example: Demonstrating 2nd and 3rd points with a better example. If the function is called as a method of an object, this refers to that object. If the function is called without an explicit object context, this refers to the global object (or undefined in strict mode).

const obj = {
    name: "My Object",
    outerFunction: function() {
        console.log("Outer Function 'this':", this); // 'this' here refers to obj

        const innerFunction = function() {
            console.log("Inner Function 'this':", this); // 'this' here depends on how innerFunction is called
        };

        innerFunction(); // Called without an explicit context, 'this' refers to the global object

        const anotherObj = {
            name: "Another Object",
            method: innerFunction
        };

        anotherObj.method(); // Called with anotherObj as context, 'this' refers to anotherObj
    }
};

obj.outerFunction();
console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("Arrow Functions")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Arrow functions - Newer syntax for function expressions
// They are just a syntactical change where instead of writing the keyword 'function'  followed by arguments in paranthesis, we will be using '=>' after paranthesis by removing the function keyword.
    // const add = (x, y) => {
        // return x+y;  
    // }
// If you have just one line of code to be executed after the arrow, you can ignore the curly braces and include it in the same line of code
// You can further more simplify the code of that one line if it is a return statement by removing the word return and enclosing the one line of code in paranthesis
    // const add = (x, y) => (
        // x+y;  
    // ); or
    // const add = (x, y) => x+y;
// Also if you are just dealing with one argument you do not need paranthesis when you are using arrows
    // const isEVen = num => num % 2 === 0;
    

// Example:
    const newMovies = movies.map (element =>{
        return `${element.title} - ${element.score/10}`
    })
    console.log (newMovies)

// Keyword 'this' and arrow functions
// 'this' behaves differently within arrow functions
    // Regular functions has their own this context - meaning when they are called as a method using objectName, 'this' will refer to that object on which the method was called. When they are simply called as a function, 'this' refers to the window object.
    // But arrow functions doesn't have their own this context rather they inherit 'this' from the enclosing lexical context, which means the value of 'this' inside an arrow function is the same as 'this' outside the arrow function.
        // So, irrespective of how the arrow functions are called (as a method or as a function), their location is important. If you are directly using arrow functions as a property of an object, it will refer to the window object. Keep this in mind. So the only way for an arrow function to have 'this' context is to declare them under a normal function whose 'this' context refers to a particular object.
        // Doesnt work: 
            const personArrow1 = {
                name: "Alice",
                regularFunction: function() {
                    console.log(this.name); // 'this' refers to the person object
                },
                arrowFunction: () => {
                console.log(this.name); // 'this' refers to the global object (or undefined in strict mode)
                }
            };
            personArrow1.regularFunction(); // Alice
            personArrow1.arrowFunction(); // undefined (or error in strict mode)
        // Works: Because arrow function is placed inside the regular function which itself is called as a method using object name. Hence the regular function's 'this' refers to personArrow2. Now this is inherited by the arrow function. 
            const personArrow2 = {
                name: "Alice",
                regularFunction: function() {
                console.log(this.name);
                },
                insideArrowFunction: function () {
                    let arrowFunction = () => {
                        console.log(this.name); 
                    }
                    arrowFunction();
                }
            };
            personArrow2.regularFunction(); // Alice
            personArrow2.insideArrowFunction(); // Alice

// Example for 'this' referring to an object from where it is executed rather than from it is located. 
// For an arrow function, their location is important rather than how they are called. For 'this' keyword where they are executed is important rather than where they are located.
const object1 = {
    prop: 42,
    method: function() {
        console.log(this.prop); // Refers to object1.prop
    }
};

const object2 = {
    prop: 84,
    method: object1.method
};

object1.method(); // 42
object2.method(); // 84

// Example 1: This program will not work with 'this' keyword under persona2
    // See for 'this' keyword to work under arrow functions, the arrow function should be DEFINED under a normal function. Just calling it under a function and defining it oustide the scope of normal function or under a different object (as below) will not work. 

const persona1 = {
    firstName: 'Aravind',
    lastName: 'Sundaresan',
    fullName: function () {
        console.log (`${this.firstName} ${this.lastName}`)
    },
    shoutName: function () {
        persona2.setTime(); //control line 2
    }
}
 
const persona2 = {
    firstName: 'Bharath',
    lastName: 'Srinath',
    setTime: () => { //control line 3
        console.log(persona1.fullName());
    },
}
persona1.shoutName(); //control line 1

// After reaching control line 3, this is how the object 1 will look
    // const persona1 = {
    //     firstName: 'Aravind',
    //     lastName: 'Sundaresan',
    //     fullName: function () {
    //         console.log (`${this.firstName} ${this.lastName}`) // control line 5
    //     },
    //     shoutName: function () {
    //         setTime: () => {
    //             console.log(persona1.fullName()); // control line 4
    //         },
    //     }
    // }
// After reaching control line 5, it prints Aravind Sundaresan. But the fullName() doesnt return anything. 
// So when the control goes back the 'control line 4', we are trying to console.log of nothing. So it will return undefined.

// Example 2:

const persona3 = {
    firstName: 'BadriNarayanan',
    lastName: ' Balaji',
    fullName: function () {
        console.log (`${this.firstName} ${this.lastName}`)
    },
    shoutName: function () {
        const setTime = () => {
            this.fullName();
        }
        setTime();
    }
}
persona3.shoutName();

// 'this' keyword and regular nested functions
// Most important thing to understand is that all the regular functions have their own 'this' context. If they are not explicitly called using the objectName, their 'this' context will be global. FIX THIS IN YOUR MIND that regular functions doesnt inherit 'this' context. Each and every one of them have their own this context.
// On the other hand, arrow functions always inherit from their lexical scope.

// Example 3:
const persona4 = {
    name: "Alice",
    hobbies: ["reading", "hiking", "coding"],
    showHobbies: function() {
        this.hobbies.forEach(function(hobby) {
        console.log(`${this.name} likes ${hobby}`); // 'this' refers to the global object
        });
    }
};
persona4.showHobbies(); // undefined likes reading, undefined likes hiking, undefined likes coding

// Lets study the above example extensively
    // There are three functions here that are nested
        // Outermost - showHobbies, middle - forEach and innermost - anonymous callback function
        // All of them are regular functions
    // Outermost function is called using object as "persona4.showHobbies()". So inside this function usage of 'this' will refer to the object. Hence in the line  "this.hobbies.forEach(function(hobby) {", this refers to the persona4 object. 
    // Now you can also see that the middle function is also called using object's name (using 'this' keyword) -> ""this.hobbies.forEach(function(hobby)". This means if you are going to have a definition for forEach, you can centainly use 'this' context. But the definition forEach is actually written inside the callback function.
    // So, the innermost fucntion is never called with an object reference. It is implicitly called by forEach. Not just forEach, all the methods that has a callback function works this way.
        // So when you use 'this' inside this callback function, it refers to the global object. 
        // To overcome this we use the callback function as an arrow function. Now arrow function will inherit the this context from forEach. 

// Example 4: 
// Lets look at one more example with setTimeout
const persona5 = {
    name: "Alice",
    greet: function() {
        // you can console.log(this) here which will refer to Alice
      setTimeout(function() {
        console.log(this.name); // 'this' refers to the global object
      }, 1000);
    }
};
persona5.greet(); // undefined
// Here too we have 3 functions. But unlike forEach which is generally called up on a iterable due to its funtionality, setTimeout is called without requiring any such thing. So Now the middle function itself doesnt have access to 'this'. Henceforth the inner regular function also dont have access to this.

// 'this' keyword and nested arrow functions
// The beauty with arrow functions is that it can inherit the 'this' context from any level.
// In the above example, if the callback function inside setTimeout is an arrow function, then console.log(this.name) will refer to the persona5 object. Despite the middle function (setTimeout) not having access to 'this', arrow function can inherit from the outermost greet function.  
  
// Example 5:
// Commenting out this because of the timeout function which is pushing the output of this code to the very last in console
    // const persona = {
    //     firstName: 'Viggo',
    //     lastName: 'Mortensen',
    //     fullName: function () {
    //         console.log (`${this.firstName} ${this.lastName}`)
    //     }, // See this is a normal function and it will work as expected. 
    //     shoutName: function () {
    //         setTimeout(() => {
    //             console.log(this);
    //             console.log(this.fullName());
    //         },3000)
    //     }
    // }
    // persona.shoutName();

// This code is quite tricky due to setTimeout()
// shoutName() sets a timeout of 3000 milliseconds (3 seconds) to execute an arrow function. By the time the arrow function executes, the shoutName function has already completed, and its execution context is no longer available. As a result you may that the 'this' context within the arrow function does not refer to the persona object. But actually no. Remeber closures? So Even though shoutName completes, the arrow function retains access to the this context of persona because of the closure created by the arrow function, ensuring that this still refers to persona when the arrow function executes.


console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("SetTimeout and SetInterval")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// setTimeout
// This function will run with a delay of x milliseconds where the programmer determines the x
console.log("HELLO!!!...")

// setTimeout(() => {
//     console.log("...are you still there?")
// }, 3000)

console.log("GOODBYE!!")

// setInterval
// This function will be called every x seconds repeatedly
// It will not stop by default

// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000);

// clearInterval(id);
    // SetInterval will return a value called id which we have stored in a variable called 'id'
    // When you call the function clearInterval with that id, it will stop.


console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("Every and Some Methods")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Every and Some Methods
    // Every - When used, it checks whether every element in an array satisfies the specified condition. If so it returns true.
    // Some - When used, it checks whether atleast any one element in an array satisfied the specified condition
// They are similar to 'if condition' in combination 'logical operators' but very concise.

// Example 1:
console.log (movies1.every(m => m.score > 70))
// false
console.log (movies1.some(m => m.score > 70))
// true

// Example 2:
// Define a function called allEvens that accepts a single array of numbers.  If the array contains all even numbers, return true.
// 
function allEvens (numbers){
    const arrays5 = numbers.every(function (even){
        return even % 2 === 0;
    })
    console.log(arrays5) // returns false
}
allEvens([1,2,3,4,5,6,7,8,9,10]);
// You can simplify this as following
console.log (numbers.every (even => even % 2 === 0)); // returns false

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("Optional Chaining")
console.log("------------------------------------------------------------------------------------------------------------------------------------");
// Optional chaining is used to safely access nested properties in an object without having to manually check if each reference in the chain is valid (i.e., not null or undefined).
const rest = {
    info: {
      name: "The Great Bistro",
      type: "Bistro"
    },
};
console.log(rest.info?.name); // Output: "The Great Bistro"
// rest: This is an object.
// info: This is a nested property within the restaurant object. However, info might be null or undefined.
// ?.: The ?. is the optional chaining operator. It allows you to attempt to access a property of an object without causing an error if the object is null or undefined.
// name: This is the property you want to access within info.

// Without Optional Chaining: If you tried to access restaurant.info.name directly and info was undefined or null, it would cause a runtime error: TypeError: Cannot read property 'name' of undefined.
// With Optional Chaining (?.): If restaurant.info is null or undefined, the expression restaurant.info?.name will simply return undefined instead of throwing an error.

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("New Features in JS")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// New Features in JS
// 1. Parameters/Params
// If the user doesn't provide an input to the argument, output will be undefined.
    // Example: When calling the below function, we should call it as rollDie1(6). If you dont specify the number, output will be undefined.  
// To counter this we can do 2 things. 
    // Provide a error message to make them give an argument
    // Declare a default value if the user hasn't provided the input - This is what we are going to do

// Older Way
function rollDie1(numSides) {
    if (numSides === undefined) {
        numSides = 6
        // By default, input will be 6
    }
    return Math.floor(Math.random() * numSides) + 1
}

// Newer way
// Example 1:
function rollDie(numSides = 6) {
    // Now rather than making it as a separate condition, you can mention the default value within the paranthesis
    return Math.floor(Math.random() * numSides) + 1
}

// Example 2:
// The order of default value is essential.
// Lets say that you have 3 arguments, if you are going to give default value to just one/two, always mention them at the last (That is after mentioning the user expected argument). Following is the correct way
function greet1(person, msg = "Hey there", punc = '!') {
    console.log(`${msg}, ${person}${punc}`)
}
greet1("Bharath");
// Incorrect way with respect to the order of arguments
function greet2(msg = "Hey there", person, punc = '!') {
    console.log(`${msg}, ${person}${punc}`)
}
greet2("Bharath");
// See even though "Hey there" is at the first position, it will not be equated to '${msg}'. JS will process the user inputs first. So, it will equate person with `${msg}'and hence the person input will become undefined

// 2. Spread
// It can expand any iterables such as an array, array literals (key-value pair within an array) or object literals

const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];

// When you want to find the maximum value of the given numbers using the below method, it will not work. Because nums is an array.
Math.max(nums); 
console.log (nums); //NaN

// Spread in functions

console.log(Math.max(...nums)); //53456
// We can achieve this using spread which is nothing but 3 dots before the name of the array

// Spread in Arrays
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

// const allPets = [...cats, ...dogs];
// This will list both elements of cats and dogs together. 
// You can even add an element in between if you want as below
const allPets = [...cats, 'parrot', ...dogs];
console.log (allPets)

// Spread in Objects
// Example 1:

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = { ...feline, ...canine };
// Here family property is common to both. So whatever that comes last will override the previous
console.log (catDog) 

// Example 2:

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke',
    college:{
        marksGrade: 'S',
        collegeName: 'MNMJEC',
    }, 
}
const school = {
    grade: 12,
    shcoolName: 'VMHSS',
    marks: 86,
}

console.log (dataFromForm)
const newUser = { ...dataFromForm, school, id: 2345, isAdmin: false }
// Here you are expanding the properties and also adding new details
console.log (newUser);

// 3. Rest - Rest of the parameters 
// Opposite to Spread operator where it collects the elements into a single array-like (Explained later)
// Lets say that you want to pass multiple arguments. While receiving you need not specify all the arguments again. Rather just use ...argsName. But mind you, now this becomes an array. So you may again want to use a spread operator if you are not going to use that array as it is.

// Example 1:

function sum2(...nums) {
    return nums.reduce((total, el) => total + el)
}
console.log(sum2(1,2,3,4,5,6,7,8,9))
// See you are passing 9 arguments to sum() where ...num will convert them into a single array

// Example 2:

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}
raceResults('Bharath', 'Aravind', 'Margrave', 'Badri', 'Karthick');
// Here Margrave, Badri and Karthick are considered to be rest of the parameters and hence clubbed into the array names everyoneElse

// Note:
    // Eventhough though we say they are converted into array, they are not an array. They are array-like. When we look at the typeOf(restParams), the output is actually object.
    // It has a length property like an array has but push and pop doesn't work on them
    // You can convert them to array if you want =>  'Array.from(restParams)'
    // It is not available under arrow functions

// 4. Destructuring
// It is a clean syntax to unpack values from arrays and properties from objects into distinct variables

// Array Destructuring

const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// const gold = scores[0];
// const silver = scores[1];
// With above you can access individual scores

const [gold, silver, bronze, ...everyoneElse] = scores;
// Here console.log(gold) will give the value of 0th index. 
// Note: You should be using [] on the left side as it is an array . You have to use {} for objects

// Object Destructuring

const user1 = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    cityName: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    cityName: 'Tulsa',
    state: 'Oklahoma'
}

// const firstName = user1.firstName;
// const lastName = user1.lastName;
// const email = user1.email;
// This is how you can access the inidvidual property

// But using destructuring it is lot more simpler
const { email, firstName, lastName, cityName, bio } = user1;

// Now if you want to do the same thing for the object user2, as "const { email, firstName, lastName, cityName, bio } = user2;"  in the very next line it is not possible.
// See to do that with object destructuring, they have to be in different scopes. 
// So, what we can do is, 
    // Destructuring user1
        // const { email: email1, firstName: firstName1, lastName: lastName1, cityName: cityName1, bio: bio1 } = user1;

    // Destructuring user2
        // const { email: email2, firstName: firstName2, lastName: lastName2, cityName: cityName2, bio: bio2 } = user2;
// To simply put, you should have different variable names for the different objects within the same scope.
// const { born: birthYear, died: deathYear = 'N/A' } = user2;
// Look at the above line carefully. You are bascially modifiying the property name 'born' and 'died'. Also, you are specifying a default value of deathYear (The default value will kick in only when there are no values assigned). If no property in the name 'died' has been found, a newproperty called 'deathYear' will be created and the default value will be assigned to it

// Parameter Destructuring

// The usual way is as follows
// function fullName(user1) {
//     return `${user1.firstName} ${user1.lastName}`
// }

// Destructuring is as follows
// function fullName(user1) {
//     const { firstName, lastName } = user1;
//     return `${firstName} ${lastName}`
// }


function fullName({ firstName, lastName }) {
    return console.log(`${firstName} ${lastName}`)
}

movies1.map(({ title, score, year}) => {
    return console.log(`${title} (${year}) is rated ${score}`)
})
// {title, score, year} - This part is significant. Look the arguments are enclosed in curly braces unlike normal parameters. 
// That is we are directly destructuring within the parameter itself 
// search for movies1 to find their list.
console.log("------------------------------------------------------------------------------------------------------------------------------------");