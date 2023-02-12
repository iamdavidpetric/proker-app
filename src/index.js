import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './view/application/Application';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
);
