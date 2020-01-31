import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    // For this setup we took out the link components from the router-basics
    // branch. 

    // We placed our App component inside of the BrowserRouter component.

    <BrowserRouter>
        <App />
    </ BrowserRouter>
    , document.getElementById('root'));


serviceWorker.unregister();
