import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersReducer } from './slices/usersSlice';
import { albumsApi } from './apis/albumsApi';
import { photosApi } from './apis/photosApi';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
    // When we use square brackets for the key:value pair in an object, it is considered dynamic and not an array. Here key will be determined during the run time.
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from './apis/albumsApi';
export {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} from './apis/photosApi';

// Understanding Middleware
  // Middleware sits between the action dispatch and the reducer, allowing us to intercept and modify actions or even delete them before they reach the reducer.
    // See under use-thunk we disptached our actions to make the requests for fetch users, add user or delete user. Now the reducer will have url, method, etc. based on which the request will be processed.
  // getDefaultMiddleware is a function provided by Redux Toolkit that returns an array of default middleware that comes with Redux Toolkit. This includes middleware for handling thunks, serializable state, etc. So we are not doing anything manually apart from providing the proper configuration. It receives the data and updates the redux store on its own. All we do is link the automatcially created slice to the redux store and let middleware lets thhe magic happen.
  // The concat method is used to concatenate the default middleware array with additional middleware provided by albumsApi.middleware.
    // Just like preconfig fetch query which has default configuration which is modified by us, we have default middleware array which will be merged with with albumsApi.middleware (created by us)
  // Middleware is often used for making asynchronous requests. This is important because Redux itself is synchronous, but many web operations (like API calls) are asynchronous. 
  // Middleware can be used to log all actions and state changes. This can be very useful for debugging, as we can see exactly what actions were dispatched and how they changed the state1.
  // RTK Query simplifies the process of managing API calls by automatically generating actions, reducers, and selectors for our API endpoints. The middleware provided by RTK Query is responsible for intercepting these API-related actions, making the actual HTTP requests, and updating the Redux store with the fetched data.

// setUpListeners
  // setupListeners is a utility function that helps our application respond to certain events, specifically changes in focus or connectivity.
    // Refetch on Focus: When a user switches away from a tab in a browser, the tab goes out of focus. When they return, the tab comes back into focus. In some applications, we might want to refresh the data when the user comes back, to ensure they’re seeing the most up-to-date information. That’s what refetchOnFocus does.
    // Refetch on Reconnect: Similarly, if a user’s device loses its internet connection and then regains it, we might want to refetch any data that could have been updated while the device was offline. That’s what refetchOnReconnect does.
  // setupListeners sets up the necessary event listeners to handle these situations. It’s part of the setup process because these listeners need to be in place for these features to work.

// Note: These are all very advanced topics. Just know its purpose at this point of time. We can learn about their fundamental working process in the future.