import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  // 'window.location.pathname' is used to retrieve the path and filename of the current URL being displayed in the browser.  

  useEffect(() => {
    const handler = (event) => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handler);
    // Refer pushState and EOP and then come back here.
    // 'popstate' event is fired when the active history entry changes. It occurs when the user navigates through their browser's history, such as using the back or forward buttons.

    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    
    // When you call history.pushState(), you’re creating a new entry in the browser’s history stack. This doesn’t cause the page to reload, but it does change the URL in the address bar. This new history entry is associated with the current path.
    // This is why when you go back/forward with respect to paths that were added using pushState, we dont see a full page refresh. But when a user types the path manually and then go back/forward, entire page reloads.
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;

// We know we have to update the address to trick the user that they are actually navigating. This can be done by updating window.location = 'address'
// But this will cause full page refresh. To overcome this we use the following that will update the address without reloading.

// window.history.pushState({}, '', to);
// The History API is a set of Web APIs provided by the browser that allow you to interact with the browser’s session history. This is the history that the back and forward buttons of your browser control makes use of.
// The global window object contains a history object by default. This history object has several methods and properties that allow you to manipulate the browser’s session history stack.
// history.pushState() method adds a new entry to the browser’s history stack. This allows you to change the URL displayed in the address bar without reloading the page.
// replaceState(): The history.replaceState() method is similar to pushState(), but instead of adding a new entry to the history stack, it replaces the current entry. This is useful when you want to update the current history entry’s state object or URL.

// Syntax for pushState(): window.history.pushState(stateObj, "title", "newRoute")
  // newRoute or navigate(to) (with respect to this app) => It is the new route to which we want to navigate
  // When a user clicks the link, we will get the path and pass it as the 3rd argumnent.
  // title is an empty string as the modern browsers ignores this
  // stateObj will contain the data that the user has entered (say in a form).
// popState() event handler will be triggered once the pushState() is called. 
// In our popstate event handler, we have a property called 'state'. This is the stateObj. popState() is designed to have access to the stateObj that we have passed while calling pushState().