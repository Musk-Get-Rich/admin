import {globalOption} from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  menu: false,
  columnBtn: false,
  refreshBtn: false,
  column: [
    {
      label: '有效会员',
      prop: 'validplayNum',
    },
    {
      label: '新用户',
      prop: 'registerNum',
    },
    {
      label: '活跃人数',
      prop: 'liveNum',
    },
    {
      label: '首充人数',
      prop: 'firstDepositCount',
    },
    {
      label: '存款人数',
      prop: 'depositNum',
    },
    {
      label: '投注人数',
      prop: 'betNum',
    }
  ]
}
