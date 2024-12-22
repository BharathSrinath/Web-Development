import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from './slices/songsSlice'
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice'
import { reset } from "./action";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  },
});

export {store, reset, addSong, removeSong, addMovie, removeMovie};

// Note:
// We dont interact with the store directly. It is generally taken care by the react-redux library
// But there are few occasions where we might interact. In that scenario we generally use two methods.
  // store.dispatch ({type: 'songs/addSong'}) to dispatch an action (that is to change the state)
  // store.getState() to see what exists in the state
    // JSON.stringify(store.getState()) to see the same in string format
    