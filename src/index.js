import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { QProvider } from './context/QContext'

ReactDOM.render(
  <React.StrictMode>
    <QProvider>
      <App />
    </QProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
