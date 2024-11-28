import localCache from '@/utils/cache/index'
import {TOKEN_NAME} from "@/config/storageKey.js";

export const getToken = () => {
  return localCache.getCache(TOKEN_NAME)
}

export const setToken = (val) => {
  localCache.setCache(TOKEN_NAME, val)
}

export const removeToken = () => {
  return localCache.removeCache(TOKEN_NAME)
}
