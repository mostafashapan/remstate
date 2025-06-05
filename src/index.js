import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// Get the root element where your app will be rendered
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Wrap your app with ApolloProvider and StrictMode
root.render(
  <StrictMode>
      <App />
  </StrictMode>
);
