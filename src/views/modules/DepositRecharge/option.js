import {globalOption} from "@/config/tabOption.js";

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
      label: '日期',
      prop: 'loginaccount',
    },
    {
      label: '代理账号',
      prop: 'depositMoney',
    },
    {
      label: '单号',
      prop: 'withdrawMoney',
    },
    {
      label: '金额(HKD)',
      prop: 'computeMoney',
    },
    {
      label: '状态',
      prop: 'betmoney',
    },
    {
      label: '备注',
      prop: 'betmoney',
    },
  ]
}
