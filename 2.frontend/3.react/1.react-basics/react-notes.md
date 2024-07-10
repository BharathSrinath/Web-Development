# Inroduction
    # React helps us to build components.
    # Components combine HTML/CSS and logic into a single reusable function
    # A component is nothing but a function that returns JSX
    # It is an open-source JavaScript library developed by Facebook for building user interfaces, especially for single-page applications.
    # React builds UIs using components, which are reusable and independent pieces of code that describe a part of the UI.

# Components:
    # Function Components: These are JavaScript functions that return React elements.
    # Class Components: These are ES6 classes that extend React.Component and include a render method that returns React elements.
    # Reusability: Components can be reused across different parts of an application or even in different projects.

# JSX
    # JSX/JavaScript XML, is a syntax extension for JS
    # It allows you to write HTML-like code in your JS files, making it easier to describe what the UI should look like. 
    # JSX code is not standalone JS; it needs to be transformed into regular JS before it can be understood by browsers.(Which is done by tools like 'babel' behind the scenes of which you dont need to worry about)
    # Technically, JSX allows you to define React components using a syntax that looks similar to HTML tags.
    # It supports standard HTML attributes as well as custom attributes that are passed as 'props' to React components.
    # It allows you to use JS logic, including conditional statements and loops, to conditionally render elements or repeat them.
    # Rules to follow/Things to know
        # All prop names should follow camelCase
        # There are some differences, such as using 'className' instead of 'class' and 'htmlFor' instead of 'for' due to JS reserved words.
        # You must explicitly close self-closing elements like <br/>, <input/>, <img/>, etc.
        # You can return only a single element (It can have multiple child though)
            # So, sometimes you may be in a position to include unnecessary div/section elements to enclose the child. When you think they are not required you can enlcose the elements in <>...</>
        # JSX can display numbers and strings. The values true, false, null, and undefined are not displayed. They are inherent. When you console.log them, you can see their values.
        # In HTML, inline styles look like this: "<div style="height: 100px; width: 100px; background-color: lightblue;"></div>." With JSX, however, we provide styles in an object. If the style name has a dash in it, we remove the dash and capitalize the next letter.
            <div style={{
                height: '100px',
                width: '100px',
                backgroundColor: 'lightblue',
            }}
            />

# Usage of curly braces in .jsx files:
    1. To embed JS expressions or variables
        const myVariable = 'Hello, world!';
        return <div>{myVariable}</div>;
    2. To define JS expressions
        const sum = (a, b) => a + b;
        return <div>{sum(3, 4)}</div>;
    3. To include dynamic content or expressions within JSX elements

# Import and Export
    # import componentName from "./filepath"
    # export componentName from "./filepath"
        # Here 'import', 'export' and 'from' are keywords 
        # componentName is nothing but a function name
        # If you want to import/export multiple functions
            # import {componentName1, componentName2} from "./filepath"
            # export {componentName1, componentName2} from "./filepath"

# To render a component in JS: 
    # <functionName/> - Yes. It looks like an HTML element
    # At the end of the day, it is a function. So the result of the function will be displayed.

# Conventions:
    # Make the component file name and the function name to be same and first letter should be capitalized
    # Separate CSS for each component or inline styling using frameworks like bootstrap/tailwind.

# Setting up react project: Under node, type the command based on the type of tool. 
    # CreateReactAPP: Soley for react framework 
        # npx create-react-app fileName
    # Vite: Multi-purpose like angular, vue, etc.
        # 1. npm create vite@latest
        # 2. cd projectName
        # 3. npm install
        # 4. npm install necessary packages
            # axios
            # json
            # json-server
            # bootstrap/bulma/tailwind or any css framework
            # react-redux 
            # reduxjs/toolkit
            # react-icons
        # 5. npm run dev
    # These tools provide a starting point for the React projects by generating initial project files and configurations. These starting files are designed to help you set up a development environment quickly, allowing you to focus on writing code rather than spending time on configuring build tools and project structures.
    # Vite has .jsx file extension by default. Specifying jsx is a good practice when the file contains jsx lines of code. If the file contains only js code, use the extension .js for conventional purposes.

# Props
    # It is short form for properties
    # It is a mechanism for passing data from one component to another. 
    # Props allow you to make your React components dynamic and reusable by passing values or functions as arguments. 
    # It might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, functions, and even JSX! 
    # How the argument is passed? 
        # <functionName argName={value}/> in the App.js file 
            # multiple argName can be provided with space in between just like HTML attributes
            # If the value is a string, it should be enclosed in "". For everything else like numbers, arrays, objects they should be enclosed in {}.
        # function functionName(dummyargName){
            return {dummyargName.argName}
            }
        # Props are passed always form parent to child and not the other way around. React follows a priciple called "props down, events up".
            # There are situations where child components can communicate with their parent components. This is usually achieved by passing functions as props from the parent to the child, and the child component can then call these functions to communicate with the parent (callback functions). So props are always to parent to child. But when they are passed as functions, they can be called by the child to communicate with the parent.
    # Adding default values in arguments
        # destrcuturing will help you achieve that. 
        # argument name in App.js and the component.js should be same when you are destructuring which is not the case when you simply pass an argument without the consideration for default values
    # Prop-types:
        # They are no longer required. Especially after the advent of Typescript (which is like a combination of C and JS where static typing (that is assigning the datatype at the compile time) and many other features eliminates prop-types)
        # Also, tools like vite by defualt will add prop-types. Hence as a user we need not do this.
        # You remember how in 'C langauge' we mention the data-types while passing argument like int, char, etc. Similarly we were specifying the data-types for the props.
        # When will you require this?
            # When you set-up a react project on your own without tools like vite or not using TypeScript.
        # Syntax:
            MyComponent.propTypes = {
                optionalArray: PropTypes.array,
                optionalBigInt: PropTypes.bigint,
                optionalBool: PropTypes.bool,
                optionalFunc: PropTypes.func,
                optionalNumber: PropTypes.number,
                optionalObject: PropTypes.object,
                optionalString: PropTypes.string,
            }
        # Example:
            import propTypes from './prop-types'
            ...
            ...
            ...
            ShoppingListItem.propTypes = {
                item: Proptypes.String,
                quantity: Proptypes.number,
                completed: Proptypes.bool
            };
    # Key-props:
        # The "key" prop in React is a special attribute that you can include when rendering a list of elements. It helps React identify which items have changed, been added, or been removed.
        # Anytime we build a list of elements (map over an array, use for-loop, etc.), we should assign a unique "key" prop to each element. This helps React to efficiently update the virtual DOM by recognizing which items have changed.
        # The key should be assigned to the top most component in return. For an example,
            <div>
                <Component />
            </div>
            Here, the id should be assigned to div element.
        # Key must be a string or a number (not an object or an array) and they should be unique within their list. But when you are combining the list together (like combining two arrays), their id's cannot be same.
        # Usually when working with react, we use data from a database. In that case most of the data will have unique id's. So you can always assign those id's to the keys. 
 
# State
    # React has two systems. Event and State. Event detects the action performed by the user like clicking, hovering, etc. State is used to update the content on the screen based on the event. 
        # Example: Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” puts a product in the shopping cart. 
        # Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.
    # State is a JavaScript object that represents the dynamic data of a component. It is used to manage and track changes to the component over time. State allows a component to update and re-render based on user interactions, asynchronous data fetching, or any other event that triggers a change in the component's data.
    # Initially states were assoicated with class components only. Now with the  advent of 'hooks' (special functions that let your components use React features) they can be used with functional components as well and the entire syntax is much more simplified.
        # Just remember that you can only call a Hook immediately inside a React component (not inside loops or conditions)
    # Example of 'state' in class components (no hooks): 
        import React, { Component } from 'react';

        class MyClassComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
            myState: 'initialValue'
            };
        }

        render() {
            return (
            <div>
                <p>{this.state.myState}</p>
            </div>
            );
        }
        }

        export default MyClassComponent;
    # Example for 'state' in functional components (with hooks):
        import { useState } from 'react';

        function MyFunctionalComponent() {
        const [myState, setMyState] = useState('initialValue');
        <!-- useState is one among many states that the react posses -->
        <!-- one component can have many useState -->
        <!-- useState will be called by passing a single argument (which represents the starting value) -->
        <!-- useState returns an array with two values  -->
            <!-- piece of state: It is the variable that holds initial value -->
            <!-- setter function: This function will be used to update the value of the state -->
        <!-- When the useState function is called, react assigns the initial value to the 'piece of state'. When the event occurs (say a button is clicked), then the user defined function will be called under which we will place the setter function. Setter function will contain the updated values. When the setter function is executed, entire component will be re-rendered (along with its children if it had any) with the updated value -->
        <!-- In this syntax we are actually using array destructuring to capture the values returned by 'useState' -->
            <!-- In Array destructuring, the square brackets on the left side doesn't mean that we are creating an array. It actually says to the JS that whatever that is present on the right side is an array. -->
            <!-- Since use state returns an arrays with elements, the first element will be assigned to myState and the second element will be assigned to setMyState  -->

        return (
            <div>
            <p>{myState}</p>
            </div>
        );
        }

        export default MyFunctionalComponent;
    # Objects and Arrays in a State:
        1. Do not update arrays or objects directly.
            Example: 
                const [colors, setColors] = useState(['red', 'green', 'blue']);
                const changeColor = () => {
                    // Bad!  This directly changes the 'colors' state!
                    colors[0] = 'orange';
                    setColors(colors);
                };
        2. You can add elements to the start/end of an array by using the spread syntax.
            Example:
                const [colors, setColors] = useState(['red', 'green']);
                const addColor = (colorToAdd) => {
                    const updatedColors = [colorToAdd, ...colors]; (to add at the beginning of an array)
                    const updatedColors = [...colors, colorToAdd]; (to add at the end of an array)
                    setColors(updatedColors);
                };
        3. Elements can be added at any index by using the slice method available on all arrays. Actually slice method can be used to add elements at the start or end of an array as well.
            Example:
                const [colors, setColors] = useState(['red', 'green']);
                const addColorAtIndex = (colorToAdd, index) => {
                    const updatedColors = [
                        ...colors.slice(0, index),
                        colorToAdd,
                        ...colors.slice(index),
                    ];
                    setColors(updatedColors);
                };
        4. Elements can be removed from an array by using the filter method.
            4a. Example for removing elements by index:
                    const [colors, setColors] = useState(['red', 'green', 'blue']);
                    const removeColorAtIndex = (indexToRemove) => {
                        const updatedColors = colors.filter((color, index) => {
                            return index !== indexToRemove;
                        });
                        setColors(updatedColors);
                    };
            4b. Example for removing elements by value:
                    const [colors, setColors] = useState(['red', 'green', 'blue']);
                    const removeValue = (colorToRemove) => {
                        const updatedColors = colors.filter((color) => {
                            return color !== colorToRemove;
                        });
                        setColors(updatedColors);
                    };
        5. Objects in an array can be modified by using the map function.
            Example:
                const [books, setBooks] = useState([
                    { id: 1, title: 'Sense and Sensibility' },
                    { id: 2, title: 'Oliver Twist' },
                    ]);
                const changeTitleById = (id, newTitle) => {
                    const updatedBooks = books.map((book) => {
                        if (book.id === id) {
                            return { ...book, title: newTitle };
                            <!-- This line of code could be simply achieved by the following right? -->
                                <!-- book.title = newTitle -->
                            <!-- We are not using it. As you know we don't try to directly mutate the current state. Hence we always work with the copy of an array -->
                            <!-- Whenever we initialize our state, react will have a refernce to the current version of the state. Whenever we update our state, react will have a refernce to the new version of the state. It will hold on to both these references. -->
                                <!-- When both these references are looking at the same array in a memory, react will decicde not to re-render -->
                                <!-- Keep in mind that whatever that is inside an array really doesn't matter. React keeps reference of the array only and not whats inside -->
                                    <!-- If the above point is true, then with this example, we have created a copy of an array with map(). So can't we just update the object that is inside the copied array using method operator? -->
                                        <!-- Yes. It will work. But it will introduce bugs in later stages. When we are working with a copy of an array generated by map(), modifying the objects within that array technically doesn't mutate the original array. Each object within the copied array is indeed a new object, so we might think it's safe to directly modify its properties. However, the principle of immutability in React extends beyond just the array itself. It also applies to the objects contained within the array. Even though they are new objects, modifying their properties directly still violates the principle of immutability. -->
                        }
                        return book;
                    });
                    setBooks(updatedBooks);
                }; 
        6. Properties in an object can be changed or added by using the spread syntax (the ...).
            Example:
                const [fruit, setFruit] = useState({
                    color: 'red',
                    name: 'apple',
                });
                const changeColor = (newColor) => {
                    const updatedFruit = {
                        ...fruit,
                        color: newColor,
                    };
                    setFruit(updatedFruit);
                };
        7. Properties in an object can be removed by using destructuring.
            Example:
                const [fruit, setFruit] = useState({
                    color: 'red',
                    name: 'apple',
                });
                const removeColor = () => {
                    // `rest` is an object with all the properties of fruit except `color`.
                    <!-- They are generally used in function parameters to collect the rest of the arguments rather than mentioning all of them individually -->
                    <!-- They are used while destructuring as below -->
                    const { color, ...rest } = fruit;
                    setFruit(rest);
                };
# json-server
    # Without server we wont be able to store anything. For an example, in the BookCreate project reloading the page after adding the books will undo the added books. Because added books are not stored anywhere. 
    # Creating a local server:
        1. Create a db.json file
        2. Add the following under "scripts" in package.json file
            "server": "json-server -p 3001 --watch db.json"
                # When we are working with projects that has a server, we will execute 'npm run dev' in one terminal and open another terminal and execute 'npm run server'
                # Here the second command will execute the above line in package.json file.
                    # json-server: This is the command to start the JSON server. JSON Server is a tool that allows you to quickly create a RESTful API based on a JSON file.
                    # -p 3001: This option sets the port number for the server. In this case, the server will run on port 3001. You can change this number if needed.
                        # a port is a way for a computer to organize network-bound traffic. It allows multiple services on the same device to use network resources without interference and enables communication between devices on a network.
                    # --watch db.json: This option tells json-server to watch the db.json file for any changes. The db.json file typically contains the data that the JSON server serves. If you make changes to this file, the server will automatically pick up those changes without requiring a restart. 