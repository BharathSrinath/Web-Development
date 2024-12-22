import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersReducer } from './slices/usersSlice';
import { albumsApi } from './apis/albumsApi';
import { photosApi } from './apis/photosApi';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    // Here square brackets indicates that we are obtaining the values dynamically.
    [albumsApi.reducerPath]: albumsApi.reducer, // Key will be resolved to 'albums'
    [photosApi.reducerPath]: photosApi.reducer, // Key will be resolved to 'photos'
    
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
// Above lines mean - Find everything that is getting exported from './thunks/fetchUsers', './thunks/addUser', './thunks/removeUser' and export them from here too. (Rather than importing them and then exporting, this is like a shortcut)
// We do this to avoid circular imports
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

// About Project
    // We will be fetching random list of users (from faker library) and store them in the database
    // Under every user we will have a random list of albums
    // Under every album we will have a random list of photos
    // To these lists we can add/delete datas
// Note: Each album is tied to a particular user and each photo is tied to a particular album. We have to provide that relationship. More on this in next section (Relationship between users, albums and photos).
    // In our initial request, we will not fetch all tje details from the database. Rather, We will just fetch the list of users during the initial load.
        // Then When a particular user is clicked, we will fetch the albums
        // Then when a particular album is clicked, we will fecth the photos
    // This is called as lazy fetching. This will reduce the initial load on the client's end.

// Relationship between users, albums and photos
// There are 2 ways to achive this - Denormalized form and Normalized form
    // Denormalized form: This is what we are generally accustomed so far in this course. Under user we will have albums and under albums we will have photos.
    // Normalized form: This is similar to SQLite that we have learned from edx course. List of users, albums and photos - all of them will be separate arrays. Now one poroperty of a list will be tied to another. (like id of one list with userid of another list)

// Options for Data-fetching in Redux Tookit
  // 1. Async Thunk functions - slightly older and more complicated
  // 2. Redux Tookit query - newer and fancier way
// We will make use of both (1. users, 2. albums and photos) to understand how they work