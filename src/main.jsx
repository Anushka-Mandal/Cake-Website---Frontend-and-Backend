import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Your global styles
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app wrapped in BrowserRouter for routing
root.render(
  <BrowserRouter>

    <App />
  </BrowserRouter>
);

