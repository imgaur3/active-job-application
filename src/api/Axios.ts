import axios from 'axios';

const config = {
  env: {
    API_BASE_URL: 'http://localhost:8000',
  },
};


export const secureApi = axios.create({
  baseURL: config.env.API_BASE_URL,
  timeout: 60 * 1000,
});
