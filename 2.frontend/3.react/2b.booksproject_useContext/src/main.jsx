import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/books';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    <App />
    {/* Now the App component and its children will have access to the values provided by the Provider component */}
    {/* Here Provider is the name of the user defined component. (Not the component returned by the createContext()) */}
  </Provider>
);

// 1. Create a file and define all the functions which are needed by multiple child components (books.jsx)
// 2. Declare a variable (BooksContext) which refers to createContext().
// 3. createContext() returns an object with 2 components - 'Provider' and 'Consumer'
// 4. All the functions that we have defined in books.jsx should be present within the 'Provider' component.  
  // Provider is the name that we have given it to the function. We can name it anything. Technically both consumer and provider has the same content.
// 5. Provider: When you use booksContext.Provider, you are essentially providing the shared context (state or functions) to the components below it in the tree.
  // Those components that are wrapped under provider component will have access to everything that is defined under provider.
    // <Provider>
      // <App />
    // <Provider> 
  // The <Provider> component in React behaves similarly to an HTML element in the sense that it wraps its children, and those children have the opportunity to inherit or utilize the characteristics provided by the context.
  // Just as HTML elements encapsulate and influence their children, the Provider component in React establishes a context for its descendants, allowing them to access shared values or functions. The children components "inherit" the context provided by the Provider.
  // But, HTML elements typically doesn't have control over what characteristics to inherit, whereas components within a React context provider can selectively choose to consume or not consume specific values from the context.
// 6. Consumer: When you use booksContext.Consumer or useContext(booksContext), you are accessing the shared context in a consuming component.
  // Example: const { deleteBookById } = useContext(booksContext);
  // useContext(booksContext) will have all the functions and state that are defined under provider component. But in this example, we are just trying to access one function named 'deleteBookById' with the help of destructuring.
