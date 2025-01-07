import {globalOption} from "@/config/tabOption.js";
import i18n from "@/i18n/index.js";

const t = i18n.global.t

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 10, // 搜索框宽度
  searchSpan: 6,
  expand: true,
  expandWidth: 1,
  expandRowKeys: [1],
  expandClassName: 'invisible',
  expandLabelClassName: 'invisible',
  rowKey: 'loginaccount',
  menu: false,
  column: [
    {
      label: t('存款金额'),
      prop: 'depositMoney',
      sortable: true,
    },
    {
      label: t('取款金额'),
      prop: 'withdrawMoney',
      sortable: true,
    },
    {
      label: t('净输赢'),
      prop: 'profitLoss',
      sortable: true,
    },
    {
      label: t('红利总计'),
      prop: 'activityMoney',
      sortable: true,
    },
    {
      label: t('存取手续费'),
      prop: 'depositFee',
      sortable: true,
    },
    {
      label: t('平台费'),
      prop: 'platFee',
      sortable: true,
    },
    {
      label: t('会员代存'),
      prop: 'escrow',
    },
    {
      label: t('游戏输赢'),
      prop: 'netMoney',
      sortable: true,
    },
    {
      label: t('其它'),
      prop: 'other',
    },
  ]
}
