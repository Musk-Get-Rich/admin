import request from "@/service/request.js";
import axios from "axios";
import { BASEURL } from "@/service/config.js";

// 获取佣金
export const _agentCommissionReport = (params) => {
  return request({
    url: '/AgentNew/AgentCommissionReport',
    method: "GET",
    params
  })
}

// 获取会员报表
export const _getMemberReport = (params) => {
  return request({
    url: '/AgentNew/GetMemberReport',
    method: "GET",
    params
  })
}

// 获取代理日报表
export const _getAgentDayReport = (params) => {
  return request({
    url: '/AgentNew/GetAgentDayReport',
    method: "GET",
    params
  })
}