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
        path: 'agent',
        name: 'agent',
        component: () => import("@/views/modules/AgentManagement"),
        meta: {
          name: '下级管理',
          inactiveIcon: 'Sidebar/Group1.png',
          activeIcon: 'Sidebar/Group2.png'
        },
      },
      {
        path: 'invate',
        name: 'invate',
        component: () => import("@/views/modules/AgentInvite/index.vue"),
        meta: {
          name: '下线（邀请有奖）',
          inactiveIcon: 'Sidebar/Group1.png',
          activeIcon: 'Sidebar/Group2.png'
        },
      },
      {
        path: 'membershipManagement',
        name: 'membershipManagement',
        component: () => import("@/views/modules/MemberManagement/index.vue"),
        meta: {
          name: '会员管理',
          inactiveIcon: 'Sidebar/2User.png',
          activeIcon: 'Sidebar/2User-1.png'
        },
      },
    ]
  },
  {
    type: 'divider'
  },
  {
    path: '/member',
    component: layout,
    meta: {
      title: '会员记录',
    },
    children: [
      {
        path: 'depositWithdrawalRecords',
        name: 'depositWithdrawalRecords',
        component: () => import("@/views/modules/DepositWithdrawalRecords"),
        meta: {
          name: '存提款记录',
          inactiveIcon: 'Sidebar/wallet.png',
          activeIcon: 'Sidebar/wallet-1.png'
        },
      },
      {
        path: 'gameRecords',
        name: 'gameRecords',
        component: () => import("@/views/modules/GameRecords"),
        meta: {
          name: '游戏记录',
          inactiveIcon: 'Sidebar/game.png',
          activeIcon: 'Sidebar/game-1.png'
        },
      }
    ]
  },
  {
    type: 'divider'
  },
  {
    path: '/report',
    component: layout,
    meta: {
      title: '财务中心',
    },
    children: [
      {
        path: 'withdrawalApplication',
        name: 'withdrawalApplication',
        component: () => import("@/views/modules/WithdrawalApplication"),
        meta: {
          name: '提现申请',
          inactiveIcon: 'Sidebar/card-send.png',
          activeIcon: 'Sidebar/card-send-1.png'
        },
      },
      {
        path: 'playerDeposit',
        name: 'playerDeposit',
        component: () => import("@/views/modules/PlayerDeposit"),
        meta: {
          name: '玩家代存',
          inactiveIcon: 'Sidebar/money-recive.png',
          activeIcon: 'Sidebar/money-recive-1.png'
        },
      },
      {
        path: 'depositRecharge',
        name: 'depositRecharge',
        component: () => import("@/views/modules/DepositRecharge"),
        meta: {
          name: '代存充值',
          inactiveIcon: 'Sidebar/money-change.png',
          activeIcon: 'Sidebar/money-change-1.png'
        },
      },
      {
        path: 'bonus',
        name: 'bonus',
        component: () => import("@/views/modules/Bonus"),
        meta: {
          name: '彩金赠送',
          inactiveIcon: 'Sidebar/Coins.png',
          activeIcon: 'Sidebar/Coins-1.png'
        },
      },
      {
        path: 'accountChangeDetails',
        name: 'accountChangeDetails',
        component: () => import("@/views/modules/AccountChangeDetails"),
        meta: {
          name: '账变明细',
          inactiveIcon: 'Sidebar/archive.png',
          activeIcon: 'Sidebar/archive-1.png'
        },
      },
    ]
  },
  {
    type: 'divider'
  },
  {
    path: '/report',
    component: layout,
    meta: {
      title: '报表中心',
    },
    children: [
      {
        path: 'winLossReport',
        name: 'winLossReport',
        component: () => import("@/views/modules/WinLossReport"),
        meta: {
          name: '输赢报表',
          inactiveIcon: 'Sidebar/chart.png',
          activeIcon: 'Sidebar/chart-1.png'
        },
      },
      {
        path: 'commissionReport',
        name: 'commissionReport',
        component: () => import("@/views/modules/CommissionReport"),
        meta: {
          name: '佣金报表',
          inactiveIcon: 'Sidebar/status-up.png',
          activeIcon: 'Sidebar/status-up-1.png'
        },
      },
      {
        path: 'membershipReport',
        name: 'membershipReport',
        component: () => import("@/views/modules/MembershipReport"),
        meta: {
          name: '会员报表',
          inactiveIcon: 'Sidebar/graph.png',
          activeIcon: 'Sidebar/graph-1.png'
        },
      },
      {
        path: 'dailyDatReport',
        name: 'dailyDatReport',
        component: () => import("@/views/modules/DailyDatReport"),
        meta: {
          name: '每日数据报表',
          inactiveIcon: 'Sidebar/presention-chart.png',
          activeIcon: 'Sidebar/presention-chart-1.png'
        },
      },
      {
        path: 'retentionReport',
        name: 'retentionReport',
        component: () => import("@/views/modules/RetentionReport"),
        meta: {
          name: '留存报表',
          inactiveIcon: 'Sidebar/chart-2.png',
          activeIcon: 'Sidebar/chart-3.png'
        },
      },
    ]
  }
]
