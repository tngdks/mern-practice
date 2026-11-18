// yaha hum Provider lagayenge taki pure store ka access mil jaaye

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    //yaha hum App ko store yani Vault se connect karenge
    <Provider store={store}>
        <App />
    </Provider>
);