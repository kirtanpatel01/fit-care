import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8002/api/v1', // Base URL for your API
  withCredentials: true, // Send cookies with requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
