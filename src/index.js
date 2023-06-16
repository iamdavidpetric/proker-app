import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css';
import Persist from '../src/view/persist';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Persist />
  </React.StrictMode>,
);
