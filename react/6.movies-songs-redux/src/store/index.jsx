import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from './slices/songsSlice'
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice'
import { reset } from "./action";

// This is our central state - the combined-reducer which as 2 sub-reducers with it.
// Our central state management is done under configureStore(). It creates the redux store.
// In very large projects we might even have more than one store (Just keep that in mind)
const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  },
});
// Here songsReducer and moviesReducer are the sub reducer functions that will proudce the values for the keys - songs and movies

export {store, reset, addSong, removeSong, addMovie, removeMovie};

// Note:
// We dont interact with the store directly. It is generally taken care react-redux library
// But there are few occasions where we might interact. In that scenario we generally use two methods.
  // store.dispatch ({type: 'songs/addSong'}) to dispatch an action (that is to change the state)
  // store.getState() to see what exists in the state
    // JSON.stringify(store.getState()) to see the same in string format
    