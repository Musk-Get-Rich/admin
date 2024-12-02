import request from "@/service/request.js";

// 登录
export const apiLogin = (params) => {
  return request({
    url: '/AgentBack/login',
    method: "GET",
    params
  })
}
