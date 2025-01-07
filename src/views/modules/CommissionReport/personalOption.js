import {globalOption} from "@/config/tabOption.js";
import i18n from "@/i18n/index.js";

const t = i18n.global.t

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 10, // 搜索框宽度
  searchSpan: 6,
  menu: false,
  column: [
    {
      label: t('月份'),
      prop: 'month',
    },
    {
      label: t('新增有效'),
      prop: 'newplayvalid',
    },
    // {
    //   label: t('取款金额'),
    //   prop: 'withdrawall',
    // },
    {
      label: t('游戏输赢'),
      prop: 'netamount',
      sortable: true,
    },
    // {
    //   label: '上月结余',
    //   prop: 'bonusDetail',
    // },
    // {
    //   label: '佣金结算参考',
    //   prop: 'depositFee',
    // },
    {
      label: t('返水'),
      prop: 'fs',
      sortable: true,
    },
    {
      label: t('红利'),
      prop: 'proamount',
      sortable: true,
    },
    {
      label: t('游戏费用'),
      prop: 'otherfee',
      sortable: true,
    },
    {
      label: t('支付费用'),
      prop: 'payfee',
      sortable: true,
    },
    {
      label: t('净输赢'),
      prop: 'profit',
      sortable: true,
    },
    {
      label: t('佣金'),
      prop: 'commissionday',
      sortable: true,
    },
    // {
    //   label: '存提手续费',
    //   prop: 'other',
    // },
    // {
    //   label: '佣金比例',
    //   prop: 'other',
    // },
  ]
}
