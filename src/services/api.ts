import axios from 'axios';

const ROOT_URL = 'https://6627fd73b625bf088c0a7bf9.mockapi.io/';

const axiosRequest = axios.create({
  baseURL: ROOT_URL,
});

axiosRequest.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axiosRequest.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default axiosRequest;