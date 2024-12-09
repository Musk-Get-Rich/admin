import {globalOption} from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 10, // 搜索框宽度
  searchSpan: 6,
  menu: false,
  column: [
    {
      label: '新增有效',
      prop: 'newplayvalid',
    },
    {
      label: '取款金额',
      prop: 'withdrawall',
    },
    {
      label: '净输赢',
      prop: 'profit',
    },
    {
      label: '上月结余',
      prop: 'bonusDetail',
    },
    {
      label: '佣金结算参考',
      prop: 'depositFee',
    },
    {
      label: '游戏输赢',
      prop: 'winlose',
    },
    {
      label: '返水',
      prop: 'fs',
    },
    {
      label: '可结佣金',
      prop: 'commissionday',
    },
    {
      label: '红利',
      prop: 'proamount',
    },
    {
      label: '平台费',
      prop: 'other',
    },
    {
      label: '存提手续费',
      prop: 'other',
    },
    {
      label: '佣金比例',
      prop: 'other',
    },
  ]
}
