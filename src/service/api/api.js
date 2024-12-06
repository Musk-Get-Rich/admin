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

// 下线（邀请有奖）
export const apiGetAgentInviteList = (params) => {
  return requestFunc('/AgentNew/GetInviteReport', params)
}
