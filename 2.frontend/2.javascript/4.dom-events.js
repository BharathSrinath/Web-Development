// Event Listeners
    // They allow you to specify how your application should react when a specific event occurs.
    // There are different ways of attaching event handlers to HTML elements. 
    // List of commonly used event listeners
        // Mouse Event Listeners:
        //     click: Listens for mouse clicks (e.g., left mouse button).
        //     mouseover: Triggers when the mouse cursor enters an element.
        //     mouseout: Triggers when the mouse cursor leaves an element.
        //     mousedown: Occurs when a mouse button is pressed down.
        //     mouseup: Occurs when a mouse button is released.
        //     mousemove: Tracks mouse movement within an element.
        //     dblclick: Detects double clicks.
        // Keyboard Event Listeners:
        //     keydown: Listens for a key press.
        //     keyup: Triggers when a key is released.
        //     keypress: Occurs when a key is pressed and released.
        // Form Event Listeners:
        //     submit: Listens for form submission.
        //     reset: Triggers when a form is reset.
        //     input: Detects changes in form input fields.
        // Focus Event Listeners:
        //     focus: Occurs when an element gains focus.
        //     blur: Occurs when an element loses focus.
        // Window Event Listeners:
        //     load: Listens for the complete loading of a page.
        //     resize: Occurs when the browser window is resized.
        //     scroll: Detects scrolling within the page.
        // Custom Event Listeners: You can create custom events to trigger specific actions in your application.
        // Touch Event Listeners (for mobile devices): touchstart, touchend, touchmove, etc. They Handle touch-based interactions.
console.log("----------------------------------------------------------------------------------------------------------------------------------------");

console.log("Inline Event Handlers");
// 1. Inline Event Handlers:
    // You know this. Just like CSS inside HTML, here we are talking about JS inside HTML.
    // Example: <button onclick = "alert ('You clicked me!'); alert ('Click me again')"> Click Me!</button>
        // Here onclick is an attribute of button element and JS is written inside the quotes where alert is a key word

console.log("----------------------------------------------------------------------------------------------------------------------------------------");

console.log("Separate Event Handlers in JavaScript");
// 2. Separate Event Handlers in JavaScript:

const btn = document.querySelector('#v2');

btn.onclick = function () {
// Now when the user clicks the button, this function will be executed
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}

btn.onmouseenter = function scream() {
// When the mouse pointer hovers over the button, this function will executed
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!")
}

console.log("----------------------------------------------------------------------------------------------------------------------------------------");

console.log("addEventListener Method");
// 3. addEventListener Method: Best Practice than the above 2
    // You can attach multiple event listeners to the same element, each handling different aspects of the event.
    // You can use event delegation, attaching a single listener to a common ancestor of multiple elements and handling events for child elements. 
    // When you add or remove elements from the DOM dynamically, addEventListener is the preferred way to ensure that new elements receive the necessary event handling.

function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

// Without eventListener
    // tasButton.onclick = twist;
    // tasButton.onclick = shout;
        // See when the above code is executed, shout will over-ride the twist and you wont see the twist output. You can assign only any one of the function to tasbutton variable with respect to onclick property. 
// Syntax: element.addEventListener(event, function, useCapture);
    // The type of event you want to listen for, such as "click," "mouseover," "keydown," etc.
    // useCapture (optional): A Boolean value that specifies whether the event should be captured during the capturing phase (true) or the bubbling phase (false - default value). 
        // Example: tasButton.addEventListener('click', twist, true);


tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)

// Here, you see that both of them will be executed with a single click and no overriding takes place
// Functions can be directly defined within above code too (like below).

tasButton.addEventListener('mouseenter', function warn(){
    console.log ("Don't come near me!")
})
// Just understand how the syntax works. Here when 'mouseneter' argument is passed, it will execute the lines within function. That is mousenter will pass the arguments that is necessary for the function to perform even though function arguments is empty. If you want to know what arguments does the mouseenter event pass to warn(), you can give a name to the argument and console.log as below
    // tasButton.addEventListener('mouseenter', function warn(evt){
    //     console.log (evt)
    // })
// So those information that are being passed here as arguments are called as eventObjects (Just like we have elementObject and NodeObject)
    // An event object contains information about an event, such as a user's interaction with a web page. 
    // It provides details about the event, including the type of event, the target element, and any additional information related to the event.

console.log("----------------------------------------------------------------------------------------------------------------------------------------");

console.log("Event And 'this' keyword");
// Event And 'this' keyword

const makeRandColor1 = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandColor1();
    this.style.color = makeRandColor1();
    // Here, 'this' keyword refers to the button element and h1 element that triggered the event
}

console.log("----------------------------------------------------------------------------------------------------------------------------------------");

console.log("The Event Object");

const input = document.querySelector('input');
input.addEventListener('keydown', function (e) {
    console.log(e.key)
    console.log(e.code)
})
// Among many things your eventObjects will contain, two of them are key and code which is what we are going to study about
// Here key is about the character or symbol associated with the key, while code is about the key's physical position on the keyboard.
    // When you press 'a', your output for the above code will be 
        // a
        // keyA
    // When you press 'leftshift',
        // shift
        // leftshift
    // When you press 'enter'
        // enter
        // enter

// window.addEventListener('keydown', function (e) {
// Here window represents the entire web page unlike above which represents the button or text box 
    // So whatever key you press when the webpage is active, you will see the below customised response in the console
//     switch (e.code) {
//         case 'ArrowUp':
//             console.log("UP!");
//             break;
//         case 'ArrowDown':
//             console.log("DOWN!");
//             break;
//         case 'ArrowLeft':
//             console.log("LEFT!");
//             break;
//         case 'ArrowRight':
//             console.log("RIGHT!");
//             break
//         default:
//             console.log("IGNORED!")
//     }
// })
// Interfering with other code. So commenting out

console.log("----------------------------------------------------------------------------------------------------------------------------------------");

console.log("Prevent default for form events");
// Prevent default for form events
// When you submit a form, the data will be sent to the location under the action attribute. User by default will be redirected to that page. 
    // We can prevent this with the help of prevent default property.
    // Mind you, it is not just for the form. It is applicable for many things that has a default action (But widely used in forms). 
// Lets look at the example

const tweetForm = document.querySelector('#tweetForm'); // form
console.log('###########') 
console.log(tweetForm)
const tweetsContainer = document.querySelector('#tweets'); // ul
tweetForm.addEventListener('submit', function (e) {

    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
        // We want the data that the user enters and customise it and then display it in our web page.
        // To get the data, we have to first select them like above. You may wonder what is 0 and 1 here. 
        // Form is an element which has many child. These child are indexed like an array. So 0 and 1 means the we are accessing the first child, second child, etc.
        // In our code, it is from these elements we need data from. So we are selecting these two using the above method. 
        // Can you see the issue here? Eventhough it does the job, it is difficult without knowing their index position. We can't keep refering to console. This is where the following method come into picture.  
    const usernameInput = tweetForm.elements.username; // 'elements' is a keyword here
    const tweetInput = tweetForm.elements.tweet; // 'username' and 'tweet' are name attributes
    console.log(tweetForm.elements)
    // When you console.log(tweetForm), you will see child of form elements. This is followed many other objectEvents. One such objectEvent is called as 'elements'. Dont get confused by the name. Under 'elements' you will have a collection of other attributes among which we have a 'name attribute'. We have to look for 'name attribute' that corresponds to the input element from which we need to get the data.
    addTweet(usernameInput.value, tweetInput.value)
    // Now this step combines two things
        // One is quite obvious where we are just passing the arguments to the below function
        // Second is we have already selected the element whose value needs to be extracted. So use the 'value' property to do that. 
    usernameInput.value = '';
    tweetInput.value = '';
    // We are emptying the input each time after the function addtweet is executed 
});

const addTweet = (username, tweet) => {
// Lets say the values that are passed are Bharath and Hey
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
// we have created <b></b> and <li></li>
    bTag.append(username)
    // You know that append will immediately add after the opening tag of an element
    // <b>Bharath</b>
    newTweet.append(bTag);
    // Now the entire bTag will appended to list
    // <li><b>Bharath</b></li>
    newTweet.append(` - ${tweet}`)
    // Now the - followed by tweet will appended to li
    // <li><b>Bharath</b> - Hey</li>
    tweetsContainer.append(newTweet);
    // tweets container is the ul. So the above the content will be appended to <ul></ul>
    // <ul><li><b>Bharath</b>- Hey</li></ul>
}

// Clarification - Lets see why can't we do as follows with respect to using the value 'method'
    // const usernameInput = tweetForm.elements.username.value;
    // const tweetInput = tweetForm.elements.tweet.value;
    // addTweet(usernameInput, tweetInput)
    // usernameInput = '';
    // tweetInput = '';
// This will not work with respect to clearing the values after the submitting. Why?
    // Now, usernameInput and tweetInput has a value being stored (The value that the user will enter).
    // When you clear a value, you need to specify which elements value, you are clearing. Since elements details are not captured by us in the above step, this process will fail. 
        // usernameInput and tweetInput ARE NOT REFERRING TO 'INPUT' ELEMENT. They are just variables holding a value. The value has been accessed from name attribute of the input but for a variable that holds a value, doesnt knoW any of these things.  
        // When you set usernameInput and tweetInput to empty strings, it only affects these variables, not the input fields on the webpage. They are not associated with the input elements. They are just values extracted from the input elements using the .value property.
("----------------------------------------------------------------------------------------------------------------------------------------");

console.log("'Input' and 'Change' Events");
// 'Input' and 'Change' Events

const input2 = document.querySelector('input[name="name"]');
const h1 = document.querySelector('#iace');

input2.addEventListener('change', function (e) {
    console.log("Change has Occured")
})
// Change event triggers when there's a change detected in an input element's value and the element loses focus. This means the 'change' event doesn't trigger when you initially type something into an empty input field; it triggers when you make a change to the existing value and then move out of the input field (by pressing the Tab key or clicking elsewhere).
// For an example, if you have typed "Bharath" for the first time and clicked outside text area element or moved to the next element (Just imagine a form) and noticed that you mispelled your name and cameback to change that, 'change' event will log that
// But change event with respect to text input field is different in modern browsers. Some browsers optimize the user experience by triggering the change event more promptly, especially for text input fields. This means that when you type into the field and stop typing, the change event may be fired immediately, even before you move the focus away.

input2.addEventListener('input', function (e) {
    if (input2.value !== ''){
        h1.innerText = `Welcome ${input2.value}`;
    }else{
        h1.innerText = 'Enter Your Username';
    }  
})
// Input event just displays whatever that you are typing in real-time.
// Here we are storing that in h1, so h1 will be changing in real-time as we modify the text in input element.

console.log("----------------------------------------------------------------------------------------------------------------------------------------");
console.log("Event Propogation");
console.log("----------------------------------------------------------------------------------------------------------------------------------------");

// Event Propogation has two phase - Event bubbling and event capturing
// They determine the order in which event handlers are triggered when an event occurs on an element that is nested within other elements.
// When an event is triggered, it goes through three phases.
    // 1. Capturing Phase: The event moves from the root to the target element.
    // 2. Target Phase: The event reaches the target element.
    // 3. Bubbling Phase: The event bubbles up from the target element back to the root.
// VERY IMPORTANT NOTE: Event handlers in the capturing phase are triggered before those in the bubbling phase.
// By default, event handlers are invoked during the bubbling phase. However, you can specify that an event handler should be invoked during the capturing phase by passing true as the third argument to addEventListener. 
    // The third is known as useCapture which accepts a boolean value

console.log("----------------------------------------------------------------------------------------------------------------------------------------");
console.log("1. Event Bubbling");
console.log("----------------------------------------------------------------------------------------------------------------------------------------");

// Event Bubbling:
// Event bubbling is the process where an event starts from the target element (the element that was actually clicked or interacted with) and then bubbles up through the ancestors of that element (parent, grandparent, etc.) in the DOM tree, triggering event handlers along the way.
// When you look at the HTML, you sill see that button (child) in nested under paragraph (parent) which is nested under section (grand-parent).
// All three has onclick attribute. 
    // A click event on the button will trigger the event on the button first (child), then on the div (parent), and finally on the section (grand parent), in that order. That is bubbling happens from inside to outside.
    // To avoid propogation of events, you could use "e.stopPropagation()." If e.stopPropagation() is used on the button , then it will be contained to the button alone and will not propagate to paragraph and section elements. 
// You cant use them for inline elements

// Example 1:
const clicks1 = document.querySelector('#click1');
const clicks2 = document.querySelector('#click2');
const clicks3 = document.querySelector('#click3');

clicks1.addEventListener('click', function(e){
    alert('button clicked');
    e.stopPropagation();
    // without e.stopPropagation(); when you click the button, you will see 3 alerts, But e.stopPropagation stops bubbling the event and you will just see one alert.
})
clicks2.addEventListener('click', function(e){
    alert('paragraph clicked')
    e.stopPropagation();
    // without e.stopPropagation(); when you click the paragraph, you will see 2 alerts, But e.stopPropagation stops bublling event and contains within #click2.
})
clicks3.addEventListener('click', function(e){
    alert('section clicked')
})

// Example 2:
// Here the code is in such a way where a button is inside of div element. 
    // onclick on the div has been set to hide with the help of 'display: none' in css
    // So when you click the button (Which has been customised to change the bg color everytime it is clicked), which is inside the div everything gets disappeared after the color change (but you cant actually see the color being changed as it happens quickly).
    // To stop this event from bubbling, we are use e.stopPropagation(); under button element. Now when you click the button the color will change but the button will not disappear. So only clicking on div will actually make them hide.  
const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function (e) {
    container.style.backgroundColor = makeRandColor2();
    e.stopPropagation();
})
container.addEventListener('click', function (e) {
    container.classList.toggle('hide');
})

const makeRandColor2 = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

console.log("----------------------------------------------------------------------------------------------------------------------------------------");
console.log("2. Event Capturing/Trickling");
console.log("----------------------------------------------------------------------------------------------------------------------------------------");

// 2. Event Capturing/Trickling:
// It is the opposite of event bubbling. It describes the process where an event starts from the root of the DOM and propagates down through the ancestors to the target element.

console.log("----------------------------------------------------------------------------------------------------------------------------------------");

console.log("Event delegation");
// Event delegation
// Event delegation is a pattern in JS where you take advantage of event propagation (typically event bubbling) to manage events more efficiently. Instead of attaching event listeners to every individual element, you attach a single event listener to a common ancestor (or parent) of those elements. This single event listener can then handle events for all of the target elements due to event bubbling.
// Inside the event listener, use the event.target property to determine which specific element triggered the event. This allows you to handle the event accordingly.
// Advantages: Memory efficient due to lesser number of event handlers required.
// Disadvantage: Not all events like blur, scroll bubble up.

// Example: 
// To understand delegation, you can look at the below explanation of to-do app. I am stressing on this because it is one of the most important topics but looks like teachers are rushing through. 
    // This to-do app has a list of tasks (represented as <li> elements) that users can add and remove.
    // Each task has a delete button
    // Clicking on a task marks it as completed (toggles a "completed" class).
// Here, you can attach a single event listener to the common ancestor.
// When a user clicks on any part of a task, including the delete button or the task text, the event bubbles up to the event listener on the <ul> (onclick property is used)
// Then, event's target property can be used to determine which specific element was clicked (e.g., the task text, the delete button, or any other part of the task).
    // Based on that, we can perform actions like toggling (doing/undoing the task), remove, etc.

tweetsContainer.addEventListener('click', function (e) {
    if (e.target.nodeName === 'LI'){
        console.log(e)
        // In this example, we are checking whether the target is a list (which is listed under nodeName under target property) 
        // Event delegation primarily uses the event.target property and, in many cases, the nodeName or tagName property of the target element to determine which specific element triggered the event. 
        // Now, since we use the 'click' event here, when we click on the list, it removes that
        e.target.remove();
    } 
})