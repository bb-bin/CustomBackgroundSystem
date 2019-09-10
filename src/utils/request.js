import axios from 'axios';

const request = axios.create({
  baseURL: 'https://elm.cangdu.org',
  timeout: 2 * 1000,
});

request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

request.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export default request;
