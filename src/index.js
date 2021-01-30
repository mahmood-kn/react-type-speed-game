import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TypeState from './context/TypeState';

ReactDOM.render(
  <React.StrictMode>
    <TypeState>
      <App />
    </TypeState>
  </React.StrictMode>,
  document.getElementById('root')
);
