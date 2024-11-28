const layout = () => import("@/views/layout/index.vue")

export const routes = [
  {
    path: '/',
    component: layout,
    redirect: "/dashboard",
    children: [
      {
        path: 'dashboard',
        component: () => import("@/views/modules/dashBoard/index.vue"),
        meta: {
          name: '控制台',
          icon: 'DashboardOutlined'
        },
      },
    ]
  },
  {
    path: '/forum',
    component: layout,
    meta: {
      name: '论坛资料',
      icon: 'menu'
    },
    children: [
      {
        path: 'award-management',
        component: () => import("@/views/modules/AwardManagement"),
        meta: {
          name: '开奖管理',
          icon: 'menu'
        }
      },
      {
        path: 'material-management',
        component: () => import("@/views/modules/MaterialManagement"),
        meta: {
          name: '资料管理',
          icon: 'menu'
        }
      },
      {
        path: 'material-type',
        component: () => import("@/views/modules/MaterialType"),
        meta: {
          name: '资料类型',
          icon: 'menu'
        }
      }
    ]
  }
]