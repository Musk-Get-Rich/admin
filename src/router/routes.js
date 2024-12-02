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
      {
        path: 'material-management',
        component: () => import("@/views/modules/MaterialType/index.vue"),
        meta: {
          name: '模板',
          icon: 'menu'
        }
      },
    ]
  },
]
