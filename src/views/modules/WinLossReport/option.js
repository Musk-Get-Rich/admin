import {globalOption} from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 10, // 搜索框宽度
  searchSpan: 6,
  expand: true,
  expandWidth: 1,
  expandRowKeys: [1],
  expandClassName: 'invisible',
  expandLabelClassName: 'invisible',
  rowKey: 'loginaccount',
  menu: false,
  column: [
    {
      label: '存款金额',
      prop: 'depositMoney',
    },
    {
      label: '取款金额',
      prop: 'withdrawMoney',
    },
    {
      label: '净输赢',
      prop: 'profitLoss',
    },
    {
      label: '红利总计',
      prop: 'bonusDetail',
    },
    {
      label: '存取手续费',
      prop: 'depositFee',
    },
    {
      label: '平台费',
      prop: 'platFee',
    },
    {
      label: '会员代存',
      prop: 'escrow',
    },
    {
      label: '游戏输赢',
      prop: 'netMoney',
    },
    {
      label: '其它',
      prop: 'other',
    },
  ]
}
