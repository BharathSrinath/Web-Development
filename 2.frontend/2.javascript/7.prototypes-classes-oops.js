// Prototypes
// Prototypes in JavaScript serve a similar purpose to classes in Java. Both concepts are used to create objects and define their properties and behaviors, but they do so in different ways.
// Inheritance in Java is called classical inheritance where classes define the structure and behavior of objects. Objects (instances) are created from these classes, and classes can inherit from other classes.
// Inheritance in JS is called Prototypal Inheritance where objects inherit directly from other objects without the need for classes.
// ------------------------------------------------------------------------------------------------------
// | Feature             | Prototypal Inheritance (JavaScript)  | Classical Inheritance (Java)          |
// |---------------------|--------------------------------------|---------------------------------------|
// | Inheritance Model   | Objects inherit from other objects   | Classes inherit from other classes    |
// | Object Creation     | Directly from other objects          | From class definitions using          |
// |                     | (`Object.create`, constructor)       | the `new` keyword                     |
// | Method Addition     | Methods can be added to objects or   | Methods are defined in classes,       |
// |                     | their prototypes dynamically         | static at runtime                     |
// | Inheritance Chain   | Prototype chain, objects can inherit | Inheritance hierarchy, classes        |
// |                     | from multiple levels                 | extend other classes                  |
// | Flexibility         | Highly flexible, prototypes can      | Less flexible, inheritance            |
// |                     | be changed at runtime                | is defined at compile-time            |
// | Encapsulation       | Encapsulation through closures       | Encapsulation through access modifiers|
// |                     | or object properties                 |  (`private`, `protected`, `public`)   |
// | Multiple Inheritance| Achieved through mixins              | Not supported directly, interfaces    |
// |                     | and prototype chains                 | are used instead                      |
// | Runtime Behavior    | Can modify prototypes and            | Inheritance structure                 |
// |                     | inheritance chains at runtime        | is fixed at compile-time              |
// ------------------------------------------------------------------------------------------------------

// Explanation 
// JS is a prototype-based language, meaning that it doesn't have "classes" in the traditional sense that you might find in languages like Java or C++. Instead, it relies on prototypes for inheritance. 
// In JS, every object has a prototype, which is also an object. This prototype object can have its own prototype, and so on, forming what's known as a prototype chain. When you try to access a property or method on an object, JS will first look for that property directly on the object. If it doesn't find it, it will look up the prototype chain until it finds the property or reaches the end of the chain (where the prototype is null).
    // When you use console.dir (functionName or objectName) you can find this prototype property.
    // You can use any of the commands to access the prototype property. let obj = {};
        // Object.getPrototypeOf(obj); (or)
        // obj.__proto__; (or)
        // Array.prototype.pop = function () {...}
    // __proto__ (Dunder proto) vs prototype: 
        // __proto__ is what links an instance to its prototype. 
        // prototype is what provides the blueprint for instances created by a constructor function.
    // So what does this prototype hold? 
        // The prototype is either null or a reference to another object. 
        // Prototype property under console.dir (Array) will have all the methods like slice, pop, unshift, etc.
        // So when you declare a variable as an array, it will inherit all the methods under the prototype of Array object.  
        // Example: let a = [0,1,2,3,4]; a.pop(); will remove the last element from the array.
    // Everytime we create an object (lets say an array), it is called - 'instance'. So for every instance that is created, methods under prototype property of array will be inherited. 
    // We can add/alter any properties/methods to an existing ones like String, Array, etc. 
        // Changing the existing method - pop()
            Array.prototype.pop = function () {
                return "Sorry can't remove"
                // In JS, pop() removes the last element in an array right?  But from now on, in this document whenever you use pop(), it will display the above statement.
            }
        // Adding a new method named yell()
            String.prototype.yell = function () {
                return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
            };
            const a = 'bees'
            a.yell(); //"OMG!!! BEES!!!!! AGHGHGHG!"
    // Or we can create an object and then add any methods/properties too.
        function Persons (name, job, yearOfBirth) {
            this.name= name;
            this.job= job;
            this.yearOfBirth= yearOfBirth;
        }
        Persons.prototype.calculateAge= function() {
            // we are adding 'calculateAge' method to the object 'Persons'
            // This method will sit under the prototype property.
            // So every instance of Persons object can access the calculateAge() from now.
            console.log ('The current age is: '+ (2024 - this.yearOfBirth));
        }
        const person1 = new Persons("Bharath", "Full Stack Developer", 1994); 
        person1.calculateAge();
        const person2 = new Persons("Aravind", "Software Engineer", 1995); 
        person2.calculateAge();
// When you try to access a property or method on an object, and it's not found in the object itself, JavaScript looks for it in the object's prototype.
    // Look at the above example. 'calculateAge()' is not directly defined under the person1 itself. So JS will look under prototype property.  
// So why? Why are we not defining calculateAge directly under an object? For memory efficiency. 
    // When you define a method/function directly under an object, it becomes a part of every instance of that object. Each time you create a new instance (a new variable on which the object is assigned), a new copy of that method is created for each instance. This can lead to increased memory usage, especially when you have many instances of the object
    // On the other hand, when you use prototypes to define methods, those methods are shared among all instances created from the same constructor. The method exists only once in memory, and each instance has a reference to that shared method. This results in more memory-efficient code because you avoid duplicating the method for each instance.
// Prototypes can be used with both factory functions and constructor functions. But with factory functions we need a small work around. Hence they are commonly used with constructor functions. 

// One more example to understand behind the scenes. 

let test = [1,2,3,4,5]
test.pop();

// When you call a.pop(), JavaScript does indeed first look for the pop method on the 'a' object itself. If it doesn’t find it there, it then looks up the prototype chain.
// Since 'a' is an array, its prototype is Array.prototype, which does have a pop method. This pop method is what gets called, and it removes the last element from the array and returns it. 

// IMPORTANT NOTE: KINDLY IGNORE THE FOLLOWING. LIKE DONT DEEP DIVE. JUST KNOW THAT THEY EXIST BY GOING THROUGH ONCE. SINCE ES6 WE ONLY USE CLASS BASED APPROACH (Starts from Number 4).

// 1. Factory functions without prototypes
// Example 1:
function createPerson(name, age) {
    let person = {
        name: name,
        age: age,
        sayHello: function () {
            console.log('Hello, my name is ' + this.name);
        }
    };
    person.sayHello();
    return person;
}
let person3 = createPerson('John', 25); // Outputs: Hello, my name is John
let person4 = createPerson('Jane', 30); // Outputs: Hello, my name is Jane
// See without creating the properties again and again, we are just calling the same function with different arguments

// Example 2: This is a function to obtain rgb color and hex color for the given inputs
// Dont worry about the logic. Just focus on how the factory functions work here. 
function makeColor(r, g, b) {
    const color = {
        red: r,
        green: g,
        blue: b,
        rgb: function () {
            const { red, green, blue } = this;
            // this line translates to this.red, this.green, this.blue which referes to the corresponding value r, g and b. We are using destructuring.
            return `rgb(${red}, ${green}, ${blue})`;
        },
        hex: function () {
            const { red, green, blue } = this;
            return (
                '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)
            );
        },
        rgba: function(a = 1.0) {
          const { red, green, blue } = this;
          return `rgba(${red}, ${green}, ${blue}, ${a})`;
        }
    };
    return color;
  }
const firstColor = makeColor(35, 255, 150);
// Now for every instance that we create it will have the copy of both rgb and hex.  
firstColor.hex(); //"#23ff96"
firstColor.rgb(); //"rgb(35, 255, 150)"
firstColor.rgba(); //"rgba(35, 255, 150, 1)"

const black = makeColor(0, 0, 0);
black.rgb(); //"rgb(0, 0, 0)"
black.hex(); //"#000000"
black.rgba(); //"rgba(0, 0, 0, 1)"

// 2. Factory functions with prototypes
// Example 1: Define prototype with methods
const personProto = {
    sayHello: function () {
      console.log('Hello, my name is ' + this.name);
    }
};
function createPerson1(name, age) {
    let person = Object.create(personProto);
    // This is the work around
    person.name = name;
    person.age = age;
    person.sayHello();
    return person;
}
let person5 = createPerson1('John', 25);
// Now all objects created by the createPerson factory function share the same sayHello method from the prototype
  

// 3. Constructor functions with prototype
// Syntactical differences from factory functions:
    // First letter of function name is capitalized
    // Here object is created with a keyword 'new'
    // Object is created outside the function unlike factory functions. 
    // 'this' keyword which is used under the function refers to the object that is created outside. 
    // Constructor functions implicitly return the newly created object unlike factory functions which explicitly return 
// Example: Same example which we used for factory functions
        function Color(r, g, b) {
            this.r = r;
            this.g = g;
            this.b = b;
        }
        // Prototypes
        Color.prototype.rgb = function() {
            const { r, g, b } = this;
            return `rgb(${r}, ${g}, ${b})`;
        };
        Color.prototype.hex = function() {
            const { r, g, b } = this;
            return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        };
        Color.prototype.rgba = function(a = 1.0) {
            const { r, g, b } = this;
            return `rgba(${r}, ${g}, ${b}, ${a})`;
        };
        const color1 = new Color(40, 255, 60);
        color1.rgb();
        color1.hex();
        color1.rgba();
    const color2 = new Color(0, 0, 0);
    color2.rgb();
    color2.hex();
    color2.rgba()
// Lets look inside the output of both the examples.
    // 1. firstColor
        // {red: 35, green: 255, blue: 150, rgb: ƒ, hex: ƒ, …}
        // blue: 150
        // green: 255
        // red: 35
        // hex: ƒ ()
        // rgb: ƒ () 
        // rgba: ƒ (a = 1.0)
        // [[Prototype]]: Object
    // 2. color1
        // Color {r: 40, g: 255, b: 60}
        // b: 60
        // g: 255
        // r: 40
        // [[Prototype]]: Object
            // hex: ƒ ()
            // rgb: ƒ ()
            // rgba: ƒ (a = 1.0)
// In the first example (factory function), we have functions - hex, rgb and rgba under the created instance itself. It means for every instance that we create, it will have a copy of those functions.
// In second example (constructor function), these functions are under prototype. It means only the actual object has these functions and the instances created from it. And all the instances that we create will inherit from the object itself.  

// 4. Constructor functions with class syntax:
// Before the introduction of class syntax in ES6, constructor functions with prototype were the primary mechanism for creating objects with shared methods.
// There is no difference between constructor function with class and constructor function with prototype except syntactical. Under the hood, class also uses prototypes.
    // Major difference is the use of keyword 'constructor'. 
    // Also we are defining all the functions/methods under the class itself
    // Whenever you create a new instance, the constructor function will be called immediately. 
    class Col {
        constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        }
        // IMPORTANT NOTE: In Java, when you initialize instance variables in the constructor, you can directly use them within any method of the class without needing a special keyword like this (although this can also be used for clarity). In JavaScript, this is necessary to distinguish between instance properties and local variables.
        rgb() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
        };
        hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        };
        rgb(a = 1.0) {
        const { r, g, b } = this;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
        };
    }
    const color3 = new Col(40, 255, 60);
    color3.rgb();
    color3.hex();
    color3.rgba();

    const color4 = new Col(0, 0, 0);
    color4.rgb();
    color4.hex();
    color4.rgba()

// 'extends' and 'super' keywords
// In the below example, we are using almost same lines of code under both 'Cat' and 'Dog' => constructor() and eat()
class Cat1 {
	constructor(name, age) {
        this.name = name;
        this.age = age;
	}
    eat1() {
        return `${this.name} is eating`;
    }
	meow1() {
		return 'MEOWWWW!!';
	}
}
const animal1 = new Cat1 ('Puchy', 11);
animal1.eat1();
animal1.meow1();
class Dog1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
	}
    eat1() {
        return `${this.name} is eating`;
    }
	bark1() {
		return 'WOOOF!!';
	}
}
const animal2 = new Dog1 ('Mac', 7);
console.log(animal2.eat1())
console.log(animal2.bark1());
// We can simplify the above code by removing the same lines and placing them in a common class
// The lines of code in the common class can be made accessible with the help of 'extends' keyword.
class Pet2 {
	constructor(name, age) {
		console.log('IN PET CONSTRUCTOR!');
		this.name = name;
		this.age = age;
	}
	eat2() {
		return `${this.name} is eating!`;
	}
}
class Cat2 extends Pet2 {
	meow2() {
		return 'MEOWWWW!!';
	}
}
class Dog2 extends Pet2 {
	bark2() {
		return 'WOOOF!!';
	}
}
const animal3 = new Cat2 ('Puchy', 11);
console.log(animal3.eat2());
console.log(animal3.meow2());

const animal4 = new Dog2 ('Mac', 7);
console.log(animal4.eat2());
console.log(animal4.bark2());

// 'Super' keyword allows a subclass (Cat and Dog) to call methods or the constructor of its superclass (Pet). 
// Also if we want to use 'this' keyword within subclass constructor (read that again. Not just in 'sublcass' but in 'subclass constructor'), we need to use 'super' keyword. This is because, in a subclass, you can’t use 'this' in the constructor until the parent class’s constructor has run.
// When you call super() in a subclass constructor, it calls the parent class’s constructor, passing along any arguments. The parent class’s constructor runs and creates the new object (this). Only after the parent class’s constructor has finished can you use this in the subclass constructor to add or modify properties.

class Pet3 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat3() {
		return `${this.name} is eating!`;
	}
}
class Cat3 extends Pet3 {
	constructor(name, age, livesLeft = 9) {
		super(name, age);
		this.livesLeft = livesLeft;
	}
	meow3() {
		return 'MEOWWWW!!';
	}
}
class Dog3 extends Pet3 {
	bark3() {
		return 'WOOOF!!';
	}
	eat3() {
		return `${this.name} scarfs his food!`;
	}
}
const animal5 = new Cat3 ('Puchy', 11);
console.log(animal5.eat3());
console.log(animal5.meow3());

const animal6 = new Dog3 ('Mac', 7);
console.log(animal6.eat3());
console.log(animal6.bark3());