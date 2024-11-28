import request from "@/service/request.js";
import axios from "axios";
import {BASEURL} from "@/service/config.js";
import {useMaterial} from "@/views/modules/MaterialManagement/hook/useMaterial.js";

// 获取开奖列表
export const apiGetLotteryList = (params) => {
  return request({
    url: '/admin/admin/lottery/new/page',
    method: "GET",
    params
  })
}

// 新增、编辑开奖
export const apiChangeLottery = (data, method) => {
  return request({
    url: '/admin/admin/lottery/new/' + method,
    method: "post",
    data
  })
}

// 删除开奖
export const apiDeleteLottery = (id, method) => {
  return request({
    url: '/admin/admin/lottery/new/delete/' + id,
    method: "delete",
  })
}

// 获取资料列表
export const apiGetMaterialList = (params) => {
  return request({
    url: '/admin/admin/articleInfo/page',
    method: "GET",
    params
  })
}

// 获取所有资料类型
export const apiGetMaterialTypeAll = () => {
  return request({
    url: '/admin/admin/articleType/listAll',
    method: 'GET'
  })
}

// 新增、编辑资料
export const apiChangeMaterial = (data, method) => {
  return request({
    url: '/admin/admin/articleInfo/' + method,
    method: "post",
    data
  })
}

// 删除资料
export const apiDeleteMaterial = (id) => {
  return request({
    url: '/admin/admin/articleInfo/delete/' + id,
    method: "delete",
  })
}

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
