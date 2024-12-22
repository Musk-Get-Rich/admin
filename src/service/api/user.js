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

// 修改资金密码
export const apiChangePaymentPassword = (params) => {
  return requestFunc('/AgentNew/updatefpwd', params)
}

// 账变记录
export const apiAccountChangeRecords = (params) => {
  return requestFunc('/AgentNew/GetDepositRecord', params)
}

// 添加加密货币钱包
export const apiAddUSDTWallet = (params) => {
  console.log(params);
  return requestFunc('/AgentNew/AddUWallet', params)
}

// 联系我们
export const apiContactUs = (params) => {
  return requestFunc('/AgentNew/addComplaint', params)
}
