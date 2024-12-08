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
      label: '转出账户',
      prop: 'loginaccount',
    },
    {
      label: '转入账户',
      prop: 'depositMoney',
    },
    {
      label: '转入玩家',
      prop: 'withdrawMoney',
    },
    {
      label: '订单号',
      prop: 'computeMoney',
    },
    {
      label: '账变类型',
      prop: 'betmoney',
    },
    {
      label: '账变金额',
      prop: 'validbet',
    },
    {
      label: '账变时间',
      prop: 'reviseMoney',
    },
  ]
}
