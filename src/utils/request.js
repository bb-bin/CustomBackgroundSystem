import axios from 'axios';
import { message } from 'antd';

const request = axios.create({
    baseURL: 'http://58.87.126.209:3333/',
    timeout: 2 * 1000, // 网络超时时间的设置
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// 添加响应拦截器
request.interceptors.response.use(
  response => {
    // 统一做错误提示
    let result = response.data;
    if (result.code !== 0) {
      message.error(result.msg);
      // 直接调用reject,让后续流程不在继续
      return Promise.reject(result.msg);
    }
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export default request;