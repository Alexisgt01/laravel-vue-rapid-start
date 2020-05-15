import axios from 'axios'

const instance = axios.create({
    baseURL: `${window.url}/api/`,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
    }
});

instance.defaults.headers.common['Authorization'] = `Bearer ` + localStorage.token;

export default instance;
