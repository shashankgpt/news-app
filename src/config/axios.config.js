import axios from 'axios';

axios.interceptors.request.use((config) => {
  const basicConfig = {
    ...config,
  };
  const token = window.localStorage.getItem('token')
  basicConfig.headers.Authorization =  `Bearer ${token}`;
  return basicConfig;
});