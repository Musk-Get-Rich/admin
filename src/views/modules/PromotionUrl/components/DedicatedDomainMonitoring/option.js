import {globalOption} from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 10, // 搜索框宽度
  searchSpan: 6,
  searchBtn: false,
  emptyBtn: false,
  column: [
    {
      label: '域名',
      prop: 'loginaccount',
    },
    {
      label: '运行时间',
      prop: 'depositMoney',
    },
    {
      label: '响应码',
      prop: 'withdrawMoney',
    },
    {
      label: '响应时间',
      prop: 'computeMoney',
    },
    {
      label: '运行结果',
      prop: 'betmoney',
    },
    {
      label: '运行状态',
      prop: 'validbet',
    }
  ]
}
