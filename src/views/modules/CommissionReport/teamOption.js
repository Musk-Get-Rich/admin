import {globalOption} from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 10, // 搜索框宽度
  searchSpan: 6,
  menu: false,
  index: true,
  column: [
    {
      label: '名字',
      prop: 'newplayvalid',
    },
    {
      label: '下级人数',
      prop: 'withdrawall',
    },
    {
      label: '活跃人数',
      prop: 'profit',
    },
    {
      label: '新注册',
      prop: 'bonusDetail',
    },
    {
      label: '新增首存',
      prop: 'depositFee',
    },
    {
      label: '新增有效',
      prop: 'winlose',
    },
    {
      label: '净输赢',
      prop: 'fs',
    },
    {
      label: '上月结余',
      prop: 'commissionday',
    },
    {
      label: '结算参考',
      prop: 'proamount',
    },
  ]
}
