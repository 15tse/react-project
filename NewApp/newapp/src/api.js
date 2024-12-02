import axios from 'axios';

const api = axios.create({ 
  baseURL: 'http://localhost:8282/labtests',
});

export default api;
