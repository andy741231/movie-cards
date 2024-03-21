import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

// Find the div with the id of 'root' in your index.html file
const rootElement = document.getElementById('root');
// Create a root using createRoot, passing the rootElement as an argument
const root = ReactDOM.createRoot(rootElement);

// Render your App component within the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);