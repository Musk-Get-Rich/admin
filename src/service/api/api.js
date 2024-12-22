import request, { requestFunc } from "@/service/request.js";
import axios from "axios";
import { BASEURL } from "@/service/config.js";

// 获取资料类型
export const apiGetMaterialTypeList = (params) => {
  return request({
    url: '/admin/admin/articleType/page',
    method: "GET",
    params
  })
}

// 新增、编辑资料类型
export const apiChangeMaterialType = (data, method) => {
  return request({
    url: '/admin/admin/articleType/' + method,
    method: "post",
    data
  })
}

// 删除资料类型
export const apiDeleteMaterialType = (id) => {
  return request({
    url: '/admin/admin/articleType/delete/' + id,
    method: "delete",
  })
}

// 代理管理列表
export const apiGetAgentList = (params) => {
  return requestFunc('/AgentNew/ManageBlew', params)
}

// 当前登录账号代理信息
export const apiGetAgentInfo = (params) => {
  return requestFunc('/AgentNew/AgentInfo', params)
}

// 检测代理名称是否存在
export const apiCheckAgentAccount = (params) => {
  return requestFunc('/User/checkAgentAccount', params)
}

// 新增代理
export const apiRegisterAgent = (params) => {
  return requestFunc('/AgentNew/registerAgent', params)
}

// 编辑代理
export const apiEditAgent = (params) => {
  return requestFunc('/AgentNew/editAgent', params)
}

// 获取会员管理列表
export const apiGetVipList = (params) => {
  return requestFunc('/AgentNew/ManagePlay', params)
}

// 获取需维护会员管理列表
export const apiGetVipMaintainList = (params) => {
  return requestFunc('/AgentNew/ManageMaintainPlay', params)
}

// 下线（邀请有奖）
export const apiGetAgentInviteList = (params) => {
  return requestFunc('/AgentNew/GetInviteReport', params)
}

// 会员注销/转线申请
export const apiAgentChangeApply = (params) => {
  return requestFunc('/AgentNew/DoChangeLog', params)
}

// 会员注销/转线申请 汇总记录
export const apiAgentChangeStatistics = (params) => {
  return requestFunc('/AgentNew/SumChangeLog', params)
}

// 会员注销/转线申请 汇总记录
export const apiAgentChangeLog = (params) => {
  return requestFunc('/AgentNew/GetChangeLog', params)
}

// 会员调级申请
export const apiAgentLevelChange = (params) => {
  return requestFunc('/AgentNew/DoLevelApply', params)
}

// 会员调级申请汇总
export const apiAgentLevelStatistics = (params) => {
  return requestFunc('/AgentNew/SumApplyLog', params)
}

// 会员调级申请记录
export const apiAgentLevelLog = (params) => {
  return requestFunc('/AgentNew/GetLevelApplyLog', params)
}

// 获取首页数据
export const apiGetHomeData = (params) => {
  return requestFunc('/AgentNew/AgentSumInfo', params)
}

// 顶部通知
export const apiGetTopNotice = (params) => {
  return requestFunc('/Notic/Notic', params)
}

// 会员报表
export const apiMembershipReport = (params) => {
  return requestFunc('/AgentNew/GetMemberReport', {
    ...params,
    employeecode: undefined
  })
}

// 代理日报表
export const apiAgentDailyReport = (params) => {
  return requestFunc('/AgentNew/GetAgentDayReport', {
    ...params,
  })
}

// 推广网站

export const apiPromotionWebsite = (params) => {
  return requestFunc('/AgentNew/GetAgentSite', {
    ...params,
  })
}

// usdt
export const apiUSDTInfo = (params) => {
  return requestFunc('/AgentNew/getRechargeUsdInfo', {
    ...params,
  })
}

// 获取usdt提现列表
export const apiUserUSDTList = (params) => {
  return requestFunc('/AgentNew/UWalletAddress', {
    ...params,
  })
}

// 彩金记录
export const apiBonusRecord = (params) => {
  return requestFunc('/AgentNew/GiftRecord', {
    ...params,
  })
}

// 获取推广素材
export const apiListActivityData = (params) => {
  return requestFunc('/ActivityInfo/ListActivityData', {
    ...params,
  })
}

// 获取Vip专享详情
export const apiListActivityInfo = (params) => {
  return requestFunc('/ActivityInfo/info', {
    ...params,
  })
}
