import { useContext } from 'react';
import BooksContext from '../context/books';

function useBooksContext() {
  // Custom hooks: Here useBooksContext is the custom hook which when called will execute the useContext() 
  return useContext(BooksContext);
}

export default useBooksContext;

  