import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

/**
 * Config the interceptors in request config.
 * 
 * Axios interceptors are functions that Axios calls for every request.
 * You can use interceptors to transform the request before Axios sends it, 
 * or transform the response before Axios returns the response to your code.
 */
axios.interceptors.request.use(request => {
    console.log(request);
    // Here We can edit the request config (add Headers, Chnage them, etc...)
    // We have to return the request
    return request;
},error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    return response;
},error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
