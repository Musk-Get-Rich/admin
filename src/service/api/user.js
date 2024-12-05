import request from "@/service/request.js";
import {requestFunc} from "../request.js";

// 登录
export const apiLogin = (params) => {
  return request({
    url: '/AgentBack/login',
    method: "GET",
    params
  })
}

export const _getUserInfo = () => {
  return requestFunc('/AgentNew/takeEmployee')
}
