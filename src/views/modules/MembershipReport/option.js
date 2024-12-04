import {globalOption} from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 10, // 搜索框宽度
  searchSpan: 6,
  menu: false,
  column: [
    {
      label: '会员账号',
      prop: 'loginaccount',
      search: true,
      searchPlaceholder: '请输入会员账号',
      searchSpan: 5
    },
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
      prop: 'computeMoney',
    },
    {
      label: '投注金额',
      prop: 'betmoney',
    },
    {
      label: '有效投注额',
      prop: 'validbet',
    },
    {
      label: '其他',
      prop: 'reviseMoney',
    },
    {
      label: '会员代存',
      prop: 'escrow',
    },
  ]
}
