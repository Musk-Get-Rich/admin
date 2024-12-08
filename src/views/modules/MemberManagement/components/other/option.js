import {globalOption} from "@/config/tabOption.js";

export default {
  ...globalOption,
  stripe: false,
  menu: false,
  columnBtn: false,
  refreshBtn: false,
  column: [
    {
      label: '游戏输赢',
      prop: 'validplayNum',
    },
    {
      label: '备注',
      prop: 'registerNum',
    },
    {
      label: '红利总计',
      prop: 'liveNum',
    },
    {
      label: '平台费用',
      prop: 'firstDepositCount',
    },
    {
      label: '存款手续费',
      prop: 'depositNum',
    },
    {
      label: '取款手续费',
      prop: 'betNum',
    }
  ]
}
