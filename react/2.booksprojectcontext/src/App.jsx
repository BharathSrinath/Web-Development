import { useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import useBooksContext from './hooks/use-books-context';

function App() {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;

// Understanding hooks in depth

// 1. Rendering the components
// On the first render, component is executed and local variables (such as counter) are created within the scope of that function.
// When a state or props change or some other trigger causes the component to re-render, a new instance of the component is created.
  // New instance: In React, each time a component is rendered, a new execution of the component function is triggered. This creates a new instance of the component in memory
// The previous instance (from the previous render) is no longer maintained in memory. It's replaced by the new instance.
// The component function is executed again, creating new local variables.
// The JavaScript engine, through its garbage collection mechanism, automatically identifies and removes any resources associated with the old instance of the component that is no longer in use.


// 2. useEffect()
// When an empty array is passed as an argument, useEffect() will be executed only once. If it has an access to the variable/function reference used by the useState (say counter=0), useState will hold to that value forever even after subsequent renders. This is because they are executed only once on the first render. Despite the old instance being replaced by the new instance, useEffect refers to the old variable and its value which belongs to the old instance.
// JavaScript's garbage collector cannot remove the old instance of the variable because the useEffect closure still references it, preventing it from being eligible for garbage collection.
// This variable is called 'stale' variable.
// The squiggly line (provided by ESLint) in the empty array indicates that there is stale variable situation. (You may not see the squiggly line since we have sorted out the issue when you are re-visiting the notes)
  // How to resolve this?
  // We can ignore as our application still works properly. But in future it may break (or)
  // We can pass the value fetchbooks to the array. This will help the function/variable to get updated when the state changes. You remember how the useEffect() behaves when we pass an array right? Whenever the element inside the array is updated useEffect() will be executed. So here, whenever fetchbooks is updated, useEffect will be executed.
// Yet again, there is another issue that arises with this approach. Lets look what happens with each render.
  // 1. In first render useEffect will be executed and the fetchbooks() is called. From an empty array (you can see the 'state' and fetchbooks in the 'provider' component), books state is updated with list of the books present in the server. Now the state has changed. 
  // 2. When the state changes due to the fetchbooks(), component is rendered the second time. When the component is rendered, fetchbooks (inside the array) gets updated. Hence, useEffect will be executed again.
  // 3. But this is where the issue is. When the useEffect is executed the second time, fetchbooks() is again called. Generally, react is clever enough to know that even though the fetchbooks() is called again, there is no actual change in the content that is being fetched. So ideally it shoudn't be re-rendering the component right? But no. It actually re-renders. Why?
    // Exactly the same reason that we have seen with counter variable
    // Even though the content obtained by the fetchbooks() is same, the function that is used by the useEffect() is not the same in every instance (we are referring to the arrow function that is passed as the first argument to the useEffect). fetchbooks() is the name referring to both arrow functions (in both instances).
    // This is primarily due to the way how react handles functions. React treats functions as a value too (just like a number or a string or an array) where the entire function is stored in a memory. In our case with respect to each render, a new function will take a new place in the memory (all of them does the same job of calling the fechbooks)
    // Since it is a new function on every instance, react will consider this to be a change and hence the useEffect will be called everytime which inturn called the fetchBooks(). This will cause the next render and next render and the next, eventually infinte renders.
      // Please please please understand this. When you include functions or objects in the dependency array of the useEffect hook, React checks for referential equality rather than comparing the contents of those functions or objects. This means that React is concerned with whether the reference to the function or object has changed, not with the internal details or values.
    // To resolve the above issue, we are going to use another hook - useCallback(). Refer to provider component.

    // Understanding Component unmounting
    // A React component is considered unmounted in the following scenarios
      // 1. Parent Component No Longer Renders It: If the parent component’s render method no longer includes the child component, the child component will be unmounted.
      // 2. Conditional Rendering: If a component is rendered conditionally and the condition becomes false, the component gets unmounted.
      // 3. Route Change: If you’re using a router and navigate away from a route that renders the component, the component will be unmounted.
      // 4. Manual Unmounting: If ReactDOM.unmountComponentAtNode() is called, the component will be unmounted.
      // 5. When a component is unmounted, it’s removed from the DOM, and you won’t see it on the page. Also, any state associated with the component is lost. The componentWillUnmount() lifecycle method (or the cleanup function returned by useEffect()) is called, giving the component a chance to perform any necessary cleanup.

// So why do we need to understand unmounting?
// Because lifecylce of useEffect() will be reset once the component is remounted (after getting unmounted)  
// Finally clarity: useEffect's return statement will be executed only during 2 scenarios
  // 1. Before the component unmounts
  // 2. Before the next effect runs (When there are dependencies in useEffect() - That is the second argument)