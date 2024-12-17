import {globalOption} from "@/config/tabOption.js";
import i18n from "@/i18n/index.js";
const t = i18n.global.t

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
      label: t('活动优惠'),
      prop: 'agentBonus',
    },
    {
      label: t('邀请有奖'),
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
      label: t('VIP系统'),
      prop: 'bonusSystem',
    },
    // {
    //   label: '存款优惠',
    //   prop: 'depositBonus',
    // },
    {
      label: t('返水'),
      prop: 'fs',
    }
  ]
}
