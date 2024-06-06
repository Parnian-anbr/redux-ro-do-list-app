import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import {toDoListStore} from './reduxStore';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <Provider store={toDoListStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
