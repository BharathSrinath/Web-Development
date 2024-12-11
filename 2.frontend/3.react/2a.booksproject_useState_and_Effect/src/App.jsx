import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from './BookCreate'
import BookList from './BookList';

export default function App() {

  const [books, setBooks] = useState([]);

  const createBook = async (title) => {

    // axios syntax: 
      // axios.get(url, config)
      // axios.post(url, data, config)
    const response = await axios.post("http://127.0.0.1:3001/books", {
      // the link is json server link 
      title: title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  // You see that the above function is not yet been called. So we can simplly write 'fetchBooks()' right? No we can't. When we do that imagine what will happen.
  // When the App component is rendered for the first time, fetchBooks() will be executed. Under the fetchBooks setBooks will be executed. You know what happens when a state update takes place right? The entire component will be re-rendered. Hence fetchBooks() will again be executed called again. Now the loop goes on forever.
  // To check this, go to the network tab in developer tools and filter by Fetch/XHR
  // To overcome this we are going to use another hook known as 'useEffect' (refer notes)

  useEffect(() => {
    fetchBooks();
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
      return book.id != id;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookCreate onCreate={createBook} />
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
    </div>
  );
}


// Without a json Server - We wont able to store anything - When you refresh a page, everything disappears as they are just temporary

// export default function App() {

//   const [books, setBooks] = useState([]);

//   const createBook = (title) => {
//     const updatedBooks = [
//       ...books,
//       {
//         id: Math.round(Math.random() * 9999),
//         title: title
//       },
//     ];
//     setBooks(updatedBooks);
//   };

//   const editBookById = (id, newTitle) => {
//     const updatedBooks = books.map((book) => {
//       if (book.id === id) {
//         return { ...book, title: newTitle };
//       }
//       return book;
//     });
//     setBooks(updatedBooks);
//   };

//   const deleteBookById = async (id) => {
//     const updatedBooks = books.filter((book) => {
//       return book.id !== id;
//     });
//     setBooks(updatedBooks);
//   };

//   return (
//     <div className="app">
//       <h1>Reading List</h1>
//       <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
//       <BookCreate onCreate={createBook} />
//     </div>
//   );
// }
