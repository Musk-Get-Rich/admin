import request from "@/service/request.js";

// 登录
export const apiLogin = (data) => {
  return request({
    url: '/admin/admin/login',
    method: "POST",
    data
  })
}
