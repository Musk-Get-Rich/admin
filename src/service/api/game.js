import request from "@/service/request.js";
import { requestFunc } from "../request.js";

// 获取存提款记录
export const _getDepositRecord = (params) => {
  console.log(params);
  return requestFunc('/AgentNew/GetDepositRecord', params)
}

// 获取会员报表
export const _getGameReport = (params) => {
  console.log(params);
  return requestFunc('/AgentNew/GetGameReport', params)
}