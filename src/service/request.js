import axios from "axios";
import {BASEURL, TIMEOUT} from "@/service/config.js";
import { ElMessage } from 'element-plus'
import {getToken} from "@/utils/cookie/index.js";
import { eventEmitter } from "@/utils/eventEmitter/index.js";
import { errorMessage } from "@/service/errorMessage.js";

const instance = axios.create({
  baseURL: BASEURL,
  timeout: TIMEOUT,
});

/**
 * 请求拦截
 */
instance.interceptors.request.use(config => {
  config.headers['Authorization'] = getToken() // 请求头带上token
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
instance.interceptors.response.use(response => {
  const res = response.data

  console.log(res);

  // 200 请求成功
  if (res.code == 1) {
    console.log(res);
    return res.info
  } else {
    ElMessage({
      message: res.msg || '请稍后重试',
      type: 'error',
      duration: 2 * 1000
    })
    return Promise.reject(res)
  }
}, error => {
  switch (error.response.status) {
    case 400:
      ElMessage({
        message: error.response.data,
        type: 'error',
        duration: 1500,
        customClass: 'element-error-message-zindex'
      })
      break
    case 401:
      ElMessage({
        message: 'Login expired',
        type: 'error',
        duration: 3000,
        customClass: 'element-error-message-zindex',
        onClose: async function () {
          eventEmitter.emit('Login_Expired')
        }
      })
      break
    case 405:
      ElMessage({
        message: 'The http request method is incorrect',
        type: 'error',
        duration: 1500,
        customClass: 'element-error-message-zindex'
      })
      break
    case 500:
      ElMessage({
        message: 'There was a problem with the server, 请稍后重试',
        type: 'error',
        duration: 1500,
        customClass: 'element-error-message-zindex'
      })
      break
    case 501:
      ElMessage({
        message: 'The server does not support a feature required by the current request',
        type: 'error',
        duration: 1500,
        customClass: 'element-error-message-zindex'
      })
      break
  }
  return Promise.reject(error)
})

export default instance
