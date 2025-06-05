import axios from 'axios';

const config = {
  env: {
    API_BASE_URL: 'http://127.0.0.1:8000',
  },
};


export const secureApi = axios.create({
  baseURL: config.env.API_BASE_URL,
  timeout: 60 * 1000,
});
