import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

/**
 * Global Configuration
 * baseURL - Will be added in each axios call before automatically
 * headers.common - Attach Authorization header for all axios requests
 * headers.post - Attach header Content-Type in all post axios requests
 */
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

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
