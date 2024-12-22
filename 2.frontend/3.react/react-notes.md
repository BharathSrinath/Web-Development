# Inroduction
    # React helps us to build components. Everything is a component in react.
    # Components combine HTML/CSS and logic into a single reusable function
    # A component is nothing but a function that returns JSX
    # It is an open-source JavaScript library developed by Facebook for building user interfaces, especially for Single Page Applications (SPA).
    # React builds UIs using components, which are reusable and independent pieces of code that describe a part of the UI.
    # Why is React known as React?
        # React is named for its "reactive" nature in building user interfaces. The library is designed to react to changes in data and automatically update the UI. It implements a virtual DOM, which allows it to efficiently re-render components when the underlying data changes, ensuring that the user interface is always in sync with the application state.
        # Most modern frameworks like Vue, Angular, Svelte are also built they same way. But React was at the fore-front of introducing reactive frameworks.
        # Before React, jquery was the most popular way of updating DOM. But here if the data had changed, we need to write more code to ensure that the UI reflected those changes (Unlike modern frameworks which updates the UI automatically based on the changes in data).
        # Even before Angular did this. But Angular followed two-way data binding and dirty checking which required scanning all data and bindings repeatedly that led to performance issue in large applications.

# Components:
    # Function Components (New way): These are just a normal JS functions that return React element/jsx. 
    # Class Components (Old way): These are ES6 classes that extend React.Component and include a render method that returns React elements.
    # NOTE: 
        # We can write “rafce” in VSCode to get a boiler plate react component.
        # Components can be reused across different parts of an application or even in different projects.
    # Component Rendering: 
        # On the first render, the component function is executed, and local variables are created within the function's scope.
        # When a state or prop changes, the component re-renders. A new execution of the component function is triggered, effectively creating a new instance of the component.
        # Each time a component re-renders, it runs a new instance of the component function. This new instance is what referred to as virtual DOM and the new execution creates new local variables, and the previous instance is discarded after prerforming the reconcilliation process (comparing the previous and current virual DOM). 
        # The JavaScript engine, through its garbage collection, automatically identifies and removes resources associated with the old instance.

# Diffing algorithm: 
    # It is used to efficiently update the UI by comparing the new version of the UI (represented as a virtual DOM) with the previous version and determining the minimal set of changes needed to update the actual DOM. 
    # Directly updating the DOM is often slow and can lead to performance issues. So the diffing algorithm optimizes this process by minimizing the number of operations performed on the DOM.
    # Re-rendering vs. DOM Manipulation: 
        # Re-rendering refers to React calling the render method of a component to generate a new virtual DOM. This virtual DOM is then compared to the previous one using the diffing algorithm. 
        # DOM Manipulation refers to the actual changes React makes to the real DOM based on the diffing process. React only updates parts of the DOM that have changed.
    # Working of Diffing algorithm:
        # Virtual DOM: React maintains a lightweight copy of the actual DOM, known as the virtual DOM. Whenever the state or props of a component change, React re-renders the component, creating a new virtual DOM tree (the new instance).
        # Comparison: React compares the new virtual DOM tree with the previous one to identify the differences. This process is known as "reconciliation."
        # Shallow Comparison: React assumes that if two elements are of the same type, their structure will be similar, so it performs a shallow comparison of their properties and children. If the elements are of different types, React will destroy the old node and create a new one.
        # Efficient Updates: By identifying only the parts of the virtual DOM that have changed, React can update the actual DOM with the minimal set of changes needed.
        # React Fiber Architecture: 
            # It is a reimplementation of React's diffing algorithm
            # To increase its suitability for areas like animation, layout, and gestures.
            # Headline feature: Incremental rendering - the ability to split rendering work into chunks and spread it out over multiple frames. 
            # Other features: Ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

# JSX
    # JSX/JavaScript XML, is a syntax extension for JS. It is also developed by facebook.
    # It allows us to write HTML-like code in your JS files, making it easier to describe what the UI should look like. 
        # Read it again. JSX is not an HTML. It is an HTML-like code
    # JSX code is not standalone JS; it needs to be transformed into regular JS before it can be understood by browsers. So when we copy paste the jsx in browsers, it will not work. The conversion is done by 'babel' which is a JS Transpiler/Compiler.
    # Technically, JSX allows us to define React components using a syntax that looks similar to HTML tags.
    # It supports standard HTML attributes as well as custom attributes that are passed as 'props' to React components.
    # It allows us to use JS logic, including conditional statements and loops, to conditionally render elements or repeat them.
    # Rules to follow/Conventions to know:
        # All prop names should follow camelCase
        # There are some differences, such as using 'className' instead of 'class' and 'htmlFor' instead of 'for' due to JS reserved words.
        # We must explicitly close self-closing elements like <br/>, <input/>, <img/>, etc.
        # Only a single element can be returned (It can have multiple child though).
            # So, sometimes we may be in a position to include unnecessary div/section elements to enclose the child. When we think they are not required we can enlcose the elements in <React.Fragment>...</React.Fragment> or the short-cut is <>....</>
            # This will not create any new element but helps to provide a dummy parent to the elements 
            # We can even nest React fragments inside another React fragment. Technically they are essentially invisible wrappers that allow us to group multiple elements without adding extra nodes to the DOM.
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
        # JSX can display numbers and strings. The values true, false, null, and undefined are not displayed. They are inherent. When we console.log them, we can see their values.
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
    # JSX is a syntactic sugar for React.createElement(). Under the hood, every JSX expression we write is converted to a React.createElement() that produces a React element which is JS object which is what we call it as virtual DOM.
    # Conversion is done by babel.
    # To render a react element we can simply pass the element name to the render method.
        # Example:  root.render(elementName);
    # To render a jsx (which is nothing but a function) we have two ways. Either make it like an html tag(preferred) or just call it like a normal function. 
        #  Example: root.render(<elementName/>); or root.render(elementName()); 

# Import and Export
    # export: There are two ways - default export and named export
        # default: 'export default functionName'
            It is written at the end after the function definition
            This is done when we have only one function to be exported and hence that function becomes your default export.  
        # named: 'export functionName(){......}'
            It is written as a part of the function definition where 'export' is prefixed before tha term 'function'.
            This can be used for one/multiple functions but primarily used when we have multiple functions
    # import: Based on the way the component has been exported, we have to import it.
        # import componentName1 from "./filepath" - default export
            # Name we assign can be anything regardless of the original name in the module.
            # Only one export is possible when marked as default
        # import {componentName1, componentName2} from "./filepath" - named export
            # Component names should be same as the function name in the module.
        # import componentName1, { componentName2, componentName3 } from "./filepath"; - To import both named exports and default export
        # import * as componentName from "./filepath"
            It imports all the exported members from a module into a single object, allowing us to access them as properties of that object.


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
        # A Transpiler is compiler that convert modern JavaScript (ES6+) and JSX (JavaScript XML) code into older versions of JavaScript that can run in all browsers, especially those that don’t support the latest features.
            # Example: Babel
            # Transpiler vs Compiler:
                # A compiler generally translates code from a high-level programming language (like Java or C++) into a lower-level language (like machine code or bytecode).
                # A transpiler, on the other hand, is a type of compiler that transforms code from one high-level language to another high-level language.
                    # In JavaScript development, a transpiler takes modern JavaScript (ES6+ or JSX) and translates it into an older version of JavaScript (like ES5), which ensures compatibility with older browsers or environments.
        # Linter: Linting tools analyze your code for potential errors, bad practices, and adherence to coding standards. They help maintain consistent code quality and style.
            # Example ESLint
        # Tester: They ensure that your code behaves as expected. They help catch bugs early by allowing us to write and run various types of tests.
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
        # Both Vite and Create React App are tools used to initialize a new project with a predefined structure and configuration. They set up everything we need to start developing with React (or other frameworks) right away.
        # Parcel on the other hand is integrated into an existing project. It doesnt give us any boilerplate code like app.js, index.html, etc.
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
            # Also we have to understand that a script file is not capable of importing anything and the script file itself cannot be exported.
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
    # browserslist is used to specify which browsers does our app should support. The github link (https://github.com/browserslist/browserslist) provides the possible options that we can place inside the browserslist. Also https://browserslist.dev provides the information regarding how much percentage of browsers your choice is going to affect. The value that we have mentioned doesn't mean that it will work only for last 2 versions. Rather it means it will definitely work for last 2 versions and with respect to other versions it will mostly work but some fearures may not work. 

# The dist folder in Parcel:
    Short for "distribution," it is a directory typically used to store the compiled or bundled output of the project. This folder contains the final, optimized, and production-ready version of your application or library.

# What is .parcel-cache?
    # The primary purpose of the .parcel-cache folder is to cache intermediate build results. When we make changes to our project and rebuild it, Parcel doesn't need to reprocess files that haven't changed. Instead, it can retrieve the processed files from the cache, which significantly speeds up subsequent builds.
    # Parcel uses the cache to perform incremental builds, meaning it only rebuilds the parts of your project that have changed. 
    # The cache persists between builds, so even if we stop and restart your development server or run a build after some time, Parcel can still use the cache to speed up the process.

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
        # devdependencies are Necessary only for development, testing, and building. They are excluded in the production setup as they are just helper for a developer to write better code. When we want to install something as a dev dependency add -D in your command after/before the package name.
            # Example: ESLint

# Props
    # In React, props (short for "properties") are a mechanism for passing data from a parent component to a child component. 
    # They allow us to make components dynamic and reusable by providing them with different values based on where they are used.
    # It might remind us of HTML attributes, but with props we can pass any JavaScript value through them, including objects, arrays, functions, and even JSX! 
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
        # destrcuturing will help us achieve that. 
        # argument name in App.js and the component.js should be same when we are destructuring which is not the case when we simply pass an argument without the consideration for default values
    # Prop-types:
        # PropTypes are a way to validate the types of props passed to a React component. They help ensure that the correct data type is passed to a component and can provide warnings in the development environment if the props do not match the expected types.
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
    # The "key" prop in React is a special attribute that we can include when rendering a list of elements. It helps React identify which items have changed, been added, or been removed.
    # Anytime we have an element with multiple children of same type to be rendered we should assign a unique "key" prop to each element. This helps React to efficiently update the virtual DOM by recognizing which items have changed using diffing algorithm.
    # The key should be assigned to the top most component in return. For an example,
        <div>
            <Component1 />
            <Component2 />
            <Component3 />
        </div>
        Here, the id should be assigned to div element.
    # Key must be a string or a number (not an object or an array) and they should be unique within their list. But when we are combining the list together (like combining two arrays), their id's cannot be same.
    # Usually when working with react, we use data from a database. In that case most of the data will have unique id's. So we can always assign those id's to the keys. 
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
    # Initially states were associated with class components only. Now with the  advent of 'hooks' (special functions that let your components use React features) they can be used with functional components as well and the entire syntax is much more simplified.
        # Just remember that we can only call a Hook immediately inside a React component (not inside loops or conditions)

# Difference between State and Props:
-------------------------------------------------------------------------------------------------
| Feature  |State                                   | Props                                     |
|----------|----------------------------------------|-------------------------------------------|
|Definition|Stores data about the component         | Read-only attributes passed from parent   |
|Mutability|Mutable (can be updated)                | Immutable (cannot be changed by child)    |
|Scope     |Local to the component                  | Passed from parent to child               |
|Usage     |Manages dynamic data affecting rendering| Passes data and event handlers to children|
-------------------------------------------------------------------------------------------------

# Components vs Page
    # In react, both of them are referred to as components.
    # But components generally refer to re-usable components like drop-down, button, searchbar, etc.
    # Whereas page refers to components that are intended to be not reused like checkout page, product page, login page, etc.
    # Also, a page component is meant to show (by convention), an entire page to the user unlike a normal component which is just a part of the page.
        # To put it simply, many normal components are part of a page component

# Events + State Design process
    # Step 1: What state + event handlers are there?
        1. List out what the user 'will do' and 'changes they see' while they use our app
        2. Categorize each step as 'state' or 'event handler'
        3. Group common steps. Remove duplicates. Rewrite descriptions.
    # Step 2: What name and type?
        4. Look at mockup. Remove or simplify parts that aren't changing
        5. Replace remaining elements with text descriptions
        6. Repeat #4 and #5 with different variation
        7. Imagine we have to write a function that returns the text of steps #5 and #6. In addition to your component props, what other arguments would we need?
    # Step 3: Where's it defined?
        8. Decide where wach event handler + State will be defined

# Controlled vs UnControlled Component:
    # Any form element whose state is not managed by React is called an uncontrolled component.
    # In React, every time a user does something that changes what’s on the screen, there should be a piece of state in React that manages that change.
    # Certain elements like <input>, <select>, and <textarea> automatically update their appearance based on user input. This behavior is due to their default DOM behavior when they are not controlled by React.
    # This default behavior occurs because these elements manage their own state directly in the DOM, without involving React.
        # By controlling tha value attribute, we can make these elements as controlled.
    # In React, we want to avoid this because React relies on comparing the previous and current virtual DOMs to determine what needs to be updated in the actual DOM.
    # If an element's state is not managed by React, it could lead to inconsistencies between React's virtual DOM and the actual DOM, making the application harder to predict and manage.
    # The bottom line is: If a user interaction changes anything on the screen, we should control that change using React state to ensure consistency and predictability.

# Data binding:
    # It refers to the process of connecting the UI with the data or state of an application. It ensures that any changes in the data are automatically reflected in the UI, and vice versa.
    # React follows one-way binding which means data flows in a single direction i.e., from the application state (data) to the UI.
    # In React, we typically update the UI by changing the state of a component. When the state changes, React automatically re-renders the component to reflect those changes in the UI.

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
1. useState(): It is used create local variables inside a functional component.
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

# Handling Objects and Arrays in a State:
    1. Do not update arrays or objects directly.
        Example: 
            const [colors, setColors] = useState(['red', 'green', 'blue']);
            const changeColor = () => {
                Bad!  This directly changes the 'colors' state!
                colors[0] = 'orange';
                setColors(colors);
            };
    2. We can add elements to the start/end of an array by using the spread syntax.
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
                // Here slice happens first and then the spread operator kicks-in
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
                            <!-- When we use map(), it creates a new array, but the elements (in this case, objects) within the array are still references to the original objects. If the original array contains objects, the new array created by map() will contain references to those same objects, not new copies of the objects themselves -->   
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
                    <!-- Now when we pass the rest alone to setFruit, it will replace the old object with new object's properties which effectively removes the color property -->
            };

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
        a) Empty Dependency Array:
            # When useEffect is provided with an empty dependency array ([]), it runs only once—after the first render. This effect function holds references to the variables and functions that were active during that first render, which can lead to the creation of "stale" variables.
                # Stale Variables: These are variables that are preserved from the initial render. This happens because useEffect captures the variables' values at the time of the first render and holds onto them. JavaScript's garbage collector cannot remove the old instance of the variable because the useEffect closure still references it, preventing it from being eligible for garbage collection. 
                # ESLint Warning: ESLint might warn about stale variables because they can cause bugs if we rely on outdated values. The squiggly line indicates that a variable used inside the effect might change but is not listed in the dependency array.
        b) With Dependencies:
            # If we include variables (like fetchBooks) in the dependency array, useEffect will run whenever those variables change. This is generally a good practice to ensure the effect runs with the most current data.
            # But there is an issue here. One of the significant aspect to understand useEffect and even react in depth. Dependencies can be classified as Stable Dependencies and Unstable Dependencies. This is not an official classification. But it works wells for understanding purpose. 
                # Stable Dependencies:
                    # Primitive values (e.g., numbers, strings, booleans).
                    # Memoized functions or objects (using useCallback or useMemo).
                # Unstable Dependencies: 
                    # Non-memoized functions or objects, which get re-created on every render and thus have a different reference.
            # During the reconcilliation process React compares VALUES for primitive type like numbers, strings, booleans and compares references for functions or objects. So when it compares the values it is always going to be the same (If there is no actual change). So useEffect will be invoked only when there is an actual change to the primitive values in the dependency array. But with respect to functions/objects a new instance is created on every render. It means even if there is no actual change, a new memory is created which is what is compared to the previous memory. Since there is a change in reference, useEffect will be invoked. This triggers a re-render of the component which again invokes the useEffect leading to infinite re-renders.
            # So whenever we pass a function or an object to the useEffec's dependency we have to use useCallback or useMemo (more about that later). Just know that useCallback or useMemo ensures that the same reference is returned and makes the unstable references as stable references across renders. 
        # UseEffect() returns no meaningful value. The purpose of useEffect is to perform side effects in functional components. The optional return value of useEffect is a cleanup function, but the function itself does not return anything directly. Just know that useEffect() cannot return a number or a string. Only optional function can be returned.
        # Clean-Up Function:
            # The function returned by useEffect (if provided) is used for clean-up when the component unmounts or when certain dependencies change.
            # Cleanup function can be async or sync, but the first argument of useEffect() itself cannot be declared an async. (Just remember that)
            # Async returns a promise but useEffect() returns no meaningful value.
            # This clean-up function is optional and is used to cancel subscriptions, clear intervals, or perform other clean-up tasks to avoid memory leaks.
            # Also in general we dont give name for the cleanUp(). Whatever function that follows the 'return' will be a cleanUp().
        # How the useEffect() works with cleanUp()?
            # In first render (upon loading for the first time), useEffect() will be called. The optional cleanup function will be returned (which will be held by react). It will not be executed at this point.
            # In second render (assuming that we have an element inside the array), the cleanup function will be executed (which was held by react). Now useEffect() will be executed the second time and a new cleanup function will be returned (which will be held by react). This continues for every render.
            # What we have to understand here is, when the component renders and react has any cleanup() held with it, react will execute the cleanup function first and then call the useEffect().
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
        # The callback funcion of useEffect cannot be async. Why?
            # This is because useEffect is designed to run after the DOM has been updated but before the browser has painted the screen. React expects this effect cleanup function to be synchronous so that it can correctly schedule and handle the effects.
            # The useEffect hook optionally returns a cleanup function, which React calls to clean up any side effects when the component unmounts or before the effect runs again. This cleanup function must be synchronous to ensure that React can clean up side effects properly and without delay. If the effect itself were async, it would complicate this cleanup process.
            # To handle asynchronous code, we can define an async function inside the useEffect callback and then call it. This way, we avoid making the useEffect callback itself async, but still manage asynchronous operations effectively.

3. useContext:
# Context:
    # Sometimes we might find that we have a prop which we want to expose “globally”. But, we might find it cumbersome to pass this particular prop down from the root, to every leaf, through every intermediate component. This issue is known as props drilling.
        # Props drilling refers to the process of passing data (via props) from a parent component down through several intermediate components until it reaches a deeply nested child component that needs the data. This can lead to issues as our component hierarchy grows, especially if only a few components along the way actually need the data.
    # Context allows us to automatically pass down variables from component to component, rather than needing to pass down our props at every level.
    # At its core, Context is a way to create a global-like state or function that can be accessed by any component within a certain portion of our component tree. This "portion" is defined by a Context Provider.
        # You may ask then why not a global variable? As you know react doesnt keep track of any variables (be it local or global). The only variable that it can keep track of state variables. 
    # It's often used for global state management, theme information, authentication status, etc.
    # createContext() returns an object with 2 components the Provider and the Consumer.
        # Provider: The Provider component is responsible for making the value accessible to its children. If we want the value to accessed by all the components ignore the Provider. Provider takes a value prop, which is the data we want to share. Within Provider, list all the components to which we want to share the value. 
            # Example: 
                import { createContext } from 'react';
                const MyContext = createContext();

                function MyProvider(props) {
                    const sharedValue = "This is a shared value";

                    return (
                        <MyContext.Provider value={sharedValue}>
                            {children}
                        </MyContext.Provider>
                    );
                }
        # Lets say that we want the value to be shared globally. Then we have to change the index.jsx file where we will wrap the <App /> with Context.Provider
            # Example (in App component): 
                root.render (
                    <BooksContext.Provider value = {5}>
                        <App />
                    <BooksContext.Provider>
                )
                # Here App component and all its children (read it again - ALL ITS CHILDREN) will have access to 'value' 
      
        # Consumer: The Consumer component is the children that can access the value provided by the Provider.
            # Example: 
                    import {useContext} from 'react'
                    import BookContext from './book'
                    
                    function childComponent(){
                        const num = useContext (BookContext);
                        return <div>{num}<div/>
                    }
            # With Class components we have to specifically use MyContext.Consumer to consume the values. But with advent of hooks in functional components, we just useContext.
    # Creating the Context with Default Value:
        # Directly pass a value to the createContext. Now any component that consumes this context will use the default value if there's no Provider higher up in the component tree supplying a different value.
        # So we can create another value and supply it with a Provider to components (children) which can consume them. For every other component which cannot consume this value (That is not the Providers children), they will consume the default value.
    # Disadvantages with Context: 
        # When the value provided by a context changes, all components consuming that context will re-render. This can sometimes lead to performance issues, especially if the context value changes frequently or if many components are consuming the context.
            # If we provide a context value at the top level of your application (such as in the App component), then whenever that context value changes, all components in the application that consume that context will re-render
        # Overusing can lead to difficulty in tracking where state is coming from or being changed. It's best used for global state that truly needs to be accessible by many components.

4. useMemo: 
    # Usage:
        # It cache the result of a calculation between re-renders. 
        # It is particularly useful when we have expensive computations that should only re-run when certain dependencies change.
    # Sytax: 
        # const cachedValue = useMemo(calculateValue, dependencies) 
        # We need to pass two things to useMemo:
            # A calculation function that takes no arguments, like () =>, and returns what we wanted to calculate.
            # A list of dependencies including every value within your component that’s used inside your calculation.
    # Example: 
        # Imagine a React component with two state variables.
            # Theme State: Toggles between black and white themes.
            # Prime Number Calculation State: Calculates the nth prime number, which is a computationally heavy task.
        # The Problem:
            # Any change in either state will trigger a re-render of the entire component.
            # If we input a large number (e.g., 1,234,567) for the prime number calculation and then toggle the theme, the entire component re-renders. This re-render will unnecessarily recalculate the nth prime number, even though the prime number hasn't changed. This can lead to poor user experience due to the heavy computation during theme toggling.
        # The Solution: 
            # To avoid recalculating the prime number on every re-render (e.g., when toggling the theme), we can wrap the prime number calculation in useMemo.
            # Pass the prime number calculation function and a dependency array to useMemo. This ensures that the prime number calculation only occurs when its specific dependencies change (e.g., when the input number changes), not when unrelated states like the theme toggle.
    # Working: 
        # React will call your function during the initial render. On next renders, React will return the same value again if the dependencies have not changed since the last render. Otherwise, it will call calculateValue, return its result, and store it so it can be reused later.
        # On the initial render, useMemo returns the RESULT of calling calculateValue with no arguments.
        # On every subsequent render, React will compare the dependencies with the dependencies we passed during the last render. If none of the dependencies have changed, useMemo will return the value we already calculated before. Otherwise, React will re-run your calculation and return the new value.
        # In other words, useMemo caches a calculation result between re-renders until its dependencies change.
            # This type of caching is called memoization.   
        # General use cases: Usually, this isn’t a problem because most calculations are very fast. However, if you’re filtering or transforming a large array, or doing some expensive computation, we might want to skip doing it again if data hasn’t changed.
        # You may the thinking, we can achieve this by using useEffect() too. Technically yes. But we will not. They are used for different purpose.
            # useEffect is meant for actions that should happen after the render, like side effects (e.g., API calls, subscriptions).
            # useMemo is meant to optimize performance during the render by avoiding recalculations. 

5. useCallback:
    # Usage:
        # Similar to useMemo. While useMemo is used to cache the RESULT OF A FUNCTION, useCallback lets you cache a FUNCTION DEFINITION between re-renders.
    # Works in tandem with useEffect():
        # They are used to fix bugs around useEffect() and other similar situations.
        # It is used to memoize a callback function.
    # Syntax:
        # const cachedFn = useCallback(function, dependencies)
            # The function can take any arguments and return any values
            # A list of dependencies including every value within your component that’s used inside your function.
    # Working:
        # On the initial render, useCallback returns the function (not call!) we have passed.
        # During subsequent renders, it will either return an already stored function from the last render (if the dependencies haven’t changed), or return the function we have passed during this render.

6. useRef:
    # Usage: 
        # It allows us to reference a value that persists across renders but does not trigger re-renders when it changes.
        # In react when we update a state variable, it triggers a re-render of the component. However, there are cases where we need a mutable value that can be updated without causing the component to re-render. This is where useRef comes into play. useRef provides a way to store a value that persists across renders, but updating this value doesn’t cause the component to re-render.
        # When we use a normal variable in react(without state), it will reset to its initial value everytime the component renders. Because it doesnt have a state persisting its values. But with useRef we can achieve this. 
        # This means refs are perfect for storing information that doesn’t affect the visual output of your component.
    # Syntax:
        # const ref = useRef(initialValue)
            # useRef returns an object with a single property called 'current'.
            # initialValue is the value we want the ref object’s current property to be initially. It can be a value of any type. 
            # This argument is ignored after the initial render. On the next renders, useRef will return the same object.
            # So the ref variable is an object with one property whose value will be the initialValue that we assign.
    # Working:
        # We can mutate the ref.current property. Unlike state, it is mutable. However, if it holds an object that is used for rendering (for example, a piece of your state), then we shouldn’t mutate that object.
        # When we change the ref.current property, React does not re-render your component. React is not aware of when we change it because a ref is a plain JavaScript object.
        # Do not write or read ref.current during rendering, except for initialization. 
    # DOM Manipulation with useRef:
        # In React, we generally don't interact with the DOM directly, as React manages the DOM for us. However, there are certain scenarios where direct DOM manipulation is necessary. 
            # Focusing an input field when the component mounts or when a button is clicked.
            # Managing scroll positions or performing animations.
            # Accessing and modifying DOM elements that aren’t easily controlled via React's state.

7. useReducer:
    # Usage:
        # It is very similar to useState, but it lets us move the state update logic from event handlers into a single function outside of your component.
        # It lets you add a reducer to your component.
        # Components with many state updates spread across many event handlers can get overwhelming. For these cases, we can consolidate all the state update logic outside your component in a single function, called a reducer. That is moving all the 'state' into a single function.
    # Steps to achieve this:
        # Move from setting state to dispatching actions. Instead of telling React “what to do” by setting state, we will specify “what the user just did” by dispatching 'actions' from our event handlers. (The state update logic will live elsewhere!) 
            # Our event handler will call a function right? Within that function we will call the dispatch function.
            # Dispatch will accept an object which is known as 'actions' and the action will be dispatched to the respective reducer function.
                # Syntax: dispatch({
                            type: 'what_happened',
                            // other fields go here
                          });
                # You need to pass the action as the only argument to the dispatch function.
                # Dispatch functions do not have a return value.
            # By convention, an action is usually an object with a type property identifying it and, optionally, other properties with additional information (like a 'payload').
        # Write a reducer function.
            # Syntax: function reducer(state, action) {...}
            # The reducer function takes state and action as its argumnents and returns the next state.
            # By convention, it is common to write it as a switch statement as your function definition. For each case in the switch, calculate and return some next state.
            # Example:
                function reducer(state, action) {
                    switch (action.type) {
                        case 'incremented_age': {
                            return {
                                name: state.name,
                                age: state.age + 1
                            };
                        }
                        case 'changed_name': {
                            return {
                                name: action.nextName,
                                age: state.age
                            };
                        }
                    }
                    throw Error('Unknown action: ' + action.type);
                }
        # Finally use the reducer from your component. 
    # Syntax:
        # const [state, dispatch] = useReducer(reducer, initialArg, init?)
            # It returns an array with exactly two values:
                # state: During the first render, it’s set to init or initialArg (if there’s no init).
                # dispatch: A function that lets you update the state to a different value and trigger a re-render.
            # reducer: It is a function that takes the current state and an action, and returns the new state.
            # initialArg: It is The initial value for the state. It can be a simple value (like a number or string), an object, or even something more complex like an array.
            # If you don't provide an init function, initialArg is used directly as the initial state. If you do provide an init function, initialArg is passed to init function, and the return value of init is used as the initial state instead. React will run the init only once during the initial render and ingnore that parameter completely in the subsequent renders. 
    # Flow:
        # User driven event -> Calls the function associated with the event -> Inside the event handler function, dispatch function (with action object as the parameter) provided by useReducer is called -> React takes the current state (the state that was last rendered) and the dispatched action, then passes them to the reducer function -> Our reducer will calculate and return the next state -> React will store that next state, render our component with it, and update the UI.
    # No usage of async/await, requests, promises, outside variables, etc. with useReducer: Why?
        # Reducers are expected to be synchronous functions that return a new state. 
        # When you use async/await in a reducer, the function will return a promise. This breaks the contract of a reducer, which should return the new state immediately.
        # So, React and Redux both expect reducers to be synchronous for the state updates to be predictable and manageable.
        # To handle asynchronous operations in a React component, the recommended approach is to use the useEffect hook along with async functions.
        # Also, the problem lies in the fact that state updates in React are batched, and when you rely on the current state to calculate the next state in an asynchronous context, you might not get the expected behavior.

# React-router-dom
Kindly refer - https://reactrouter.com/en/main
    # React Router is a package that simplifies navigation and dynamic "client side routing" in a React application.
        # We can achieve the same without this package too. But somewhat complex and we have infact studied that in udemy course under 4.components. 
    # react-router-dom is the browser-specific version of react-router, a library for handling routing in React applications. While react-router provides the core routing functionality, react-router-dom includes components and utilities specifically for web applications that run in a browser.
        # In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page. This is called server side routing.
        # Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.
        # Not all resources are loaded upfront. While the initial request loads the core resources, additional resources might be fetched dynamically as needed when the user navigates to different parts of the app. The idea is to make the user experience seamless by avoiding full page reloads and loading only what's necessary for the current view. But there is only one html page. Henceforth the entire page loading is avoided. 
    # There are many hooks/functions provided by react-router-dom. But the important ones are
        # createBrowserRouter: 
            # Among many arguments that this function can accept, most frequently used arguments are path, element, children, etc. 
                # path - route
                # element - component to be executed
                # errorElement - component to be executed in case of an error
                # children - child components of the element
            # It returns an instance called 'RemixRouter' which is passed as prop to RouterProvider.   
        # RouterProvider:
            # It accepts the 'RemixRouter' instance and based on that it returns a router instance to our react application. 
            # Internally, RouterProvider uses React’s Context API to pass routing information down the component tree.
                # You have studied about useContext hook right? It also uses Context API under the hood. So RouterProvider acts similar to useConext hook. 
                    # useContext: This hook is used within a component to access the value from a context that has been provided higher up in the component tree. It allows any child component to consume the context value directly.
                    # RouterProvider: This component sets up the routing context for your application. It makes the router instance available to all child components, enabling them to access routing information and perform navigation.
        # Link: The Link component is used to create navigational links in your application. It works similarly to the HTML <a> tag but prevents the page from reloading, enabling client-side navigation. Instead of href in anchor tag we have 'to' in Link.
        # Outlet: An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.
        # Important hooks: useParams, useNavigate, useRouteError, etc.
            # useParams:   
                # It extracts dynamic route parameters from the URL path.
                # It returns an object where the keys are the names of the parameters and the values are the actual values from the URL.
                # Example: When your route includes path variables, such as /user/:id, useParams helps retrieve the value of id.
                    #  const { id } = useParams();
            # useSearchParams:
                # It works with the query string (the part of the URL after the ?), and helps in reading and updating URL search parameters.
                # It returns an array of of 2 elements.
                    # First element: A URLSearchParams object that allows you to read the current query string values.
                    # Second element: A function to update the search params.
                # Example: When you need to manage URL query parameters, such as /search?query=react, useSearchParams allows you to read and manipulate them.
                    # const [searchParams, setSearchParams] = useSearchParams();
                      const query = searchParams.get('q');
                    # The string that is used inside get method differents from website to website.
            # useNavigate: Provides a function to programmatically navigate to different routes, either by pushing or replacing entries in the history stack.
            # useRouteError: Inside of an errorElement, this hook returns anything thrown during an action, loader, or rendering. 
    # NOTE: You have to pass the RouterProvider to the render method from now on and not the App component.

# json-server
    # Without server we wont be able to store anything. For an example, in the BookCreate project reloading the page after adding the books will undo the added books. Because added books are not stored anywhere. 
    # Creating a local server:
        1. Create a db.json file
        2. Add the following under "scripts" in package.json file
            "server": "json-server -p 3001 --watch db.json"
                # When we are working with projects that has a server, we will execute 'npm run dev' in one terminal and open another terminal and execute 'npm run server'
                # Here the second command will execute the above line in package.json file.
                    # json-server: This is the command to start the JSON server. JSON Server is a tool that allows us to quickly create a RESTful API based on a JSON file.
                    # -p 3001: This option sets the port number for the server. In this case, the server will run on port 3001. We can change this number if needed.
                        # a port is a way for a computer to organize network-bound traffic. It allows multiple services on the same device to use network resources without interference and enables communication between devices on a network.
                    # --watch db.json: This option tells json-server to watch the db.json file for any changes. The db.json file typically contains the data that the JSON server serves. If we make changes to this file, the server will automatically pick up those changes without requiring a restart. 

# To get data from a site:
    # inspect element -> network -> fetch/XHR -> header (to get the api link) or select the content -> preview (to get the actual data)
    # If we want to just fetch the data, use the api link in your fetch or axios. For our project purpose we can copy the data and paste it in the constants/config file and acces from that. 

# Config Driven UI:
    # It is a design approach where the UI of an application is generated based on configuration data rather than hard-coded layouts or structures. 
    # The configuration data, typically in the form of JSON or XML, defines the structure, components, styles, behaviors, and interactions of the UI elements.
    # Example: In apps like Swiggy/Zomato you might notice that the offers you see are tailored to you based on various factors like your location, customer status, or specific events. For instance, during Pongal, users in Tamil Nadu might see special offers that aren't available in other cities. Similarly, if you're a new customer, you might receive more offers compared to regular users. These personalized offers are determined by backend logic, which adjusts the UI based on different variables. So, the UI you see changes dynamically according to the backend logic.

# Monolithic Architecture:
    # It is a traditional approach where an entire application is built as a single, unified unit. 
    # All components of the application, such as the user interface, business logic, and data access layer, are tightly integrated and run as a single process. 
    # In a monolithic application, if we need to update or scale one part, the entire application has to be redeployed.

# Microservices:
    # It is an architectural style where an application is built as a collection of small, autonomous services, each responsible for a specific piece of business functionality. 
    # These services are independently deployable and loosely coupled, meaning that changes to one service do not require changes to others. 
    # They typically communicate with each other through well-defined APIs, often using HTTP/REST, messaging queues, or other protocols.
    
# Lazy Loading: 
    # When using tools like Parcel, all code is bundled into a single JavaScript file. As the application grows, this bundled file increases in size, leading to longer loading times and significant overhead during navigation.
    # Split the code so that only the necessary parts are loaded when needed. This means loading specific resources only when the user attempts to access them, reducing the initial load time and improving performance during navigation.
    # Implementation:
        # There is no difference in component creation. But execution is what differs.
        # There is a function called 'lazy' which accepts a callback function (AKA load function) and has a definition which contains another function named 'import' which accepts the components path as the argument.
        # Here import is not a typical import statement but rather a promise.
        # The result of the lazy loading should be stored in a variable and this variable should be wrapped in another function called 'suspense'.
            # Both 'lazy' and 'suspense' are provided by the react package.
        # What is suspense? React generally renders much faster even before the scripts can be loaded. So it is trying to access something that has not yet loaded. Hence it will suspend the loading and will throw an error as "A component was suspended while responding to `synchronous input`". To overcome this we wrap it under 'suspense' which can take an attribute called 'fallback' where we can mention what to appear until the script is loaded. (Generally we mention shimmer).
    # Syntax: const LazyComponent = React.lazy(() => import('./MyComponent'));
        # React.lazy() returns a React component that we can use in our JSX, just like any other component.
        # The import() function inside React.lazy() returns a Promise that resolves to a module with a default export, which is our component.
        # <Suspense fallback={<Shimmer/>}>
            <LazyComponent />
          </Suspense>
        # Inside Suspense, we can include one or more lazy-loaded components. React will handle displaying the fallback content while waiting for these components to load.

# Redux: 
    # npm install @reduxjs/toolkit react-redux
    # There are 2 layers - Data layer and UI layer.
    # Redux library can be used to manage data layer. It is a JS library for predictable and maintainable global state management.
        # Alternatives for Redux - Context API with useReducer, Recoil, MobX, Jotai, etc.
    # It helps us to write applications that behave consistently, run in different environments (client, server, and native), and are easy to test
    # Redux has a difficult learning curve, complex to setup redux store and have to add a lot of packages to do anything useful. Hence Redux developers came up with something called Redux-Took-Kit(RTK) which abtracts away many of the setup process and boilerplate code. So we will be using RTK to make use of the Redux library.    
    # It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.
# Redux vs useReducer:
    # Redux utilizes actions and reducers to update the application state. With useReducer we have one reducer() to manage the state but in redux we will have multiple reducers each managing different part of the state.
    # useReducer is for managing state within a single component. It is local to the component where it is used. But Redux is used to manage global state across the entire application. It allows you to centralize and manage state in a predictable way.
    # In the context of Redux, the state is managed globally in a centralized store, and components can access it without the need for prop drilling (just like context). Redux operates outside the component tree, providing a way to manage application state without directly passing it through the component hierarchy.
    # We can have multiple sub-reducer functions handling different parts of the global centralised state. Each sub-reducer function behaves similarly to how useReducer works at the local state level within a component. 
    # Unlike useReducer where we need to specify action for every dispatch(), Redux simplifies the action type creation process.
# Redux Toolkit:
    # It is also a library that uses redux and makes using redux even more easy.
    # It is wrapped around plain Redux.
# Store:
    # The current Redux application state lives in an object called the store .
    # Redux Toolkit includes a method called configureStore. This function creates a new Redux store instance.
    # configureStore always requires a reducer option. This should typically be an object containing the individual "slice reducers" for the different parts of the application.
    # One of the principles of Redux is that there should only be one store instance for an entire application.
    # Syntax: const store = configureStore({ reducer: counterReducer })
              console.log(store.getState())
# Slice:
    # A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file.
    # They automatically create reducers and action types. See with useReducers we manually create them right? Here they are created automatically. 
    # createSlice is the function that accepts 4 arguments - name, initialState, reducers and an optional property called extraReducers. 
    # It returns an object.
        # name: The name of the slice, as specified
        # reducer: A reducer is a function that takes the current state and an action, and returns the new state. It combines all the slice's reducers into a single reducer function. It contains the logic for how state should change based on the action type.
        # action creators: A function that returns an action object with a type field (and optionally, a payload). They are automatically created. They have the same name as the reducer functions.
            # Example: export const { addSong, removeSong } = songsSlice.actions; Here addSong and removeSong are not reducer functions, rather they are automatically created action creators. We are passing these action creators while dispatching them using dispatch function. 
            # What it returns? An object known as action - { type: "song(sliceName)/addSong(reducerFunctionName)", payload: "Song A" }
        # action: An action is a plain JavaScript object that describes what happened in your application. It must have a type property and can include additional data (e.g., payload).
        # dispatch: A function provided by Redux that sends an action to the reducer, triggering a state update. Simply put, dispatch is used to send actions.
            # Example: dispatch(addSong(song));
        # caseReducers: An object that contains the actual reducer functions defined in the reducers property. This can be useful if you need direct access to the reducer functions for some reason. This is the actual logic that we have written under mini-reducers. We dont directly interact with it. Once written, it is part of the slice's internal implementation.
    # There are 3 functions fo slices:
      1. Defines initial state - We have an empty array. It could be anything (an array, an object, strings, etc.) 
      2. Combines mini-reducers into a big reducer. 
        # You can consider the mini-reducers as switch-case that we have used with useReducers. Every function within the mini-reducer is like the individual case statement.
        # createSlice has a property called 'reducer' which is the big reducer that combines all the functions with-in the reducers object into one reducer. This combined reducer is the one which gets loaded into redux store. 
            # We dont export individual reducers. Rather we export this combined 'reducer' alone. 
        # But lets ask the same question. How does the mega-reducer knows which individual function to run?
          # createSlice follows a template. It combines the name property with a slash followed by the functionName. This when matches with dispatching action (type property), that function will be executed. But we need not worry about creating actions as they are handled as below.  
          # Example: 'song' + '/' + 'addSong' = 'song/addSong'
      3. Creates a set of 'action-creator' functions   
          # state within mini-reducers is the local state related to the local component (that is songs or movies in our project) and not the major big centralsied state. (I hope you know this)
          # What does this mean? It means that, this state will have access to changes only that happens to songs or videos and not both depending upon the mini-reducer.
          # createSlice has another property called 'actions'. When you console.log(songsSlice.actions) you will see that createSlice() has already created actions based on the name of the properties given by us in mini-reducers.
          # So, while dispatching we do not need to create actions separately.
            # Example: songsSlice.actions.addSong('payload')
# Changing the state:
    # Add a reducer to one of your slices where the function defines what kind of change needs to be made
      # Example: state.push (action.payload)
    # Export the action creator that the slice automatically creates
    # Find the component from where we want to dispatch (that is from where the state should be updated)
    # In that component, we have to import 'useDispatch' hook and also the action creators that we have exported
    # Call the 'useDispatch' hook to get access to the dispatch function
      # This hook actually makes use of the context system to reach up our component heirarchy and get access to the dispatch function from the Redux store.
    # Finally, whenever the user does something (like click, hover, etc.) we call the action creator function (in the eventHandler obviously) to get an action and the dispatch it. This action object will be sent to reducers. They will run and update our states. 
    # VERY IMPORTANT NOTE: Redux actions and state should only contain plain JS values like objects, arrays, and primitives. Don't put class instances, functions, Date/Map/Set instances, or other non-serializable values into Redux!.
|-----------------------------------------------------------------------------------------------|
|FLOW: When an event is fired, the event handler dispatches an action which calls the reducer   |
|function which goes onto update the slice of the redux store.                                  |
|-----------------------------------------------------------------------------------------------|
# Selectors - Accessing the state (to read a state):
    # They are functions that know how to extract specific pieces of information from a store state value. 
    # As application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data.
    # Here, import 'useSelector' hook from react-redux
      # useSelector allows you to access the state from the Redux store. You provide a callback function (selector) that takes the entire Redux state as an argument and returns the specific piece of state that your component needs.
      # Syntax: const selectedData = useSelector((state) => state.sliceName.PropertyName);
        # PropertyName is optional here
      # Example: "const selectedValue = useSelector(state); return state.songs"
        # In this example, state is the ENTIRE Redux state (movies and songs in our case), and state.songs represents the specific piece of state you want to extract.
      # The component that uses useSelector, automatically subscribes to the selected part of the state. This means that whenever the selected state changes, the component will re-render.
      # useSelector uses memoization to ensure that the callback function is only executed when the selected part of the state it depends on changes.
      # You can use multiple useSelector hooks in a single component to extract different parts of the state.
    # Call the hook, passing in a selector function
    # Use the state! Anytime state changes, the component will automatically rerender
    # Note that you don't have to create separate selector functions for every field in every slice. Instead, find a balance in how many selectors you write.
 # Immer
    # It is a built-in package with Redux toolkit to make handling immutable state easier.
    # In Redux, you should never directly modify the state, so you usually end up writing code to create new copies of the state with the changes you need. Immer simplifies this by allowing you to "mutate" the state directly.
# Multiple state updates
    # Resetting the state:
        # There are scenarios where when we hit reset we want multiple states to be cleared.
        # Typically, when resetting the state, we assign it an empty string, array, or object (if it was empty to begin with), or assign the initial value if it had some value.
        # But Redux Toolkit includes the Immer library, which expects the state to be mutated with new values. Unlike the common approach of reassigning the state variable directly (e.g., `state = []`), Immer cannot detect this reassignment.
        # Instead of changing the state variable directly, with Immer, we should modify the state by updating its properties or elements. This ensures that Immer can correctly track and apply the changes.
        # Generally updated state is implicitly returned (taken care by Immer). But whenever you are completely reassign the state, we have to use 'return' (return [])  
        # So basically we can return an empty value in mini-states whenever we want to reset and then dispatch two separate actions whenever the reset button is clicked. But there are better ways. We use something called extraReducers.
    # extraReducers:
        # When you define extraReducers as a function, Redux Toolkit calls this function with the builder object which is a part of the builder API.
        # The builder API replaces the traditional object notation, providing more flexibility and clarity when working with external or dynamic actions. 
        # extraReducers allows you to define additional reducers that don't directly correspond to actions generated by the slice. They dont improve performance or efficiency. They are primarily used for readability and separation of concerns.
            # The reducers defined within a slice (reducers field) are responsible for handling actions that are specific to that slice. They only respond to the actions that are created by that slice itself (like those defined in the reducers field).
            # extraReducers allows a slice to respond to actions that originate outside of its own reducers field. These could be actions from,
                # Other slices
                # Async thunks
                # Independent actions
        # Example: If a user logs in (say it is handled by authSlice), you might want to update the profile slice to load the user's profile data.
        # Syntax: It can be defined in two main ways in Redux Toolkit:
            # Object Notation: This is a simpler, direct approach where you map action types to reducer functions.
                extraReducers: {
                    [actionName.type]: (state, action) => {
                    // Here action is dynamic. We are importing from another file. In JS for dynamic key we have to use square brackets.
                    // Whenever this action happens, the corresposding reducer function will be executed.
                    }
                }
              Use this when you have a simple case of mapping action types to reducers and don't need the additional flexibility of chaining or complex logic.
            # Builder Callback Notation: This is a more flexible approach that allows chaining and more complex logic.
                extraReducers: (builder) => {
                    builder
                    .addCase('someAction1', (state, action) => {
                        // Update state based on the action
                    })
                    .addCase('someAction2', (state, action) => {
                        // Handle another action
                    });
                }
                # Here someAction is an 'action' and the callback function is a 'reducer function'.
              Use this when you need to handle more complex scenarios, such as chaining multiple actions, handling async thunks, or when your logic requires more control.
        # Normal reducers vs extraReducers with builder API:
            # With respect to functionality, there is absolutely no difference between normal reducers and extraReducers. Then what is the need for builder API?
            # Normal reducers:
                # The very purpose of builder API is to incorporate 'actions' that are not related to the slice. The reducers field inside createSlice is where you define slice-specific reducers. These are tightly coupled to the slice and only respond to the actions generated by this slice itself. 
                # Each key in the reducers object corresponds to an action creator generated automatically by Redux Toolkit. These reducers are straightforward and only handle slice-specific logic.
                    # Example: addSong and removeSong are slice-specific reducers. They directly modify the songs slice of the state.
                # That is, When you define a key in reducers (e.g., addSong) RTK automatically generates an action creator with the same name and creates a unique type string for the action (e.g., "songs/addSong").
                # The reducer logic is tied to this specific action 'type' and RTK creates an object to map action type strings to their corresponding reducer functions.
                # During dispatch, Redux Toolkit checks the type of the dispatched action and executes the appropriate reducer.
            # extraReducers with Builder API:
                # In contrast to normal reducer, extraReducers must handle actions that are not tied to the slice itself, which makes the situation more complex.
                # The reducers field only works with actions generated by the slice itself (e.g., addSong, removeSong). It can’t respond to external actions like 'reset' because those actions aren’t part of the slice's internal actionMapping.
                # Instead of hardcoding an object for action-to-reducer mappings (as with reducers), it uses the builder API to dynamically define mappings.
                # The builder object provides a flexible interface for mapping external actions (like reset) to reducers. Unlike the reducers field, where mappings are static, the builder API allows dynamic and extensible configurations.
                # The builder.addCase method registers external action types with reducers. Internally, Redux Toolkit adds these mappings to the slice’s reducer logic.
                # VERY IMPORTANT: Unlike normal reducers, for extraReducers, actions are not automatically created. These actions could come from another slice, global actions, or manually created actions. (we have created them manually under action.jsx) using createAction. 
                    # Example: export const reset = createAction ('app/reset');
                    Here you could have simply used reset instead of app/reset too. But Namespacing actions with a prefix like app/ helps avoid collisions in large applications where many features may have similarly named actions (e.g., multiple slices with reset actions). Instead of app you could have named anything too. But we try to keep the naming appropriate for our action. Clicking on reset, resets the entire application in our case. So we have named it as 'app/reset'
                        # Takeaway? Naming conventions like feature/action are a common best practice in Redux to avoid confusion and conflicts in large applications.
Note: I haven't fully understood the mechanism of builder API as of now. But understood its purpose. 
        # Why is it called an API? 
            # API here means Application Programming Interface, which is just a fancy way of saying a set of functions/methods exposed for a specific purpose.
            # The builder object provides an interface (e.g., addCase) that allows you to define how actions should modify the state.
        # When you console.log(builder), you can see the following.
            # {addCase: ƒ, addMatcher: ƒ, addDefaultCase: ƒ}
                # addCase: ƒ addCase(typeOrActionCreator, reducer)
                # addDefaultCase: ƒ addDefaultCase(reducer)
                # addMatcher: ƒ addMatcher(matcher, reducer)
                # [[Prototype]]: Object
        # As we can see, in addCase first argument is the action-type and second argument is the reducer.
        # The addCase method is used to add an extra reducer. It takes two parameters:
            # The action type (reset in this case).
            # A callback function that specifies how the state should be updated in response to the action.
                # The callback is simply a mini-reducer function like addSong/removeSong 
                # Whenever reset is triggered (first argument), execute the reducer (second argument) 
        # Note: Even though action creators are automatically created by createSlice in Redux Toolkit, you need to explicitly export them if you want to use them elsewhere in your application.
    # Exporting
        # Files in our component folder need specific imports from store/slices/files.js. However, we should try to avoid directly importing from slices, especially action creators. Instead we should use the file store/index.js for centralized state management. The directive is to import there and then re-export. Why?
        1. Directly importing from slice files can create tight coupling between components and the internal structure of our state management. By importing through a central file, you reduce this coupling. Components only need to know about the central file, not the details of how the state is managed.
        2. Having a central file for exports can simplify import statements throughout our application. Instead of importing from various slice files in different components, you can import everything you need from a single file, improving code organization and readability.
        3. By importing and re-exporting from a central file, you create an abstraction layer between the rest of our application and the specifics of how our state management is implemented. This abstraction can make it easier to switch to a different state management solution in the future without affecting the rest of our codebase.
        4. To avoid circular imports issue
# Random values:
    # In Redux, actions are objects that contain a type field and an optional payload field. The payload holds the data that should be used to update the state. When using createSlice from Redux Toolkit, action creators are automatically generated for us based on the reducers we define.
    # However, sometimes we need to do more than just pass data directly into the action. For example, we might need to generate a unique ID or perform some other logic before creating the action. This is where a "prepare callback" comes in.
        # You can basically declare the logic in your component and pass the result directly via the dispatch function. 
        # You can use this approach if this logic is only needed in one component or in a few places, handling it directly in the component is simpler and more straightforward.
        # But if you want to reuse that logic and maintain consistency across different parts of your app, a prepare callback is the way to go.
    # Actually reducers field of createSlice has two properties (So far we have dealt with only one which is the reducer function alone). The second property is  "prepare callback" function.
    # The prepare function is where you can generate unique IDs, format the payload, and perform other synchronous logic.
    # The prepare function must return an object with a payload field. This payload field returned by prepare will be passed to the reducer function as the action.payload.
    # Example: 
        prepare(title, content) {
            return {
                payload: {
                    id: nanoid(), 
                    title: title,
                    content: content
                }
            };
        }
# Redux persist:
    # redux-persist is a package that saves the Redux state to a storage engine (like localStorage or sessionStorage) and restores that state when the app reloads.
    # This ensures that the Redux store data remains available even after a page refresh or a browser close/reopen cycle.
    # Why do we need this? Normally, the Redux store is ephemeral, meaning that its state is reset when the browser is refreshed or closed. In scenarios where we need the app state to persist across sessions redux-persist provides a convenient and automatic solution.
        # Examples:
            1. User authentication state
            2. Application settings (theme preference)
            3. Form data or partial inputs
    # Installation: npm i redux-persist
    # Working: 
        #  When a change occurs in the Redux store, redux-persist automatically saves the state to the chosen storage engine (localStorage, sessionStorage, etc.)
        # When the application reloads, redux-persist will automatically load (rehydrate) the saved state from storage back into the Redux store. This process occurs before the app renders, ensuring the state is restored before any UI interaction.
    # Core Concepts of redux-persist:
        # Storage Engine: It supports various storage engines, but typically localStorage or sessionStorage are used for web apps.
            # localStorage: Data persists even after the browser is closed and reopened.
            # sessionStorage: Data persists only for the duration of the browser session. Once the browser is closed, the data is cleared.
        # Configuration (persistConfig): It is an object that defines how the store should be persisted. It contains properties like,
            # key: A unique key that identifies the persisted data in storage.
            # storage: The storage engine 
            # whitelist (optional): List of reducers that should be persisted.
            # blacklist (optional): List of reducers that should not be persisted.
        # persistReducer: A function that wraps your root reducer, allowing it to interact with redux-persist. This modified reducer knows how to persist and rehydrate its state.
            const persistedReducer = persistReducer(persistConfig, rootReducer);
        # PersistGate: A React component from redux-persist that ensures our app waits for the persisted state to rehydrate before rendering. Without this, the UI might flash an incorrect state before the rehydration completes. Persistagate will wrap the App/Body and the Provider will wrap all of them. 
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        # persistStore: This function creates the persistor object, which manages the persistence and rehydration process.
            const persistor = persistStore(store);
        # persistor.purge(); 
            # When we want to clear the data from the storage we have to call this function.
            # But it wipes out everything. But just know that there are ways for selective removal. 
            # One common methodology is using blacklist or whitelist with redux-persist. It doesnt involve in removal. Rather we decide which parts of our state are persisted using blacklist (to exclude slices) or whitelist (to include only specific slices) in the persistConfig.
    # Refer Netflix clone project to know how it is implemented.
# Redux Middleware:
    # Middleware in Redux is essentially a way to enhance or modify the behavior of Redux's dispatch function. When an action is dispatched, it travels through the middleware chain before reaching the reducers. Middleware can inspect, modify, delay, or even halt the action.
    # Redux store doesn't know anything about async logic. It only knows how to synchronously dispatch actions, update the state and notify the UI that something has changed. Any asynchronicity has to happen outside the store.
    # But, what if you want to have async logic interact with the store by dispatching actions, checking the current store state, or perform some kind of side effects? That's where Redux middleware come in. Redux middleware is used to 
        # Execute extra logic when any action is dispatched (such as logging the action and state)
        # Pause, modify, delay, replace, or halt dispatched actions
        # Write extra code that has access to dispatch and getState
        # Teach dispatch how to accept other values besides plain action objects, such as functions and promises, by intercepting them and dispatching real action objects instead
        # Write code that uses async logic or other side effects
    # There are many kinds of async middleware for Redux, and each lets you write your logic using different syntax. The most common async middleware is redux-thunk, which lets you write plain functions that may contain async logic directly. Redux Toolkit's configureStore function automatically sets up the thunk middleware by default.
        # Normally, Redux expects action creators to return plain objects (i.e., actions) that have a type and possibly a payload.
        # With redux-thunk, an action creator can return a function (thunk) that receives the dispatch and getState functions as arguments. Inside this function, you can perform asynchronous tasks and automatically dispatch different actions depending on the outcome.
    # Structure of a Middleware:
        const exampleMiddleware = (storeAPI) => (next) => (action) => {
            // Middleware logic here
        };
            # storeAPI: An object with the dispatch and getState methods of the Redux store.
            # next: A function that calls the next middleware in the chain, or the reducer if there are no more middleware.
            # action: The action being dispatched.
# Async Thunk Functions:   
    # What is a "Thunk"? The word "thunk" is a programming term that means "a piece of code that does some delayed work".
    # Definition for a redux-thunk: It is a middleware for Redux that allows you to write action creators that return a function instead of an action object. This function can then be used to perform asynchronous operations, like making API requests or delaying dispatches, and it can dispatch multiple actions as needed.
    # 'createAsyncThunk' is a utility function provided by RTK that simplifies the process of handling asynchronous logic.
    # It is designed to handle three key aspects of an asynchronous operation
        # 1. It automatically dispatches actions corresponding to the different states of the asynchronous operation (pending, fulfilled, and rejected).
        # 2. It allows you to define and execute side effects like API calls, fetching data, etc.
        # 3. It works seamlessly with RTK’s createSlice to handle state changes based on the outcome of the async operation.
    # createAsyncThunk returns a thunk function that has to be dispatched manually by us. That is to initiate the asynchronous operation, we need to dispatch this thunk function. Once dispatched, this thunk function will be intercepted by the redux-thunk middleware which automatically executes this thunk function and during this executuion the middleware automatically manages and dispatches three actions corresponding to the different stages of the promise lifecycle.
    # Syntax: 
        const fetchUserById = createAsyncThunk(
            'users/fetchById',  // Action type prefix
            async (userId, thunkAPI) => {
                const response = await userAPI.fetchById(userId);
                return response.data;  // Return the result or throw an error
            }
        );
    # Parameters:
        # Action type prefix can be literally be any string. But by convention we name it in such a way that defines the action.
            # But based on what you have named, action type for each of the stage will named.
            # fetchUserById/pending fetchUserById/fulfilled and fetchUserById/rejected
        # Payload Creator: 
            # The second argument is an async function that contains the side-effect logic (e.g., fetching data from an API). 
            # This function returns a promise that resolves with the data to be added to the state or rejects with an error.
    # Making use of promise's lifecycle:
        # When the request is made, promise's state will be 'pending'. We can use 'pending' to say that "if the type is pending, then change the state of "isLoading: true"
        # When it successfully fetches the data, it will dispatch another action with type called 'fulfilled'. Based on this we can say that the state changes and will update "isLoading:false". We will also udpate the data with new values.
        # If failed, exactly same process where isLoading will be true. Here the dispatched action with type is called 'rejected' But data will be not changed (since no data is received). Hence data will still have the old value. But error will be updated from null to error object.
    # We know that an action object has two properties. One is type and other is the payload. However, when using createAsyncThunk from @reduxjs/toolkit for handling async operations, the generated actions can have additional properties, including error and meta.
    # 'response.data' will return the data if the request is fulfilled or will return an error if the request is rejected. This result will be automatically assigned to the payload property of createAsyncThunk() if successful or will be assigned to the error property of createAsyncThunk() if the request is failed. 
    # On the other hand, the first argument of createAsyncThunk() will be assigned to the type property of the thunk function as follows. (functionName.promiseState)
        1. fetchUsers.pending is equivalent to 'users/fetch/pending'
        2. fetchUsers.fulfilled is equivalent to 'users/fetch/fulfilled'
        3. fetchUsers.rejected is equivalent to 'users/fetch/rejected'
    # Now in extraReducers, we can simply use fetchUsers.pending rather than users/fetch/pending.
# RTK Query vs. Traditional Redux
    # Traditional Redux:
        # Managing server-side data involves setting up actions, reducers, thunks, and manually handling loading states, caching, and synchronization.
        # Complex and error-prone, especially in larger applications with many data dependencies.
    # RTK Query:
        # Abstracts much of the boilerplate by automatically generating actions and reducers.
        # Simplifies data fetching, caching, and synchronization with minimal code.
        # Provides powerful tools for handling complex scenarios like optimistic updates, custom queries, and cache invalidation.
# RTK Query:
    # RTK Query is a powerful data-fetching and caching tool included in Redux Toolkit (RTK). It simplifies managing server-side data and integrating it into your Redux store, addressing many common issues like caching, synchronization, and re-fetching.
    # It revolves around defining an API service that handles your data-fetching logic. This is done using the "createApi" function, where you describe the endpoints (i.e., the operations like fetching data, posting data, etc.) and their associated logic.
    # When we create an async operation using createAsyncThunk, you manually dispatch the thunk function to initiate the operation. But RTK Query simplifies the process by handling the dispatching of async actions for us.
# RTK Query - The Mindset shift
    # RTK core APIs do not change any of the basic data flow in a Redux app. We are still dispatching actions and writing reducers, just with less code than writing all of that logic by hand. RTK Query is the same way. It's an additional level of abstraction, but internally it's still doing the exact same steps we've already seen for managing async requests and their responses - using thunks to run async requests, dispatching actions with the results, and handling the actions in reducers to cache the data.
    # However, when we use RTK Query, there is a mindset shift that happens. We're no longer thinking about "managing state" per se. Instead, we now think about "managing cached data". Rather than trying to write reducers ourselves, we're now going to focus on defining "where is this data coming from?", "how should this update be sent?", "when should this cached data be re-fetched?", and "how should the cached data be updated?". How that data gets fetched, stored, and retrieved becomes implementation details we no longer have to worry about. 
# Requests handling by RTK Query:
    # Whenever you call a hook (given by RTK), a request is sent. 
        # Example: const { data, isError, isFetching } = useFetchAlbumsQuery(user); Here when useFetchAlbumsQuery is called, a reuquest has been sent.
    # When you call a query hook like useFetchAlbumsQuery, RTK Query checks its 'internal cache' to see if the data for this specific query has already been fetched and stored. This internal cache has something called 'Cache Key'. 
    # Cache key:
        # RTK Query generates a unique cache key based on the query endpoint and any parameters passed to the query.
            # Example: If you call useFetchAlbumsQuery({ userId: 1 }), the cache key might look something like fetchAlbums({ userId: 1 }).
    # Cache Check:
        # RTK Query checks if this cache key exists in its internal store.
        # If the data is present and hasn't expired, it skips the network request and returns the cached data directly.
        # If the data isn't present or is considered stale, RTK Query proceeds to make a network request.
    # Lets say the cache key is not present. Now, RTK Query dispatches a series of actions to manage the lifecycle of the request, similar to how createAsyncThunk works with pending, fulfilled, and rejected actions.
        # Example: When useFetchAlbumsQuery is invoked, it dispatches a fetchAlbums/pending action. 
    # RTK Query uses fetchBaseQuery or a custom baseQuery function to perform the actual network request. This query is executed, and the response is returned.
    # The result of the query is then stored in the cache under the unique cache key.
    # Now, A fetchAlbums/fulfilled action is dispatched with the result, updating the Redux state with the fetched data.
# About cache: 
    # Cache are like a small memory bank where RTK Query stores the results of API calls. This is like a mini-database inside our application.
    # How it works:?
        Initial Fetch: When we make a request to fetch data (like getting a list of albums), RTK Query sends the request to the server and then stores the response data in its cache.
        Reading Data: When our components need to use this data, they read from the cache. This makes your app faster and reduces unnecessary server load.
        Updating Data: When we perform a mutation (like adding a new album), RTK Query sends the request to the server. Once the server confirms that the mutation was successful, RTK Query updates the relevant data in its cache with the new information. We then use the function returned by mutation hook to update the state in client side from the data in cache. 
        Automatic Re-render: Because our components read data from the cache, they automatically re-render to show the new data when the cache is updated.
    # So, the main purpose of the cache is to help our app manage server data more efficiently. It keeps track of what data our app has already fetched, so it doesn’t need to re-fetch the same data unnecessarily. And when data changes, it updates the cache so your components always has the most up-to-date data.
# createApi:
It takes a single configuration object as its argument and generates a set of Redux slices, actions, reducers, and middleware that handles data-fetching and caching for us. This object contains several key properties that define how our API service operates. We will look at some of the important properties.
    1. reducerPath (Optional): 
        # Type: string
        # Purpose: 
            # This defines where all the state's for our API will be stored in the Redux store. 
            # This is like the name for the slice (the slice which is automatically created by the createApi). By convention the name is same as the Api path itself. 
    2. baseQuery (Required)
        # Type: Function
        # Purpose: 
            # It is a function that RTK Query uses to handle the network requests for each endpoint defined in your API slice. 
            # RTK Query includes a built-in fetchBaseQuery, which is a lightweight wrapper around the native fetch API. 
            # It is configured with a baseUrl of /api. So we need to just provide the baseUrl. 
            # It can also take another argument known as 'fetchFn' with which we can further customise the predefined config based on our need.
            # Note: We have been using axios to manage the requests. But RTK uses 'fetch' under the hood which is built inside the browser.
    3. endpoints (Required)
        # Type: Function
        # Purpose: 
            # Defines the different operations (queries and mutations) that can be performed by our API service. 
            # This function receives a builder object, which provides methods for defining queries and mutations.
            # Using endpoints we tell the RTKQ how to make each request. They determine how data is fetched, cached, and managed.
            # There are two basic endpoint types: query and mutation.
            # Difference between query and mutation
                # Query: 
                    # These are used for requests that retrieve data. 
                    # They return an object with several properties representing the most recent information for the query request and status booleans for the request’s lifecycle state.
                    # They run immediately when the component will be updated on the screen.
                    # Important properties of Query Endpoints:
                        # 1. query: It is a function that accepts information which has been obtained due to user-event and returns an object with properties like url, params, method, body, etc.
                        # 2. providesTags: It is a function that accepts result (the query result), error (any error that occurred), arg (the original query argument) and returns an array of tags associated with the query result.
                # Mutation: 
                    # They are used to send data updates to the server and apply the changes to the local cache
                    # They do not contain a semantic distinction between ‘loading’ and ‘fetching’ in the way that a query does. 
                    # For a mutation, subsequent calls are not assumed to be necessarily related, so a mutation is either ‘loading’ or ‘not loading’, with no concept of 're-fetching’.
                    # This is why mutation just adds/deletes content to/from the server. But the content is not automatically updated in our redux store.
                    # Now we can update the list of albums in 2 ways:
                        1. Return the response from the server after mutating and use that response to update the redux store.
                        2. After creating a new album, make a second request to get the list of all albums.
                    # Important properties of Mutation Endpoints:
                        # 1. query: Similar. 
                        # 2. invalidatesTags: Similar. It is a function that returns an array of tags that should be invalidated after the mutation.
            # To create an endPoint we have ask the following questions. 
# ![Alt text](endpoints.png)
    |-------------------|-------------------|----------------|-----------------|    
    |what's the goal    |fetch list of album|create an album | remove an album |
    |-------------------|-------------------|----------------|-----------------|
    |simplified name    |fetchAlbums        |createAlbum     | Remove an album |
    |-------------------|-------------------|----------------|-----------------|
    |query or mutation  |query              |mutation        | mutation        |
    |-------------------|-------------------|----------------|-----------------|
    |path of the request|                   |                |                 |
    |relative to the URL|/albums            |/albums         | /albums/usersId | 
    |-------------------|-------------------|----------------|-----------------|
    |what's the query   |                   |                |                 |
    |string?            |?userid = userId   |NA              | NA              |
    |-------------------|-------------------|----------------|-----------------|
    |method of request  |GET                |POST            | DELETE          |
    |-------------------|-------------------|----------------|-----------------|
    |body               |NA                 |{title, userId} | NA              |
    |-------------------|-------------------|----------------|-----------------|
            # When we create an API, we get back a slice, thunks, action creators and then set of automatcially generated hooks. From the image, we have given a simplified name called 'fetchAlbums'. This gives us the hook called 'useFetchAlbumsQuery()'
    4. tagTypes (Optional)
        # Type: String/Object/Array of Strings/Objects
        # Purpose: Defines a list of tags that can be used in providesTags and invalidatesTags. In RTK Query, tags play a crucial role in managing cached data and controlling when requests are made or skipped.
        # Syntax: 
            providesTags: (result, error, arg) => {
                const tags = result.map((data) => {
                    return { type: 'dataName', id: data.id };
                });
                return tags;
            }
            # result: The data returned from the query/mutation.
            # error: Any error that occurred during the query/mutation
            # arg: The argument passed into the query/mutation (During the invocation of hook)
            # type: This is a string that categorizes the tag (a label for the type of data).
            # id: This uniquely identifies the tag, usually corresponding to the unique identifier of the data item (e.g., data.id).
        # Working: 
            # When we are using query endpoint, our requests job us to be fetch the data. We are basically displaying the result of what we have fetched. On the other hand when we are using mutation endpoint, our requests primary job is to mutate the data in the server. One mutated there is a 'data out of sync' issue between client and the server. Because client has old data while server as the newly mutated data. The simple way to overcome this is to update the client side using the response that we will get from the server. But there are few things to consider here.  
                # Imagine a situation where you want to show the list of albums sorted by publish date. Now when you fetch the response from the server where will it be added? Wherver it is added, the list is not sorted now. To overcome this we can definitely apply sorting algorithm after that. But applying sorting everytime after we add/delete an album is certainly not the efficient way and it becomes even more complicated when you have multiple pages in the app.
            # So rather then updating the client based on the response that we have got, we can refetch the entire data form the server which will also contain the updated data. For this we have to make a second request apart from the first mutation request. This second request will be a query request. We are not going to manually make that. This is where tag system comes into picture. 
                # Tags are labels that you assign to specific pieces of data fetched or modified by RTK Query. These tags help RTK Query track which cached data is associated with which requests.
                # When you fetch data using a query, you can specify 'providesTags' that describe the fetched data. These tags are attached to the cached result of that query.
                    # Example: When you fetch a list of albums for a user, you might assign tags like ['Album', { type: 'UsersAlbums', id: user.id }]. This tells RTK Query that this cached data is associated with these tags.
                # When you mutate (create, update, delete) data, you can specify tags that should be invalidated (i.e., marked as stale).
                    # Example: If you delete an album, you might invalidate the tag associated with that album, like [{ type: 'Album', id: album.id }].
                # So why? You are providing a tag while fetching and inavalidating a tag while mutating. Whats the point?
                    # We know that RTK Query caches the results of our queries to avoid unnecessary network requests right?. Since we have provided tags while fetching, this cached data is linked to these tags.
                    # So when we invalidate the tags while mutating, the data associated with those tags are also invalidated/expired. Once the data expires, RTK Query will treat it as stale and will refetch the entire data associated with that tag automatically and then updates the cache with the new data.
                # Multiple tags: If there are multiple tags associated with a single data, invalidation of any one of the tags will lead to expiration of all the data and RTK Query will refetch all of them.
    5. keepUnusedDataFor (Optional)
        # Type: number (seconds)
        # Purpose: Specifies how long unused cached data (data not currently being used in any active component) should be kept in the cache before being garbage collected. Default value is 60 seconds.
    6. refetchOnMountOrArgChange (Optional)
        # Type: boolean | number
        # Purpose: Determines if the query should refetch when the component mounts or when the query arguments change. Default value is false.
    7. refetchOnFocus and refetchOnReconnect (Optional)
        # Type: boolean
        # Purpose: Controls whether queries should be refetched when the browser window regains focus or when the device reconnects to the network. Default value is false.
When you call createApi, it returns an object that includes various properties and methods you can use to interact with your API service.
    # 1. reducerPath: The key where the API’s reducer will be stored in the Redux state.
    # 2. reducer: It is generated by createApi that we need to add to your Redux store. This reducer manages the state of all queries and mutations defined in the API service.
    # 3. middleware: It handles the lifecycle of queries and mutations
    # 4. endpoints: Contains all the endpoints defined in the endpoints configuration.
    # 5. useQuery, useMutation, and Other Auto-Generated Hooks: These will handle data fetching, caching, and updating automatically.
Syntax:
    import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    const api = createApi({

        reducerPath: 'api',  // Optional: The slice name in the Redux store

        baseQuery: fetchBaseQuery({
            baseUrl: '',      // Optional: The base URL for all requests
            prepareHeaders: (headers, { getState }) => {
            // Optional: Add headers to requests
            return headers;
            },
            fetchFn: (input, init) => fetch(input, init),  // Optional: Custom fetch function
            paramsSerializer: (params) => { // Optional: Function to serialize query parameters
            return new URLSearchParams(params).toString();
            },
        }),

        tagTypes: ['Tag1', 'Tag2'],  // Optional: Define tag types for caching/invalidating

        endpoints: (builder) => ({
            queryName: builder.query({
                query: (arg) => ({
                    url: '',         // Required: URL for the request
                    method: 'GET',   // Optional: HTTP method
                    headers: {},     // Optional: Additional headers
                    params: {},      // Optional: Query parameters
                    body: {},        // Optional: Request body
                }),
                transformResponse: (response, meta, arg) => response,  // Optional: Transform the response
                providesTags: (result, error, arg) => [],  // Optional: Provides cache tags
                onCacheEntryAdded: async (arg, { cacheDataLoaded, cacheEntryRemoved, dispatch }) => {
                    // Optional: Handle when the cache entry is added
                },
            }),

            mutationName: builder.mutation({
                query: (arg) => ({
                    url: '',         // Required: URL for the request
                    method: 'POST',  // Optional: HTTP method
                    headers: {},     // Optional: Additional headers
                    body: {},        // Optional: Request body
                }),
                transformResponse: (response, meta, arg) => response,  // Optional: Transform the response
                invalidatesTags: (result, error, arg) => [],  // Optional: Invalidate cache tags
                onCacheEntryAdded: async (arg, { cacheDataLoaded, cacheEntryRemoved, dispatch }) => {
                    // Optional: Handle when the cache entry is added
                },
            }),
        }),

        extractRehydrationInfo: (action, { reducerPath }) => {   // Optional: Rehydrate from external store
            return action.payload?.[reducerPath];
        },

        refetchOnMountOrArgChange: false,  // Optional: Refetch on mount or argument change
        refetchOnFocus: false,             // Optional: Refetch on window focus
        refetchOnReconnect: false,         // Optional: Refetch on network reconnect

        keepUnusedDataFor: 60,  // Optional: Time (in seconds) to keep unused data in cache
        refetchOnReconnect: true,  // Optional: Enable/disable refetch on reconnect

        serializeQueryArgs: ({ endpointName, queryArgs }) => {
            // Optional: Custom function to serialize query arguments
            return JSON.stringify(queryArgs);
        },

        merge: (currentCacheData, incomingCacheData) => {
            // Optional: Custom function to merge cache data
            return incomingCacheData;
        },

        transformErrorResponse: (response, meta, arg) => {
            // Optional: Transform the error response before returning
            return response;
        },

        baseQueryMeta: (args, api) => {
            // Optional: Provide additional metadata to queries
        },

        endpointDefinitions: {},  // Optional: Manually define endpoints
    });

    export default api;
Export all of the automatically generated hooks. Now that we have defined our Api, this needs to be connected to the store. We also know that slice is automatically created and slice will have a combined reducer. This combined reducer is used to connect to the reducers under configurstore. 
# Custom middlware property:
    # Unlike redux-thunk (default middleware) that is automatically created and inherently part of the store, custom middleware is automatically generated by the RTK Query based on the configuration of createApi but must be manually added to the store.
        # Just know that 'getDefaultMiddleware' is a function provided by Redux Toolkit that returns an array of default middleware that comes with Redux Toolkit.
    # Middleware in Redux are applied in a chain, meaning that each middleware can perform its logic and then pass control to the next middleware in the chain.
    # Aslo, Middleware are processed in the order they are listed and they conacatenated together.
        # The concat method is used to concatenate the default middleware array with additional custom middlewares.
    # MOST IMPORTANT THINK TO UNDERSTAND: 
        # In Express.js, we know that from one middleware to moves to the next middleware with same route. But in redux it is quite different. The control moves through all the middlewares in the chain. 
        # Here each middleware in the chain gets the opportunity to inspect, modify, or even stop the action before it reaches the reducer.
        # If a middleware decides not to stop the action, it will pass the action to the next middleware in the chain by calling next(action).
    # Flow:
        # We make a request to "http://localhost:3005/users" using createAsyncThunk in fetchUsers/addUsers/removeUsers. Redux-thunk middleware will receive this and process the async request and eventually dispatches the appropriate action (pending, fulfilled, or rejected). It then passes the control to th next midlleware. 
        # But both albumsApi and photosApi deal with actions related to their specific queries or mutations.  Since fetchUsers/addUsers/removeUsers are not part of those APIs, they pass the action along without modifying it.
        # Appropriate dispatch action reaches the reducer where the state will be updated.
# setUpListeners
    # setupListeners is a utility function that helps our application respond to certain events, specifically changes in focus or connectivity.
        # Refetch on Focus: When a user switches away from a tab in a browser, the tab goes out of focus. When they return, the tab comes back into focus. In some applications, we might want to refresh the data when the user comes back, to ensure they’re seeing the most up-to-date information. That’s what refetchOnFocus does.
        # Refetch on Reconnect: Similarly, if a user’s device loses its internet connection and then regains it, we might want to refetch any data that could have been updated while the device was offline. That’s what refetchOnReconnect does.
    # setupListeners sets up the necessary event listeners to handle these situations. It’s part of the setup process because these listeners need to be in place for these features to work.
# Redux Store design
  1. Identify what state exists in the app
  2. Identify how that state changes over time
  3. Group together common pieces of state
  4. create a slice for each group
When you look at the above steps, doesn't it ring a bell? It is similar to general state creation process. Exactly it is. Execpt that we are trying to have one central state from which we will manage all the other mini-states.
# "Do you always have to put all your app's state into the Redux store?"
    The answer is NO. Global state that is needed across the app should go in the Redux store. State that's only needed in one place should be kept in component state.
# Principles to follow:
    # Any component can read any data that is in the Redux store
    # Multiple components can read the same data, even at the same time
    # Components should extract the smallest amount of data they need to render themselves
    # Any component can dispatch actions to cause state updates
    # Reducers can contain whatever logic is needed to calculate the next state but Action objects should contain just enough info to describe what happened
    # Apps should normally only dispatch one action at a time
    # Case reducer names (and actions) should typically be named past-tense, like postAdded
    # State values can be reset by returning a new value from the case reducer as a replacement, instead of mutating the existing state

# Testing in React:
    # Types:
        # 1. Manual testing
        # 2. Automation testing (Selenium)
    # Categories:
        # 1. Unit testing - How an individual components work
        # 2. Integration testing - How integrated components work
NOTE: There are many other categories. Unit and Integration fall under functional testing. 
    # Testing library: It provides a family of packages to test UI components. It Provides different library for React, Angular, Vue, etc.
        # So we will be using React testing library.
    # jest: It is a JS testing framework. React testing library uses jest behind the scenes.
    # Installation: 
        # npm i -D @testing-library/react @testing-library/dom
        # npm i -D jest jest-environment-jsdom
    # configuring jest: npx jest --init and enter the following options
        # no, jsdom, yes, babel and yes
        # Now, jest.config.js file will be created
    # babel for jest and react
        # Actually with parcel babel comes along with it as a part of bundler. But of you want to use it for jest, then you have to install it as follows.
        # Why jest needs babel? Jest runs in a Node.js environment, which doesn’t natively understand modern JS features like JSX, ES6 modules, or other syntax that browsers can handle after being transpiled by Babel. 
        # To install babel for jest, 
            # npm i -D babel-jest @babel/core @babel/preset-env
        # To install babel for react,
            # npm i -D @babel/preset-react 
        # After installing, create babel.config.js (or) .babelrc file  and config them accordingly.
    # Create the test files and to test them execute the following environment.
        # npm run test
        # Testing is not happening in the browser. It is done in JSDOM which is a JavaScript-based headless browser. 
            # That is it provides a simulation of a web browser's environment but not an actual web browser.
            # It allows you to create and manipulate a virtual DOM (Document Object Model) in Node.js, which is particularly useful for testing and server-side rendering purposes.
# Creating test file:
    # Inside component folder (it can be anywhere,  but we are trying to organize them under components), create another folder with name "__tests__"
    # This is the folder within which it will check for testing code. 
    # Convention for test file names - fileName.test.js 
    # In test file you will us repeating some part of the code like importing store and and provider. That is again because in our components we have provided them to our browsers dom but for jsdom we haven't provided yet.
    # Note: Testing libraries cannot read media files. So in the place of media files we create a mocking file which is a dummy js file. These files are placed under mocks folder.
    # Also you have to configure consfig.jest.js file to accept the mock file. 
        # moduleNameMapper: {
            "\\.(jpg|png|svg)$":"../mocks/dummyLogo.js",
          },
