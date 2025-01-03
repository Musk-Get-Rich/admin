import LocalCache from '@/utils/cache'
import {defineStore} from 'pinia'
import {apiLogin} from "@/service/api/user.js";
import {getToken, removeToken, setToken} from "@/utils/cookie/index.js";
import {ElMessage, ElMessageBox} from "element-plus";
import router from "@/router"
import {getAllLocalStorage} from "@/utils/index.js";
import {LOCAL_STORAGE_NAME} from "@/config/index.js";
import {eventEmitter} from "@/utils/eventEmitter/index.js";
import {useStorage} from "@vueuse/core";
import {_getUserInfo} from "@/service/api/user.js";
import {apiGetAgentInfo} from "@/service/api/api.js";
import i18n from '@/i18n';
const t = i18n.global.t;

const {getCache, setCache, removeCache} = LocalCache

export const useUserStore = defineStore('userStore', () => {
  const token = ref(getToken() || '')

  const userInfo = useStorage(LOCAL_STORAGE_NAME + 'userInfo', {})

  /**
   * 请求登录
   * @param data
   */
  const login = async (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await apiLogin(data)

        userInfo.value = res

        token.value = res.token

        // 保存 token
        setToken(token.value)

        ElMessage({
          message: t('登录成功'),
          type: 'success',
        })

        resolve(res)

      } catch (err) {
        reject(err)
        ElMessage.error(t('请稍后重试'))
      }
    })
  }

  const changeUserInfo = () => {
    return new Promise((resolve, reject) => {
      Promise.all([_getUserInfo(), apiGetAgentInfo()]).then(res => {
        userInfo.value = {
          ...userInfo.value,
          ...res[0],
          ...res[1],
        }

        resolve(true)
      }).catch(err => {
        reject(err)
      })
    })
  }

  /**
   * 清除用户信息
   */
  const clearUserInfo = () => {
    token.value = ''

    removeToken()

    const keys = Object.keys(getAllLocalStorage())

    keys.forEach(key => {
      if (key.indexOf(LOCAL_STORAGE_NAME) !== -1) {
        removeCache(key)
      }
    })
  }

  /**
   * 退出登录
   */
  const logout = () => {
    return new Promise((resolve, reject) => {
      ElMessageBox.confirm(
        t('您确定要退出登录吗?'),
        t('Warning'),
        {
          confirmButtonText: t('确定'),
          cancelButtonText: t('取消'),
          type: 'warning',
        }
      )
        .then(async () => {
          ElMessage({
            type: 'success',
            message: t('退出成功'),
          })

          resolve()
          console.log(123);

          clearUserInfo()

          await router.replace({name: 'login'})
        })
    })
  }

  // 登录过期
  eventEmitter.on('Login_Expired', async (data) => {
    clearUserInfo()
  })

  return {
    userInfo,
    token,
    login,
    logout,
    changeUserInfo,
    clearUserInfo,
  }
}, {
  // persist: true
})
