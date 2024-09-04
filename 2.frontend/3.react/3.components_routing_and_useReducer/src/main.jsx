import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { NavigationProvider } from './context/navigation';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </React.StrictMode>
)

// React.StrictMode
// It is a tool for highlighting potential problems in an application. It does not render any visible UI, but activates additional checks and warnings for its descendants.
  // Components will re-render an extra time to find bugs caused by impure rendering.
  // Components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
  // Components will be checked for usage of deprecated APIs.
// These checks help you find common bugs in your components early in the development process. 
// StrictMode can be used for any part of the application (like for a particular component).
// They are run in development mode only (do not impact the production build).