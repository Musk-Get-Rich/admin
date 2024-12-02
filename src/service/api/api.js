import request from "@/service/request.js";
import axios from "axios";
import {BASEURL} from "@/service/config.js";

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
