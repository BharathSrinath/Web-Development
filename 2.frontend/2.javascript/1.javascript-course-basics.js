// Always include the javascript at the bottom of your body.
// This is because, when you open a webpage JS will run when you place them at the top and hence other fucntions and styling may not reflect. So it is a best practice to place them at the bottom
// JS is very lenient langauge. Sometimes forgetting the semi-colon will not even throw errors.
console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log("Understanding Console");
// When you call console.log() and pass a value or expression as its argument, that value or expression will be printed to the console. This allows you to inspect and debug your code by outputting messages, variable values, or any other information you want to track during the execution of your JavaScript program.
console.time("This entire code took....");
console.log("first file of javascript");
console.log('Hello world');
// Whatever in the double quotes (""), single quotes ('') and backticks (``) will be displayed as it is. Generally you will use double and single quotes. But when you want to use any special characters or even double and single quotes in the content, backticks are preferred.
// Also backtick can preserve the indentsation (lines and tabs between words)
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

// Variables in Java - var, let and const
// You can start var name with _, letters and symbols but not with numbers
    // Best practice is always to start with letters
    // They are case-sensitive

// Most widely used programming variable case types
/*
    1. camelCase (small letter for first and capital for the second without any space) - Best practice
    2. kebab-case
    3. snake_case
    4. PascalCase
*/

var language = "JavaScript";
var course = "full stack web development";
var ratings = 5;

console.log(language, course, ratings);
language = "C++";  // This change will not reflect in console. Because in console.log, for the variable language we still "JavaScript"
// So if you want to change you need another console after the above statemenet or just place the above statemnet before console.log 

const marks = 97;
// marks = 100; /* You cannot redeclare const variables. Its quite obvious isn't it */
console.log(marks); 

// 'Var' has function level scope
var city = "Berlin";
console.log (city);


{
    // 'let' and 'const' have block level scope
    // Its scope is within these curly braces
    let city = "Sydney";
    console.log(city);
}

console.log(city);

var city = "Chennai";
console.log (city);

const arr = [10,20,40,50];
// arr = [10,20,40,50,30]; This is not possible. Why? Because you are trying to re-declare const. 
console.log (arr);
arr.push(30);
console.log (arr);
// Having said that, you can change or update the array value even for const using 'push' (one of many predfined methods (functions)). Now 30 will be added to the end. 

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log("Data-types");
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Data types
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
            // When you dont define a variable in an operation that should return a numeric value. Here x doesn't have a value.
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

// 5. Undefined
let test2;
console.log(test2);
console.log("The data type is " + (typeof test2));

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
        // Here car is an object created with constructor key word called 'new'. First syntax (below) uses constrcutor function in creating an object
        // Some of the inbuilt functions
            // date: let currentDate = new Date();
            // error: let myError = new Error('This is an error');
    // Object.create()
    // Class Syntax
    // Function Objects
    // Factory Functions

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
// if (human.hasOwnProperty(propertyName)) {
    // console.log(`The value of ${propertyName} is: ${human[propertyName]}`);
        // There should be no space between ($) dollar sign and ({) curly braces
// } else {
//     console.log(`Property ${propertyName} does not exist in the person object.`);
// }

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
console.log(html.trim());
console.log(html[3]);
// This will tell what character is at the 3rd position. (Index starts from 0)
// This is the best practice compared to 'charAt' which you will see below
console.log(html.indexOf('H'));
// This will tell you the position of the character 
// Only tells you the first character that it finds. 
console.log(html.charAt(6));
// This will tell you the character in the respective position.
console.log(html.at(-1));
// Difference between 'charAt' and 'at'
    // 'at' can accept negative indexes where the count starts from the end of the string. 'CharAt' cannot accept negative indexes
        // Positive index for 'at': 0 to n (left to right)
        // Negative index for 'charAt': -1 to n (right to left)
    // charAt returns 0 when the inde is out-of-bounds. 'at' returns undefined when the index is out-of-bounds.
console.log(html.charCodeAt(1));
// This will tell you the ASCII value of the respective character at the position.
console.log(html.endsWith('nejwj'));
// Searches the end of the variables value whether the text 'nejwj' exists or not. Returns a boolean value
console.log(html.includes('nejwj'));
// Same as above but searches the entire string and returns true/false
console.log(html.substring(1, 6));
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

document.body.innerHTML = html2;
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
    // If the starting index provided to the splice method is negative, it is treated as an offset from the end of the array. In other words, -1 refers to the last element, -2 refers to the second-to-last element, and so on.
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
// Will just erase the value but memory will be retained.
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
age2.sort(function(a, b) { return b - a;});
// sorts in a descending order
// I know this is tricky. But hear me out. It is not as difficult as you think
// In JS, the sort() function sorts elements in ascending order by default when used without any arguments. To sort elements in descending order, you can provide a custom comparison function to the sort() method.
    // Here custom comparison function is nothing but an anonymous function with two arguments
        // You need two arguments at the very least to sort - So dont think too much on that
    // The comparison logic inside this function is 'return b - a;' compares b and a to achieve descending order. When b - a is positive, it means b should come before a, which results in descending sorting.
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
let array25 = array24.join("and");
console.log(array25); // Output is 10 and 20 and 30 and 40

// toString() - array to string with default character comma(,)
let array26 = [10,20,30,40];
let array27 = array26.toString();
console.log(array27); // Output is 

// isArray() - To check whether the given input is array or not
let array28 = [10,20];
console.log(isArray(array28)); // Output is true
let string28 = "hi";
console.log(isArray(string28)); // Output is false

// reverse()
let age3 = [65, 56, 78, 87,19];
age3.reverse();
// Just reverses the elements in array
console.log(age3);
// reverse() with strings works somewhat differently. To reverse them, frst we have to breakdown the string into individual characters (can use split('')). Basically the string will be converted to array and then use reverse() on that array.
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
// Remember these things dont work on a string just because strings are character arrays (Dont use that logic here)
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
// Note: Even though you have declared var inside the for-in-loop,it can be accessed at the fucntional scope. 
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
    // This step is not necessary but makes it much more easy to write
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
    // This will store the users input to input variable and display it on the screen since it is a propmt function being called again and again
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
    // password.indexOf (' ') === -1 means that, no space as the first character in the password. If it found a space it will will return the index number, if not returns -1. 
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
// 1. Function Declaration
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

// 2. Function Expression
let add = function(a,b) {
    return a+b;
}
console.log(add(4,3));

// Here you are defining the function inside a variable (as an anonymous function). Why it it called anonymous?
    // Technically, here add is name of the variable (that refers to the function) and not of the function. If you had used function declaration, add would have been the name of the function. But here function doesn't have a name hence called anonymous.

// Lets understand the significant difference between both which wasn't mentioned previously - Hoisting
// See in function declaration, when you call the function before defining it, it is acceptable and that is not the case with function expression.
// Lets look at the same example as above

    // Function declaration
    display_message("Hello world");

        // function display_message(msg) {
        //     console.log(msg);
        // }

    // See that fucntion has been called first before defining it.

    // Function expression
    // This cant be done with function expression. Error will be "Cannot access 'add3' before initialization"

        // console.log(add3(4,3));

        // let add3 = function(a,b) {
        //     return a+b;
        // }

// variable hoisting in JS
    // 1. var data-type: Variables similar function declarations (not initializations) are moved to the top of their containing scope during the compile phase, before the code has been executed. These variables are initialized to undefined.
            // console.log(x); // undefined
            // var x = 5;
            // console.log(x); // 5
        // You see if it is a C language, it will thrown an error.  Why? We need to declare 'x' before using that. But JS will move the 'var x' declaration to the top. (not the initialisation but only the declaration).   
    // 2. let and const data-type: They are also hoisted but not initialised. Okay then why hoist them when let and const variables cannot be used before declaration? Infact even with respect to var data-type what is the point of hoisting them when variable is going to initialised to undefined. There is a tricky and advanced concept called Temporal Dead Zone (TDZ).
        // The period from the start of the block until the declaration of a variable is known as the Temporal Dead Zone (TDZ).  
        // If we try to access a let or const variable in its TDZ, we will get a ReferenceError.
        // The TDZ has an important role in catching errors. If JS didn’t have the TDZ and we mistyped a variable name or tried to use a variable before declaring it, JS would just assume we meant to use a global variable or undefined. With the TDZ, JavaScript lets you know that something’s wrong.
// While this might seem unnecessary or confusing, it’s simply a part of JS’s behavior. It’s simpler and more intuitive to use variables only after they’ve been defined. Unofortunately, this is the approach taken by many programming languages.

// Few additional things about function declaration and function expressions:
    // when you have two function declarations with same name in the same scope, second will replace the first
    // But you can't have two function expressions with same name with let/const in the same scope. 
    // When you have a function declaration and a function expression with same name, irrespective of the order in which function are defined, function declaration will be hoisted above and will be executed first. Now when the function is called again, function expression that comes later (since function declaration is hoisted above) will replace the function declaration.
       
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

let square1 = function (a){
    return a*a;
}

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("Higher Order Functions")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Higher Order Functions - Functions that are working with other functions like taking it as an argument or a function returning a function
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
// This is not necessary herebut just to know that you can capture the return value of function and store in a variable.
// Now console.log can directly print using the variable as below.
console.log (msytery());

// Returning functions are very powerful. As you see they can not only return functions but can also generate functions (function factories)
// Example 3: Function factories

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
// Note: You cant do this
    // const isChild = makeBetweenFunc (0, 18);
    // isChild(17);
    // console.log (isChild);
        // Here you are logging the function itself and not the value of the function. This will result into same output as when you have called the makeBetweenFunc()

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
console.log ("Callbacks and Array Methods")
console.log ("ForEach")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Callbacks and Arrays Methods

// for-each
// Syntax: 
    // array.forEach(callback(currentValue[, index[, array]]) {
        // Code to be executed for each element
    // });
// Dont get confused by looking at the syntax. 
    // Callback function refers to a function that is passed as an argument to another function and is intended to be called later
    // Current value refers to the the value from which you want the loop to begin.

const arrays3 = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
arrays3.forEach(function(element, index, arrays3) {
    sum += element;
    console.log(`${arrays3} - ${index}: ${sum}`);
});

// forEach can accept 3 values. They are current value, index and array. current value by default represents the first value and the index will be array [0] and the array will be name of the array which holds the elements. 
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
// Syntax: const newArray = originalArray.map(callbackFunction(currentValue[, index[, array]])[, thisArg]);

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

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("Filter")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// Filter
// syntax is same as map
// The map() and filter() functions in JavaScript are similar in that they both operate on arrays and use a callback function to process elements.
// But the difference is 
    // map() will take each element in an array and apply transformation or computation and pushes the altered element into a new array. So the new array will still have all the element in it but with a modified version
    // filter() will filter out the elements in the array based on the condition that we provide and pushes the extracted element into new array. If the condition is satisfied by every element, you will see every element in the result. If not, only the element that satisfied the condition will be present. Also, they are not modified here. So the original values will be present unlike map() where the modified values will be present
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
// Syntax: array.reduce(callback(accumulator, currentValue, index, array) => {
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
Not Ideal When: You're working with properties of an object or iterable objects like arrays, strings, maps, etc. 

2. For...In Loop
Ideal Use Case: When you need to work with the properties of an object.
Not Ideal When: Iterating over arrays because there's no guarantee on the order of properties and it may return inherited enumerable properties.

3. For...Of Loop
Ideal Use Case: When you want to iterate over iterable objects like arrays, strings, maps, etc. It's great for cases where you don't need to track the index.
Not Ideal When: You need to track the index or modify the original array because it does not provide access to the index of the array.

4. ForEach Method
Ideal Use Case: When you want to perform an operation for each element in an array and you don't need to create a new array. Great for performing side effects, like updating the DOM or logging to the console.
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
// ForEach Method, Map Method and Filter Method: Neither forEach or map or filter modifies the original array. The forEach method executes a provided function once for each array element but does not return a result, while the map method creates a new array with the results of calling a provided function on every element in the array and filter method also creates a new arrat with the elements that satisfy the provided condition but there will no change in the individual elements unlike map.

console.log("------------------------------------------------------------------------------------------------------------------------------------");
console.log ("'this' Keword")
console.log("------------------------------------------------------------------------------------------------------------------------------------");

// 'this' keyword in JS
// Example 1:

const cat = {
    name: 'Puchy',
    color: 'Black & White',
    breed: 'Street Smart',
    meow() {
    // Here we have used the new notation
        // console.log (color); 
            // This will throw an error. See when this process takes place outside an object literal, you wont any have issues.  Lets look at the scenarios.
            // 1. Variables (property name) and function within the object but variables outside the function: The variable cannot be accessed inside the function as shown above. So to access it we have to use 'this' keyword
            // 2. Variables (property name) insisde the object but function is defined outside the object: The variable can be accessed within the function using the name of the object like 'cat.color'. 
        // This is because color property has a scope under the object cat but not under the function meow.  
        return `${this.name} says MEOWWWW`;
        // When called from a function, it refers to the object from under which the function is present. (Like above) 
            // If the function is called as a standalone function outside the object, 'this' keyword may refer to the global object
        // In event handler functions for DOM elements, this often refers to the element that triggered the event.
    }
}

// Calling the function outside of object literal. It is simple and straight-forward. You do it just like you access any other property.
console.log(cat.meow());

// Example 2:

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg (){
        this.eggCount +=1;
        return "EGG";
    }
}
console.log(hen.layAnEgg())

// Global object and 'this'
// In Object lietrals, we define a property right? Technically everything that we do in Js browser environment (there are other environments like Node.js) is a property. Property of what? To define a property we need an object right?
    // Yes there exists a default object called 'windows' (in Node.js 'windows' is called as 'global') which is in-built. When you define a fucntion, a variable, use a loop - everything is turned into a property of that object.
// Hence, when you use this in the global scope, it refers to the windows object.

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

console.log ("AFTER!")
// This line will cannot be exected without try/catch

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
// Under a normal function, 'this' keyword will refer to the closest object under which it will be executed (not necessarily the closest object under which it is located). Because property of an object can have a function that refers to another property in another object. So, the 'this' keyword under the function of object 1 might be executed after referring to a property in object 2 which might hold the value as object 1. Confusing? Look at the example below. You will understand.

const obj1 = {
    name: 'Object 1',
    greet: function () {
      console.log(`Hello from ${this.name}`);
    },
  };    
  
  const obj2 = {
    name: 'Object 2',
  };
  console.log (obj1.greet)
  obj2.sayHello = obj1.greet; 
    // Creating a new property in object name sayHello and assigning it the greet function
  
  obj1.greet();      // Output: Hello from Object 1
    // See here we are executing the function in obj1 directly
  obj2.sayHello();   // Output: Hello from Object 2 (this refers to obj2)
    // Here, sayHello is a function UNDER OBJECT 2 which has the following executable after the assignment step (obj2.sayHello = obj1.greet; )
        // ƒ () {
        //     console.log(`Hello from ${this.name}`);
        //   }
    // When this line of code is gettung executed, 'this' keyword refers to object 2.

// So this is how 'this' keyword works with regular functions. Now lets see how it works under arrow functions.
// In arrow functions, it always inherits its value from the surrounding lexical (enclosing) scope where the arrow function is defined (not the closest object).
// Arrow functions do not have their own 'this' context; they capture 'this' from the context in which they are created.
    // So, lets say you have defined a normal function under an object literal and an arrow function under that normal function.
    // You know that if you use the keyword 'this' under a normal function, it will refer to the object. Now this property of the normal function will be inherited by the arrow function too. So 'this' keyword in the arrow function which is nested under a normal function will refer to the object too.
// If you are directly using arrow functions under an object literal, it will refer to the window object. Keep this in mind. Inheritance with respect to 'this' keyword is happening only within functions for arrow functions and not under objects. 
// Why would anyone build something this? To create confusion? No. Lets look at the practical purposes with few examples.

// Example 1: This program will not work with 'this' keyword under persona2
    // See for 'this' keyword to work under arrow functions, it should be DEFINED under a normal function. Just calling it under a function and defining it oustide the scope of normal function or under a different object (as below) will not work. 
    // In this code, when 'persona.setTime' is executed, it will move to the this.fullName() function under persona2
    // But 'this' keyword here refers to 'window' object and not persona1 from which the function has been actually called.   

const persona1 = {
    firstName: 'Aravind',
    lastName: 'Sundaresan',
    fullName: function () {
        console.log (`${this.firstName} ${this.lastName}`)
    },
    shoutName: function () {
        persona2.setTime();
    }
}

const persona2 = {
    firstName: 'Bharath',
    lastName: 'Srinath',
    setTime: () => {
        console.log(persona1.fullName());
        // Output will be undefined here. Why? The arrow function 'setTime' is defined within the context of persona2. However, since arrow functions do not have their own this context and inherit it from the enclosing scope, this in the arrow function setTime does not refer to the instance of persona2. Instead, it inherits the global this value, which is often the window object in a browser environment.
    },
}
persona1.shoutName();

// Example 2: This will work as expected because we have defined arrow function under a normal function and both are under the same object

const persona3 = {
    firstName: 'BadriNarayanan',
    lastName: ' Balaji',
    fullName: function () {
        console.log (`${this.firstName} ${this.lastName}`)
    },
    shoutName: function () {
        const setTime = () => {
            console.log(this.fullName());
        }
        setTime();
    }
}
persona3.shoutName();

// Example:

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
// shoutName() sets a timeout of 3000 milliseconds (3 seconds) to execute an arrow function. By the time the arrow function executes, the shoutName function has already completed, and its execution context is no longer available. As a result, the 'this' context within the arrow function does not refer to the persona object. 
// So using 'this' keyword within setTimeout() that is defined as an arrow function is not adivsable.


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
    // Every - When used, it checks whether every element in an array satifies the specified condition. If so it returns true.
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
// See even though "Hey there" is at the first position, it will not be equated to '${msg}'. JS will process the user inputs first. So, it will equate person with `${msg}'and hence the person input will becoeme undefined

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
// {title, score, year} - This part is significant. Look the arguments are enclosed in curly braces unlike nomral parameters. 
// That is we are directly destructuring within the parameter itself 
// search for movies1 to find their list.
console.log("------------------------------------------------------------------------------------------------------------------------------------");