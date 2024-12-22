// About1, UserClass1 and UserClass2 are not related to this project. They Exist just to give better understanding about class based components.

import React from "react";
// import UserClass1 from "./UserClass1";
// import UserClass2 from "./UserClass2";

class About1 extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
    // Create State
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
  }

  // useEffect replaces componentDidMount, componentDidUpdate, and componentWillUnmount.
  componentDidMount() {
    console.log("Parent Did Mount");
    this.timer = setInterval(() => {
      console.log("NAMASTE REACT OP ");
    }, 1000);
  }
  // It is similar to useEffect hook with empty dependency array. It is invoked once after the component renders.
  // Unlike useEffect there is no dependency management in 'componentDidMount' and it runs only once after mounting. It does not re-run on state or prop changes
  // UseEffect has inbuilt(optional) cleanup function. But Cleanup is handled in 'componentWillUnmount'.
  // Also only one componentDidMount method per component can be used. But we can have multiple useEffects.
  componentDidUpdate() {
    console.log("Component did Update");
    if (this.state.count !== prevState.count) {
      //
    }
    if (this.state.count2 !== prevState.count2) {
      // code
    }
    // It is similar to useEffect hook with a dependency array
    // We have to use if-else statements for different changes. If a prop changes we have to perform 'x' and if a state changes we have to perform 'y'. Whereas with useEffect we can have multiple useEffects for each change.
    // componentDidUpdate has access to prevProps and prevState in its arguments. So we have to compare them as if (prevProps.id !== this.props.id) { fetchData(); }. Whereas in useEffect, Whenever any component in the dependency array changes, useEffect() will be invoked again eliminating the need for if-else statements.
  }
  componentWillUnmount() {
    console.log("Component Unmounted");
    clearInterval(this.timer);
    // It is similar to useEffect hook's cleanUp function
    // Lets say you have a setInterval in componentDidMount. It is going to go forever without clearInterval. We want to clear that only when user goes to some other component. (Like from about page to contact page).
    // If the timer is in about page and the user clicks on contact page, the componentWillUnmount will be invoked.
    // So, it is here where we have to call the clearInterval function.
  }
  render() {
    console.log("Parent renders");
    return (
      <div>
        {/* <UserClass1 name="First"/>
                <UserClass1 name="Second"/>
                <UserClass2 name="Third"/> */}
        <h1> Profile Class Component </h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default About1;

// Class based components:
// A normal JS class that extends React.component is a 'class component'
// Unlike functional components where the arguments are received as functional parameters, in class components they are received using a constructor.'
// Also, the super() function refers to the constructor of the parent class (React.Component).
// In a derived class, the constructor cannot access this until super() has been called. This is because the parent class needs to be initialized before you can use this in the child class.
// Finally the entire logic is written within render method.
// We dont have hooks in class components. Rather state method will be called within the constructor to declare state variables. And based on the variable name, a setter function is automatically created by capitalizing the first letter of the variable name and prefixing it with the word 'set'. This function accepts an object within which you can sepcify the updated value of the state variable.

// Liefecycle of class components: There are 3 stages - Mounting, Updating and UnMounting and each of them undergoes 2 phases - Render and Commit.
// For Diagram - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// 1. Mounting:
// Render Phase
// Order of execution:
// Parent constructor
// Parent renders
// Child1 constructor
// Child1 renders
// Child2 constructor
// Child2 renders
// Childn constructor
// Childn renders
// Following doesn't happen in Render phase (happens in commit phase)
// Child1 ComponentDidMount
// Child2 ComponentDidMount
// Childn ComponentDidMount
// Parent ComponentDidMount
// Why ComponentDidMount is not immediately invoked after the render() of a particular component?
// This is where react optimisation comes in.
// DOM manipulation is the most costliest operation.  So React will minimize the number of DOM updates by batching updates together. That is it will render the component and puts hold on update until all the children of a parent is rendered.
// The reconcilliation process of comparing the previous virtual DOM with current virtual DOm will keep happening without actual DOM updates until all of the children are updated.
// Commit phase:
// This is where actual DOM update happens. All the changes will be updated in a single change.
// The componentDidMount lifecycle method is called during this phase, after the DOM has been updated with the initial render.
// 2. Updating:
// Render Phase:
// Now any code inside componentDidMount (say an API call) will be executed.
// Using the data that we have obtained from this call, we will set the new state using setter funciton of the state variable.
// If the state/props are updated we know what happens right? Yes. The component re-renders by calling the render().
// Commit Phase:
// Since the componentDidMount can run only once, its part is over. Now react will directly update the DOM and call a method called 'componentDidUpdate'.
// Now in every re-render 'componentDidUpdate' will be called after updating the DOM.
// 3. Unmounting: There is no render phase. Only commit phase where react removes the component from the DOM. Here we can have cleanUp logic.

// componentDidMount vs componentDidUpdate vs componentWillUnmount
// |------------------|----------------------|-----------------------|---------------------------|
// | Aspect           |componentDidMount     |componentDidUpdate     | componentWillUnmount      |
// |------------------|----------------------|-----------------------|---------------------------|
// | Invocation Time  |After the component   |After the component    |Before the component is    |
// |                  |is mounted (added     |updates due to a change|unmounted and destroyed    |
// |                  |to the DOM)           |in state or props      |from the DOM               |
// |------------------|----------------------|-----------------------|---------------------------|
// | Use Case         |Setting up initial ,  |Performing operations  |Cleaning up resources like |
// |                  |data starting network |based on previous state|timers, subscriptions, or  |
// |                  |requests or           |or props, managing side|network requests to prevent|
// |                  |subscriptions         |effects                |memory leaks               |
// |------------------|----------------------|-----------------------|---------------------------|
// |Common Operations |Fetching initial data |Comparing current and  |Removing event listeners   |
// |                  |Setting up event      |previous props or state|Cancelling network requests|
// |                  |listeners             |Triggering additional  |Clearing intervals or      |
// |                  |DOM manipulation      |side effects or        |timers                     |
// |                  |                      |re-renders             |                           |
// |------------------|----------------------|-----------------------|---------------------------|
// |Runs During       |Initial render        |Re-renders after state |Before component is removed|
// |                  |                      |or props update        |from the DOM               |
// |------------------|----------------------|-----------------------|---------------------------|
// |Key Consideration |Only runs once, after |Can lead to an infinite|Must handle cleanup to     |
// |                  |the initial render    |loop if not handled    |avoid memory leaks or      |
// |                  |                      |carefully              |unexpected behavior        |
// |------------------|----------------------|-----------------------|---------------------------|

// Understanding cleanUp logic: The disadvantage of SPA
// 1. Traditional Multipage Applications: Navigating between pages involves a full page reload. When you move from one page to another, the browser unloads the current page and its associated JavaScript, styles, and DOM elements, then loads the new page. Since the entire page is destroyed and recreated on each navigation, there's usually no need for cleanup logic because the browser itself clears everything out automatically, including any event listeners, timers, or subscriptions.
// 2. Single Page Applications (SPAs): Navigation between different "pages" or "views" doesn't involve a full reload. Instead, the app dynamically replaces parts of the DOM to display new content while keeping the JavaScript environment running. Components in an SPA are mounted and unmounted as users navigate between views. However, because the JavaScript environment stays active, resources like event listeners, timers, or subscriptions attached to components don't automatically get cleaned up.

// Things to cleanUp (Just know it):
// Event Listeners
// Timers
// Subscriptions
// WebSocket Connections
// Network Requests (AbortController)
// Animations
// External Library Effects
// DOM References (if manipulated manually)
// Custom Hooks with Side Effects
// Asynchronous Operations
// History Listener (if using history API)
// Resize or Scroll Observers
// useEffect Return Functions from Child Components
