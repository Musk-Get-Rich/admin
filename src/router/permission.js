import {getToken} from "@/utils/cookie/index.js";
import router from "@/router/index.js";

router.beforeEach(async (to, from) => {
  const token = getToken()

  // if (token) { // 已登录
  //   return true
  // } else { // 未登录
  //   if (to.path === '/login') { // 防止无限重定向
  //     return true
  //   } else {
  //     return { name: 'login' }
  //   }
  // }
})
