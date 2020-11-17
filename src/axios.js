import axios from 'axios';

/**
 * Use our own instance in places where we want to use it in our application.
 * We will overwrite some of the settings for the place where we use that instace of the default object.
 * 
 */

const instance = axios.create({
    // Will overwrite the axios.defaults.baseURL from index.js
    baseURL: 'https://jsonplaceholder.typicode.com'
});

// Will overwrite defaults.headers.common['Authorization'] from index.js
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;