import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export function useThunk(thunk) { 
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    const runThunk = useCallback((arg) => {
        // This arg is particularly useful when we are deleting a user in our app. When we click on the delete button, we are passing the user as an argument.
        setIsLoading(true);
        dispatch(thunk(arg))
            .unwrap()
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    }, [dispatch, thunk]);

    return [runThunk, isLoading, error];
}

// Why useCallback() here?
    // Because following the eslint suggestion, we have included doFetchUsers as a dependency array in the useEffect().  
    // But we want the useEffect to run only once to fetch the initial users list. Due to the inclusion of dependency array, whenever the component re-renders, useEffect will be execute despite the contents that is fetching is the same.
    // To overcome this we use useCallback which memoizes the function. To put it simply it overcomes the infinite re-render that could happen with useEffect.
// The dependecy array in useCallback() will make sure that it runs only when dispatch and thunk is updated with new value.

// unwrap:
// When you dispatch a regular (synchronous) action, dispatch returns the action object itself.
// When you dispatch an asynchronous thunk action, the dispatch function returns a Promise.
    // But this promise different from the usual JS promise.
    // A standard JS Promise is resolved with the success value and rejected with an error. 
    // But dispatch's Promise is always resolved, regardless of whether the async operation succeeded or failed.
    // The resolved value of this Promise is an action object that contains details about the result of the async operation
        // If successful: The action has a type of fulfilled and contains the result in the payload.
        // If failed: The action has a type of rejected and contains the error information.
// Why Does This Happen? This behavior is designed to fit into Redux's flow of handling actions
    // Consistent Action Dispatching: Whether the async operation succeeds or fails, the action will always be dispatched and handled by the reducers. This ensures that the Redux state is updated appropriately regardless of the outcome.
    // Action Handling: Middleware and reducers in Redux often need to handle actions based on their type (pending, fulfilled, rejected). By resolving the Promise with an action object, Redux Toolkit allows this flow to be consistent.
// unwrap is a utility method provided by RTK that can be used to work with the results of asynchronous thunks in a more straightforward way (like a standard JS promise).