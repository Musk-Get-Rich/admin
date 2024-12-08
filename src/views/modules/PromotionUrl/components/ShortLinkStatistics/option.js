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
      label: '短链接',
      prop: 'loginaccount',
    },
    {
      label: '长链接',
      prop: 'depositMoney',
    },
    {
      label: '独立IP',
      prop: 'withdrawMoney',
    },
    {
      label: '移动端访问量',
      prop: 'computeMoney',
    },
    {
      label: 'PC端访问量',
      prop: 'betmoney',
    },
    {
      label: 'Chrome访问量',
      prop: 'validbet',
    },
    {
      label: 'Safari访问量',
      prop: 'reviseMoney',
    },
    {
      label: '访问次数',
      prop: 'escrow',
    },
  ]
}
