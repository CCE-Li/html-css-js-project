import axios from 'axios';

const service = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code === 200) {
      return res.data;
    }
    return Promise.reject(new Error(res.message || '请求失败'));
  },
  (error) => Promise.reject(error)
);

export default service;
