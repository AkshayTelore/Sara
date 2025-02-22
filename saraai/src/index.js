import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContext from './context/UserContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContext>
    <App />
  </UserContext>,
);
reportWebVitals();
