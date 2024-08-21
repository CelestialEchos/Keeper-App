import axios from 'axios';

const api = axios.create({
    baseURL: 'https://keeper-app-delta.vercel.app/api/v1/notes',
    headers: { 
        "Content-Type": "application/json"
    }
});

export default api;