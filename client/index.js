import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store.js';
import App from './app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import socket from 'socket.io-client';
const clientSocket = socket(window.location.origin);
clientSocket.on('connect', () => { 
  console.log('Connected to server'); 
})

const root = createRoot(document.getElementById('app'));

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
