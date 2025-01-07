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
    {
      label: t('类型'),
      prop: 'employeepaymentname',
    },
    {
      label: t('时间'),
      prop: 'orderdate',
    },
    {
      label: t('单号'),
      prop: 'ordernumber',
    },
    {
      label: t('提款金额'),
      prop: 'orderamount',
      sortable: true,
    },
    {
      label: t('状态'),
      prop: 'orderstatus',
    },
  ]
}
