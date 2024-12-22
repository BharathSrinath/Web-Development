// Lets understand basics of sorting
// To sort numbers, data.sort(a,b) => return (a - b) for ascending and return (b - a) for descending where data is the array of numbers.
// To sort strings, data.sort(a,b) => return a.localeCompare(b) for ascending and return b.localeCompare(a) for descending
// To sort objects, (by ascending order) we need a function which just returns the property based on which the sorting will take place. 
  // function functionName(objectName){
    // return objectName.property 
  // }
  // data.sort ((a,b) => {
    // const variable1 = functionName(a)
    // const variable2 = functionName(b)
      // if (typeof variable1 === 'string'){
        // return varibale1.localeCompare(variable2)
        // If the object is a string, we use localeCompare
      // }
      // else{
        // return variable1 - variable2
        // If the object is a number, we simply use an arithmetic operator
      // }
  // })

import { useState } from 'react';

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  // This keeps track of the sort order - 'asc', 'desc' or null (unsorted)
  const [sortBy, setSortBy] = useState(null);
  // This keeps track of which column we are sorting by. (by which property we are sorting by)
  // With respect to this project, the values are null (no sorting or that column is not sortable), 'Name' and 'Score'

  const setSortColumn = (label) => {
    if (sortBy && label !== sortBy) {
      // We know the cycle right? unsorted-ascending-descending-unsorted.
      // But lets imagine a situation where you are in the middle of a cycle and clicked completely a different to sort.
      // Without this 'if', the cycle will just continue for the next column that you have clicked. For an example, if the user has clicked column-1 2 times, then it is in descending order. Now if the user has clicked column-3, it will be unsorted. But this piece of code will restart the cycle from ascending when the column has changed.

      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    // This is where we are keeping track of the sort order. The cycle of unsorted to ascending to descending to unsorted.
    // If the existing sort order is null (unsorted), we will sort it to ascending. 
    // If the existing sort order is ascending, we will sort it to descending. 
    // If the existing sort order is descending, we will sort it to null (unsorted). 
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // Only sort data if sortOrder && sortBy are not null
  // Make a copy of the 'data' prop (In the initial example (comments at the top), sort() modifies the values directly. In react we can't do that)
  // Find the correct sortValue function and use it for sorting
  let sortedData = data;
  if (sortOrder && sortBy) {
    // Condition is true only when sortOrder && sortBy are not null 
    const { sortValue } = config.find((column) => column.label === sortBy);
    // This is the code that helps us to identify by which column the user is sorting.
    // sortBy will have a value based on the above if-else conditions
    // The right side part of the code actually gives the entire object. But what we want is just the sortValue property. Hence we are using destructuring to obtain that directly. 
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;
      // If the sortOrder is null, it won't even enter the 'if'

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn,
  };
}

export default useSort;


// How to create a proper custom hook?
// 1. Make a function called useSomething
// 2. Find all the non-JSX functions that refer to 1 or 2 related pieces fo State
// 3. Cut and paste them in useSomething
// 4. Find 'not defined' errors in our component
// 5. In custom hook, return an object that contains the variables the component needs
// 6. In the component, call the custom hook. Destructure the properties that are needed
// 7. Find 'not defined' errors in our custom hook. Pass the missing variables in as arguments to the hook
// 8. Rename the hook to something more meaningful
// 9. Rename returned properties to something more descriptive