const layout = () => import("@/views/layout/index.vue")

export const routes = [
  {
    path: '/',
    redirect: '/top/home'
  },
  {
    path: '/template',
    component: layout,
    children: [
      {
        path: 'material-management',
        component: () => import("@/views/modules/MaterialType/index.vue"),
        meta: {
          name: '模板',
          inactiveIcon: 'Sidebar/home.png',
          activeIcon: 'Sidebar/home-1.png'
        }
      },
    ]
  },
  {
    path: '/top',
    component: layout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import("@/views/modules/dashBoard/index.vue"),
        meta: {
          name: '首页',
          inactiveIcon: 'Sidebar/home.png',
          activeIcon: 'Sidebar/home-1.png'
        },
      },
      {
        path: 'announcement',
        name: 'announcement',
        component: () => import("@/views/modules/dashBoard/index.vue"),
        meta: {
          name: '公告',
          inactiveIcon: 'Sidebar/Message24.png',
          activeIcon: 'Sidebar/Message25.png'
        },
      },
    ]
  },
  {
    type: 'divider'
  },
  {
    path: '/managementCenter',
    component: layout,
    meta: {
      title: '管理中心',
    },
    children: [
      {
        path: 'subordinate',
        name: 'subordinate',
        component: () => import("@/views/modules/AgentManagement"),
        meta: {
          name: '下级管理',
          inactiveIcon: 'Sidebar/Group1.png',
          activeIcon: 'Sidebar/Group2.png'
        },
      },
      {
        path: 'membershipManagement',
        name: 'membershipManagement',
        component: () => import("@/views/modules/dashBoard/index.vue"),
        meta: {
          name: '会员管理',
          inactiveIcon: 'Sidebar/2User.png',
          activeIcon: 'Sidebar/2User-1.png'
        },
      },
    ]
  }
]
