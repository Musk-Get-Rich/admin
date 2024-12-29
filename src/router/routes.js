const layout = () => import("@/views/layout/index.vue")

export const routes = [
  {
    path: '/',
    redirect: '/top/home'
  },
  // {
  //   path: '/template',
  //   component: layout,
  //   children: [
  //     {
  //       path: 'material-management',
  //       component: () => import("@/views/modules/MaterialType/index.vue"),
  //       meta: {
  //         name: '模板',
  //         inactiveIcon: 'Sidebar/home.png',
  //         activeIcon: 'Sidebar/home-1.png'
  //       }
  //     },
  //   ]
  // },
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
        component: () => import("@/views/modules/Announcement/index.vue"),
        meta: {
          name: '公告',
          inactiveIcon: 'Sidebar/Message24.png',
          activeIcon: 'Sidebar/Message25.png'
        },
      },
      {
        path: 'announcement/detail',
        name: 'announcementDetail',
        component: () => import("@/views/modules/Announcement/detail.vue"),
        meta: {
          hidden: true,
          name: '公告详情',
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
          auth: [1, 2],
          name: '下级管理',
          inactiveIcon: 'Sidebar/Group1.png',
          activeIcon: 'Sidebar/Group2.png'
        },
      },
      {
        path: 'invite',
        name: 'invite',
        component: () => import("@/views/modules/AgentInvite/index.vue"),
        meta: {
          auth: [3],
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
          auth: [1, 2, 3],
          name: '会员管理',
          inactiveIcon: 'Sidebar/2User.png',
          activeIcon: 'Sidebar/2User-1.png'
        },
      },
      {
        path: 'memberDeleteApply',
        name: 'memberDeleteApply',
        component: () => import("@/views/modules/MemberDeleteApply/index.vue"),
        meta: {
          auth: [3],
          name: '会员注销申请',
          inactiveIcon: 'Sidebar/ProfileDelete-2.png',
          activeIcon: 'Sidebar/ProfileDelete-3.png'
        },
      },
      {
        path: 'memberDeleteApply/records',
        name: 'memberDeleteApplyRecords',
        component: () => import("@/views/modules/MemberDeleteApply/records/index.vue"),
        meta: {
          hidden: true,
          auth: [3],
          name: '会员注销申请记录',
          inactiveIcon: 'Sidebar/ProfileDelete-2.png',
          activeIcon: 'Sidebar/ProfileDelete-3.png'
        },
      },
      {
        path: 'memberLineChange',
        name: 'memberLineChange',
        component: () => import("@/views/modules/MemberLineChange/index.vue"),
        meta: {
          auth: [3],
          name: '会员转线申请',
          inactiveIcon: 'Sidebar/user-square.png',
          activeIcon: 'Sidebar/user-square-1.png'
        },
      },
      {
        path: 'memberLineChange/records',
        name: 'memberLineChangeRecords',
        component: () => import("@/views/modules/MemberLineChange/records/index.vue"),
        meta: {
          hidden: true,
          auth: [3],
          name: '会员转线申请记录',
          inactiveIcon: 'Sidebar/user-square.png',
          activeIcon: 'Sidebar/user-square-1.png'
        },
      },
      {
        path: 'memberLevelChange',
        name: 'memberLevelChange',
        component: () => import("@/views/modules/MemberLevelChange/index.vue"),
        meta: {
          auth: [3],
          name: '会员调级申请',
          inactiveIcon: 'Sidebar/ProfileAdd-1.png',
          activeIcon: 'Sidebar/ProfileAdd-2.png'
        },
      },
      {
        path: 'memberLevelChange/records',
        name: 'memberLevelChangeRecords',
        component: () => import("@/views/modules/MemberLevelChange/records/index.vue"),
        meta: {
          hidden: true,
          auth: [3],
          name: '会员调级申请记录',
          inactiveIcon: 'Sidebar/ProfileAdd-1.png',
          activeIcon: 'Sidebar/ProfileAdd-2.png'
        },
      },
    ]
  },
  {
    type: 'divider',
    auth: [3],
  },
  {
    path: '/member',
    component: layout,
    meta: {
      title: '会员记录',
      auth: [3],
    },
    children: [
      {
        path: 'depositWithdrawalRecords',
        name: 'depositWithdrawalRecords',
        component: () => import("@/views/modules/DepositWithdrawalRecords"),
        meta: {
          auth: [3],
          name: '存提款记录',
          inactiveIcon: 'Sidebar/wallet.png',
          activeIcon: 'Sidebar/wallet-1.png'
        },
      },
      {
        path: 'gameReport',
        name: 'gameReport',
        component: () => import("@/views/modules/GameReport"),
        meta: {
          auth: [3],
          name: '游戏报表',
          inactiveIcon: 'Sidebar/game.png',
          activeIcon: 'Sidebar/game-1.png'
        },
      },
      {
        path: 'gameRecord',
        name: 'gameRecord',
        component: () => import("@/views/modules/GameRecord"),
        meta: {
          auth: [3],
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
          auth: [1, 2, 3],
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
          auth: [3],
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
          auth: [2, 3],
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
          auth: [2, 3],
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
          auth: [1, 2, 3],
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
          auth: [1, 2, 3],
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
          auth: [1, 2, 3],
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
          auth: [3],
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
          auth: [1, 2, 3],
          name: '每日数据报表',
          inactiveIcon: 'Sidebar/presention-chart.png',
          activeIcon: 'Sidebar/presention-chart-1.png'
        },
      },
      // {
      //   path: 'retentionReport',
      //   name: 'retentionReport',
      //   component: () => import("@/views/modules/RetentionReport"),
      //   meta: {
      //     auth: [1,2,3],
      //     name: '留存报表',
      //     inactiveIcon: 'Sidebar/chart-2.png',
      //     activeIcon: 'Sidebar/chart-3.png'
      //   },
      // },
    ]
  },
  {
    type: 'divider',
    auth: [3],
  },
  {
    path: '/promotion',
    component: layout,
    meta: {
      auth: [3],
      title: '推广专区',
    },
    children: [
      {
        path: 'promotionUrl',
        name: 'promotionUrl',
        component: () => import("@/views/modules/PromotionUrl"),
        meta: {
          auth: [3],
          name: '推广网址（会员）',
          inactiveIcon: 'Sidebar/link.png',
          activeIcon: 'Sidebar/link-1.png'
        },
      },
      {
        path: 'promotionMaterial',
        name: 'promotionMaterial',
        component: () => import("@/views/modules/PromotionMaterial"),
        meta: {
          auth: [3],
          name: '推广素材',
          inactiveIcon: 'Sidebar/gallery.png',
          activeIcon: 'Sidebar/gallery-1.png'
        },
      }
    ]
  },
  {
    type: 'divider'
  },
  {
    path: '/personalCenter',
    component: layout,
    meta: {
      title: '个人中心',
    },
    children: [
      {
        path: 'personalData',
        name: 'personalData',
        component: () => import("@/views/modules/PersonalData"),
        meta: {
          auth: [1, 2, 3],
          name: '个人资料',
          inactiveIcon: 'Sidebar/tag-user.png',
          activeIcon: 'Sidebar/tag-user-1.png'
        },
      },
      {
        path: 'contactUs',
        name: 'contactUs',
        component: () => import("@/views/modules/ContactUs"),
        meta: {
          auth: [1, 2, 3],
          name: '联系我们',
          inactiveIcon: 'Sidebar/device-message.png',
          activeIcon: 'Sidebar/device-message-1.png'
        },
      },
      {
        path: 'vipExclusive',
        name: 'vipExclusive',
        component: () => import("@/views/modules/VipExclusive"),
        meta: {
          auth: [1, 2, 3],
          name: 'VIP专享',
          inactiveIcon: 'Sidebar/crown.png',
          activeIcon: 'Sidebar/crown-1.png'
        },
      },
      {
        path: 'vipExclusive/detail',
        name: 'vipExclusiveDetail',
        component: () => import("@/views/modules/VipExclusive/detail.vue"),
        meta: {
          hidden: true,
          name: '活动详情',
          inactiveIcon: 'Sidebar/Message24.png',
          activeIcon: 'Sidebar/Message25.png'
        },
      },
      {
        path: 'commissionDescription',
        name: 'commissionDescription',
        component: () => import("@/views/modules/CommissionDescription"),
        meta: {
          auth: [1, 2, 3],
          name: '佣金说明',
          inactiveIcon: 'Sidebar/dollar-square.png',
          activeIcon: 'Sidebar/dollar-square-1.png'
        },
      },
      {
        path: 'helpCenter',
        name: 'helpCenter',
        redirectPath: '/helpCenter',
        meta: {
          auth: [1, 2, 3],
          name: '帮助中心',
          inactiveIcon: 'Sidebar/bookmark.png',
          activeIcon: 'Sidebar/bookmark-1.png'
        },
      },
    ]
  },
  {
    path: '/helpCenter',
    name: 'helpCenter',
    component: () => import("@/views/modules/HelpCenter"),
    meta: {
      auth: [1, 2, 3],
      name: '帮助中心',
      inactiveIcon: 'Sidebar/bookmark.png',
      activeIcon: 'Sidebar/bookmark-1.png',
      hidden: true,
    },
  }
]
