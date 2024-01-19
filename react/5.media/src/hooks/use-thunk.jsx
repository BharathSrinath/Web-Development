import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export function useThunk(thunk) { 
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const runThunk = useCallback((arg) => {
        // This arg is particularly useful when we are deleting a user in our app. When we click on the delete button, we are passing the user as an argument when we are handling that click.
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
    // But we want the useEffect to run only once to fetch the initial users list. Due to the inclusion of dependency array, whenever the component re-renders, useEffect will be execute despite the contents that is fetching is the same. This is due to the way functions work in JS as we have already learnt in App.jsx and books.jsx under components project. 
    // To overcome this we use useCallback which memoizes the function (caching the result of a function and returning the cached result when the same inputs occur again). To put it simply it overcomes the infinite re-render that could happen with useEffect.
// The dependecy array in useCallback() will make sure that it runs only when dispatch and thunk is updated with new value. () 