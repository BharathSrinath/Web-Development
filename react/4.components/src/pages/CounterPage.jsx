// Without useReducer

// import { useState } from 'react';
// import Button from '../components/Button';
// import Panel from '../components/Panel';

// function CounterPage({ initialCount }) {
//   const [count, setCount] = useState(initialCount);
//   const [valueToAdd, setValueToAdd] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     setCount(count - 1);
//   };
//   const handleChange = (event) => {
//     const value = parseInt(event.target.value) || 0;

//     setValueToAdd(value);
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     setCount(count + valueToAdd);
//     setValueToAdd(0);
//   };

//   return (
//     <Panel className="m-3">
//       <h1 className="text-lg">Count is {count}</h1>
//       <div className="flex flex-row">
//         <Button onClick={increment}>Increment</Button>
//         <Button onClick={decrement}>Decrement</Button>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <label>Add a lot!</label>
//         <input
//           value={valueToAdd || ''}
//           onChange={handleChange}
//           type="number"
//           className="p-1 m-3 bg-gray-50 border border-gray-300"
//         />
//         <Button>Add it!</Button>
//       </form>
//     </Panel>
//   );
// }

// export default CounterPage;

// With useReducer
// useReducer is Similar to useState
// It is most likely that when we are working in a project, either useState will be made use of or useReducer will be made use of (not both as they have similar functionality)
// But useReducer is very useful in these two scenarios
  // When several different states are closely related
    // Imagine the arithmetic operations of a calcualtor.  
  // When future state values depend on the current state
// The ultimate purpose of useReducer is that when we huge number of states (imagine a large application), it becomes very confusing regarding 'what is changing what'. But with useReducer we have everyting in one place called dispatch(). It is using dispatch we pass action to the reducer. Hence it becomes easy to manage.
  // In technical terms, we have a central point for changing state
// Disadvantage: We have tell the reducer which action it needs to perform (Redux library will resolve this)

import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

// Why are we assigning strings to variables?. Why cant we directly use the strings?
// We can. But when we make a typo in the strings (like while calling dispatch,  we typed 'increment' and within reducer we would have used 'icnrement'. What will happen now? Tne state will not get updated.
// Okay but what if we make a typo in the variable name. Thats a good question. But making a typo in the variable name will throw us an error. This makes it easy for us to debug where is in previous situation we woudn't exactly know what went wrong. 

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0, // This will empty the input field after you press enter
      };
    default:
      return state;
      // Lets understand what should we using as a defualt case. Two lines of thoughts in the community.
        // 1. Just return the state
        // 2. Return throw new error('unexpected action type' + action.type)
      // First line of thought is simple right is disagreed by many. Because when you fall into the defualt case itself says that there is fundamentally something wrong with the state updation. So we need to throw a error. 
      // So what to use depends up on the developer and the project that he/she is working on. 
  }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);
  // count, valueToAdd and state are all state variable
  // setCount, seValueToAdd and dispatch are all functions to change the state 
  // initialCount, 0, {count: initialCount and ValueToAdd: 0} are all initial value of the state

  // As you can see, each piece of state is defined as a separate variable with respect to useState. But with respect to useReducer, all state for the whole component defined as in a single object.
  // With useState, we can see that count's initial value is 'initialCount' and valueToAdd's initial value is 0. Here state is a variable
  // With useReducer, state is assigned with different properties and the their values (count and valueToAdd) act as the initial values. Here state is an object.
    // Hence those values can be accessed as state.count and state.ValuetoAdd  
  // But guess what? Using state as an object is not limited to useReducer alone. Even useState can state as an object. But in general, useState is used for simple and straight-forward state updates. But the actual difference lies in the reducer(). Lets look in detail
  // Refer EOP for working of useReducer()

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    // We need to get the value as the user types it. 
    // Also, JS returns the value as a string. So 'const value' will hold a string. But we need a number to perform the arithmetic oeprations
    // Hence we use parseInt to convert that to a number. But we have an issue. When the input field is empty, parseInt(empty field) will give is NaN. This will also lead to issues. So if the firt statement is empty, we will take the next statement with the help of Logical OR. 

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  // Note: Try to keep the logic under dispatch() as simple as possible. It will much sense to you to stuff as much logic as possible under the reducer().

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          // Here when the valueToAdd is zero, we dont want the zero to be printed. Rather an empty string will be printed.
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;

// Working of useReducer(): Whenver disptach() is called, useReducer will find and execute the reducer().
  // Now the return value of reducer() will be the new value of udpated state. But when we return nothing, our new state will be undefined. 
    // In other words, we call dispatch anytime we want to update our state. 
  // In reducer(), first argument (state) refers to the current state and second argument (action (it is called as action by convention and not a hard requirement)) whose value is the argument that we pass into dispatch()
    // dispatch() can take just 1 argument or no arguments. Anything passed more than one will discarded.
    // To update the state, you dispatch actions using the dispatch function. An action is an object with a type property (and optionally, a payload for additional data).
  // We wont use async/await, requests, promises, outside variables, etc. with useReducer.
    // Reducers are expected to be synchronous functions that return a new state. 
    // When you use async/await in a reducer, the function will return a promise. This breaks the contract of a reducer, which should return the new state immediately.
    // So, React and Redux both expect reducers to be synchronous for the state updates to be predictable and manageable.
    // To handle asynchronous operations in a React component, the recommended approach is to use the useEffect hook along with async functions.
    // Also, the problem lies in the fact that state updates in React are batched, and when you rely on the current state to calculate the next state in an asynchronous context, you might not get the expected behavior.
  
// Issue with dispatch()
// dispatch() will be called for different purposes. How will reducer function know what to perform?  Because reducer() has access to only State and action where action is the argument provided by the dispatch. So we can come to a conclusion that dispatch cannot be empty. Even-though technically it is right and when we have only state that is to be updtated by the reducer, no argument makes sense. But with repect to real use-case scenario, a redcuer will be updating multiple states. So we have to pass an argument via dispatch to let the reducer know 'this is want you have to be doing'
// There are no hard and fast rules here. But we are following community conventions.
  // 1. Call dispatch from the function whose action needs to be performed. 
    // Example: If you want to increment count, call dispatch from increment()
  // 2. Inside the dispatch we will pass an argument called action argument (Actually this is called as action because this is the value that reducer()'s second argument takes which is also conventionally called as action)
  // 3. Action is an object that can have two properties where is second is generally considered optional => type: 'string' and payload: value
    // The 'type' property will always be a string. We will use this string to create a if conditions or switch statement with exactly same name as that of the string. This string tells the reducer() what state update it needs to make.
      // Example: if(action.type === 'increment count'), count + 1 
    // If we need to communicate some data to the reducer , it will be placed on the payload poperty of teh action object.

  // Note: Just keep in mind that these are all just community conventions and react doesn't treat those action object any differently.

// Immer library
// We know that in react state variable should be immutable. So we always copy the variable and then use that to update our state or using functional setter to update the variable.
// With Immer we can mutate the state. Unlike normal reducer() where we should return a value, here we need not necessarily return a value. Even if returned it is not going to be used. Immer take care of it automatically. Lets look at the below example. (Dont't forget to npm install immer)

// import {produce} from 'immer';

// const [state, dispatch] = useReducer(produce(reducer), {
  // We have to wrap the reducer with produce
//   count: initialCount,
//   valueToAdd: 0,
// });

// Now we can update the state directly without worrying about mutating
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case INCREMENT_COUNT:
  //       state.count = state.count + 1
  //       return;
  //     case DECREMENT_COUNT:
  //       state.count = state.count - 1
  //       return;
  //     case SET_VALUE_TO_ADD:
  //       state.valueToAdd = action.payload;
  //       return;
  //     case ADD_VALUE_TO_COUNT:
  //       state.count = state.count + state.valueToAdd;
  //       state.valueToAdd = 0;
  //       return;
  //     default:
  //       return;
  //   }
  // };

  // Note: Immer comes in default with redux. If we don't use redux, immer is not very common. So following the principle of react (like immutability) is very essential in non-redux projects.

