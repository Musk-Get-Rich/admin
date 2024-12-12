import request from "@/service/request.js";
import { requestFunc } from "../request.js";

// 获取佣金
export const _agentCommissionReport = (params) => {
  return requestFunc('/AgentNew/AgentCommissionReport', params)
}

// 获取会员报表
export const _getMemberReport = (params) => {
  console.log(params);
  return requestFunc('/AgentNew/GetMemberReport', params)
}

// 获取代理日报表
export const _getAgentDayReport = (params) => {
  return request({
    url: '/AgentNew/GetAgentDayReport',
    method: "GET",
    params
  })
}

// 输赢报表
export const _getProfitLossReport = (params) => {
  console.log(params);
  return requestFunc('/AgentNew/GetProfitLossReport', params)
}

// 赠送彩金
export const apiBonus = (params) => {
  return requestFunc('/AgentNew/SendGiftBonus', params)
}

// 玩家钱包操作
export const apiPlayerWalletOperation = (params) => {
  return requestFunc('/AgentNew/DoTrans', params)
}
