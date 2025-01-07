import {globalOption} from "@/config/tabOption.js";
import i18n from "@/i18n/index.js";

const t = i18n.global.t

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 10, // 搜索框宽度
  searchSpan: 6,
  searchBtn: false,
  emptyBtn: false,
  menuWidth: 80,
  expand: true,
  expandWidth: 1,
  expandRowKeys: [1],
  expandClassName: 'invisible',
  expandLabelClassName: 'invisible',
  rowKey: 'loginaccount',
  column: [
    {
      label: t('会员账号'),
      prop: 'loginaccount',
    },
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
      prop: 'computeMoney',
      sortable: true,
    },
    {
      label: t('投注金额'),
      prop: 'betmoney',
      sortable: true,
    },
    {
      label: t('有效投注额'),
      prop: 'validbet',
      sortable: true,
    },
    {
      label: t('其他'),
      prop: 'other',
    },
    {
      label: t('会员代存'),
      prop: 'escrow',
    },
  ]
}
