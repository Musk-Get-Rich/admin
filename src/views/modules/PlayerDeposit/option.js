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
      label: '会员账号',
      prop: 'loginaccount',
    },
    {
      label: '单号',
      prop: 'depositMoney',
    },
    {
      label: '金额',
      prop: 'withdrawMoney',
    },
    {
      label: '状态',
      prop: 'computeMoney',
    },
    {
      label: '备注',
      prop: 'betmoney',
    },
  ]
}
