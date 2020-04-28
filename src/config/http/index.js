import axios from 'axios';
// import env from 'config/env';

// axios.defaults.baseURL = env.api.url;
// axios.defaults.headers.Authorization = env.api.auth;
axios.defaults.headers['Content-Type'] = 'application/json';

axios.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export default axios;
