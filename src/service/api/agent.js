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
