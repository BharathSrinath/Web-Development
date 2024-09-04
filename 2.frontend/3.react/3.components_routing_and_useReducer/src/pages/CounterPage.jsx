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

import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

// Why are we assigning strings to variables?. Why cant we directly use the strings?
// We can. But when we make a typo in the strings (like while calling dispatch,  we typed 'increment' and within reducer we would have typed 'icnrement'. What will happen now? Tne state will not get updated.
// Okay but what if we make a typo in the variable name. Making a typo in the variable name will throw us an error. This makes it easy for us to debug where as in previous situation we woudn't exactly know what went wrong. 

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
      // Lets understand what should we be using as a defualt case. Two lines of thoughts in the community.
        // 1. Just return the state
        // 2. Return throw new error('unexpected action type' + action.type)
      // First line of thought is disagreed by many. Because when you fall into the defualt case itself says that there is fundamentally something wrong with the state updation. So we need to throw a error. 
      // So what to use depends on an individual developer and the project that he/she is working on. 
  }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  // state variables: count, valueToAdd 
  // setCount, seValueToAdd and dispatch are all functions to change the state 
  // initialCount, 0, {count: initialCount and ValueToAdd: 0} are all initial value of the state

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
    // We need to get the value as the user types. 
    // Also, JS returns the value as a string. So 'const value' will hold a string. But we need a number to perform the arithmetic oeprations
    // Hence we use parseInt to convert that to a number. But when the input field is empty, parseInt(empty field) will give us NaN. This will lead to issues. NaN is falsy. So we use a logical OR to make the value as 0 when parseInt returns a NaN. 

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

  // Note: Try to keep the logic under dispatch() as simple as possible. It will make much sense to you to write the entire logic under the reducer().

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

// Immer library
// We know that in react state variable should be immutable. So we always work with copy of the variable and then use that to update our state or use functional setter to update the variable.
// With Immer we can mutate the state. Unlike normal reducer() where we should return a value, here we need not necessarily return a value. Even if returned it is not going to be used. Immer takes care of it automatically. Lets look at the below example. (Dont't forget to npm install immer)

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

