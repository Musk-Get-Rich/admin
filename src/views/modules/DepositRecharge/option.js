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
      label: t('日期'),
      prop: 'orderdate',
    },
    {
      label: t('代理账号'),
      prop: 'agentthreelevelname',
    },
    {
      label: t('单号'),
      prop: 'ordernumber',
    },
    {
      label: t('金额(CNY)'),
      prop: 'orderamount',
      sortable: true,
    },
    {
      label: t('状态'),
      prop: 'orderstatus',
    },
    {
      label: t('备注'),
      prop: 'employeepaymentname',
    },
  ]
}
