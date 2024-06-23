import { useState, useEffect } from 'react'
// We are not using "./" => It means that we are importing a package
// To go back form the existing folder => "../"
// To go back two folders => "../../"
// When we have "./" +> It means that we are importing a file that we created
import './1.App.css'
// In React, when importing JSX files, we don't specify the file extension. This is because React automatically assumes .jsx or .js when we import a file. This behavior is part of the module resolution system in modern JavaScript environments.
// React looks for ./MyComponent.jsx first and then falls back to ./MyComponent.js if the JSX file is not found. This is a convenience provided by tools like Webpack and Babel,
import Greeter from './2.Greeter'
// Greeter is the name which can be changed when the export is default. If the export is named, you have to use the same name here too.
// With named export, you need to use curly braces when you import
// import {Die} './3.Die'
// Multiple components can be imported separated by a comma (,)
// import {Die}, Die1 from './3.Die'
import Die from './3.Die'
import DoubleDice from './4.DoubleDice'
import ListPicker from './5.ListPicker'
import Slots from './6.Slots'
import ShoppingList from './7.ShoppingList'
import Property from './8.Property'
import Clicker from "./9.Clicker"
import HeaderPDA from './10a.HeaderPDA'
import ProfileCardPDA from './10.ProfileCardPDA'
import AnimalProject from './11.AnimalProject'
import Colorboxes from './12.ColorboxProject'
import SearchBar from './13.SearchBar'
import searchImages from './13a.SearchBarApi'
import ImageList from './13b.ImageList'
import BookCreate from './14.BookCreate'
import BookList from './14a.BookList';
import axios from 'axios'

function App() {
  const [images, setImages] = useState([]);

  const [books, setBooks] = useState([]);

  const createBook = async (title) => {
    // const updatedBooks = [
    //   ...books,
    //   {
    //     id: Math.round(Math.random() * 9999),
    //     title: title
    //   },
    // ];
    // setBooks(updatedBooks);

    // Achieving the output of above by incorporating server and API requests. Not just for creating a book, but also for editing and deleting. One common facet is that we are adding async and await to all the 3 functions.
    // React doesn't make request on its own. That is why we are importing axios.

    const response = await axios.post('http://127.0.0.1:3001/books', {
      title: title
    });
    // We are making our post requests to the JSON server which will give back the reponse that 'this data has been added'. Read it again. We will be getting the data itself (not just the updated data but the entire object) in the reponse along with a status (successful/failure with 'HTTP status'). We are using the data in our response to update the books on the screen. 
    // But still when you refresh the page, all the books will be gone. That is because, reloading/refreshing means we are starting the application. When we do that we want all the books from our server to appear in our page. 
    // To achieve that, we have to request 'give me all the books'for which we will make use of a function named fetchBooks. 
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const fetchBooks = async () => {
    const response = await axios.get ("http://localhost:3001/books")
    setBooks (response.data)
  }

  // You see that the above function is not yet been called. So we can simple write 'fetchBooks()' right? No we can't. When we do that imagine what will happen.  
  // When the App component is rendered for the first time, fetchBooks() will be executed. Under the fetchBooks setBooks will be executed. You know what happens when a state update takes place right? The entire component will be re-rendered. Hence fetchBooks() will again be executed. Now the loop goes on forever. 
    // To check this, go to the network tab in developer tools and filter by Fetch/XHR
  // To overcome this we are going another hook known as 'useEffect' 
    // useEffect is used for handling side effects in functional components.
    // It takes two arguments: the effect function and an optional dependencies array.
    // The effect function runs after the component renders.
    // Specify dependencies to control when the effect runs.
    // Syntax:
        // useEffect(() => {
          // ....... Effect logic
          // return () => {
              // Cleanup logic
          //  };
        // }, [dependencies]);
      // Syntax looks daunting? Actually it is quite simple. It takes just two arguments. First one is a fucntion (anonymous arrow function). Under this function we will deifne the effect logic and an optional cleanUp logic. Second argument is an array in which we can speicify the dependencies/no dependencies (empty array) or no second argument at all. 
    
  useEffect(() => {
    fetchBooks(); 
    // Here fetchBooks() is the cleanup function
  }, []);

  // When the second argument is an empty array (most common use case), useEffect will be executed once (on the first render of App component) and will never come in to picture.
  // When the second argument is completely empty, useEffect will not be executed on first render but it will be executed on every re-render.
  // If there is a variable (like 'counter') inside an array, useEffect will be called everytime when the counter is changed.   
    // It can take multiple arguments too. If any one of the argument changes, useEffect will be called.
  // Unlike useState() that returns an array with 2 elements and createEffect() that returns an object with 2 components - 'Provider' and 'Consumer', UseEffect() returns no meaningful value. The purpose of useEffect is to perform side effects in functional components. The optional return value of useEffect is a cleanup function, but the function itself does not return anything directly.
  // Just know that useEffect() cannot return a number, a string. Only optional functionc can be returned. 
  // Clean-Up Function:
    // The function returned by useEffect (if provided) is used for clean-up when the component unmounts or when certain dependencies change.
    // Cleanup function can be async or sync, but the first argument of useEffect() itself cannot be declared an async. (Just remember that)
      // Async returns a promise but useEffect() returns no meaningful value.
    // This clean-up function is optional and is used to cancel subscriptions, clear intervals, or perform other clean-up tasks to avoid memory leaks.
    // Also in general we dont give name for the cleanUp(). Whatever function that follows the 'return' will be a cleanUp(). 
  // How the useEffect() works with cleanUp()?
    // In first render (upon loading for the first time), useEffect() will be called. The optional cleanup function will returned (which will be held by react). It will not be executed at this point
    // In second render (assuming that you have an element inside the array), the cleanup function will be executed (which was held by react). Now useEffect() will executed the second time and a new cleanup function will be returned (which will be held by react). This continues for every render.
      // What you have to understand here is, when the component renders and react has any cleanup() held with it, react will execute the cleanup function first and then call the useEffect(). 
      // What if react has a cleanup() but there is not need for the useEffect() to be called? Then the cleanup() will not be executed by the react.
      // So you may wonder what is the use here? It can be used where under useEffect function, there are lines od code that needs to be executed and needs to removed once executed. So under cleanup() we can write lines of code that will remove the above lines of code. Again why? Consider the following example.
        // If you are adding an event Listener for a 'click' event under useEffect (and assume that we are using the version of useEffect without the second argument), every time the event is triggered, useEffect() will be called and eventListener will be triggered. When the component render for 10th time, there will be 10 eventListeners for a 'click' event. To overcome this, we will cleanup the eventHandler.
        // Example:
          // useEffect(()=>{
          //   const listener = () => {
          //     console.log(counter);
          //   };
          //   document.body.addEventListener('click', listener)
          //   const cleanUp = () =>{
          //     document.body.removeEventListener('click', listener)
          //   };
          //   return cleanUp;
          // }, [counter]);  
  const editBookById = async (id, newTitle) => {
    // const updatedBooks = books.map((book) => {
    //   if (book.id === id) {
    //     return { ...book, title: newTitle };
    //   }
    //   return book;
    // });

    // setBooks(updatedBooks);
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    })
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    // const updatedBooks = books.filter((book) => {
    //   return book.id !== id;
    // });
    await axios.delete (`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id != id;
    });
    setBooks(updatedBooks);
  };

  return (
    <div>
      {/* Passing arguments and understanding default arguments */}
      <Greeter person="Aravind" from="Bharath" />
      <Greeter person="Badri" />
      <Greeter from="Bharath" />

      <Die numSides={20} />
      <Die />
      <Die numSides={10} />

      {/* DoubleDice game */}
      <DoubleDice />
      
      {/* Passing arrays as arguments */}
      <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} />
      {/* <ListPicker values = {{a:1, b:2, c:3}}/> for objects  */}

      {/* Slots game */}
      <Slots val1="1" val2="1" val3="1" />
      <Slots val1="1" val2="2" val3="3" />

      {/* Shopping list: This can be done within a single component. But just for demonstration purpose we are using two components - ShoppingList and ShoppingListItem */}
      <ShoppingList items={[
        { id: 1, item: "eggs", quantity: 12, completed: false },
        { id: 2, item: "milk", quantity: 2, completed: true },
        { id: 3, item: "chicken", quantity: 4, completed: false },
        { id: 4, item: "carrot", quantity: 6, completed: true }
      ]} />

      <Property items={[
        { id: 1, propName: "Desert Yurt", price: 150, rating: "4.9" },
        { id: 2, propName: "Lone Mountain Cabin", price: 250, rating: "4.8" },
        { id: 3, propName: "Cactus Retreat", price: 300, rating: "4.75" },
        { id: 4, propName: "Redwood Treehouse Escape", price: 120, rating: "4.9" },
        { id: 5, propName: "Oceanview Condo", price: 140, rating: "4.7" },
        { id: 6, propName: "Gold Miner Campground", price: 96, rating: "4.69" }
      ]} />

      {/* React events */}
      <Clicker />

      {/* Personal digital assistant project */}
      <div className='Header'>
        <HeaderPDA heading="Personal Digital Assistants" />
      </div>
      <div className='Profilecard'>
        <ProfileCardPDA title="Alexa" twitter="@alexa99" image="./src/assets/images/alexa.png" />
        <ProfileCardPDA title="Cortana" twitter="@cortana32" image="./src/assets/images/cortana.png" />
        <ProfileCardPDA title="Siri" twitter="@siri01" image="./src/assets/images/siri.png" />
        {/* Passing multiple attributes will result in a single object at the receiving end. Lets say that you receive them as 'props' (name of the parameter). Now the atrributes can be accessed using method(.) operator just like an object (Ex: props.title) */}
        {/* We can also destructure an object as we have been doing it for the last few exercises where instead of receiving it as an entire object, we can driectly specify the property names that we require.  */}
      </div>

      {/* Creating a project in which random animals will be displayed (from an array list) with a buttton click. The animal will have an heart symbol at the bottom corner that will increase in size when you click the div element under which the animal is placed. */}
      <AnimalProject />

      {/* Colorbox Project */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Colorboxes colors={['orange', 'dodgerblue', 'seagreen', 'gold', 'rebeccapurple', 'firebrick', 'teal', 'darkorange', 'turquoise', 'tomato', 'midnightblue', 'chocolate']} />
      </div>
      
      {/* Search images from unsplash project */}
      <div>
        <SearchBar onSubmit={async function handlesubmit(term) {
          {/* const [images, setImages] = useState([]); */ }
          {/* The above line should be display out of return statement */ }
          const result = await searchImages(term);
          setImages(result);
          // Please remember that you are not executing the onSubmit function here. You are just passing it as a reference to searchBar where it will be called and executed.
        }} />
        <ImageList images={images} />
      </div>

      {/* Add books to a list (creating a book) which can be edited/deleted  */}
      <div className="app">
        <h1>Reading List</h1>
        <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
        <BookCreate onCreate={createBook} />
      </div>
    </div>
  )
}

export default App
