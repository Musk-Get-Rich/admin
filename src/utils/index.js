import merge from 'lodash/merge'
import CryptoJS from 'crypto-js'
import LocalCache from "@/utils/cache/index.js";
import {USER_MENU_LIST} from "@/config/storageKey.js";
import dayjs from "dayjs";
const {getCache} = LocalCache

/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
export const adornData = (data = {}, openDefultdata = true, contentType = 'json') => {
  var defaults = {
    't': new Date().getTime()
  }
  data = openDefultdata ? merge(defaults, data) : data
  return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}

/**
 * 密码加密
 * @type {string}
 */
// 加密
const keyStr = '-mall4j-password' // 解密用的key
export function encrypt(word){
  const time = Date.now();

  const key  = CryptoJS.enc.Utf8.parse(keyStr);
  const srcs = CryptoJS.enc.Utf8.parse(time + word); // 加密方式: 时间戳 + 密文
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
  return encrypted.toString();
}

/**
 * 是否有权限
 * @param {*} key
 */
export function isAuth (key) {
  let authorities = getCache(USER_MENU_LIST).authorities
  if (authorities.length) {
    for (const i in authorities) {
      const element = authorities[i]
      if (element === key) {
        return true
      }
    }
  }
  return false
}

/**
 * 树形数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
export function treeDataTranslate (data, id = 'id', pid = 'parentId') {
  var res = []
  var temp = {}
  for (var i = 0; i < data.length; i++) {
    temp[data[i][id]] = data[i]
  }
  for (var k = 0; k < data.length; k++) {
    if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
      if (!temp[data[k][pid]]['children']) {
        temp[data[k][pid]]['children'] = []
      }
      if (!temp[data[k][pid]]['_level']) {
        temp[data[k][pid]]['_level'] = 1
      }
      data[k]['_level'] = temp[data[k][pid]]._level + 1
      temp[data[k][pid]]['children'].push(data[k])
    } else {
      res.push(data[k])
    }
  }
  return res
}

// 树形select转换
export const transformCategories = (data) => {
  // Function to recursively transform categories
  function transformCategory(item, parentName = '') {
    // Construct label using parent's name if available
    const label = parentName ? `${parentName} - ${item.categoryName}` : item.categoryName;

    // Create a category object with the constructed label and the category's own ID
    const category = {
      label: label,
      value: item.categoryId,
    };

    // Recursively handle subcategories if they exist
    if (item.categories && item.categories.length > 0) {
      category.children = item.categories.map(subCategory => transformCategory(subCategory, item.categoryName));
    }

    return category;
  }

  // Transform each top-level category using the recursive function
  const transformed = data.map(item => transformCategory(item));

  return transformed;
}

/**
 * 获取缓存所有值
 * @returns {{}}
 */
export const getAllLocalStorage = () => {
  const keys = Object.keys(localStorage);
  const allStorage = {};

  keys.forEach((key) => {
    allStorage[key] = localStorage.getItem(key);
  });

  return allStorage;
}

/** 获取对象类型 */
export const getObjType = (o) => {
  if (o === null) {
    return "null"
  }
  if (typeof o !== "object") {
    return typeof o
  } else {
    return Object.prototype.toString.call(o).slice(8, -1).toLocaleLowerCase()
  }
}

// 首字母大写
export const capitalizeFirstLetter = (string) => {
  if (typeof string !== 'string' || string.length === 0) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// 防抖函数
export const debounce = (fn, delay=500) => {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

// 处理图片路径
export const handleImagePath = (path) => {
  if (path.indexOf('/images/') !== -1) {
    return path.split('/images/')[1]
  } else {
    return path
  }
}

export const formatTime = (date, fmt = 'YYYY-MM-DD hh:mm:ss') => {
  return dayjs(date).format(fmt)
}

export const imageSrc = (image) => {
  return new URL(`/src/assets/images/${image}`, import.meta.url).href;
}

// 补充位数
export const replenishStr = (str, len, val) => {
  return str.padStart(len, val)
}
