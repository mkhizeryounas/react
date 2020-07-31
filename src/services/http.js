import axios from 'axios';
import { BASE_URL } from './config';

const opts = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const bindAuthHeaders = (config) => {
  let userInfo = window.localStorage.getItem('x-sd-user');
  if (userInfo) {
    userInfo = JSON.parse(userInfo);
    config.headers['Authorization'] = userInfo?.auth_token;
  }
  return config;
};

const http = axios.create({
  ...opts,
  baseURL: BASE_URL,
});

http.interceptors.request.use(bindAuthHeaders);

export default http;
