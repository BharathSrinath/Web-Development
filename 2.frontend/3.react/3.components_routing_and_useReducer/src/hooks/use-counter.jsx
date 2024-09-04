// This section is commented out because we used 'useReducer' hook in the counterPage. So we deleted the custom hook in counterPage and out and out wrote a code that makes use of 'useCounter'  

// import { useState, useEffect } from 'react';

// function useCounter(initialCount) {
//   const [count, setCount] = useState(initialCount);

//   useEffect(() => {
//     console.log(count);
//   }, [count]);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return {
//     count,
//     increment,
//   };
// }

// export default useCounter;