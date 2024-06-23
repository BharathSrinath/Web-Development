# Context:
    # Sometimes we might find that we have a prop which we want to expose “globally”. But, we might find it cumbersome to pass this particular prop down from the root, to every leaf, through every intermediate component.
    # Context allows us to automatically pass down variables from component to component, rather than needing to pass down our props at every level.
    # It's often used for global state management, theme information, authentication status, etc.
    # createContext() returns an object with 2 components the Provider and the Consumer. (Just for comparison => useState() returns an array with 2 elements)
        # Provider: The Provider component is responsible for making the value accessible to its children. It takes a value prop, which is the data we want to share. It wraps the part of the component tree where you want to make the context available.
            # Example: 
                import { createContext } from 'react';
                const MyContext = createContext();

                function MyProvider(props) {
                    const sharedValue = "This is a shared value";

                    return (
                        <MyContext.Provider value={sharedValue}>
                        {props.children}
                        </MyContext.Provider>
                    );
                }
        # Lets say that you want the value to be shared globally. Then we have to change the index.jsx file where we will wrap the <App /> with Context.Provider
            # Example (in App component): 
                root.render (
                    <BooksContext.Provider value = {5}>
                        <App />
                    <BooksContext.Provider>
                )
                # Here App component and all its children (read it again - ALL ITS CHILDREN) will have access to 'value'
                # Now for the child component to access the value,  
                    import {useContext} from 'react'
                    import BookContext from './book'
                    
                    function childComponent(){
                        const num = useContext (BookContext);
                        return <div>{num}<div/>
                    }
        # Consumer: The Consumer component is used to access the value from the context within a component.
            # Example: 
                import { useContext } from 'react';

                function MyComponent() {
                    const value = useContext(MyContext);
                    // use the value from the context
                }




    


    
