import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './1.App.jsx'
import './index.css'

// Here 'react' and 'react-dom/client' are libraries from which we are importing React and ReactDOM objects.

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el)

// The createRoot method is a significant addition in React 18, replacing the older ReactDOM.render
// createRoot is a method from the react-dom/client package that creates a React root for managing the DOM elements. 
// This new root API is designed to support concurrent rendering, which is a key feature in React 18.
// It returns an object and has a method called render. Now our react application will be within this root.
// That is why we have passed the App component to the root.render method. 
// Concurrent rendering:
  // We know that JS is a single threaded language. So when we say concurrent rendering does it mean that creaeRoot in react makes it a multi threaded? NO.
  // It doesn't make JS itself multithreaded. Instead, it allows React to manage rendering tasks more efficiently within the single-threaded environment.
    // 1. Scheduling: React can schedule updates in a way that prioritizes more urgent tasks (like user interactions) over less critical ones (like rendering large lists). This makes the app feel more responsive.
    // 2. Interruptible Rendering: React can pause and resume rendering tasks. If a more urgent task comes up (like a user click), React can pause the current rendering work, handle the click, and then resume rendering. This prevents the UI from freezing during heavy computations.
    // 3. Time-Slicing: React breaks down rendering work into smaller chunks and spreads them over multiple frames. This ensures that the browser remains responsive and can handle user interactions smoothly.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

