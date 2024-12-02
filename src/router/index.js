import {createRouter, createWebHashHistory} from "vue-router";
import {getToken} from "@/utils/cookie";
import layout from "@/views/layout"
import { eventEmitter } from "@/utils/eventEmitter/index.js";
import { routes } from "@/router/routes.js";

const router = createRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/common/login/index.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: '404',
      component: () => import("@/views/common/404/404.vue"),
    },
    ...routes
  ],
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
})

eventEmitter.on('Login_Expired', async (data) => {
  await router.replace({
    name: 'login'
  })
})
export default router
