import axios from 'axios'

/* eslint-disable no-console */

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
    }
});

instance.defaults.headers.common['Authorization'] = `Bearer ` + localStorage.token;

export default instance;
