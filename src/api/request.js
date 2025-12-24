import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
  baseURL: '/api', // 基础URL，根据实际情况修改
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const res = response.data;
    // 这里可以根据后端的响应结构进行相应的处理
    if (res.code === 200) {
      return res.data; // 直接返回数据部分
    } else {
      // 处理业务错误
      console.error('API Error:', res.message);
      return Promise.reject(new Error(res.message || 'Error'));
    }
  },
  (error) => {
    // 对响应错误做点什么
    console.error('Response Error:', error);
    let message = error.message;
    if (error.response) {
      // 服务器返回了错误状态码
      switch (error.response.status) {
        case 400:
          message = '请求参数错误';
          break;
        case 401:
          message = '未授权，请重新登录';
          // 清除 token 并跳转到登录页
          localStorage.removeItem('token');
          window.location.href = '/login';
          break;
        case 403:
          message = '拒绝访问';
          break;
        case 404:
          message = '请求的资源不存在';
          break;
        case 500:
          message = '服务器内部错误';
          break;
        default:
          message = `连接出错 (${error.response.status})!`;
      }
    }
    return Promise.reject(new Error(message));
  }
);

export default service;
