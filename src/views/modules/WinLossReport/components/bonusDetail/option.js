import {globalOption} from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  menu: false,
  columnBtn: false,
  refreshBtn: false,
  column: [
    // {
    //   label: '手工红利',
    //   prop: 'bonus',
    // },
    // {
    //   label: '红包',
    //   prop: 'redPacket',
    // },
    {
      label: '代理彩金',
      prop: 'agentBonus',
    },
    {
      label: '邀请有奖',
      prop: 'inviteMoney',
    },
    // {
    //   label: 'VIP系统',
    //   prop: 'vipBonus',
    // },
    // {
    //   label: '合营代理成本',
    //   prop: 'platFee',
    // },
    {
      label: '彩金系统',
      prop: 'bonusSystem',
    },
    // {
    //   label: '存款优惠',
    //   prop: 'depositBonus',
    // },
    {
      label: '返水',
      prop: 'fs',
    }
  ]
}
