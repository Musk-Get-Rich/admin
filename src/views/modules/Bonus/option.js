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
  menu: false,
  column: [
    // {
    //   label: t('转出账户'),
    //   prop: 'depositMoney',
    // },
    // {
    //   label: t('转入账户'),
    //   prop: 'depositMoney',
    // },
    {
      label: t('转入玩家'),
      prop: 'loginaccount',
    },
    {
      label: t('订单号'),
      prop: 'lsh',
    },
    // {
    //   label: t('账变类型'),
    //   prop: 'betmoney',
    // },
    {
      label: t('账变金额'),
      prop: 'paymoneyreal',
      sortable: true,
    },
    {
      label: t('账变时间'),
      prop: 'createtime',
    },
  ]
}
