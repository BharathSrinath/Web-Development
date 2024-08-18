# Inroduction
    # React helps us to build components. Everything is a component in react.
    # Components combine HTML/CSS and logic into a single reusable function
    # A component is nothing but a function that returns JSX
    # It is an open-source JavaScript library developed by Facebook for building user interfaces, especially for single-page applications.
    # React builds UIs using components, which are reusable and independent pieces of code that describe a part of the UI.
    # Why is React known as React?
        React is named for its "reactive" nature in building user interfaces. The library is designed to react to changes in data and automatically update the UI. It implements a virtual DOM, which allows it to efficiently re-render components when the underlying data changes, ensuring that the user interface is always in sync with the application state.

# Components:
    # Function Components (New way): These are just a normal JS functions that return React element/jsx. 
    # Class Components (Old way): These are ES6 classes that extend React.Component and include a render method that returns React elements.
        # Components can be reused across different parts of an application or even in different projects.

# JSX
    # JSX/JavaScript XML, is a syntax extension for JS. It is also developed by facebook.
    # It allows you to write HTML-like code in your JS files, making it easier to describe what the UI should look like. 
        # Read it again. JSX is not an HTML. It is an HTML-like code
    # JSX code is not standalone JS; it needs to be transformed into regular JS before it can be understood by browsers. So when you copy paste the jsx in browsers, it will not work. The conversion is done by 'babel' which is a JS Compiler.
    # Technically, JSX allows you to define React components using a syntax that looks similar to HTML tags.
    # It supports standard HTML attributes as well as custom attributes that are passed as 'props' to React components.
    # It allows you to use JS logic, including conditional statements and loops, to conditionally render elements or repeat them.
    # Rules to follow/Conventions to know:
        # All prop names should follow camelCase
        # There are some differences, such as using 'className' instead of 'class' and 'htmlFor' instead of 'for' due to JS reserved words.
        # You must explicitly close self-closing elements like <br/>, <input/>, <img/>, etc.
        # You can return only a single element (It can have multiple child though)
            # So, sometimes you may be in a position to include unnecessary div/section elements to enclose the child. When you think they are not required you can enlcose the elements in <React.Fragment>...</React.Fragment> or the short-cut is <>....</>
            # This will not create any new element but helps to provide a dummy parent to the elements 
            # We can evn nest React fragments inside another React fragment. Technically they are essentially invisible wrappers that allow you to group multiple elements without adding extra nodes to the DOM.
                # Example:  <>
                                <h1>Main Title</h1>
                                <>
                                    <h2>Sub Title 1</h2>
                                    <p>This is the first paragraph under Sub Title 1.</p>
                                </>
                                <>
                                    <h2>Sub Title 2</h2>
                                    <p>This is the first paragraph under Sub Title 2.</p>
                                    <>
                                        <p>This is a nested paragraph inside Sub Title 2.</p>
                                        <span>This is span element</span>
                                    </>
                                </>
                            </>
        # If the JSX has only one line, then end it with a semicolon, if it has multiple lines then wrap it in paranthesis and also put semicolon at the end.
        # JSX can display numbers and strings. The values true, false, null, and undefined are not displayed. They are inherent. When you console.log them, you can see their values.
        # In HTML, inline styles look like this: "<div style="height: 100px; width: 100px; background-color: lightblue;"></div>." With JSX, however, we provide styles as an object. If the style name has a dash in it, we remove the dash and capitalize the next letter.
            <div style={{
                height: '100px',
                width: '100px',
                backgroundColor: 'lightblue',
            }}
            />

# Usage of curly braces in .jsx files:
    1. To embed JS expressions or variables. JS statements cannot be embedded. Like the complete for-loop or if or if-else or any statements for that matter. Expressions mean that they can resolve to single value. Only they can be used. 
        const myVariable = 'Hello, world!';
        return <div>{myVariable}</div>;
    2. To define JS expressions
        const sum = (a, b) => a + b;
        return <div>{sum(3, 4)}</div>;
    3. To include dynamic content or expressions within JSX elements

# react elements vs jsx:
    # JSX is syntactic sugar for React.createElement(). Under the hood, every JSX expression you write is converted to a React.createElement() call that produces a React element.
    # Conversion is done by babel.
    # To render a react element we can simply pass the element name to the render method.
        # Example:  root.render(elementName);
    # To render a jsx (which is nothing but a function) we have two ways. Either make it like an html tag(preferred) or just call it like a normal function. 
        #  Example: root.render(<elementName/>); or root.render(elementName()); 

# Import and Export
    # export: There are two ways - default export and named export
        # default: 'export default functionName'
            It is written at the end after the function definition
            This is done when you have only one function to be exported and hence that function becomes your default export.  
        # named: 'export functionName(){......}'
            It is written as a part of the function definition where 'export' is prefixed before tha term 'function'.
            This can be used for one/multiple functions but primarily used when you have multiple functions
    # import: Based on the way the component has been exported, we have to import it.
        # import componentName1 from "./filepath" - default export
            # Name you assign can be anything regardless of the original name in the module.
            # Only one export is possible when marked as default
        # import {componentName1, componentName2} from "./filepath" - named export
            # Component names should be same as the function name in the module.
        # import componentName1, { componentName2, componentName3 } from "./filepath"; - To import both named exports and default export
        # import * as componentName from "./filepath"
            It imports all the exported members from a module into a single object, allowing you to access them as properties of that object.


# To render a component in JS: 
    # <functionName/> - Yes. It looks like an HTML element
    # At the end of the day, it is a function. So the result of the function will be displayed.

# Conventions:
    # Make the component file name and the function name to be same and first letter should be capitalized
    # Separate CSS for each component or inline styling using frameworks like bootstrap/tailwind.

# Setting up react project:
    # To set a react project we need many build tools like 'bundler', 'transpiler/compiler', 'linter', 'tester', etc.
        # Bundler takes the various files and assets in your project (JavaScript, CSS, images, etc.) and bundles them into a single file or a few files, optimized for production.  
            # The goal is to reduce the number of requests the browser has to make to load a page and to ensure that the assets are loaded in the most efficient way possible. 
            # As the web applications became more complex, with many interdependent files and modules, the load time increases drastically as each files require a separate HTTP requests. Now a bundler reduces the number of files which in-turn reduces the number of requests. 
            # Tree Shaking: Eliminates dead code (unused exports) from the final bundle to reduce the size of the bundle by only including the parts of code that are actually used in the application.
            # Minification: Reduces the size of your code by removing unnecessary characters (like whitespace, comments, and shortening variable names), without affecting the code's functionality. Even the console statements can be removed by this process. But an additional plugin is needed which is called 'babel-plugin-transform-remove-console'.
            # Hot Module Replacement: HMR relies on file watchers(mechanism to monitor changes to files and directories in the filesystem) to detect changes to modules. When a developer updates a module (e.g., a JavaScript file), the file watcher detects the modification and notifies the HMR system. Once a change is detected, HMR uses the file watcher’s information to fetch the updated module, apply the changes to the running application, and update only the affected parts of the application.
            # Transitive Dependencies: They are dependencies that your project indirectly depends on through other dependencies. In other words, if your project depends on a library, and that library, in turn, depends on another library, then that second library is a transitive dependency of your project.
            # Media Optimization: Bundlers can optimize media files, such as compressing images, but this usually requires additional configuration or plugins.
            # Caching During Development: Bundlers facilitate caching to improve performance during development, ensuring that only changed files are recompiled.
                # Example: Webpack, Parcel, Vite, etc. 
        # Transpiler convert modern JavaScript (ES6+) and JSX (JavaScript XML) code into older versions of JavaScript that can run in all browsers, especially those that don’t support the latest features.
            # Example: Babel
        # Linter: Linting tools analyze your code for potential errors, bad practices, and adherence to coding standards. They help maintain consistent code quality and style.
            # Example ESLint
        # Tester: They esnures that your code behaves as expected. They help catch bugs early by allowing you to write and run various types of tests.
            # Example: Jest, React Testing Library, etc.
    # Now all these build tools are packed together and it is known as 'build toolchain'.
        # Example: Create React App, Vite, Gatsby, Parcel, etc.
    ----------------------------------------------------------------------------------------
    | Setup Tool | Bundler | Transpiler  | Linting | Formatting | Testing  | Other Tools   |
    |------------|---------|-------------|---------|------------|----------|---------------|
    | CRA        | Webpack | Babel       | ESLint  | Prettier   |Jest, RTL | React Scripts,| 
    |            |         |             |         |            |          | PostCSS       |
    | Vite       | Vite    | ESBuild     | ESLint  | Prettier   |Vitest,RTL| PostCSS,      | 
    |            |         |             |         |            |          | Tailwind CSS  |  
    | Gatsby     | Webpack | Babel       | ESLint  | Prettier   |Jest, RTL | GraphQL,      |
    |            |         |             |         |            |          | Gatsby CLI    |
    | Parcel     | Parcel  | Babel       | ESLint  | Prettier   |Jest, RTL | PostCSS,      |
    |            |         |             |         |            |          | Tailwind CSS  |
    ----------------------------------------------------------------------------------------
                * RTL - React Testing Library
    # To install this build toolchain we need something called as package manager. 
    # Node provides npm and yarn package managers. We will be using npm.
        # Eventhough npm is widely known as node package manager, there is no official full form for npm.  
    # Primary difference between build tool chains:
        # Both Vite and Create React App are tools used to initialize a new project with a predefined structure and configuration. They set up everything you need to start developing with React (or other frameworks) right away.
        # Parcel on the other hand is integrated into an existing project. It doesnt give you any boilerplate code like app.js, index.html, etc.
    # Create React App: Soley for react framework 
        # Either a) or b)
            a) npm install -g create-react-app
                create-react-app projectName
                cd projectName
                npm i react react-dom
                npm start
            b) npx create-react-app projectName
                cd projectName
                npm i react react-dom
                npm start
        Here a) relies on a globally installed version, which might become outdated unless manually updated whereas b) always uses the latest version and no need for global installation. This is the modern and recommended approach.
    # Vite: Multi-purpose like angular, vue, etc.
        # npm create vite@latest projectName
          cd projectName
          npm i react react-dom
          npm run dev
    # Parcel:  Multi-purpose like Svelte, vue, etc.
        # mkdir projectName
          cd projectName
          npm init (or) npm init -y (specifying -y will skip lot of steps and gives a default values in package.json)
          npm install --save-dev parcel or npm install -D parcel
          Create an index.html file, index.js file and App.js file in the src directory 
            # In index.html file we will not include any CDN links. Rather we will install react and react-dom as packages and use import statements in our js files
            # Also you have to understand that a script file is not capable of importing anything and the script file itself cannot be exported.
            # To achieve this the script files should be treated as modules. So we have to specify a value of 'module' to the attribute named 'type'
                # Example:  <script type="module" src="index.js"></script>
          Add scripts to package.json to use Parcel for development and building, like
            "scripts": {
                "start": "parcel src/index.html",
                "build": "parcel build src/index.html",
                "test": "jest"
            },  
            "browserslist":[
                "last 2 versions"
            ]
          npm i react react-dom
          npm i -D babel-plugin-transform-remove-console
            But installing is not enough. We have to configure this.
            Create a file called .bablerc and copy paste the code from the documentation page
          Without scripts: 'npx parcel index.html' | With Scripts: 'npm run start' or simply the shortcut is 'npm start'

# scripts and browserslist:
    # scripts basically provides a short cut to execute the code. Rather than writing npx parcel index.html, we can simply write "npx start".
    # browserslist is used to specify which browsers does our app should support. The github link (https://github.com/browserslist/browserslist) provides the possible options that you can place inside the browserslist. Also https://browserslist.dev provides the information regarding how much percentage of browsers your choice is going to affect. The value that we have mentioned doesn't mean that it will work only for last 2 versions. Rather it means it will definitely work for last 2 versions and with respect to other versions it will mostly work but some fearures may not work. 

# The dist folder in Parcel:
    Short for "distribution," it is a directory typically used to store the compiled or bundled output of the project. This folder contains the final, optimized, and production-ready version of your application or library.

# What is .parcel-cache?
    # The primary purpose of the .parcel-cache folder is to cache intermediate build results. When you make changes to your project and rebuild it, Parcel doesn't need to reprocess files that haven't changed. Instead, it can retrieve the processed files from the cache, which significantly speeds up subsequent builds.
    # Parcel uses the cache to perform incremental builds, meaning it only rebuilds the parts of your project that have changed. 
    # The cache persists between builds, so even if you stop and restart your development server or run a build after some time, Parcel can still use the cache to speed up the process.

# package.json vs package-lock.json
    # package.json
        # Contains metadata about the project, such as name, version, description, and author.
        # It can be created by 'npm init' command and providing the above details.
        # Some build tools chain automatically create the package.json file along with other build tools. 
            # Example: Vite
        # When a package is installed, those details are automatically incorporated into package.json
        # Important Note: Versions can have two types symbols infront of them (carret^ vs tilde~). They help manage how packages are updated while ensuring compatibility. 
            # caret: Updates the package to the latest minor or patch version while maintaining compatibility with the major version.
                # Example: ^1.2.3: Allows updates to any version that is >=1.2.3 and <2.0.0. So, it will include versions like 1.2.4, 1.3.0, 1.9.9, but not 2.0.0 or higher.
                # So, use the caret symbol when you want to automatically receive updates that are backward-compatible, particularly for minor and patch updates, but want to avoid breaking changes introduced in new major versions.
            # tilde: Updates the package to the latest patch version while maintaining the specified minor version.
                # Example: ~1.2.3: Allows updates to any version that is >=1.2.3 and <1.3.0. It will include versions like 1.2.4, 1.2.5, but not 1.3.0 or higher.
                # Use the tilde symbol when you want to restrict updates to only those that include backward-compatible patches but avoid updates that could introduce new minor features or changes.
        # x.y.z: Here x is the major update which indicates breaking changes that are not backward compatible. Hence should be manually downloaded. y is the minor update like  new features or improvements and z is the patch update that includes bug fixes. Both y and z are automatically downloaded as they are backwards compatible.
    # package-lock.json
        # They hold the version of the packages when they are installed by locking the exact versions of dependencies.
        # It ensures consistent installations, making it ideal for team environments and production deployments where exact package versions are crucial.
        # To put it simply, while package.json specifies the range, package-lock.json specifies the exact version that is currently installed.  
        # 'integrity' in package-lock.json: It contains a hash (or checksum) of the package's contents which helps to verify that the files in the package have not been tampered with. This ensures that the package installed matches the expected version and has not been altered.
    # dependencies vs devdependencies:
        # dependencies are Essential for the application’s operation in production. 
            # Example: React, ReactDOM, etc.
        # devdependencies are Necessary only for development, testing, and building. They are excluded in the production setup as they are just helper for a developer to write better code. When you want to install something as a dev dependency add -D in your command after/before the package name.
            # Example: ESLint

# Props
    # It is short form for properties and can be passed data from one component to another just like a function parameter. 
    # Props allow you to make your React components dynamic and reusable by passing values or functions as arguments. 
    # It might remind you of HTML attributes, but with props you can pass any JavaScript value through them, including objects, arrays, functions, and even JSX! 
    # How the argument is passed? 
        # <functionName argName={value}/> in the App.js file 
            # multiple argName can be provided with space in between just like HTML attributes
            # If the value is a string, it should be enclosed in "". For everything else like numbers, arrays, objects they should be enclosed in {}.
        # function functionName(dummyargName){
            return {dummyargName.argName}
            }
        # Props are passed always form parent to child and not the other way around. React follows a priciple called "unidirectional data flow" or in simple words, "props down, events up".
            # Although props flow from parent to child, child components can still communicate with their parent components. This is achieved by passing functions as props from the parent to the child. The child can then call these functions to send data or trigger actions in the parent. This mechanism allows the child to inform the parent about certain events or changes, but the data itself (props) still flows from the parent to the child.
    # Adding default values in arguments
        # destrcuturing will help you achieve that. 
        # argument name in App.js and the component.js should be same when you are destructuring which is not the case when you simply pass an argument without the consideration for default values
    # Prop-types:
        # They are no longer required as tools like vite by default will add prop-types. 
        # You remember how in 'C/Java langauge' we mention the data-types while passing argument like int, char, etc. Similarly we were specifying the data-types for the props.
        # When will you require this?
            # When you set-up a react project on your own without tools like vite and separately insatlling the build tools.
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
    # Anytime we have an element with multiple children of same type to be rendered we should assign a unique "key" prop to each element. This helps React to efficiently update the virtual DOM by recognizing which items have changed.
    # The key should be assigned to the top most component in return. For an example,
        <div>
            <Component1 />
            <Component2 />
            <Component3 />
        </div>
        Here, the id should be assigned to div element.
    # Key must be a string or a number (not an object or an array) and they should be unique within their list. But when you are combining the list together (like combining two arrays), their id's cannot be same.
    # Usually when working with react, we use data from a database. In that case most of the data will have unique id's. So you can always assign those id's to the keys. 
    # Diffing algorithm: 
        # This process is technically acheieved by a concept called "diffing algorithm".
        # It is used to efficiently update the UI by comparing the new version of the UI (often represented as a virtual DOM) with the previous version and determining the minimal set of changes needed to update the actual DOM. 
        # Directly updating the DOM is often slow and can lead to performance issues. So the diffing algorithm optimizes this process by minimizing the number of operations performed on the DOM.
        # Re-rendering vs. DOM Manipulation: 
            # Re-rendering refers to React calling the render method of a component to generate a new virtual DOM. This virtual DOM is then compared to the previous one using the diffing algorithm. 
            # DOM Manipulation refers to the actual changes React makes to the real DOM based on the diffing process. React only updates parts of the DOM that have changed.
        # Working of Diffing algorithm:
            # Virtual DOM: React maintains a lightweight copy of the actual DOM, known as the virtual DOM. Whenever the state or props of a component change, React re-renders the component, creating a new virtual DOM tree.
            # Comparison: React compares the new virtual DOM tree with the previous one to identify the differences. This process is known as "reconciliation."
            # Shallow Comparison: React assumes that if two elements are of the same type, their structure will be similar, so it performs a shallow comparison of their properties and children. If the elements are of different types, React will destroy the old node and create a new one.
            # Efficient Updates: By identifying only the parts of the virtual DOM that have changed, React can update the actual DOM with the minimal set of changes needed.
            # React Fiber Architecture: 
                # It is a reimplementation of React's diffing algorithm
                # To increase its suitability for areas like animation, layout, and gestures.
                # Headline feature: Incremental rendering - the ability to split rendering work into chunks and spread it out over multiple frames. 
                # Other features: Ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.
    # Usage of key:
        # After comaparing the new and old virtual DOM's, React uses the keys to identify which elements in the list correspond to which DOM nodes.
        # If React sees that an item with the same key is now in a different position, it doesn’t consider this as a change in the element itself, just its position.
        # Instead of removing and re-creating the DOM elements (which would be a costly operation), React simply moves the existing DOM nodes to match the new order.
        # This movement is not considered a re-render of the component, but rather a manipulation of the DOM. The actual content of the DOM nodes remains the same, so there’s no need to re-render their content.
        # If React notices that the element is the same (because the key is the same), but one or more attributes of this element have changed, React marks this element as needing to be updated. So this is by the result of shallow comparison and Selective Re-rendering will take place. That is React will now re-render the specific element (or parts of it) to reflect the change. This re-rendering is efficient because React only updates the specific DOM properties or attributes that have changed, rather than re-rendering the entire component or list.
    # Using index as the key: 
        # Even though it is technically possible, react officially discourages it. 
        # If the order of items in the list changes, React may still consider the items as unchanged because the index is used as a key. The index represents the position of the element in the array, not the element itself. When an element is inserted, deleted, or reordered, the index of each element may change, leading to a different key being associated with the same element. This can cause React to mistakenly assume that the element has not changed, resulting in incorrect updates, rendering issues, or even loss of component state.
 
# State
    # React has two systems. Event and State. Event detects the action performed by the user like clicking, hovering, etc. State is used to update the content on the screen based on the event. 
        # Example: Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” puts a product in the shopping cart. 
        # Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.
    # State is a JavaScript object that represents the dynamic data of a component. It is used to manage and track changes to the component over time. State allows a component to update and re-render based on user interactions, asynchronous data fetching, or any other event that triggers a change in the component's data.
    # Initially states were assoicated with class components only. Now with the  advent of 'hooks' (special functions that let your components use React features) they can be used with functional components as well and the entire syntax is much more simplified.
        # Just remember that you can only call a Hook immediately inside a React component (not inside loops or conditions)

# Controlled vs UnControlled Component:
    # Any form element whose state is not managed by React is called an uncontrolled component.
    # In React, every time a user does something that changes what’s on the screen, there should be a piece of state in React that manages that change.
    # Certain elements like <input>, <select>, and <textarea> automatically update their appearance based on user input. This behavior is due to their default DOM behavior when they are not controlled by React.
    # This default behavior occurs because these elements manage their own state directly in the DOM, without involving React.
    # In React, we want to avoid this because React relies on comparing the previous and current virtual DOMs to determine what needs to be updated in the actual DOM.
    # If an element's state is not managed by React, it could lead to inconsistencies between React's virtual DOM and the actual DOM, making the application harder to predict and manage.
    # The bottom line is: If a user interaction changes anything on the screen, you should control that change using React state to ensure consistency and predictability.

# Data binding:
    # Binding refers to how data in your application is connected or "bound" to the user interface (UI). 
    # It determines how changes in the application data are reflected in the UI and how user actions on the UI update the application data.
    # React follows one-way binding which means data flows in a single direction i.e., from the application state (data) to the UI.
    # In React, you typically update the UI by changing the state of a component. When the state changes, React automatically re-renders the component to reflect those changes in the UI.

# 'state' in class components (no hooks): 
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

# Hooks:
1. useState(): It is used create local variables inside a functional component. So never create them outside a functional component. Also, Never create them inside conditional statements or loops.
    import { useState } from 'react';
    function MyFunctionalComponent() {
        const [myState, setMyState] = useState('initialValue');
        <!-- useState is one among many states that the react posses -->
        <!-- one component can have many useState -->
        <!-- useState will be called by passing a single argument (which represents the starting value) -->
        <!-- useState returns an array with two values  -->
            <!-- piece of state: It is the variable that holds initial value -->
            <!-- setter function: This function will be used to update the value of the state -->
        const handleButtonClick = () => {
            setMyState('newValue');
        };
        <!-- When the useState function is called, react assigns the initial value to the 'piece of state'. When the event occurs (say a button is clicked), then the user defined function (handleButtonClick) will be called under which we will place the setter function (setMyState). Setter function will contain the updated values. When the setter function is executed, entire component will be re-rendered (along with its children if it had any) with the updated value -->
        <!-- In this syntax we are actually using array destructuring to capture the values returned by 'useState' -->
        return (
            <div>
                <p>Current state: {myState}</p>
                <button onClick={handleButtonClick}>Update State</button>
            </div>
        );
    }
    export default MyFunctionalComponent;

2. useEffect():
    # Syntax:
        useEffect(() => {
            ....... Effect logic
        return () => {
            Cleanup logic
         };
        }, [dependencies]);
    # Usage:
        # useEffect is used for handling side effects in functional components.
        # It takes two arguments: the effect function and an optional dependencies array. The function can also optionally return another function which is called cleanup logic.
        # The effect function runs after the component renders. 
        # Dependency array is used to control when the useEffect runs.
    # Working of useEffect:
        # When the second argument is an empty array (most common use case), useEffect will be executed once and after that useEffect will never come in to picture. The execution of useEffect takes place after the rendering of compponent. Because rendering of the component is what triggers the useEffect() function.
        # Dependecy array can take-in a component/variable name/names on which the useEffect depends. Default value is the name of the component in which useEffect() is defined. i.e, when the component in which useEffect is defined, when that component renders, useEffect() will be executed. 
        # When the second argument is not given, useEffect will be executed whenever the component renders. 
        # Flow: Any change in dependency component -> Renders the corresponding component -> Calls useEffect
        # While useState() returns an array with 2 elements, createEffect() returns an object with 2 components - 'Provider' and 'Consumer', UseEffect() returns no meaningful value. The purpose of useEffect is to perform side effects in functional components. The optional return value of useEffect is a cleanup function, but the function itself does not return anything directly.
        # Just know that useEffect() cannot return a number, a string. Only optional function can be returned.
        # Clean-Up Function:
            # The function returned by useEffect (if provided) is used for clean-up when the component unmounts or when certain dependencies change.
            # Cleanup function can be async or sync, but the first argument of useEffect() itself cannot be declared an async. (Just remember that)
            # Async returns a promise but useEffect() returns no meaningful value.
            # This clean-up function is optional and is used to cancel subscriptions, clear intervals, or perform other clean-up tasks to avoid memory leaks.
            # Also in general we dont give name for the cleanUp(). Whatever function that follows the 'return' will be a cleanUp().
        # How the useEffect() works with cleanUp()?
            # In first render (upon loading for the first time), useEffect() will be called. The optional cleanup function will returned (which will be held by react). It will not be executed at this point.
            # In second render (assuming that you have an element inside the array), the cleanup function will be executed (which was held by react). Now useEffect() will be executed the second time and a new cleanup function will be returned (which will be held by react). This continues for every render.
            # What you have to understand here is, when the component renders and react has any cleanup() held with it, react will execute the cleanup function first and then call the useEffect().
            # What if react has a cleanup() but there is not need for the useEffect() to be called? Then the cleanup() will not be executed by the react.
            # So you may wonder what is the use here? It can be used where under useEffect function, there are lines of code that needs to be executed and needs to removed once executed. So under cleanup() we can write lines of code that will remove the above lines of code. Again why? Consider the following example.
            # If you are adding an event Listener for a 'click' event under useEffect (and assume that we are using the version of useEffect without the second argument), every time the event is triggered, useEffect() will be called and eventListener will be triggered. When the component render for 10th time, there will be 10 eventListeners for a 'click' event. To overcome this, we will cleanup the eventHandler.
                useEffect(()=>{
                const listener = () => {
                    console.log(counter);
                };
                document.body.addEventListener('click', listener)
                const cleanUp = () =>{
                    document.body.removeEventListener('click', listener)
                };
                return cleanUp;
                }, [counter]);

# Handling Objects and Arrays in a State:
    1. Do not update arrays or objects directly.
        Example: 
            const [colors, setColors] = useState(['red', 'green', 'blue']);
            const changeColor = () => {
                Bad!  This directly changes the 'colors' state!
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
                    }
                        <!-- This line of code could be simply achieved by the following right? -->
                            <!-- book.title = newTitle -->
                        <!-- It can but it violates the reacts immutability principle as it directly mutates the current state. Hence we create a copy of the object by using the spread operator and work with that. -->
                        <!-- But you may wonder, map() creates a copy of an array. So can't we just update the object that is inside the copied array using method operator? -->
                            <!-- When you use map(), it creates a new array, but the elements (in this case, objects) within the array are still references to the original objects. If the original array contains objects, the new array created by map() will contain references to those same objects, not new copies of the objects themselves -->   
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
    7. Properties in an object can be removed by destructuring.
        Example:
            const [fruit, setFruit] = useState({
                color: 'red',
                name: 'apple',
            });
            const removeColor = () => {
                <!-- `rest` is an object with all the properties of fruit except `color`. -->
                <!-- They are generally used in function parameters to collect the rest of the arguments rather than mentioning all of them individually -->
                <!-- They are used while destructuring as below -->
                const { color, ...rest } = fruit;
                    <!--  color property from the fruit object is extracted and stored in the color variable. -->
                    <!--  The rest operator (...) collects all the other properties that are not explicitly extracted (name in this case) into a new object called rest. -->
                setFruit(rest);
                    <!-- Now when you pass the rest alone to setFruit, it will replace the old object with new object's properties which effectively removes the color property -->
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

# To get data from a site:
    # inspect element -> network -> fetch/XHR -> header (to get the api link) or select the content -> preview (to get the actual data)
    # If you want to just fetch the data, use the api link in your fetch or axios. For our project purpose we can copy the data and paste it in the constants/config file and acces from that. 

# Config Driven UI:
    # It is a design approach where the UI of an application is generated based on configuration data rather than hard-coded layouts or structures. 
    # The configuration data, typically in the form of JSON or XML, defines the structure, components, styles, behaviors, and interactions of the UI elements.
    # Example: In apps like Swiggy/Zomato you might notice that the offers you see are tailored to you based on various factors like your location, customer status, or specific events. For instance, during Pongal, users in Tamil Nadu might see special offers that aren't available in other cities. Similarly, if you're a new customer, you might receive more offers compared to regular users. These personalized offers are determined by backend logic, which adjusts the UI based on different variables. So, the UI you see changes dynamically according to the backend logic.

# Monolith Architecture:
    # It is a traditional approach where an entire application is built as a single, unified unit. 
    # All components of the application, such as the user interface, business logic, and data access layer, are tightly integrated and run as a single process. 
    # In a monolithic application, if you need to update or scale one part, the entire application has to be redeployed.

# Microservices:
    # It is an architectural style where an application is built as a collection of small, autonomous services, each responsible for a specific piece of business functionality. 
    # These services are independently deployable and loosely coupled, meaning that changes to one service do not require changes to others. 
    # They typically communicate with each other through well-defined APIs, often using HTTP/REST, messaging queues, or other protocols.