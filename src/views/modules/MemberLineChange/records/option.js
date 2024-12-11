import { globalOption } from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  searchMenuSpan: 10, // 搜索框宽度
  searchSpan: 6,
  rowKey: 'loginaccount',
  menu: false,
  column: [
    {
      label: '提交时间',
      prop: 'depositMoney',
    },
    {
      label: '用户名',
      prop: 'withdrawMoney',
    },
    {
      label: '昵称',
      prop: 'profitLoss',
    },
    {
      label: '注册时间',
      prop: 'bonusDetail',
    },
    {
      label: '状态',
      prop: 'depositFee',
    },
    {
      label: '审核备注',
      prop: 'platFee',
    }
  ]
}
