import axios from 'axios';

// TODO
const API_HOST = import.meta.env.VITE_LIFF_API_ENDPOINT;

const client = axios.create({
  baseURL: `${API_HOST}`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
});

client.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: unknown) => {
    return Promise.reject(error);
  },
);

export default client;
