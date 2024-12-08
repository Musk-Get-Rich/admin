import axios from "axios";
import router from "@/router/index.js";
import { useUserStore } from "@/store/modules/user.store.js";
import { encryptApiParams } from "./secret.js";
import i18n from "@/i18n/index.js";
import {LANGUAGE} from "@/config/storageKey.js";
import { ElMessage } from 'element-plus'

const t = i18n.global.t

const baseURL = import.meta.env.VITE_BASE_API;

const service = axios.create({
  baseURL,
  withCredentials: false,
  timeout: 20 * 1000,
});

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  (config) => {
    const token = useUserStore().token;
    if (token) {
      config.headers["token"] = token;
    }
    config.headers["lang"] = localStorage.getItem(LANGUAGE);
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    // 错误抛到业务代码
    return Promise.reject(error);
  }
);

/**
 * 响应拦截器
 */
service.interceptors.response.use(
  (response) => {

    if (response.data.code === "1") {
      return response?.data.info;
    } else if (response.data.code === "401") {
      const { clearUserInfo } = useUserStore();
      clearUserInfo();
    } else {
      console.log(123);
      ElMessage({
        message: response.msg || '请稍后重试',
        type: 'error',
        duration: 2 * 1000
      })
      return Promise.reject(response.data);
    }
  },
  (error) => {
    const { clearUserInfo } = useUserStore();
    if (axios.isCancel(error)) {
      console.log("repeated request: " + error.message);
    } else {
      let msg;
      const status = error.response?.status;
      switch (status) {
        case 401:
          msg = "登录已过期，请重新登录";
          clearUserInfo();
          router.push("/login");
          break;
        default:
          msg = error.message || "服务错误";
      }

      error.data = {};
      error.data.msg = error.message;
    }
    return Promise.reject(error.data);
  }
);

// sendUserCode 是否携带用户编码传递
export const requestFunc = (path, data) => {
  return service.get(path + "?" + encryptApiParams({
    ...data,
  }));
};

export default service;
