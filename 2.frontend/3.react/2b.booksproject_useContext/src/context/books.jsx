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
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;

// Why there are two exports?
  // The Provider component is specifically exported as a named export. This is useful when you want to use the Provider component in another file but not necessarily the entire BooksContext object.
  // The BooksContext object, which includes both the Provider and Consumer, is exported as the default export. This is useful when you want to import the entire context object, including both the Provider and Consumer, in another file. 