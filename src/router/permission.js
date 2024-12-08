import {getToken} from "@/utils/cookie/index.js";
import router from "@/router/index.js";
import { useUserStore } from "@/store/modules/user.store.js";

router.beforeEach(async (to, from) => {
  const userStore = useUserStore()

  if (userStore.userInfo.employeecode && userStore.token) { // 已登录
    return true
  } else { // 未登录
    if (to.path === '/login') { // 防止无限重定向
      userStore.clearUserInfo()
      return true
    } else {
      return { name: 'login' }
    }
  }
})
