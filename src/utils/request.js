import axios from 'axios'
import { getToken } from '@/utils/auth'
import store from '@/store'

const baseURL = process.NODE_ENV === 'development'? 'xxx':'yyy'

const service = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

service.interceptors.request.use(
  config => {
    if(store.getters.token){
      config.headers['Authorization'] = getToken()
    }
    return config;
  }, 
  err => {
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    return Promise.reject(err)
  }
)

export default service
