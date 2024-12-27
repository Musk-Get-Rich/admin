import request from "@/service/request.js";
import { requestFunc } from "../request.js";

// 获取存提款记录
export const _getDepositRecord = (params) => {
  console.log(params);
  return requestFunc('/AgentNew/GetDepositRecord', params)
}

// 获取游戏平台报表
export const _getGameReport = (params) => {
  return requestFunc('/AgentNew/GetGameTypeDetails', params)
}

// 获取游戏记录
export const _getGameRecord = (params) => {
  return requestFunc('/AgentNew/GetGameDetails', params)
}
