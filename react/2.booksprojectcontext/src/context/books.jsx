import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
  // Here, children denotes the App component 
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    // Look at EOP to learn about useCallback()
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  }, []);

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {/* The term provider used as a function name is not a key worrd. You can name it whatever you want. But in the above line it is a keyword  */}
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;

// Why there are two exports?
  // The Provider component is specifically exported as a named export. This is useful when you want to use the Provider component in another file but not necessarily the entire BooksContext object.
  // The BooksContext object, which includes both the Provider and Consumer, is exported as the default export. This is useful when you want to import the entire context object, including both the Provider and Consumer, in another file. 


// 3. useCallback()
// It will make react understand that callback function (fetchbooks()) is not actually changing overtime.
// Unlike other hooks, useCallback() doesn't add any new feature. Rather they are used to fix bugs around useEffect() and other similar situations.
// It is used to memoize (read it again. It is not memorize) a callback function. Memoization is a technique to optimize performance by caching the result of a function and returning the cached result when the same inputs occur again. 
// It will also accept two arguments just like useEffect()
// Syntax:
  // const memoizedCallback = useCallback(
  //   () => {
        // callback logic
  //   },
        //   [/* dependencies */]
  // );
// With respect to our case, callback logic is the fetchbooks() and dependencies are empty. Either we can declare another function called stablefetchbooks (memoizedCallback) and pass that as a prop from provider component or just wrap the definition of the fetchbooks with useCallback. (That is how we have done it) 
  // dependencies are used to determine when the memoized function should be recreated.
  // When they are empty, they are recreated only once (as in our case)
  // When we mention a variable/object/string, whenever that changes, they are recreated. 

// Scenarios during which useCallback() can be used
  // 1. Preventing unnecessary re-renders: If you have a component where the child is re-rendering again and again without need.
  // 2. Passing functions to child components: When you need to pass a function as props to a child component, useCallback can be used to ensure that the function doesn’t get recreated on every render.
  // 3. Optimizing expensive computations: If you have a function that is expensive to compute and you need to call it in multiple places, useCallback can be used to cache the function and avoid the expensive computation on each render.
  // 4. Updating state from a memoized callback: useCallback can be used to update state from a memoized callback.
  // 5. Preventing an Effect from firing too often: If you have an effect that fires too often due to a function in its dependency array being recreated on every render, useCallback can be used to memoize the function and prevent the effect from firing too often.
  // 6. Optimizing a custom Hook: useCallback can be used to optimize a custom Hook.

// Scenarios during which useCallback() is not necessary
  // 1. If the function or object reference remains the same across renders (e.g., a function defined outside the component body or an object created once and not modified).
  // 2. If you're okay with the re-renders and the performance impact is acceptable.